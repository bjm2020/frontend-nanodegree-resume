var bio = {
  "name": "Robert Mayfield",
  "role": "Front End Web Developer",
  "contacts": {
    "mobile": "555-555-5555",
    "email": "email@email.com",
    "github": "bjm2020",
    "twitter": "@bobbymayfield",
    "location": "Lafitte, LA"
  },
  "profilePic": "images/bob.jpg",
  "welcomeMessage": "Welcome to my online resume.  Please scroll down for a short history of my work and accomplishments.",
  "skills": ["leadership","risk management","programming", "Javascript/CSS"]
};

bio.display = function(){
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
$(".github").find('a').attr("href","http://www.github.com/" + bio.contacts.github);

$("#header").append(HTMLskillsStart);
bio.skills.forEach(function(skill) {

  var formattedSkills = HTMLskills.replace("%data%",skill);
  $("#skills").append(formattedSkills);
});
}

var work = {
  "jobs": [
    {
      "employer": "Fleur De Lis Federal Credit Union",
      "title": "President/CEO",
      "dates": "2001-Future",
      "otherPositions": ["loan processor","teller", "Account Specialist", "IT Manager", "Operations Manager"],
      "description": "I started my career at the credit union as a temporary worker during my first semester of college.  Since then I have gained experience in nearly every position available at the credit union.  As President/CEO, I have lead the credit union to achieving stable and healthy growth in a competitive market.",
      "location": "Metairie, LA",
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

work.display = function(){
  work.jobs.forEach(function(job){
  $("#workExperience").append(HTMLworkStart);
  var formattedEmployer = HTMLworkEmployer.replace("%data%",job.employer);

  var formattedTitle = HTMLworkTitle.replace("%data%",/*work.jobs[job]*/job.title);

  var formattedEmployerTitle = formattedEmployer + formattedTitle;
  $(".work-entry:last").append(formattedEmployerTitle);
  $(".work-entry:last").find("a").attr("href",job.url);
  var formattedDates = HTMLworkDates.replace("%data%", job.dates);
  $(".work-entry:last").append(formattedDates);

  var formattedWorkLocation = HTMLworkLocation.replace("%data%",job.location);
  $(".work-entry:last").append(formattedWorkLocation);

    $("#workExperience").append(HTMLposition);

  work.positions.forEach(function(position) {

    var formattedPosition = HTMLPosition.replace("%data%",position.position);
    var formattedPositionDates = HTMLPositionDates.replace("%data%",position.dates);


    $("#workExperience").append(HTMLpositionStart);

    $(".position-entry:last").append(formattedPosition);
    $(".position-entry:last").append(formattedPositionDates);


  });
  var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
  $(".work-entry:last").append(formattedDescription);
});
}


var projects = {
  "projects": [
    {
      "title": "Money Desktop Online Banking Integation",
      "dates": "2015",
      "description": "Successfully integrated Money Desktop PFM into the credit union's online banking system.  The money desktop personal financial managment platform allows credit union members to manage all of their external and credit union accounts, set goals, set budgets, categorize transactions, and much more",
      "images": ["images/moneydesktop_sm.png","images/moneydesktop2_sm.png"]

    },
    {
      "title": "Credit Union Growth",
      "dates": "2013-Present",
      "description": "At the time of my promotion to operations manager, the credit union had seen better days.  The credit union had consistent yearly negative earning for the previous 5 years and was nearing the ncua capital to asset ratio limit of 7%.  Any lower would likely put the credit union into a forced major situation.  Since this time, I have worked with my staff and board of directors to improve operational efficiencies, reduce expenses, increase investment portfolio income, and increase loan revenue.  We have shown consistent positive earnings over the last three years, increased our capital ratio above 10%, increased our loan to share ratio from 32% to 48%, and are seeing membership growth for the first time in over 5 years.",
      "images": ["images/growth.jpg","images/growth2.jpg"]

    }
  ]
};

projects.display = function() {
projects.projects.forEach(function(project){
$("#projects").append(HTMLprojectStart);
var formattedTitle = HTMLprojectTitle.replace("%data%",project.title);

$(".project-entry:last").append(formattedTitle);
var formattedDates = HTMLprojectDates.replace("%data%",project.dates);
$(".project-entry:last").append(formattedDates);
var formattedDescription = HTMLprojectDescription.replace("%data%", project.description);
$(".project-entry:last").append(formattedDescription);
if(project.images.length > 0){
  for(var i = 0; i < project.images.length; i++) {

    var image = project.images[i];
    var formattedImage = HTMLprojectImage.replace("%data%", image);
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
    },
    {
      "name": "Southeast Regional CUNA Management School",
      "location": "Athens, GA",
      "degree": "Certificate of Completion",
      "majors": ["Credit Union Leadership"],
      "degreeDate": "2014",
      "url": "http://www.srcus.org"
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

education.display = function(){
education.schools.forEach(function(school){
$("#education").append(HTMLschoolStart);
var formattedName = HTMLschoolName.replace("%data%",school.name);
//formattedName.replace("%url%",school.url);
//$(".education-entry:last").append(formattedName);
var formattedDegree = HTMLschoolDegree.replace("%data%",school.degree);
var formattedNameDegree = formattedName+formattedDegree;
$(".education-entry:last").append(formattedNameDegree);

//var formattedEmployerTitle = formattedEmployer + formattedTitle;
//$(".work-entry:last").append(formattedEmployerTitle);
$(".education-entry:last").find("a").attr("href",school.url);

var formattedDegreeDate = HTMLschoolDates.replace("%data%",school.degreeDate);
$(".education-entry:last").append(formattedDegreeDate);

var formattedLocation = HTMLschoolLocation.replace("%data%",school.location);
$(".education-entry:last").append(formattedLocation);

school.majors.forEach(function(major) {
  var formattedMajor = HTMLschoolMajor.replace("%data%",major);
  $(".education-entry:last").append(formattedMajor);
});
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

bio.display = function(){
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
$(".github").find('a').attr("href","http://www.github.com/" + bio.contacts.github);

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
  $(".footerTwitter").attr("href","http://www.twitter.com/" + bio.contacts.twitter);
}
bio.display();
work.display();
//displayProjects();
projects.display();
education.display();
displayFooter();

$("#mapDiv").append(googleMap);
