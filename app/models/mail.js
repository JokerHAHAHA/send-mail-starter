var nodemailer = require("nodemailer");

var Mail = {


  sendMail : function(req, res) {

    var transporter = nodemailer.createTransport(
      {
        "type": "SMTP",
        "host": "smtp.gmail.com",
        "secureConnection": true,
        "port": 465,
        "auth": {
          "user": "liondejude@gmail.com",
          "pass": "mdp 2-step Gamail pour cette aplication"
        }
    });

    console.log(req.body);

    transporter.sendMail({  
      from: '"mean-starter" liondejude@gmail.com',
      to: "Receiver Name <liondejude@hotmail.com>", 
      subject: "Emailing with nodemailer", 
      text: "Email Example with nodemailer"
    }, function(error, response) {  
      if(error) {
        console.log(error);
      }
      else {
        console.log("Message sent: " + response.message);
      }

      // smtpTransport.close(); 
    });
  }            
};

module.exports = Mail;
