const Joi = require('joi');

const categoriesSchema = {
    name: Joi.string().min(3).max(30).required()
};

const createCategorySchema = Joi.object({
    ...categoriesSchema
});

const updateCategorySchema = Joi.object({
    id: Joi.string().guid({ version: "uuidv4" }).required(),
    ...categoriesSchema
});

module.exports = { createCategorySchema, updateCategorySchema};