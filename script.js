/* Nexora AI — shared static-site interactions.
   This is a front-end demo; authentication, payments and AI APIs are not connected. */
(() => {
  const $ = (id) => document.getElementById(id);
  const show = (el, display = "block") => { if (el) el.style.display = display; };

  // Search works on both the home page and the dedicated tools page.
  function searchCards(inputId, selector, getText) {
    const input = $(inputId);
    if (!input) return;
    const apply = () => {
      const query = input.value.trim().toLowerCase();
      document.querySelectorAll(selector).forEach((card) => {
        const text = (getText ? getText(card) : card.innerText).toLowerCase();
        card.style.display = text.includes(query) ? "" : "none";
      });
    };
    input.addEventListener("input", apply);
  }

  searchCards("toolSearch", ".tool-card", (card) =>
    [card.innerText, card.dataset.name || "", card.dataset.category || ""].join(" "));
  searchCards("courseSearch", ".course-card");

  window.filterTools = (category) => {
    document.querySelectorAll(".tool-card").forEach((card) => {
      const matches = category === "all" || card.dataset.category === category;
      card.style.display = matches ? "" : "none";
    });
  };

  window.filterCourses = (category) => {
    document.querySelectorAll(".course-card").forEach((card) => {
      card.style.display =
        category === "all" || card.dataset.category === category ? "" : "none";
    });
  };

  const toolLinks = {
    "ChatGPT": "https://chatgpt.com/",
    "AI Chat": "https://chatgpt.com/",
    "Gemini": "https://gemini.google.com/",
    "AI Image": "https://www.google.com/search?q=AI+image+generator",
    "AI Video": "https://www.google.com/search?q=AI+video+generator",
    "AI Coding": "https://github.com/features/copilot",
    "AI Logo Maker": "https://www.google.com/search?q=AI+logo+maker",
    "AI Assistant": "https://chatgpt.com/"
  };

  function showToolPopup(name, icon = "🤖", description) {
    if ($("popupTitle")) $("popupTitle").textContent = name;
    if ($("popupIcon")) $("popupIcon").textContent = icon;
    if ($("popupDescription")) {
      $("popupDescription").textContent = description ||
        (toolLinks[name] ? "Open this tool on its official website." :
          "This feature is a demo and is not connected yet.");
    }
    show($("toolPopup"), "flex");
    show($("loginPopup"), "none");
  }

  window.openTool = (name) => showToolPopup(name);
  window.showTool = (name, icon, description) => showToolPopup(name, icon, description);
  window.closeTool = () => show($("toolPopup"), "none");
  window.closeToolPopup = window.closeTool;
  window.useTool = () => {
    const name = $("popupTitle")?.textContent || "AI Assistant";
    const url = toolLinks[name];
    if (url) window.open(url, "_blank", "noopener,noreferrer");
    else alert("This feature is not connected yet.");
  };

  window.openDashboardTool = (name) => {
    const url = toolLinks[name] || "ai-tools.html";
    window.location.href = url === "ai-tools.html" ? url : url;
  };

  window.openPopup = () => show($("loginPopup"), "flex");
  window.closePopup = () => show($("loginPopup"), "none");

  window.showLogin = () => {
    show($("loginForm"));
    show($("signupForm"), "none");
    document.querySelectorAll(".auth-tab").forEach((tab, i) =>
      tab.classList.toggle("active", i === 0));
  };
  window.showSignup = () => {
    show($("loginForm"), "none");
    show($("signupForm"));
    document.querySelectorAll(".auth-tab").forEach((tab, i) =>
      tab.classList.toggle("active", i === 1));
  };

  window.togglePassword = (id) => {
    const input = $(id);
    if (input) input.type = input.type === "password" ? "text" : "password";
  };

  window.loginUser = () => {
    const email = $("loginEmail")?.value.trim();
    const password = $("loginPassword")?.value;
    if (!email || !password) return alert("Please enter your email and password.");
    alert("This is a front-end demo only. Real account login is not enabled yet.");
  };

  window.signupUser = () => {
    const name = $("signupName")?.value.trim();
    const email = $("signupEmail")?.value.trim();
    const password = $("signupPassword")?.value;
    if (!name || !email || !password) return alert("Please fill in all fields.");
    alert("This is a front-end demo only. Account creation and data storage are not enabled yet.");
  };

  window.buyCourse = (courseName) =>
    alert(courseName + " selected. Online payment is not enabled on this demo site.");

  // Legacy popup close buttons and escape key.
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      show($("toolPopup"), "none");
      show($("loginPopup"), "none");
    }
  });

  // Remove the old generic click handlers that caused duplicate alerts.
  document.querySelectorAll(".dashboard-card button").forEach((button) => {
    button.onclick = () => { window.location.href = "ai-tools.html"; };
  });
})();
