
const contactUs = () => {
  message.name = document.getElementById("name").value;
  message.email = document.getElementById("email").value;
  message.subject = document.getElementById("subject").value;
  message.message = document.getElementById("message").value;

window.alert("Name: " + message.name + "\n Email: " + message.email + "\n Subject: "+ message.subject + "\n Message: " + message.message + "\n This message wont be delivered because this is only a demo \n This page will be refreshed");
document.location = 'support.html';

}

const login = () => {

  const redactedPassword = () => {
    var word = ""
    for (var i=0; i<num;i++){
      word += "x";
      console.log(word);
    }
    return word;
  }

  login.username = document.getElementById("username").value;
  login.password = document.getElementById("password").value;
  const num = login.password.length;
  login.passwordRedacted = redactedPassword();
  window.alert("Username: " + login.username + "\n Password: " + login.passwordRedacted + "\n You cannot login to this demo site \n You will be returned to the home page");
  document.location = 'index.html';
}

const shipcost = () => {
  shipcost.packageSize = document.getElementById("packageSize").value;
  shipcost.distance = document.getElementById("distance").value;
  shipcost.shippingSpeed = document.getElementById("shippingSpeed").value;

///create function for calculating total cost
  shipcost.total = 20;

  const newDiv = document.getElementById("calculatedCost");
  newDiv.innerHTML = ("Calculated Cost for: " + "<p></p>" + shipcost.packageSize + "<p></p> " + shipcost.distance + "<p></p> " + shipcost.shippingSpeed + "<p></p>" + "Comes to: $ " + shipcost.total + ".");

}

  const trackPackage = () => {
    
  }
