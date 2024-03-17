const express =require("express")
const router= express.Router();
const bakliyatlarController = require("./bakliyatlar.controller");
const upload = require("../../middlewares/photoMiddleware");
var {checkAuth,restrictToLoggedinUserOnly} = require("../../middlewares/auth");
// /admin/foods


router.get("/",checkAuth,bakliyatlarController.pageview);
router.get("/yemekekle",checkAuth,bakliyatlarController.addPageview);
router.post("/add",checkAuth,upload.single("file"),bakliyatlarController.add);
router.get("/update/:id",checkAuth,bakliyatlarController.updateviews);
router.post("/update/:id",checkAuth,upload.single("file"),bakliyatlarController.update);
router.get("/delete/:id",checkAuth,bakliyatlarController.deletee);

module.exports=router