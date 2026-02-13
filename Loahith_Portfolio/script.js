// Typing Effect
const text = "Frontend Developer | Python Developer | Java Learner";
let i = 0;

function typingEffect(){
if(i < text.length){
document.getElementById("typing").innerHTML += text.charAt(i);
i++;
setTimeout(typingEffect, 80);
}
}
typingEffect();


// Skill Animation
const bars = document.querySelectorAll('.progress-bar');

window.addEventListener('scroll', () => {
bars.forEach(bar => {
if(bar.getBoundingClientRect().top < window.innerHeight){
bar.style.width = bar.getAttribute('data-width');
}
});
});


// Scroll Reveal
function reveal(){
const reveals = document.querySelectorAll(".reveal");

reveals.forEach(element => {
const windowHeight = window.innerHeight;
const elementTop = element.getBoundingClientRect().top;
const revealPoint = 100;

if(elementTop < windowHeight - revealPoint){
element.classList.add("active");
}
});
}

window.addEventListener("scroll", reveal);


// Mobile Menu
const toggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

toggle.addEventListener("click", () => {
navLinks.classList.toggle("active");
});


// Particle Background
const canvas = document.createElement("canvas");
document.getElementById("particles-js").appendChild(canvas);

const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for(let i = 0; i < 70; i++){
particles.push({
x: Math.random() * canvas.width,
y: Math.random() * canvas.height,
dx: (Math.random() - 0.5),
dy: (Math.random() - 0.5)
});
}

function animate(){
ctx.clearRect(0,0,canvas.width,canvas.height);

particles.forEach(p => {
ctx.beginPath();
ctx.arc(p.x, p.y, 2, 0, Math.PI*2);
ctx.fillStyle = "#00f5d4";
ctx.fill();

p.x += p.dx;
p.y += p.dy;

if(p.x < 0 || p.x > canvas.width) p.dx *= -1;
if(p.y < 0 || p.y > canvas.height) p.dy *= -1;
});

requestAnimationFrame(animate);
}

animate();