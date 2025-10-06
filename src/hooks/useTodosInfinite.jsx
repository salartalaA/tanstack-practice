import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchTodos } from "../api/todos";

export function useTodosInfinite() {
  return useInfiniteQuery({
    queryKey: ["todos"],
    queryFn: fetchTodos,
    getNextPageParam: (lastPage, allPages) => {
      // stop when last page has fewer than 20 items
      return lastPage.length === 20 ? allPages.length + 1 : undefined;
    },
    staleTime: 1000 * 60, // 1 minute cache
  });
}
