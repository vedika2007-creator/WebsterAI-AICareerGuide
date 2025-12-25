function trackInternship() {

    let company = document.getElementById("company").value;
    let interviewDate = document.getElementById("interviewDate").value;

    if (company === "" || interviewDate === "") {
        alert("Please fill all fields!");
        return;
    }

    let today = new Date();
    let targetDate = new Date(interviewDate);
    let timeDiff = targetDate - today;

    let daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

    let plan = [];

    if (daysLeft > 20) {
        plan = [
            "Revise fundamentals",
            "Strengthen weak topics",
            "Practice coding daily",
            "Improve resume & projects"
        ];
    } else if (daysLeft > 10) {
        plan = [
            "Solve interview questions",
            "Revise important concepts",
            "Mock interviews",
            "Revise resume"
        ];
    } else {
        plan = [
            "Quick revision",
            "Practice common interview questions",
            "Rest and stay confident",
            "Prepare introduction & projects"
        ];
    }

    document.getElementById("trackerResult").innerHTML = `
        <h3>Internship Tracker Result 📅</h3>
        <p><b>Company:</b> ${company}</p>
        <p><b>Days Left:</b> ${daysLeft} days</p>

        <p><b>AI Suggested Daily Plan:</b></p>
        <ul>
            ${plan.map(p => `<li>${p}</li>`).join("")}
        </ul>

        <p><b>AI Tip:</b> Consistency beats intensity. Small daily progress matters.</p>
    `;
}
