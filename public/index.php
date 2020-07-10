<?php

/* 
 * by meredith browne
 */

require '../model/database.php';
require '../model/contact_db.php';

global $success;
global $error_message;

$action = filter_input(INPUT_POST, 'action');
if ($action == NULL) {
    //$action = filter_input(INPUT_GET, 'action');
    $action = 'add_contact';
}

if ($action == 'add_contact') {
    $contact_name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_STRING);
    $contact_email = filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL);
    $contact_message = filter_input(INPUT_POST, 'message', FILTER_SANITIZE_STRING);
    
    if (filter_input(INPUT_POST, 'name', FILTER_SANITIZE_STRING) == null) {
        if (!filter_has_var(INPUT_POST, "contact_name")) {
            $error_message .= " Name required.<br>";    
        }
    }
    if (filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL) == null) {
        if (!filter_has_var(INPUT_POST, "contact_name")) {
            $error_message .= " Invalid email address.<br>";
        }
    }
    if (filter_input(INPUT_POST, 'message', FILTER_SANITIZE_STRING) == null) {
        if (!filter_has_var(INPUT_POST, "contact_name")) {
            $error_message .= " Message required.<br>";
        }
    }
    if ($contact_name == NULL || $contact_name == FALSE  || $contact_email == NULL || $contact_email == FALSE
        || $contact_message == NULL || $contact_message == FALSE) {
        $error_message .= "You missed something, please complete all fields.";
        include('../errors/error.php');
    } else {
        add_contact($contact_name, $contact_email, $contact_message);
        $success = true;
        echo $success;
        // include 'thanks.php';
    }
}

?>
