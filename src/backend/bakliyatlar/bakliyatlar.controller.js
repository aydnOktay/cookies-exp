const bakliyatlarModel = require("../../models/bakliyatlar.model");

const pageview = async (req, res) => {
    const bakliyat = await bakliyatlarModel.find();
    var user = req.user;
    if(user == null){
        return res.redirect("/kayit");
    } else {
        if(user.isAdmin == false) {
            return res.redirect("/");
        }
        return res.render("admin/bakliyatlar", { data: { bakliyat }, user: user })
    }
}

const addPageview = async (req, res) => {
    const bakliyat = await bakliyatlarModel.find();
    var user = req.user;
    if(user == null){
        return res.redirect("/kayit");
    } else {
        if(user.isAdmin == false) {
            return res.redirect("/");
        }
        return res.render("admin/bakliyatlarAdd", { data: { bakliyat }, user: user })
    }
}

const add = async (req, res) => {
    const data = req.body;
    const bakliyatlar_photo = req.file.filename;
    const bakliyatlar_materials = data.bakliyatlar_materials.split(",");
    await bakliyatlarModel.create({
        bakliyatlar_title: data.bakliyatlar_title,
        bakliyatlar_description: data.bakliyatlar_description.split(","),
        bakliyatlar_materials: bakliyatlar_materials,
        bakliyatlar_photo: bakliyatlar_photo
    });

    res.redirect("/admin/bakliyatlar")
}

const updateviews = async (req, res) => {
    const id = req.params.id;
    const bakliyat = await bakliyatlarModel.findById(id);
    var user = req.user;
    if(user == null){
        return res.redirect("/kayit");
    } else {
        if(user.isAdmin == false) {
            return res.redirect("/");
        }
        return res.render("admin/bakliyatlarUpdate", { data: { bakliyat }, user: user })
    }
}

const update = async (req, res) => {
    const id = req.params.id;
    const data = req.body;
    const bakliyatlar_photo = req.file?.filename;
    const bakliyatlar_materials = data.bakliyatlar_materials.split(",");

    if (!bakliyatlar_photo) {
        await bakliyatlarModel.findByIdAndUpdate(id, {
            bakliyatlar_title: data.bakliyatlar_title,
            bakliyatlar_description: data.bakliyatlar_description.split(","),
            bakliyatlar_materials: bakliyatlar_materials
        });

        return res.redirect("/admin/bakliyatlar")
    }

    await bakliyatlarModel.findByIdAndUpdate(id, {
        bakliyatlar_title: data.bakliyatlar_title,
        bakliyatlar_description: data.bakliyatlar_description.split(","),
        bakliyatlar_materials: bakliyatlar_materials,
        bakliyatlar_photo: bakliyatlar_photo
    });

    return res.redirect("/admin/bakliyatlar")


}

const deletee = async (req, res) => {
    const id = req.params.id;
    await bakliyatlarModel.findByIdAndDelete(id)
    res.redirect("/admin/bakliyatlar")
}

module.exports = {
    pageview, add, addPageview, update, updateviews, deletee
}

