const favoriteRouter = require("./favorite.route");
const foodRouter = require("./food.route");
const userRouter = require("./user.route");
const searchRouter = require("./search.route")

const rootRouter = require("express").Router();

rootRouter.use(foodRouter);
rootRouter.use(userRouter);
rootRouter.use(favoriteRouter);
rootRouter.use(searchRouter);

module.exports = rootRouter;
