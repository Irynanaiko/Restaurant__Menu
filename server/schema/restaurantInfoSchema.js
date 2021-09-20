const Joi = require("joi");

const restaurantInfoSchema = {
  id: Joi.string().guid({ version: "uuidv4" }),
  name: Joi.string().min(2).max(20),
  email: Joi.string().email().lowercase(),
  website: Joi.string().min(5).max(20),
  logo: Joi.string().min(7).max(50),
  address: Joi.string().min(4).max(40),
  wifi: Joi.string().min(8).max(15),
};

const restaurantInfoUpdateSchema = Joi.object({ ...restaurantInfoSchema });

module.exports = restaurantInfoUpdateSchema;