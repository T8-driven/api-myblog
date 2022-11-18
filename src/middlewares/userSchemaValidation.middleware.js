import { usersSchema } from "../models/user.model";

export function userSchemaValidation(req, res, next) {
  const user = req.body;

  const { error } = usersSchema.validate(user, { abortEarly: false });

  if (error) {
    const errors = error.details.map((detail) => detail.message);
    return res.status(400).send(errors);
  }

  req.user = user;

  next();
}
