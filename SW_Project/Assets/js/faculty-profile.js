

const nam = document.querySelector(".facultyname");
const degree = document.querySelector(".degree");
const mobileno = document.querySelector(".mo-number");
const locations = document.querySelector(".location");
const email = document.querySelector(".email");
const gender = document.querySelector(".genderplace");
const dob = document.querySelector(".dobplace");
const biography = document.querySelector(".paras");
const btn=document.querySelector(".btnedit");

function edit(){
    if(btn.textContent=="Edit"){
    nam.readOnly = false;
    degree.readOnly = false;
    mobileno.readOnly = false;
    locations.readOnly = false;
    email.readOnly = false;
    gender.readOnly = false;
    dob.readOnly = false;
    biography.readOnly = false; 
    btn.textContent="Save Changes";
    }
    else{
        nam.readOnly = true;
        degree.readOnly = true;
        mobileno.readOnly = true;
        locations.readOnly = true;
        email.readOnly = true;
        gender.readOnly = true;
        dob.readOnly = true;
        biography.readOnly = true; 
        btn.textContent="Edit";
    }
}