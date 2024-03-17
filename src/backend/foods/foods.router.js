const express =require("express")
const router= express.Router();
const foodsController = require("./foods.controller");
const upload = require("../../middlewares/photoMiddleware");
var { checkAuth, restrictToLoggedinUserOnly } = require("../../middlewares/auth");
// /admin/foods


router.get("/",checkAuth,foodsController.pageViews);
router.get("/yemekekle",checkAuth,foodsController.yemekEkleViews)
router.post("/yemekekle",checkAuth,upload.single("file"),foodsController.yemekekle);
router.get("/yemeksil/:id",checkAuth,foodsController.yemeksil)
router.get("/yemekduzenle/:id",checkAuth,foodsController.yemekDuzenleWievs)
router.post("/yemekduzenle/:id",checkAuth,upload.single("file"),foodsController.yemekguncelle)
module.exports=router