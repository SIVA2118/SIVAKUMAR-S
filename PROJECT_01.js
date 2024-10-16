// Change navbar style on scroll
const navbar = document.querySelector('.navbar'); // Corrected to match the class
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('fixed');
    } else {
        navbar.classList.remove('fixed');
    }
});

// Toggle menu for small screens
const toggleButton = document.getElementById('nav-toggle');
const navMenu = document.getElementById('navbarNav'); // Change to the collapse div

toggleButton.addEventListener('click', () => {
    navMenu.classList.toggle('show'); // Use Bootstrap's class for showing
});


document.querySelector('.nav-link[href="#about"]').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });

    const aboutContent = document.querySelector('.about-content');
    const aboutImage = document.querySelector('.about-image img');

    aboutContent.classList.add('slideIn');
    aboutImage.classList.add('zoomIn');
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-text');
        }
    });
});

const aboutContent = document.querySelector('.about-content');
const aboutImage = document.querySelector('.about-image img');

observer.observe(aboutContent);
observer.observe(aboutImage);


const buttons = document.querySelectorAll('.button');

        buttons.forEach(button => {
            button.addEventListener('click', () => {
                const skill = button.parentElement;
                let percent = skill.getAttribute('data-percent');
                let leftBar = skill.querySelector('.left .progress');
                let rightBar = skill.querySelector('.right .progress');
                let text = skill.querySelector('.circle-text');

                let progress = 0;
                let interval = setInterval(() => {
                    if (progress >= percent) {
                        clearInterval(interval);
                    } else {
                        progress++;
                        text.textContent = progress + "%";
                        if (progress <= 50) {
                            rightBar.style.transform = `rotate(${progress * 3.6}deg)`;
                        } else {
                            rightBar.style.transform = `rotate(180deg)`;
                            leftBar.style.transform = `rotate(${(progress - 50) * 3.6}deg)`;
                        }
                    }
                }, 20); // Adjust speed of animation (lower value for faster)
            });
        });





        // Initialize EmailJS (this should be done only once)
emailjs.init("aVW7CoPq23KaXQzQr");

// Add event listener for form submission
document.querySelector('.contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const message = document.querySelector('textarea[name="message"]').value;

    // Prepare email template parameters
    const templateParams = {
        from_name: name,
        from_email: email,
        message: message
    };

    // Send email using EmailJS
    emailjs.send('service_md4slu8', 'template_k84epg6', templateParams)
        .then(function(response) {
            alert('Message sent successfully!');
            console.log('Success:', response.status, response.text);
        }, function(error) {
            alert('Failed to send the message. Please try again later.');
            console.error('Error:', error);
        });
});

$(document).ready(function() {
    $('.animate').each(function(i) {
        $(this).delay(i * 200).addClass('fadeIn');
    });
});

        