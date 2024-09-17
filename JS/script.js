document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetSection.offsetTop - 80, // Adjust for navbar height
                behavior: 'smooth'
            });
        });
    });

        const iframe = document.getElementById('videoIframe');
        const videoUrl = iframe.getAttribute('data-src');


        
        iframe.addEventListener('mouseover', () => {
            iframe.src = `${videoUrl}?autoplay=1`; // Add autoplay parameter
        });

        iframe.addEventListener('mouseout', () => {
            iframe.src = 'about:blank'; // Clear iframe source to stop playback
        });
        
    });