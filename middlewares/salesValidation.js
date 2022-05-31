const Joi = require('joi');

const saleShema = Joi.object({
  productId: Joi.required(),
  quantity: Joi.min(1).required(),
});

const salesValidation = (req, res, next) => {
  const { error } = saleShema.validate(req);
  if (!error) {
    return next();
  }
  const { type, message } = error.details[0];
  if (type === 'any.required') {
    return res.status(400).json({ message });
  }
  return res.status(422).json({ message });
};

module.exports = salesValidation;
