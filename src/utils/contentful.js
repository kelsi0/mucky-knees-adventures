export function fetchContentful(query) {
    const spaceId = process.env.CONTENTFUL_SPACE;
    const apiKey = process.env.CONTENTFUL_API_KEY;

    console.log(spaceId);

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