export const fetchTodos = async ({ pageParam = 1 }) => {
  try {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/todos?_page=${pageParam}&_limit=20`
    );
    return res.json();
  } catch (error) {
    console.log(error);
  }
};
