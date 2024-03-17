const express =require("express")
const router= express.Router();
const pastalarController = require("./pastalar.controller");
const upload = require("../../middlewares/photoMiddleware");
var {checkAuth,restrictToLoggedinUserOnly} = require("../../middlewares/auth");
// /admin/foods


router.get("/",checkAuth,pastalarController.pageview);
router.get("/yemekekle",checkAuth,pastalarController.addPageview);
router.post("/add",checkAuth,upload.single("file"),pastalarController.add);
router.get("/update/:id",checkAuth,pastalarController.updateviews);
router.post("/update/:id",checkAuth,upload.single("file"),pastalarController.update);
router.get("/delete/:id",checkAuth,pastalarController.deletee);

module.exports=router