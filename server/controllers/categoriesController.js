const ApiError = require('../error/ApiError');
const {Categories} = require('../models/models');
const {statusCode, ADDING, UPDATE} = require('../const/const');

class CategoriesController {
    async getAllCategories(req, res) {
        try {
            const categories = await Categories.findAll();
            return res
            .json(categories)
            .status(statusCode.OK)
            .send({statusCode: statusCode.OK})
           
        }catch(e) {
            next(ApiError.badRequest(e.message)); 
        } 
    }

    async addNewCategory(req, res) {
        try {
            const {name} = req.body;
            await Categories.create({name});
            return res
                .send({message: ADDING})   
        }catch(e) {
            next(ApiError.badRequest(e.message)); 
        }
    }

    async deleteCategory(req, res) {
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
        .catch(err => {
            res.status(500).send({
                message: `Cannot delete Category with id=${id}.`
            });
        });
    }   

    async updateCategory(req, res, next) {
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
            next(ApiError.badRequest(e.message)); 
        }
    } 
                                                 
}

module.exports = new CategoriesController();