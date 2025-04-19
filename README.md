# 📺 React Netflix GPT App with Firebase Auth & AI Search 💡

#### An AI-powered movie recommendation platform inspired by Netflix's interface. Users can sign in, explore genre-based movie sections, and interact with an integrated GPT-based movie search system powered by OpenAI and TMDB APIs.

---

## ✨ Features

- 🔐 **Firebase Auth**: Login, Signup, and Profile with Firebase Authentication
- 🧠 **GPT Integration**: Smart movie recommendations using `OpenAI GPT 3.5 Turbo`
- 📺 **TMDB API**: Fetching genre-based movies, trailers, posters, ratings, and descriptions
- 📜 **Multilingual Support**: English, Hindi, and Spanish (Dynamic GPT UI Translation)
- 🧰 **Redux Store**: Centralized state management with multiple slices
- 📦 **Modular Hooks**: Custom hooks for each movie genre (14+ Hooks)
- 📽️ **YouTube Trailer Background**: Movie trailer autoplaying in the background
- 🎥 **Clickable Movie Cards**: Opens Modal with movie description, poster & release info
- 🌐 **Routing & Navigation**: React Router-based login and browse views
- 🎨 **TailwindCSS Styling**: Beautifully styled with animations, shadows, and gradients
- 🎭 **Shimmer Loading Effects**: Improved UI experience during data fetching
- 🦾 **Fully Responsive**: Clean layout across screen sizes (desktop-first)
- 🚫 **.env secured**: Environment variables kept safe

---


## 🛠️ Tech Stack

| Frontend      | State Mgmt     | Backend & APIs    | Styling        | Deployment |
|---------------|----------------|-------------------|----------------|------------|
| ![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB) | ![Redux](https://img.shields.io/badge/Redux-593D88?style=flat&logo=redux&logoColor=white) | ![Firebase](https://img.shields.io/badge/Firebase-ffca28?style=flat&logo=firebase&logoColor=black) | ![TailwindCSS](https://img.shields.io/badge/TailwindCSS-06B6D4?style=flat&logo=tailwindcss&logoColor=white) | ![Vercel](https://img.shields.io/badge/Vercel-000?style=flat&logo=vercel&logoColor=white) |
| ![OpenAI](https://img.shields.io/badge/OpenAI-412991?style=flat&logo=openai&logoColor=white) | ![RTK](https://img.shields.io/badge/Redux_Toolkit-purple?style=flat) | ![TMDB](https://img.shields.io/badge/TMDB-01b4e4?style=flat&logoColor=white) | ![AOS](https://img.shields.io/badge/AOS-Animation-green?style=flat) | ![Firebase Hosting](https://img.shields.io/badge/Hosted_on-Firebase-yellow?style=flat) |

---


## 📂 Folder Structure (Simplified)

```bash
src/
├── components/          # UI Components
├── hooks/               # Custom Hooks (e.g. API fetches)
├── utils/               # Redux slices, constants, firebase, OpenAI config
├── App.js
├── index.js
└── index.css
```

---

## 🔧 Installation & Setup

```bash
# 1. Clone the repo
$ git clone https://github.com/your-username/netflix-gpt.git
$ cd netflix-gpt

# 2. Install dependencies
$ npm install

# 3. Create .env file
$ touch .env

# 4. Add your API keys
REACT_APP_TMDB_KEY=your_tmdb_key_here
REACT_APP_OPENAI_KEY=your_openai_key_here

# 5. Start the app
$ npm start
```

> 🔑 You'll need valid API keys from [TMDB](https://developer.themoviedb.org/) and [OpenAI](https://platform.openai.com/).

---

## 🧠 GPT Integration Prompt Example

```js
Act as a Movie Recommendation system and suggest some movies for the query: action-comedy.
Only give me names of 5 movies, comma separated.
Example: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya
```

These results are then fetched from TMDB based on names and rendered beautifully.

---


## 🖼️ Demo :-



---

## 🧑‍💻 Developer

- 👩‍💻 Built by **Bhavana** with ❤️
- 🌐 Powered by TMDB & OpenAI
- ✨ Find me on [GitHub](https://github.com/your-github) & [LinkedIn](https://linkedin.com/in/your-linkedin)

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).

---

> ✨ Contributions welcome! Fork the repo, make changes, and submit a PR.

---

## 🌟 Show Your Support

If you liked the project, leave a ⭐️ on GitHub!

---

