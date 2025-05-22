<script>
  import { useTodoState } from '$lib/states/todoState.svelte.js';
  const todoState = useTodoState();
  export let todo;
</script>

<input
  type="checkbox"
  id={todo.id}
  checked={todo.done}
  on:change={() => todoState.changeDone(todo.id)}
/>
<label for={todo.id}>
  {todo.name} ({todo.done ? 'done' : 'not done'})
</label>
<button on:click={() => todoState.remove(todo.id)}>Remove</button>