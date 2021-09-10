function function1() {
  let fName = document.forms["formElem"]["firstName"].value;
  let lName = document.forms["formElem"]["lastName"].value;
  let eMail = document.forms["formElem"]["email"].value;
  let pNumber = document.forms["formElem"]["phoneNumber"].value;
  let requestSType = document.forms["formElem"]["requestServiceType"].value;

  alert(fName + " " + lName + ",\n"
  + " your request is being processed. \n \n" +
    "You will be contacted by a services representative within 24 hours by phone at "
    + pNumber + ". \n \n"
    + "If you don't hear from us within that time be sure to check your email at "
     + eMail
     + " regarding your request concerning: \n \n"
     + requestSType + "." );
  document.location.href = "security-services.html";
  }

  function function2() {
    let fName = document.forms["formEmploy"]["firstName2"].value;
    let lName = document.forms["formEmploy"]["lastName2"].value;
    let eMail = document.forms["formEmploy"]["email2"].value;
    let pNumber = document.forms["formEmploy"]["phoneNumber2"].value;
    let employEducation = document.forms["formEmploy"]["employmentEducation"].value;
    let employExperience = document.forms["formEmploy"]["employmentEducation"].value;
    let coverLetter = document.forms["formEmploy"]["coverLetterFile"].value;
    let resume = document.forms["formEmploy"]["resumeFile"].value;

    alert(fName + " " + lName + ",\n"
    + " thank you for your interest in joining our team. \n \n" +
      "You will be contacted by a talent acquisition specialist within 24 hours by phone at "
      + pNumber + ". \n \n"
      + "If you don't hear from us within that time be sure to check your email at "
       + eMail);
    document.location.href = "locations.html";
    }
