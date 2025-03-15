// Main JavaScript for 序本影像XUBEN Website
// This file handles all interactive elements across the website

document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Header Scroll Effect
    const header = document.querySelector('header');
    
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                header.classList.add('py-2', 'shadow-md');
                header.classList.remove('py-3', 'shadow-sm');
            } else {
                header.classList.add('py-3', 'shadow-sm');
                header.classList.remove('py-2', 'shadow-md');
            }
        });
    }

    // Portfolio Item Filtering
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    if (filterButtons.length > 0 && portfolioItems.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                filterButtons.forEach(btn => {
                    btn.classList.remove('bg-amber-600', 'text-white');
                    btn.classList.add('bg-gray-100', 'text-gray-700', 'hover:bg-gray-200');
                });
                
                // Add active class to clicked button
                this.classList.remove('bg-gray-100', 'text-gray-700', 'hover:bg-gray-200');
                this.classList.add('bg-amber-600', 'text-white');
                
                const filter = this.getAttribute('data-filter');
                
                // Filter portfolio items
                portfolioItems.forEach(item => {
                    if (filter === 'all') {
                        item.style.display = 'block';
                        // Use Tailwind's animation classes
                        item.classList.add('animate-fadeIn');
                    } else if (item.classList.contains(filter)) {
                        item.style.display = 'block';
                        item.classList.add('animate-fadeIn');
                    } else {
                        item.style.display = 'none';
                        item.classList.remove('animate-fadeIn');
                    }
                });
            });
        });
    }

    // Contact Form Validation
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            let isValid = true;
            const name = document.getElementById('name');
            const phone = document.getElementById('phone');
            
            // Validate name
            if (!name.value.trim()) {
                showError(name, '请输入您的姓名');
                isValid = false;
            } else {
                removeError(name);
            }
            
            // Validate phone
            if (!phone.value.trim()) {
                showError(phone, '请输入您的电话号码');
                isValid = false;
            } else if (!isValidPhone(phone.value.trim())) {
                showError(phone, '请输入有效的电话号码');
                isValid = false;
            } else {
                removeError(phone);
            }
            
            if (isValid) {
                alert('感谢您的咨询，我们会尽快与您联系！');
                contactForm.reset();
            }
        });
    }
    
    // Validate phone number (simple Chinese phone number validation)
    function isValidPhone(phone) {
        const phoneRegex = /^(1[3-9])\d{9}$/;
        return phoneRegex.test(phone);
    }
    
    // Show error message
    function showError(input, message) {
        const formGroup = input.parentElement;
        let errorElement = formGroup.querySelector('.error-message');
        
        if (!errorElement) {
            errorElement = document.createElement('p');
            errorElement.className = 'error-message text-red-500 text-sm mt-1';
            formGroup.appendChild(errorElement);
        }
        
        errorElement.textContent = message;
        input.classList.add('border-red-500', 'focus:ring-red-500');
    }
    
    // Remove error message
    function removeError(input) {
        const formGroup = input.parentElement;
        const errorElement = formGroup.querySelector('.error-message');
        
        if (errorElement) {
            formGroup.removeChild(errorElement);
        }
        
        input.classList.remove('border-red-500', 'focus:ring-red-500');
    }

    // Back to Top Button
    const backToTopBtn = document.getElementById('backToTop');
    
    if (backToTopBtn) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 300) {
                backToTopBtn.classList.remove('opacity-0', 'invisible', 'translate-y-4');
            } else {
                backToTopBtn.classList.add('opacity-0', 'invisible', 'translate-y-4');
            }
        });
        
        backToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Image Preview/Lightbox for Portfolio
    const portfolioImages = document.querySelectorAll('.portfolio-image');
    
    if (portfolioImages.length > 0) {
        portfolioImages.forEach(image => {
            image.addEventListener('click', function() {
                const imgSrc = this.getAttribute('data-full-img') || this.src;
                const imgTitle = this.getAttribute('alt') || '序本影像作品';
                
                // Create lightbox elements
                const lightbox = document.createElement('div');
                lightbox.className = 'fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50';
                
                const lightboxContent = document.createElement('div');
                lightboxContent.className = 'relative max-w-4xl mx-auto p-4';
                
                const closeBtn = document.createElement('button');
                closeBtn.className = 'absolute top-0 right-0 -mt-12 text-white text-3xl hover:text-amber-500 transition duration-300';
                closeBtn.innerHTML = '<i class="fas fa-times"></i>';
                
                const img = document.createElement('img');
                img.src = imgSrc;
                img.className = 'max-h-[80vh] max-w-full';
                img.alt = imgTitle;
                
                const caption = document.createElement('p');
                caption.className = 'text-white text-center mt-4 text-lg';
                caption.textContent = imgTitle;
                
                // Append elements
                lightboxContent.appendChild(closeBtn);
                lightboxContent.appendChild(img);
                lightboxContent.appendChild(caption);
                lightbox.appendChild(lightboxContent);
                document.body.appendChild(lightbox);
                document.body.style.overflow = 'hidden'; // Prevent scrolling
                
                // Close lightbox on click
                lightbox.addEventListener('click', function(e) {
                    if (e.target === lightbox) {
                        document.body.removeChild(lightbox);
                        document.body.style.overflow = '';
                    }
                });
                
                // Close button functionality
                closeBtn.addEventListener('click', function() {
                    document.body.removeChild(lightbox);
                    document.body.style.overflow = '';
                });
            });
        });
    }
    
    // Smooth Scrolling for Anchor Links
    const anchorLinks = document.querySelectorAll('a[href^="#"]:not([href="#"])');
    
    if (anchorLinks.length > 0) {
        anchorLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    // Close mobile menu if open
                    if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                        mobileMenu.classList.add('hidden');
                    }
                    
                    // Calculate header height for offset
                    const headerHeight = header ? header.offsetHeight : 0;
                    
                    // Scroll to target with offset
                    window.scrollTo({
                        top: targetElement.offsetTop - headerHeight,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
}); 