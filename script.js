document.addEventListener('DOMContentLoaded', function() {
    // Navigation functionality
    const navButtons = document.querySelectorAll('.nav-btn');
    const contentSections = document.querySelectorAll('.content-section');
    
    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Update active button
            navButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Show selected section
            const sectionId = this.getAttribute('data-section');
            contentSections.forEach(section => section.classList.remove('active'));
            document.getElementById(sectionId).classList.add('active');
        });
    });
    
    // FAQ accordions
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            const toggle = this.querySelector('.faq-toggle');
            
            if (answer.classList.contains('active')) {
                answer.classList.remove('active');
                toggle.textContent = '+';
            } else {
                answer.classList.add('active');
                toggle.textContent = '-';
            }
        });
    });
    
    // Form validation
    const contactForm = document.querySelector('.contact-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            let isValid = true;
            
            if (nameInput.value.trim() === '') {
                isValid = false;
                alert('Please enter your name');
            } else if (emailInput.value.trim() === '') {
                isValid = false;
                alert('Please enter your email');
            } else if (messageInput.value.trim() === '') {
                isValid = false;
                alert('Please enter your message');
            }
            
            if (isValid) {
                alert('Thank you for your message! We will get back to you soon.');
                nameInput.value = '';
                emailInput.value = '';
                messageInput.value = '';
            }
        });
    }
    
    // Creating member photo placeholders
    const memberPhotos = document.querySelectorAll('.member-photo');
    const memberColors = ['#f8c988', '#fcdfba', '#f5b455', '#fae2c4', '#ffd599', '#ffca7a'];
    
    memberPhotos.forEach((photo, index) => {
        photo.style.backgroundColor = memberColors[index % memberColors.length];
        
        // Create initials from member name
        const memberName = photo.nextElementSibling.querySelector('h3').textContent;
        const initials = memberName.split(' ').map(name => name[0]).join('');
        
        photo.innerHTML = `
            <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); 
                        font-size: 3rem; font-weight: bold; color: rgba(0,0,0,0.2);">
                ${initials}
            </div>
        `;
    });
    
    // Hero image placeholder
    const heroImage = document.querySelector('.hero-image');
    if (heroImage) {
        heroImage.innerHTML
    }
    // JavaScript to ensure images fit properly
document.addEventListener('DOMContentLoaded', function() {
    // Function to handle image loading errors
    function handleImageError(img) {
        img.onerror = function() {
            // Replace with a background color if image fails to load
            this.style.display = 'none';
            this.parentElement.style.backgroundColor = 'var(--primary)';
            
            // Add a placeholder icon or text if desired
            const placeholder = document.createElement('div');
            placeholder.textContent = this.alt || 'Image';
            placeholder.style.color = 'var(--dark)';
            placeholder.style.display = 'flex';
            placeholder.style.alignItems = 'center';
            placeholder.style.justifyContent = 'center';
            placeholder.style.height = '100%';
            placeholder.style.width = '100%';
            placeholder.style.position = 'absolute';
            placeholder.style.top = '0';
            placeholder.style.left = '0';
            this.parentElement.appendChild(placeholder);
        };
    }
    
    // Apply to all croffle images
    document.querySelectorAll('.croffle-img img').forEach(handleImageError);
    
    // Apply to hero image
    const heroImage = document.querySelector('.hero-image img');
    if (heroImage) handleImageError(heroImage);
    
    // Apply to member photos if they have images
    document.querySelectorAll('.member-photo img').forEach(handleImageError);
});
});