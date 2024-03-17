const corbalarModel = require("../../models/corbalar.model");

const pageview = async (req, res) => {
    const corba = await corbalarModel.find();
    var user = req.user;
    if(user == null){
        return res.redirect("/kayit");
    } else {
        if(user.isAdmin == false) {
            return res.redirect("/");
        }
        return res.render("admin/corbalar", { data: { corba }, user: user })
    }
}

const addPageview = async (req, res) => {
    const corba = await corbalarModel.find();
    var user = req.user;
    if(user == null){
        return res.redirect("/kayit");
    } else {
        if(user.isAdmin == false) {
            return res.redirect("/");
        }
        return res.render("admin/corbalarAdd", { data: { corba }, user: user })
    }
}

const add = async (req, res) => {
    const data = req.body;
    const corbalar_photo = req.file.filename;
    const corbalar_materials = data.corbalar_materials.split(",");
    await corbalarModel.create({
        corbalar_title: data.corbalar_title,
        corbalar_description: data.corbalar_description.split(","),
        corbalar_materials: corbalar_materials,
        corbalar_photo: corbalar_photo
    });

    res.redirect("/admin/corbalar")
}

const updateviews = async (req,res)=> {
    const id = req.params.id;
    const corba = await corbalarModel.findById(id);
    var user =  req.user;
    if(user == null){
        return res.redirect("/kayit");
    } else {
        if(user.isAdmin == false) {
            return res.redirect("/");
        } 
        return res.render("admin/corbalarUpdate", { data: { corba }, user: user })
    }
}

const update = async ( req,res)=>{
    const id = req.params.id;
    const data = req.body;
    const corbalar_photo = req.file?.filename;
    const corbalar_materials = data.corbalar_materials.split(",");

    if (!corbalar_photo) {
        await corbalarModel.findByIdAndUpdate(id,{
            corbalar_title: data.corbalar_title,
            corbalar_description: data.corbalar_description.split(","),
            corbalar_materials: corbalar_materials
        });

        return res.redirect("/admin/corbalar")
    }

    await corbalarModel.findByIdAndUpdate(id,{
        corbalar_title: data.corbalar_title,
        corbalar_description: data.corbalar_description.split(","),
        corbalar_materials: corbalar_materials,
        corbalar_photo: corbalar_photo
    });

   return  res.redirect("/admin/corbalar")


}

const deletee = async ( req,res)=>{
    const id = req.params.id;
    await corbalarModel.findByIdAndDelete(id)
    res.redirect("/admin/corbalar")
}

module.exports = {
    pageview,add,addPageview,update,updateviews,deletee
}

