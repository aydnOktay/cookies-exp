const mantilarModel = require("../../models/mantilar.model");

const pageview = async (req, res) => {
    const manti = await mantilarModel.find();
    var user = req.user;
    if(user == null){
        return res.redirect("/kayit");
    } else {
        if(user.isAdmin == false) {
            return res.redirect("/");
        }
        return res.render("admin/mantilar", { data: { manti }, user: user })
    }
}

const addPageview = async (req, res) => {
    const manti = await mantilarModel.find();
    var user = req.user;
    if(user == null){
        return res.redirect("/kayit");
    } else {
        if(user.isAdmin == false) {
            return res.redirect("/");
        }
        return res.render("admin/mantilarAdd", {
            user: user,
            data: { manti }
        })
    }
}

const add = async (req, res) => {
    const data = req.body;
    const mantilar_photo = req.file.filename;
    const mantilar_materials = data.mantilar_materials.split(",");
    await mantilarModel.create({
        mantilar_title: data.mantilar_title,
        mantilar_description: data.mantilar_description.split(","),
        mantilar_materials: mantilar_materials,
        mantilar_photo: mantilar_photo
    });

    res.redirect("/admin/mantilar")
}

const updateviews = async (req,res)=> {
    const id = req.params.id;
    const manti = await mantilarModel.findById(id);
    var user = req.user;
    if(user == null){
        return res.redirect("/kayit");
    } else {
        if(user.isAdmin == false) {
            return res.redirect("/");
        }
   return res.render("admin/mantilarUpdate", { data: { manti }, user: user })
    }
}

const update = async ( req,res)=>{
    const id = req.params.id;
    const data = req.body;
    const mantilar_photo = req.file?.filename;
    const mantilar_materials = data.mantilar_materials.split(",");

    if (!mantilar_photo) {
        await mantilarModel.findByIdAndUpdate(id,{
            mantilar_title: data.mantilar_title,
            mantilar_description: data.mantilar_description.split(","),
            mantilar_materials: mantilar_materials
        });

        return res.redirect("/admin/mantilar")
    }

    await mantilarModel.findByIdAndUpdate(id,{
        mantilar_title: data.mantilar_title,
        mantilar_description: data.mantilar_description.split(","),
        mantilar_materials: mantilar_materials,
        mantilar_photo: mantilar_photo
    });

   return  res.redirect("/admin/mantilar")


}

const deletee = async ( req,res)=>{
    const id = req.params.id;
    await mantilarModel.findByIdAndDelete(id)
    res.redirect("/admin/mantilar")
}

module.exports = {
    pageview,add,addPageview,update,updateviews,deletee
}

