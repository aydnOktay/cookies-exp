const express =require("express")
const router= express.Router();
const serbetlitatlilarController = require("./serbetlitatlilar.controller");
const upload = require("../../middlewares/photoMiddleware");
var {checkAuth,restrictToLoggedinUserOnly} = require("../../middlewares/auth");
// /admin/foods


router.get("/",checkAuth,serbetlitatlilarController.pageview);
router.get("/yemekekle",checkAuth,serbetlitatlilarController.addPageview);
router.post("/add",checkAuth,upload.single("file"),serbetlitatlilarController.add);
router.get("/update/:id",checkAuth,serbetlitatlilarController.updateviews);
router.post("/update/:id",checkAuth,upload.single("file"),serbetlitatlilarController.update);
router.get("/delete/:id",checkAuth,serbetlitatlilarController.deletee);

module.exports=router