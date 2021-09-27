const ApiError = require('../error/ApiError');
const {Categories} = require('../models/models');
const {statusCode, ADDING, UPDATE} = require('../const/const');


class CategoriesController {
    async getAllCategories(req, res) {
        try {
            const categories = await Categories.findAll({
                order: [
                    ['createdAt', 'ASC']
                ]
            });
            return res
            .json(categories)
            .status(statusCode.OK)
            .send({statusCode: statusCode.OK})
           
        }catch(e) {
            const error = ApiError.badRequest(e.message)
            return res
                .json({"message": error.message}) 
                .status(error.status) 
        } 
    }

    async addNewCategory(req, res) {
        try {
            const {name} = req.body;
            const category =  await Categories.create({name});
            if(!category) {
                throw new Error()
            }
            return res
                .send({message: ADDING}) 
                .status(statusCode.OK)  
        } catch(e) {
            const error = ApiError.badRequest(e.message)
            return res
                .json({"message": error.message}) 
                .status(error.status) 
        } 
    }

    async deleteCategory(req, res) { 
        try {
            const id = req.params.id;
        
            Categories.destroy({
                where: { id: id }
            })
            .then(num => {
                if (num == 1) {
                    res.send({
                        message: "Category was deleted successfully!"
                    });
                } else {
                    res.send({
                        message: `Cannot delete Category with id=${id}.`
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

    async updateCategory(req, res) {
        try {
            const id = req.params.id;

            Categories.update(req.body, {
                where: { id: id }
            })
            .then(num => {
                if (num == 1) {
                    res.send({
                        message: UPDATE
                    });
                } else {
                    res.send({
                        message: `Cannot update Category with id=${id}.`
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
                                                 
}

module.exports = new CategoriesController();