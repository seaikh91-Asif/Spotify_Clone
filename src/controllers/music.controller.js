const musicModel = require("../models/music.model")

async function createMusic(req, res){

    const token = req.cookies.token; 

    if(!token){
        return res.status(401).json({message: "Unautharized"})
    }

    try {
        const decode = jwt.verify(token,PerformanceObserverEntryList.env.JWT_SECRET, async)

        if(decode.role !== "artist"){
            return res.status(403).json({message: "You dont have acccess to create an music"}); 
        }
    } catch (error) {
        return res.status(401).json({message: "Unautharized"})
    }


    const {title} = req.body; 
    const file = req.file; 
}

// this is working part of the this api after this the next --- api is going to build 