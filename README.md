# Suntar Bhavan, Palitana

Independent website for Suntar Bhavan, a Jain dharamshala on Hastgiri Road near Taleti in
Palitana, Gujarat.

## Website

The site includes:

- Responsive homepage with image sliders
- AC and non-AC room information
- Jain Bhojanshala timings
- Facilities and property gallery
- Visit, directions, and WhatsApp enquiry actions
- Standalone routes for every main section

All website images are stored locally under `public/images`. The production site does not rely
on an external site builder, asset proxy, telemetry script, or hosted design platform.

## Local development

Requirements: Node.js 22 or newer.

```sh
npm install
npm run dev
```

## Verification

```sh
npm run build
npm test
```

The production build targets Cloudflare through Nitro and can be adapted to another Nitro preset
when the hosting destination changes.
