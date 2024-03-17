const express =require("express")
const router= express.Router();
const userController = require("./users.controller");
const upload = require("../../middlewares/photoMiddleware");

router.post("/",userController.kayitol);
router.post("/girisyap",userController.girisyap);
router.get("/",userController.pageView);
router.post("/sifremiunuttum",userController.sifremiunuttum);
router.get("/sifre-yenile/:id/:token",userController.sifreyenile);
router.post("/sifresifirla",userController.sifresifirla);

module.exports=router