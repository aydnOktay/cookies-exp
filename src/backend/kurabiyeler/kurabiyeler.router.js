const express =require("express")
const router= express.Router();
const kurabiyelerController = require("./kurabiyeler.controller");
const upload = require("../../middlewares/photoMiddleware");
var {checkAuth,restrictToLoggedinUserOnly} = require("../../middlewares/auth");
// /admin/foods


router.get("/",checkAuth,kurabiyelerController.pageview);
router.get("/yemekekle",checkAuth,kurabiyelerController.addPageview);
router.post("/add",checkAuth,upload.single("file"),kurabiyelerController.add);
router.get("/update/:id",checkAuth,kurabiyelerController.updateviews);
router.post("/update/:id",checkAuth,upload.single("file"),kurabiyelerController.update);
router.get("/delete/:id",checkAuth,kurabiyelerController.deletee);

module.exports=router