# Flixora MovieDB Explorer

A movie discovery web app built with **React + Vite** and styled with **Tailwind CSS**, using **JavaScript**. It lets users search and browse movies via **The Movie Database (TMDB) API**, and save favorites to a personal watchlist powered by **Appwrite**, Trakt-style.


![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black)

![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white)

![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

![Appwrite](https://img.shields.io/badge/Appwrite-FD366E?style=flat&logo=appwrite&logoColor=white)

![License](https://img.shields.io/badge/license-MIT-green)

---

## ✨ Features

- 🎬 Search and browse movies using the TMDB API
- ⭐ Save/remove favorite movies to a personal list (Trakt-style tracking)
- 📱 Responsive UI built with Tailwind CSS
- ⚡ Fast dev environment and builds with Vite
- 🖼️ Movie details view (synopsis, rating, release date, poster)
- 🔍 Debounced search input for smoother API usage

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React | UI library |
| Vite | Build tool and dev server |
| JavaScript | Core language |
| Tailwind CSS | Utility-first styling |
| TMDB API | Movie data source |
| Appwrite | Backend-as-a-service (Database) for storing favorites |

---

## 📦 Getting Started

### Prerequisites

- Node.js >= 18
- npm, yarn, or pnpm
- A TMDB API key (https://www.themoviedb.org/settings/api)
- An Appwrite project (self-hosted or Appwrite Cloud)

### Development

```
npm run dev
```

Open http://localhost:5173 in your browser to see the result.

### Build for production

```
npm run build
npm run preview
```

---

## 🎬 TMDB API

This project uses the TMDB REST API to fetch:
- Trending/popular movies
- Search results by title
- Movie details, cast, and images

Get your API key at https://www.themoviedb.org/settings/api and add it to `.env`.

---

## 🚀 Deployment

This project can be deployed on any static hosting provider (Vercel, Netlify, Cloudflare Pages):

```
npm run build
```

Then upload the contents of the `dist/` folder. Remember to set the environment variables in your hosting provider's dashboard.


---

## 📄 License

This project is licensed under the MIT License. See the LICENSE file for details.

---

## 📬 Contact

Have questions or feedback? Reach out via GitHub issues or the repository's discussion tab.