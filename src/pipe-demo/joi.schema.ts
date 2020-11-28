import * as Joi from "@hapi/joi";

export default Joi.object({
    name: Joi.string().min(0).max(12).required(),
    age: Joi.number().integer().min(0).max(200).required(),
    breed: Joi.string()
})