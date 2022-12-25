const firebaseConfig = {
  apiKey: "AIzaSyCGxLPUNbQEkB1GEjttahmioYSoIyMhw3E",
  authDomain: "sparkhack-279c1.firebaseapp.com",
  databaseURL: "https://sparkhack-279c1-default-rtdb.firebaseio.com",
  projectId: "sparkhack-279c1",
  storageBucket: "sparkhack-279c1.appspot.com",
  messagingSenderId: "702636300696",
  appId: "1:702636300696:web:50d005c06845b11e6933ed"
};


  firebase.initializeApp(firebaseConfig);

  var contactFormDB = firebase.database().ref('contactForm');

  document.getElementById('contactForm').addEventListener('submit',submitForm);

  function submitForm(e){
    e.preventDefault();

  var name = getElementVal("name");
  var email = getElementVal("email");
  var subject = getElementVal("subject");
  var message = getElementVal("message");

  saveMessages(name, email, subject, message);
  // document.querySelector(".alert").style.display = "block";

  // setTimeout(() => {
  //   document.querySelector(".alert").style.display = "none";
  // }, 3000);


  document.getElementById("contactForm").reset();

  }

  const saveMessages = (name, email, subject, message) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      name: name,
      email: email,
      subject: subject,
      message: message,
    });
  };

  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };