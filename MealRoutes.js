const { Router } = require('express');
const { getMeal, saveMeals, deleteMeal, editMeal } = require('./MealController');
const router = Router();


//эти строчки чтоб поняь работает ли это в браузере
// router.get('/', (req, res) => {
// res.json({test: "We got here!!!"})
// })

//тут мф ходим получить реальный get 
// его берем из mealCONTROLLER

 router.get('/', getMeal);
router.post('/saveMeals', saveMeals);
// //часто вместо delete пишут post
router.delete('/deleteMeal', deleteMeal)
// router.post('/deleteMeal', deleteMeal)
router.put('/editMeal', editMeal)





module.exports  = router;