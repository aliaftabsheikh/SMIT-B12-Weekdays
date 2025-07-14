function adminAuth (req, res, next){
    const token = "smit1234"
    if(token === "smit123"){
      next()
    }else{
        res.status(401).send('Unauthorized User!')
    }
}

function userAuth (req, res, next){
    const token = "smit1234"
    if(token === "smit123"){
      next()
    }else{
        res.status(401).send('Unauthorized User!')
    }
}

module.exports= {
    adminAuth,
}