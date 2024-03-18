// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";

// Your web app's Firebase configuration
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

// Add event listener to the request button
$('#rqbt').click(() => {
    const db = getDatabase(app);
    let name = $("#name").val();
    let email = $("#email").val();
    let shopid = $("#shopId").val();
    let shopidaddress = $("#shopIpAddress").val();
    let reqtamt = $("#RqAmt").val();
    let shopoldbal = $("#shopOldbal").val();
    
    // Write data to Firebase
    set(ref(db, 'shopkeeper/'), {
        username: name,
        email: email,
        ShopId: shopid,
        ShopIdAddress: shopidaddress,
        RequestedAmount: reqtamt,
        ShopOldBalance: shopoldbal
    }).then(() => {
        // Show success message
        alert("Request sent successfully");
    }).catch((error) => {
        // Handle errors
        console.error("Error sending request:", error);
        alert("Error sending request. Please try again later.");
    });
});
