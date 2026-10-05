<div align="center">

<a href="https://excalidraw.com/" target="_blank" rel="noopener">
  <picture>
    <source media="(prefers-color-scheme: dark)" alt="Excalidraw" srcset="https://excalidraw.nyc3.cdn.digitaloceanspaces.com/github%2FExcalidraw_Github_cover_dark.png" />
    <img alt="Excalidraw" src="https://excalidraw.nyc3.cdn.digitaloceanspaces.com/github%2FExcalidraw_Github_cover.png" width="800" />
  </picture>
</a>

# Excalidraw

### Virtual whiteboard for sketching hand-drawn like diagrams with end-to-end encryption.

[![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=black)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-4.9-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Canvas API](https://img.shields.io/badge/Canvas-Rough.js-EA4335?style=flat-square&logo=html5&logoColor=white)](https://roughjs.com/)
[![E2E Encryption](https://img.shields.io/badge/Security-E2E%20Encrypted-4CAF50?style=flat-square&logo=letsencrypt&logoColor=white)](https://excalidraw.com)
[![PWA](https://img.shields.io/badge/PWA-Offline%20First-5A0FC8?style=flat-square&logo=pwa&logoColor=white)](https://web.dev/progressive-web-apps/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](./LICENSE)

[**Live Editor**](https://excalidraw.com) • [**Documentation**](https://docs.excalidraw.com) • [**Blog**](https://blog.excalidraw.com) • [**Excalidraw+**](https://plus.excalidraw.com)

</div>

---

## 🎨 Overview

**Excalidraw** is an open-source virtual hand-drawn style whiteboard that lets you easily sketch diagrams, wireframes, flowcharts, architecture plans, and freeform sketches with a warm, organic feel. Designed with an offline-first architecture, end-to-end encrypted real-time collaboration, and zero external runtime dependencies on canvas rendering, it is the industry-standard visual collaboration tool used by engineers at Google, Meta, Notion, and beyond.

---

## ✨ Features

- ✍️ **Hand-Drawn Aesthetic**: Procedural sketch style powered by [Rough.js](https://roughjs.com/) with customizable stroke width, slopiness, fill style, and rough edges.
- 🔒 **End-to-End Encryption**: Real-time room collaboration encrypted client-side; server never sees your drawing keys.
- 📡 **Offline-First PWA**: Fully functional offline with IndexedDB local persistence and Service Worker caching.
- 📦 **Embeddable NPM Component**: Drop `<Excalidraw />` directly into any React application with zero friction.
- 🔄 **Smart Arrow-Binding**: Arrows dynamically track and bind to shapes, cards, and text boxes as you move them.
- 🖼️ **Multi-Format Export**: Export boards directly to vector SVG, high-resolution PNG, or native `.excalidraw` JSON.
- 🌍 **Internationalization (i18n)**: Translated into 40+ languages with automated community localization.
- 🗂️ **Custom Libraries**: Browse and install community icon and UI component libraries with 1-click.

---

## 🚀 Quickstart

Run Excalidraw locally in 3 steps:

### 1. Clone the repository
```bash
git clone https://github.com/aeskafi/excalidraw.git
cd excalidraw
```

### 2. Install dependencies
```bash
yarn install
```

### 3. Launch development server
```bash
yarn start
```
The application will open automatically at [http://localhost:3000](http://localhost:3000).

---

## 🛠️ Embedding in Your React App

```bash
npm install react react-dom @excalidraw/excalidraw
# or
yarn add react react-dom @excalidraw/excalidraw
```

```tsx
import React, { useState } from "react";
import { Excalidraw } from "@excalidraw/excalidraw";

export default function App() {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <Excalidraw />
    </div>
  );
}
```

---

## 🏗️ Architecture & Scripts

| Command | Description |
| :--- | :--- |
| `yarn start` | Runs local dev server on port 3000 with HMR |
| `yarn build` | Produces optimized production bundle in `build/` |
| `yarn test:typecheck` | Verifies full TypeScript typing |
| `yarn test:app` | Executes Jest test suites across components & math modules |
| `yarn test:code` | Runs ESLint analysis across TypeScript/TSX code |

---

## 👥 Credits & Mission

- **Original Project**: Created with love by the [Excalidraw Core Team and Contributors](https://github.com/excalidraw/excalidraw).
- **Curation & Modernization**: Maintained and curated by **[Arham Eskafi](https://arham.dev)** — Rapid MVP Specialist, Full-Stack Architect, and creator of **[Walk Cook Live](https://youtube.com/@walkcooklive)**, documenting overland nomadic adventures and cutting-edge software engineering across the globe.

---

## 📄 License

This project is licensed under the [MIT License](./LICENSE).
