# 📺 Netflix GPT 🎬💡

An AI-powered movie recommendation platform inspired by Netflix's interface. Users can sign in, explore genre-based movie sections, and interact with an integrated GPT-based movie search system powered by OpenAI and TMDB APIs.

---

## 🚀 Features

- 🔐 **Authentication** with Firebase (Sign In/Sign Up)
- 🤖 **GPT-powered Movie Suggestions** using OpenAI API
- 🎞️ **TMDB API Integration** for live movie data
- 🌐 **Multi-language Support** (English, Hindi, Spanish)
- 📺 **Hero Section with Movie Trailer** from YouTube
- 🎥 **Genre-based Categorized Movie Rows**
- 🔍 **Search Bar with Real-time GPT Fetch**
- 🧑‍🎤 **User Avatar & Logout Support**
- 🧠 **State Management using Redux Toolkit**
- 🖼️ **Responsive Design using Tailwind CSS**
- ⚡ **AOS Animations** for smooth component transitions
- 💫 **Movie Details Modal** on card click
- 🎉 **Shimmer UI** for loading states

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

## 📦 Technologies Used

- React 18
- Redux Toolkit
- Tailwind CSS + AOS
- Firebase Auth
- OpenAI API (GPT 3.5)
- TMDB API
- React Router DOM v6

---

## 🖼️ Screenshots (Optional)

> Add your screenshots here using:

```md
![Screenshot](./assets/screenshot1.png)
```

---

## 🧪 Testing

Basic testing with React Testing Library is enabled:
```bash
npm test
```

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

