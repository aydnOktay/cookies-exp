const pastalarModel = require("../../models/pastalar.model");

const pageview = async (req, res) => {
    const pasta = await pastalarModel.find();
    var user = req.user;
    if(user == null){
        return res.redirect("/kayit");
    } else {
        if(user.isAdmin == false) {
            return res.redirect("/");
        }
        return  res.render("admin/pastalar", { data: { pasta }, user:user })
    }
}

const addPageview = async (req, res) => {
    const pasta = await pastalarModel.find();
    var user = req.user;
    if(user == null){
        return res.redirect("/kayit");
    } else {
        if(user.isAdmin == false) {
            return res.redirect("/");
        }
        return res.render("admin/pastalarAdd", { data: { pasta }, user: user })
    }
}

const add = async (req, res) => {
    const data = req.body;
    const pastalar_photo = req.file.filename;
    const pastalar_materials = data.pastalar_materials.split(",");
    await pastalarModel.create({
        pastalar_title: data.pastalar_title,
        pastalar_description: data.pastalar_description.split(","),
        pastalar_materials: pastalar_materials,
        pastalar_photo: pastalar_photo
    });

    res.redirect("/admin/pastalar")
}

const updateviews = async (req,res)=> {
    const id = req.params.id;
    const tavuk = await pastalarModel.findById(id);
    var user = req.user;
    if(user == null){
        return res.redirect("/kayit");
    } else {
        if(user.isAdmin == false) {
            return res.redirect("/");
        }
        res.render("admin/pastalarUpdate", { data: { tavuk }, user: user })
    }
}

const update = async ( req,res)=>{
    const id = req.params.id;
    const data = req.body;
    const pastalar_photo = req.file?.filename;
    const pastalar_materials = data.pastalar_materials.split(",");

    if (!tavukyemekleri_photo) {
        await pastalarModel.findByIdAndUpdate(id,{
            pastalar_title: data.pastalar_title,
            pastalar_description: data.pastalar_description.split(","),
            pastalar_materials: pastalar_materials
        });

        return res.redirect("/admin/pastalar")
    }

    await tavukyemekleriModel.findByIdAndUpdate(id,{
        pastalar_title: data.pastalar_title,
        pastalar_description: data.pastalar_description.split(","),
        pastalar_materials: pastalar_materials,
        pastalar_photo: pastalar_photo
    });

   return  res.redirect("/admin/pastalar")


}

const deletee = async ( req,res)=>{
    const id = req.params.id;
    await pastalarModel.findByIdAndDelete(id)
    res.redirect("/admin/pastalar")
}

module.exports = {
    pageview,add,addPageview,update,updateviews,deletee
}

