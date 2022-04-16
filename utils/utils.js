let secrets = []
function storeScretes (secret){
    secrets.push(secret)
}

function getSecret(link){
    console.log("getSecret",link) 
    const secret = secrets.find(secret => secret.url === link)
    if(!secret) return "expired"
    
    console.log("secret",secret)
    secrets = secrets.filter(secret => secret.url !== link)
    return secret.message
}
function getArray(){
    return secrets
}

module.exports={
    storeScretes,
    getSecret,
    getArray
}