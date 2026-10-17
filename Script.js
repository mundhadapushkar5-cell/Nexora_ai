function login(){
    alert("Welcome to Nexora AI 🚀");
}

document.querySelectorAll("button").forEach(button=>{
    button.addEventListener("click",()=>{
        console.log(button.innerText+" clicked");
    });
});
console.log("Day 12 Loaded Successfully 🚀");
document.querySelectorAll(".dashboard-card button").forEach(button=>{

button.addEventListener("click",()=>{

alert("This AI Tool will be available soon 🚀");

});

});
document.querySelectorAll(".price-card button").forEach(button=>{

button.addEventListener("click",()=>{

alert("Payment System Coming Soon 💳");

});

});
document.querySelector(".explore-btn")?.addEventListener("click",function(){

alert("Welcome to Nexora AI 🚀");

});
function openPopup(){

document.getElementById("loginPopup").style.display="flex";

}

function closePopup(){

document.getElementById("loginPopup").style.display="none";

}
const statCards = document.querySelectorAll(".stat-card");

statCards.forEach(card=>{

card.addEventListener("click",()=>{

alert("More analytics coming soon 📊");

});

});
console.log("Nexora AI Footer Loaded Successfully 🚀");
/* AI Tools Search */

const searchInput = document.getElementById("toolSearch");

searchInput.addEventListener("input", function () {

  const searchText = this.value.toLowerCase();

  const cards = document.querySelectorAll(".tool-card");

  cards.forEach(function (card) {

    const text = card.innerText.toLowerCase();

    if (text.includes(searchText)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }

  });

});


/* Category Filter */

function filterTools(category) {

  const cards = document.querySelectorAll(".tool-card");

  cards.forEach(function (card) {

    if (
      category === "all" ||
      card.dataset.category === category
    ) {

      card.style.display = "block";

    } else {

      card.style.display = "none";

    }

  });

}


/* Open Tool */

function openTool(toolName) {

  alert(
    toolName +
    " is coming soon 🚀"
  );

}
function showTool(name, icon, description) {

  document.getElementById("popupTitle").innerText = name;

  document.getElementById("popupIcon").innerText = icon;

  document.getElementById("popupDescription").innerText = description;

  document.getElementById("toolPopup").style.display = "flex";

}


function closeToolPopup() {

  document.getElementById("toolPopup").style.display = "none";

}


function useTool() {

  alert("This AI Tool will be connected soon 🚀");

}
/* COURSE SEARCH */

const courseSearch =
    document.getElementById("courseSearch");

if (courseSearch) {

    courseSearch.addEventListener("input", function () {

        const searchText =
            this.value.toLowerCase();

        const courses =
            document.querySelectorAll(".course-card");

        courses.forEach(function (course) {

            const text =
                course.innerText.toLowerCase();

            if (text.includes(searchText)) {

                course.style.display = "block";

            } else {

                course.style.display = "none";

            }

        });

    });

}


/* COURSE FILTER */

function filterCourses(category) {

    const courses =
        document.querySelectorAll(".course-card");

    courses.forEach(function (course) {

        if (
            category === "all" ||
            course.dataset.category === category
        ) {

            course.style.display = "block";

        } else {

            course.style.display = "none";

        }

    });

}


/* COURSE BUTTON */

function buyCourse(courseName) {

    alert(
        courseName +
        " selected! Payment system coming soon 💳"
    );

}
/* SHOW LOGIN */

function showLogin() {

    document.getElementById("loginForm")
        .style.display = "block";

    document.getElementById("signupForm")
        .style.display = "none";

}


/* SHOW SIGNUP */

function showSignup() {

    document.getElementById("loginForm")
        .style.display = "none";

    document.getElementById("signupForm")
        .style.display = "block";

}


/* PASSWORD SHOW / HIDE */

function togglePassword(id) {

    const password =
        document.getElementById(id);

    if (password.type === "password") {

        password.type = "text";

    } else {

        password.type = "password";

    }

}


/* LOGIN DEMO */

function loginUser() {

    const email =
        document.getElementById("loginEmail").value;

    const password =
        document.getElementById("loginPassword").value;

    if (email === "" || password === "") {

        alert("Please fill all fields.");

        return;

    }

    alert(
        "Login successful! 🚀\n\n" +
        "Backend authentication will be connected later."
    );

}


/* SIGNUP DEMO */

function signupUser() {

    const name =
        document.getElementById("signupName").value;

    const email =
        document.getElementById("signupEmail").value;

    const password =
        document.getElementById("signupPassword").value;

    if (
        name === "" ||
        email === "" ||
        password === ""
    ) {

        alert("Please fill all fields.");

        return;

    }

    alert(
        "Account created successfully! 🎉\n\n" +
        "Database will be connected later."
    );

}
function openDashboardTool(toolName) {

    alert(
        toolName +
        " will open here soon 🚀"
    );

}
// =========================
// NEXORA AI TOOLS
// =========================


// OPEN TOOL

function openTool(toolName) {

    document.getElementById("popupTitle").innerText =
        toolName;

    document.getElementById("toolPopup").style.display =
        "flex";
}


// CLOSE TOOL

function closeTool() {

    document.getElementById("toolPopup").style.display =
        "none";
}


// SEARCH TOOLS

function searchTools() {

    let search =
        document.getElementById("toolSearch")
        .value
        .toLowerCase();

    let tools =
        document.querySelectorAll(".tool-card");

    tools.forEach(function(tool) {

        let name =
            tool.dataset.name;

        if (name.includes(search)) {

            tool.style.display = "block";

        } else {

            tool.style.display = "none";

        }

    });

}


// FILTER TOOLS

function filterTools(category) {

    let tools =
        document.querySelectorAll(".tool-card");

    tools.forEach(function(tool) {

        if (
            category === "all" ||
            tool.dataset.category === category
        ) {

            tool.style.display = "block";

        } else {

            tool.style.display = "none";

        }

    });

}