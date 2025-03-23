const body = document.body;
        const button = document.querySelector(".toggle-btn");

        // Load theme from localStorage
        if (localStorage.getItem("theme") === "dark") {
            body.classList.add("dark-mode");
            button.textContent = "☀ Switch to Light Mode";
        }

        function toggleTheme() {
            body.classList.toggle("dark-mode");
            const isDark = body.classList.contains("dark-mode");
            localStorage.setItem("theme", isDark ? "dark" : "light");
            button.textContent = isDark ? "☀ Switch to Light Mode" : "🌙 Switch to Dark Mode";
        }
