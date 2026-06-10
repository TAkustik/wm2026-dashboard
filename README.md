# ⚽ WM 2026 Dashboard

Ein interaktives Live-Dashboard für die FIFA Fußball-Weltmeisterschaft 2026 in den USA, Kanada und Mexiko.

**→ [Live Demo](https://takustik.github.io/wm2026-dashboard)**

---

## Features

- 📅 Vollständiger Spielplan mit lokaler Zeitumrechnung (je nach gewähltem Land)
- ⭐ Favoriten-Tab mit Countdown zum nächsten Spiel deines Teams
- 🏆 Gruppen A–L mit Live-Tabellen
- 🌳 Gespiegelter Turnierbaum — befüllt sich automatisch aus der Gruppenphase
- 📺 TV-Sender-Infos für Deutschland (ARD/ZDF/MagentaTV) und weitere Länder
- 🔴 Live-Scores via GitHub Actions (alle 5 Minuten aktualisiert)
- 🌍 6 Sprachen (DE, EN, FR, ES, NL, PT)
- 📱 Optimiert für Home Assistant Dashboards & Wandtablets

## Home Assistant Integration

Die Seite lässt sich direkt als `webpage`-Card in Home Assistant einbinden:

```yaml
type: iframe
url: https://takustik.github.io/wm2026-dashboard/?country=DE&lang=de
aspect_ratio: 100%
```

## Entwickelt von

[@TAkustik](https://github.com/TAkustik) — falls dir das Projekt gefällt:

[![Buy me a coffee](https://img.shields.io/badge/Buy%20me%20a%20coffee-☕-yellow)](https://www.buymeacoffee.com)

## Lizenz

MIT License — Nutzung und Weiterentwicklung erlaubt, Nennung des Urhebers erwünscht.
