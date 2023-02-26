import type { PageLoad } from './$types';

export const load = (async () => {
    return {
        test2: 'test2',
    };
}) satisfies PageLoad;