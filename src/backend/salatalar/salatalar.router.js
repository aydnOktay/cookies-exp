const express =require("express")
const router= express.Router();
const salatalarController = require("./salatalar.controller");
const upload = require("../../middlewares/photoMiddleware");
const {checkAuth,restrictToLoggedinUserOnly} = require("../../middlewares/auth");
// /admin/foods


router.get("/",checkAuth,salatalarController.pageview);
router.get("/yemekekle",checkAuth,salatalarController.addPageview);
router.post("/add",checkAuth,upload.single("file"),salatalarController.add);
router.get("/update/:id",checkAuth,salatalarController.updateviews);
router.post("/update/:id",checkAuth,upload.single("file"),salatalarController.update);
router.get("/delete/:id",checkAuth,salatalarController.deletee);

module.exports=router