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

let captchaAnswer = 0;

function generateCaptcha() {
    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 10);
    captchaAnswer = num1 + num2;
    document.getElementById('captcha-question').innerText = `What is ${num1} + ${num2}?`;
}

function showResult() {
    const school = document.getElementById('school').value;
    const rollNumber = document.getElementById('rollNumber').value;
    const student = studentsData[school].find(s => s.roll == rollNumber);

    if (student) {
        const total = student.hindi + student.english + student.math + student.science + student.social;
        const cgpa = (total / 500) * 10;
        const passFail = (student.hindi >= 30 && student.english >= 30 && student.math >= 30 && student.science >= 30 && student.social >= 30) ? 'Pass' : 'Fail';

        const resultContainer = document.getElementById('result-container');
        const resultTable = document.getElementById('result-table');
        const showButton = document.getElementById('show-button');
        const schoolSelect = document.getElementById('school');

        resultContainer.style.display = 'block';
        showButton.style.display = 'none';
        schoolSelect.style.display = 'none';

        resultTable.innerHTML = `
            <tr><th>Name</th><td>${student.name}</td></tr>
            <tr><th>Father's Name</th><td>XYZ</td></tr>
            <tr><th>Mother's Name</th><td>XYZ</td></tr>
            <tr><th>Hindi</th><td>${student.hindi}</td></tr>
            <tr><th>English</th><td>${student.english}</td></tr>
            <tr><th>Math</th><td>${student.math}</td></tr>
            <tr><th>Science</th><td>${student.science}</td></tr>
            <tr><th>Social</th><td>${student.social}</td></tr>
            <tr><th>Total</th><td>${total}</td></tr>
            <tr><th>CGPA</th><td>${cgpa.toFixed(2)}</td></tr>
            <tr><th>Status</th><td>${passFail}</td></tr>
        `;
    } else {
        alert('Student not found!');
    }
}

function checkCaptcha() {
    const userAnswer = parseInt(document.getElementById('captcha-answer').value);
    if (userAnswer === captchaAnswer) {
        showResult();
    } else {
        alert('Incorrect CAPTCHA answer!');
    }
}

function downloadPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    const resultTable = document.getElementById('result-table');

    doc.text("Student Result", 10, 10);
    doc.autoTable({ html: '#result-table', startY: 20 });
    doc.save('result.pdf');
}

window.onload = generateCaptcha;
