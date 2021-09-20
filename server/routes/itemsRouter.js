const Router = require('express');
const router = new Router();
const itemsController = require('../controllers/itemsController');
const validation = require('../middleware/validation');
const {itemCreateSchema, itemUpdateSchema} = require('../schema/itemsSchema');
// const authMiddleware = require('../middleware/authMiddleware');

router.post('/', validation(itemCreateSchema),  itemsController.addNewItem);
router.get('/', itemsController.getAllItems);
router.get('/:id', itemsController.getItemsByCategory);
router.patch('/:id', validation(itemUpdateSchema), itemsController.updateItem);
router.delete('/:id', itemsController.deleteItem);

module.exports = router;