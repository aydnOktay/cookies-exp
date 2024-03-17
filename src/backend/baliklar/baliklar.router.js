const express =require("express")
const router= express.Router();
const baliklarController = require("./baliklar.controller");
const upload = require("../../middlewares/photoMiddleware");
var {checkAuth,restrictToLoggedinUserOnly} = require("../../middlewares/auth");
// /admin/foods


router.get("/",checkAuth,baliklarController.pageview);
router.get("/yemekekle",checkAuth,baliklarController.addPageview);
router.post("/add",checkAuth,upload.single("file"),baliklarController.add);
router.get("/update/:id",checkAuth,baliklarController.updateviews);
router.post("/update/:id",checkAuth,upload.single("file"),baliklarController.update);
router.get("/delete/:id",checkAuth,baliklarController.deletee);

module.exports=router