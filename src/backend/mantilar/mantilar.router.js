const express =require("express")
const router= express.Router();
const mantilarController = require("./mantilar.controller");
const upload = require("../../middlewares/photoMiddleware");
var {checkAuth,restrictToLoggedinUserOnly} = require("../../middlewares/auth");
// /admin/foods


router.get("/",checkAuth,mantilarController.pageview);
router.get("/yemekekle",checkAuth,mantilarController.addPageview);
router.post("/add",checkAuth,upload.single("file"),mantilarController.add);
router.get("/update/:id",checkAuth,mantilarController.updateviews);
router.post("/update/:id",checkAuth,upload.single("file"),mantilarController.update);
router.get("/delete/:id",checkAuth,mantilarController.deletee);

module.exports=router