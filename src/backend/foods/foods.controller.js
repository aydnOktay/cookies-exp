const foodsModel = require("../../models/foods.model");

const pageViews = async (req, res) => {
    const foods = await foodsModel.find();
    var user = req.user;
    if (user == null) {
        return res.redirect("/kayit");
    } else {
        if (user.isAdmin == false) {
            return res.redirect("/");
        }
        return res.render("admin/foodsview", { data: { foods }, user: user })
    }
}
const yemekEkleViews = async (req, res) => {
    var user = req.user;
    if (user == null) {
        return res.redirect("/kayit");
    } else {
        if (user.isAdmin == false) {
            return res.redirect("/");
        }
        return res.render("admin/yemek-ekle", { user: user })
    }
}

const yemekekle = async (req, res) => {
    const yemekphoto = req.file.filename; // fotograf bu şekilde alınır
    const data = new foodsModel({
        food_title: req.body.food_title,
        food_description: req.body.food_description.split(","),
        food_materials: req.body.food_materials.split(","),
        food_photo: yemekphoto
    })
    await data.save()
    res.redirect("/admin/foodsview")
}

const yemeksil = async (req, res) => {
    const id = req.params.id;
    await foodsModel.findByIdAndDelete(id)
    res.redirect("/admin/foodsview")
}

const yemekDuzenleWievs = async (req, res) => {
    const id = req.params.id;
    const foods = await foodsModel.findById(id);
    var user = req.user;
    if (user == null) {
        return res.redirect("/kayit");
    } else {
        if (user.isAdmin == false) {
            return res.redirect("/");
        }
        return res.render("admin/yemek-duzenle", { data: { foods }, user: user })
    }
}

const yemekguncelle = async (req, res) => {
    const id = req.params.id;
    const foodsPhoto = req.file?.filename;

    if (!foodsPhoto) {
        await foodsModel.findByIdAndUpdate(id,{
            food_title:req.body.food_title,
            food_description:req.body.food_description.split(","),
            food_materials:req.body.food_materials.split(",")
        });

        return res.redirect("/admin/foodsview")
    }

    await foodsModel.findByIdAndUpdate(id,{
        food_title:req.body.food_title,
        food_description:req.body.food_description.split(","),
        food_materials:req.body.food_materials.split(","),
        food_photo:foodsPhoto
    });

   return  res.redirect("/admin/foodsview")



}
module.exports = {
    pageViews,
    yemekEkleViews,
    yemekekle,
    yemeksil,
    yemekDuzenleWievs,
    yemekguncelle

}