const etyemekleriModel = require("../../models/etyemekleri.model");

const pageview = async (req, res) => {
    const et = await etyemekleriModel.find();
    var user = req.user;
    if(user == null){
        return res.redirect("/kayit");
    } else {
        if(user.isAdmin == false) {
            return res.redirect("/");
        }
        return res.render("admin/etyemekleri", { data: { et }, user: user })
    }
}

const addPageview = async (req, res) => {
    const et = await etyemekleriModel.find();
    var user = req.user;
    if(user == null){
        return res.redirect("/kayit");
    } else {
        if(user.isAdmin == false) {
            return res.redirect("/");
        }
        return res.render("admin/etyemekleriAdd", { data: { et }, user: user })
    }
}

const add = async (req, res) => {
    const data = req.body;
    const etyemekleri_photo = req.file.filename;
    const etyemekleri_materials = data.etyemekleri_materials.split(",");
    await etyemekleriModel.create({
        etyemekleri_title: data.etyemekleri_title,
        etyemekleri_description: data.etyemekleri_description.split(","),
        etyemekleri_materials: etyemekleri_materials,
        etyemekleri_photo: etyemekleri_photo
    });

    res.redirect("/admin/etyemekleri")
}

const updateviews = async (req,res)=> {
    const id = req.params.id;
    const et = await etyemekleriModel.findById(id);
    var user = req.user;
    if(user == null){
        return res.redirect("/kayit");
    } else {
        if(user.isAdmin == false) {
            return res.redirect("/");
        }
        return res.render("admin/etyemekleriUpdate", { data: { et }, user: user })
    }
}

const update = async ( req,res)=>{
    const id = req.params.id;
    const data = req.body;
    const etyemekleri_photo = req.file?.filename;
    const etyemekleri_materials = data.etyemekleri_materials.split(",");

    if (!etyemekleri_photo) {
        await etyemekleriModel.findByIdAndUpdate(id,{
            etyemekleri_title: data.etyemekleri_title,
            etyemekleri_description: data.etyemekleri_description.split(","),
            etyemekleri_materials: etyemekleri_materials
        });

        return res.redirect("/admin/etyemekleri")
    }

    await etyemekleriModel.findByIdAndUpdate(id,{
        etyemekleri_title: data.etyemekleri_title,
        etyemekleri_description: data.etyemekleri_description.split(","),
        etyemekleri_materials: etyemekleri_materials,
        etyemekleri_photo: etyemekleri_photo
    });

   return  res.redirect("/admin/etyemekleri")


}

const deletee = async ( req,res)=>{
    const id = req.params.id;
    await etyemekleriModel.findByIdAndDelete(id)
    res.redirect("/admin/etyemekleri")
}

module.exports = {
    pageview,add,addPageview,update,updateviews,deletee
}

