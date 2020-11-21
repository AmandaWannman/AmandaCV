function sendMail (contactForm){
    var template_params = {
        "from_name": contactForm.name.value,
        "from_email": contactForm.email.value,
        "message": contactForm.message.value,
        "from_phone": contactForm.phone.value
    }

    var service_id = "gmail";
    var template_id = "amanda";

    emailjs.send(service_id, template_id, template_params)
        .then(
        function (response) {
            alert("Contact sent successfully");
            // console.log("SUCCESS",response);
        },
        function (error) {
            // alert("Contact not sent", Error);
            console.log("FAILED", error);
        });
    cleanForm();
     return false;
}

function cleanForm() {
    document.getElementById("myForm").reset();
}