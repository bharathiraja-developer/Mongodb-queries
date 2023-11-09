/*
Mongodb queries :

    - Products JSON stored in products collection in task database.

    1. Find all the information about each products :
        query : db.products.find();

    2. Find the product price which are between 400 to 800.
        query : db.products.find({product_price:{$gt:400 , $lt:800}});

    3. Find the product price which are not between 400 to 600.
        query : db.products.find({$or:[{product_price:{$lt:400}},{product_price:{$gt:600}}]});

    4. List the four product which are grater than 500 in price.
        query : db.products.find({product_price:{$gt:500}}).limit(5);

    5. Find the product name and product material of each products.
        query : db.products.find({},{product_name:1,product_material:1});

    6. Find the product with a row id of 10.
        query : db.products.find({id:"10"});

    7. Find only the product name and product material.
        query : db.products.find({},{_id:0,product_name:1,product_material:1});

    8. Find all products which contain the value of soft in product material.
        query : db.products.find({product_material:"Soft"});

    9. Find products which contain product color indigo  and product price 492.00.
        query :  db.products.find({$or:[{product_color:"indigo"},{product_price:492}]});

    10. Delete the products which product price value are same.
        query : db.products.aggregate([{ $group: { _id: "$product_price", duplicate: { $addToSet: "$_id" }, count: { $sum: 1 } } }, { $match: { count: { $gt: 1 } } }]).forEach(function (doc) {db.products.deleteMany({_id:{$in:doc.duplicate}});});

*/
