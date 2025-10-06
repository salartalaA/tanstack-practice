export const fetchTodos = async ({ pageParam = 1 }) => {
  try {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/todos?_page=${pageParam}&_limit=5`
    );
    return res.json();
  } catch (error) {
    console.log(error);
  }
};
