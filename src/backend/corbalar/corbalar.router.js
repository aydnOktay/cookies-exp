const express =require("express")
const router= express.Router();
const corbalarController = require("./corbalar.controller");
const upload = require("../../middlewares/photoMiddleware");
var { checkAuth, restrictToLoggedinUserOnly } = require("../../middlewares/auth");
// /admin/foods


router.get("/",checkAuth,corbalarController.pageview);
router.get("/yemekekle",checkAuth,corbalarController.addPageview);
router.post("/add",checkAuth,upload.single("file"),corbalarController.add);
router.get("/update/:id",checkAuth,corbalarController.updateviews);
router.post("/update/:id",checkAuth,upload.single("file"),corbalarController.update);
router.get("/delete/:id",checkAuth,corbalarController.deletee);

module.exports=router