<script>
  import TodoForm from './TodoForm.svelte';
  import TodoList from './TodoList.svelte';

  let todos = [];

  function addTodo(text) {
    todos = [...todos, { id: Date.now(), text }];
  }
</script>

<h1>Todos</h1>

<h2>Add Todo</h2>
<TodoForm on:add={e => addTodo(e.detail)} />

<h2>Existing todos</h2>
<TodoList {todos} />
