const saladsModel = require("../../models/salads.model");

const pageViews = async (req, res) => {
    const salads = await saladsModel.find();
    var user = req.user;
    if (user == null) {
        return res.redirect("/kayit");
    } else {
        if (user.isAdmin == false) {
            return res.redirect("/");
        }
        return res.render("admin/saladsview", { data: { salads }, user: user })
    }
}
const salataEkleViews = async (req, res) => {
    var user = req.user;
    if (user == null) {
        return res.redirect("/kayit");
    } else {
        if (user.isAdmin == false) {
            return res.redirect("/");
        }
        return res.render("admin/salatalarAdd", {
            user: user
        })
    }
}

const salataekle = async (req, res) => {
    const salataphoto = req.file.filename; // fotograf bu şekilde alınır
    const data = new saladsModel({
        salads_title: req.body.salads_title,
        salads_description: req.body.salads_description.split(","),
        salads_materials: req.body.salads_materials.split(","),
        salads_photo: salataphoto
    })
    await data.save()
    res.redirect("/admin/salads")
}

const salatasil = async (req, res) => {
    const id = req.params.id;
    await saladsModel.findByIdAndDelete(id)
    res.redirect("/admin/salads")
}

const salataDuzenleWievs = async (req, res) => {
    const id = req.params.id;
    const salads = await saladsModel.findById(id);
    var user = req.user;
    if (user == null) {
        return res.redirect("/kayit");
    } else {
        if (user.isAdmin == false) {
            return res.redirect("/");
        }
        return res.render("admin/salata-duzenle", { data: { salads }, user:user })
    }
}

const salataguncelle = async (req, res) => {
    const id = req.params.id;
    const saladsPhoto = req.file?.filename;

    if (!saladsPhoto) {
        await saladsModel.findByIdAndUpdate(id,{
            salads_title:req.body.salads_title,
            salads_description:req.body.salads_description.split(","),
            salads_materials:req.body.salads_materials.split(",")
        });

        return res.redirect("/admin/salads")
    }

    await saladsModel.findByIdAndUpdate(id,{
        salads_title:req.body.salads_title,
        salads_description:req.body.salads_description.split(","),
        salads_materials:req.body.salads_materials.split(","),
        salads_photo:saladsPhoto
    });

   return  res.redirect("/admin/salads")



}
module.exports = {
    pageViews,
    salataEkleViews,
    salataekle,
    salatasil,
    salataDuzenleWievs,
    salataguncelle

}