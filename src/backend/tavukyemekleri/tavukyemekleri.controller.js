const tavukyemekleriModel = require("../../models/tavukyemekleri.model");

const pageview = async (req, res) => {
    var user = req.user;
    if(user == null){
        return res.redirect("/kayit");
    } else {
        if(user.isAdmin == false) {
            return res.redirect("/");
        } else {
            const tavuk = await tavukyemekleriModel.find();
            res.render("admin/tavukyemekleri", { data: { tavuk }, user: user })
        }
}
}

const addPageview = async (req, res) => {
    var user = req.user;
    if(user == null){
        return res.redirect("/kayit");
    } else {
        if(user.isAdmin == false) {
            return res.redirect("/");
        }
        const tavuk = await tavukyemekleriModel.find();
        res.render("admin/tavukyemekleriAdd", {
            user: user,
            data: { tavuk }
        })
    }
}

const add = async (req, res) => {
    const data = req.body;
    const tavukyemekleri_photo = req.file.filename;
    const tavukyemekleri_materials = data.tavukyemekleri_materials.split(",");
    await tavukyemekleriModel.create({
        tavukyemekleri_title: data.tavukyemekleri_title,
        tavukyemekleri_description: data.tavukyemekleri_description.split(","),
        tavukyemekleri_materials: tavukyemekleri_materials,
        tavukyemekleri_photo: tavukyemekleri_photo
    });

    res.redirect("/admin/tavukyemekleri")
}

const updateviews = async (req,res)=> {
    const id = req.params.id;
    const tavuk = await tavukyemekleriModel.findById(id);
    var user = req.user;
    if(user == null){
        return res.redirect("/kayit");
    } else {
        if(user.isAdmin == false) {
            return res.redirect("/");
        }
        res.render("admin/tavukyemekleriUpdate", { data: { tavuk }, user: user })
    }
}

const update = async ( req,res)=>{
    const id = req.params.id;
    const data = req.body;
    const tavukyemekleri_photo = req.file?.filename;
    const tavukyemekleri_materials = data.tavukyemekleri_materials.split(",");

    if (!tavukyemekleri_photo) {
        await tavukyemekleriModel.findByIdAndUpdate(id,{
            tavukyemekleri_title: data.tavukyemekleri_title,
            tavukyemekleri_description: data.tavukyemekleri_description.split(","),
            tavukyemekleri_materials: tavukyemekleri_materials
        });

        return res.redirect("/admin/tavukyemekleri")
    }

    await tavukyemekleriModel.findByIdAndUpdate(id,{
        tavukyemekleri_title: data.tavukyemekleri_title,
        tavukyemekleri_description: data.tavukyemekleri_description.split(","),
        tavukyemekleri_materials: tavukyemekleri_materials,
        tavukyemekleri_photo: tavukyemekleri_photo
    });

   return  res.redirect("/admin/tavukyemekleri")


}

const deletee = async ( req,res)=>{
    const id = req.params.id;
    await tavukyemekleriModel.findByIdAndDelete(id)
    res.redirect("/admin/tavukyemekleri")
}

module.exports = {
    pageview,add,addPageview,update,updateviews,deletee
}

