import type { PageLoad } from './$types';

export const load = (async ({params, parent}) => {
    const data = await parent()
    console.log("parent", data)
    console.log("params", params)
    return {
        test_id: params.id,
        product: data.products.products.find((p: any) => p.id == params.id)
    };
}) satisfies PageLoad;