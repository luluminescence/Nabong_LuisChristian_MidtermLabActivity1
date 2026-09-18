const profileCard = document.getElementById("profileCard");
const profileName = document.getElementById("profileName");
const profileProgram = document.getElementById("profileProgram");
const profileYear = document.getElementById("profileYear");
const profileStatus = document.getElementById("profileStatus");

const nameInput = document.getElementById("nameInput");
const programInput = document.getElementById("programInput");
const yearInput = document.getElementById("yearInput");
const statusInput = document.getElementById("statusInput");

const updateBtn = document.getElementById("updateBtn");
const toggleDetailsBtn = document.getElementById("toggleDetailsBtn");
const themeBtn = document.getElementById("themeBtn");
const resetBtn = document.getElementById("resetBtn");

const detailsPanel = document.getElementById("detailsPanel");
const studentIdDisplay = document.getElementById("studentIdDisplay");
const formMessage = document.getElementById("formMessage");

const controlPanel = document.querySelector(".control-panel");

if (
    !profileCard ||
    !profileName ||
    !profileProgram ||
    !profileYear ||
    !profileStatus ||
    !nameInput ||
    !programInput ||
    !yearInput ||
    !statusInput ||
    !updateBtn ||
    !toggleDetailsBtn ||
    !themeBtn ||
    !resetBtn ||
    !detailsPanel ||
    !studentIdDisplay ||
    !formMessage ||
    !controlPanel
) {
    console.error("Required DOM elements are missing.");
}

function isValidStudentName(name) {
    return name.trim().length >= 2;
}

function formatStudentStatus(status) {
    if (status === "active") {
        return "Active";
    }
    return "Inactive";

}

function setStatus(status) {
    profileStatus.textContent =
        formatStudentStatus(status);
    profileCard.dataset.status = status;
    profileCard.classList.remove("active");
    profileCard.classList.remove("inactive");
    profileCard.classList.add(status);

}

function updateProfile() {
    const name = nameInput.value.trim();
    const program = programInput.value;
    const year = yearInput.value;
    const status = statusInput.value;

    if (!isValidStudentName(name)) {
        formMessage.textContent =
            "Student name is required";
        return;
    }

    profileName.textContent = name;
    profileProgram.textContent = program;
    profileYear.textContent = year;
    setStatus(status);

    formMessage.textContent =
        "Profile updated successfully.";

}

function toggleDetails() {
    detailsPanel.classList.toggle("hidden");
}

function toggleTheme() {
    document.body.classList.toggle("dark-theme");
}

function resetProfile() {
    nameInput.value = "Maria Santos";

    programInput.value =
        "BS Information Technology";

    yearInput.value =
        "3rd Year";

    statusInput.value =
        "active";

    profileName.textContent =
        "Maria Santos";

    profileProgram.textContent =
        "BS Information Technology";

    profileYear.textContent =
        "3rd Year";

    setStatus("active");

    studentIdDisplay.textContent =
        `Student ID: ${profileCard.dataset.studentId}`;
    formMessage.textContent = "";
    detailsPanel.classList.remove("hidden");
    document.body.classList.remove("dark-theme");

}

studentIdDisplay.textContent =
    `Student ID: ${profileCard.dataset.studentId}`;

updateBtn.addEventListener(
    "click",
    updateProfile
);

toggleDetailsBtn.addEventListener(
    "click",
    toggleDetails
);

themeBtn.addEventListener(
    "click",
    toggleTheme
);

resetBtn.addEventListener(
    "click",
    resetProfile
); c
