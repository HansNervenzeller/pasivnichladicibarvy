document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".scroll-animate");

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("slide-in-bottom");
                    observer.unobserve(entry.target); // Trigger only once
                }
            });
        },
        { threshold: 0.2 } // Trigger when 20% of the section is visible
    );

    sections.forEach((section) => {
        observer.observe(section);
    });
});
