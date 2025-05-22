<script>
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();
  let text = '';

  function handleSubmit() {
    if (text.trim()) {
      dispatch('add', text);
      text = '';
    }
  }
</script>

<input bind:value={text} placeholder="New todo" />
<button on:click={handleSubmit}>Add</button>
