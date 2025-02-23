import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "../features/update.js"; // Asigură-te că path-ul este corect

export const store = configureStore({
  reducer: {
    data: dataReducer, // Trebuie să fie într-un obiect cu cheia `reducer`
  },
});
