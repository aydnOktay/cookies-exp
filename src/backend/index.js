const router = require("express").Router();
const {checkAuth,restrictToLoggedinUserOnly} = require("../middlewares/auth");
var users = require("../models/user.model");
//  /admin

router.use("/foods",require("./foods/foods.router"));
router.use("/desserts",require("./desserts/desserts.router"))
router.use("/salads",require("./salads/salads.router"))
router.use("/users",require("./users/users.router"));
router.use("/tavukyemekleri",require("./tavukyemekleri/tavukyemekleri.router"));
router.use("/kurabiyeler",require("./kurabiyeler/kurabiyeler.router"));
router.use("/salatalar",require("./salatalar/salatalar.router"));

router.use("/serbetlitatlilar",require("./serbetlitatlilar/serbetlitatlilar.router"));
router.use("/sutlutatlilar",require("./sutlutatlilar/sutlutatlilar.router"));
router.use("/pastalar",require("./pastalar/pastalar.router"));

router.use("/pilavlar",require("./pilavlar/pilavlar.router"));
router.use("/makarnalar",require("./makarnalar/makarnalar.router"));
router.use("/corbalar",require("./corbalar/corbalar.router"));
router.use("/kekler",require("./kekler/kekler.router"));

router.use("/mantilar",require("./mantilar/mantilar.router"));

router.use("/bakliyatlar",require("./bakliyatlar/bakliyatlar.router"));

router.use("/dolmalar",require("./dolmalar/dolmalar.router"));

router.use("/suluyemekler",require("./suluyemekler/suluyemekler.router"));
router.use("/etyemekleri",require("./etyemekleri/etyemekleri.router"));
router.use("/kofteler",require("./kofteler/kofteler.router"));
router.use("/baliklar",require("./baliklar/baliklar.router"));


router.use("/",checkAuth, async (req,res)=>{
    var user = req.user;
    var usersx = await users.find({});
    if(user == null){
        return res.redirect("/kayit");
    } else {
        if(user.isAdmin == false) {
            return res.redirect("/");
        } else {
            res.render("admin/index", {
                user: user,
                usersx: usersx
            })
        }
    }
})


module.exports = router;