const userGet = (req, res) => {

    const query = req.query;

    res.json({
        msg: 'Petición GET API',
        query
    });
};

const userPut = (req, res) => {

    const id = req.params.id;

    res.json({
        ok: true,
        msg: 'Petición PUT API'
    });
};


const userPost = (req, res) => {

    const body = req.body;    

    res.json({
        msg: 'Petición POST API',
        body
    });
};

const userDelete = (req, res) => {
    res.json({
        ok: true,
        msg: 'Petición DELETE API'
    });
};


module.exports = {
    userGet,
    userPut,
    userPost,
    userDelete
};