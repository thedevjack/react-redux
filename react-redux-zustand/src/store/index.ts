import { configureStore, createSlice } from "@reduxjs/toolkit";
import { useSelector, TypedUseSelectorHook } from "react-redux";

// configureStore -> configurar store
// createSlice -> serve para criar varios tipo de reducers
//         ex -> reducer p/ carrinho, reducer para verificar se esta online, e uma forma de separar estados;

const todoSlice = createSlice({
  name: "todo",
  initialState: ["Naruto", "Sasuke", "Sakura", "Kakashi"],
  // reducers -> vai servir para inserir quais acoes a interface pode fazer dentro do estado
  // vai praticamente separar quais acoes o usuario pode disparar
  reducers: {
    // cada action recebe dois parametros -> state e action
    add: (state, action) => {
      state.push(action.payload.newTodo);
      console.log(state, action);
      // resultado:
      // state -> é o que ja tem dentro do estado geralmente é o initialState
      // action ->
      //      type: valor unico pra todas acoes dentro do redux, nome do reducer(todo) seguido com o nome da acao(add)
      //      payload: são as informações que vieram dentro do disparo da ação(pode ser qualquer coisa)
    },
  },
});

// store é o estado GLOBAL toda aplicação vai ter acesso as informações da store
export const store = configureStore({
  // reducer -> são as informações que serão compartilhadas em todos os componentes da aplicação
  // agora vai ser inserido um objeto informando quais são as fatias(reducers)
  reducer: {
    todo: todoSlice.reducer,
  },
});

// e preciso exportar a funcao 'add' para que o componente possa chamar ela,
// entao e preciso desestruturar o todoSlice
// actions = sao todas as acoes que o usuario pode fazer
export const { add } = todoSlice.actions;

// TypedUsedSelectorHook -> precisa receber um parametro que é o tipo do meu estado global(store)
// getState -> retorna todo o meu estado, usando o typeof ele retorna o formato do meu estado
export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
