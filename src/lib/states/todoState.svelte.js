import { browser } from '$app/environment';

const TODOS_KEY = 'todos';
let initialTodos = [];
if (browser && localStorage.hasOwnProperty(TODOS_KEY)) {
  try {
    initialTodos = JSON.parse(localStorage.getItem(TODOS_KEY));
  } catch {}
}

let todoState = $state(initialTodos);

const saveTodos = () => {
  localStorage.setItem(TODOS_KEY, JSON.stringify(todoState));
};

const useTodoState = () => ({
  get todos() {
    return todoState;
  },
  add: (todo) => {
    todoState.push(todo);
    saveTodos();
  },
  changeDone: (id) => {
    const t = todoState.find((t) => t.id === id);
    if (t) {
      t.done = !t.done;
      saveTodos();
    }
  },
  remove: (id) => {
    todoState = todoState.filter((t) => t.id !== id);
    saveTodos();
  }
});

export { useTodoState };