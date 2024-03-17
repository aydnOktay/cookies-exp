const makarnalarModel = require("../../models/makarnalar.model");

const pageview = async (req, res) => {
    const makarna = await makarnalarModel.find();
    var user = req.user;
    if(user == null){
        return res.redirect("/kayit");
    } else {
        if(user.isAdmin == false) {
            return res.redirect("/");
        }
        return res.render("admin/makarnalar", { data: { makarna }, user: user })
    }
}

const addPageview = async (req, res) => {
    const makarna = await makarnalarModel.find();
    var user = req.user;
    if(user == null){
        return res.redirect("/kayit");
    } else {
        if(user.isAdmin == false) {
            return res.redirect("/");
        }
        return res.render("admin/makarnalarAdd", { data: { makarna }, user: user })
    }
}

const add = async (req, res) => {
    const data = req.body;
    const makarnalar_photo = req.file.filename;
    const makarnalar_materials = data.makarnalar_materials.split(",");
    await makarnalarModel.create({
        makarnalar_title: data.makarnalar_title,
        makarnalar_description: data.makarnalar_description.split(","),
        makarnalar_materials: makarnalar_materials,
        makarnalar_photo: makarnalar_photo
    });

    res.redirect("/admin/makarnalar")
}

const updateviews = async (req, res) => {
    const id = req.params.id;
    const makarna = await makarnalarModel.findById(id);
    var user = req.user;
    if(user == null){
        return res.redirect("/kayit");
    } else {
        if(user.isAdmin == false) {
            return res.redirect("/");
        }
    return res.render("admin/makarnalarUpdate", { data: { makarna }, user: user })
    }
}

const update = async (req, res) => {
    const id = req.params.id;
    const data = req.body;
    const makarnalar_photo = req.file?.filename;
    const makarnalar_materials = data.makarnalar_materials.split(",");

    if (!makarnalar_photo) {
        await makarnalarModel.findByIdAndUpdate(id, {
            makarnalar_title: data.makarnalar_title,
            makarnalar_description: data.makarnalar_description.split(","),
            makarnalar_materials: makarnalar_materials
        });

        return res.redirect("/admin/makarnalar")
    }

    await makarnalarModel.findByIdAndUpdate(id, {
        makarnalar_title: data.makarnalar_title,
        makarnalar_description: data.makarnalar_description.split(","),
        makarnalar_materials: makarnalar_materials,
        makarnalar_photo: makarnalar_photo
    });

    return res.redirect("/admin/makarnalar")


}

const deletee = async (req, res) => {
    const id = req.params.id;
    await makarnalarModel.findByIdAndDelete(id)
    res.redirect("/admin/makarnalar")
}

module.exports = {
    pageview, add, addPageview, update, updateviews, deletee
}

