function predictInternship() {

    let name = document.getElementById("name").value;
    let skills = document.getElementById("skills").value.toLowerCase();
    let cgpa = parseFloat(document.getElementById("cgpa").value);
    let interest = document.getElementById("area").value;

    let strengths = [];
    let weaknesses = [];
    let improvements = [];

    // CGPA Analysis
    if (cgpa >= 8) {
        strengths.push("Strong academic performance");
    } else {
        weaknesses.push("CGPA can be improved");
        improvements.push("Focus on core subjects and problem-solving");
    }

    // Skills Analysis
    if (skills.includes("python")) strengths.push("Python programming");
    if (skills.includes("java")) strengths.push("Java fundamentals");
    if (skills.includes("html") || skills.includes("css")) strengths.push("Web basics");

    if (strengths.length === 0) {
        weaknesses.push("Limited technical skill exposure");
        improvements.push("Start learning one programming language seriously");
    }

    // Interest-based suggestion
    let role = "";
    if (interest === "AI") role = "AI / ML Intern";
    if (interest === "Web") role = "Web Development Intern";
    if (interest === "Cyber") role = "Cyber Security Intern";
    if (interest === "IoT") role = "IoT / Embedded Systems Intern";

    // Display Result
    document.getElementById("predictionResult").innerHTML = `
        <h3>Hello ${name} 👋</h3>
        <p><b>Suggested Internship Role:</b> ${role}</p>

        <p><b>Strengths:</b></p>
        <ul>${strengths.map(s => `<li>${s}</li>`).join("")}</ul>

        <p><b>Weaknesses:</b></p>
        <ul>${weaknesses.map(w => `<li>${w}</li>`).join("")}</ul>

        <p><b>Areas to Improve:</b></p>
        <ul>${improvements.map(i => `<li>${i}</li>`).join("")}</ul>
    `;
}
