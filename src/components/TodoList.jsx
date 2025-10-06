export function TodoList({ pages }) {
  if (!pages?.length) return <p>No todos found</p>;

  return (
    <>
      {pages.map((page, i) => (
        <div key={i} className="todo-page">
          {page.map((todo) => (
            <p key={todo.id}>{todo.title}</p>
          ))}
        </div>
      ))}
    </>
  );
}
