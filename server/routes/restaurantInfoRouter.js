const Router = require('express');
const router = new Router();
const restaurantInfoController = require('../controllers/restaurantInfoController');
const restaurantInfoUpdateSchema = require('../schema/restaurantInfoSchema');
const validation = require('../middleware/validation');

router.post('/',  restaurantInfoController.addRestaurantInfo);
router.get('/', restaurantInfoController.getAllRestaurantInfo);
router.patch('/:id', validation(restaurantInfoUpdateSchema), restaurantInfoController.updateRestaurantInfo);

module.exports = router;