document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    const submitButton = form.querySelector("button[type='submit']");

    form.addEventListener("submit", async function (e) {
        e.preventDefault();

        // Add a loading animation to the button
        submitButton.disabled = true;
        submitButton.style.background =
            "linear-gradient(90deg, #fad02c, #ff5733, #33ff57, #3357ff)";
        submitButton.style.backgroundSize = "400% 400%";
        submitButton.style.animation = "gradientAnimation 2s ease infinite";

        // Collect form data
        const name = form.elements["Name"].value;
        const email = form.elements["Email"].value;
        const message = form.elements["Message"].value;

        const data = {
            fields: {
                Name: name, // Airtable 'Name' column
                Email: email, // Airtable 'Email' column
                Message: message, // Airtable 'Message' column
            },
        };

        // Airtable API details
        const url = "https://api.airtable.com/v0/appKD0fy2vfEwWKvM/TABLE";

        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    Authorization:
                        "Bearer patX654RwXfgBsOeQ.e44033edd248b8408904551ee93414ef0dce30a41ae2668c49e9496b96f1832c",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                alert("Zpráva byla úspěšně odeslána!");
                form.reset();
            } else {
                const result = await response.json();
                alert(
                    "Chyba při odesílání: " +
                        (result.error?.message || "Neznámá chyba")
                );
            }
        } catch (error) {
            alert("Chyba při odesílání: " + error.message);
        } finally {
            // Remove the loading animation and re-enable the button
            submitButton.disabled = false;
            submitButton.style.background = "";
            submitButton.style.animation = "";
        }
    });

    // Add keyframes for the gradient animation
    const style = document.createElement("style");
    style.textContent = `
        @keyframes gradientAnimation {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }
    `;
    document.head.appendChild(style);
});
