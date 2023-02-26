<script lang="ts">
    import type { LayoutData } from './$types';
    import '@picocss/pico'
    import '../css/app.scss'
    export let data: LayoutData;
</script>
<p><a data-sveltekit-preload-data href="/test">Test</a> | <a data-sveltekit-preload-data href="/maxtoria">Maxtoria</a></p>


<slot />
