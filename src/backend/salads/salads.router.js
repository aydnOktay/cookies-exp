const express =require("express")
const router= express.Router();
const saladsController = require("./salads.controller");
const upload = require("../../middlewares/photoMiddleware");
var {checkAuth,restrictToLoggedinUserOnly} = require("../../middlewares/auth");
// /admin/foods


router.get("/",checkAuth,saladsController.pageViews);
router.get("/salataekle",checkAuth,saladsController.salataEkleViews)
router.post("/salataekle",checkAuth,upload.single("file"),saladsController.salataekle);
router.get("/salatasil/:id",checkAuth,saladsController.salatasil)
router.get("/salataduzenle/:id",checkAuth,saladsController.salataDuzenleWievs)
router.post("/salataduzenle/:id",checkAuth,upload.single("file"),saladsController.salataguncelle)
module.exports=router