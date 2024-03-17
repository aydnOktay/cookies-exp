const keklerModel = require("../../models/kekler.model");

const pageview = async (req, res) => {
    const kek = await keklerModel.find();
    var user = req.user;
    if(user == null){
        return res.redirect("/kayit");
    } else {
        if(user.isAdmin == false) {
            return res.redirect("/");
        }
        return res.render("admin/kekler", { data: { kek }, user: user })
    }
}

const addPageview = async (req, res) => {
    const kek = await keklerModel.find();
    var user = req.user;
    if(user == null){
        return res.redirect("/kayit");
    } else {
        if(user.isAdmin == false) {
            return res.redirect("/");
        }
        return res.render("admin/keklerAdd", { data: { kek }, user: user }) 
    }
}

const add = async (req, res) => {
    const data = req.body;
    const kekler_photo = req.file.filename;
    const kekler_materials = data.kekler_materials.split(",");
    await keklerModel.create({
        kekler_title: data.kekler_title,
        kekler_description: data.kekler_description.split(","),
        kekler_materials: kekler_materials,
        kekler_photo: kekler_photo
    });

    res.redirect("/admin/kekler")
}

const updateviews = async (req,res)=> {
    const id = req.params.id;
    const kek = await keklerModel.findById(id);
    var user = req.user;
    if(user == null){
        return res.redirect("/kayit");
    } else {
        if(user.isAdmin == false) {
            return res.redirect("/");
        }
        return res.render("admin/keklerUpdate", { data: { kek }, user: user })
    }
}

const update = async ( req,res)=>{
    const id = req.params.id;
    const data = req.body;
    const kekler_photo = req.file?.filename;
    const kekler_materials = data.kekler_materials.split(",");

    if (!kekler_photo) {
        await keklerModel.findByIdAndUpdate(id,{
            kekler_title: data.kekler_title,
            kekler_description: data.kekler_description.split(","),
            kekler_materials: kekler_materials
        });

        return res.redirect("/admin/kekler")
    }

    await keklerModel.findByIdAndUpdate(id,{
        kekler_title: data.kekler_title,
        kekler_description: data.kekler_description.split(","),
        kekler_materials: kekler_materials,
        kekler_photo: kekler_photo
    });

   return  res.redirect("/admin/kekler")


}

const deletee = async ( req,res)=>{
    const id = req.params.id;
    await keklerModel.findByIdAndDelete(id)
    res.redirect("/admin/kekler")
}

module.exports = {
    pageview,add,addPageview,update,updateviews,deletee
}

