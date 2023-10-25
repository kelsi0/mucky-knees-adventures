export function fetchContentful(query) {
    const spaceId = "huy8ljto44oc";
    const apiKey = "uX_dAyKZfs5w2H6MKgf61gZMYd0-gKMl4CMi7oOYn94";

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