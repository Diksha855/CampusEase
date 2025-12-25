// Dummy data
const notices = [
    "📌 Semester Exam starts from 10 Jan",
    "📌 Library will remain closed on Sunday",
    "📌 Scholarship form last date: 5 Jan"
];

const events = [
    "🗓️ Hackathon on 15 Jan",
    "🗓️ Annual Function on 20 Jan",
    "🗓️ Project submission deadline: 12 Jan"
];

// Add notices
const noticeList = document.getElementById("noticeList");
notices.forEach(notice => {
    const li = document.createElement("li");
    li.textContent = notice;
    noticeList.appendChild(li);
});

// Add events
const eventList = document.getElementById("eventList");
events.forEach(event => {
    const li = document.createElement("li");
    li.textContent = event;
    eventList.appendChild(li);
});

// Active navbar highlight on scroll
const sections = document.querySelectorAll("section, header");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 60;
        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});
