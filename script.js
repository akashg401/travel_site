document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Function to create a truncated description with a "Read More" button
    function createTruncatedDescription(description, maxWords) {
        const words = description.split(' ');
        const truncatedWords = words.slice(0, maxWords).join(' ');
        const isTruncated = words.length > maxWords;

        const descriptionParagraph = document.createElement("p");
        descriptionParagraph.textContent = truncatedWords;

        if (isTruncated) {
            const readMoreButton = document.createElement("button");
            readMoreButton.textContent = "Read More";
            readMoreButton.classList.add("read-more-button");

            readMoreButton.addEventListener("click", () => {
                if (readMoreButton.textContent === "Read More") {
                    descriptionParagraph.textContent = description;
                    readMoreButton.textContent = "Read Less";
                } else {
                    descriptionParagraph.textContent = truncatedWords;
                    readMoreButton.textContent = "Read More";
                }
            });

            descriptionParagraph.appendChild(readMoreButton);
        }

        return descriptionParagraph;
    }


    // Replace with your actual project data
    const projects = [
        {
            title: "M.Tech Project",
            description: "Study of Mechanical Properties Improvement Using Equal-Channel Angular Pressing (ECAP) of Al6063: Experimental and Simulation",
            image: "project1.jpg" // Replace with actual image path
        },
        {
            title: "B.Tech Project",
            description: "3 Axis Drilling Machine with Solar Power",
            image: "project2.jpg" // Replace with actual image path
        },
        {
            title: "Diploma Project",
            description: "Semi-Automatic Injection Mould Design for Bag Sealing Clip",
            image: "project3.jpg" // Replace with actual image path
        }
        // Add more project objects as needed
    ];

    // Function to create a truncated description with a "Read More" button
    function createTruncatedDescription(description) {
        const maxWords = 20; // Adjust this value as needed
        const words = description.split(' ');
        const truncatedWords = words.slice(0, maxWords).join(' ');
        const isTruncated = words.length > maxWords;

        const descriptionParagraph = document.createElement("p");
        descriptionParagraph.textContent = truncatedWords;

        if (isTruncated) {
            const readMoreButton = document.createElement("button");
            readMoreButton.textContent = "Read More";
            readMoreButton.classList.add("read-more-button");

            let fullDescriptionVisible = false;

            readMoreButton.addEventListener("click", () => {
                if (fullDescriptionVisible) {
                    descriptionParagraph.textContent = truncatedWords;
                    readMoreButton.textContent = "Read More";
                } else {
                    descriptionParagraph.textContent = description;
                    readMoreButton.textContent = "Read Less";
                }
                fullDescriptionVisible = !fullDescriptionVisible;
            });

            descriptionParagraph.appendChild(readMoreButton);
        }

        return descriptionParagraph;
    }

    // Populate the project-list element with project items
    const projectList = document.querySelector(".project-list");
    projects.forEach(project => {
        const projectItem = document.createElement("div");
        projectItem.classList.add("project-item");

        const projectImage = document.createElement("img");
        projectImage.classList.add("project-image");
        projectImage.src = project.image;
        projectImage.alt = project.title;

        const projectDetails = document.createElement("div");
        projectDetails.classList.add("project-details");

        const projectTitle = document.createElement("h3");
        projectTitle.classList.add("project-title");
        projectTitle.textContent = project.title;

        const projectDescription = createTruncatedDescription(project.description);
        projectDescription.classList.add("project-description");

        projectDetails.appendChild(projectTitle);
        projectDetails.appendChild(projectDescription);

        projectItem.appendChild(projectImage);
        projectItem.appendChild(projectDetails);

        projectList.appendChild(projectItem);
    });

    // Replace with your actual education data
    const education = [
        {
            title: "M.Tech (Production) - GLA University, Mathura",
            date: "08/2019 - 07/2021"
        },
        {
            title: "B.Tech (Manufacturing Technology) - CIPET: IPT, Lucknow",
            date: "08/2016 - 06/2019"
        }
        // Add more education objects as needed
    ];

    // Populate the education-list element with education items
    const educationList = document.querySelector(".education-list");
    education.forEach(edu => {
        const educationItem = document.createElement("div");
        educationItem.classList.add("education-item");

        const educationDetails = document.createElement("div");
        educationDetails.classList.add("education-details");

        const educationTitle = document.createElement("h3");
        educationTitle.classList.add("education-title");
        educationTitle.textContent = edu.title;

        const educationDate = document.createElement("p");
        educationDate.classList.add("education-description");
        educationDate.textContent = edu.date;

        educationDetails.appendChild(educationTitle);
        educationDetails.appendChild(educationDate);

        educationItem.appendChild(educationDetails);

        educationList.appendChild(educationItem);
    });

   // Replace with your actual experience data
   const experience = [
    {
        title: "Operations Associate - Digikull",
        date: "06/2022 - Present, Noida",
        description: "Assisted in learner onboarding to ensure a great onboarding experience. Collaborated with program managers and mentors to design program schedules. Set up and managed community engagement for high-quality interactions. Hosted and moderated live sessions to provide value to learners. Implemented effective feedback mechanisms to track program health. Assisted in timely communications with learners and addressing feedback. Engaged with learners regularly to understand their needs and improve their experience. Handled ad-hoc tasks to ensure smooth program operations."
    },
    {
        title: "Internship Trainee - Jyoti LTD",
        date: "07/2017",
        description: "Gained exposure to industrial processes and operations."
    }
    // Add more experience objects as needed
];

    // Populate the experience-list element with experience items
    const experienceList = document.querySelector(".experience-list");
    experience.forEach(exp => {
        const experienceItem = document.createElement("div");
        experienceItem.classList.add("experience-item");

        const experienceDetails = document.createElement("div");
        experienceDetails.classList.add("experience-details");

        const experienceTitle = document.createElement("h3");
        experienceTitle.classList.add("experience-title");
        experienceTitle.textContent = exp.title;

        const experienceDate = document.createElement("p");
        experienceDate.classList.add("experience-description");
        experienceDate.textContent = exp.date;

        const experienceDescription = createTruncatedDescription(exp.description);
        experienceDescription.classList.add("experience-description");

        experienceDetails.appendChild(experienceTitle);
        experienceDetails.appendChild(experienceDate);
        experienceDetails.appendChild(experienceDescription);

        experienceItem.appendChild(experienceDetails);

        experienceList.appendChild(experienceItem);
    });

});


// socialIcons 
const toggleShare = document.getElementById("toggleShare");
const socialIcons = document.querySelector(".social-icons");

toggleShare.addEventListener("click", () => {
  const isOpen = socialIcons.style.transform === "scale(1) rotate(360deg)";
  socialIcons.style.transform = isOpen ? "scale(0) rotate(0deg)" : "scale(1) rotate(360deg)";
});
