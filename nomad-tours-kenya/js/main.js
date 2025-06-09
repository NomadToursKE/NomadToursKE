// Mobile menu toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuButton && mobileMenu) {
  mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    mobileMenuButton.innerHTML = mobileMenu.classList.contains('hidden') 
      ? '<i class="fas fa-bars text-2xl"></i>' 
      : '<i class="fas fa-times text-2xl"></i>';
  });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      // Close mobile menu if open
      if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.add('hidden');
        mobileMenuButton.innerHTML = '<i class="fas fa-bars text-2xl"></i>';
      }
    }
  });
});

// Add animation on scroll
const animateOnScroll = () => {
  const elements = document.querySelectorAll('.animate-on-scroll');
  
  elements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    
    if (elementTop < windowHeight - 100) {
      element.classList.add('animate-fade-in');
    }
  });
};

// Initialize animations on page load
window.addEventListener('load', () => {
  // Trigger initial animation check
  animateOnScroll();
  
  // Add scroll event listener for scroll animations
  window.addEventListener('scroll', animateOnScroll);
});

// Form submission handling
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const originalButtonText = submitButton.innerHTML;
    
    try {
      // Show loading state
      submitButton.disabled = true;
      submitButton.innerHTML = 'Sending...';
      
      // Simulate form submission (replace with actual form submission logic)
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Show success message
      alert('Thank you for your message! We will get back to you soon.');
      contactForm.reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error sending your message. Please try again later.');
    } finally {
      // Reset button state
      submitButton.disabled = false;
      submitButton.innerHTML = originalButtonText;
    }
  });
}

// Initialize any sliders or carousels
const initSliders = () => {
  // Testimonial slider initialization
  const testimonialSlider = document.querySelector('.testimonial-slider');
  if (testimonialSlider) {
    // Initialize a simple testimonial slider
    let currentSlide = 0;
    const slides = document.querySelectorAll('.testimonial-slide');
    const totalSlides = slides.length;
    
    const showSlide = (index) => {
      slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
      });
    };
    
    // Show first slide initially
    showSlide(0);
    
    // Auto-advance slides every 5 seconds
    setInterval(() => {
      currentSlide = (currentSlide + 1) % totalSlides;
      showSlide(currentSlide);
    }, 5000);
  }
};

// Initialize all components when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  initSliders();
});
