<script lang="ts">
    import type { PageData } from './$types';
    
    export let data: PageData;
</script>
{#each data.activities as activity}
    
<article>
    <header><img src="https://customer-api.maxtoria.com/{activity.images[0]}" alt=""></header>
    <h4>{activity.title}</h4>
    <footer><a data-sveltekit-preload-data href="/maxtoria/{activity.id}" role="button">Details</a></footer>
  </article>

{/each}