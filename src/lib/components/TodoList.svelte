<script>
  export let todos = [];
</script>

<ul>
  {#each todos as todo}
    <li>{todo.text}</li>
  {/each}
</ul>
