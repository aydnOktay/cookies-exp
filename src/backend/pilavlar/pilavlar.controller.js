const pilavlarModel = require("../../models/pilavlar.model");

const pageview = async (req, res) => {
    const pilav = await pilavlarModel.find();
    var user = req.user;
    if(user == null){
        return res.redirect("/kayit");
    } else {
        if(user.isAdmin == false) {
            return res.redirect("/");
        }
        return res.render("admin/pilavlar", { data: { pilav }, user: user })
    }
}

const addPageview = async (req, res) => {
    const pilav = await pilavlarModel.find();
    var user = req.user;
    if(user == null){
        return res.redirect("/kayit");
    } else {
        if(user.isAdmin == false) {
            return res.redirect("/");
        }
        return res.render("admin/pilavlarAdd", {
            user: user,
            data: { pilav }
        })
    }
}

const add = async (req, res) => {
    const data = req.body;
    const pilavlar_photo = req.file.filename;
    const pilavlar_materials = data.pilavlar_materials.split(",");
    await pilavlarModel.create({
        pilavlar_title: data.pilavlar_title,
        pilavlar_description: data.pilavlar_description.split(","),
        pilavlar_materials: pilavlar_materials,
        pilavlar_photo: pilavlar_photo
    });

    res.redirect("/admin/pilavlar")
}

const updateviews = async (req,res)=> {
    const id = req.params.id;
    const pilav = await pilavlarModel.findById(id);
    var user = req.user;
    if(user == null){
        return res.redirect("/kayit");
    } else {
        if(user.isAdmin == false) {
            return res.redirect("/");
        }
        res.render("admin/pilavlarUpdate", { data: { pilav }, user: user })
    }
}

const update = async ( req,res)=>{
    const id = req.params.id;
    const data = req.body;
    const pilavlar_photo = req.file?.filename;
    const pilavlar_materials = data.pilavlar_materials.split(",");

    if (!pilavlar_photo) {
        await pilavlarModel.findByIdAndUpdate(id,{
            pilavlar_title: data.pilavlar_title,
            pilavlar_description: data.pilavlar_description.split(","),
            pilavlar_materials: pilavlar_materials
        });

        return res.redirect("/admin/pilavlar")
    }

    await pilavlarModel.findByIdAndUpdate(id,{
        pilavlar_title: data.pilavlar_title,
        pilavlar_description: data.pilavlar_description.split(","),
        pilavlar_materials: pilavlar_materials,
        pilavlar_photo: pilavlar_photo
    });

   return  res.redirect("/admin/pilavlar")


}

const deletee = async ( req,res)=>{
    const id = req.params.id;
    await pilavlarModel.findByIdAndDelete(id)
    res.redirect("/admin/pilavlar")
}

module.exports = {
    pageview,add,addPageview,update,updateviews,deletee
}

