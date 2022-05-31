const Joi = require('joi');

const productShema = Joi.object({
  name: Joi.string().min(5).required(),
  quantity: Joi.number().min(1).required(),
});

const productsValidation = (req, res, next) => {
  const { error } = productShema.validate(req.body);
  if (!error) {
    return next();
  }
  const { type, message } = error.details[0];
  if (type === 'any.required') {
    return res.status(400).json({ message });
  }
  return res.status(422).json({ message });
};

module.exports = productsValidation;
