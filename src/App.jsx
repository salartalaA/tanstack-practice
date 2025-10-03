import { useTodosInfinite } from "./hook/useTodosInfinite";
import "./App.css";

function App() {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useTodosInfinite();

  return (
    <>
      {data?.pages.map((pages, i) => (
        <div key={i}>
          {pages.map((todo) => {
            return <p key={todo.id}>{todo.title}</p>;
          })}
        </div>
      ))}

      {hasNextPage && (
        <button onClick={fetchNextPage} disabled={isFetchingNextPage}>
          Load More
        </button>
      )}
    </>
  );
}

export default App;
