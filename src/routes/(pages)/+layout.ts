import type { LayoutLoad } from './$types';

const getActivities = async (fetch: any) => {
    const response = await fetch('https://customer-api.maxtoria.com/operators').then((r: { json: () => any; }) => r.json())
    return response.data
}

export const load = (async ({fetch}) => {
    return {
        user: {id:1, name: 'John Doe'}, // locals.user olacak
        products: await fetch('https://dummyjson.com/products/').then(r => r.json()),
        activities: await getActivities(fetch),
    };
}) satisfies LayoutLoad;