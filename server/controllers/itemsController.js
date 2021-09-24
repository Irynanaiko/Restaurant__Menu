const ApiError = require('../error/ApiError');
const {Items} = require('../models/models');
const {statusCode, ADDING, UPDATE} = require('../const/const');

class ItemsController {
    async getAllItems(req, res) {
        try {
            const items = await Items.findAll();
            return res
                .json(items)
                .send({statusCode: statusCode.OK})
        }catch(e) {
            next(ApiError.badRequest(e.message)); 
        }
    }

    async addNewItem(req, res, next) {
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
            next(ApiError.badRequest(e.message)); 
            // res.status(500).send({
            //     message:
            //     e.message || "Some error occurred while creating the Item."
            // });
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

    async updateItem (req, res, next) {
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
            next(ApiError.badRequest(e.message)); 
            // res.status(500).send({
            //     message: "Could not updata Item with id=" + id
            // });
        }
    }

    async deleteItem(req, res) {
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
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Item with id=" + id
            });
        });
    }  
    
    async getItemsByCategory(req, res) {
        try {
            const id = req.params.id;
            let categoryItems = await Items.findAll({ where: { categoryId: id } });
            return res.json(categoryItems);
        }catch(e) {
            next(ApiError.badRequest(e.message)); 
        }
    }
      
}

module.exports = new ItemsController();