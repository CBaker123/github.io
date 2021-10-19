const contactUs = () => {
  message.name = document.getElementById("name").value;
  message.email = document.getElementById("email").value;
  message.subject = document.getElementById("subject").value;
  message.message = document.getElementById("message").value;

  window.alert("Name: " + message.name + "\n Email: " + message.email + "\n Subject: " + message.subject + "\n Message: " + message.message + "\n This message wont be delivered because this is only a demo \n This page will be refreshed");
  document.location = 'support.html';

}

const login = () => {

  const redactedPassword = () => {
    var word = ""
    for (var i = 0; i < num; i++) {
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
  let shippingBill = 0;

  const shippingBill1 = () => {
    if (shipcost.packageSize == "less than 1 lb") {
      shippingBill = 3;
    } else if (shipcost.packageSize == "less than 2 lbs") {
      shippingBill = 5;
    } else if (shipcost.packageSize == "less than 5 lbs") {
      shippingBill = 8;
    } else if (shipcost.packageSize == "less than 10 lbs") {
      shippingBill = 12;
    } else if (shipcost.packageSize == "less than 20 lbs") {
      shippingBill = 17;
    } else if (shipcost.packageSize == "20 lbs or more") {
      shippingBill = 23;
    }
    return shippingBill;
  }

  const shippingBill2 = () => {
    if (shipcost.shippingSpeed == "2 Day Guaranteed")
      shippingBill =  1.5;
    else if (shipcost.shippingSpeed == "Overnight Guaranteed") {
      shippingBill =  2;
    } else if (shipcost.shippingSpeed == "Ground (7-14 Days)") {
      shippingBill =  1;
    }
    return shippingBill;
  }

  const shippingBill3 = () => {
    if (shipcost.distance == "Local (100 miles)")
      shippingBill = 0;
    else if (shipcost.distance == "Domestic") {
      shippingBill = 4.99;
    } else if (shipcost.distance == "International") {
      shippingBill = 14.99;
    }
    return shippingBill;
  }

  totalA = shippingBill1();
  totalB = shippingBill2();
  totalC = shippingBill3();
  totalD = totalA * totalB + totalC;
  totalD = totalD.toFixed(2);
  totalE = totalA*totalB;

console.log(totalE);

  const newDiv = document.getElementById("calculatedCost");
  newDiv.innerHTML = ("Calculated Cost for: " + "<p></p>" + shipcost.packageSize + ": $" + totalA + "<p></p> " + shipcost.distance  + ": Flat Rate $" + totalC +   "<p></p> " + shipcost.shippingSpeed +   ": $" + totalE + " (weight multiplier = x"  +totalB + ")"+ "<p></p>" + "Comes to: $ " + totalD + ".");
}

const trackPackage = () => {

}
