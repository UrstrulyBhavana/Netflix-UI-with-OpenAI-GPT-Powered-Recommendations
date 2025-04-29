# 🎬 Netflix GPT 🎥 | AI Movie Recommender (GPT Integration) + Streaming UI 

## 📽️ Watch Full Demo on YouTube

[![Netflix GPT Demo](https://your-github-uploaded-image-link.webp)](https://youtu.be/AqPCNt6xmXY)

> 🚀 Click the image above to watch Netflix GPT in action!


## 🌟 Overview

Netflix GPT is an intelligent movie browsing platform that combines a Netflix-style UI with OpenAI-powered recommendations. It enables users to log in securely, browse curated genres from TMDB, watch trailers, and search for movie suggestions using ChatGPT. Built with React, Redux Toolkit, Firebase Authentication, TailwindCSS, and AOS animations, this responsive app is a fully functional movie recommendation engine.

---

> ⚠️ **IMPORTANT NOTE: GPT Search Feature Requires Your Own API Key**

🚫 This project includes a GPT-powered search feature using the OpenAI API.  
However, the **original API key has been removed** to avoid unauthorized usage and billing issues, since it was linked to a paid account.

❌ As a result, GPT Search will **not work** out-of-the-box in this repository or deployed demo.

🔑 To use GPT Search in your local or deployed version:
1. Create a billing account: [OpenAI Billing](https://platform.openai.com/account/billing)
2. Generate your own API Key: [OpenAI API Keys](https://platform.openai.com/account/api-keys)
3. Add it to a `.env` file in this format:
```env
REACT_APP_OPENAI_KEY=your_openai_key_here
```

🎬 The GPT feature is fully demonstrated in the project video.  
To experience it yourself, follow the above steps and add your own key.

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

## 💻 Installation

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

## 🔗 API Reference

- [TMDB API](https://developer.themoviedb.org/docs)
- [OpenAI API](https://platform.openai.com/docs/)

---

🙋‍♀️ Author
Linga Bhavana – Frontend Developer

GitHub | urstrulybhavana1432@gmail.com

---


📬 **Contact**

For questions or suggestions, feel free to reach out:

- 📧 **Email**: [urstrulybhavana1432@gmail.com](mailto:urstrulybhavana1432@gmail.com)  
- 🐙 **GitHub**: [UrstrulyBhavana](https://github.com/UrstrulyBhavana)


---

📜 License

This project is licensed under the MIT License. See the `LICENSE` file for details.

