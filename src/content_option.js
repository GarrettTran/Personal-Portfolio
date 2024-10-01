const logotext = "GARRETT DEVOPS";
const meta = {
    title: "Garrett DevOps",
    description: "Software Engineering student at RMIT with a passion for DevOps and Cloud technologies.",
};

const introdata = {
    title: "I’m Garrett K. Tran",
    animated: {
        first: "Driven by {Innovation}",
        second: "Focused on {Automation} & {Scalability}",
        third: "Committed to {Excellence} & {Growth}",
    },
    description: "A tech enthusiast, constantly learning and building solutions in the DevOps and Cloud space.",
    your_1st_img_url: "https://firebasestorage.googleapis.com/v0/b/garrett-devops-portfilio.appspot.com/o/img1.jpg?alt=media&token=4f601222-db84-4c82-a37a-afe317b0defa",
    your_2nd_img_url: "https://firebasestorage.googleapis.com/v0/b/garrett-devops-portfilio.appspot.com/o/img2.jpg?alt=media&token=c71690f2-7330-4ae9-aa57-759075490180",
    your_3rd_img_url: "https://firebasestorage.googleapis.com/v0/b/garrett-devops-portfilio.appspot.com/o/img3.jpg?alt=media&token=99ef9c5b-b0e7-4929-8ac2-cf0b9a561acc",
};


const dataabout = {
    title: "A bit about myself",
    aboutme: "I'm Garrett K. Tran, a Software Engineering student at RMIT University with a passion for DevOps and Cloud technologies. Currently, I'm focused on mastering cloud infrastructure and automating workflows. My projects range from setting up CI/CD pipelines to container orchestration using Kubernetes. \n\n I thrive on solving complex challenges, whether it's optimizing systems or ensuring smooth deployments in the cloud. Looking ahead, I aim to deepen my expertise in DevOps and Cloud infrastructure and I'm always excited to collaborate on innovative projects."
};

const worktimeline = [
    {
        jobtitle: "cloud practitioner course (hybrid)",
        where: "RMIT",
        date: "1/2024",
    },
    {
        jobtitle: "DevOps for Fresher course (hands-on)",
        where: "Elroy Devops",
        date: "5/2024",
    },
    {
        jobtitle: "DevOps Foundation (theoretical)",
        where: "LinkedIn Learning",
        date: "9/2024",
    },
    {
        jobtitle: "DevOps Foundation: DevSecOps (theoretical)",
        where: "LinkedIn Learning",
        date: "10/2024",
    },
    {
        jobtitle: "DevOps Foundation: Lean and Agile (theoretical)",
        where: "LinkedIn Learning",
        date: "10/2024",
    },
    {
        jobtitle: "DevOps Foundation: CI/CD (theoretical)",
        where: "LinkedIn Learning",
        date: "11/2024",
    },
    {
        jobtitle: "DevOps Foundation: Infra as Code (theoretical)",
        where: "LinkedIn Learning",
        date: "11/2024",
    },
    {
        jobtitle: "DevOps with AWS (hands-on)",
        where: "LinkedIn Learning",
        date: "12/2024",
    },
    {
        jobtitle: "DevOps Foundation: Your first Project (hands-on)",
        where: "LinkedIn Learning",
        date: "12/2024",
    },
    {
        jobtitle: "IT Security Foundation: Network Security (hands-on)",
        where: "LinkedIn Learning",
        date: "12/2024",
    },
];


const skills = [
    {
        name: "Linux System Administration",
        value: 80,  // Gained through "cloud practitioner" and "DevOps with AWS" courses
    },
    {
        name: "Cloud Computing (AWS)",
        value: 70,  // Gained through "cloud practitioner" and "DevOps with AWS" courses
    },
    {
        name: "DevOps Tools (CI/CD)",
        value: 60,  // Gained through multiple DevOps foundation courses (CI/CD, Infra as Code, etc.)
    },
    {
        name: "DevSecOps",
        value: 55,  // Gained through "DevOps Foundation: DevSecOps"
    },
    {
        name: "Infrastructure as Code (Terraform, Ansible)",
        value: 50,  // Gained through "DevOps Foundation: Infra as Code"
    },
    {
        name: "Agile & Lean Methodologies",
        value: 60,  // Gained through "DevOps Foundation: Lean and Agile"
    },
    {
        name: "Network Security",
        value: 65,  // Gained through "IT Security Foundation: Network Security"
    },
    {
        name: "Version Control (Git, GitLab)",
        value: 75,  // Implied by hands-on DevOps training
    },
    {
        name: "Continuous Integration/Continuous Deployment (CI/CD)",
        value: 70,  // Focused experience with CI/CD pipelines
    },
    {
        name: "Automation Tools (Jenkins, GitLab CI)",
        value: 70,  // Relevant to your DevOps hands-on experiences
    },
    {
        name: "Monitoring & Logging (Prometheus, Grafana)",
        value: 60,  // Implied skillset for monitoring infrastructure
    },
];



const services = [
    {
        title: "Looking for Internship/OJT DevOps/Cloud Engineering Position",
        description: "As a passionate Software Engineering student with a strong focus on DevOps and Cloud technologies, I am seeking an internship or OJT position to gain practical experience in the field. My hands-on experience with AWS, CI/CD pipelines, containerization (Docker), and Infrastructure as Code (Terraform) makes me an ideal candidate. I am eager to contribute to real-world projects, automate workflows, and learn from industry professionals to further sharpen my skills.",
    },
];


const dataportfolio = [
    {
        img: "https://firebasestorage.googleapis.com/v0/b/garrett-devops-portfilio.appspot.com/o/System-Architect-ex7.drawio.png?alt=media&token=e393fdab-fdba-48d1-87cd-623be6408272", // Add your image link here
        description: "Cloud infrastructure project focusing on deploying and managing scalable applications using cloud services such as AWS, Azure, and Google Cloud.",
        link: "#", // Add your project link here
    },
    {
        img: "https://firebasestorage.googleapis.com/v0/b/garrett-devops-portfilio.appspot.com/o/rentalApp.png?alt=media&token=a0502780-c203-433f-9bc5-a67f228cc570", // Add your image link here
        description: "Backend development project using Object-Oriented Programming (OOP) principles to build efficient and maintainable server-side applications.",
        link: "#", // Add your project link here
    },
    {
        img: "https://firebasestorage.googleapis.com/v0/b/garrett-devops-portfilio.appspot.com/o/bikeRentalApp.png?alt=media&token=d49ffea5-00d5-4245-920a-d2cdd43e230a", // Add your image link here
        description: "C++ backend development project, focusing on building robust and high-performance server-side applications.",
        link: "#", // Add your project link here
    },
    {
        img: "https://firebasestorage.googleapis.com/v0/b/garrett-devops-portfilio.appspot.com/o/CLI%20Nuvuton.png?alt=media&token=421dfba9-6e2e-4362-a4aa-dd71643e4b6a", // Add your image link here
        description: "Embedded system project with Command-Line Interface (CLI) tools, developed to interact with embedded hardware systems and manage functionalities.",
        link: "#", // Add your project link here
    },
    {
        img: "https://firebasestorage.googleapis.com/v0/b/garrett-devops-portfilio.appspot.com/o/embedded%203%20game.png?alt=media&token=dc878402-7c48-476f-8982-323f73d61737", // Add your image link here
        description: "Embedded system project focusing on the development of three interactive games, built to demonstrate hardware-software integration.",
        link: "#", // Add your project link here
    },
    {
        img: "https://firebasestorage.googleapis.com/v0/b/garrett-devops-portfilio.appspot.com/o/battleship%20game.png?alt=media&token=8f1e853d-6c3d-4e20-bd31-905e8a578a4c", // Add your image link here
        description: "Second embedded system project, showcasing the development of two unique games for hardware-based platforms.",
        link: "#", // Add your project link here
    },
    {
        img: "https://firebasestorage.googleapis.com/v0/b/garrett-devops-portfilio.appspot.com/o/iOS_snake.png?alt=media&token=ae882fa0-c0fb-4e09-a005-979ab7c1deca", // Add your image link here
        description: "iOS game development project, involving the creation and deployment of an interactive mobile game for the iOS platform.",
        link: "#", // Add your project link here
    },
    {
        img: "https://firebasestorage.googleapis.com/v0/b/garrett-devops-portfilio.appspot.com/o/junit5new.png?alt=media&token=177ef418-6b10-4abd-bb60-f87961c8b677", // Add your image link here
        description: "Java project utilizing JUnit and Katalon for testing, ensuring the reliability and functionality of software through automated testing frameworks.",
        link: "#", // Add your project link here
    },
    {
        img: "https://firebasestorage.googleapis.com/v0/b/garrett-devops-portfilio.appspot.com/o/katalon.png?alt=media&token=f1c1744a-0d17-4cc3-9993-b0bcc47056b1", // Add your image link here
        description: "Group project using Katalon and BDD (Behavior-Driven Development) methodologies, streamlining the testing process with a focus on user-centric development.",
        link: "#", // Add your project link here
    },
    {
        img: "https://firebasestorage.googleapis.com/v0/b/garrett-devops-portfilio.appspot.com/o/Ubuntu.png?alt=media&token=2ae67c72-0177-489d-b0bb-f220240efde9", // Add your image link here
        description: "Deployment project using npm, services, nginx, and pm2, with a MariaDB backend, to manage Daemon processes efficiently.",
        link: "#", // Add your project link here
    },
    {
        img: "https://firebasestorage.googleapis.com/v0/b/garrett-devops-portfilio.appspot.com/o/gitlab.png?alt=media&token=c62d1739-c208-46d8-8552-410014c163cc", // Add your image link here
        description: "GitLab server project involving GitLab runner setup and CI/CD pipeline configuration to automate the development lifecycle.",
        link: "#", // Add your project link here
    },
    {
        img: "https://firebasestorage.googleapis.com/v0/b/garrett-devops-portfilio.appspot.com/o/docker.png?alt=media&token=6af881cd-4ea8-476c-89a2-49f2870645e3", // Add your image link here
        description: "Docker project focused on writing Dockerfiles, building and running containers, and working with container registries like Docker Hub and Harbor.",
        link: "#", // Add your project link here
    },
    {
        img: "https://firebasestorage.googleapis.com/v0/b/garrett-devops-portfilio.appspot.com/o/harbor.png?alt=media&token=a0b0572e-237d-4757-abea-2f9a11f550a3", // Add your image link here
        description: "CI/CD pipeline project automating code deployment, pulling code from GitHub, creating Docker images, and deploying them to a container registry upon new release tags.",
        link: "#", // Add your project link here
    },
    {
        img: "https://firebasestorage.googleapis.com/v0/b/garrett-devops-portfilio.appspot.com/o/portfolio%20website.png?alt=media&token=1bb17d43-b304-49cb-9dba-2a332d3017a3", // Add your image link here
        description: "Portfolio project involving setting up a VPS, purchasing a domain, and learning HTML, CSS, JavaScript, and React to deploy a personal website within one week.",
        link: "#", // Add your project link here
    }
];


const contactConfig = {
    YOUR_EMAIL: "garretttran.work@gmail.com",
    YOUR_FONE: "0943656691",
    description: "Feel free to get in touch for collaboration, project opportunities, or any questions about DevOps, cloud technologies, or anything else you'd like to discuss. I'm always open to connecting and exploring new ideas!",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_ghllmm5",
    YOUR_TEMPLATE_ID: "template_nh2xxvd",
    YOUR_USER_ID: "ztT1dLpG4EB4xNwdw",
};

const socialprofils = {
    github: "https://github.com/GarrettTran",
    facebook: "https://www.facebook.com/profile.php?id=100028269473606",
    linkedin: "https://www.linkedin.com/in/khang-tran-nguyen-quy-03722431b/",
    twitter: "https://twitter.com",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};