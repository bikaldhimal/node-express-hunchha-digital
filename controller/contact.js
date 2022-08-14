const Contact = require('../model/contactUs')

exports.getContactUsController = (req, res) => {
    res.render("contact.ejs")
}

exports.postContactUsController = (req, res) => {
    // Contact.create({name:"Roshan", email:"example@gmail.com", message:"Hello"});

    console.log(req.body);
    res.send("Success")
}

