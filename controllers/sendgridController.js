const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SG_KEY);

const templates = {
  password_reset_confirm: 'd-735e60f63c424222b7a98f4c02b8924d',
  password_reset_link: 'd-7f00299dc34c4c6bac56089128ee0d39',
  activate_email: 'd-8bef55409ce44454a9ad6efc9ade77d6',
  user_deletion: 'd-ec39e9b5ad1341f1ac9a53f9f9573d29',
  generic_notification: 'd-1b342596d9ee47819a00e1e2e8c2e18c',
};
function sendEmail(message) {
  const msg = {
    //extract the email details
    to: message.receiver,
    from: 'wallaclone123@gmail.com',
    templateId: templates[message.templateName],
    //extract the custom fields
    dynamic_template_data: {
      name: message.name,
      confirm_account_url: message.confirm_account_url,
      activate_email_url: message.activate_email_url,
      Email_Text: message.text,
      advert_url: message.url_callback,
    },
  };
  //send the email
  sgMail.send(msg, (error, result) => {
    console.log(msg);
    if (error) {
      console.log(error);
    } else {
      console.log("That's all!");
    }
  });
}
exports.sendEmail = sendEmail;
