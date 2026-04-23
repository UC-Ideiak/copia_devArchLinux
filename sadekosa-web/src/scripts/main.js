/**
 * Módulo principal de la aplicación Sadekosa.
 * Gestiona las animaciones de scroll, el wizard de presupuesto
 * y el menú móvil.
 */

// ============================================
// Scroll Reveal - Anima elementos al entrar en viewport
// ============================================
const initScrollReveal = () => {
  const revealElements = document.querySelectorAll('.reveal');

  const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.9;
    revealElements.forEach((el) => {
      const top = el.getBoundingClientRect().top;
      if (top < triggerBottom) {
        el.classList.add('active');
      }
    });
  };

  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll(); // Verificación inicial
};

// ============================================
// Budget Wizard - Asistente de presupuesto
// ============================================
const initBudgetWizard = () => {
  const steps = document.querySelectorAll('.wizard-step');
  const profiles = document.querySelectorAll('.profile-opt');
  const serviceOptions = document.getElementById('service-options');

  if (!steps.length || !profiles.length || !serviceOptions) return;

  /** Servicios disponibles según el perfil seleccionado */
  const servicesByProfile = {
    admin: [
      'Rehabilitación de Fachada',
      'ITE/IEE Bizkaia',
      'Mantenimiento de Cubiertas',
      'Eficiencia Energética',
    ],
    industry: [
      'Impermeabilización Naves',
      'Refuerzo Estructural',
      'Pavimentos Técnicos',
      'Mantenimiento Predictivo',
    ],
    private: [
      'Rehabilitación VIP',
      'Impermeabilización Terrazas',
      'Sostenibilidad',
      'Diagnóstico por IA',
    ],
  };

  /** Navega al paso indicado del wizard */
  const goToStep = (num) => {
    steps.forEach((s) => s.classList.remove('active'));
    const target = document.querySelector(`.wizard-step[data-step="${num}"]`);
    if (target) target.classList.add('active');
  };

  // Gestión de selección de perfil
  profiles.forEach((btn) => {
    btn.addEventListener('click', () => {
      const profile = btn.dataset.profile;

      // Generar las opciones de servicio dinámicamente
      serviceOptions.innerHTML = '';
      const services = servicesByProfile[profile] || [];
      services.forEach((service) => {
        const sBtn = document.createElement('button');
        sBtn.className =
          'p-6 border border-white/10 hover:border-amber-500 transition text-left font-bold uppercase text-xs tracking-widest';
        sBtn.innerText = service;
        sBtn.addEventListener('click', () => goToStep(3));
        serviceOptions.appendChild(sBtn);
      });

      goToStep(2);
    });
  });

  // Botones de retroceso
  document.querySelectorAll('.prev-step').forEach((btn) => {
    btn.addEventListener('click', () => {
      const currentStep = btn.closest('.wizard-step');
      if (currentStep) {
        const current = parseInt(currentStep.dataset.step, 10);
        goToStep(current - 1);
      }
    });
  });
};

// ============================================
// Menú Móvil - Toggle de navegación responsiva
// ============================================
const initMobileMenu = () => {
  const menuBtn = document.getElementById('menuBtn');
  if (!menuBtn) return;

  menuBtn.addEventListener('click', () => {
    const nav = document.querySelector('nav div.hidden, nav div.flex.flex-col');
    if (!nav) return;

    nav.classList.toggle('hidden');
    nav.classList.toggle('flex');
    nav.classList.toggle('flex-col');
    nav.classList.toggle('absolute');
    nav.classList.toggle('top-full');
    nav.classList.toggle('left-0');
    nav.classList.toggle('w-full');
    nav.classList.toggle('bg-zinc-950');
    nav.classList.toggle('p-6');
  });
};

// ============================================
// Inicialización al cargar el DOM
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  initScrollReveal();
  initBudgetWizard();
  initMobileMenu();
});
