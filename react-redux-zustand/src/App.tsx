import { AddTodo } from "./components/AddTodo";
import TodoList from "./components/TodoList";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./store";

function App() {
  return (
    //ReduxProvider vai compartilhar todas as informações do contexto
    // com esses componentes abaixo:
    <ReduxProvider store={store}>
      <TodoList />
      <AddTodo />
    </ReduxProvider>
  );
}

export default App;
