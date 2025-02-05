const studentsData = {
                "Oxford Public School": [
                { roll: 1, name: "Amit Kumar", hindi: 78, english: 85, math: 92, science: 88, social: 75 },
                { roll: 2, name: "Priya Sharma", hindi: 90, english: 88, math: 94, science: 89, social: 79 },
                { roll: 3, name: "Ravi Singh", hindi: 67, english: 76, math: 81, science: 78, social: 69 },
                { roll: 4, name: "Neha Verma", hindi: 82, english: 89, math: 86, science: 90, social: 80 },
                { roll: 5, name: "Suresh Das", hindi: 74, english: 68, math: 79, science: 77, social: 66 },
                { roll: 6, name: "Pooja Yadav", hindi: 88, english: 84, math: 91, science: 85, social: 76 },
                { roll: 7, name: "Rahul Mehta", hindi: 69, english: 75, math: 84, science: 72, social: 70 },
                { roll: 8, name: "Anjali Gupta", hindi: 95, english: 92, math: 97, science: 93, social: 91 },
                { roll: 9, name: "Karan Joshi", hindi: 60, english: 65, math: 70, science: 68, social: 62 },
                { roll: 10, name: "Akanksha Priya", hindi: 98, english: 95, math: 99, science: 96, social: 94 }
            ],
            "St Joseph School": [
                { roll: 1, name: "Manish Tiwari", hindi: 74, english: 78, math: 83, science: 80, social: 72 },
                { roll: 2, name: "Simran Kaur", hindi: 87, english: 85, math: 88, science: 86, social: 79 },
                { roll: 3, name: "Vikram Choudhary", hindi: 79, english: 82, math: 85, science: 84, social: 77 },
                { roll: 4, name: "Kriti Singh", hindi: 76, english: 81, math: 84, science: 80, social: 73 },
                { roll: 5, name: "Harsh Vardhan", hindi: 68, english: 74, math: 77, science: 72, social: 66 },
                { roll: 6, name: "Meena Rai", hindi: 72, english: 78, math: 81, science: 79, social: 70 },
                { roll: 7, name: "Rohan Thakur", hindi: 65, english: 70, math: 74, science: 68, social: 63 },
                { roll: 8, name: "Sunita Chauhan", hindi: 81, english: 85, math: 89, science: 86, social: 78 },
                { roll: 9, name: "Vikas Pandey", hindi: 62, english: 68, math: 72, science: 69, social: 60 },
                { roll: 10, name: "Deepak Mishra", hindi: 89, english: 88, math: 93, science: 90, social: 85 }
            ],
            "St Johns School": [
                { roll: 1, name: "Arjun Kapoor", hindi: 78, english: 80, math: 85, science: 82, social: 74 },
                { roll: 2, name: "Isha Anand", hindi: 75, english: 78, math: 83, science: 79, social: 71 },
                { roll: 3, name: "Naveen Kumar", hindi: 82, english: 85, math: 88, science: 86, social: 77 },
                { roll: 4, name: "Alok Ranjan", hindi: 70, english: 74, math: 78, science: 72, social: 68 },
                { roll: 5, name: "Preeti Chawla", hindi: 80, english: 83, math: 87, science: 84, social: 76 },
                { roll: 6, name: "Ritika Bansal", hindi: 76, english: 79, math: 82, science: 78, social: 72 },
                { roll: 7, name: "Rajat Sehgal", hindi: 88, english: 90, math: 95, science: 92, social: 85 },
                { roll: 8, name: "Mohit Gupta", hindi: 64, english: 68, math: 72, science: 66, social: 62 },
                { roll: 9, name: "Sneha Dixit", hindi: 85, english: 87, math: 91, science: 88, social: 80 },
                { roll: 10, name: "Yashwant Singh", hindi: 66, english: 70, math: 74, science: 71, social: 65 }
            ]

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
        document.getElementById('roll-number-result').innerText = rollNumber;
        document.getElementById('student-name-result').innerText = student.name;
        document.getElementById('school-name').innerText = schoolName;

        const resultTable = document.getElementById('result-table');
        resultTable.innerHTML = `
            <tr><td>Hindi</td><td>${student.hindi}</td></tr>
            <tr><td>English</td><td>${student.english}</td></tr>
            <tr><td>Math</td><td>${student.math}</td></tr>
            <tr><td>Science</td><td>${student.science}</td></tr>
            <tr><td>Social</td><td>${student.social}</td></tr>
        `;

        // Calculate CGPA and check pass/fail status
        const totalMarks = student.hindi + student.english + student.math + student.science + student.social;
        const maxMarks = 500;
        const percentage = (totalMarks / maxMarks) * 100;
        const cgpa = (percentage / 9.5).toFixed(2); // Example CGPA calculation (out of 10 scale)

        const pass = [student.hindi, student.english, student.math, student.science, student.social].every(m => m >= 33);
        const status = pass ? 'Passed' : 'Failed';
        document.getElementById('status').querySelector('span').innerText = status;
        document.getElementById('cgpa').innerText = cgpa;
    }
}

// Function to share result
function shareResult() {
    // Create a canvas element to draw the result image
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    // Set canvas size and style (same as your result display)
    canvas.width = 500;
    canvas.height = 600;
    ctx.fillStyle = '#f44336'; // Red background
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#fff';
    ctx.font = '24px Arial';
    ctx.fillText('Result: ' + document.getElementById('student-name-result').innerText, 50, 50);
    ctx.fillText('Roll No: ' + document.getElementById('roll-number-result').innerText, 50, 100);
    ctx.fillText('School: ' + document.getElementById('school-name').innerText, 50, 150);
    ctx.fillText('CGPA: ' + document.getElementById('cgpa').innerText, 50, 200);
    ctx.fillText('Status: ' + document.getElementById('status').querySelector('span').innerText, 50, 250);

    // Convert canvas to an image and share it (for simplicity, sharing via data URL)
    const resultImage = canvas.toDataURL('image/png');

    // Here, you would implement the code to share the image to WhatsApp or another app
    // For example, sharing the result as a URL with WhatsApp
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent('Check this result! ' + resultImage)}`;

    // Open WhatsApp sharing URL
    window.open(whatsappUrl, '_blank');
}

window.onload = generateCaptcha;
