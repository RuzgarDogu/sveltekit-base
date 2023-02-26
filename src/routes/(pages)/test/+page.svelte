<script lang="ts">
    import type { PageData } from './$types';
    
    export let data: PageData;
    console.log("data", data)
</script>
{#each data.products.products as product}
    <p><img src="{product.images[0]}" alt="" loading="lazy" decoding="async">
        <a data-sveltekit-preload-data href="/test/{product.id}">{product.title}</a></p>
{/each}