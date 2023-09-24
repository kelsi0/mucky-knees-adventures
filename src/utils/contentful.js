export function fetchContentful(query) {
    const spaceId = process.env.REACT_APP_CONTENTFUL_SPACE;
    const apiKey = process.env.REACT_APP_CONTENTFUL_API_KEY;

    return window
    .fetch(`https://graphql.contentful.com/content/v1/spaces/${spaceId}/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({ query }),
    })
        .then((response) => response.json())
        .then(({ data, errors }) => {
        if (errors) {
            console.error(errors);
        }

    return data;
    });
}