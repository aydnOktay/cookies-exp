const express =require("express")
const router= express.Router();
const dessertsController = require("./desserts.controller");
const upload = require("../../middlewares/photoMiddleware");
var {checkAuth,restrictToLoggedinUserOnly} = require("../../middlewares/auth");
// /admin/foods


router.get("/",checkAuth,dessertsController.pageViews);
router.get("/tatliekle",checkAuth,dessertsController.tatliEkleViews)
router.post("/tatliekle",checkAuth,upload.single("file"),dessertsController.tatliekle);
router.get("/tatlisil/:id",checkAuth,dessertsController.tatlisil)
router.get("/tatliduzenle/:id",checkAuth,dessertsController.tatliDuzenleWievs)
router.post("/tatliduzenle/:id",checkAuth,upload.single("file"),dessertsController.tatliguncelle)
module.exports=router