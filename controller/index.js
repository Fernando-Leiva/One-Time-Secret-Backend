const crypto = require('crypto')
const storedSecrets = require('../utils/utils')


function storeSecret (req,res){
    const secret = {
        message: req.body.secret,
        url:`http://localhost:5050/${crypto.randomUUID()}`
    }
    storedSecrets.storeScretes(secret)
    console.log(storedSecrets.getArray())
    res.status(200).json({error:null,data:secret})
}
function onceRetriveSecret(req,res){
    
    const uuid = req.params.hash
    console.log("uuid",uuid)
    const link = `http://localhost:5050/${uuid}`
    const secret = storedSecrets.getSecret(link)
    console.log(secret)
    if(secret === 'expired') {
        return res.status(400).json({error:"Secret Expired",data:null})
    }
    return res.status(200).json({error:null,data:secret})
}


module.exports={
    storeSecret,
    onceRetriveSecret
}
