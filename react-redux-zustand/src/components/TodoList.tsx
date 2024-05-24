import { useAppSelector } from "../store";

export default function TodoList() {
  // o store é TODO o Store do Redux
  //dentro do store eu posso escolher quais informações eu quero retornar ali de dentro dentro de chaves
  // useSelector -> serve para buscar as informações do estado
  const todos = useAppSelector((store) => {
    return store.todo;
  });

  console.log(todos);

  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>{todo}</li>
      ))}
    </ul>
  );
}
