import {FaHome, FaUserAlt, FaBriefcase, FaEnvelope} from "react-icons/fa";
import {FiSettings} from "react-icons/fi";
import {BsCodeSlash} from "react-icons/bs";
import {GiBookmark} from "react-icons/gi";
import {BsHandbag} from "react-icons/bs";
import vscode from "../img/vscode.png";
import git from "../img/Git-Icon-1788C.png";
import mongodb from "../img/MongoDB_Logomark_SpringGreen.svg";
import supabse from "../img/supabase-logo-icon.png";
import passwordGen from "../img/passwordCover.png";
import Note from "../img/Note.png";

export const navigationItems = [
    {
        id: 1,
        name: "Home",
        path: "/#home",
        icon: FaHome, // Pass the component itself
    },
    {
        id: 2,
        name: "About",
        path: "/#about",
        icon: FaUserAlt,
    },
    {
        id: 3,
        name: "Portfolio",
        path: "/#portfolio",
        icon: FaBriefcase,
    },
    {
        id: 4,
        name: "Projects",
        path: "/#project",
        icon: FiSettings,
    },
    {
        id: 5,
        name: "Contact",
        path: "/#contact",
        icon: FaEnvelope,
    },
];

export const aboutItems = [
    {
        id: 1,
        mainText: "Tech Stack",
        icon: BsCodeSlash,
        subText: "html, css, javaScript, React JS,  Next JS."
    },
    {
        id: 2,
        mainText: "Education",
        icon: GiBookmark,
        subText: "BCA in computer science"
    },
    {
        id: 3,
        mainText: "Projects",
        icon: BsHandbag,
        subText: "Total projects 9"
    }
]


export const imagesArr = [
    {
        id: 1,
        image: vscode,
    }, {
        id: 2,
        image: git,
    }
    , {
        id: 3,
        image: mongodb,
    },
    {
        id: 4,
        image: supabse,
    }
]

export const data = "// Meet the Coding Wizard - Biswajit Das\n" +
    "const biswajit = {\n" +
    "  name: \"Biswajit Das\",\n" +
    "  email: \"workbiswajit0981@gmail.com\",\n" +
    "  phone: \"+91 9083399159\",\n" +
    "  github: \"https://github.com/Biswajit0972\",\n" +
    "  linkedin: \"https://www.linkedin.com/in/dasbiswajiit\",\n" +
    "  \n" +
    "  // Let the Skills Party Begin 🎉\n" +
    "  skills: {\n" +
    "    languages: [\"Java\", \"JavaScript\", \"TypeScript\", \"SQL\"],\n" +
    "    techStack: [\n" +
    "      \"ReactJS 🧙‍♂️\",\n" +
    "      \"MongoDB 🗃️\",\n" +
    "      \"NodeJS 🚀\",\n" +
    "      \"ExpressJS ⚡\",\n" +
    "      \"Supabase 🍰\",\n" +
    "      \"Appwrite ✨\",\n" +
    "      \"Tailwind CSS 🌪️\",\n" +
    "      \"Cloudinary ☁️\",\n" +
    "      \"MySQL 🧮\",\n" +
    "    ],\n" +
    "  },\n" +
    "\n" +
    "  // Time for some cool Work Experiences 😎\n" +
    "  workExperience: [\n" +
    "    {\n" +
    "      title: \"Notes Management REST API 📚\",\n" +
    "      description: [\n" +
    "        \"Built an API that lets users store daily notes (Because we all forget stuff, right?) 📝\",\n" +
    "        \"CRUD operations for notes and user accounts (CRUD = Create, Read, Update, Delete, AKA the 4 magic spells 🪄)\",\n" +
    "        \"Made it so smooth, frontend and backend are now best friends 🤝\",\n" +
    "      ],\n" +
    "      tech: \"Express.js, MongoDB, JWT, bcrypt.js, Cloudinary (Basically a wizard's potion 🧪)\",\n" +
    "    },\n" +
    "    {\n" +
    "      title: \"Recipe Share Vlog 🍔\",\n" +
    "      description: [\n" +
    "        \"Developed a recipe vlog where people can share their secret cooking spells 🍳\",\n" +
    "        \"CRUD operations for posts and account management (Because everyone needs to know about your secret sauce 🍯)\",\n" +
    "        \"Supabase to handle the backend magic - It's like the fairy godmother of databases 🧚‍♂️\",\n" +
    "      ],\n" +
    "      tech: \"ReactJS, React-router-dom, Tailwind CSS, Supabase 🍀\",\n" +
    "    },\n" +
    "  ],\n" +
    "\n" +
    "  // Education, because even wizards need school 🏫\n" +
    "  education: [\n" +
    "    {\n" +
    "      institution: \"Maulana Abul Kalam Azad University of Technology 🎓\",\n" +
    "      degree: \"Bachelor of Computer Applications\",\n" +
    "      grade: \"Y.G.P.A: 8.38 / 10 (I mean, who doesn't love a good GPA?)\",\n" +
    "      courses: [\n" +
    "        \"Object-Oriented Programming (OOP - The secret to all programming powers 🔮)\",\n" +
    "        \"Data Structures and Algorithms (They organize your code like a good bookshelf 📚)\",\n" +
    "        \"Information Security (Because hackers don't stand a chance!) 🔐\",\n" +
    "        \"Soft Skills (Yes, I can talk to people too!) 💬\",\n" +
    "      ],\n" +
    "    },\n" +
    "    {\n" +
    "      institution: \"Rajnagar Union High School 📜\",\n" +
    "      degree: \"Higher Secondary (H.S)\",\n" +
    "      grade: \"Percentage: 84.4% (Not too shabby!)\",\n" +
    "    },\n" +
    "  ],\n" +
    "\n" +
    "  // Certificates, because learning never stops 🚀\n" +
    "  certificates: [\n" +
    "    {\n" +
    "      title: \"React JS (Udemy)\",\n" +
    "      platform: \"Udemy - Because learning should never be boring! 📚\",\n" +
    "    },\n" +
    "  ],\n" +
    "};\n" +
    "\n" +
    "// The Wand of Fun: Display Biswajit's Info 🪄\n" +
    "const displayInfo = () => {\n" +
    "  console.log(`📧 Email: ${biswajit.email}`);\n" +
    "  console.log(`📞 Phone: ${biswajit.phone}`);\n" +
    "  console.log(`💻 GitHub: ${biswajit.github}`);\n" +
    "  console.log(`🔗 LinkedIn: ${biswajit.linkedin}`);\n" +
    "\n" +
    "  console.log(\"\\n🛠️ Skills:\");\n" +
    "  biswajit.skills.languages.forEach((language) => console.log(`   - ${language}`));\n" +
    "  biswajit.skills.techStack.forEach((tech) => console.log(`   - ${tech}`));\n" +
    "\n" +
    "  console.log(\"\\n💼 Work Experience:\");\n" +
    "  biswajit.workExperience.forEach((job) => {\n" +
    "    console.log(`   - ${job.title}`);\n" +
    "    job.description.forEach((line) => console.log(`     * ${line}`));\n" +
    "    console.log(`     Technologies: ${job.tech}`);\n" +
    "  });\n" +
    "\n" +
    "  console.log(\"\\n🎓 Education:\");\n" +
    "  biswajit.education.forEach((edu) => {\n" +
    "    console.log(`   - ${edu.institution}`);\n" +
    "    console.log(`     Degree: ${edu.degree}`);\n" +
    "    console.log(`     Grade: ${edu.grade}`);\n" +
    "    console.log(`     Courses: ${edu.courses.join(\", \")}`);\n" +
    "  });\n" +
    "\n" +
    "  console.log(\"\\n🏆 Certificates:\");\n" +
    "  biswajit.certificates.forEach((certificate) => {\n" +
    "    console.log(`   - ${certificate.title} from ${certificate.platform}`);\n" +
    "  });\n" +
    "};\n" +
    "\n" +
    "// Execute the Fun Magic ✨\n" +
    "displayInfo();\n"

export const projectItems = [
    {
        id: 5,
        coverImage: passwordGen,
        projectHeading: "PlayApi  with frontend ",
        liveLink: "https://fake-data-api-wus7.vercel.app/",
        githubLink: "https://github.com/Biswajit0972/fakeDataApi/blob/main/readme.md",
        description: "PlayAPI is a developer-friendly mock API service built with Node.js and Express, designed to help learners and developers practice full-stack development workflows and reduce their learning time by up to 30% through ready-to-use, real-world endpoints"
    },
    {
        id: 2,
        coverImage: passwordGen,
        projectHeading: "Free password  generator",
        liveLink: "https://password-generator-seven-nu-26.vercel.app/",
        githubLink: "https://github.com/Biswajit0972/password-generator2",
        description: "Free password generator frontend app. Totally running on client side, build in using react and tailwind. more.."
    },
    {
        id: 1,
        coverImage: Note,
        projectHeading: " TODO using Localstorage (Practice!)",
        liveLink: "https://todo-woad-three-73.vercel.app/",
        githubLink: "https://github.com/Biswajit0972/todo",
        description: "A Todo application, which use your localstorage to store your task and you can perform CURD operation.",
    },
    {
        id: 3,
        coverImage: passwordGen,
        projectHeading: "Expense splitter with friends",
        liveLink: "https://track-your-money-with-your-hostel-friend.vercel.app/",
        githubLink: "https://github.com/Biswajit0972/Track-your-money-with-your-hostel-friend",
        description: "It is a simple application, which helps you to split your shopping or food bill  with your friend. you  don't need remember, when you had owes your friend"
    },
    {
        id: 4,
        coverImage: passwordGen,
        projectHeading: "Algoroot dashboard",
        liveLink: "https://algo-root-assignment.vercel.app/",
        githubLink: "https://github.com/Biswajit0972/Algo-root-assignment",
        description: "It is a single  page application, which provides fake authentication system to the customer and searching/sorting data."
    }
]