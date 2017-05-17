/*
This is empty on purpose! Your code to build the resume will go here.
 */
 //$("#main").append("Robert Mayfield");
var bio = {
  "name": "Robert Mayfield",
  "role": "Front End Web Developer",
  "contacts": {
    "mobile": "504-616-7164",
    "email": "rmayfield@fdlfcu.com",
    "github": "bjm2020",
    "twitter": "@bjm2020",
    "location": "Lafitte, LA"
  },
  "profilePic": "images/fry.jpg",
  "welcomeMessage": "Hello World",
  "skills": ["awesomeness", "programming" , "teaching", "JS"]
};

var work = {
  "jobs": [
    {
      "employer": "Fleur De Lis Federal Credit Union",
      "title": "President/CEO",
      "dates": "2001-Future",
      "otherPositions": ["loan processor","teller", "Account Specialist", "IT Manager", "Operations Manager"],
      "description": "CEO of Fleur De Lis FCU"
    }
  ]
};

  work.jobs.forEach(function(job){
  $("#workExperience").append(HTMLworkStart);
  var formattedEmployer = HTMLworkEmployer.replace("%data%",job.employer);
  var formattedTitle = HTMLworkTitle.replace("%data%",/*work.jobs[job]*/job.title);
  var formattedEmployerTitle = formattedEmployer + formattedTitle;
  $(".work-entry:last").append(formattedEmployerTitle);

  var formattedDates = HTMLworkDates.replace("%data%", job.dates);
  $(".work-entry:last").append(formattedDates);

  var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
  $(".work-entry:last").append(formattedDescription);
});



var projects = {
  "projects": [
    {
      "title": "sample",
      "dates": "2001",
      "description": "description",
      "images": []

    }
  ]
};

projects.projects.forEach(function(project){
$("#projects").append(HTMLprojectStart);
var formattedTitle = HTMLprojectTitle.replace("%data%",project.title);
$(".project-entry:last").append(formattedTitle);
var formattedDates = HTMLprojectDates.replace("%data%",project.dates);
$(".project-entry:last").append(formattedDates);
var formattedDescription = HTMLprojectDescription.replace("%data%", project.description);
$(".project-entry:last").append(formattedDescription);
});

var education = {
  "schools": [
    {
      "name": "Fisher High School",
      "location": "Lafitte, LA",
      "degree": "High School Diploma",
      "majors": ["College Prep"],
      "degreeDate": "2001",
      "url": "fisher.jpschools.org"
    },
    {
      "name": "University Of New Orleans",
      "location": "New Orleans, LA",
      "degree": "Bachelors",
      "majors": ["BA-MIS"],
      "degreeDate": "2013",
      "url": "www.uno.edu"
    }
  ],
  "onlineCourses": [
    {
      "title": "Front End Web Developer NanoDegree",
      "school": "Udacity",
      "dates": "2017",
      "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    }
  ]
};

education.schools.forEach(function(school){
$("#education").append(HTMLschoolStart);
var formattedName = HTMLschoolName.replace("%data%",school.name);
$(".education-entry:last").append(formattedName);
var formattedLocation = HTMLschoolLocation.replace("%data%",school.location);
$(".education-entry:last").append(formattedLocation);
var formattedDegree = HTMLschoolDegree.replace("%data%",school.degree);
$(".education-entry:last").append(formattedDegree);
var formattedMajor = HTMLschoolMajor.replace("%data%",school.majors[0]);
$(".education-entry:last").append(formattedMajor);
var formattedDegreeDate = HTMLschoolDates.replace("%data%",school.degreeDate);
$(".education-entry:last").append(formattedDegreeDate);
});

//education.schools.onlineCourses.forEach(function(course) {
//  $("#Online").append(HTMLonlineSchool);
//});

var formattedName = HTMLheaderName.replace("%data%",bio.name);
var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);

$("#header").append(formattedMobile);
$("#header").append(formattedEmail);

var formattedTwitter = HTMLtwitter.replace("%data%",bio.twitter);
$("#header").append(formattedTwitter);

var formattedGitHub = HTMLgithub.replace("%data%",bio.github);
$("#header").append(formattedGitHub);
