import { configureStore, createSlice } from "@reduxjs/toolkit";

// configureStore -> configurar store
// createSlice -> serve para criar varios tipo de reducers
//         ex -> reducer p/ carrinho, reducer para verificar se esta online, e uma forma de separar estados;

const todoSlice = createSlice({
  name: "todo",
  initialState: ["Naruto", "Sasuke", "Sakura", "Kakashi"],
  reducers: {},
});

export const store = configureStore({
  // reducer -> são as informações que serão compartilhadas em todos os componentes da aplicação
  // agora vai ser inserido um objeto informando quais são as fatias(reducers)
  reducer: {
    todo: todoSlice.reducer,
  },
});
