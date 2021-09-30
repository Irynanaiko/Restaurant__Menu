const Router = require('express');
const router = new Router();
const itemsController = require('../controllers/itemsController');
const validation = require('../middleware/validation');
const {itemCreateSchema, itemUpdateSchema} = require('../schema/itemsSchema');


router.post('/', itemsController.uploadImage, validation(itemCreateSchema),  itemsController.addNewItem);
router.get('/', itemsController.getAllItems);
router.get('/:id', itemsController.getItemsByCategory);
router.patch('/:id', itemsController.uploadImage,  validation(itemUpdateSchema), itemsController.updateItem);
router.delete('/:id', itemsController.deleteItem);

module.exports = router;