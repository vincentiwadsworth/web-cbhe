// Configuración EmailJS
emailjs.init("TU_PUBLIC_KEY"); // Reemplazar con tu clave

// Variables globales
let currentPrices = {};

// Inicialización
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    setupNavigation();
    setupModal();
    setupFilters();
    loadOilPrices();
    setupForm();
}

// Navegación móvil
function setupNavigation() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Modal para requerimientos
function setupModal() {
    const modal = document.getElementById('modal-formulario');
    const closeBtn = document.querySelector('.close');

    window.abrirFormulario = function() {
        modal.style.display = 'block';
    }

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
}

// Filtros de empresas afiliadas
function setupFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const companyCards = document.querySelectorAll('.company-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remover clase active de todos los botones
            filterBtns.forEach(b => b.classList.remove('active'));
            // Agregar clase active al botón clickeado
            btn.classList.add('active');

            const filter = btn.getAttribute('data-filter');

            companyCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

// Cargar precios de petróleo (API gratuita) [17][20][21]
async function loadOilPrices() {
    try {
        const wtiResponse = await fetch('https://api.api-ninjas.com/v1/commodityprice?name=crude_oil', {
            headers: { 'X-Api-Key': 's+HjoYgJOY6OxRfbw+jNbA==Y9xNy4TgGm6nCkWt' }
        });
        const wtiData = await wtiResponse.json();
        
        const brentResponse = await fetch('https://api.api-ninjas.com/v1/commodityprice?name=brent_crude_oil', {
            headers: { 'X-Api-Key': 's+HjoYgJOY6OxRfbw+jNbA==Y9xNy4TgGm6nCkWt' }
        });
        const brentData = await brentResponse.json();
        
        updatePriceDisplay('wti', { price: wtiData.price, change: 0 });
        updatePriceDisplay('brent', { price: brentData.price, change: 0 });
    } catch (error) {
        console.log('Error:', error);
    }
}

function updatePriceDisplay(type, data) {
    const priceElement = document.getElementById(`${type}-price`);
    const changeElement = document.getElementById(`${type}-change`);
    
    if (priceElement && changeElement) {
        priceElement.textContent = `$${data.price.toFixed(2)}`;
        changeElement.textContent = `${data.change > 0 ? '+' : ''}${data.change.toFixed(2)}%`;
        changeElement.className = `price-change ${data.change >= 0 ? 'positive' : 'negative'}`;
    }
}

// Formulario de requerimientos con EmailJS [24][25][26]
function setupForm() {
    const form = document.getElementById('requerimiento-form');
    
    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const formData = new FormData(form);
        const templateParams = {
            empresa: formData.get('empresa'),
            email: formData.get('email'),
            categoria: formData.get('categoria'),
            descripcion: formData.get('descripcion'),
            fecha: new Date().toLocaleDateString('es-BO')
        };

        try {
            // Mostrar loading
            const submitBtn = form.querySelector('button');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Enviando...';
            submitBtn.disabled = true;

            // Enviar email (configurar con tus IDs reales)
            
            await emailjs.send(
                'service_qtzqlpq',
                'template_07u34g7',
                templateParams
            );
                        
            // Simulación para demo
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            alert('Requerimiento publicado exitosamente. Nos pondremos en contacto pronto.');
            form.reset();
            document.getElementById('modal-formulario').style.display = 'none';
            
        } catch (error) {
            console.error('Error:', error);
            alert('Error al enviar el requerimiento. Por favor intente nuevamente.');
        } finally {
            const submitBtn = form.querySelector('button');
            submitBtn.textContent = 'Publicar Requerimiento';
            submitBtn.disabled = false;
        }
    });
}

// Animaciones al scroll
function handleScrollAnimations() {
    const elements = document.querySelectorAll('.company-card, .servicio-card, .price-widget');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });

    elements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Ejecutar animaciones
document.addEventListener('DOMContentLoaded', handleScrollAnimations);
