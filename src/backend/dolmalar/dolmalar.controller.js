const dolmalarModel = require("../../models/dolmalar.model");

const pageview = async (req, res) => {
    const dolma = await dolmalarModel.find();
    var user = req.user;
    if(user == null){
        return res.redirect("/kayit");
    } else {
        if(user.isAdmin == false) {
            return res.redirect("/");
        }
        return res.render("admin/dolmalar", { data: { dolma } , user: user})
    }
}

const addPageview = async (req, res) => {
    const dolma = await dolmalarModel.find();
    var user = req.user;
    if(user == null){
        return res.redirect("/kayit");
    } else {
        if(user.isAdmin == false) {
            return res.redirect("/");
        }
        return res.render("admin/dolmalarAdd", { data: { dolma } , user: user})
    }
}

const add = async (req, res) => {
    const data = req.body;
    const dolmalar_photo = req.file.filename;
    const dolmalar_materials = data.dolmalar_materials.split(",");
    await dolmalarModel.create({
        dolmalar_title: data.dolmalar_title,
        dolmalar_description: data.dolmalar_description.split(","),
        dolmalar_materials: dolmalar_materials,
        dolmalar_photo: dolmalar_photo
    });

    res.redirect("/admin/dolmalar")
}

const updateviews = async (req,res)=> {
    const id = req.params.id;
    const dolma = await dolmalarModel.findById(id);
    var user = req.user;
    if(user == null){
        return res.redirect("/kayit");
    } else {
        if(user.isAdmin == false) {
            return res.redirect("/");
        } 
        return res.render("admin/dolmalarUpdate", { data: { dolma } , user: user})
    }
}

const update = async ( req,res)=>{
    const id = req.params.id;
    const data = req.body;
    const dolmalar_photo = req.file?.filename;
    const dolmalar_materials = data.dolmalar_materials.split(",");

    if (!dolmalar_photo) {
        await dolmalarModel.findByIdAndUpdate(id,{
            dolmalar_title: data.dolmalar_title,
            dolmalar_description: data.dolmalar_description.split(","),
            dolmalar_materials: dolmalar_materials
        });

        return res.redirect("/admin/dolmalar")
    }

    await dolmalarModel.findByIdAndUpdate(id,{
        dolmalar_title: data.dolmalar_title,
        dolmalar_description: data.dolmalar_description.split(","),
        dolmalar_materials: dolmalar_materials,
        dolmalar_photo: dolmalar_photo
    });

   return  res.redirect("/admin/dolmalar")


}

const deletee = async ( req,res)=>{
    const id = req.params.id;
    await dolmalarModel.findByIdAndDelete(id)
    res.redirect("/admin/dolmalar")
}

module.exports = {
    pageview,add,addPageview,update,updateviews,deletee
}

