const express =require("express")
const router= express.Router();
const etyeController = require("./etyemekleri.controller");
const upload = require("../../middlewares/photoMiddleware");
var {checkAuth,restrictToLoggedinUserOnly} = require("../../middlewares/auth");
// /admin/foods


router.get("/",checkAuth,etyeController.pageview);
router.get("/yemekekle",checkAuth,etyeController.addPageview);
router.post("/add",checkAuth,upload.single("file"),etyeController.add);
router.get("/update/:id",checkAuth,etyeController.updateviews);
router.post("/update/:id",checkAuth,upload.single("file"),etyeController.update);
router.get("/delete/:id",checkAuth,etyeController.deletee);

module.exports=router