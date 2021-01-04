const fetch = require('node-fetch');

exports.handler = async (event) => {
    const {user} = JSON.parse(event.body);
    console.log(JSON.stringify(user, null, 2));

    const netlifyID = user.id;

    const stripeID = 1;

    const response = await fetch("https://graphql.fauna.com/graphql", {
        method : 'POST',
        headers: {
            Authorization: `Bearer ${process.env.FAUNA_SERVER_KEY}`,
        },
        body : JSON.stringify({
            query: `
            mutation($netlifyID: ID! stripeID: ID!) {
                createUser(data: {netlifyID: $netlifyID, stripeID: $stripeID})
            }
            `,
            variables : {
                netlifyID,
                stripeID,
            }
        })
    }).then(res => res.json())
    .catch( (err) = console.log(err, null, 2));

    console.log({response});

    return {
        // every serverless function has to return status code and body
        statusCode : 200,
        body : JSON.stringify({app_metadata : { roles: ['free-subscription']}}),
    
}
}