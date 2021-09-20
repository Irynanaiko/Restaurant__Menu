
const validation = (schema) => {
    return (req, res, next) => {
      const { error } = schema.validate(req.body);
      if (!error) {
        next();
      } else {
        res
          .status(422)
          .send({statusCode: 422, error: `Validation error: ${error.details.map(x => x.message).join(', ')}`})  
      }
    };
  };

module.exports = validation;