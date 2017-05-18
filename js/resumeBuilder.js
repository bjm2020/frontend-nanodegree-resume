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
    "twitter": "@bobbymayfield",
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
      "description": "CEO of Fleur De Lis FCU",
      "url": "http://www.fdlfcu.com"
    }
  ],
  "positions":[
    {
    "position": "Loan Processor",
    "dates": "Dec 2001-Feb 2001"
  },
  {
  "position": "Teller",
  "dates": "Feb 2001 - Jan 2003"
},
{
"position": "Account Services Specialist",
"dates": "Jan 2003 - Aug 2005"
},
{
"position": "IT Manager",
"dates": "Aug 2005 - Sep 2013"
},
{
"position": "Operations Manager",
"dates": "Sep 2013 - Jan 2014"
},
{
"position": "President/CEO",
"dates": "Jan 2014 - Future"
}
]
};
function displayWork(){
  work.jobs.forEach(function(job){
  $("#workExperience").append(HTMLworkStart);
  var formattedEmployer = HTMLworkEmployer.replace("%data%",job.employer);

  var formattedTitle = HTMLworkTitle.replace("%data%",/*work.jobs[job]*/job.title);

  var formattedEmployerTitle = formattedEmployer + formattedTitle;
  $(".work-entry:last").append(formattedEmployerTitle);
  $(".work-entry:last").find("a").attr("href",job.url);
  var formattedDates = HTMLworkDates.replace("%data%", job.dates);
  $(".work-entry:last").append(formattedDates);
  work.positions.forEach(function(position) {
    $(".work-entry:last").append(HTMLpositionStart);
    var formattedPosition = HTMLPosition.replace("%data%",position.position);
    var formattedPositionDates = HTMLPositionDates.replace("%data%",position.dates);
    var positionDate = formattedPosition + formattedPositionDates;
    $(".position-entry:last").prepend(positionDate);
  });
  var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
  $(".work-entry:last").append(formattedDescription);
});
}


var projects = {
  "projects": [
    {
      "title": "sample",
      "dates": "2001",
      "description": "description",
      "images": ["../images/197x148.gif","../images/197x148.gif"]

    }
  ]
};
function displayProjects() {
projects.projects.forEach(function(project){
$("#projects").append(HTMLprojectStart);
var formattedTitle = HTMLprojectTitle.replace("%data%",project.title);

$(".project-entry:last").append(formattedTitle);
var formattedDates = HTMLprojectDates.replace("%data%",project.dates);
$(".project-entry:last").append(formattedDates);
var formattedDescription = HTMLprojectDescription.replace("%data%", project.description);
$(".project-entry:last").append(formattedDescription);
if(project.images.length > 0){
  for (image in project.images) {
    var formattedImage = HTMLprojectImage.replace("%data", project.images[image]);
    $(".project-entry:last").append(formattedImage);
  }
}

});
}

var education = {
  "schools": [
    {
      "name": "Fisher High School",
      "location": "Lafitte, LA",
      "degree": "High School Diploma",
      "majors": ["College Prep"],
      "degreeDate": "2001",
      "url": "http://fisher.jpschools.org"
    },
    {
      "name": "University Of New Orleans",
      "location": "New Orleans, LA",
      "degree": "Bachelors",
      "majors": ["BA-MIS"],
      "degreeDate": "2013",
      "url": "http://www.uno.edu"
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

function displayEducation(){
education.schools.forEach(function(school){
$("#education").append(HTMLschoolStart);
var formattedName = HTMLschoolName.replace("%data%",school.name);
//formattedName.replace("%url%",school.url);
$(".education-entry:last").append(formattedName);
$(".education-entry:last").find("a").attr("href",school.url);
var formattedLocation = HTMLschoolLocation.replace("%data%",school.location);
$(".education-entry:last").append(formattedLocation);
var formattedDegree = HTMLschoolDegree.replace("%data%",school.degree);
$(".education-entry:last").append(formattedDegree);
var formattedMajor = HTMLschoolMajor.replace("%data%",school.majors[0]);
$(".education-entry:last").append(formattedMajor);
var formattedDegreeDate = HTMLschoolDates.replace("%data%",school.degreeDate);
$(".education-entry:last").append(formattedDegreeDate);
});
  $("#education").append(HTMLonlineClasses);

education.onlineCourses.forEach(function(course) {
  $("#education").append(HTMLonlineStart);
  var formattedTitle = HTMLonlineTitle.replace("%data%",course.title);
  var formattedURL = HTMLonlineURL.replace("%data%",course.url);
  $(".online-entry").append(formattedTitle);
  $(".online-entry:last").find("a").attr("href",course.url);
  var formattedSchool = HTMLonlineSchool.replace("%data%",course.school);
  $(".online-entry").append(formattedSchool);
  var formattedDates = HTMLonlineDates.replace("%data%",course.dates);
  $(".online-entry").append(formattedDates);



});
}
//education.schools.onlineCourses.forEach(function(course) {
//  $("#Online").append(HTMLonlineSchool);
//});
function displayBio(){
var formattedName = HTMLheaderName.replace("%data%",bio.name);
var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var formattedBioPic = HTMLbioPic.replace("%data%", bio.profilePic);
var formattedWelcome = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
$("#header").prepend(formattedBioPic);
$("#header").append(formattedWelcome);

var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);

$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$(".email").attr("href","mailto:" + bio.contacts.email);
var formattedTwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
$("#topContacts").append(formattedTwitter);
$(".twitter").find('a').attr("href","http://twitter.com/" + bio.contacts.twitter);

var formattedGitHub = HTMLgithub.replace("%data%",bio.contacts.github);
$("#topContacts").append(formattedGitHub);
$(".twitter").find('a').attr("href","http://www.github.com/" + bio.contacts.github);

$("#header").append(HTMLskillsStart);
bio.skills.forEach(function(skill) {

  var formattedSkills = HTMLskills.replace("%data%",skill);
  $("#skills").append(formattedSkills);
});
}

function displayFooter(){
  var formattedEmail = HTMLFooteremail.replace("%data%",bio.contacts.email);
  var formattedMobile = HTMLFootermobile.replace("%data%",bio.contacts.mobile);
  var formattedTwitter = HTMLFootertwitter.replace("%data%",bio.contacts.twitter);
  $("#footerContacts").append(formattedEmail);
  $("#footerContacts").append(formattedMobile);
  $("#footerContacts").append(formattedTwitter);
  $(".footerEmail").attr("href","mailto:" + bio.contacts.email);
}
displayBio();
displayWork();
displayProjects();
displayEducation();
displayFooter();

$("#mapDiv").append(googleMap);
