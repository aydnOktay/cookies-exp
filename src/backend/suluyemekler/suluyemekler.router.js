const express =require("express")
const router= express.Router();
const suluyemeklerController = require("./suluyemekler.controller");
const upload = require("../../middlewares/photoMiddleware");
const {checkAuth,restrictToLoggedinUserOnly} = require("../../middlewares/auth");
// /admin/foods


router.get("/",checkAuth,suluyemeklerController.pageview);
router.get("/yemekekle",checkAuth,suluyemeklerController.addPageview);
router.post("/add",checkAuth,upload.single("file"),suluyemeklerController.add);
router.get("/update/:id",checkAuth,suluyemeklerController.updateviews);
router.post("/update/:id",checkAuth,upload.single("file"),suluyemeklerController.update);
router.get("/delete/:id",checkAuth,suluyemeklerController.deletee);

module.exports=router