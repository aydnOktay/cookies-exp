const salatalarModel = require("../../models/salatalar.model");

const pageview = async (req, res) => {
    const salata = await salatalarModel.find();
    var user = req.user;
    if(user == null){
        return res.redirect("/kayit");
    } else {
        if(user.isAdmin == false) {
            return res.redirect("/");
        }
        return res.render("admin/salatalar", { data: { salata }, user: user })
    }
}

const addPageview = async (req, res) => {
    const salata = await salatalarModel.find();
    var user = req.user;
    if(user == null){
        return res.redirect("/kayit");
    } else {
        if(user.isAdmin == false) {
            return res.redirect("/");
        }
        return res.render("admin/salatalarAdd", { data: { salata }, user: user })
    }
}

const add = async (req, res) => {
    const data = req.body;
    const salatalar_photo = req.file.filename;
    const salatalar_materials = data.salatalar_materials.split(",");
    await salatalarModel.create({
        salatalar_title: data.salatalar_title,
        salatalar_description: data.salatalar_description.split(","),
        salatalar_materials: salatalar_materials,
        salatalar_photo: salatalar_photo
    });

    res.redirect("/admin/salatalar")
}

const updateviews = async (req,res)=> {
    const id = req.params.id;
    const salata = await salatalarModel.findById(id);
    var user = req.user;
    if(user == null){
        return res.redirect("/kayit");
    } else {
        if(user.isAdmin == false) {
            return res.redirect("/");
        }
        res.render("admin/salatalarUpdate", { data: { salata }, user: user })
    }
}

const update = async ( req,res)=>{
    const id = req.params.id;
    const data = req.body;
    const salatalar_photo = req.file?.filename;
    const salatalar_materials = data.salatalar_materials.split(",");

    if (!salatalar_photo) {
        await salatalarModel.findByIdAndUpdate(id,{
            salatalar_title: data.salatalar_title,
            salatalar_description: data.salatalar_description.split(","),
            salatalar_materials: salatalar_materials
        });

        return res.redirect("/admin/salatalar")
    }

    await salatalarModel.findByIdAndUpdate(id,{
        salatalar_title: data.salatalar_title,
        salatalar_description: data.salatalar_description.split(","),
        salatalar_materials: salatalar_materials,
        salatalar_photo: salatalar_photo
    });

   return  res.redirect("/admin/salatalar")


}

const deletee = async ( req,res)=>{
    const id = req.params.id;
    await salatalarModel.findByIdAndDelete(id)
    res.redirect("/admin/salatalar")
}

module.exports = {
    pageview,add,addPageview,update,updateviews,deletee
}

