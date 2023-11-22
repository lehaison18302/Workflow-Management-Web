
const searchRouter = require("express").Router();
const asyncHandler = require("../middlewares/handleError");
const  {compareFood}  = require("../controllers/food.controller");

// Route để so sánh tên món ăn
searchRouter.get("/search", async (req, res) => {
    try {
      const { foodSearch } = req.query; // Lấy tên món ăn từ query parameters
      const matchedFoods = await compareFood(foodSearch); // Gọi controller để thực hiện so sánh

      res.json({ matchedFoods });
    }
    catch (error) {
        res.status(500).json({ error: error.message || "Internal Server Error" });
    }
});

module.exports = searchRouter;
