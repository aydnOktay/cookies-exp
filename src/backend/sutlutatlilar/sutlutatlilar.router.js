const express =require("express")
const router= express.Router();
const sutlutatlilarController = require("./sutlutatlilar.controller");
const upload = require("../../middlewares/photoMiddleware");
const {checkAuth,restrictToLoggedinUserOnly} = require("../../middlewares/auth");
// /admin/foods


router.get("/",checkAuth,sutlutatlilarController.pageview);
router.get("/yemekekle",checkAuth, sutlutatlilarController.addPageview);
router.post("/add",checkAuth, upload.single("file"),sutlutatlilarController.add);
router.get("/update/:id",checkAuth, sutlutatlilarController.updateviews);
router.post("/update/:id",checkAuth, upload.single("file"),sutlutatlilarController.update);
router.get("/delete/:id",checkAuth, sutlutatlilarController.deletee);

module.exports=router