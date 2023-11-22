const foodService = require("./../services/food.service");

const getAllFood = async (req, res) => {
  return res.status(200).json({
    success: true,
    foods: await foodService.getAllFood(),
  });
};

/* định nghĩa hàm so sánh tìm kiếm tên món ăn */
const compareFood = async (foodSearch) => {
  try {
    const allFoods = await foodService.getAllFood();
    const matchedFoods = allFoods.filter(food => food.name.toLowerCase() === foodSearch.toLowerCase());

    return matchedFoods;
  } catch (error) {
    console.error(error);
    throw new Error("Error comparing foods");
  }
};

module.exports = {
  getAllFood, compareFood
};
