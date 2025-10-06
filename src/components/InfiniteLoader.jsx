export function InfiniteLoader({ isLoading, hasNextPage }) {
  return (
    <div style={{ height: "60px", textAlign: "center", padding: "1rem" }}>
      {isLoading
        ? "Loading more..."
        : hasNextPage
        ? "Scroll down to load more 👇"
        : "All caught up 🚀"}
    </div>
  );
}
