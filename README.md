# DLMC Camera Finder

A responsive app that helps users choose a camera from the Colgate Digital Learning & Media Center lending pool.

## Features

- Recommendations by project type and camera experience
- Searchable catalog of 31 camera choices
- Filter for documented 4K recording
- Compare up to three cameras side by side
- Model details, source notes, and matching equipment-manual links

## Run locally

This is a static app with no build step or dependencies to install.

```sh
python3 -m http.server 8000
```

Open http://localhost:8000 in your browser.

## Files

- `index.html`: application layout
- `styles.css`: responsive styling
- `app.js`: recommendations, filters, comparison, and details
- `data.js`: camera catalog and documented specifications

## Data and availability

The catalog uses the supplied DLMC DSLR + Lens Guide and historical resource-usage report covering October 1, 2020 through October 1, 2026. Supplementary specifications come from Canon for the EOS 90D and Zoom for the Q8n-4K. Manual links come from the [DLMC equipment-manuals index](https://lai.colgate.domains/dlmc/equipment-manuals/).

Historical item records do not establish current availability. Users must confirm availability, eligibility, and kit contents with DLMC. Undocumented specifications are labeled, and the 4K filter excludes unverified models.

Recommendations are editorial guidance based on camera type and documented specifications. There is no live booking integration.

The interface loads optional Google Fonts with system-font fallbacks. Camera preference tools are exposed when the browser supports WebMCP.

## Hosted version

The original [Sites version](https://dlmc-camera-finder.asmith3colgate.chatgpt.site/) is private to its owner. This repository contains the standalone static app.
