<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $message = $_POST["message"];

    // Build the email message
    $to = "enquiries@thespoils.co.uk, tom.brigstock@gmail.com";
    $subject = "New Contact Form Submission";
    $email_body = "Name: $name\n";
    $email_body .= "Email: $email\n";
    $email_body .= "Phone: $phone\n";
    $email_body .= "Message:\n$message";

    // Set additional headers
    $headers = "From: enquiries@thespoils.co.uk"; // Replace with your actual Outlook email address

    // Send the email
    if (mail($to, $subject, $email_body, $headers)) {
        // Redirect to a thank you page
        header("Location: thankyou.html");
        exit();
    } else {
        echo "Error sending email. Please try again later.";
    }
}
?>
