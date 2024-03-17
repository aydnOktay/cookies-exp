const kurabiyelerModel = require("../../models/kurabiyeler.model");

const pageview = async (req, res) => {
    const kurabiye = await kurabiyelerModel.find();
    var user = req.user;
    if(user == null){
        return res.redirect("/kayit");
    } else {
        if(user.isAdmin == false) {
            return res.redirect("/");
        }
        return res.render("admin/kurabiyeler", { data: { kurabiye }, user: user })
    }
}

const addPageview = async (req, res) => {
    const kurabiye = await kurabiyelerModel.find();
    var user = req.user;
    if(user == null){
        return res.redirect("/kayit");
    } else {
        if(user.isAdmin == false) {
            return res.redirect("/");
        }
        return res.render("admin/kurabiyelerAdd", { data: { kurabiye }, user: user })
    }
}

const add = async (req, res) => {
    const data = req.body;
    const kurabiyeler_photo = req.file.filename;
    const kurabiyeler_materials = data.kurabiyeler_materials.split(",");
    await kurabiyelerModel.create({
        kurabiyeler_title: data.kurabiyeler_title,
        kurabiyeler_description: data.kurabiyeler_description.split(","),
        kurabiyeler_materials: kurabiyeler_materials,
        kurabiyeler_photo: kurabiyeler_photo
    });

    res.redirect("/admin/kurabiyeler")
}

const updateviews = async (req,res)=> {
    const id = req.params.id;
    const kurabiye = await kurabiyelerModel.findById(id);
    var user = req.user;
    if(user == null){
        return res.redirect("/kayit");
    } else {
        if(user.isAdmin == false) {
            return res.redirect("/");
        }
         return res.render("admin/kurabiyelerUpdate", { data: { kurabiye }, user: user })
    }
}

const update = async ( req,res)=>{
    const id = req.params.id;
    const data = req.body;
    const kurabiyeler_photo = req.file?.filename;
    const kurabiyeler_materials = data.kurabiyeler_materials.split(",");

    if (!kurabiyeler_photo) {
        await kurabiyelerModel.findByIdAndUpdate(id,{
            kurabiyeler_title: data.kurabiyeler_title,
            kurabiyeler_description: data.kurabiyeler_description.split(","),
            kurabiyeler_materials: kurabiyeler_materials
        });

        return res.redirect("/admin/kurabiyeler")
    }

    await kurabiyelerModel.findByIdAndUpdate(id,{
        kurabiyeler_title: data.kurabiyeler_title,
        kurabiyeler_description: data.kurabiyeler_description.split(","),
        kurabiyeler_materials: kurabiyeler_materials,
        kurabiyeler_photo: kurabiyeler_photo
    });

   return  res.redirect("/admin/kurabiyeler")


}

const deletee = async ( req,res)=>{
    const id = req.params.id;
    await kurabiyelerModel.findByIdAndDelete(id)
    res.redirect("/admin/kurabiyeler")
}

module.exports = {
    pageview,add,addPageview,update,updateviews,deletee
}

