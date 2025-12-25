function analyzeResume() {

    let file = document.getElementById("resumeFile").value;

    if (file === "") {
        alert("Please upload your resume first!");
        return;
    }

    // AI-like scoring (simulated)
    let score = Math.floor(Math.random() * 21) + 70; // 70–90

    let feedback = [];
    let improvements = [];

    feedback.push("Resume structure is clean");
    feedback.push("Good use of technical keywords");

    improvements.push("Add more project details");
    improvements.push("Include internships or certifications");
    improvements.push("Quantify achievements with numbers");

    document.getElementById("resumeResult").innerHTML = `
        <h3>Resume Analysis Result 📄</h3>

        <p><b>Resume Score:</b> ${score}/100</p>

        <p><b>Positive Points:</b></p>
        <ul>${feedback.map(f => `<li>${f}</li>`).join("")}</ul>

        <p><b>Suggestions for Improvement:</b></p>
        <ul>${improvements.map(i => `<li>${i}</li>`).join("")}</ul>

        <p><b>Recommended Learning Resources:</b></p>
        <ul>
            <li><a href="https://roadmap.sh" target="_blank">Developer Roadmaps</a></li>
            <li><a href="https://grow.google" target="_blank">Google Career Certificates</a></li>
            <li><a href="https://developers.google.com" target="_blank">Google Developers</a></li>
            <li><a href="https://www.w3schools.com/python/" target="_blank">Python Tutorials</a></li>
            <li><a href="https://www.geeksforgeeks.org/data-structures/" target="_blank">Data Structures & Algorithms</a></li>
            <li><a href="https://www.freecodecamp.org/" target="_blank">Web Development (HTML, CSS, JavaScript)</a></li>
            <li><a href="https://www.coursera.org/learn/machine-learning" target="_blank">Machine Learning & AI</a></li>
            <li><a href="https://www.learnenough.com/git-tutorial" target="_blank">Version Control with Git & GitHub</a></li>
            <li><a href="https://www.hackerrank.com/domains/tutorials/10-days-of-javascript" target="_blank">Competitive Program</a></li>
        </ul>
    `;
}
