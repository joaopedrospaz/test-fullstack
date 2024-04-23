const fetchData = async ({ endpoint, method, body }) => {

    const request = await fetch(`http://localhost:3001${endpoint}`, {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        method,
        body: JSON.stringify(body),
    });

    if (!request.ok) {
        const newError = await request.json();
        throw newError.message;
    }


    const response = await request.json();
    return response;
}

export default fetchData;