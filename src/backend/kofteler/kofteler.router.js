const express =require("express")
const router= express.Router();
const koftelerController = require("./kofteler.controller");
const upload = require("../../middlewares/photoMiddleware");
var { checkAuth, restrictToLoggedinUserOnly } = require("../../middlewares/auth");
// /admin/foods


router.get("/",checkAuth,koftelerController.pageview);
router.get("/yemekekle",checkAuth,koftelerController.addPageview);
router.post("/add",checkAuth,upload.single("file"),koftelerController.add);
router.get("/update/:id",checkAuth,koftelerController.updateviews);
router.post("/update/:id",checkAuth,upload.single("file"),koftelerController.update);
router.get("/delete/:id",checkAuth,koftelerController.deletee);

module.exports=router