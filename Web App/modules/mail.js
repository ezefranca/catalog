/*
 *  Confirmation E-mail Mailer
 */

var mailer = require("nodemailer")
    , config = require('./../modules/config').config;

var smtpTransport = mailer.createTransport("SMTP",{
    service: config.mail.service,
    auth: {
        user: config.mail.username,
        pass: config.mail.password
    }
});

console.log("Mail transport initilized..")


exports.send = function (email, editURL){
    var mailOptions = {
        from: "Emily Carr Grad Catalog <gradcatalog@ecuad.com>", // sender address
        to: email, // list of receivers
        subject: "Confirmation of Emily Carr Grad Catalog Submission", // Subject line
        text: 
        "Hello " + email + "!
        This is an email to confirm that you have successfully submitted your portfolio materials for approval. Once approved you they will be accesible through the main site.

        If you would like to edit your submission, you can do so by visiting the following link:
        " + editURL + "

        Please note that if you re-submit your portfolio after it has been approved, it will be removed from the site until re-approved again.

        -- The Grad Catalog Team", // plaintext body
        
        html: "Hello " + email + "!\nThis is an email to confirm that you have successfully submitted your portfolio materials for approval. Once approved you they will be accesible through the main site.\n\nIf you would like to edit your submission, you can do so by visiting the following link:\n" + editURL + "\nPlease note that if you re-submit your portfolio after it has been approved, it will be removed from the site until re-approved again.\n\n-- The Grad Catalog Team"// html body
    }

    smtpTransport.sendMail(mailOptions, function(error, response){
        if(error){
            console.log("Message send failure: " + error);
        } else {
            console.log("Message sent: " + response.message);
        }
    });
};