const ProductModel = require("../models/product.model")

const fetchProducts = async (req, res) => {
    try {
        const { search } = req.query;

        if (search) {
            products = await ProductModel.find({
                $or: [
                    {
                        title: {
                            $regex: search,
                            $options: 'i'
                        }
                    },
                    {
                        description: {
                            $regex: search,
                            $options: 'i'
                        }
                    },
                    {
                        category: {
                            $regex: search,
                            $options: 'i'
                        }
                    }
                ]
            });
        } else {
            products = await ProductModel.find();
        }

        return res.status(200).json({
            status: "Ok",
            message: "Products fetched",
            products
        });
    } catch (error) {
        console.log(error.message);
        return res.status(200).json({
            status: "Ok",
            message: error.message,
        });
    }
}

module.exports = fetchProducts;