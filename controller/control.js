const getHello = (req, res) => {
    res.json({msg: 'Hello Word'})
}

const postImg =( req, res)=>{
    
    if(req.file){
        console.log(req.file);
        return res.json({
            error: false,
            mensagem: "Upload realized com sucesso!"
        });
    }

    return res.status(400).json({
        erro: true,
        mensagem: "Error: Upload não realizedo com sucesso! "
    })
}

module.exports ={
    getHello,
    postImg,
}