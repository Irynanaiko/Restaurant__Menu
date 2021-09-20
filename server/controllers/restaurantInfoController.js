const ApiError = require('../error/ApiError');
const {Restaurant_info} = require('../models/models');
const {statusCode, ADDING, UPDATE} = require('../const/const');

class RestaurantInfoController {
    async getAllRestaurantInfo(req, res) {
        try {
            const restaurantInfo = await Restaurant_info.findAll();
            return res
                .json(restaurantInfo)
                .status(statusCode.OK)
        }catch (e){
            next(ApiError.badRequest(e.message));
        }
    }

    async addRestaurantInfo(req, res, next) {
        try {
            let {name, email, website, logo, address, wifi} = req.body;
            
            await Restaurant_info.create({name, email, website, logo, address, wifi});
            return  res.send({message: ADDING}) 
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }

    async updateRestaurantInfo(req, res, next) {
        try {
            const id = req.params.id;

            Restaurant_info.update(req.body, {
                where: { id: id }
            })
            .then(num => {
                if (num == 1) {
                    res.send({
                        message: UPDATE
                    });
                } else {
                    res.send({
                        message: `Cannot update Restaurant info with id=${id}.`
                    });
                }
            })
        }catch(e) {
            next(ApiError.badRequest(e.message)); 
        }
    }
}

module.exports = new RestaurantInfoController();