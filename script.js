const studentsData = {
    "Oxford Public School": [
        { roll: 1, name: "Amit Kumar", hindi: 78, english: 85, math: 92, science: 88, social: 75 },
        { roll: 2, name: "Priya Sharma", hindi: 90, english: 88, math: 94, science: 89, social: 79 },
        // More students here...
    ],
    "St Joseph School": [
        { roll: 1, name: "Manish Tiwari", hindi: 74, english: 78, math: 83, science: 80, social: 72 },
        { roll: 2, name: "Simran Kaur", hindi: 87, english: 85, math: 88, science: 86, social: 79 },
        // More students here...
    ],
    // Add data for other schools here...
};

let captchaAnswer;

function generateCaptcha() {
    // Generate a random math problem
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    captchaAnswer = num1 + num2; // Store the correct answer
    document.getElementById('captcha-problem').textContent = `${num1} + ${num2} = ?`;
}

function displayResult() {
    const schoolName = document.getElementById('school').value;
    const rollNumber = document.getElementById('roll-number').value;
    const captchaInput = document.getElementById('captcha-answer').value;

    // Check if CAPTCHA is correct
    if (parseInt(captchaInput) !== captchaAnswer) {
        alert("Incorrect CAPTCHA answer. Please try again.");
        return;
    }

    const resultContainer = document.getElementById('result-container');
    const submitBtn = document.getElementById('submit-btn');

    const student = studentsData[schoolName].find(s => s.roll == rollNumber);

    if (student) {
        // Hide form and show result
        document.querySelector('.container').style.display = 'none';
        resultContainer.style.display = 'block';

        // Populate result details
        document.getElementById('student-name').querySelector('span').innerText = student.name;
        document.getElementById('school-name').innerText = schoolName;

        const resultTable = document.getElementById('result-table');
        resultTable.innerHTML = `
            <tr><td>Hindi</td><td>${student.hindi}</td></tr>
            <tr><td>English</td><td>${student.english}</td></tr>
            <tr><td>Math</td><td>${student.math}</td></tr>
            <tr><td>Science</td><td>${student.science}</td></tr>
            <tr><td>Social</td><td>${student.social}</td></tr>
        `;

        // Check if the student passed (Total marks > 30% in each subject)
        const pass = [student.hindi, student.english, student.math, student.science, student.social].every(m => m >= 30);
        const status = pass ? 'Passed' : 'Failed';
        document.getElementById('status').querySelector('span').innerText = status;
    }
}

// Generate CAPTCHA when the page loads
window.onload = function() {
    generateCaptcha();
};
