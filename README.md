```markdown
# 🎬 Netflix GPT

> A fully responsive, GPT-powered movie recommendation app built with ReactJS, TailwindCSS, Firebase, Redux, and OpenAI — delivering real-time movie suggestions via TMDB and OpenAI GPT APIs 🌟

![Netflix GPT UI Banner](https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png)

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

## 📁 Folder Structure

```bash
src/
├── components/            # All major UI components
├── hooks/                 # Genre-based movie hooks
├── utils/                 # Redux slices, constants, API handlers
├── App.js                 # Root Component
├── index.js               # App Entry Point
└── index.css              # Tailwind & Global Styles
```

---

## 🚀 Installation & Setup

```bash
# 1. Clone the repository
$ git clone https://github.com/your-username/netflix-gpt.git
$ cd netflix-gpt

# 2. Install dependencies
$ npm install

# 3. Create .env file
$ touch .env
```

### 🔐 .env File
```env
REACT_APP_TMDB_KEY=your_tmdb_key_here
REACT_APP_OPENAI_KEY=your_openai_key_here
```

```bash
# 4. Start the development server
$ npm start
```

📎 Now open [http://localhost:3000](http://localhost:3000) to explore Netflix GPT

---

## 📸 Screenshots

| Login Screen | GPT Search | Movie Modal |
|--------------|------------|-------------|
| ![Login](https://your-screenshot-link.png) | ![GPT](https://your-gpt-screenshot.png) | ![Modal](https://your-modal-screenshot.png) |

---

## 🎯 Functional Highlights

- ✅ Authentication: Firebase auth, user avatar, and sign out
- ✅ Movie Fetching: Genre-based sections like Horror, Sci-Fi, Western, Fantasy, etc.
- ✅ GPT Search: Conversational search with OpenAI generating suggestions
- ✅ Movie Detail Modal: Title, image, description, and release date
- ✅ Trailer Background: Auto-playing movie trailers via YouTube embed
- ✅ Language Switching: Multi-language UI support for GPT search
- ✅ Dark Theme: Fully dark-themed UI for Netflix-like feel
- ✅ Footer with Credit: Built by Bhavana 🌸

---

## 🌎 Live Demo

👉 [https://your-deployment-link.web.app](https://your-deployment-link.web.app) _(replace with real link)_

---

## 🙏 Acknowledgements

- [TMDB API](https://www.themoviedb.org/) — Movie data provider
- [OpenAI GPT](https://platform.openai.com/docs) — AI-powered recommendation engine
- [Firebase](https://firebase.google.com/) — Authentication & Hosting
- [Tailwind CSS](https://tailwindcss.com/) — Utility-first CSS framework

---

## 📜 License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

---

> Developed with ❤️ by **Bhavana**

```

