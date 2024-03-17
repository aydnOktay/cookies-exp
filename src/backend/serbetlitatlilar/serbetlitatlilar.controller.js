const serbetlitatlilarModel = require("../../models/serbetlitatlilar.model");

const pageview = async (req, res) => {
    const serbetlitatli = await serbetlitatlilarModel.find();
    var user = req.user;
    if(user == null){
        return res.redirect("/kayit");
    } else {
        if(user.isAdmin == false) {
            return res.redirect("/");
        }
        return res.render("admin/serbetlitatlilar", { data: { serbetlitatli }, user: user })
    }
}

const addPageview = async (req, res) => {
    const serbetlitatli = await serbetlitatlilarModel.find();
    var user = req.user;
    if(user == null){
        return res.redirect("/kayit");
    } else {
        if(user.isAdmin == false) {
            return res.redirect("/");
        }
        return res.render("admin/serbetlitatlilarAdd", { data: { serbetlitatli }, user: user })
    }
}

const add = async (req, res) => {
    const data = req.body;
    const serbetlitatlilar_photo = req.file.filename;
    const serbetlitatlilar_materials = data.serbetlitatlilar_materials.split(",");
    await serbetlitatlilarModel.create({
        serbetlitatlilar_title: data.serbetlitatlilar_title,
        serbetlitatlilar_description: data.serbetlitatlilar_description.split(","),
        serbetlitatlilar_materials: serbetlitatlilar_materials,
        serbetlitatlilar_photo: serbetlitatlilar_photo
    });

    res.redirect("/admin/serbetlitatlilar")
}

const updateviews = async (req,res)=> {
    const id = req.params.id;
    const serbetlitatli = await serbetlitatlilarModel.findById(id);
    var user = req.user;
    if(user == null){
        return res.redirect("/kayit");
    } else {
        if(user.isAdmin == false) {
            return res.redirect("/");
        }

    return res.render("admin/serbetlitatlilarUpdate", { data: { serbetlitatli } })
    }
}

const update = async ( req,res)=>{
    const id = req.params.id;
    const data = req.body;
    const serbetlitatlilar_photo = req.file?.filename;
    const serbetlitatlilar_materials = data.serbetlitatlilar_materials.split(",");

    if (!_photo) {
        await serbetlitatlilarModel.findByIdAndUpdate(id,{
            serbetlitatlilar_title: data._title,
            serbetlitatlilar_description: data._description.split(","),
            serbetlitatlilar_materials: _materials
        });

        return res.redirect("/admin/serbetlitatlilar")
    }

    await serbetlitatlilarModel.findByIdAndUpdate(id,{
        serbetlitatlilar_title: data._title,
        serbetlitatlilar_description: data.serbetlitatlilar_description.split(","),
        serbetlitatlilar_materials: serbetlitatlilar_materials,
        serbetlitatlilar_photo: serbetlitatlilar_photo
    });

   return  res.redirect("/admin/serbetlitatlilar")


}

const deletee = async ( req,res)=>{
    const id = req.params.id;
    await serbetlitatlilarModel.findByIdAndDelete(id)
    res.redirect("/admin/serbetlitatlilar")
}

module.exports = {
    pageview,add,addPageview,update,updateviews,deletee
}

