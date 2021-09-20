const Router = require('express');
const router = new Router();
const categoriesController = require('../controllers/categoriesController');
const { createCategorySchema, updateCategorySchema} = require('../schema/categoriesSchema');
const validation = require('../middleware/validation');
// const authMiddleware = require('../middleware/authMiddleware');

router.post('/', validation(createCategorySchema), categoriesController.addNewCategory);
router.get('/', categoriesController.getAllCategories);
router.delete('/:id', categoriesController.deleteCategory);
router.patch('/:id', validation(updateCategorySchema), categoriesController.updateCategory);

module.exports = router;