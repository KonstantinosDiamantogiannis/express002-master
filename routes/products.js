let mysql = require("mysql2");
const db = require('../models/index'); // eqiuivalent mysql
const ProductTeam2s = db.sequelize.models.ProductTeam2s; // Model TestCustomer
var express = require('express');
var router = express.Router();

// list
router.get('/', async function (req, res) {
    // let products = await getproducts();
    let products = await ProductTeam2s.findAll();
    console.log(products);
    res.render('products/list',
        {
            title: 'Express 002 - products page',
            // list: getproducts()
            list: products
        });
});

// GET create
router.get('/create', (req, res) => {
    res.render('products/create-update', {
        title: 'Express 002 - New Product page',
        message: 'New Product',
        action: 'create',
        product: {}
    });
})

// POST create 
router.post('/create', async (req, res) => {
    await ProductTeam2s.create({
        title: req.body.title,
        price: req.body.price
    });
    res.redirect('/products');
});

// GET update
router.get('/edit/:id', async (req, res) => {
    let product = await ProductTeam2s.findByPk(req.params.id);
    console.log(product);
    res.render('products/create-update', {
        title: 'Express 002 - Edit Product page',
        message: 'Edit a Product',
        action: 'update',
        product: product
    });
})

// POST update 
router.post('/update', async (req, res) => {
    let product = await ProductTeam2s.findByPk(req.body.id);
    if(product.id == req.body.id) {
        product.title = req.body.title;
        product.price = req.body.price;
        await product.save();
    }
    res.redirect('/products');
})

// npx sequelize model:generate --name TestCustomer --attributes firstName:string,lastName:string,email:string
// npx sequelize db:migrate


// /customer/delete

// http://localhost:4000/products/delete?id=1&firstName=John // req.query.id
// http://localhost:4000/products/delete/1/John // req.params.id

router.get('/delete/:id', async function (req, res) {
    // let products = await getproducts();
    // let products = await TestCustomer.findAll();
    // console.log(products);
    await ProductTeam2s.destroy({where: { id: req.params.id } });
    res.render('products/deleted',
        {
            title: 'Express 002 - products delete page',
            // list: getproducts()
            message: `You deleted product with id: ${req.params.id}`
        });
});


async function getProducts() {
    try {
        let dbResult = await dbLogin();
        if (dbResult) {
            return (dbResult);
        }
    } 
    catch (error) {
        return (false);
    }
}

async function dbLogin() {
    const poolConfigDetails = {
        connectionLimit: 1,
        host: 'ra1.anystream.eu',
        port: '5420',
        user: 'cb12ptjs',
        password: 'cb12ptjs',
        database: 'cb12ptjs'
    };
    const pool = mysql.createPool(poolConfigDetails);
    const sql = "SELECT * FROM customer";

    // let result = pool.execute().then(resolve => {}, reject => {});
    // return(result);

    return (new Promise(
        (resolve, reject) => {
            pool.execute(sql, [], (error, rows) => {
                if (error) {
                    pool.end();
                    return (reject(error));
                } else {
                    console.log(rows);
                    return(resolve(rows));
                    // if (rows.length == 1) {
                    //     pool.end();
                    //     return (resolve(true));
                    // }
                    // rows.length != 1
                    // else {
                    //     pool.end();
                    //     return (resolve(false));
                    // }
                }
            })
        }
    ));
}

module.exports = router;