// Load user data from localStorage
const user = JSON.parse(localStorage.getItem("userProfile"));
if(!user){
    alert("Please fill your profile first!");
    window.location.href = "profile.html";
}

// Display user profile dynamically
document.getElementById("user-summary").innerHTML = `
  <h2>Your Profile</h2>
  <p><strong>Education:</strong> ${user.education}</p>
  <p><strong>CGPA:</strong> ${user.cgpa}</p>
  <p><strong>Interest Area:</strong> ${user.interest}</p>
  <p><strong>Resume Score:</strong> ${user.resumeScore}/100</p>
  <p><strong>Skills:</strong> ${user.skills.join(", ")}</p>
`;

// Internship Data
const internships = [
  {company:"Google", role:"AI/ML Intern", minGPA:7.5, requiredSkills:["Python","Machine Learning"], applyBy:"2025-12-20", deadline:"2025-12-30"},
  {company:"Tesla", role:"AI/ML Intern", minGPA:8.0, requiredSkills:["Python","Deep Learning"], applyBy:"2025-12-25", deadline:"2026-01-05"},
  {company:"Facebook", role:"Web Dev Intern", minGPA:7.0, requiredSkills:["JavaScript","React"], applyBy:"2025-12-22", deadline:"2026-01-10"},
  {company:"Microsoft", role:"AI Intern", minGPA:7.8, requiredSkills:["Python","Data Analysis"], applyBy:"2025-12-18", deadline:"2025-12-31"},
  {company:"Amazon", role:"AI/ML Intern", minGPA:8.2, requiredSkills:["Python","ML","AWS"], applyBy:"2025-12-28", deadline:"2026-01-15"}
];

// Calculate Eligibility %
function calculateEligibility(user, internship){
  let score = 0;
  score += Math.min(user.cgpa/internship.minGPA,1)*50;
  let matchedSkills = internship.requiredSkills.filter(skill => user.skills.includes(skill)).length;
  score += (matchedSkills / internship.requiredSkills.length) * 50;
  return Math.min(Math.round(score), 100);
}

// Suggested Improvements
function suggestedImprovements(user, internship){
  const missingSkills = internship.requiredSkills.filter(skill => !user.skills.includes(skill));
  let msg = "";
  if(missingSkills.length>0) msg += "Learn: " + missingSkills.join(", ") + ". ";
  if(user.cgpa < internship.minGPA) msg += "Improve GPA to at least " + internship.minGPA + ".";
  if(msg === "") msg="Good to Apply!";
  return msg;
}

// Populate Table
const tableBody = document.querySelector("#recommendation-table tbody");
internships.sort((a,b) => a.applyBy.localeCompare(b.applyBy));
internships.forEach(i=>{
  const eligibility = calculateEligibility(user,i);
  const improvement = suggestedImprovements(user,i);
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${i.company}</td>
    <td>${i.role}</td>
    <td>${eligibility}%</td>
    <td>${i.applyBy}</td>
    <td>${i.deadline}</td>
    <td>${improvement}</td>
  `;
  tableBody.appendChild(row);
});
