const firstnam = document.querySelector("#first-name");
const middlenam = document.querySelector("#middle-name");
const lastnam = document.querySelector("#last-name");
const studentid = document.querySelector("#student-id");
const mobileno = document.querySelector("#mobile-no");
const gender = document.querySelector("#gender");
const dob = document.querySelector("#dob");
const mail = document.querySelector("#emailaddr");
const address = document.querySelector("#homeaddr");
const parentmail= document.querySelector("#parentmailaddr");
const batch = document.querySelector("#batch");
const programme = document.querySelector("#programme");
const btn = document.querySelector(".edit-btn");


function edit(){
    if(btn.textContent=="Edit"){
        firstnam.readOnly = false;
        middlenam.readOnly = false;
        lastnam.readOnly = false;
        studentid.readOnly = false;
        mobileno.readOnly = false;
        gender.readOnly = false;
        dob.readOnly = false;
        mail.readOnly = false;
        address.readOnly = false;
        parentmail.readOnly = false;
        batch.readOnly = false;
        programme.readOnly = false;
        btn.textContent="Save Changes";
    }
    else{
        firstnam.readOnly = true;
        middlenam.readOnly = true;
        lastnam.readOnly = true;
        studentid.readOnly = true;
        mobileno.readOnly = true;
        gender.readOnly = true;
        dob.readOnly = true;
        mail.readOnly = true;
        address.readOnly = true;
        parentmail.readOnly = true;
        batch.readOnly = true;
        programme.readOnly = true;
        btn.textContent="Edit";
    }
} 