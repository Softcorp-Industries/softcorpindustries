const date = new Date();
const hours = date.getHours();

let greeting;

if (hours < 12) {
    greeting = "Good Morning";
} else if
    (hours >= 12 && hours < 17) {
    greeting = "Good Afternoon";
}
else {
    greeting = "Good Evening"
}

document.getElementById('greeting').innerHTML = greeting;

