if (process.argv.length != 6) {
  console.log("Proper Usage: 'node <program_name> <email_to_facebook> <password_to_facebook> <spam_message> <person_to_send_id>'");
  console.log("Don't worry, your information is only stored on your local server and on facebook");
  console.log("To get someone's facebook id, go to http://findmyfbid.com/");
  console.log("\nNOTE: To send multiple word arguements, do '\<space>' and to skip a line, do 'slash n' (the character)");

  process.exit();
}

email = process.argv[2];
password = process.argv[3]
spam = process.argv[4];
id = process.argv[5];

console.log("Email Used: " + email);
console.log("Password Used: " + password);
console.log("Spam Phrase: " + spam);
console.log("Target FB ID: " + id);

var login = require("facebook-chat-api");

login({email: email, password: password}, function callback (err, api) {
  if(err) return console.error(err);
  setInterval(function (){  api.sendMessage(spam, id);}, 1000);
  console.log("message sent");

});
