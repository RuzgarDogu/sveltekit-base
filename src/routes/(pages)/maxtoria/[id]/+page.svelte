<script lang="ts">
    import type { PageData } from './$types';
    
    export let data: PageData;
    let {activity} = data
</script>

<article>
    <header><img src="https://customer-api.maxtoria.com/{activity.images[0]}" alt=""></header>
    <h4 style="margin-bottom: 0;">{activity.title}</h4>
    <p>{activity.region_name} <strong>Category:</strong>{activity.category[0].name}</p>
    <p>{activity.about}</p>
    <p></p>
    <footer><a data-sveltekit-preload-data href="/maxtoria/{activity.id}" role="button">Purchase</a></footer>
  </article>