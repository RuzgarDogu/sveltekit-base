<script lang="ts">
    import type { PageData } from './$types';
    
    export let data: PageData;
    console.log("id page data", data)
</script>
<img src="{data.product.images[0]}" loading="lazy" decoding="async" alt="">
<h1>{data.product.title}</h1>
<p>{data.product.description}</p>