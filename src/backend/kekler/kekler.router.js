const express =require("express")
const router= express.Router();
const keklerController = require("./kekler.controller");
const upload = require("../../middlewares/photoMiddleware");
const {checkAuth,restrictToLoggedinUserOnly} = require("../../middlewares/auth");
// /admin/foods


router.get("/",checkAuth,keklerController.pageview);
router.get("/yemekekle",checkAuth,keklerController.addPageview);
router.post("/add",checkAuth,upload.single("file"),keklerController.add);
router.get("/update/:id",checkAuth,keklerController.updateviews);
router.post("/update/:id",checkAuth,upload.single("file"),keklerController.update);
router.get("/delete/:id",checkAuth,keklerController.deletee);

module.exports=router