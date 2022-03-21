const {Product} = require('../models/product.model');

module.exports.index = (req, res) => {
    res.json({
        message: 'Hello World'
    });
}

module.exports.createProduct = (req, res) =>{
    Product.create(req.body)
    .then(newProduct => res.json(newProduct))
    .catch(err => res.json({message: 'Something went wrong', error:err}))
}

module.exports.findAllProducts = (req, res)=> {
    Product.find()
    .then(allProducts => res.json(allProducts))
    .catch(err => res.json({message: "Something went wrong", error: err}));
}
