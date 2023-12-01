const mongoose = require('mongoose');
const express = require("express");
const passport = require('passport');
const LocalStrategy = require("passport-local");
const passportLocalMongoose = require('passport-local-mongoose');
const session = require("express-session");


const app = express();

app.use(require("connect-flash")());
const StudentSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
    },
    middlename: String,
    lastname: {
        type: String,
        required: true,
    },
    stud_id: {
        type: String,
        required: true,
        unique: true,
    },
    phoneNo: String,
    Gender: {
        type: String,
        // enum: ['Male', 'Female', 'Other'],
    },
    DOB: Date,
    Email_id: {
        type: String,
        required: true,
        unique: true,
        // match: /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/,
    },
    Address: String,
    Personal_Email_id: {
        type: String,
        required: true,
        // match: /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/,
    },
    Password: {
        type: String,
        required: true,
        // unique: true,
    },
    Batch: {
        type: String,
        required: true,
    },
    Blood_Group: {
        type: String,
        // enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-', 'Unknown'],
    },
    Profile_image: Buffer,
    ProgramRegistered: {
        type: mongoose.Schema.Types.ObjectId, ref: "Program",
        required: true,
    },
    Fee_Paid: {
        type: Boolean,
        default: false,
    },
});



const FacultySchema = new mongoose.Schema({
   
    fullname: {
        type: String,
        required: true,
    },
    phoneNo: String,
    DOB: Date,
    Gender: {
        type: String,
        // enum: ['Male', 'Female', 'Other'],
    },
    Email_id: {
        type: String,
        required: true,
        unique: true,
        // match: /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/,
    },
    
    Education: {
        type: String, 
    },

    Password: {
        type: String,
        required: true,
        unique: true,
    },
    
    Faculty_Block: {
        type: String,
        required: true,
    },
    Biography: {
        type: String,   
    },
    Profile_image: Buffer,
});



const AdminSchema = new mongoose.Schema({
    admin_name : {
        type : String,
        required : true,
    },
    Email_id: {
        type: String,
        required: true,
        unique: true,
        // match: /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/,
    },
    Password: {
        type: String,
        required: true,
        // unique: true,
    },
});

const DegreeSchema = new mongoose.Schema({
    Degree_name: {
        type: String,
        required: true,
    },
});

const BranchSchema = new mongoose.Schema({
    Branch_name: {
        type: String,
        required: true,
    },
});

const CourseSchema = new mongoose.Schema({
    Course_Name: {
        type: String,
        required: true,
    },
    Course_code: {
        type: Number,
        required: true,
        unique: true,
    },
    Course_credit: {
        type: Number,
        required: true,
    }
});


const ProgramSchema = new mongoose.Schema({
    DegreeOffered: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Degree",
        required: true,
    },
    BranchOffered: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Branch",
        required: true,
    },
    CourseOffered: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
        required: true,
    }],
});

const AnnouncementSchema = new mongoose.Schema({
    Title: {
        type: String,
        required: true,

    },
    Description: {
        type: String,
        required: true,
    },
    Due_Date: {
        type: Date,
        required: true,
    },
});

const Course_AllotmentSchema = new mongoose.Schema({
    Program_associate: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Program",
        required: true,
    },
    Semester_name : {
        type : String,
        required : true
    },
    Date_created : {
        type : Date,
        required : true
    },

    Batch : {
        type : String,
        required : true
    },

    Courseallocate : [{
        Course_code: {
            type: String,
            required: true,
        },
        Course_type : {
            type : Boolean,
            required : true
        },
        Faculty_assigned : {
            type: String,
            required: true,
        },
    }]
});


const AttendanceSchema = new mongoose.Schema({
    A_courseEnrolled: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
        required: true,
    },
    Attendance_data : [{
        Student_enrolled: {
            type: String,
            
            required: true
        },
        Present_days : {
            type : Number,
            required : true
        },
        Total_days : {
            type : Number,
            required : true
        }
    }]
});

const GradeSchema = new mongoose.Schema({
    G_courseEnrolled: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
        required: true,
    },
    Grade_data : [{
        Student_enrolled: {
            type: String,
            required: true
        },
        Grade : {
            type : Number,
            required : true
        }
    }]
});


const Course_EnrollmentSchema = new mongoose.Schema({
    
    studentEnrolled: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Student",
        required: true,
    },
    semesterEnrolled: {
        type: String,
        required: true,
    },
    
    courseEnrolled: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
        required: true,
    }],

    
});

const ResultSchema = new mongoose.Schema({
    Student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Student",
        required: true,
    },
    Semester: String, // You might want to add validation for the format here
});

StudentSchema.plugin(passportLocalMongoose);
AdminSchema.plugin(passportLocalMongoose);
FacultySchema.plugin(passportLocalMongoose);

const Student = mongoose.model("Student", StudentSchema);
const Admin = mongoose.model("Admin", AdminSchema);
const Faculty = mongoose.model("Faculty", FacultySchema);
const Degree = mongoose.model("Degree", DegreeSchema);
const Branch = mongoose.model("Branch", BranchSchema);
const Course = mongoose.model("Course", CourseSchema);
const Program = mongoose.model("Program", ProgramSchema);
const Announcement = mongoose.model("Announcement", AnnouncementSchema);
const Course_Allotment = mongoose.model("Course_Allotment", Course_AllotmentSchema);
const Attendance = mongoose.model("Attendance", AttendanceSchema);
const Grade = mongoose.model("Grade", GradeSchema);
const Course_Enrollment = mongoose.model("Course_Enrollment", Course_EnrollmentSchema);


// Set up Passport configuration
passport.use(new LocalStrategy(Student.authenticate()));
passport.serializeUser(Student.serializeUser());
passport.deserializeUser(Student.deserializeUser());

passport.use(new LocalStrategy(Admin.authenticate()));
passport.serializeUser(Admin.serializeUser());
passport.deserializeUser(Admin.deserializeUser());

passport.use(new LocalStrategy(Faculty.authenticate()));
passport.serializeUser(Faculty.serializeUser());
passport.deserializeUser(Faculty.deserializeUser());

app.use(
	session({
	  name: "user-session", // Set a unique name for sessions
	  secret: "your-secret-key",
	  resave: false,
	  saveUninitialized: false,
	  // You can also specify additional session options here
	})
  );


  app.use(require("connect-flash")());

app.use(passport.initialize());
app.use(passport.session());


module.exports = {Student,Admin,Faculty,Degree,Branch,Course,Program,Announcement,
    Course_Allotment,Attendance,Grade,Course_Enrollment};
