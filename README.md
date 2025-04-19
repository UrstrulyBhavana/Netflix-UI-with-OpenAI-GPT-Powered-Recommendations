# 🎮 Netflix GPT: Movie Explorer App with GPT Integration

## 🌟 Overview

Netflix GPT is an intelligent movie browsing platform that combines a Netflix-style UI with OpenAI-powered recommendations. It enables users to log in securely, browse curated genres from TMDB, watch trailers, and search for movie suggestions using ChatGPT. Built with React, Redux Toolkit, Firebase Authentication, TailwindCSS, and AOS animations, this responsive app is a fully functional movie recommendation engine.

---

## ✨ Features

- 🔐 **Firebase Authentication** – Secure user sign-up, login, and logout functionality
- 🧠 **GPT Integration** – OpenAI-powered movie suggestions based on user prompts
- 🎮 **Now Playing Hero Section** – Highlights featured movies with background video and title
- 🗂️ **Genre-Based Rows** – Dynamically fetched sections like Trending, Top Rated, Upcoming, Horror, etc.
- 🔎 **Search Functionality** – GPT Search Bar for AI-assisted movie discovery
- 🗃️ **Modal Popups** – Detailed movie info with title, overview, poster, and release date
- 🧱 **Shimmer Loading Effect** – Placeholder loading components for better UX
- 🌐 **Multi-Language Support** – Switch languages for GPT input and placeholder text
- 🎨 **TailwindCSS Styling** – Responsive, dark-themed layout optimized for all screen sizes
- 💫 **AOS Animations** – Smooth UI transitions on scroll
- 🔄 **Redux Store** – Organized global state for user info, movie lists, GPT results
- 🧾 **Error Handling** – Displays loading states, empty states, and fallback messages
- 📆 **Environment-Safe API Keys** – TMDB & OpenAI keys managed via `.env`

---

## 🛠️ Built With

### 📚 Technologies Used

![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)

![Redux Toolkit](https://img.shields.io/badge/Redux--Toolkit-purple?style=flat)

![Firebase](https://img.shields.io/badge/Firebase-ffca28?style=flat&logo=firebase&logoColor=black)

![OpenAI](https://img.shields.io/badge/OpenAI-412991?style=flat&logo=openai&logoColor=white)

![TMDB](https://img.shields.io/badge/TMDB-01b4e4?style=flat&logoColor=white)

![TailwindCSS](https://img.shields.io/badge/TailwindCSS-06B6D4?style=flat&logo=tailwindcss&logoColor=white)

![AOS](https://img.shields.io/badge/AOS-Animations-green?style=flat)

![Netlify](https://img.shields.io/badge/Hosted_on-Netlify-00C7B7?style=flat)

---

## 📁 Folder Structure

```bash
NetflixGPT/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Body.js
│   │   ├── Browse.js
│   │   ├── Header.js
│   │   ├── Footer.js
│   │   ├── Login.js
│   │   ├── MainContainer.js
│   │   ├── SecondaryContainer.js
│   │   ├── MovieCard.js
│   │   ├── MovieList.js
│   │   ├── GptSearch.js
│   │   ├── GptSearchBar.js
│   │   ├── GptMovieSuggestions.js
│   │   ├── VideoBackground.js
│   │   └── VideoTitle.js
│   ├── hooks/
│   │   ├── useNowPlayingMovies.js
│   │   ├── usePopularMovies.js
│   │   └── ...others by genre
│   ├── utils/
│   │   ├── firebase.js
│   │   ├── openai.js
│   │   ├── constants.js
│   │   ├── languageConstants.js
│   │   ├── validate.js
│   │   └── appStore.js
│   ├── redux/
│   │   ├── userSlice.js
│   │   ├── moviesSlice.js
│   │   └── gptSlice.js
│   ├── App.js
│   ├── index.css
│   └── index.js
├── .env
├── firebase.json
└── package.json
```

---


## 📝 Project Demonstration

```
How it Works:

✔️  Users can sign up/sign in using Firebase Authentication.
✔️  Browse movies dynamically fetched from TMDB API (Now Playing, Popular, etc.).
✔️  View a fullscreen trailer of the featured movie on the homepage.
✔️  Use the GPT search bar to get AI-powered movie recommendations.
✔️  GPT results are fetched via OpenAI and displayed in grouped rows.
✔️  Switch GPT input language dynamically via the language dropdown.
✔️  Click on movie cards to open modals with title, poster, overview, and release date.
✔️  Shimmer loaders provide a smooth UI experience during data fetch.
✔️  Responsive UI built using TailwindCSS for all screen sizes.
✔️  AOS animations used for visual polish and subtle transitions.
✔️  API keys (TMDB & OpenAI) secured using .env file.
```
---

## 🔧 Installation

```bash
# Clone the repository
git clone https://github.com/UrstrulyBhavana/Netflix-GPT.git
cd Netflix-GPT

# Install dependencies
npm install

# Start development
npm start

# Build for production
npm run build
```

---

## 📹 Demo

*(Insert video link here)*

---

## 🔑 API References

- [TMDB API](https://developer.themoviedb.org/docs)
- [OpenAI API](https://platform.openai.com/docs/)

---

## 👥 Contributors

Developed & maintained by [Bhavana Linga](https://github.com/UrstrulyBhavana) 🌸

---

## 📩 Contact

For queries or suggestions, email: **urstrulybhavana1432@gmail.com**

---

## 📄 License

This project is licensed under the **MIT License**.

