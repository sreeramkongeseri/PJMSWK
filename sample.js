
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyAwZIKi7eFRABHFjLuFOjXPRvDF8Krc-i8",
    authDomain: "pjm-keywords.firebaseapp.com",
    databaseURL: "https://pjm-keywords-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "pjm-keywords",
    storageBucket: "pjm-keywords.appspot.com",
    messagingSenderId: "195513908610",
    appId: "1:195513908610:web:7df92646d328461f3b639b",
    measurementId: "G-BWYLXG16XY"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

  var database = firebase.database();
  var list;

$(document).ready(function() {

    list = document.getElementById("list");

    const dbRef = database.ref();
    dbRef.child("definition").get().then((snapshot) => {
    if (snapshot.exists()) {

        console.log(snapshot.val());
        data = snapshot.val();

        data.forEach((obj, index) => {
            createLi(obj);
    });
    
      } else {
  
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
});
  
function createLi(obj) {

    let li = document.createElement("li");
    li.innerHTML = "<b>" + obj['Keyword'] + "</b>" + "<br>" + obj['Definition'];
    li.className = "list-group-item";
    list.appendChild(li);
}