// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";

// let excursionDays;
// let destination;

// const options = {
//   method: "GET",
//   url: "https://ai-trip-planner.p.rapidapi.com/",
//   params: {
//     days: `${excursionDays}`,
//     destination: `${destination}`,
//   },
//   headers: {
//     "X-RapidAPI-Key": "80f9b95229msh4e32e85f75d1cddp103646jsnda0eaf149e16",
//     "X-RapidAPI-Host": "ai-trip-planner.p.rapidapi.com",
//   },
// };

// export const fetchDayActivites = createAsyncThunk(
//   "excursions/fetchDayActivities",
//   async () => {
//     const response = await axios.request(options);
//     return response.data;
//   }
// );

// export const excursionsSlice = createSlice({
//   name: "excursions",
//   initialState: [],
//   reducers: {
//     logToScreen: (state, action) => {
//       console.log(state);
//     },
//   },
//   extraReducers(builder) {
//     builder
//     .addCase(fetchDaytActivites)
//   }
// });

// export const { logToScreen } = excursionsSlice.actions;

// export default excursionsSlice.reducer;
