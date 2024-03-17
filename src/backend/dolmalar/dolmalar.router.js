const express =require("express")
const router= express.Router();
const dolmalarController = require("./dolmalar.controller");
const upload = require("../../middlewares/photoMiddleware");
var {checkAuth,restrictToLoggedinUserOnly} = require("../../middlewares/auth");
// /admin/foods


router.get("/",checkAuth,dolmalarController.pageview);
router.get("/yemekekle",checkAuth,dolmalarController.addPageview);
router.post("/add",checkAuth,upload.single("file"),dolmalarController.add);
router.get("/update/:id",checkAuth,dolmalarController.updateviews);
router.post("/update/:id",checkAuth,upload.single("file"),dolmalarController.update);
router.get("/delete/:id",checkAuth,dolmalarController.deletee);

module.exports=router