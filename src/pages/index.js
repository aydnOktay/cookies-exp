const router = require("express").Router();
const etyemekleri = require("../models/etyemekleri.model");
const makarnalar = require("../models/makarnalar.model");
const pilav = require("../models/pilavlar.model");
const manti = require("../models/mantilar.model");
const bakliyat = require("../models/bakliyatlar.model");
const dolma = require("../models/dolmalar.model");
const suluyemek = require("../models/suluyemekler.model");
const balik = require("../models/baliklar.model");
const kofte = require("../models/kofteler.model");
const tavukyemekleri = require("../models/tavukyemekleri.model");
const corbalar = require("../models/corbalar.model");
const salata = require("../models/salatalar.model");
const kek = require("../models/kekler.model");
const serbetlitatli = require("../models/serbetlitatlilar.model");
const sutlutatli = require("../models/sutlutatlilar.model");
const pasta = require("../models/pastalar.model");
const kurabiye = require("../models/kurabiyeler.model");
const { restrictToLoggedinUserOnly, checkAuth } = require("../middlewares/auth");
var userSchema = require("../models/user.model");
const { setUser } = require("../middlewares/service/auth");

router.get("/logout", async (req, res) => {
    res.clearCookie("uid");
    return res.redirect("/");
});

router.get("/",checkAuth, async (req, res) => {
    if(req.user == null){
        return res.render("index", {
            data : null
        });
    } else {


        var cookies = req.user.cookies;

        if(cookies.length > 0) {
                        
            
            if(cookies[0].name == "tavukyemekleri") {
                var tavukyemekleriId = cookies[0].value;
                var tavukyemekleriDatax = await tavukyemekleri.find({});
              
                
                var tavukyemekleriData = tavukyemekleriDatax.filter((item) => {
                    return item._id != tavukyemekleriId;
                })[0];


                var tavukyemekleriData2 = tavukyemekleriDatax.filter((item) => {
                    return item._id != tavukyemekleriId;
                })[1];

                
                return res.render("index", {
                    data: {
                        user: req.user,
                        items: [{
                            link: "/tavukyemekleridetay/" + tavukyemekleriData._id,
                            title: tavukyemekleriData.tavukyemekleri_title,
                            description: tavukyemekleriData.tavukyemekleri_description,
                            photo:  "admin/demos/" + tavukyemekleriData.tavukyemekleri_photo,
                        },
                        {
                            link: "/tavukyemekleridetay/" + tavukyemekleriData2._id,
                            title: tavukyemekleriData2.tavukyemekleri_title,
                            description: tavukyemekleriData2.tavukyemekleri_description,
                            photo:  "admin/demos/" + tavukyemekleriData2.tavukyemekleri_photo,
                        }
                    ]
                    }
                })
            }

            //etyemekleri için
            if(cookies[0].name == "etyemekleri") {
                var etyemekleriId = cookies[0].value;
                var etyemekleriDatax = await etyemekleri.find({});
              
                //idsi tutulan tavukyemeği hariç bir tane varolan veri çek
                var etyemekleriData = etyemekleriDatax.filter((item) => {
                    return item._id != etyemekleriId;
                })[0];

                var etyemekleriData2 = etyemekleriDatax.filter((item) => {
                    return item._id != etyemekleriId;
                })[1];

                return res.render("index", {
                    data: {
                        user: req.user,
                        items: [{
                            link: "/etyemekleridetay/" + etyemekleriData._id,
                            title: etyemekleriData.etyemekleri_title,
                            description: etyemekleriData.etyemekleri_description,
                            photo:  "admin/demos/" + etyemekleriData.etyemekleri_photo,
                        },
                        {
                            link: "/etyemekleridetay/" + etyemekleriData2._id,
                            title: etyemekleriData2.etyemekleri_title,
                            description: etyemekleriData2.etyemekleri_description,
                            photo:  "admin/demos/" + etyemekleriData2.etyemekleri_photo,
                        }
                    ]
                    }
                })
            } 

            //corbalar için
            if(cookies[0].name == "corbalar") {
                var corbalarId = cookies[0].value;
                var corbalarDatax = await corbalar.find({});
              
                //idsi tutulan tavukyemeği hariç bir tane varolan veri çek
                var corbalarData = corbalarDatax.filter((item) => {
                    return item._id != corbalarId;
                })[0];

                var corbalarData2 = corbalarDatax.filter((item) => {
                    return item._id != corbalarId;
                })[1];

                return res.render("index", {
                    data: {
                        user: req.user,
                        items: [{
                            link: "/corbadetay/" + corbalarData._id,
                            title: corbalarData.corbalar_title,
                            description: corbalarData.corbalar_description,
                            photo:  "admin/demos/" + corbalarData.corbalar_photo,
                        },
                        {
                            link: "/corbadetay/" + corbalarData2._id,
                            title: corbalarData2.corbalar_title,
                            description: corbalarData2.corbalar_description,
                            photo:  "admin/demos/" + corbalarData2.corbalar_photo,
                        }
                    ]
                    }
                })
            }

            //kofteler için
            if(cookies[0].name == "kofteler") {
                var koftelerId = cookies[0].value;
                var koftelerDatax = await kofte.find({});
              
                //idsi tutulan tavukyemeği hariç bir tane varolan veri çek
                var koftelerData = koftelerDatax.filter((item) => {
                    return item._id != koftelerId;
                })[0];

                var koftelerData2 = koftelerDatax.filter((item) => {
                    return item._id != koftelerId;
                })[1];

                return res.render("index", {
                    data: {
                        user: req.user,
                        items: [{
                            link: "/koftedetay/" + koftelerData._id,
                            title: koftelerData.kofteler_title,
                            description: koftelerData.kofteler_description,
                            photo:  "admin/demos/" + koftelerData.kofteler_photo,
                        },
                        {
                            link: "/koftedetay/" + koftelerData2._id,
                            title: koftelerData2.kofteler_title,
                            description: koftelerData2.kofteler_description,
                            photo:  "admin/demos/" + koftelerData2.kofteler_photo,
                        }
                    ]
                    }
                })
            }

            //baliklar için
            if(cookies[0].name == "baliklar") {
                var baliklarId = cookies[0].value;
                var baliklarDatax = await balik.find({});
              
                //idsi tutulan tavukyemeği hariç bir tane varolan veri çek
                var baliklarData = baliklarDatax.filter((item) => {
                    return item._id != baliklarId;
                })[0];

                var baliklarData2 = baliklarDatax.filter((item) => {
                    return item._id != baliklarId;
                })[1];

                return res.render("index", {
                    data: {
                        user: req.user,
                        items: [{
                            link: "/balikdetay/" + baliklarData._id,
                            title: baliklarData.baliklar_title,
                            description: baliklarData.baliklar_description,
                            photo:  "admin/demos/" + baliklarData.baliklar_photo,
                        },
                        {
                            link: "/balikdetay/" + baliklarData2._id,
                            title: baliklarData2.baliklar_title,
                            description: baliklarData2.baliklar_description,
                            photo:  "admin/demos/" + baliklarData2.baliklar_photo,
                        }
                    ]
                    }
                })
            }

            //suluyemekler için
            if(cookies[0].name == "suluyemekler") {
                var suluyemeklerId = cookies[0].value;
                var suluyemeklerDatax = await suluyemek.find({});
              
                //idsi tutulan tavukyemeği hariç bir tane varolan veri çek
                var suluyemeklerData = suluyemeklerDatax.filter((item) => {
                    return item._id != suluyemeklerId;
                })[0];

                var suluyemeklerData2 = suluyemeklerDatax.filter((item) => {
                    return item._id != suluyemeklerId;
                })[1];

                return res.render("index", {
                    data: {
                        user: req.user,
                        items: [{
                            link: "/suluyemekdetay/" + suluyemeklerData._id,
                            title: suluyemeklerData.suluyemekler_title,
                            description: suluyemeklerData.suluyemekler_description,
                            photo:  "admin/demos/" + suluyemeklerData.suluyemekler_photo,
                        },
                        {
                            link: "/suluyemekdetay/" + suluyemeklerData2._id,
                            title: suluyemeklerData2.suluyemekler_title,
                            description: suluyemeklerData2.suluyemekler_description,
                            photo:  "admin/demos/" + suluyemeklerData2.suluyemekler_photo,
                        }
                    ]
                    }
                })
            }

            //dolmalar için
            if(cookies[0].name == "dolmalar") {
                var dolmalarId = cookies[0].value;
                var dolmalarDatax = await dolma.find({});
              
                //idsi tutulan tavukyemeği hariç bir tane varolan veri çek
                var dolmalarData = dolmalarDatax.filter((item) => {
                    return item._id != dolmalarId;
                })[0];

                var dolmalarData2 = dolmalarDatax.filter((item) => {
                    return item._id != dolmalarId;
                })[1];

                return res.render("index", {
                    data: {
                        user: req.user,
                        items: [{
                            link: "/dolmadetay/" + dolmalarData._id,
                            title: dolmalarData.dolmalar_title,
                            description: dolmalarData.dolmalar_description,
                            photo:  "admin/demos/" + dolmalarData.dolmalar_photo,
                        },
                        {
                            link: "/dolmadetay/" + dolmalarData2._id,
                            title: dolmalarData2.dolmalar_title,
                            description: dolmalarData2.dolmalar_description,
                            photo:  "admin/demos/" + dolmalarData2.dolmalar_photo,
                        }
                    ]
                    }
                })
            }

            //bakliyatlar için
            if(cookies[0].name == "bakliyatlar") {
                var bakliyatlarId = cookies[0].value;
                var bakliyatlarDatax = await bakliyat.find({});
              
                //idsi tutulan tavukyemeği hariç bir tane varolan veri çek
                var bakliyatlarData = bakliyatlarDatax.filter((item) => {
                    return item._id != bakliyatlarId;
                })[0];

                var bakliyatlarData2 = bakliyatlarDatax.filter((item) => {
                    return item._id != bakliyatlarId;
                })[1];

                return res.render("index", {
                    data: {
                        user: req.user,
                        items: [{
                            link: "/bakliyatdetay/" + bakliyatlarData._id,
                            title: bakliyatlarData.bakliyatlar_title,
                            description: bakliyatlarData.bakliyatlar_description,
                            photo:  "admin/demos/" + bakliyatlarData.bakliyatlar_photo,
                        },
                        {
                            link: "/bakliyatdetay/" + bakliyatlarData2._id,
                            title: bakliyatlarData2.bakliyatlar_title,
                            description: bakliyatlarData2.bakliyatlar_description,
                            photo:  "admin/demos/" + bakliyatlarData2.bakliyatlar_photo,
                        }
                    ]
                    }
                })
            }

            //mantilar için
            if(cookies[0].name == "mantilar") {
                var mantilarId = cookies[0].value;
                var mantilarDatax = await manti.find({});
              
                //idsi tutulan tavukyemeği hariç bir tane varolan veri çek
                var mantilarData = mantilarDatax.filter((item) => {
                    return item._id != mantilarId;
                })[0];

                var mantilarData2 = mantilarDatax.filter((item) => {
                    return item._id != mantilarId;
                })[1];

                return res.render("index", {
                    data: {
                        user: req.user,
                        items: [{
                            link: "/mantidetay/" + mantilarData._id,
                            title: mantilarData.mantilar_title,
                            description: mantilarData.mantilar_description,
                            photo:  "admin/demos/" + mantilarData.mantilar_photo,
                        },
                        {
                            link: "/mantidetay/" + mantilarData2._id,
                            title: mantilarData2.mantilar_title,
                            description: mantilarData2.mantilar_description,
                            photo:  "admin/demos/" + mantilarData2.mantilar_photo,
                        }
                    ]
                    }
                })
            }

            //pilavlar için

            if(cookies[0].name == "pilavlar") {
                var pilavlarId = cookies[0].value;
                var pilavlarDatax = await pilav.find({});
              
                //idsi tutulan tavukyemeği hariç bir tane varolan veri çek
                var pilavlarData = pilavlarDatax.filter((item) => {
                    return item._id != pilavlarId;
                })[0];

                var pilavlarData2 = pilavlarDatax.filter((item) => {
                    return item._id != pilavlarId;
                })[1];

                return res.render("index", {
                    data: {
                        user: req.user,
                        items: [{
                            link: "/pilavdetay/" + pilavlarData._id,
                            title: pilavlarData.pilavlar_title,
                            description: pilavlarData.pilavlar_description,
                            photo:  "admin/demos/" + pilavlarData.pilavlar_photo,
                        },
                        {
                            link: "/pilavdetay/" + pilavlarData2._id,
                            title: pilavlarData2.pilavlar_title,
                            description: pilavlarData2.pilavlar_description,
                            photo:  "admin/demos/" + pilavlarData2.pilavlar_photo,
                        }
                    ]
                    }
                })
            }


            //makarnalar için

            if(cookies[0].name == "makarnalar") {
                var makarnalarId = cookies[0].value;
                var makarnalarDatax = await makarnalar.find({});
              
                //idsi tutulan tavukyemeği hariç bir tane varolan veri çek
                var makarnalarData = makarnalarDatax.filter((item) => {
                    return item._id != makarnalarId;
                })[0];

                var makarnalarData2 = makarnalarDatax.filter((item) => {
                    return item._id != makarnalarId;
                })[1];

                return res.render("index", {
                    data: {
                        user: req.user,
                        items: [{
                            link: "/makarnadetay/" + makarnalarData._id,
                            title: makarnalarData.makarnalar_title,
                            description: makarnalarData.makarnalar_description,
                            photo:  "admin/demos/" + makarnalarData.makarnalar_photo,
                        },
                        {
                            link: "/makarnadetay/" + makarnalarData2._id,
                            title: makarnalarData2.makarnalar_title,
                            description: makarnalarData2.makarnalar_description,
                            photo:  "admin/demos/" + makarnalarData2.makarnalar_photo,
                        }
                    ]
                    }
                })
            }

            //salatalar için

            if(cookies[0].name == "salatalar") {
                var salatalarId = cookies[0].value;
                var salatalarDatax = await salata.find({});
              
                //idsi tutulan tavukyemeği hariç bir tane varolan veri çek
                var salatalarData = salatalarDatax.filter((item) => {
                    return item._id != salatalarId;
                })[0];

                var salatalarData2 = salatalarDatax.filter((item) => {
                    return item._id != salatalarId;
                })[1];

                return res.render("index", {
                    data: {
                        user: req.user,
                        items: [{
                            link: "/salatadetay/" + salatalarData._id,
                            title: salatalarData.salatalar_title,
                            description: salatalarData.salatalar_description,
                            photo:  "admin/demos/" + salatalarData.salatalar_photo,
                        },
                        {
                            link: "/salatadetay/" + salatalarData2._id,
                            title: salatalarData2.salatalar_title,
                            description: salatalarData2.salatalar_description,
                            photo:  "admin/demos/" + salatalarData2.salatalar_photo,
                        }
                    ]
                    }
                })
            }

            //kekler için

            if(cookies[0].name == "kekler") {
                var keklerId = cookies[0].value;
                var keklerDatax = await kek.find({});
              
                //idsi tutulan tavukyemeği hariç bir tane varolan veri çek
                var keklerData = keklerDatax.filter((item) => {
                    return item._id != keklerId;
                })[0];

                var keklerData2 = keklerDatax.filter((item) => {
                    return item._id != keklerId;
                })[1];

                return res.render("index", {
                    data: {
                        user: req.user,
                        items: [{
                            link: "/keketay/" + keklerData._id,
                            title: keklerData.kek_title,
                            description: keklerData.kek_description,
                            photo:  "admin/demos/" + keklerData.kek_photo,
                        },
                        {
                            link: "/keketay/" + keklerData2._id,
                            title: keklerData2.kek_title,
                            description: keklerData2.kek_description,
                            photo:  "admin/demos/" + keklerData2.kek_photo,
                        }
                    ]
                    }
                })
            }

            //serbetlitatlilar için

            if(cookies[0].name == "serbetlitatlilar") {
                var serbetlitatlilarId = cookies[0].value;
                var serbetlitatlilarDatax = await serbetlitatli.find({});
              
                //idsi tutulan tavukyemeği hariç bir tane varolan veri çek
                var serbetlitatlilarData = serbetlitatlilarDatax.filter((item) => {
                    return item._id != serbetlitatlilarId;
                })[0];

                var serbetlitatlilarData2 = serbetlitatlilarDatax.filter((item) => {
                    return item._id != serbetlitatlilarId;
                })[1];

                return res.render("index", {
                    data: {
                        user: req.user,
                        items: [{
                            link: "/serbetlitatlidetay/" + serbetlitatlilarData._id,
                            title: serbetlitatlilarData.serbetlitatlilar_title,
                            description: serbetlitatlilarData.serbetlitatlilar_description,
                            photo:  "admin/demos/" + serbetlitatlilarData.serbetlitatlilar_photo,
                        },
                        {
                            link: "/serbetlitatlidetay/" + serbetlitatlilarData2._id,
                            title: serbetlitatlilarData2.serbetlitatlilar_title,
                            description: serbetlitatlilarData2.serbetlitatlilar_description,
                            photo:  "admin/demos/" + serbetlitatlilarData2.serbetlitatlilar_photo,
                        }
                    ]
                    }
                })
            }

            //pastalar için

            if(cookies[0].name == "pastalar") {
                var pastalarId = cookies[0].value;
                var pastalarDatax = await pasta.find({});
              
                //idsi tutulan tavukyemeği hariç bir tane varolan veri çek
                var pastalarData = pastalarDatax.filter((item) => {
                    return item._id != pastalarId;
                })[0];

                var pastalarData2 = pastalarDatax.filter((item) => {
                    return item._id != pastalarId;
                })[1];

                return res.render("index", {
                    data: {
                        user: req.user,
                        items: [{
                            link: "/pastadetay/" + pastalarData._id,
                            title: pastalarData.pastalar_title,
                            description: pastalarData.pastalar_description,
                            photo:  "admin/demos/" + pastalarData.pastalar_photo,
                        },
                        {
                            link: "/pastadetay/" + pastalarData2._id,
                            title: pastalarData2.pastalar_title,
                            description: pastalarData2.pastalar_description,
                            photo:  "admin/demos/" + pastalarData2.pastalar_photo,
                        }
                    ]
                    }
                })
            }

            //kurabiyeler için

            if(cookies[0].name == "kurabiyeler") {

                var kurabiyelerId = cookies[0].value;
                var kurabiyelerDatax = await kurabiye.find({});
              
                //idsi tutulan tavukyemeği hariç bir tane varolan veri çek
                var kurabiyelerData = kurabiyelerDatax.filter((item) => {
                    return item._id != kurabiyelerId;
                })[0];

                var kurabiyelerData2 = kurabiyelerDatax.filter((item) => {
                    return item._id != kurabiyelerId;
                })[1];

                return res.render("index", {
                    data: {
                        user: req.user,
                        items: [{
                            link: "/kurabiyedetay/" + kurabiyelerData._id,
                            title: kurabiyelerData.kurabiyeler_title,
                            description: kurabiyelerData.kurabiyeler_description,
                            photo:  "admin/demos/" + kurabiyelerData.kurabiyeler_photo,
                        },
                        {
                            link: "/kurabiyedetay/" + kurabiyelerData2._id,
                            title: kurabiyelerData2.kurabiyeler_title,
                            description: kurabiyelerData2.kurabiyeler_description,
                            photo:  "admin/demos/" + kurabiyelerData2.kurabiyeler_photo,
                        }
                    ]
                    }
                })
            }

            //tatlilar için

            if(cookies[0].name == "tatlilar") {

                var tatlilarId = cookies[0].value;
                var tatlilarDatax = await tatli.find({});
              
                //idsi tutulan tavukyemeği hariç bir tane varolan veri çek
                var tatlilarData = tatlilarDatax.filter((item) => {
                    return item._id != tatlilarId;
                })[0];

                var tatlilarData2 = tatlilarDatax.filter((item) => {
                    return item._id != tatlilarId;
                })[1];

                return res.render("index", {
                    data: {
                        user: req.user,
                        items: [{
                            link: "/tatlidetay/" + tatlilarData._id,
                            title: tatlilarData.tatlilar_title,
                            description: tatlilarData.tatlilar_description,
                            photo:  "admin/demos/" + tatlilarData.tatlilar_photo,
                        },
                        {
                            link: "/tatlidetay/" + tatlilarData2._id,
                            title: tatlilarData2.tatlilar_title,
                            description: tatlilarData2.tatlilar_description,
                            photo:  "admin/demos/" + tatlilarData2.tatlilar_photo,
                        }
                    ]
                    }
                })
            }

        } else {
            return res.render("index", {data: {user: req.user, item: null}})
        }
    }
})

router.get("/iletisim",checkAuth, async (req, res) => {
    var user = req.user;
    if(user == null){
        return res.render("contact", {
            data: {
                user: null
            }
        });
    } else {
        res.render("contact", {
            data: {
                user: user
            }
        })
    }
})

router.get("/profil", checkAuth, async (req, res) => {
    var user = req.user;
    if(user == null){
        return res.redirect("/kayit");
    } else {
        res.render("profile", {
            data: {
                user: user
            }
        })
    }})

router.get("/kayit",checkAuth, async (req, res) => {
    var user = req.user;
    if(user) {
        return res.redirect("/");
    } else {
        return res.render("kayitol", {
            error: null,
            data: null
        })
    }

})

router.get("/tavukyemekleri",checkAuth, async (req, res) => {
    //eğer ?page= sayfa numarası varsa onu al yoksa 1 al
    const page = parseInt(req.query.page) || 1;

    //limit dört adet olacak şekilde ayarlandı
    const limit = 4;
    const skip = (page - 1) * limit;

    const total = await tavukyemekleri.countDocuments()
    if(total > 0) {
        var totalPages = Math.ceil(total / limit) + 1;
    } else {
        var totalPages = Math.ceil(total / limit)
    }

    var pageDataStart = (page - 1) * limit + 1;
    var pageDataEnd = page * limit;

    if(page > totalPages) {
        return res.redirect("/tavukyemekleri?page=1")
    }

    const pagination = {
        totalPages,
        page,
        skip,
        pageDataStart,
        pageDataEnd
    }

    const tavukyemeklerii = (await tavukyemekleri.find()).slice(pageDataStart - 1, pageDataEnd);

    var user = req.user;
    if(user !== null) {
        return res.render("tavukyemekleri", { data: { tavukyemeklerii, user: user, pagination } })
    } else {
        return res.render("tavukyemekleri", { data: { tavukyemeklerii, pagination} })
    }
});
    
router.get("/tavukyemekleridetay/:id",checkAuth, async (req, res) => {
    const id = req.params.id;
    const tavukyemeklerii = await tavukyemekleri.findById(id);
    var user = req.user;

    
    if(user) {
    await userSchema.findOneAndUpdate({
        _id : user._id
    }, {
        cookies: [
            {name: "tavukyemekleri", value: id}
        ]
    })

    req.user = await userSchema.findOne({_id: user._id})
    setUser(req.cookies?.uid, req.user)
    }

    if(user !== null) {
    return res.render("tavukdetay", { data: { tavukyemeklerii, user: user } })
    } else {
    return res.render("tavukdetay", { data: { tavukyemeklerii } })
    }
})

router.post("/tavukyemekleridetay/:id",checkAuth, async (req, res) => {
    const id = req.params.id;
    const tavukyemeklerii = await tavukyemekleri.findById(id);
    var user = req.user;
    if(user) {

        var userx = await userSchema.findOne({_id: user._id})
        var userCart = userx.cart; 
        if(userCart.includes(tavukyemeklerii.tavukyemekleri_title)) {
            return res.redirect("/profil")
        }     
        
        for(var i = 0; i < userCart.length; i++) {
            if(userCart[i].name == tavukyemeklerii.tavukyemekleri_title) {
                return res.redirect("/profil")
            }
        }
        
        userCart.push({"name": tavukyemeklerii.tavukyemekleri_title, "datas": tavukyemeklerii.tavukyemekleri_materials})

        

        await userSchema.findOneAndUpdate({
            _id : user._id
        }, {
            cart: userCart
        })

        req.user = await userSchema.findOne({_id: user._id})
        setUser(req.cookies?.uid, req.user)

        return res.redirect("/profil")
    } else {
        return res.redirect("/")
    }
    

})

router.post("/cart/delete/:name",checkAuth, async (req, res) => {
    var name = req.params.name;
    var user = req.user;
    if(user !== null) {
        var userx = await userSchema.findOne({_id: user._id})
        var userCart = userx.cart;        
        var newCart = userCart.filter((item) => {
            return item.name !== name;
        })

        await userSchema.findOneAndUpdate({
            _id : user._id
        }, {
            cart: newCart
        })

        req.user = await userSchema.findOne({_id: user._id})
        setUser(req.cookies?.uid, req.user)

        return res.redirect("/profil")
    } else {
        return res.redirect("/")
    }

});

router.get("/etyemekleri",checkAuth, async (req, res) => {
    var user = req.user;

    const page = parseInt(req.query.page) || 1;

    //limit dört adet olacak şekilde ayarlandı
    const limit = 4;
    const skip = (page - 1) * limit;

    const total = await etyemekleri.countDocuments() % limit;

    if(total > 0) {
        var totalPages = Math.ceil(total / limit) + 1;
    } else {
        var totalPages = Math.ceil(total / limit)
    }


    var pageDataStart = (page - 1) * limit + 1;

    var pageDataEnd = page * limit;

    if(page > totalPages) {
        return res.redirect("/etyemekleri?page=1")
    }

    const pagination = {
        totalPages,
        page,
        skip,
        pageDataStart,
        pageDataEnd
    }
    const etyemeklerii2 = await etyemekleri.find({})
    const etyemeklerii = etyemeklerii2.slice(pageDataStart - 1, pageDataEnd);

    if(user !== null) {
        return res.render("etyemekleri", { data: { etyemeklerii, user: user,pagination } })
    } else {
        return res.render("etyemekleri", { data: { etyemeklerii, pagination} })
    }
})

router.get("/etyemekleridetay/:id",checkAuth, async (req, res) => {
    const id = req.params.id;
    const etyemeklerii = await etyemekleri.findById(id);
    var user = req.user;

    if(user) {
    await userSchema.findOneAndUpdate({
        _id : user._id
    }, {
        cookies: [
            {name: "etyemekleri", value: id}
        ]
    })
    req.user = await userSchema.findOne({_id: user._id})
    setUser(req.cookies?.uid, req.user)
    }

    if(user !== null) {
        return res.render("etyemekleridetay", { data: { etyemeklerii, user: user } })
    } else {
        return res.render("etyemekleridetay", { data: { etyemeklerii} })
    }
})

router.post("/etyemekleridetay/:id",checkAuth, async (req, res) => {
    const id = req.params.id;
    const etyemeklerii = await etyemekleri.findById(id);
    var user = req.user;
    if(user)
 {

        var userx = await userSchema.findOne({_id: user._id})
        var userCart = userx.cart;       
    
        for(var i = 0; i < userCart.length; i++) {
            if(userCart[i].name == etyemeklerii.etyemekleri_title) {
                return res.redirect("/profil")
            }
        }

        userCart.push({"name": etyemeklerii.etyemekleri_title, "datas": etyemeklerii.etyemekleri_materials})

        await userSchema.findOneAndUpdate({
            _id : user._id
        }, {
            cart: userCart
        })

        req.user = await userSchema.findOne({_id: user._id})
        setUser(req.cookies?.uid, req.user)

        return res.redirect("/profil")
    } else {
        return res.redirect("/")
    }
    

})

router.get("/corbalar",checkAuth, async (req, res) => {
    var user = req.user;

    const page = parseInt(req.query.page) || 1;


    //limit dört adet olacak şekilde ayarlandı
    const limit = 4;

    const skip = (page - 1) * limit;

    const total = await corbalar.countDocuments() % limit;

    if(total > 0) {
        var totalPages = Math.ceil(total / limit) + 1;
    } else {
        var totalPages = Math.ceil(total / limit)
    }

    var pageDataStart = (page - 1) * limit + 1;

    var pageDataEnd = page * limit;

    if(page > totalPages) {

        return res.redirect("/corbalar?page=1")

    }

    const pagination = {
        totalPages,
        page,
        skip,
        pageDataStart,
        pageDataEnd
    }

    const corbalarr = (await corbalar.find()).slice(pageDataStart - 1, pageDataEnd);

    if(user !== null) {
        return res.render("soup", { data: { corbalarr, user:user,pagination } });
    } else {
        return res.render("soup", { data: { corbalarr,pagination } });
    }
})
router.get("/corbadetay/:id",checkAuth, async (req, res) => {
    const id = req.params.id;
    const corba = await corbalar.findById(id);
    var user = req.user;

    if(user) {
    await userSchema.findOneAndUpdate({
        _id : user._id
    }, {
        cookies: [
            {name: "corbalar", value: id}
        ]
    })
    req.user = await userSchema.findOne({_id: user._id})
    setUser(req.cookies?.uid, req.user)
    }

    if(user !== null) {
        return res.render("soupdetay", { data: { corba, user:user } });
    } else {
        return res.render("soupdetay", { data: { corba} });
    }
})

router.post("/corbadetay/:id",checkAuth, async (req, res) => {
    const id = req.params.id;
    const corba = await corbalar.findById(id);
    var user = req.user;
    if(user)
 {

        var userx = await userSchema.findOne({_id: user._id})
        var userCart = userx.cart;       
      
        for(var i = 0; i < userCart.length; i++) {
            if(userCart[i].name == corba.corbalar_title) {
                return res.redirect("/profil")
            }
        }
        
        userCart.push({"name": corba.corbalar_title, "datas": corba.corbalar_materials})

        await userSchema.findOneAndUpdate({
            _id : user._id
        }, {
            cart: userCart
        })

        req.user = await userSchema.findOne({_id: user._id})
        setUser(req.cookies?.uid, req.user)

        return res.redirect("/profil")
    } else {
        return res.redirect("/")
    }
    

})

router.get("/kofteler",checkAuth, async (req, res) => {
    var user = req.user;

    const page = parseInt(req.query.page) || 1;

    //limit dört adet olacak şekilde ayarlandı
    const limit = 4;
    const skip = (page - 1) * limit;
    const total = await kofte.countDocuments() % limit;
    if(total > 0) {
        var totalPages = Math.ceil(total / limit) + 1;
    } else {
        var totalPages = Math.ceil(total / limit)
    }


    var pageDataStart = (page - 1) * limit + 1;
    var pageDataEnd = page * limit;

    if(page > totalPages) {
        return res.redirect("/kofteler?page=1")
    }

    const pagination = {
        totalPages,
        page,
        skip,
        pageDataStart,
        pageDataEnd
    }

    const koftee = (await kofte.find()).slice(pageDataStart - 1, pageDataEnd);

    if(user !== null) {
        return res.render("kofteler", { data: { koftee, user: user, pagination} });
    } else {
        return res.render("kofteler", { data: { koftee, pagination } });
    }
})
router.get("/koftedetay/:id",checkAuth, async (req, res) => {
    const id = req.params.id;
    const kofteler = await kofte.findById(id);
    var user = req.user;

    if(user) {
    await userSchema.findOneAndUpdate({
        _id : user._id
    }, {
        cookies: [
            {name: "kofteler", value: id}
        ]
    })
    req.user = await userSchema.findOne({_id: user._id})
    setUser(req.cookies?.uid, req.user)
    }


    if(user !== null) {
        return res.render("koftedetay", { data: { kofteler, user: user } });
    } else {
        return res.render("koftedetay", { data: { kofteler } });
    }
})

router.post("/koftedetay/:id",checkAuth, async (req, res) => {
    const id = req.params.id;
    const koftee = await kofte.findById(id);
    var user = req.user;
    if(user)
 {

        var userx = await userSchema.findOne({_id: user._id})
        var userCart = userx.cart;  
  
        for(var i = 0; i < userCart.length; i++) {
            if(userCart[i].name == koftee.kofteler_title) {
                return res.redirect("/profil")
            }
        }
        
        userCart.push({"name": koftee.kofteler_title, "datas": koftee.kofteler_materials})

        await userSchema.findOneAndUpdate({
            _id : user._id
        }, {
            cart: userCart
        })

        req.user = await userSchema.findOne({_id: user._id})
        setUser(req.cookies?.uid, req.user)

        return res.redirect("/profil")
    } else {
        return res.redirect("/")
    }
    

})

router.get("/baliklar",checkAuth, async (req, res) => {
    var user = req.user;

    const page = parseInt(req.query.page) || 1;

    //limit dört adet olacak şekilde ayarlandı
    const limit = 4;
    const skip = (page - 1) * limit;
    const total = await balik.countDocuments() % limit;
    if(total > 0) {
        var totalPages = Math.ceil(total / limit) + 1;
    } else {
        var totalPages = Math.ceil(total / limit)
    }

    var pageDataStart = (page - 1) * limit + 1;
    var pageDataEnd = page * limit;

    if(page > totalPages) {
        return res.redirect("/baliklar?page=1")
    }

    const pagination = {
        totalPages,
        page,
        skip,
        pageDataStart,
        pageDataEnd
    }

    const balikk = (await balik.find()).slice(pageDataStart - 1, pageDataEnd);

    if(user !== null) {
        return res.render("baliklar", { data: { balikk, user: user,pagination } })
    } else {
       return res.render("baliklar", { data: { balikk,pagination } })
    }
})
router.get("/balikdetay/:id",checkAuth, async (req, res) => {
    const id = req.params.id;
    const baliklar = await balik.findById(id);
    var user = req.user;

    if(user) {
    await userSchema.findOneAndUpdate({
        _id : user._id
    }, {
        cookies: [
            {name: "baliklar", value: id}
        ]
    })
    
    req.user = await userSchema.findOne({_id: user._id})
    setUser(req.cookies?.uid, req.user)
    }

    if(user !== null) { 
        return res.render("baliklardetay", { data: { baliklar, user:user } })
    } else {
        return res.render("baliklardetay", { data: { baliklar } })
    }
})

router.post("/baliklardetay/:id",checkAuth, async (req, res) => {
    const id = req.params.id;
    const baliklar = await balik.findById(id);
    var user = req.user;
    if(user)
 {

        var userx = await userSchema.findOne({_id: user._id})
        var userCart = userx.cart;   
    
        for(var i = 0; i < userCart.length; i++) {
            if(userCart[i].name == baliklar.baliklar_title) {
                return res.redirect("/profil")
            }
        }
        
        userCart.push({"name": baliklar.baliklar_title, "datas": baliklar.baliklar_materials})

        await userSchema.findOneAndUpdate({
            _id : user._id
        }, {
            cart: userCart
        })

        req.user = await userSchema.findOne({_id: user._id})
        setUser(req.cookies?.uid, req.user)

        return res.redirect("/profil")
    } else {
        return res.redirect("/")
    }
    

})

router.get("/suluyemekler",checkAuth, async (req, res) => {
    var user = req.user;

    const page = parseInt(req.query.page) || 1;

    //limit dört adet olacak şekilde ayarlandı
    const limit = 4;

    const skip = (page - 1) * limit;

    const total = await suluyemek.countDocuments() % limit;

    if(total > 0) {
        var totalPages = Math.ceil(total / limit) + 1;
    } else {
        var totalPages = Math.ceil(total / limit)
    }


    var pageDataStart = (page - 1) * limit + 1;

    var pageDataEnd = page * limit;

    if(page > totalPages) {
        return res.redirect("/suluyemekler?page=1")
    }

    const pagination = {
        totalPages,
        page,
        skip,
        pageDataStart,
        pageDataEnd
    }
    const suluyemekk = (await suluyemek.find()).slice(pageDataStart - 1, pageDataEnd);

    if(user !== null) { 
    return res.render("suluyemekler", { data: { suluyemekk, user:user, pagination } });
    } else {
    return res.render("suluyemekler", { data: { suluyemekk, pagination } });
    }
})
router.get("/suluyemekdetay/:id",checkAuth, async (req, res) => {
    const id = req.params.id;
    const suluyemekler = await suluyemek.findById(id);
    var user = req.user;

    if(user) {
    await userSchema.findOneAndUpdate({
        _id : user._id
    }, {
        cookies: [
            {name: "suluyemekler", value: id}
        ]
    })
    
    req.user = await userSchema.findOne({_id: user._id})
    setUser(req.cookies?.uid, req.user)
    }

    if(user !== null) { 
        return res.render("suluyemekdetay", { data: { suluyemekler, user: user } });
    } else {
    return res.render("suluyemekdetay", { data: { suluyemekler } });
    }
})

router.post("/suluyemekdetay/:id",checkAuth, async (req, res) => {
    const id = req.params.id;
    const suluyemekler = await suluyemek.findById(id);
    var user = req.user;
    if(user)
 {

        var userx = await userSchema.findOne({_id: user._id})
        var userCart = userx.cart;  
    
        for(var i = 0; i < userCart.length; i++) {
            if(userCart[i].name == suluyemekler.suluyemekler_title) {
                return res.redirect("/profil")
            }
        }
        
        userCart.push({"name": suluyemekler.suluyemekler_title, "datas": suluyemekler.suluyemekler_materials})

        await userSchema.findOneAndUpdate({
            _id : user._id
        }, {
            cart: userCart
        })

        req.user = await userSchema.findOne({_id: user._id})
        setUser(req.cookies?.uid, req.user)

        return res.redirect("/profil")
    } else {
        return res.redirect("/")
    }
    

})

router.get("/dolmalar",checkAuth, async (req, res) => {
    var user = req.user;

    const page = parseInt(req.query.page) || 1;

    //limit dört adet olacak şekilde ayarlandı
    const limit = 4;

    const skip = (page - 1) * limit;

    const total = await dolma.countDocuments() % limit;

    if(total > 0) {
        var totalPages = Math.ceil(total / limit) + 1;
    } else {
        var totalPages = Math.ceil(total / limit)
    }

    var pageDataStart = (page - 1) * limit + 1;

    var pageDataEnd = page * limit;

    if(page > totalPages) {
        return res.redirect("/dolmalar?page=1")
    }

    const pagination = {
        totalPages,
        page,
        skip,
        pageDataStart,
        pageDataEnd
    }

    const dolmaa = (await dolma.find()).slice(pageDataStart - 1, pageDataEnd);

    if(user !== null) { 
    return res.render("dolmalar", { data: { dolmaa, user: user, pagination } });
    } else {
    return res.render("dolmalar", { data: { dolmaa, pagination } });
    }
})
router.get("/dolmadetay/:id",checkAuth, async (req, res) => {
    const id = req.params.id;
    const dolmalar = await dolma.findById(id);
    var user = req.user;
    if(user) {
    await userSchema.findOneAndUpdate({
        _id : user._id
    }, {
        cookies: [
            {name: "dolmalar", value: id}
        ]
    })

    req.user = await userSchema.findOne({_id: user._id})
    setUser(req.cookies?.uid, req.user)
    }

    if(user !== null) { 
        return res.render("dolmalardetay", { data: { dolmalar, user: user } });
    } else {
        return res.render("dolmalardetay", { data: { dolmalar } });
    }
})

router.post("/dolmalardetay/:id",checkAuth, async (req, res) => {
    const id = req.params.id;
    const dolmalar = await dolma.findById(id);
    var user = req.user;
    if(user)
 {

        var userx = await userSchema.findOne({_id: user._id})
        var userCart = userx.cart;  
       
        for(var i = 0; i < userCart.length; i++) {
            if(userCart[i].name == dolmalar.dolmalar_title) {
                return res.redirect("/profil")
            }
        }

        userCart.push({"name": dolmalar.dolmalar_title, "datas": dolmalar.dolmalar_materials})

        await userSchema.findOneAndUpdate({
            _id : user._id
        }, {
            cart: userCart
        })

        req.user = await userSchema.findOne({_id: user._id})
        setUser(req.cookies?.uid, req.user)

        return res.redirect("/profil")
    } else {
        return res.redirect("/")
    }
    

})

router.get("/bakliyatlar",checkAuth, async (req, res) => {
    var user = req.user;

    const page = parseInt(req.query.page) || 1;

    //limit dört adet olacak şekilde ayarlandı
    const limit = 4;

    const skip = (page - 1) * limit;

    const total = await bakliyat.countDocuments() % limit;

    if(total > 0) {
        var totalPages = Math.ceil(total / limit) + 1;
    } else {
        var totalPages = Math.ceil(total / limit)
    }

    var pageDataStart = (page - 1) * limit + 1;

    var pageDataEnd = page * limit;


    if(page > totalPages) {

        return res.redirect("/bakliyatlar?page=1")

    }


    const pagination = {
        totalPages,
        page,
        skip,
        pageDataStart,
        pageDataEnd
    }

    const bakliyatt = (await bakliyat.find()).slice(pageDataStart - 1, pageDataEnd);

    if(user !== null) { 
        return res.render("bakliyatlar", { data: { bakliyatt, user: user,pagination } });   
    } else {
        return res.render("bakliyatlar", { data: { bakliyatt,pagination } });   
    }
})
router.get("/bakliyatdetay/:id",checkAuth, async (req, res) => {
    const id = req.params.id;
    const bakliyatlar = await bakliyat.findById(id);
    var user = req.user;
    
    if(user) {
    await userSchema.findOneAndUpdate({
        _id : user._id
    }, {
        cookies: [
            {name: "bakliyatlar", value: id}
        ]
    })
    

    req.user = await userSchema.findOne({_id: user._id})
    setUser(req.cookies?.uid, req.user)
    }

    if(user !== null) { 
        return res.render("bakliyatlardetay", { data: { bakliyatlar, user: user } });
    } else {
        return res.render("bakliyatlardetay", { data: { bakliyatlar } });
    }
})

router.post("/bakliyatdetay/:id",checkAuth, async (req, res) => {
    const id = req.params.id;
    const bakliyatlar = await bakliyat.findById(id);
    var user = req.user;
    if(user) {

        var userx = await userSchema.findOne({_id: user._id})
        var userCart = userx.cart;
      
        for(var i = 0; i < userCart.length; i++) {
            if(userCart[i].name == bakliyatlar.bakliyatlar_title) {
                return res.redirect("/profil")
            }
        }
        
        userCart.push({"name": bakliyatlar.bakliyatlar_title, "datas": bakliyatlar.bakliyatlar_materials})

        await userSchema.findOneAndUpdate({
            _id : user._id
        }, {
            cart: userCart
        })

        req.user = await userSchema.findOne({_id: user._id})
        setUser(req.cookies?.uid, req.user)

        return res.redirect("/profil")
    } else {
        return res.redirect("/")
    }
    

})

router.get("/mantilar",checkAuth, async (req, res) => {
    var user = req.user;

    const page = parseInt(req.query.page) || 1;

    //limit dört adet olacak şekilde ayarlandı

    const limit = 4;

    const skip = (page - 1) * limit;

    const total = await manti.countDocuments() % limit;

    if(total > 0) {
        var totalPages = Math.ceil(total / limit) + 1;
    } else {
        var totalPages = Math.ceil(total / limit)
    }

    var pageDataStart = (page - 1) * limit + 1;

    var pageDataEnd = page * limit;


    if(page > totalPages) {
        return res.redirect("/mantilar?page=1")
    }

    const pagination = {
        totalPages,
        page,
        skip,
        pageDataStart,
        pageDataEnd
    }

    const mantii = (await manti.find()).slice(pageDataStart - 1, pageDataEnd);


    if(user !== null) { 
        return res.render("mantilar", { data: { mantii, user: user, pagination } });
    } else {
    return res.render("mantilar", { data: { mantii, pagination } });
    }
})
router.get("/mantidetay/:id",checkAuth, async (req, res) => {
    const id = req.params.id;
    const mantilar = await manti.findById(id);
    var user = req.user;

    if(user) {
    await userSchema.findOneAndUpdate({
        _id : user._id
    }, {
        cookies: [
            {name: "mantilar", value: id}
        ]
    })
    

    req.user = await userSchema.findOne({_id: user._id})
    setUser(req.cookies?.uid, req.user)
}
    if(user !== null) { 
    return res.render("mantidetay", { data: { mantilar, user: user } });
    } else {
    return res.render("mantidetay", { data: { mantilar } });
    }
})

router.post("/mantidetay/:id",checkAuth, async (req, res) => {
    const id = req.params.id;
    const mantilar = await manti.findById(id);
    var user = req.user;
    if(user)
 {

        var userx = await userSchema.findOne({_id: user._id})
        var userCart = userx.cart;    
    
        for(var i = 0; i < userCart.length; i++) {
            if(userCart[i].name == mantilar.mantilar_title) {
                return res.redirect("/profil")
            }
        }
        
        userCart.push({"name": mantilar.mantilar_title, "datas": mantilar.mantilar_materials})

        await userSchema.findOneAndUpdate({
            _id : user._id
        }, {
            cart: userCart
        })

        req.user = await userSchema.findOne({_id: user._id})
        setUser(req.cookies?.uid, req.user)

        return res.redirect("/profil")
    } else {
        return res.redirect("/")
    }
    

})

router.get("/pilavlar",checkAuth, async (req, res) => {
    var user = req.user;

    const page = parseInt(req.query.page) || 1;

    //limit dört adet olacak şekilde ayarlandı
    const limit = 4;

    const skip = (page - 1) * limit;

    const total = await pilav.countDocuments() % limit;

    if(total > 0) {
        var totalPages = Math.ceil(total / limit) + 1;
    } else {
        var totalPages = Math.ceil(total / limit)
    }

    var pageDataStart = (page - 1) * limit + 1;

    var pageDataEnd = page * limit;


    if(page > totalPages) {

        return res.redirect("/pilavlar?page=1")

    }

    const pagination = {
        totalPages,
        page,
        skip,
        pageDataStart,
        pageDataEnd
    }

    const pilavv = (await pilav.find()).slice(pageDataStart - 1, pageDataEnd);

    if(user !== null) { 
        return res.render("pilav", { data: { pilavv, user:user,pagination } })
    } else {
    return res.render("pilav", { data: { pilavv,pagination } })
    }
})
router.get("/pilavdetay/:id",checkAuth, async (req, res) => {
    const id = req.params.id;
    const pilavlar = await pilav.findById(id);
    var user = req.user;
    if(user) {
    await userSchema.findOneAndUpdate({
        _id : user._id
    }, {
        cookies: [
            {name: "pilavlar", value: id}
        ]
    })
    

    req.user = await userSchema.findOne({_id: user._id})
    setUser(req.cookies?.uid, req.user)
}
    if(user !== null) { 
        return res.render("pilavdetay", { data: { pilavlar, user: user } })
    } else {
        return res.render("pilavdetay", { data: { pilavlar } })
    }
    
})

router.post("/pilavdetay/:id",checkAuth, async (req, res) => {
    const id = req.params.id;
    const pilavlar = await pilav.findById(id);
    var user = req.user;
    if(user)
 {

        var userx = await userSchema.findOne({_id: user._id})
        var userCart = userx.cart;        
     
        for(var i = 0; i < userCart.length; i++) {
            if(userCart[i].name == pilavlar.pilavlar_title) {
                return res.redirect("/profil")
            }
        }

        userCart.push({"name": pilavlar.pilavlar_title, "datas": pilavlar.pilavlar_materials})

        if(user) {
        await userSchema.findOneAndUpdate({
            _id : user._id
        }, {
            cart: userCart
        })
        }
        req.user = await userSchema.findOne({_id: user._id})
        setUser(req.cookies?.uid, req.user)

        return res.redirect("/profil")
    } else {
        return res.redirect("/")
    }
    

})

router.get("/makarna",checkAuth, async (req, res) => {
    var user = req.user;

    const page = parseInt(req.query.page) || 1;

    //limit dört adet olacak şekilde ayarlandı
    const limit = 4;

    const skip = (page - 1) * limit;

    const total = await makarnalar.countDocuments() % limit;

    if(total > 0) {
        var totalPages = Math.ceil(total / limit) + 1;
    } else {
        var totalPages = Math.ceil(total / limit)
    }

    var pageDataStart = (page - 1) * limit + 1;

    var pageDataEnd = page * limit;

    if(page > totalPages) {
        return res.redirect("/makarna?page=1")
    }

    const pagination = {
        totalPages,
        page,
        skip,
        pageDataStart,
        pageDataEnd
    }

    const makarnaa = (await makarnalar.find()).slice(pageDataStart - 1, pageDataEnd);

    if(user !== null) { 
        return res.render("makarna", { data: { makarnaa, user: user, pagination } })
    } else {
        return res.render("makarna", { data: { makarnaa,pagination } })
    }
    
})
router.get("/makarnadetay/:id",checkAuth, async (req, res) => {
    const id = req.params.id;
    const makarnaa = await makarnalar.findById(id);
    var user = req.user;
    if(user) {
    await userSchema.findOneAndUpdate({
        _id : user._id
    }, {
        cookies: [
            {name: "makarnalar", value: id}
        ]
    })
    
    req.user = await userSchema.findOne({_id: user._id})
    setUser(req.cookies?.uid, req.user)
}
    if(user !== null) { 
    return res.render("makarnadetay", { data: { makarnaa, user: user } })
    } else {
    return res.render("makarnadetay", { data: { makarnaa } })
    }
})

router.post("/makarnadetay/:id",checkAuth, async (req, res) => {
    const id = req.params.id;
    const makarnaa = await makarnalar.findById(id);
    var user = req.user;
    if(user)
 {

        var userx = await userSchema.findOne({_id: user._id})
        var userCart = userx.cart; 
        
        for(var i = 0; i < userCart.length; i++) {
            if(userCart[i].name == makarnaa.makarnalar_title) {
                return res.redirect("/profil")
            }
        }

        userCart.push({"name": makarnaa.makarnalar_title, "datas": makarnalar.makarnalar_materials})

        await userSchema.findOneAndUpdate({
            _id : user._id
        }, {
            cart: userCart
        })

        req.user = await userSchema.findOne({_id: user._id})
        setUser(req.cookies?.uid, req.user)

        return res.redirect("/profil")
    } else {
        return res.redirect("/")
    }
    

})

router.get("/kek",checkAuth, async (req, res) => {

    var user = req.user;

    const page = parseInt(req.query.page) || 1;

    //limit dört adet olacak şekilde ayarlandı

    const limit = 4;

    const skip = (page - 1) * limit;

    const total = await kek.countDocuments() % limit;

    if(total > 0) {
        var totalPages = Math.ceil(total / limit) + 1;
    } else {
        var totalPages = Math.ceil(total / limit)
    }

    var pageDataStart = (page - 1) * limit + 1;

    var pageDataEnd = page * limit;


    if(page > totalPages) {

        return res.redirect("/kek?page=1")

    }

    const pagination = {
        totalPages,
        page,
        skip,
        pageDataStart,
        pageDataEnd
    }

    const kekk = (await kek.find()).slice(pageDataStart - 1, pageDataEnd);

    if(user !== null) { 
        return res.render("kek", { data: { kekk, user:user,pagination } })
    } else {
    return res.render("kek", { data: { kekk,pagination } })
    }
})
router.get("/kekdetay/:id",checkAuth, async (req, res) => {
    const id = req.params.id;
    const kekk = await kek.findById(id);
    var user = req.user;
    if(user) {
    await userSchema.findOneAndUpdate({
        _id : user._id
    }, {
        cookies: [
            {name: "kekler", value: id}
        ]
    })
    
    req.user = await userSchema.findOne({_id: user._id})
    setUser(req.cookies?.uid, req.user)
}
    if(user !== null) { 
        return res.render("kekdetay", { data: { kekk, user:user } })
    } else {
    return res.render("kekdetay", { data: { kekk } })
    }
})

router.post("/kekdetay/:id",checkAuth, async (req, res) => {
    const id = req.params.id;
    const makarnaa = await kek.findById(id);
    var user = req.user;
    if(user)
 {

        var userx = await userSchema.findOne({_id: user._id})
        var userCart = userx.cart; 
      
        for(var i = 0; i < userCart.length; i++) {
            if(userCart[i].name == makarnaa.kekler_title) {
                return res.redirect("/profil")
            }
        }

        
        userCart.push({"name": makarnaa.kekler_title, "datas": makarnaa.kekler_materials})

        await userSchema.findOneAndUpdate({
            _id : user._id
        }, {
            cart: userCart
        })

        req.user = await userSchema.findOne({_id: user._id})
        setUser(req.cookies?.uid, req.user)

        return res.redirect("/profil")
    } else {
        return res.redirect("/")
    }
    

})

router.get("/serbetlitatlilar",checkAuth, async (req, res) => {
    var user = req.user;

    const page = parseInt(req.query.page) || 1;

    //limit dört adet olacak şekilde ayarlandı

    const limit = 4;

    const skip = (page - 1) * limit;

    const total = await serbetlitatli.countDocuments() % limit;

    if(total > 0) {
        var totalPages = Math.ceil(total / limit) + 1;
    } else {
        var totalPages = Math.ceil(total / limit)
    }

    var pageDataStart = (page - 1) * limit + 1;

    var pageDataEnd = page * limit;


    if(page > totalPages) {

        return res.redirect("/serbetlitatlilar?page=1")

    }

    const pagination = {
        totalPages,
        page,
        skip,
        pageDataStart,
        pageDataEnd
    }

    const serbetlitatlii = (await serbetlitatli.find()).slice(pageDataStart - 1, pageDataEnd);

    if(user !== null) { 
        return res.render("serbetlitatli", { data: { serbetlitatlii, user: user,pagination } })
    } else {
        return res.render("serbetlitatli", { data: { serbetlitatlii,pagination } })
    }
    
})
router.get("/serbetlitatlidetay/:id",checkAuth, async (req, res) => {
    const id = req.params.id;
    const serbetlitatlii = await serbetlitatli.findById(id);
    var user = req.user;

    if(user) {
    await userSchema.findOneAndUpdate({
        _id : user._id
    }, {
        cookies: [
            {name: "serbetlitatlilar", value: id}
        ]
    })
    

    req.user = await userSchema.findOne({_id: user._id})
    setUser(req.cookies?.uid, req.user)
}
    if(user !== null) { 
    return res.render("serbetlitatlidetay", { data: { serbetlitatlii, user: user } })
    } else {
    return res.render("serbetlitatlidetay", { data: { serbetlitatlii } })
    }
})

router.post("/serbetlitatlidetay/:id",checkAuth, async (req, res) => {
    const id = req.params.id;
    const serbetlitatlii = await serbetlitatli.findById(id);
    var user = req.user;
    if(user)
 {

        var userx = await userSchema.findOne({_id: user._id})
        var userCart = userx.cart;    
      
        for(var i = 0; i < userCart.length; i++) {
            if(userCart[i].name == serbetlitatlii.serbetlitatlilar_title) {
                return res.redirect("/profil")
            }
        }
        
        userCart.push({"name": serbetlitatlii.serbetlitatlilar_title, "datas": serbetlitatlii.serbetlitatlilar_materials})

        await userSchema.findOneAndUpdate({
            _id : user._id
        }, {
            cart: userCart
        })

        req.user = await userSchema.findOne({_id: user._id})
        setUser(req.cookies?.uid, req.user)

        return res.redirect("/profil")
    } else {
        return res.redirect("/")
    }
    

})

router.get("/sutlutatlilar",checkAuth, async (req, res) => {
    var user = req.user;

    const page = parseInt(req.query.page) || 1;

    //limit dört adet olacak şekilde ayarlandı

    const limit = 4;

    const skip = (page - 1) * limit;

    const total = await sutlutatli.countDocuments() % limit;

    if(total > 0) {
        var totalPages = Math.ceil(total / limit) + 1;
    } else {
        var totalPages = Math.ceil(total / limit)
    }


    var pageDataStart = (page - 1) * limit + 1;

    var pageDataEnd = page * limit;


    if(page > totalPages) {

        return res.redirect("/sutlutatlilar?page=1")

    }

    const pagination = {
        totalPages,
        page,
        skip,
        pageDataStart,
        pageDataEnd
    }
    const sutlutatlii = (await sutlutatli.find()).slice(pageDataStart - 1, pageDataEnd);

    if(user !== null) { 
    return res.render("sutlutatli", { data: { sutlutatlii, user: user,pagination } })
    } else {
    return res.render("sutlutatli", { data: { sutlutatlii,pagination } })
    }
})

router.get("/sutlutatlidetay/:id",checkAuth, async (req, res) => {
    const id = req.params.id;
    const sutlutatlii = await sutlutatli.findById(id);
    var user = req.user;
    if(user) {
    await userSchema.findOneAndUpdate({
        _id : user._id
    }, {
        cookies: [
            {name: "sutlutatlilar", value: id}
        ]
    })
    

    req.user = await userSchema.findOne({_id: user._id})
    setUser(req.cookies?.uid, req.user)
}
    if(user !== null) { 
    return res.render("sutlutatlidetay", { data: { sutlutatlii, user: user } })
    } else {
    return res.render("sutlutatlidetay", { data: { sutlutatlii } })
    }
})

router.post("/sutlutatlidetay/:id",checkAuth, async (req, res) => {
    const id = req.params.id;
    const sutlutatlii = await sutlutatli.findById(id);
    var user = req.user;
    if(user)
 {

        var userx = await userSchema.findOne({_id: user._id})
        var userCart = userx.cart;    
      
        for(var i = 0; i < userCart.length; i++) {
            if(userCart[i].name == sutlutatlii.sutlutatlilar_title) {
                return res.redirect("/profil")
            }
        }

        userCart.push({"name": sutlutatlii.sutlutatlilar_title, "datas": sutlutatlii.sutlutatlilar_materials})

        await userSchema.findOneAndUpdate({
            _id : user._id
        }, {
            cart: userCart
        })

        req.user = await userSchema.findOne({_id: user._id})
        setUser(req.cookies?.uid, req.user)

        return res.redirect("/profil")
    } else {
        return res.redirect("/")
    }
    

})

router.get("/pasta",checkAuth, async (req, res) => {
    var user = req.user;

    const page = parseInt(req.query.page) || 1;

    //limit dört adet olacak şekilde ayarlandı

    const limit = 4;

    const skip = (page - 1) * limit;

    const total = await pasta.countDocuments() % limit;

    if(total > 0) {
        var totalPages = Math.ceil(total / limit) + 1;
    } else {
        var totalPages = Math.ceil(total / limit)
    }


    var pageDataStart = (page - 1) * limit + 1;

    var pageDataEnd = page * limit;



    if(page > totalPages) {

        return res.redirect("/pasta?page=1")

    }


    const pagination = {
        totalPages,
        page,
        skip,
        pageDataStart,
        pageDataEnd
    }
    const pastaa = (await pasta.find()).slice(pageDataStart - 1, pageDataEnd);

    if(user !== null) { 
        return res.render("pasta", { data: { pastaa, user: user,pagination } })
    } else {
        return res.render("pasta", { data: { pastaa,pagination } })
    }
    
})
router.get("/pastadetay/:id",checkAuth, async (req, res) => {
    const id = req.params.id;
    const pastaa = await pasta.findById(id);
    var user = req.user;

    if(user) {
    await userSchema.findOneAndUpdate({
        _id : user._id
    }, {
        cookies: [
            {name: "pastalar", value: id}
        ]
    })
    

    req.user = await userSchema.findOne({_id: user._id})
    setUser(req.cookies?.uid, req.user)
}
    if(user !== null) { 
        return res.render("pastadetay", { data: { pastaa, user: user } })
    } else {
        return res.render("pastadetay", { data: { pastaa } })
    }
    
})

router.post("/pastadetay/:id",checkAuth, async (req, res) => {
    const id = req.params.id;
    const pastaa = await pasta.findById(id);
    var user = req.user;
    if(user)
 {

        var userx = await userSchema.findOne({_id: user._id})
        var userCart = userx.cart; 
      
        for(var i = 0; i < userCart.length; i++) {
            if(userCart[i].name == pastaa.pastalar_title) {
                return res.redirect("/profil")
            }
        }
        
        userCart.push({"name": pastaa.pastalar_title, "datas": pastaa.pastalar_materials})

        await userSchema.findOneAndUpdate({
            _id : user._id
        }, {
            cart: userCart
        })

        req.user = await userSchema.findOne({_id: user._id})
        setUser(req.cookies?.uid, req.user)

        return res.redirect("/profil")
    } else {
        return res.redirect("/")
    }
    

})

router.get("/kurabiyeler",checkAuth, async (req, res) => {
    var user = req.user;

    const page = parseInt(req.query.page) || 1;

    //limit dört adet olacak şekilde ayarlandı

    const limit = 4;

    const skip = (page - 1) * limit;

    const total = await kurabiye.countDocuments() % limit;

    if(total > 0) {
        var totalPages = Math.ceil(total / limit) + 1;
    } else {
        var totalPages = Math.ceil(total / limit)
    }


    var pageDataStart = (page - 1) * limit + 1;

    var pageDataEnd = page * limit;


    if(page > totalPages) {

        return res.redirect("/kurabiyeler?page=1")

    }


    const pagination = {
        totalPages,
        page,
        skip,
        pageDataStart,
        pageDataEnd
    }

    const kurabiyee = (await kurabiye.find()).slice(pageDataStart - 1, pageDataEnd);


    if(user !== null) { 
        return res.render("kurabiye", { data: { kurabiyee, user: user, pagination} })
    } else {
        return res.render("kurabiye", { data: { kurabiyee,pagination } })
    }
    
})
router.get("/kurabiyedetay/:id",checkAuth, async (req, res) => {
    const id = req.params.id;
    const kurabiyee = await kurabiye.findById(id);
    var user = req.user;

    if(user) {
    await userSchema.findOneAndUpdate({
        _id : user._id
    }, {
        cookies: [
            {name: "kurabiyeler", value: id}
        ]
    })
    

    req.user = await userSchema.findOne({_id: user._id})
    setUser(req.cookies?.uid, req.user)
}
    if(user !== null) { 
        return res.render("kurabiyedetay", { data: { kurabiyee, user: user } })
    } else {
        return res.render("kurabiyedetay", { data: { kurabiyee } })
    }
    
})

router.post("/kurabiyedetay/:id",checkAuth, async (req, res) => {
    const id = req.params.id;
    const kurabiyee = await kurabiye.findById(id);
    var user = req.user;
    if(user )
 {

        var userx = await userSchema.findOne({_id: user._id})
        var userCart = userx.cart;    
      
        for(var i = 0; i < userCart.length; i++) {
            if(userCart[i].name == kurabiyee.kurabiyeler_title) {
                return res.redirect("/profil")
            }
        }
        
        userCart.push({"name": kurabiyee.kurabiyeler_title, "datas": kurabiyee.kurabiyeler_materials})

        await userSchema.findOneAndUpdate({
            _id : user._id
        }, {
            cart: userCart
        })

        req.user = await userSchema.findOne({_id: user._id})
        setUser(req.cookies?.uid, req.user)

        return res.redirect("/profil")
    } else {
        return res.redirect("/")
    }
    

})

router.get("/salatalar",checkAuth, async (req, res) => {

    var user = req.user;

    const page = parseInt(req.query.page) || 1;

    //limit dört adet olacak şekilde ayarlandı

    const limit = 4;

    const skip = (page - 1) * limit;

    const total = await salata.countDocuments() % limit;

    if(total > 0) {
        var totalPages = Math.ceil(total / limit) + 1;
    } else {
        var totalPages = Math.ceil(total / limit)
    }


    var pageDataStart = (page - 1) * limit + 1;

    var pageDataEnd = page * limit;


    if(page > totalPages) {

        return res.redirect("/salatalar?page=1")

    }
    const pagination = {
        totalPages,
        page,
        skip,
        pageDataStart,
        pageDataEnd
    }
    const salatalarr = (await salata.find()).slice(pageDataStart - 1, pageDataEnd);

    if(user !== null) { 
        return res.render("salatalar", { data: { salatalarr, user: user,pagination } })
    } else {
        return res.render("salatalar", { data: { salatalarr,pagination } })
    }
    
})

router.get("/salatadetay/:id",checkAuth, async (req, res) => {
    const id = req.params.id;
    const salatalarr = await salata.findById(id)
    var user = req.user;

    if(user) {
    await userSchema.findOneAndUpdate({
        _id : user._id
    }, {
        cookies: [
            {name: "salatalar", value: id}
        ]
    })
    

    req.user = await userSchema.findOne({_id: user._id})
    setUser(req.cookies?.uid, req.user)
}
    if(user !== null) { 
        return res.render("salatadetay", { data: { salatalarr, user: user } })
    } else {
        return res.render("salatadetay", { data: { salatalarr } })
    }
    
})

router.post("/salatadetay/:id",checkAuth, async (req, res) => {
    const id = req.params.id;
    const salatalarr = await salata.findById(id);
    var user = req.user;
    if(user)
 {

        var userx = await userSchema.findOne({_id: user._id})
        var userCart = userx.cart; 
     
        for(var i = 0; i < userCart.length; i++) {
            if(userCart[i].name == salatalarr.salatalar_title) {
                return res.redirect("/profil")
            }
        }
        
        userCart.push({"name": salatalarr.salatalar_title, "datas": salatalarr.salatalar_materials})

        await userSchema.findOneAndUpdate({
            _id : user._id
        }, {
            cart: userCart
        })

        req.user = await userSchema.findOne({_id: user._id})
        setUser(req.cookies?.uid, req.user)

        return res.redirect("/profil")
    } else {
        return res.redirect("/")
    }
    

})


module.exports = router;