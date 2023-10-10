// // Get references to the popup and button
// const popup = document.getElementById('popup');
// const continueButton = document.getElementById('continue-btn');

// // Show the popup when the page loads
// window.onload = function () {
//     popup.style.display = 'block';
// };

// // Hide the popup when the "Continue" button is clicked
// continueButton.addEventListener('click', function () {
//     popup.style.display = 'none';
// });




particlesJS("particles-js", {
    particles: {
        number: {
            value: 100, // Adjust the number of particles
            density: {
                enable: true,
                value_area: 800,
            },
        },
        color: {
            value: "#cdae84", // Adjust the particle color
        },
        shape: {
            type: "circle", // Adjust the particle shape (circle, edge, triangle, etc.)
        },
        opacity: {
            value: 0.7, // Adjust the particle opacity
            random: true,
        },
        size: {
            value: 5, // Adjust the particle size
            random: true,
        },
        move: {
            enable: true,
            speed: 2, // Adjust the particle movement speed
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
        },
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: true,
                mode: "repulse", // Adjust interaction mode (grab, bubble, repulse, etc.)
            },
        },
        modes: {
            repulse: {
                distance: 100, // Adjust repulse distance
                duration: 0.4,
            },
        },
    },
});
