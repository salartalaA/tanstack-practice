import "./App.css";
import { useTodosInfinite } from "./hooks/useTodosInfinite";
import { useInfiniteScroll } from "./hooks/useInfiniteScroll";
import { TodoList } from "./components/TodoList";
import { InfiniteLoader } from "./components/InfiniteLoader";

function App() {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useTodosInfinite();

  const loaderRef = useInfiniteScroll(
    () => {
      if (hasNextPage && !isFetchingNextPage) fetchNextPage();
    },
    { threshold: 0.5, enabled: hasNextPage }
  );

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "2rem" }}>
      <h1>📋 Todos</h1>
      <TodoList pages={data?.pages} />
      <div ref={loaderRef}>
        <InfiniteLoader
          isLoading={isFetchingNextPage}
          hasNextPage={hasNextPage}
        />
      </div>
    </div>
  );
}

export default App;
