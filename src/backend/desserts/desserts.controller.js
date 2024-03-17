const dessertsModel = require("../../models/desserts.model");

const pageViews = async (req, res) => {
    const desserts = await dessertsModel.find();
    var user = req.user;
    if (user == null) {
        return res.redirect("/kayit");
    } else {
        if (user.isAdmin == false) {
            return res.redirect("/");
        }
        return res.render("admin/dessertsview", { data: { desserts }, user: user })
    }
}
const tatliEkleViews = async (req, res) => {
    var user = req.user;
    if (user == null) {
        return res.redirect("/kayit");
    } else {
        if (user.isAdmin == false) {
            return res.redirect("/");
        }
        return res.render("admin/tatli-ekle", { user: user })
    }
}

const tatliekle = async (req, res) => {
    const tatliphoto = req.file.filename; // fotograf bu şekilde alınır
    const data = new dessertsModel({
        desserts_title: req.body.desserts_title,
        desserts_description: req.body.desserts_description.split(","),
        desserts_materials: req.body.desserts_materials.split(","),
        desserts_photo: tatliphoto
    })
    await data.save()
    res.redirect("/admin/dessertsview")
}

const tatlisil = async (req, res) => {
    const id = req.params.id;
    await dessertsModel.findByIdAndDelete(id)
    res.redirect("/admin/dessertsview")
}

const tatliDuzenleWievs = async (req, res) => {
    const id = req.params.id;
    const desserts = await dessertsModel.findById(id);
    var user = req.user;
    if (user == null) {
        return res.redirect("/kayit");
    } else {
        if (user.isAdmin == false) {
            return res.redirect("/");
        }
        return res.render("admin/tatli-duzenle", { data: { desserts }, user: user })
    }
}

const tatliguncelle = async (req, res) => {
    const id = req.params.id;
    const dessertsPhoto = req.file?.filename;

    if (!dessertsPhoto) {
        await dessertsModel.findByIdAndUpdate(id,{
            desserts_title:req.body.desserts_title,
            desserts_description:req.body.desserts_description.split(","),
            desserts_materials:req.body.desserts_materials.split(",")
        });

        return res.redirect("/admin/desserts")
    }

    await dessertsModel.findByIdAndUpdate(id,{
        desserts_title:req.body.desserts_title,
        desserts_description:req.body.desserts_description.split(","),
        desserts_materials:req.body.desserts_materials.split(","),
        desserts_photo:dessertsPhoto
    });

   return  res.redirect("/admin/dessertsview")



}
module.exports = {
    pageViews,
    tatliEkleViews,
    tatliekle,
    tatlisil,
    tatliDuzenleWievs,
    tatliguncelle

}