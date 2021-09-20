const Joi = require("joi");

const itemsSchema = {
  name: Joi.string().min(3).max(80).required(),
  descr: Joi.string().allow("", null),
  weight: Joi.string().min(1).max(8).required(),
  price: Joi.string().min(1).max(8).required(),
  img: Joi.string().min(6).required(),
  available: Joi.boolean(),
  categoryId: Joi.string().guid({ version: "uuidv4" }).required()
};

const itemCreateSchema = Joi.object({
  ...itemsSchema,
});

const itemUpdateSchema = Joi.object({
  id: Joi.string().guid({ version: "uuidv4" }).required(),
  ...itemsSchema,
});

module.exports = { itemCreateSchema, itemUpdateSchema };