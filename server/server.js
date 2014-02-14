Purchases = new Meteor.Collection("purchases");

Meteor.methods({
  'sendReceipt': function(name, email, number) {
    var cost = 350;
    totalCost = cost * number;

    var receiptNumber = Purchases.find().count() + 1;

    var formattedHtml = '<h4>Get ready to design better!</h4>' + 
            '<p style="font-size: 13px;"><a href="http://twitter.com/intent/tweet?text=Ready to design better! Grab your grid books just outside the auditorium entry @metarefresh&via=animusio" target="_blank">Tweet @animusio</a></p>' +
            '<p><img width="80" src="https://dl.dropboxusercontent.com/u/3560124/Animus.png"></p>' +
            '<p style="font-size: 13px; line-height: 1.1em; padding-bottom: 10px;">Thank you for purchasing Animus. Here\'s your receipt.</p>' +
            '<p style="text-transform: uppercase; font-size: 10px; line-height: 0px;">Receipt Number</p>' +
            '<p style="font-size: 13px; padding-bottom: 10px;">' + 'ANIMUS' + receiptNumber + '</p>' +
            '<p style="text-transform: uppercase; font-size: 10px; line-height: 0px;">Billed To</p>' +
            '<p style="font-size: 13px; padding-bottom: 10px;">' + name + '</p>' +
            '<p style="text-transform: uppercase;font-size: 10px; line-height: 0px;">Date</p>' +
            '<p style="font-size: 13px; padding-bottom: 10px;">February 14, 2014</p>' +
            '<p style="text-transform: uppercase; font-size: 10px; line-height: 0px;">Amount Charged</p>' +
            '<p style="padding-bottom: 10px;">' + 
            '<span style="font-size: 18px; font-weight: bold; letter-spacing: -1.2px;">Rs. </span>' + 
            '<span style="font-size: 18px; font-weight: bold; letter-spacing: -0.2px;">' + totalCost + '.00</span></p>';

    Purchases.insert({
      name: name,
      email: email,
      number: number,
      receipt: 'ANIM' + receiptNumber
    })

    Email.send({
      to: email,
      from: 'postmaster@sandbox88634.mailgun.org',
      replyTo: 'chilli.iitm@gmail.com',
      subject: 'Animus Gridbook Receipt',
      html: formattedHtml
    });
  }
})

