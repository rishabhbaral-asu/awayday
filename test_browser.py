"""Tiny dependency-light smoke test for a running local AWAYDAY page.

Usage: start Chrome with remote debugging, then run this file. It is not needed by
the game or by GitHub Pages; it just exercises the main interaction path.
"""

import json
import base64
import time
import urllib.request
from pathlib import Path

import websocket


def evaluate(socket, counter, expression):
    socket.send(json.dumps({
        "id": counter,
        "method": "Runtime.evaluate",
        "params": {"expression": expression, "returnByValue": True},
    }))
    while True:
        message = json.loads(socket.recv())
        if message.get("id") == counter:
            result = message["result"]["result"]
            if result.get("subtype") == "error":
                raise RuntimeError(result.get("description", "Browser evaluation failed"))
            return result.get("value")


def command(socket, counter, method, params=None):
    socket.send(json.dumps({"id": counter, "method": method, "params": params or {}}))
    while True:
        message = json.loads(socket.recv())
        if message.get("id") == counter:
            return message.get("result", {})


with urllib.request.urlopen("http://127.0.0.1:9223/json", timeout=3) as response:
    tabs = json.load(response)

page = next(tab for tab in tabs if tab["type"] == "page" and "127.0.0.1:8000" in tab["url"])
socket = websocket.create_connection(page["webSocketDebuggerUrl"], timeout=4)

try:
    command(socket, 20, "Emulation.setDeviceMetricsOverride", {"width": 1200, "height": 900, "deviceScaleFactor": 1, "mobile": False})
    evaluate(socket, 24, "location.reload()")
    time.sleep(0.6)
    evaluate(socket, 1, "document.querySelector('#play-btn').click()")
    time.sleep(0.4)
    game = evaluate(socket, 2, "({screen: state.screen, rounds: state.rounds.length, clueCount: document.querySelectorAll('#clue-list li').length})")
    assert game == {"screen": "game", "rounds": 5, "clueCount": 1}, game

    evaluate(socket, 3, """
      (() => {
        const map = document.querySelector('#world-map');
        if (window.L && leafletMap) {
          leafletMap.fire('click', { latlng: L.latLng(10, 20) });
        } else {
          const box = map.getBoundingClientRect();
          map.dispatchEvent(new MouseEvent('click', {
            bubbles: true,
            clientX: box.left + box.width * 0.55,
            clientY: box.top + box.height * 0.4
          }));
        }
        return document.querySelector('#lock-guess-btn').disabled;
      })()
    """)
    map_shot = command(socket, 26, "Page.captureScreenshot", {"format": "png", "captureBeyondViewport": False})
    Path("/private/tmp/awayday-map.png").write_bytes(base64.b64decode(map_shot["data"]))
    evaluate(socket, 4, "document.querySelector('#lock-guess-btn').click()")
    time.sleep(0.7)
    result = evaluate(socket, 5, "({screen: state.screen, results: state.results.length, hasCard: Object.keys(state.collection).length > 0, score: state.total, focus: document.activeElement.id, outline: getComputedStyle(document.activeElement).outline})")
    assert result["screen"] == "result", result
    assert result["results"] == 1 and result["hasCard"], result
    assert isinstance(result["score"], int), result
    screenshot = command(socket, 21, "Page.captureScreenshot", {"format": "png", "captureBeyondViewport": False})
    Path("/private/tmp/awayday-reward.png").write_bytes(base64.b64decode(screenshot["data"]))
    evaluate(socket, 22, "document.querySelector('.collection-link').click(); document.querySelector('.vault-heading').scrollIntoView()")
    time.sleep(0.4)
    vault = evaluate(socket, 25, "({count: document.querySelectorAll('.frame-sample').length, broken: [...document.querySelectorAll('.frame-sample img')].filter(image => !image.complete || image.naturalWidth === 0).length})")
    assert vault == {"count": 31, "broken": 0}, vault
    vault_shot = command(socket, 23, "Page.captureScreenshot", {"format": "png", "captureBeyondViewport": False})
    Path("/private/tmp/awayday-vault.png").write_bytes(base64.b64decode(vault_shot["data"]))
    print("AWAYDAY browser smoke test passed:", result)
finally:
    socket.close()
