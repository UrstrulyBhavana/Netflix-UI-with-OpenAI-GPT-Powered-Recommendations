import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    westernMovies: null,
    popularMovies: null,
    topRatedMovies: null,
    upcomingMovies: null,
    horrorMovies: null,
    thrillerMovies: null,
    sciFiMovies: null,
    mysteryMovies: null,
    fantasyMovies: null,
    animationMovies: null,
    adventureMovies: null,
    trailerVideo: null,
  },
  reducers: {
    addAnimationMovies: (state, action) => {
      state.animationMovies = action.payload;
    },
    addThrillerMovies: (state, action) => {
      state.thrillerMovies = action.payload;
    },
    addFantasyMovies: (state, action) => {
      state.fantasyMovies = action.payload;
    },
    addMysteryMovies: (state, action) => {
      state.mysteryMovies = action.payload;
    },
    addAdventureMovies: (state, action) => {
      state.adventureMovies = action.payload;
    },
    addHorrorMovies: (state, action) => {
      state.horrorMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addSciFiMovies: (state, action) => {
      state.sciFiMovies = action.payload;
    },
       addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addWesternMovies: (state, action) => {
      state.westernMovies = action.payload;
    },    
    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  addWesternMovies,
  addPopularMovies,
  addTopRatedMovies,
  addUpcomingMovies,
  addHorrorMovies,
  addThrillerMovies,
  addSciFiMovies,
  addMysteryMovies,
  addFantasyMovies,
  addAnimationMovies,
  addAdventureMovies,
  addTrailerVideo,
} = moviesSlice.actions;

export default moviesSlice.reducer;
