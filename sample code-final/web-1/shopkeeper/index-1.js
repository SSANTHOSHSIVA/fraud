import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";

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

const app = initializeApp(firebaseConfig);

$('#requestForm').submit((event) => {
    event.preventDefault(); // Prevent form submission to reload the page
    const db = getDatabase(app);
    let name = $("#name").val();
    let email = $("#email").val();
    let shopid = $("#shopId").val();
    let shopidaddress = $("#shopIpAddress").val();
    let reqtamt = $("#RqAmt").val();
    let shopoldbal = $("#shopOldbal").val();

    set(ref(db, 'shopkeeper/'), {
        username: name,
        email: email,
        ShopId: shopid,
        ShopIdAddress: shopidaddress,
        RequestedAmount: reqtamt,
        ShopOldBalance: shopoldbal
    }).then(() => {
        // Show success message
        $("#successMessage").removeClass("d-none");
        setTimeout(() => {
        $("#successMessage").addClass("d-none");
        }, 3000);
        // Reset form fields
        $('#requestForm')[0].reset();
        // Hide success message after 3 seconds
        // setTimeout(() => {
        //     $("#successMessage").addClass("d-none");
        // }, 3000);
    }).catch((error) => {
        console.error("Error sending request:", error);
        alert("Error sending request. Please try again later.");
    });
});
