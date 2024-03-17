const express =require("express")
const router= express.Router();
const makarnalarController = require("./makarnalar.controller");
const upload = require("../../middlewares/photoMiddleware");
var {checkAuth,restrictToLoggedinUserOnly} = require("../../middlewares/auth");
// /admin/foods


router.get("/",checkAuth,makarnalarController.pageview);
router.get("/yemekekle",checkAuth,makarnalarController.addPageview);
router.post("/add",checkAuth,upload.single("file"),makarnalarController.add);
router.get("/update/:id",checkAuth,makarnalarController.updateviews);
router.post("/update/:id",checkAuth,upload.single("file"),makarnalarController.update);
router.get("/delete/:id",checkAuth,makarnalarController.deletee);

module.exports=router