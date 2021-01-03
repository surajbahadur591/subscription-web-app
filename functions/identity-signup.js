exports.hadler = async (event) => {

    const {user} = JSON.parse(event.body);
    console.log(JSON.stringify(user, null, 2));

    return {
        // every serverless function has to return status code and body
        statusCode : 200,
        body : JSON.stringify({app_metadata : { roles: ['free-subscription']}}),
    
}
}