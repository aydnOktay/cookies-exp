const userModel = require("../../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const { v4: uuidv4 } = require("uuid");
const { setUser } = require("../../middlewares/service/auth");

const pageView = async (req, res) => {
    console.log("burası çalıştı")
    const userr = await userModel.find();
    res.render("kayitol", { data: { userr } });
}

const kayitol = async (req, res) => {

    if (!(req.body.password == req.body.rpassword)) {
        return res.render("kayitol", {
            error: "Şifreler uyuşmuyor"
        })
    }

    var allUsersDatas = await userModel.find();
    for (let i = 0; i < allUsersDatas.length; i++) {
        if (allUsersDatas[i].email == req.body.email) {
            return res.render("kayitol", {
                error: "Bu email adresi kullanılıyor"
            })
        }
    }

    await userModel.create({
        fullName: req.body.fullName,
        password: await bcrypt.hash(req.body.password, 10),
        email: req.body.email,
        active: false,
    }).then((user) => {
        const sessionId = uuidv4();
        setUser(sessionId, user);
        res.cookie("uid", sessionId);
        return res.redirect("/");
    })

}

const girisyap = async (req, res) => {
    const userr = await userModel.findOne({ email: req.body.email });

    if (!userr) {
        return res.render("kayitol", {
            error: "Böyle bir kullanıcı bulunamadı", 
            data: null
        })
    }

    if (!(await bcrypt.compare(req.body.password, userr.password))) {
        return res.render("kayitol", {
            error: "Şifre yanlış",
            data: null
        })
    }

    const sessionId = uuidv4();
    setUser(sessionId, userr);
    res.cookie("uid", sessionId);

    if(userr.isAdmin == true){
        return res.redirect("/admin")
    } else {
        return res.redirect("/")
    }

}

const sifremiunuttum = async (req, res) => {
    const userr = await userModel.findOne({ email: req.body.email });
    if (userr) {
        const secretKey = "sifresifirla" + "-" + userr.id;
        const jwtToken = await jwt.sign({ id: userr.id, email: userr.email }, secretKey, { expiresIn: "10m" });
        const url = "http://localhost:5000/" + "sifre-yenile/" + userr.id + "/" + jwtToken;

        let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: "",
                pass: "",
            },
        });


        await transporter.sendMail({
            to: userr.email,
            subject: "Şifre Yenileme",
            text: "Şifre yenilemek için linke tıkla " + url,
        }, (error, info) => {
            if (error) {
                console.log("ERROR " + error);
            }
            console.log("MAİL SEND");
            transporter.close();
        });

        res.redirect("/")

    } else {
        return false;
    }

}

const sifreyenile = async (req, res) => {
    const linkID = req.params.id;
    const linkToken = req.params.token;

    if (linkID && linkToken) {
        const userr = await userModel.findOne({ _id: linkID });
        const secretKey = "sifresifirla" + "-" + userr.id;
        await jwt.verify(linkToken, secretKey, async (e, decoded) => {
            if (e) {
                res.redirect("/")
            } else {
                res.render("sifreyenile", { id: linkID, token: linkToken })
            }
        })
    } else {
        return false;
    }
}

const sifresifirla = async (req, res) => {
    const userr = await userModel.findOne({ _id: req.body.id });
    const secretKey = "sifresifirla" + "-" + userr.id;
    await jwt.verify(linkToken, secretKey, async (e, decoded) => {
        if (e) {
            return false;
        } else {
            const hashSifre = await bcrypt.hash(req.body.password, 10);
            const yenisifre = await userModel.findByIdAndUpdate(req.body.id, { password: hashSifre });
            if (yenisifre) {
                res.redirect("/")
            }
        }
    })
}

module.exports = {
    kayitol,
    girisyap,
    pageView,
    sifremiunuttum,
    sifreyenile,
    sifresifirla
}