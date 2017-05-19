//The bio object. Provides info and contact info about the person that the resume is built for.
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
    "skills": ["leadership", "risk management", "programming", "Javascript/CSS"]
};

//display bio function

bio.display = function() {

    //format bio name and role to html and prepend to header id
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);

    //add bio pic and welcome message to html and append to header id
    var formattedBioPic = HTMLbioPic.replace("%data%", bio.profilePic);
    var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").prepend(formattedBioPic);
    $("#header").append(formattedWelcome);

    //format mobile and email to html and append to topContact id
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#topContacts").append(formattedMobile);
    $("#topContacts").append(formattedEmail);

    //add emailto hyperlink to Email attribute. *added class in helper.js
    $(".email").attr("href", "mailto:" + bio.contacts.email);

    //format twitter handle to html and add to topContact id
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    $("#topContacts").append(formattedTwitter);

    //add twitter hyperlink to twitter attribute. *Added class in helper.js
    $(".twitter").find("a").attr("href", "http://twitter.com/" + bio.contacts.twitter);


    var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#topContacts").append(formattedGitHub);
    $(".github").find("a").attr("href", "http://www.github.com/" + bio.contacts.github);

    //start skills section
    $("#header").append(HTMLskillsStart);

    //loop through skills, format and append to page.
    bio.skills.forEach(function(skill) {

        var formattedSkills = HTMLskills.replace("%data%", skill);
        $("#skills").append(formattedSkills);
    });
}
//work object.  contains an array of jobs and positions held at the employer.
var work = {
    "jobs": [{
        "employer": "Fleur De Lis Federal Credit Union",
        "title": "President/CEO",
        "dates": "2001-Future",
        "otherPositions": ["loan processor", "teller", "Account Specialist", "IT Manager", "Operations Manager"],
        "description": "I started my career at the credit union as a temporary worker during my first semester of college.  Since then I have gained experience in nearly every position available at the credit union.  As President/CEO, I have lead the credit union to achieving stable and healthy growth in a competitive market.",
        "location": "Metairie, LA",
        "url": "http://www.fdlfcu.com"
    }],
    "positions": [{
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

//display work function

work.display = function() {

//loop through jobs object, format each object to html and append to page
    work.jobs.forEach(function(job) {

        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", /*work.jobs[job]*/ job.title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);
        $(".work-entry:last").find("a").attr("href", job.url);
        var formattedDates = HTMLworkDates.replace("%data%", job.dates);
        $(".work-entry:last").append(formattedDates);

        var formattedWorkLocation = HTMLworkLocation.replace("%data%", job.location);
        $(".work-entry:last").append(formattedWorkLocation);

        //start Positions Held section
        $("#workExperience").append(HTMLposition);

        //loop through positions, format to html, and append to page
        work.positions.forEach(function(position) {

            var formattedPosition = HTMLPosition.replace("%data%", position.position);
            var formattedPositionDates = HTMLPositionDates.replace("%data%", position.dates);

            $("#workExperience").append(HTMLpositionStart);
            $(".position-entry:last").append(formattedPosition);
            $(".position-entry:last").append(formattedPositionDates);
        });

        //job description section
        var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
        $(".work-entry:last").append(formattedDescription);

    });
}

//projects object.  contains array of completed projects and information about them.

var projects = {
    "projects": [{
            "title": "Money Desktop Online Banking Integation",
            "dates": "2015",
            "description": "Successfully integrated Money Desktop PFM into the credit union's online banking system.  The money desktop personal financial managment platform allows credit union members to manage all of their external and credit union accounts, set goals, set budgets, categorize transactions, and much more",
            "images": ["images/moneydesktop_sm.png", "images/moneydesktop2_sm.png"]

        },
        {
            "title": "Credit Union Growth",
            "dates": "2013-Present",
            "description": "At the time of my promotion to operations manager, the credit union had seen better days.  The credit union had consistent yearly negative earning for the previous 5 years and was nearing the ncua capital to asset ratio limit of 7%.  Any lower would likely put the credit union into a forced major situation.  Since this time, I have worked with my staff and board of directors to improve operational efficiencies, reduce expenses, increase investment portfolio income, and increase loan revenue.  We have shown consistent positive earnings over the last three years, increased our capital ratio above 10%, increased our loan to share ratio from 32% to 48%, and are seeing membership growth for the first time in over 5 years.",
            "images": ["images/growth.jpg", "images/growth2.jpg"]

        }
    ]
};

//display projects function
projects.display = function() {

  //loop through projects array, format to html, and append to page
    projects.projects.forEach(function(project) {
        $("#projects").append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace("%data%", project.title);

        $(".project-entry:last").append(formattedTitle);
        var formattedDates = HTMLprojectDates.replace("%data%", project.dates);
        $(".project-entry:last").append(formattedDates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", project.description);
        $(".project-entry:last").append(formattedDescription);

        //check for an empty array of images
        if (project.images.length > 0) {

          //loop through image array, format html, and append to page
            for (var i = 0; i < project.images.length; i++) {

                var image = project.images[i];
                var formattedImage = HTMLprojectImage.replace("%data%", image);
                $(".project-entry:last").append(formattedImage);

            }
        }
    });
}
//education object.  Contains array of schools and online courses with graduate information
var education = {
    "schools": [{
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
    "onlineCourses": [{
        "title": "Front End Web Developer NanoDegree",
        "school": "Udacity",
        "dates": "2017",
        "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    }]
};

//display education function.  displays information from the education object.

education.display = function() {

  //loop through education object, format to html, and append to page.
    education.schools.forEach(function(school) {
        $("#education").append(HTMLschoolStart);
        var formattedName = HTMLschoolName.replace("%data%", school.name);
        var formattedDegree = HTMLschoolDegree.replace("%data%", school.degree);
        var formattedNameDegree = formattedName + formattedDegree;
        $(".education-entry:last").append(formattedNameDegree);

        //add school url hyperlink to school name
        $(".education-entry:last").find("a").attr("href", school.url);

        var formattedDegreeDate = HTMLschoolDates.replace("%data%", school.degreeDate);
        $(".education-entry:last").append(formattedDegreeDate);

        var formattedLocation = HTMLschoolLocation.replace("%data%", school.location);
        $(".education-entry:last").append(formattedLocation);

        //loop through majors, format html, and display on page
        school.majors.forEach(function(major) {
            var formattedMajor = HTMLschoolMajor.replace("%data%", major);
            $(".education-entry:last").append(formattedMajor);
        });
    });
    //start online Courses
    $("#education").append(HTMLonlineClasses);

    //loop through online courses, format html, and append to page
    education.onlineCourses.forEach(function(course) {

        $("#education").append(HTMLonlineStart);
        var formattedTitle = HTMLonlineTitle.replace("%data%", course.title);
        $(".online-entry").append(formattedTitle);
        $(".online-entry:last").find("a").attr("href", course.url);
        var formattedSchool = HTMLonlineSchool.replace("%data%", course.school);
        $(".online-entry").append(formattedSchool);
        var formattedDates = HTMLonlineDates.replace("%data%", course.dates);
        $(".online-entry").append(formattedDates);
    });
}
//format footer emails to html and append to footer section of page.  hyperlinks are also added
//and custom classes were added to helper.js.
function displayFooter() {
    var formattedEmail = HTMLFooteremail.replace("%data%", bio.contacts.email);
    var formattedMobile = HTMLFootermobile.replace("%data%", bio.contacts.mobile);
    var formattedTwitter = HTMLFootertwitter.replace("%data%", bio.contacts.twitter);
    $("#footerContacts").append(formattedEmail);
    $("#footerContacts").append(formattedMobile);
    $("#footerContacts").append(formattedTwitter);
    $(".footerEmail").attr("href", "mailto:" + bio.contacts.email);
    $(".footerTwitter").attr("href", "http://www.twitter.com/" + bio.contacts.twitter);
}

//invoke display methods for each section.
bio.display();
work.display();
projects.display();
education.display();
displayFooter();

$("#mapDiv").append(googleMap);
