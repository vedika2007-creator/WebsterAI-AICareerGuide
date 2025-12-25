function generateRoadmap() {

    let education = document.getElementById("education").value;
    let experience = document.getElementById("experience").value;
    let goal = document.getElementById("goal").value;

    let roadmap = [];

    if (goal === "AI") {
        roadmap = [
            "Python Programming Basics",
            "Data Structures & Algorithms",
            "Linear Algebra & Statistics",
            "Machine Learning Fundamentals",
            "Deep Learning & Projects",
            "Internship / Research Experience"
        ];
    }

    if (goal === "Web") {
        roadmap = [
            "HTML, CSS, JavaScript",
            "Frontend Frameworks (React)",
            "Backend Basics (Node.js concepts)",
            "Databases (SQL / NoSQL)",
            "Full Stack Projects",
            "Web Development Internship"
        ];
    }

    if (goal === "Cyber") {
        roadmap = [
            "Networking Fundamentals",
            "Linux & OS Basics",
            "Cyber Security Concepts",
            "Ethical Hacking Tools",
            "Capture The Flag Practice",
            "Cyber Security Internship"
        ];
    }

    if (goal === "IoT") {
        roadmap = [
            "C/C++ Programming",
            "Microcontrollers Basics",
            "Sensors & Actuators",
            "Embedded Systems",
            "IoT Projects",
            "IoT Internship"
        ];
    }

    document.getElementById("roadmapResult").innerHTML = `
        <h3>Your Personalized Skill Roadmap 🧭</h3>
        <p><b>Education:</b> ${education}</p>
        <p><b>Experience:</b> ${experience}</p>

        <ol>
            ${roadmap.map(step => `<li>${step}</li>`).join("")}
        </ol>

        <p><b>AI Tip:</b> Focus on consistency and hands-on projects for faster growth.</p>
    `;
}
