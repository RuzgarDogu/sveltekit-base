/** @type {import('@sveltejs/kit').HandleFetch} */

export function handleFetch({ request, fetch, event }) {
    const url = new URL(request.url);
    console.log("--------------------")
    // console.log(url);
    console.log(request);
    if(event.locals.token) {
        request.headers.set('token', event.locals.token)
        console.log("headers", request.headers)
    } else {
        event.locals.token = "1200019292132180"
    }
    
    // if(!cookies.get("token")) {
    //     cookies.set('token', '1200019292132180', {
    //         path: '/',
    //         httpOnly: true,
    //         sameSite: 'strict',
    //         secure: !dev,
    //         maxAge: 60 * 60 * 24 * 30
    //     });
    // }
    console.log("--------------------")
    return fetch(request);
  }