const Router = require('express');
const router = new Router();
const categoriesRouter = require('./categoriesRouter');
const itemsRouter = require('./itemsRouter');
const restaurantInfoRouter = require('./restaurantInfoRouter');


router.use('/categories', categoriesRouter);
router.use('/items', itemsRouter);
router.use('/info', restaurantInfoRouter);


module.exports = router;