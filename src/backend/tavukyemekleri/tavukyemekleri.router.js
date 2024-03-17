const express =require("express")
const router= express.Router();
const tavukyeController = require("./tavukyemekleri.controller");
const upload = require("../../middlewares/photoMiddleware");
const {checkAuth,restrictToLoggedinUserOnly} = require("../../middlewares/auth");
// /admin/foods


router.get("/",checkAuth,tavukyeController.pageview);
router.get("/yemekekle",checkAuth,tavukyeController.addPageview);
router.post("/add",checkAuth,upload.single("file"),tavukyeController.add);
router.get("/update/:id",checkAuth,tavukyeController.updateviews);
router.post("/update/:id",checkAuth,upload.single("file"),tavukyeController.update);
router.get("/delete/:id",checkAuth,tavukyeController.deletee);

module.exports=router