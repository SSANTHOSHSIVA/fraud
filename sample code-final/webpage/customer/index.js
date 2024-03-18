
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-analytics.js";
import { getDatabase, ref, set, onValue, get, child, push, update } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD_TUtKlozPc4IqT1J7xA8E39J7-vztKFk",
    authDomain: "ssp-batch.firebaseapp.com",
    databaseURL: "https://ssp-batch-default-rtdb.firebaseio.com",
    projectId: "ssp-batch",
    storageBucket: "ssp-batch.appspot.com",
    messagingSenderId: "502000240454",
    appId: "1:502000240454:web:9971668074caf280080747",
    measurementId: "G-D6TMSCMT86"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app)


$('#payment').click(()=>{
   let name = $("#name").val();
   let idbuyer = $("#id_buyer").val();
   let ipaddress = $("#ip_address").val();
   let payment = $("#payamt").val();
   let buyoldamt = $("#buyoldamt").val();
    set(ref(db, 'buyer/'), {
        username: name,
        id_buyer: idbuyer,
        ip_address: ipaddress,
        payamt: payment,
        buyoldamt: buyoldamt,
        lattitude:'456',
        longitude:'567',
        timestap:'789'
    });
    
});

function disprqtamt(){
const amount = ref(db, 'shopkeeper/RequestedAmount');
onValue(amount, (snapshot) => {
  const data = snapshot.val();
  console.log(data);
  $("#requestedamount").html(data);
});
}
disprqtamt();
