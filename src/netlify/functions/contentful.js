const fetch = require('node-fetch');

exports.handler = async function (event) {
    const spaceId = process.env.CONTENTFUL_SPACE;
    const apiKey = process.env.CONTENTFUL_API_KEY;

    // Parse the GraphQL query from the POST body
    const { query } = event.httpMethod === "POST" ? JSON.parse(event.body) : {};

    if (!query) {
        return {
            statusCode: 400,
            body: JSON.stringify({ error: "Missing query" }),
        };
    }

    try {
        const response = await fetch(`https://graphql.contentful.com/content/v1/spaces/${spaceId}/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${apiKey}`,
            },
            body: JSON.stringify({ query }),
        });

        const { data, errors } = await response.json();

        if (errors) {
            return {
                statusCode: 500,
                body: JSON.stringify({ errors }),
            };
        }

        return {
            statusCode: 200,
            body: JSON.stringify(data),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message }),
        };
    }
};