function calculateAge() {
    const today = new Date();
    const birthdateInput = document.getElementById("birthdate").value;
    const birthdateParts = birthdateInput.split("-");
    const birthDay = birthdateParts[0];
    const birthMonth = birthdateParts[1] - 1;
    const birthYear = birthdateParts[2];
    const birthDate = new Date(birthYear, birthMonth, birthDay);

    const isValidDate = (date) => {
        return Object.prototype.toString.call(date) === "[object Date]" && !isNaN(date);
    };

    if (!isValidDate(birthDate)) {
        alert("Invalid Date Format: Please Enter a Valid date in DD-MM-YYYY format.");
        return;
    }

    const ageMilliseconds = today - birthDate;
    const ageInseconds = Math.floor(ageMilliseconds / 1000);
    const ageInminuts = Math.floor(ageInseconds / 60);
    const ageInhours = Math.floor(ageInminuts / 60);
    const ageIndays = Math.floor(ageInhours / 24);
    const ageInweeks = Math.floor(ageIndays / 7);
    const ageInmonths = Math.floor(ageIndays / 30.436875);
    const ageInyears = Math.floor(ageIndays / 365.25);

    const resultContainer = document.getElementById("result-container");
    const result = document.getElementById("result");

    result.innerHTML = `
        <div class="result-item">
            <h3>Age:</h3>
            <p>${ageInyears} Years ${ageInmonths % 12} Months ${ageIndays % 30} Days</p>
        </div>
        <div class="result-item">
            <h3>Months Passed:</h3>
            <p>${ageInmonths}</p>
        </div>
        <div class="result-item">
            <h3>Weeks Passed:</h3>
            <p>${ageInweeks}</p>
        </div>
        <div class="result-item">
            <h3>Days Passed:</h3>
            <p>${ageIndays}</p>
        </div>
        <div class="result-item">
            <h3>Hours Passed:</h3>
            <p>${ageInhours}</p>
        </div>
        <div class="result-item">
            <h3>Minutes Passed:</h3>
            <p>${ageInminuts}</p>
        </div>
        <div class="result-item">
            <h3>Seconds Passed:</h3>
            <p>${ageInseconds}</p>
        </div>
    `;

    resultContainer.style.display = "block";
}

const ageCalculatorForm = document.getElementById("ageCalculator");
ageCalculatorForm.addEventListener("submit", (event) => {
    event.preventDefault();
    calculateAge();
});
