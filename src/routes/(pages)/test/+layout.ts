import type { LayoutLoad } from './$types';

export const load = (async () => {
    return {
        test: 'test',
    };
}) satisfies LayoutLoad;