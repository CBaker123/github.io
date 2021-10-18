const recipient = new Object();
const shipper = new Object();
const details = new Object();
const payment = new Object();

document.getElementById("data2").style.display = "none";
document.getElementById("data3").style.display = "none";
document.getElementById("data4").style.display = "none";

const createShipmentStage1 = () => {
  recipient.recipientInputFirstName = document.getElementById("recipientInputFirstName").value;
  recipient.recipientInputLastName = document.getElementById("recipientInputLastName").value;
  recipient.recipientInputAddress = document.getElementById("recipientInputAddress").value;
  recipient.recipientInputAddress2 = document.getElementById("recipientInputAddress2").value;
  recipient.recipientInputCity = document.getElementById("recipientInputCity").value;
  recipient.recipientInputState = document.getElementById("recipientInputState").value;
  recipient.recipientInputZip = document.getElementById("recipientInputZip").value;
  shipper.shipperInputName = document.getElementById("shipperInputName").value;
  shipper.shipperInputEmail = document.getElementById("shipperInputEmail").value;
  shipper.shipperInputAddress = document.getElementById("shipperInputAddress").value;
  shipper.shipperInputAddress2 = document.getElementById("shipperInputAddress2").value;
  shipper.shipperInputCity = document.getElementById("shipperInputCity").value;
  shipper.shipperInputState = document.getElementById("shipperInputState").value;
  shipper.shipperInputZip = document.getElementById("shipperInputZip").value;
  shipper.emailShippingUpdates = document.getElementById("emailShippingUpdates").value;

  document.getElementById("data1").style.display = "none";
  document.getElementById("data2").style.display = "block";
  const newDiv = document.createElement("div");

  newDiv.innerHTML = "<section class='toolsSection'><div class='row'><div class='col-10 container shadowedCard'><h4>Recipient:</h4><p>" + recipient.recipientInputFirstName + " " + recipient.recipientInputLastName + "</p><p>" + recipient.recipientInputAddress + "</p><p>" + recipient.recipientInputAddress2 + "</p><p>" + recipient.recipientInputCity + "</p><p>" + recipient.recipientInputState + "</p><p>" + recipient.recipientInputZip + "</p><h4>Shipper:</h4><p>" + shipper.shipperInputName + "</p><p>" + shipper.shipperInputEmail + "</p><p>" + shipper.shipperInputAddress + "</p><p>" + shipper.shipperInputAddress2 + "</p><p>" + shipper.shipperInputCity + "</p><p>" + shipper.shipperInputState + "</p><p>" + shipper.shipperInputZip + '</div></div></section>';

  const currentDiv = document.getElementById("data2");
  document.body.insertBefore(newDiv, currentDiv);
}

const createShipmentStage2 = () => {
  details.packageSize = document.getElementById("packageSize").value;
  details.shippingSpeed = document.getElementById("shippingSpeed").value;

  document.getElementById("data2").style.display = "none";
  document.getElementById("data3").style.display = "block";

  const newDiv = document.createElement("div");
  newDiv.innerHTML = "<section class='toolsSection'><div class='row'><div class='col-10 container shadowedCard'><h4>Shipment:</h4><p>" + "Package Size: " + details.packageSize + "</p><p>" + "Shipping Speed: " + details.shippingSpeed + '</div></div></section>';

  const currentDiv = document.getElementById("data3");
  document.body.insertBefore(newDiv, currentDiv);
}


const createShipmentStage3 = () => {
  payment.paymentType = document.getElementById("paymentType").value;
  payment.cardFirstName = document.getElementById("cardFirstName").value;
  payment.cardLastName = document.getElementById("cardLastName").value;
  payment.cardNumber = document.getElementById("cardNumber").value;
  payment.cardString = payment.cardNumber.toString();
  payment.cardNumberRedacted = "xxxxxxxxxxxx" + payment.cardString.substr(12,4);
  payment.expirationDate = document.getElementById("expirationDate").value;
  payment.cvv = document.getElementById("cvv").value;

  document.getElementById("data3").style.display = "none";
  document.getElementById("data4").style.display = "block";

  const newDiv = document.createElement("div");
  newDiv.innerHTML = "<section class='toolsSection'><div class='row'><div class='col-10 container shadowedCard'><h4>Payment:</h4><p>" + "Card: " + payment.paymentType + "</p><p>" + payment.cardFirstName + " " + payment.cardLastName + "</p><p>" + payment.cardNumberRedacted  + "</p><p>" + payment.expirationDate  + "</p><p>" + payment.cvv + '</div></div></section>';

  const currentDiv = document.getElementById("data4");
  document.body.insertBefore(newDiv, currentDiv);
  const reviewDiv = document.getElementById("reviewDiv")
  reviewDiv.innerHTML = "<h4>Recipient:</h4><p>" + recipient.recipientInputFirstName + " " + recipient.recipientInputLastName + "</p><p>" + recipient.recipientInputAddress + "</p><p>" + recipient.recipientInputAddress2 + "</p><p>" + recipient.recipientInputCity + "</p><p>" + recipient.recipientInputState + "</p><p>" + recipient.recipientInputZip + "</p><h4>Shipper:</h4><p>" + shipper.shipperInputName + "</p><p>" + shipper.shipperInputEmail + "</p><p>" + shipper.shipperInputAddress + "</p><p>" + shipper.shipperInputAddress2 + "</p><p>" + shipper.shipperInputCity + "</p><p>" + shipper.shipperInputState + "</p><p>" + shipper.shipperInputZip +"<h4>Shipment:</h4><p>" + "</p><p>" + "</p><p>" +"Package Size: " + details.packageSize + "</p><p>" + "Shipping Speed: " + details.shippingSpeed + "</p><p>" + "</p><p>" + "<h4>Payment:</h4><p>" + "Card: " + payment.paymentType + "</p><p>" + payment.cardFirstName + " " + payment.cardLastName + "</p><p>" + payment.cardNumberRedacted  + "</p><p>" + payment.expirationDate  + "</p><p>" + payment.cvv + '</div></div></section>';
}

const createShipmentStage4 = () => {
  //finish this to take to this is only a demo page
}
