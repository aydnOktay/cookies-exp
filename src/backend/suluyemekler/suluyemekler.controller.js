const suluyemeklerModel = require("../../models/suluyemekler.model");

const pageview = async (req, res) => {
    const suluyemek = await suluyemeklerModel.find();
    var user = req.user;
    if(user == null){
        return res.redirect("/kayit");
    } else {
        if(user.isAdmin == false) {
            return res.redirect("/");
        }
        return res.render("admin/suluyemekler", { data: { suluyemek }, user: user })
    }   
}

const addPageview = async (req, res) => {
    const suluyemek = await suluyemeklerModel.find();
    var user = req.user;
    if(user == null){
        return res.redirect("/kayit");
    } else {
        if(user.isAdmin == false) {
            return res.redirect("/");
        }
        return res.render("admin/suluyemeklerAdd", { data: { suluyemek }, user: user })
    }
}

const add = async (req, res) => {
    const data = req.body;
    const suluyemekler_photo = req.file.filename;
    const suluyemekler_materials = data.suluyemekler_materials.split(",");
    await suluyemeklerModel.create({
        suluyemekler_title: data.suluyemekler_title,
        suluyemekler_description: data.suluyemekler_description.split(","),
        suluyemekler_materials: suluyemekler_materials,
        suluyemekler_photo: suluyemekler_photo
    });

    res.redirect("/admin/suluyemekler")
}

const updateviews = async (req,res)=> {
    const id = req.params.id;
    const suluyemek = await suluyemeklerModel.findById(id);
    var user = req.user;
    if(user == null){
        return res.redirect("/kayit");
    } else {
        if(user.isAdmin == false) {
            return res.redirect("/");
        }
        res.render("admin/suluyemeklerUpdate", { data: { suluyemek }, user: user })
    }
}

const update = async ( req,res)=>{
    const id = req.params.id;
    const data = req.body;
    const suluyemekler_photo = req.file?.filename;
    const suluyemekler_materials = data.suluyemekler_materials.split(",");

    if (!suluyemekler_photo) {
        await suluyemeklerModel.findByIdAndUpdate(id,{
        suluyemekler_title: data.suluyemekler_title,
            suluyemekler_description: data.suluyemekler_description.split(","),
            suluyemekler_materials: suluyemekler_materials
        });

        return res.redirect("/admin/suluyemekler")
    }

    await suluyemeklerModel.findByIdAndUpdate(id,{
        suluyemekler_title: data.suluyemekler_title,
        suluyemekler_description: data.suluyemekler_description.split(","),
        suluyemekler_materials: suluyemekler_materials,
        suluyemekler_photo: suluyemekler_photo
    });

   return  res.redirect("/admin/suluyemekler")


}

const deletee = async ( req,res)=>{
    const id = req.params.id;
    await suluyemeklerModel.findByIdAndDelete(id)
    res.redirect("/admin/suluyemekler")
}

module.exports = {
    pageview,add,addPageview,update,updateviews,deletee
}

