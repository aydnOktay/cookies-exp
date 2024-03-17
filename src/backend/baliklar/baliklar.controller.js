const baliklarModel = require("../../models/baliklar.model");

const pageview = async (req, res) => {
    const balik = await baliklarModel.find();
    var user = req.user;
    if(user == null){
        return res.redirect("/kayit");
    } else {
        if(user.isAdmin == false) {
            return res.redirect("/");
        }
        return res.render("admin/baliklar", { data: { balik } , user: user})
    }
}

const addPageview = async (req, res) => {
    const tavuk = await baliklarModel.find();
    var user = req.user;
    if(user == null){
        return res.redirect("/kayit");
    } else {
        if(user.isAdmin == false) {
            return res.redirect("/");
        }
        return res.render("admin/baliklarAdd", { data: { tavuk }, user: user })
    }
}

const add = async (req, res) => {
    const data = req.body;
    const baliklar_photo = req.file.filename;
    const baliklar_materials = data.baliklar_materials.split(",");
    await baliklarModel.create({
        baliklar_title: data.baliklar_title,
        baliklar_description: data.baliklar_description.split(","),
        baliklar_materials: baliklar_materials,
        baliklar_photo: baliklar_photo
    });

    res.redirect("/admin/baliklar")
}

const updateviews = async (req, res) => {
    const id = req.params.id;
    const balik = await baliklarModel.findById(id);
    var user = req.user;
    if(user == null){
        return res.redirect("/kayit");
    } else {
        if(user.isAdmin == false) {
            return res.redirect("/");
        }
    return res.render("admin/baliklarUpdate", { data: { balik }, user: user }) 
    }
}

const update = async (req, res) => {
    const id = req.params.id;
    const data = req.body;
    const baliklar_photo = req.file?.filename;
    const baliklar_materials = data.baliklar_materials.split(",");

    if (!baliklar_photo) {
        await baliklarModel.findByIdAndUpdate(id, {
            baliklar_title: data.baliklar_title,
            baliklar_description: data.baliklar_description.split(","),
            baliklar_materials: baliklar_materials
        });

        return res.redirect("/admin/baliklar")
    }

    await baliklarModel.findByIdAndUpdate(id, {
        baliklar_title: data.baliklar_title,
        baliklar_description: data.baliklar_description.split(","),
        baliklar_materials: baliklar_materials,
        baliklar_photo: baliklar_photo
    });

    return res.redirect("/admin/baliklar")


}

const deletee = async (req, res) => {
    const id = req.params.id;
    await baliklarModel.findByIdAndDelete(id)
    res.redirect("/admin/baliklar")
}

module.exports = {
    pageview, add, addPageview, update, updateviews, deletee
}

