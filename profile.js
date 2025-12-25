// Pre-fill profile form if data exists



// Save + Next button
const saveNextBtn = document.getElementById("saveNextBtn");

saveNextBtn.addEventListener("click", () => {
    const userData = {
        education: document.getElementById("education").value,
        cgpa: parseFloat(document.getElementById("cgpa").value),
        interest: document.getElementById("interest").value,
        resumeScore: parseInt(document.getElementById("resumeScore").value),
        skills: document.getElementById("skills").value.split(',').map(s => s.trim())
    };

    // Save data to localStorage
    localStorage.setItem("userProfile", JSON.stringify(userData));

    // Navigate to eligibility page
    window.location.href = "elegibility.html";
});
