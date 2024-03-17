const koftelerModel = require("../../models/kofteler.model");

const pageview = async (req, res) => {
    const kofte = await koftelerModel.find();
    var user = req.user;
    if(user == null){
        return res.redirect("/kayit");
    } else {
        if(user.isAdmin == false) {
            return res.redirect("/");
        }
        return res.render("admin/kofteler", { data: { kofte }, user: user })
    }
}

const addPageview = async (req, res) => {
    const kofte = await koftelerModel.find();
    var user = req.user;
    if(user == null){
        return res.redirect("/kayit");
    } else {
        if(user.isAdmin == false) {
            return res.redirect("/");
        }
        return res.render("admin/koftelerAdd", { data: { kofte }, user: user })
    }
}

const add = async (req, res) => {
    const data = req.body;
    const kofteler_photo = req.file.filename;
    const kofteler_materials = data.kofteler_materials.split(",");
    await koftelerModel.create({
        kofteler_title: data.kofteler_title,
        kofteler_description: data.kofteler_description.split(","),
        kofteler_materials: kofteler_materials,
        kofteler_photo: kofteler_photo
    });

    res.redirect("/admin/kofteler")
}

const updateviews = async (req,res)=> {
    const id = req.params.id;
    const kofte = await koftelerModel.findById(id);
    var user = req.user;
    if(user == null){
        return res.redirect("/kayit");
    } else {
        if(user.isAdmin == false) {
            return res.redirect("/");
        } 
        return res.render("admin/koftelerUpdate", { data: { kofte }, user: user })
    }
}

const update = async ( req,res)=>{
    const id = req.params.id;
    const data = req.body;
    const kofteler_photo = req.file?.filename;
    const kofteler_materials = data.kofteler_materials.split(",");

    if (!kofteler_photo) {
        await koftelerModel.findByIdAndUpdate(id,{
            kofteler_title: data.kofteler_title,
            kofteler_description: data.kofteler_description.split(","),
            kofteler_materials: kofteler_materials
        });

        return res.redirect("/admin/kofteler")
    }

    await koftelerModel.findByIdAndUpdate(id,{
        kofteler_title: data.kofteler_title,
        kofteler_description: data.kofteler_description.split(","),
        kofteler_materials: kofteler_materials,
        kofteler_photo: kofteler_photo
    });

   return  res.redirect("/admin/kofteler")


}

const deletee = async ( req,res)=>{
    const id = req.params.id;
    await koftelerModel.findByIdAndDelete(id)
    res.redirect("/admin/kofteler")
}

module.exports = {
    pageview,add,addPageview,update,updateviews,deletee
}

