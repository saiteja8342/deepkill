/**
 * DEEPKILL Toilet Cleaner - Interactive JavaScript Engine
 * Professional FMCG Brand Website
 */

document.addEventListener('DOMContentLoaded', () => {
  // =========================================================================
  // 1. Sticky Header & Scroll Effects
  // =========================================================================
  const siteHeader = document.getElementById('site-header');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id], footer[id]');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      siteHeader.classList.add('scrolled');
    } else {
      siteHeader.classList.remove('scrolled');
    }

    // ScrollSpy Active Link
    let currentSectionId = '';
    const scrollPosition = window.scrollY + 120;

    sections.forEach((section) => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPosition >= top && scrollPosition < top + height) {
        currentSectionId = section.getAttribute('id');
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSectionId}`) {
        link.classList.add('active');
      }
    });
  });

  // =========================================================================
  // 2. Mobile Drawer Navigation
  // =========================================================================
  const menuToggle = document.getElementById('menu-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const drawerClose = document.getElementById('drawer-close');
  const drawerOverlay = document.getElementById('drawer-overlay');
  const drawerLinks = document.querySelectorAll('.drawer-link');

  function openDrawer() {
    mobileDrawer.classList.add('open');
    drawerOverlay.classList.add('active');
    menuToggle.setAttribute('aria-expanded', 'true');
    mobileDrawer.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    mobileDrawer.classList.remove('open');
    drawerOverlay.classList.remove('active');
    menuToggle.setAttribute('aria-expanded', 'false');
    mobileDrawer.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (menuToggle) menuToggle.addEventListener('click', openDrawer);
  if (drawerClose) drawerClose.addEventListener('click', closeDrawer);
  if (drawerOverlay) drawerOverlay.addEventListener('click', closeDrawer);

  drawerLinks.forEach((link) => {
    link.addEventListener('click', closeDrawer);
  });

  // =========================================================================
  // 3. Interactive Stain Comparison Slider
  // =========================================================================
  const sliderContainer = document.getElementById('stain-slider-container');
  const sliderDivider = document.getElementById('slider-divider');
  const stainedView = document.getElementById('comp-stained-view');

  if (sliderContainer && sliderDivider && stainedView) {
    let isDragging = false;

    function updateSlider(clientX) {
      const rect = sliderContainer.getBoundingClientRect();
      let offsetX = clientX - rect.left;
      let percentage = (offsetX / rect.width) * 100;

      // Restrict percentage between 5% and 95%
      if (percentage < 5) percentage = 5;
      if (percentage > 95) percentage = 95;

      sliderDivider.style.left = `${percentage}%`;
      stainedView.style.clipPath = `polygon(0 0, ${percentage}% 0, ${percentage}% 100%, 0 100%)`;
      stainedView.style.webkitClipPath = `polygon(0 0, ${percentage}% 0, ${percentage}% 100%, 0 100%)`;
    }

    // Set initial 50% split
    updateSlider(sliderContainer.getBoundingClientRect().left + (sliderContainer.getBoundingClientRect().width * 0.5));

    sliderContainer.addEventListener('mousedown', (e) => {
      isDragging = true;
      updateSlider(e.clientX);
    });

    window.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      updateSlider(e.clientX);
    });

    window.addEventListener('mouseup', () => {
      isDragging = false;
    });

    // Touch Support for Mobile / Tablet
    sliderContainer.addEventListener('touchstart', (e) => {
      isDragging = true;
      if (e.touches.length > 0) {
        updateSlider(e.touches[0].clientX);
      }
    }, { passive: true });

    window.addEventListener('touchmove', (e) => {
      if (!isDragging) return;
      if (e.touches.length > 0) {
        updateSlider(e.touches[0].clientX);
      }
    }, { passive: true });

    window.addEventListener('touchend', () => {
      isDragging = false;
    });
  }

  // =========================================================================
  // 4. Product Category Filter Tabs
  // =========================================================================
  const filterBtns = document.querySelectorAll('.filter-btn');
  const productCards = document.querySelectorAll('.product-card');

  function applyProductFilter(category) {
    filterBtns.forEach((btn) => {
      const isActive = btn.dataset.filter === category;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-selected', isActive ? 'true' : 'false');
    });

    productCards.forEach((card) => {
      const cardCategory = card.dataset.category;
      if (category === 'all' || cardCategory === category) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });
  }

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      applyProductFilter(btn.dataset.filter);
    });
  });

  // Footer Filter Triggers
  document.querySelectorAll('.filter-trigger').forEach((trigger) => {
    trigger.addEventListener('click', (e) => {
      const cat = trigger.dataset.filter;
      if (cat) {
        applyProductFilter(cat);
      }
    });
  });

  // =========================================================================
  // 5. Toast Feedback Utility
  // =========================================================================
  const toastNotification = document.getElementById('toast-notification');
  const toastMessage = document.getElementById('toast-message');
  let toastTimer = null;

  function showToast(message) {
    if (!toastNotification || !toastMessage) return;
    toastMessage.textContent = message;
    toastNotification.classList.add('show');

    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toastNotification.classList.remove('show');
    }, 3500);
  }

  // =========================================================================
  // 6. Generic Modal Handler
  // =========================================================================
  function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (!modal) return;
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeModal(modal) {
    if (!modal) return;
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  // Close modals on clicking backdrop or close button
  document.querySelectorAll('.modal-backdrop').forEach((modal) => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal || e.target.classList.contains('modal-close')) {
        closeModal(modal);
      }
    });
  });

  // Close with Escape key
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal-backdrop.open').forEach(closeModal);
      closeDrawer();
    }
  });

  // =========================================================================
  // 7. "Where to Buy" / Retailer Modal Triggers
  // =========================================================================
  const openRetailerBtns = document.querySelectorAll('.open-retailers-modal');
  openRetailerBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const productName = btn.dataset.productName || 'DEEPKILL';
      const buyTitle = document.getElementById('modal-buy-title');
      if (buyTitle) {
        buyTitle.textContent = `Buy ${productName} Online`;
      }
      openModal('retailers-modal');
    });
  });

  // Click on retailer link
  document.querySelectorAll('.retailer-item').forEach((item) => {
    item.addEventListener('click', () => {
      showToast('Redirecting to partner delivery app...');
    });
  });

  // =========================================================================
  // 8. Product QuickView Modal Data & Interaction
  // =========================================================================
  const productData = {
    'power-blue': {
      title: 'DEEPKIL Power Blue Original',
      tag: '10X Active Formula • Flagship Edition',
      image: 'assets/images/deepkil-hero-bottle.jpg',
      badge: 'Best Seller',
      price: '₹145 (750 ml)',
      desc: 'DEEPKIL Power Blue Original is engineered with high-density clinging viscosity that coats bowl ceramics 3x longer than ordinary liquid cleaners, dissolving stubborn yellow rings, limescale, and bacteria effortlessly.',
      benefits: [
        '10X Active Clinging Gel adheres without dripping off',
        'Dissolves tough Indian borewell water mineral deposits',
        'Kills 99.9% of disease-causing bathroom bacteria and germs',
        'Safe on glazed ceramic, Western commodes, and Indian squat pans'
      ],
      specs: {
        'Net Volume': '750 ml (Also in 500ml & 1L)',
        'Active Ingredient': 'Hydrochloric Complex 10.5% w/v with Viscous Cling Modifiers',
        'Dwell Time': '20 minutes (Overnight for severe scale)',
        'Fragrance': 'Crisp Fresh Hygiene Clean',
        'Shelf Life': '24 Months from manufacturing'
      }
    },
    'citrus-red': {
      title: 'DEEPKIL Citrus Power Blast',
      tag: 'Natural Citrus Acid Descaler',
      image: 'assets/images/deepkil-citrus-red.jpg',
      badge: 'Scale Specialist',
      price: '₹155 (750 ml)',
      desc: 'Formulated with organic citrus descaling bio-acids, DEEPKIL Citrus Power targets iron-rich rust lines and heavy calcium calcification while filling your bathroom with a zesty, invigorating lemon freshness.',
      benefits: [
        'Citrus chelation technology lifts deep reddish-brown rust streaks',
        'Cuts through alkaline borewell water crust',
        'Eliminates persistent urinal odors and damp bathroom smells',
        'Leaves high-gloss gleaming porcelain finish'
      ],
      specs: {
        'Net Volume': '750 ml',
        'Active Ingredient': 'Citric Scale Buster with Non-Ionic Surfactants',
        'Dwell Time': '15-20 minutes',
        'Fragrance': 'Zesty Citrus Lemon Fresh',
        'Shelf Life': '24 Months'
      }
    },
    'marine-fresh': {
      title: 'DEEPKIL Marine Fresh Gel',
      tag: '48H Ocean Breeze Malodor Shield',
      image: 'assets/images/deepkil-marine-fresh.jpg',
      badge: 'Fresh Fragrance',
      price: '₹155 (750 ml)',
      desc: 'Infused with long-lasting marine essential oils and active foaming agents, this variant neutralizes humidity odors while depositing a microscopic dirt-repellent protective layer on the bowl surface.',
      benefits: [
        'Continuous 48-hour ocean breeze fragrance',
        'Rich active foam cleans above and below the water line',
        'Prevents yellow deposit buildup between weekly washes',
        'Gentle daily hygiene formulation'
      ],
      specs: {
        'Net Volume': '750 ml',
        'Active Ingredient': 'Multi-Surfactant Marine Gel with Deo-Shield Encapsulation',
        'Dwell Time': '15 minutes',
        'Fragrance': 'Invigorating Ocean Splash',
        'Shelf Life': '24 Months'
      }
    },
    'value-pack': {
      title: 'DEEPKIL Super Saver Twin Pack',
      tag: 'Multi-Bathroom Complete Hygiene Bundle',
      image: 'assets/images/deepkil-twin-pack.jpg',
      badge: 'Save 25%',
      price: '₹249 (2 × 750 ml) — Save ₹41',
      desc: 'The best-value hygiene solution for Indian families with multiple bathrooms. Includes 1x DEEPKIL Power Blue (750ml) for heavy stain elimination and 1x DEEPKIL Citrus Power (750ml) for refreshing descaling.',
      benefits: [
        'Maximum savings of 25% compared to single bottles',
        'Covers master bedroom and guest washrooms completely',
        'Twin ergonomic angled nozzles for convenient multi-room use',
        '100% recyclable tamper-evident packaging'
      ],
      specs: {
        'Net Volume': '1500 ml (2 Bottles × 750 ml)',
        'Includes': '1x Power Blue + 1x Citrus Power',
        'Target': 'Complete Indian Family Washroom Care',
        'Shelf Life': '24 Months'
      }
    }
  };

  const viewProductBtns = document.querySelectorAll('.btn-view-product');
  const productModalContent = document.getElementById('product-modal-content');
  const productModalTag = document.getElementById('modal-product-tag');

  viewProductBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const prodKey = btn.dataset.product;
      const data = productData[prodKey];
      if (!data || !productModalContent) return;

      if (productModalTag) productModalTag.textContent = data.tag;

      let specsHtml = '';
      for (const [key, value] of Object.entries(data.specs)) {
        specsHtml += `
          <div class="modal-spec-row">
            <span>${key}</span>
            <strong>${value}</strong>
          </div>
        `;
      }

      let benefitsHtml = data.benefits.map((b) => `<li>✓ ${b}</li>`).join('');

      productModalContent.innerHTML = `
        <div class="product-modal-grid">
          <div class="modal-bottle-view">
            <img src="${data.image}" alt="${data.title}" />
          </div>
          <div>
            <div class="product-badge badge-popular" style="position: static; display: inline-block; margin-bottom: 10px;">${data.badge}</div>
            <h3 style="font-size: 1.5rem; margin-bottom: 8px;">${data.title}</h3>
            <p style="font-size: 1.25rem; font-weight: 800; color: var(--color-primary-blue); margin-bottom: 14px;">${data.price}</p>
            <p style="font-size: 0.9375rem; color: var(--color-text-body); line-height: 1.6; margin-bottom: 18px;">${data.desc}</p>
            
            <h4 style="font-size: 0.9375rem; margin-bottom: 8px;">Key Benefits:</h4>
            <ul style="font-size: 0.875rem; color: var(--color-text-muted); line-height: 1.8; margin-bottom: 18px;">
              ${benefitsHtml}
            </ul>

            <h4 style="font-size: 0.9375rem; margin-bottom: 8px;">Product Specifications:</h4>
            <div class="modal-specs-list">
              ${specsHtml}
            </div>

            <div style="display: flex; gap: 12px; margin-top: 24px;">
              <button type="button" class="btn btn-red btn-block open-retailers-modal" data-product-name="${data.title}">
                Buy Now Online
              </button>
            </div>
          </div>
        </div>
      `;

      // Rebind click on new Buy Now button inside the modal
      const newBuyBtn = productModalContent.querySelector('.open-retailers-modal');
      if (newBuyBtn) {
        newBuyBtn.addEventListener('click', () => {
          closeModal(document.getElementById('product-modal'));
          openModal('retailers-modal');
        });
      }

      openModal('product-modal');
    });
  });

  // =========================================================================
  // 9. Cleaning Tips / Article Reader Modal Data
  // =========================================================================
  const articleData = {
    'article-fresh-daily': {
      category: 'Daily Hygiene',
      title: 'How to Keep Your Toilet Fresh Every Day',
      content: `
        <p>A fresh bathroom transforms the morning experience for the whole family. In Indian households where humidity is often elevated, unpleasant odors can build up quickly if proper daily habits aren't established.</p>
        <h4 style="margin: 20px 0 10px; font-size: 1.125rem;">1. Prioritize Cross-Ventilation</h4>
        <p>Always run the exhaust fan for at least 15 minutes following shower or toilet use. If your washroom features an exterior window or ventilation louver, keep it slightly ajar to encourage continuous air exchange.</p>
        <h4 style="margin: 20px 0 10px; font-size: 1.125rem;">2. Close the Lid Before Flushing</h4>
        <p>Flushing with the commode lid open propels microscopic water droplets (toilet plume) into the surrounding air, coating countertops, walls, and towels. Simply closing the lid keeps bacteria locked inside the bowl water.</p>
        <h4 style="margin: 20px 0 10px; font-size: 1.125rem;">3. Use DEEPKILL Marine Fresh Gel Weekly</h4>
        <p>A weekly application of DEEPKILL Marine Fresh leaves a protective hydrophobic film on ceramic porcelain that prevents organic buildup from clinging, ensuring continuous ocean fragrance for up to 48 hours.</p>
      `
    },
    'article-tough-stains': {
      category: 'Deep Cleaning',
      title: 'How to Remove Tough Toilet Stains & Hard Water Marks',
      content: `
        <p>In many Indian cities and towns, groundwater from borewells is high in Total Dissolved Solids (TDS), calcium, and magnesium carbonates. Over time, evaporation leaves behind crusty yellow and brown rings that regular soaps cannot dissolve.</p>
        <h4 style="margin: 20px 0 10px; font-size: 1.125rem;">Why Ordinary Cleaners Fail</h4>
        <p>Watery, thin toilet cleaners run straight into the bottom U-bend within 5 seconds. To break down insoluble calcium carbonate, the formula requires <strong>prolonged surface dwell time</strong>.</p>
        <h4 style="margin: 20px 0 10px; font-size: 1.125rem;">The DEEPKILL Descaling Protocol</h4>
        <ol style="margin-left: 20px; line-height: 1.8; color: var(--color-text-body); font-size: 0.9375rem;">
          <li>Flush the toilet once to moisten the ceramic surface.</li>
          <li>Apply DEEPKILL Power Blue or Citrus Power directly under the rim using the curved angled nozzle.</li>
          <li>Allow the heavy blue clinging formula to dwell for <strong>20 to 30 minutes</strong> undisturbed. For stubborn borewell mineral rings, leave overnight.</li>
          <li>Use a toilet brush to lightly scrub the loosened mineral crust.</li>
          <li>Flush once. The active chelating agents wash away, leaving spotless, gleaming porcelain.</li>
        </ol>
      `
    },
    'article-cleaning-mistakes': {
      category: 'Safety Guide',
      title: 'Toilet Cleaning Mistakes to Avoid in Indian Homes',
      content: `
        <p>Bathroom sanitation is critical, but using incorrect methods or hazardous chemical mixtures can damage your home's plumbing and pose severe health risks.</p>
        <h4 style="margin: 20px 0 10px; font-size: 1.125rem; color: #DC2626;">DANGER: Never Mix Bleach with Acid Cleaners</h4>
        <p>Mixing chlorine bleach with acidic toilet cleaners generates toxic <strong>chlorine gas</strong>. This invisible gas can cause severe respiratory burning, coughing, and dizziness. Always use DEEPKILL as a standalone formulation.</p>
        <h4 style="margin: 20px 0 10px; font-size: 1.125rem;">Avoid Raw Concentrated Muriatic Acid</h4>
        <p>Purchasing raw acid in unlabelled bottles from local hardware stores is dangerous. Concentrated muriatic acid eats away the protective glazed vitrification of the ceramic bowl, making future stains adhere even faster. Furthermore, it corrodes metal drain fittings and PVC pipes.</p>
        <h4 style="margin: 20px 0 10px; font-size: 1.125rem;">Don't Neglect Under the Rim</h4>
        <p>Most toilet odors emanate from the hidden underside of the bowl rim where flush water nozzles are located. Always use an angled nozzle bottle to direct cleaning gel upwards into this hidden groove.</p>
      `
    },
    'article-cleaning-frequency': {
      category: 'Home Routine',
      title: 'How Often Should You Clean Your Toilet?',
      content: `
        <p>Setting up a predictable household cleaning schedule ensures your washrooms remain hygienic without requiring exhausting, hours-long scrub sessions.</p>
        <h4 style="margin: 20px 0 10px; font-size: 1.125rem;">1. Joint Family Homes (4+ Members)</h4>
        <p>High-traffic washrooms require a quick refresh <strong>every 2 to 3 days</strong> and a deep 20-minute DEEPKILL clean once a week to prevent yellow scaling and cross-contamination.</p>
        <h4 style="margin: 20px 0 10px; font-size: 1.125rem;">2. Apartments & Nuclear Families (1-3 Members)</h4>
        <p>A weekly thorough clean with DEEPKILL Power Blue is usually sufficient to maintain immaculate hygiene and fresh fragrance.</p>
        <h4 style="margin: 20px 0 10px; font-size: 1.125rem;">3. Hard Borewell Water Zones</h4>
        <p>If your municipal or tanker water leaves heavy white deposits on bathroom taps and tiles, perform an overnight soak with DEEPKILL Citrus Power every Sunday night to eliminate scaling before it calcifies.</p>
      `
    }
  };

  const readMoreBtns = document.querySelectorAll('.btn-read-more');
  const articleModal = document.getElementById('article-modal');
  const articleModalTitle = document.getElementById('modal-article-title');
  const articleModalCategory = document.getElementById('modal-article-category');
  const articleModalContent = document.getElementById('article-modal-content');

  readMoreBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const artId = btn.dataset.article;
      const data = articleData[artId];
      if (!data || !articleModalContent) return;

      if (articleModalTitle) articleModalTitle.textContent = data.title;
      if (articleModalCategory) articleModalCategory.textContent = data.category;
      articleModalContent.innerHTML = data.content;

      openModal('article-modal');
    });
  });

  // =========================================================================
  // 10. Distributor & Trade Partner Modal Form
  // =========================================================================
  const openDistributorBtns = document.querySelectorAll('.open-distributor-modal');
  const partnerForm = document.getElementById('partner-form');

  openDistributorBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal('distributor-modal');
    });
  });

  if (partnerForm) {
    partnerForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('partner-name').value;
      closeModal(document.getElementById('distributor-modal'));
      partnerForm.reset();
      showToast(`Thank you, ${name}! Our FMCG trade manager will contact you within 24 hours.`);
    });
  }
});
