const sutlutatlilarModel = require("../../models/sutlutatlilar.model");

const pageview = async (req, res) => {
    const sutlutatli = await sutlutatlilarModel.find();
    var user = req.user;
    if(user == null){
        return res.redirect("/kayit");
    } else {
        if(user.isAdmin == false) {
            return res.redirect("/");
        } else {
            res.render("admin/sutlutatlilar", {
                user: user,
                data: { sutlutatli }
            })
        }
    }
}

const addPageview = async (req, res) => {
    const sutlutatli = await sutlutatlilarModel.find();
    var user = req.user;
    if(user == null){
        return res.redirect("/kayit");
    } else {
        if(user.isAdmin == false) {
            return res.redirect("/");
        } else {
            res.render("admin/sutlutatlilarAdd", {
                user: user,
                data: { sutlutatli }
            })
        }
    }
}

const add = async (req, res) => {
    const data = req.body;
    const sutlutatlilar_photo = req.file.filename;
    const sutlutatlilar_materials = data.sutlutatlilar_materials.split(",");
    await sutlutatlilarModel.create({
        sutlutatlilar_title: data.sutlutatlilar_title,
        sutlutatlilar_description: data.sutlutatlilar_description.split(","),
        sutlutatlilar_materials: sutlutatlilar_materials,
        sutlutatlilar_photo: sutlutatlilar_photo
    });

    res.redirect("/admin/sutlutatlilar")
}

const updateviews = async (req,res)=> {
    const id = req.params.id;
    var user = req.user;
    const sutlutatli = await sutlutatlilarModel.findById(id);
    if(user == null){
        return res.redirect("/kayit");
    } else {
        if(user.isAdmin == false) {
            return res.redirect("/");
        }
        res.render("admin/sutlutatlilarUpdate", { data: { sutlutatli }, user: user })
    }
}

const update = async ( req,res)=>{
    const id = req.params.id;
    const data = req.body;
    const sutlutatlilar_photo = req.file?.filename;
    const sutlutatlilar_materials = data.sutlutatlilar_materials.split(",");

    if (!sutlutatlilar_photo) {
        await sutlutatlilarModel.findByIdAndUpdate(id,{
            sutlutatlilar_title: data.sutlutatlilar_title,
            sutlutatlilar_description: data.sutlutatlilar_description.split(","),
            sutlutatlilar_materials: sutlutatlilar_materials
        });

        return res.redirect("/admin/sutlutatlilar")
    }

    await sutlutatlilarModel.findByIdAndUpdate(id,{
        sutlutatlilar_title: data.sutlutatlilar_title,
        sutlutatlilar_description: data.sutlutatlilar_description.split(","),
        sutlutatlilar_materials: sutlutatlilar_materials,
        sutlutatlilar_photo: sutlutatlilar_photo
    });

   return  res.redirect("/admin/sutlutatlilar")


}

const deletee = async ( req,res)=>{
    const id = req.params.id;
    await sutlutatlilarModel.findByIdAndDelete(id)
    res.redirect("/admin/sutlutatlilar")
}

module.exports = {
    pageview,add,addPageview,update,updateviews,deletee
}

