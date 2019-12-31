//to way communication for req and res 

const auth = function(req, res, next)
{
    console.log("this is middleware");

}
module.exports =auth; //neds authentication

//copy paste above code for middleware