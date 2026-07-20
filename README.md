# AWAYDAY

A zero-backend football geography game built for GitHub Pages.

Players study an original matchday illustration and a set of location clues, place a pin on a real interactive map, and unlock a collectible footballer card whose rarity depends on their accuracy. A five-round game scores up to 25,000 points.

## Run locally

You can open `index.html` directly, or serve the folder:

```bash
python3 -m http.server 8000 --directory awayday
```

Then visit `http://localhost:8000`.

## Publish on GitHub Pages

1. Put the contents of this folder at the root of a GitHub repository (or keep it in `/awayday` and configure a deployment action).
2. Open **Settings → Pages** in the repository.
3. Set the publishing source to **GitHub Actions**.
4. Push to `main`; the included workflow publishes the site automatically.

No build step, API key, database, or package manager is required.

The map uses Leaflet 1.9.4 with standard OpenStreetMap tiles and visible attribution. It requests only the tiles a player actively views. If Leaflet or the tile service is unavailable, AWAYDAY automatically retains its local vector-world-map fallback.

## Product shape

- Five random destinations per match
- Twelve locally bundled cinematic matchday illustrations
- Interactive Leaflet/OpenStreetMap geography with a local SVG fallback
- Three clue levels with a score tradeoff
- Haversine distance scoring
- Four card rarities
- 31 locally bundled card-frame designs with a selectable frame vault
- Locally bundled 4×3 country flags and club/national-team badges
- Twelve-city local card album
- Personal best and collection saved in `localStorage`
- Responsive mouse, touch and keyboard controls

The collectible set uses real footballers connected to each destination and identifies an associated real club in text, but all ratings are original game values. National flags, card frames, and the specific club/national-team badges used by the game are bundled locally under `assets/`, so repository-scoped GitHub Pages deployments do not depend on cross-site image requests. The transparent card-frame PNGs are composed with responsive HTML text and artwork; the frame vault lets a player equip any design for the next signing. The project does not use player photos or likenesses, league marks, official statistics, or scraped databases. It is an unofficial, non-commercial fan prototype and is not endorsed by any featured player, club, league, federation, game publisher, or asset source.

Player names, biographical associations, and football badges can involve publicity, trademark, copyright, and database rights in some jurisdictions. Before monetizing or distributing the game commercially, obtain legal advice and the appropriate player, club, competition, badge, and data licences. See [`THIRD_PARTY_NOTICES.md`](THIRD_PARTY_NOTICES.md) for asset sources and notices.
