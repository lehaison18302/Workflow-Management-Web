const foodRouter = require("./food.route");
const userRouter = require("./user.route");
const searchRouter = require("./search.route")

const rootRouter = require("express").Router();

rootRouter.use(foodRouter);
rootRouter.use(userRouter);
roo

module.exports = rootRouter;
