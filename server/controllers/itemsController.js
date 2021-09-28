const ApiError = require('../error/ApiError');
const {Items} = require('../models/models');
const {statusCode, ADDING, UPDATE} = require('../const/const');
const {cloudinary} = require('../utils/cloudinary');

class ItemsController {
    async getAllItems(req, res) {
        try {
            const items = await Items.findAll();
            return res
                .json(items)
                .send({statusCode: statusCode.OK})
        }catch(e) {
            const error = ApiError.badRequest(e.message)
            return res
                .json({"message": error.message}) 
                .status(error.status) 
        }
    }

    async addNewItem(req, res) {
       try {
            if (!req.body.name) {
                res.status(400).send({
                    message: "Content can not be empty!"
                });
                return;
            }

            let {name, descr, weight, price, img, categoryId} = req.body;
        
            await Items.create({name, descr, weight, price, img, categoryId});
          
            return res.send({message: ADDING}) 

        } catch(e) {
            const error = ApiError.badRequest(e.message)
            return res
                .json({"message": error.message}) 
                .status(error.status) 
        }
    }

    async getOneItemById (req, res) {
        try {
            const {id} = req.params
            const item = await Items.findOne(
                {
                    where: {id}
                },
            )
        return res.json(item)
        }catch (e) {
            res.status(500).send({
                message:
                  e.message || "Could not get Item with id=" + id
            });
        }
    }

    async updateItem (req, res) {
        try {
            const id = req.params.id;
            Items.update(req.body, {
                where: { id: id }  
            })
            .then(num => {
                if(num ==1) {
                    res.send({
                        message: UPDATE
                    });
                } else {
                    res.send({
                        message: `Cannot update Item with id=${id}.`
                    });
                }
            })

        } catch(e) {
            const error = ApiError.badRequest(e.message)
            return res
                .json({"message": error.message}) 
                .status(error.status)  
        }
    }

    async deleteItem(req, res) {
        try {
            const id = req.params.id;   
            Items.destroy({
                where: { id: id }
            })
            .then(num => {
                if (num == 1) {
                    res.send({
                     message: "Item was deleted successfully!"
                    });
                } else {
                    res.send({
                        message: `Cannot delete Item with id=${id}.`
                    });
                }
            })

        }catch(e) {
            const error = ApiError.badRequest(e.message)
            return res
                .json({"message": error.message}) 
                .status(error.status) 
        }
    }  
    
    async getItemsByCategory(req, res) {
        try {
            const id = req.params.id;
            let categoryItems = await Items.findAll({ where: { categoryId: id } });
            return res.json(categoryItems);
        }catch(e) {
            const error = ApiError.badRequest(e.message)
            return res
                .json({"message": error.message}) 
                .status(error.status)
        }
    }
    
    uploadImage = async (req, res, next) => {
        const { img } = req.body;
          const response = await cloudinary.uploader.upload(img);
          req.body.img = response.secure_url;
        next();
    };
      
}

module.exports = new ItemsController();