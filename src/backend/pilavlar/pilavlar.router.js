const express =require("express")
const router= express.Router();
const pilavlarController = require("./pilavlar.controller");
const upload = require("../../middlewares/photoMiddleware");
var {checkAuth,restrictToLoggedinUserOnly} = require("../../middlewares/auth");
// /admin/foods


router.get("/",checkAuth,pilavlarController.pageview);
router.get("/yemekekle",checkAuth,pilavlarController.addPageview);
router.post("/add",checkAuth,upload.single("file"),pilavlarController.add);
router.get("/update/:id",checkAuth,pilavlarController.updateviews);
router.post("/update/:id",checkAuth,upload.single("file"),pilavlarController.update);
router.get("/delete/:id",checkAuth,pilavlarController.deletee);

module.exports=router