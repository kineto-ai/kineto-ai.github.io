// Contact Form Handler
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');
    
    // Detect language from page URL or HTML lang attribute
    const isGerman = window.location.pathname.includes('/de/') || document.documentElement.lang === 'de';
    
    // Messages in both languages
    const messages = {
        en: {
            sending: 'Sending...',
            success: 'Thank you for your message! We\'ll get back to you within 24 hours.',
            error: 'Sorry, there was an error sending your message. Please try again or email us directly at contact@kineto.ai',
            subject: 'New Contact Form Submission - Kineto.ai'
        },
        de: {
            sending: 'Wird gesendet...',
            success: 'Vielen Dank für Ihre Nachricht! Wir werden uns innerhalb von 24 Stunden bei Ihnen melden.',
            error: 'Entschuldigung, beim Senden Ihrer Nachricht ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut oder senden Sie uns direkt eine E-Mail an contact@kineto.ai',
            subject: 'Neue Kontaktformular-Anfrage - Kineto.ai'
        }
    };
    
    const currentMessages = isGerman ? messages.de : messages.en;
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Show loading state
            const submitBtn = form.querySelector('.btn-submit');
            const originalBtnText = submitBtn.textContent;
            submitBtn.textContent = currentMessages.sending;
            submitBtn.disabled = true;
            
            // Prepare form data
            const formData = new FormData(form);
            
            // Add hidden fields for better organization
            formData.append('_subject', currentMessages.subject);
            formData.append('_replyto', formData.get('email'));
            formData.append('_next', window.location.href + '?sent=true');
            
            // Submit to Formspree (or another service)
            fetch(form.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then(response => {
                if (response.ok) {
                    showMessage(currentMessages.success, 'success');
                    form.reset();
                } else {
                    throw new Error('Network response was not ok');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                showMessage(currentMessages.error, 'error');
            })
            .finally(() => {
                // Restore button state
                submitBtn.textContent = originalBtnText;
                submitBtn.disabled = false;
            });
        });
    }
    
    // Check for success message in URL
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('sent') === 'true') {
        showMessage(currentMessages.success, 'success');
        // Clean up URL
        window.history.replaceState({}, document.title, window.location.pathname);
    }
    
    function showMessage(message, type) {
        formStatus.textContent = message;
        formStatus.className = type;
        formStatus.style.display = 'block';
        
        // Scroll to message
        formStatus.scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        // Hide message after 10 seconds for success, keep error messages visible
        if (type === 'success') {
            setTimeout(() => {
                formStatus.style.display = 'none';
            }, 10000);
        }
    }
    
    // Basic client-side validation enhancement
    const requiredFields = form.querySelectorAll('[required]');
    requiredFields.forEach(field => {
        field.addEventListener('blur', function() {
            if (!field.value.trim()) {
                field.style.borderColor = '#dc3545';
            } else {
                field.style.borderColor = '#28a745';
            }
        });
        
        field.addEventListener('input', function() {
            if (field.value.trim()) {
                field.style.borderColor = '#28a745';
            }
        });
    });
    
    // Email validation
    const emailField = document.getElementById('email');
    if (emailField) {
        emailField.addEventListener('blur', function() {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (emailField.value && !emailRegex.test(emailField.value)) {
                emailField.style.borderColor = '#dc3545';
            } else if (emailField.value) {
                emailField.style.borderColor = '#28a745';
            }
        });
    }
});