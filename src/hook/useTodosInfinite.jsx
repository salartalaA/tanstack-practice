import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchTodos } from "../api/api";

export function useTodosInfinite() {
  return useInfiniteQuery({
    queryKey: ["todos"],
    queryFn: fetchTodos,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length === 5 ? allPages.length + 1 : undefined;
    },
  });
}
