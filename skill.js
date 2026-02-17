function compareSkills() {

    const jobInput = document.getElementById("jobRole").value.toLowerCase().trim();
    const userInput = document.getElementById("userSkills").value.toLowerCase().trim();

    if (!jobInput || !userInput) {
        alert("Please enter both job role and your skills.");
        return;
    }

    // Predefined job roles with required skills
    const jobDatabase = {
        "frontend developer": ["html", "css", "javascript", "react", "bootstrap"],
        "backend developer": ["python", "django", "sql", "api"],
        "full stack developer": ["html", "css", "javascript", "react", "python", "django", "sql"],
        "data analyst": ["python", "sql", "excel", "power bi"]
    };

    const requiredSkills = jobDatabase[jobInput];

    if (!requiredSkills) {
        alert("Job role not found in database.");
        return;
    }

    // Remove duplicates from user skills
    const userSkills = [...new Set(
        userInput.split(",").map(skill => skill.trim())
    )];

    const matched = userSkills.filter(skill => requiredSkills.includes(skill));
    const missing = requiredSkills.filter(skill => !userSkills.includes(skill));

    const percentage = Math.round((matched.length / requiredSkills.length) * 100);

    // Show result section
    document.getElementById("resultSection").style.display = "block";

    // Update percentage text
    document.getElementById("percentageText").innerText = 
        "Match Percentage: " + percentage + "%";

    // Update progress bar
    document.getElementById("progressBar").style.width = percentage + "%";

    // Update matched skills
    const matchedList = document.getElementById("matchedSkills");
    matchedList.innerHTML = "";
    matched.forEach(skill => {
        matchedList.innerHTML += `<li>✅ ${skill}</li>`;
    });

    // Update missing skills
    const missingList = document.getElementById("missingSkills");
    missingList.innerHTML = "";
    missing.forEach(skill => {
        missingList.innerHTML += `<li>❌ ${skill}</li>`;
    });
}
