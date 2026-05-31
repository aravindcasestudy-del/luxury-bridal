(function () {
  'use strict';

  const BASE = 'assets/images/';

  const collectionsData = [
    {
      id: 'bridal', name: 'Bridal Collection', tagline: 'Exquisite couture for your most beautiful day', hero: BASE + 'bridal-collection-banner.jpg',
      products: [
        { id: 'b1', name: 'The Celestial Gown', collection: 'Bridal Collection', price: 285000, image: BASE + 'product-s2.jpg', desc: 'Hand-embroidered celestial motifs on pure silk organza', filter: 'designer', fabric: 'Silk Organza', embroidery: 'Zardozi & Crystal', designer: 'Ananya Sharma', occasion: 'Wedding', color: 'Ivory Gold', fit: 'Mermaid Silhouette', story: "Inspired by the night sky on a bride's most magical evening, this gown features 2000 hand-placed crystals and intricate zardozi work that took master artisans over 400 hours to complete." },
        { id: 'b2', name: 'The Rosewood Lehenga', collection: 'Bridal Collection', price: 345000, image: BASE + 'rosewood-lahanga.png', desc: 'Handwoven tissue silk with rose gold embroidery', filter: 'premium', fabric: 'Tissue Silk', embroidery: 'Hand Embroidery', designer: 'Ananya Sharma', occasion: 'Wedding', color: 'Rose Gold', fit: 'A-Line', story: 'A tribute to timeless romance, this lehenga captures the essence of a blooming rose garden with delicate hand-embroidered floral motifs.' }
      ]
    },
    {
      id: 'sarees', name: 'Premium Sarees', tagline: 'Handwoven elegance from the finest looms', hero: BASE + 'premium-saree.png',
      products: [
        { id: 's1', name: 'The Kanjivaram Treasure', collection: 'Premium Sarees', price: 185000, image: BASE + 'premium-saree.png', desc: 'Pure silk Kanjivaram with gold zari border', filter: 'classic', fabric: 'Pure Kanjivaram Silk', embroidery: 'Gold Zari Weave', designer: 'Traditional Looms', occasion: 'Wedding', color: 'Rich Red & Gold', fit: 'Traditional 9 Yards', story: 'Woven on traditional handlooms by master weavers who have perfected their craft over five generations, each saree is a living heirloom.' },
        { id: 's2', name: 'The Chanderli Dream', collection: 'Premium Sarees', price: 95000, image: BASE + 'signature-collection.png', desc: 'Handwoven Chanderli silk with floral motifs', filter: 'premium', fabric: 'Chanderli Silk', embroidery: 'Handwoven Motifs', designer: 'Traditional Looms', occasion: 'Festive', color: 'Pastel Pink', fit: '6 Yards', story: 'From the historic looms of Chanderli comes this ethereal creation, where every thread tells a story of artistry and tradition.' }
      ]
    },
    {
      id: 'party', name: 'Party Wear', tagline: "Dazzling designs for life's grand moments", hero: BASE + 'party-wear-banner.png',
      products: [
        { id: 'p1', name: 'The Gold Sequin Gown', collection: 'Party Wear', price: 165000, image: BASE + 'The-Gold-Sequin-Gown.png', desc: 'Floor-length gown with hand-placed gold sequins', filter: 'designer', fabric: 'Net & Silk', embroidery: 'Hand-placed Sequins', designer: 'Priya Kapoor', occasion: 'Cocktail', color: 'Gold', fit: 'Mermaid', story: 'Designed for the woman who owns the room, this gown is a constellation of hand-placed sequins on a nude silk base.' },
        { id: 'p2', name: 'The Velvet Evening Suit', collection: 'Party Wear', price: 125000, image: BASE + 'The-Velvet-Evening-Suit.png', desc: 'Tailored velvet blazer with silk trousers', filter: 'contemporary', fabric: 'Velvet & Silk', embroidery: 'Minimal Embellishment', designer: 'Maya Patel', occasion: 'Evening Party', color: 'Deep Emerald', fit: 'Tailored Fit', story: 'Power dressing meets luxury couture in this impeccably tailored velvet suit that commands attention without saying a word.' }
      ]
    },
    {
      id: 'casual', name: 'Casual Luxury', tagline: 'Everyday elegance for the modern woman', hero: BASE + 'casual -luxury-banner.png',
      products: [
        { id: 'c1', name: 'The Linen Perfection', collection: 'Casual Luxury', price: 45000, image: BASE + 'Bridal Collection.png', desc: 'Pure linen co-ord set with relaxed fit', filter: 'premium', fabric: 'Pure Linen', embroidery: 'Minimal', designer: 'Maya Patel', occasion: 'Casual', color: 'Natural Beige', fit: 'Relaxed', story: 'Luxury meets comfort in this perfectly crafted linen set, designed for the woman who values both style and ease.' },
        { id: 'c2', name: 'The Silk Day Dress', collection: 'Casual Luxury', price: 62000, image: BASE + 'casual luxury.png', desc: 'Everyday silk dress with clean lines', filter: 'contemporary', fabric: 'Silk Crepe', embroidery: 'None', designer: 'Priya Kapoor', occasion: 'Day Wear', color: 'Dusty Blue', fit: 'Shift', story: 'Proving that everyday luxury is a lifestyle, this silk dress brings understated elegance to your daily wardrobe.' }
      ]
    },
    {
      id: 'signature', name: 'Signature Collection', tagline: 'Our most celebrated designs, reimagined', hero: BASE + 'signature-collection-banner.png',
      products: [
        { id: 'sg1', name: 'The LUXE AURA Icon', collection: 'Signature Collection', price: 750000, image: BASE + 'signature-collection.png', desc: 'Our most celebrated couture piece, reimagined', filter: 'designer', fabric: 'Pure Silk & Velvet', embroidery: 'Signature Zardozi', designer: 'Ananya Sharma', occasion: 'Special Occasion', color: 'Black & Gold', fit: 'Mermaid', story: 'The piece that defined our brand. This iconic creation represents the very essence of LUXE AURA — timeless, bold, and extraordinarily beautiful.' },
        { id: 'sg2', name: 'The Heritage Ensemble', collection: 'Signature Collection', price: 580000, image: BASE + 'designer-exclusive.png', desc: 'A bridge between tradition and contemporary design', filter: 'classic', fabric: 'Handloom Silk', embroidery: 'Heritage Weave', designer: 'Heritage Weaves', occasion: 'Wedding', color: 'Red & Gold', fit: 'Traditional', story: 'A celebration of Indian textile heritage, this ensemble brings together the finest weaving traditions from across the country.' }
      ]
    },
    {
      id: 'designer', name: 'Designer Exclusive', tagline: 'Limited edition pieces from visionary designers', hero: BASE + 'designer-exclusive-banner.png',
      products: [
        { id: 'd1', name: 'The Avant-Garde Saree', collection: 'Designer Exclusive', price: 420000, image: BASE + 'party-wear.png', desc: 'Deconstructed silk saree with modern drape', filter: 'designer', fabric: 'Dupion Silk', embroidery: 'Abstract Embroidery', designer: 'Rohan Khanna', occasion: 'Fashion Event', color: 'Graphite', fit: 'Deconstructed', story: 'Breaking the boundaries of traditional draping, this avant-garde piece reimagines the saree for the modern fashion connoisseur.' },
        { id: 'd2', name: 'The Sculptural Gown', collection: 'Designer Exclusive', price: 680000, image: BASE + 'gallery-1.png', desc: 'Architectural silk gown with structural draping', filter: 'designer', fabric: 'Structured Silk', embroidery: 'Architectural Details', designer: 'Rohan Khanna', occasion: 'Red Carpet', color: 'Pure White', fit: 'Architectural', story: 'Where fashion meets architecture, this sculptural masterpiece is a study in form, structure, and the art of draping.' }
      ]
    }
  ];

  const galleryImages = [
    BASE + 'gallery-1.png', BASE + 'gallery-2.png', BASE + 'gallery-3.png', BASE + 'gallery-4.png',
    BASE + 'gallery-5.png', BASE + 'gallery-6.png', BASE + 'gallery-7.png', BASE + 'gallery-8.png'
  ];

  function getProductById(id) {
    for (const col of collectionsData) { const found = col.products.find(p => p.id === id); if (found) return found; }
    return null;
  }

  function getAllProducts() { const all = []; for (const col of collectionsData) { all.push(...col.products); } return all; }

  function formatPrice(price) { return '\u20B9 ' + price.toLocaleString('en-IN'); }

  function getCollectionById(id) { return collectionsData.find(c => c.id === id) || collectionsData[0]; }

  let wishlist = JSON.parse(localStorage.getItem('luxeAuraWishlist') || '[]');
  function saveWishlist() { localStorage.setItem('luxeAuraWishlist', JSON.stringify(wishlist)); }
  function toggleWishlist(id) {
    const idx = wishlist.indexOf(id);
    if (idx > -1) { wishlist.splice(idx, 1); } else { wishlist.push(id); }
    saveWishlist(); updateWishlistUI();
  }
  function isInWishlist(id) { return wishlist.includes(id); }

  function updateWishlistUI() {
    document.querySelectorAll('.product-card-wishlist, .product-wishlist-btn').forEach(btn => {
      const id = btn.dataset.productId;
      if (id) { btn.innerHTML = isInWishlist(id) ? '<i class="fas fa-heart"></i>' : '<i class="far fa-heart"></i>'; btn.classList.toggle('liked', isInWishlist(id)); }
    });
    const wl = document.getElementById('wishlistLink');
    if (wl) wl.innerHTML = '<i class="' + (wishlist.length > 0 ? 'fas' : 'far') + ' fa-heart"></i>';
  }

  function createProductCardHTML(product, opts) {
    opts = opts || {};
    const overlay = opts.overlay !== false;
    const price = formatPrice(product.price);
    const img = '<img src="' + product.image + '" alt="' + product.name + '" class="' + (overlay ? 'product-card-img' : '') + '" loading="lazy">';

    if (overlay) {
      return '<div class="product-card" data-id="' + product.id + '">' +
        img +
        '<div class="product-card-overlay">' +
          '<p class="product-card-tag">' + product.collection + '</p>' +
          '<h3 class="product-card-title">' + product.name + '</h3>' +
          (product.desc ? '<p class="product-card-desc">' + product.desc + '</p>' : '') +
          '<p class="product-card-price">' + price + '</p>' +
        '</div></div>';
    }

    return '<div class="product-card fade-in" data-id="' + product.id + '">' +
      '<div class="product-card-image">' +
        img +
        '<button class="product-card-wishlist" data-product-id="' + product.id + '" aria-label="Wishlist">' +
          (isInWishlist(product.id) ? '<i class="fas fa-heart"></i>' : '<i class="far fa-heart"></i>') +
        '</button>' +
      '</div>' +
      '<div class="product-card-info">' +
        '<p class="product-card-collection">' + product.collection + '</p>' +
        '<h3 class="product-card-name">' + product.name + '</h3>' +
        '<p class="product-card-desc">' + product.desc + '</p>' +
        '<p class="product-card-price">' + price + '</p>' +
      '</div></div>';
  }

  function getCardHTML(product) { return createProductCardHTML(product, { overlay: true }); }

  let scrollAnimObserver = null;

  function initScrollAnimations() {
    if (scrollAnimObserver) scrollAnimObserver.disconnect();
    scrollAnimObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { entry.target.classList.add('visible'); scrollAnimObserver.unobserve(entry.target); }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });
    document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right, .fade-in-scale').forEach(function (el) { scrollAnimObserver.observe(el); });
  }

  function renderHome() {
    var main = document.getElementById('mainContent');
    main.innerHTML =
      '<section class="hero" id="hero">' +
        '<img src="' + BASE + 'hero.png' + '" alt="Luxury bridal couture" class="hero-bg" id="heroBg">' +
        '<div class="hero-overlay" id="heroOverlay"></div>' +
        '<div class="hero-content">' +
          '<p class="hero-label">Since 2010</p>' +
          '<h1 class="hero-title">LUXE <em>AURA</em></h1>' +
          '<p class="hero-tagline">Where Timeless Elegance Meets Modern Couture</p>' +
          '<div class="hero-buttons">' +
            '<a href="#/collection/bridal" class="btn btn-outline-light">Explore Collections</a>' +
            '<a href="#contact" class="btn btn-outline-light">Book Consultation</a>' +
          '</div>' +
        '</div>' +
        '<div class="hero-scroll"><span>Scroll</span><div class="scroll-line"></div></div>' +
      '</section>' +
      '<section class="brand-story" id="story"><div class="container"><div class="brand-story-grid">' +
        '<div class="brand-story-image fade-in-left"><img src="' + BASE + 'Craftsmanship-and-heritage.png' + '" alt="Craftsmanship and heritage"></div>' +
        '<div class="brand-story-content fade-in-right">' +
          '<p class="section-label">Our Heritage</p>' +
          '<h2 class="section-title">A Legacy of<br>Artisan Excellence</h2>' +
          '<p class="brand-story-text">For over a decade, LUXE AURA has been the epitome of luxury bridal and designer fashion. Every piece is a masterpiece of craftsmanship, born from the hands of master artisans who have perfected their craft across generations.</p>' +
          '<p class="brand-story-text">Our atelier in the heart of the city is where tradition meets contemporary vision — where hand-embroidered details, premium fabrics, and avant-garde silhouettes unite to create fashion that transcends time.</p>' +
          '<p class="brand-story-text">We believe in fashion that tells a story. Each design is a narrative of heritage, passion, and uncompromising quality — crafted for the woman who appreciates the finest things in life.</p>' +
          '<p class="brand-story-signature">— The LUXE AURA Atelier</p>' +
        '</div></div></div></section>' +
      '<section class="collections" id="collections"><div class="container">' +
        '<div class="collections-header fade-in"><p class="section-label">The Edit</p><h2 class="section-title">Featured Collections</h2><p class="section-subtitle">Curated with passion, designed for the extraordinary</p></div>' +
        '<div class="collections-grid">' +
          [
            { id: 'bridal', img: 'Bridal Collection.png', tag: 'Timeless Love', title: 'Bridal Collection', desc: 'Exquisite couture for your most beautiful day' },
            { id: 'sarees', img: 'premium-saree.png', tag: 'Heritage Redefined', title: 'Premium Sarees', desc: 'Handwoven elegance from the finest looms' },
            { id: 'casual', img: 'casual luxury.png', tag: 'Effortless Chic', title: 'Casual Luxury', desc: 'Everyday elegance for the modern woman' },
            { id: 'party', img: 'party-wear.png', tag: 'Celebration', title: 'Party Wear', desc: "Dazzling designs for life's grand moments" },
            { id: 'signature', img: 'signature-collection.png', tag: 'Iconic', title: 'Signature Collection', desc: 'Our most celebrated designs, reimagined' },
            { id: 'designer', img: 'designer-exclusive.png', tag: 'Exclusive', title: 'Designer Exclusive', desc: 'Limited edition pieces from visionary designers' }
          ].map(function(c) {
            return '<a href="#/collection/' + c.id + '" class="collection-card fade-in-scale">' +
              '<img src="' + BASE + c.img + '" alt="' + c.title + '">' +
              '<div class="collection-card-overlay"><p class="collection-card-tag">' + c.tag + '</p><h3 class="collection-card-title">' + c.title + '</h3><p class="collection-card-desc">' + c.desc + '</p></div></a>';
          }).join('') +
        '</div></div></section>' +
      '<section class="experience" id="experience"><div class="container">' +
        '<div class="experience-header fade-in"><p class="section-label">The Experience</p><h2 class="section-title">Maison LUXE AURA</h2><p class="section-subtitle">Beyond fashion — a world of unparalleled craftsmanship</p></div>' +
        '<div class="experience-grid">' +
          [
            { icon: 'fa-hand-sparkles', title: 'Handcrafted Excellence', text: 'Every stitch is a testament to generations of artisanal mastery. Our pieces are handcrafted by master artisans with decades of experience.' },
            { icon: 'fa-feather-alt', title: 'Premium Fabrics', text: "We source the world's finest fabrics — from Italian silks to Benarasi brocades, each material is selected for its exceptional quality and feel." },
            { icon: 'fa-palette', title: 'Designer Craftsmanship', text: 'Our designs bridge the gap between traditional artistry and contemporary vision, creating pieces that are both timeless and modern.' },
            { icon: 'fa-gem', title: 'Exclusive Collections', text: 'Limited edition pieces ensure that your garment is as unique as you are. Each collection is a curated narrative of luxury and style.' },
            { icon: 'fa-scissors', title: 'Custom Tailoring', text: 'Our atelier offers bespoke tailoring services, ensuring every piece is perfectly crafted to your measurements and vision.' },
            { icon: 'fa-star', title: 'Concierge Service', text: 'From private viewings to styling consultations, our dedicated concierge team ensures an unparalleled luxury experience.' }
          ].map(function(e) {
            return '<div class="experience-card fade-in"><div class="experience-icon"><i class="fas ' + e.icon + '"></i></div><h3 class="experience-card-title">' + e.title + '</h3><p class="experience-card-text">' + e.text + '</p></div>';
          }).join('') +
        '</div></div></section>' +
      '<section class="gallery" id="gallery"><div class="container">' +
        '<div class="gallery-header fade-in"><p class="section-label">Visual Diary</p><h2 class="section-title">Editorial Gallery</h2><p class="section-subtitle">A visual journey through our world of luxury couture</p></div>' +
        '<div class="gallery-grid" id="galleryGrid">' +
          galleryImages.map(function(src, i) {
            return '<div class="gallery-item fade-in-scale" data-index="' + i + '"><img src="' + src + '" alt="Gallery ' + (i + 1) + '"><div class="gallery-item-overlay"><span>View</span></div></div>';
          }).join('') +
        '</div></div></section>' +
      '<section class="testimonials" id="testimonials"><div class="container">' +
        '<div class="testimonials-header fade-in"><p class="section-label">Kind Words</p><h2 class="section-title">What Our Clients Say</h2><p class="section-subtitle">The greatest compliment is the trust of our discerning clientele</p></div>' +
        '<div class="testimonials-grid">' +
          [
            { text: '"LUXE AURA transformed my wedding day into a fairy tale. The craftsmanship of my bridal gown was beyond anything I could have imagined — every detail, every stitch was perfection."', name: 'Aaradhya Mehta', role: 'Bridal Client', img: 'gallery-1.png' },
            { text: '"The exclusivity and quality of their designer collection is unmatched. I have never felt more confident and elegant than when wearing a LUXE AURA creation. A true testament to luxury fashion."', name: 'Ishita Verma', role: 'Designer Collection', img: 'product-s2.jpg' },
            { text: '"Their premium saree collection is a celebration of Indian artistry. The handwoven details, the richness of the fabrics, and the personalized service made the experience absolutely unforgettable."', name: 'Vikram Rathore', role: 'Premium Sarees', img: 'gallery-2.png' }
          ].map(function(t) {
            return '<div class="testimonial-card fade-in"><div class="testimonial-stars">\u2605 \u2605 \u2605 \u2605 \u2605</div><p class="testimonial-text">' + t.text + '</p><div class="testimonial-author"><img src="' + BASE + t.img + '" alt="Client" class="testimonial-author-img"><div><p class="testimonial-author-name">' + t.name + '</p><p class="testimonial-author-role">' + t.role + '</p></div></div></div>';
          }).join('') +
        '</div></div></section>' +
      '<section class="contact" id="contact"><div class="container"><div class="contact-grid">' +
        '<div class="contact-image fade-in-left"><img src="' + BASE + 'Luxury consultation.png' + '" alt="Luxury consultation"></div>' +
        '<div class="fade-in-right">' +
          '<p class="section-label">Book an Appointment</p>' +
          '<h2 class="section-title">Experience Luxury<br>In Person</h2>' +
          '<p class="section-subtitle" style="margin-bottom:40px;">Schedule a private consultation at our flagship atelier for a personalized luxury fashion experience.</p>' +
          '<div class="contact-info">' +
            '<div class="contact-info-item"><div class="contact-info-icon"><i class="fas fa-map-marker-alt"></i></div><div><p class="contact-info-label">Address</p><p class="contact-info-value">42 Luxury Avenue, Design District, Mumbai 400001</p></div></div>' +
            '<div class="contact-info-item"><div class="contact-info-icon"><i class="fas fa-phone-alt"></i></div><div><p class="contact-info-label">Phone</p><p class="contact-info-value">+91 22 4592 7800</p></div></div>' +
            '<div class="contact-info-item"><div class="contact-info-icon"><i class="fas fa-envelope"></i></div><div><p class="contact-info-label">Email</p><p class="contact-info-value">concierge@luxeaura.com</p></div></div>' +
          '</div>' +
          '<form class="contact-form" id="contactForm">' +
            '<div class="form-row"><div class="form-group"><label for="firstName">First Name</label><input type="text" id="firstName" placeholder="Your first name" required></div><div class="form-group"><label for="lastName">Last Name</label><input type="text" id="lastName" placeholder="Your last name" required></div></div>' +
            '<div class="form-group"><label for="contactEmail">Email Address</label><input type="email" id="contactEmail" placeholder="your@email.com" required></div>' +
            '<div class="form-group"><label for="contactPhone">Phone Number</label><input type="tel" id="contactPhone" placeholder="+91 98765 43210" required></div>' +
            '<div class="form-row"><div class="form-group"><label for="interest">Interest</label><select id="interest"><option value="">Select an option</option><option value="bridal">Bridal Collection</option><option value="sarees">Premium Sarees</option><option value="party">Party Wear</option><option value="casual">Casual Luxury</option><option value="signature">Signature Collection</option><option value="bespoke">Bespoke Tailoring</option></select></div><div class="form-group"><label for="preferredDate">Preferred Date</label><input type="date" id="preferredDate"></div></div>' +
            '<div class="form-group"><label for="message">Additional Notes</label><textarea id="message" placeholder="Tell us about your vision and preferences..."></textarea></div>' +
            '<button type="submit" class="btn btn-primary" style="align-self:flex-start;">Request Appointment</button>' +
          '</form>' +
        '</div></div></div></section>';

    setTimeout(function () {
      initHeroParallax();
      initHeroCursor();
      initGalleryLightbox();
      initContactForm();
      initSmoothAnchors();
      initScrollAnimations();
      initProductCardClicks();
      initWishlistButtons();
    }, 50);
  }

  function renderCollection(collectionId) {
    var collection = getCollectionById(collectionId);
    var main = document.getElementById('mainContent');
    if (!collection) { main.innerHTML = '<div style="text-align:center;padding:120px 0;"><h2>Collection not found</h2><a href="#/" class="btn btn-primary">Back to Home</a></div>'; return; }

    var filterBtns = ['all', 'designer', 'premium', 'classic', 'contemporary'].map(function(f, i) {
      return '<button class="filter-btn' + (i === 0 ? ' active' : '') + '" data-filter="' + f + '">' + f.charAt(0).toUpperCase() + f.slice(1) + '</button>';
    }).join('');

    main.innerHTML =
      '<section class="collection-hero"><img src="' + collection.hero + '" alt="' + collection.name + '" class="collection-hero-bg"><div class="collection-hero-overlay"></div><div class="collection-hero-content"><p class="collection-hero-label">Collection</p><h1 class="collection-hero-title">' + collection.name + '</h1><p class="collection-hero-desc">' + collection.tagline + '</p></div></section>' +
      '<section class="collection-filters"><div class="container"><div class="collection-filters-inner"><div class="filter-group" id="filterGroup">' + filterBtns + '</div><select class="sort-select" id="sortSelect"><option value="featured">Featured</option><option value="latest">Latest</option><option value="popular">Popular</option></select></div></div></section>' +
      '<section><div class="container"><div class="product-grid" id="productGrid"></div></div></section>';

    var grid = document.getElementById('productGrid');
    var currentFilter = 'all';
    var currentSort = 'featured';

    function renderProducts() {
      var products = collection.products.slice();
      if (currentFilter !== 'all') products = products.filter(function(p) { return p.filter === currentFilter; });
      if (currentSort === 'latest') products.reverse();
      else if (currentSort === 'popular') products = products.sort(function() { return Math.random() - 0.5; });
      grid.innerHTML = products.length > 0
        ? products.map(function(p) { return createProductCardHTML(p, { overlay: false }); }).join('')
        : '<div style="grid-column:1/-1;text-align:center;padding:80px 20px;color:var(--text-muted);font-family:var(--font-serif-alt);font-size:1.2rem;font-style:italic;">No designs found for this filter.</div>';
      requestAnimationFrame(function() {
        initScrollAnimations();
        initProductCardClicks();
        initWishlistButtons();
      });
    }

    renderProducts();

    document.getElementById('filterGroup').addEventListener('click', function(e) {
      if (e.target.classList.contains('filter-btn')) {
        document.querySelectorAll('#filterGroup .filter-btn').forEach(function(b) { b.classList.remove('active'); });
        e.target.classList.add('active');
        currentFilter = e.target.dataset.filter;
        renderProducts();
      }
    });

    document.getElementById('sortSelect').addEventListener('change', function(e) {
      currentSort = e.target.value;
      renderProducts();
    });
  }

  function getDetailImages(product) {
    var pool = [
      'product-s2.jpg', 'rosewood-lahanga.png', 'The-Gold-Sequin-Gown.png',
      'product-main.jpg', 'product-thumb-2.jpg', 'related-4.jpg',
      'designer-exclusive.png', 'premium-saree.png', 'signature-collection.png',
      'gallery-1.png', 'gallery-2.png', 'gallery-3.png',
      'gallery-4.png', 'gallery-5.png', 'gallery-6.png',
      'gallery-7.png', 'gallery-8.png'
    ];
    var ownFile = product.image.split('/').pop();
    var filtered = pool.filter(function(f) { return f !== ownFile; });
    var hash = product.id.split('').reduce(function(a, c) { return a + c.charCodeAt(0); }, 0);
    var start = hash % filtered.length;
    var result = [product.image];
    for (var i = 0; i < 4; i++) {
      result.push(BASE + filtered[(start + i) % filtered.length]);
    }
    return result;
  }

  function renderProductDetail(productId) {
    var product = getProductById(productId);
    var main = document.getElementById('mainContent');
    if (!product) { main.innerHTML = '<section class="product-detail"><div class="container" style="text-align:center;padding:120px 0;"><h2 style="font-family:var(--font-serif);font-size:2rem;">Product not found</h2><a href="#/collection/bridal" class="btn btn-primary" style="margin-top:20px;">View Collections</a></div></section>'; return; }

    var detailImages = getDetailImages(product);

    var allProds = getAllProducts();
    var related = allProds.filter(function(p) { return p.collection === product.collection && p.id !== product.id; }).slice(0, 3);

    var colorClass = (product.color || '').toLowerCase().replace(/\s+/g, '-');

    main.innerHTML =
      '<section class="product-detail"><div class="container"><div class="product-detail-grid">' +
        '<div class="product-gallery fade-in">' +
          '<div class="product-gallery-badge">' + (product.filter === 'designer' ? 'Designer Exclusive' : product.filter === 'premium' ? 'Premium' : 'Collection') + '</div>' +
          '<div class="product-gallery-main" id="productMainImage">' +
            '<img src="' + product.image + '" alt="' + product.name + '" id="mainProductImage">' +
          '</div>' +
          '<div class="product-gallery-thumbs" id="productThumbs">' +
            detailImages.map(function(src, idx) {
              return '<div class="product-gallery-thumb' + (idx === 0 ? ' active' : '') + '" data-src="' + src + '"><img src="' + src + '" alt="View ' + (idx + 1) + '"></div>';
            }).join('') +
          '</div>' +
        '</div>' +
        '<div class="product-info fade-in-right">' +
          '<p class="product-collection">' + product.collection + '</p>' +
          '<h1 class="product-name">' + product.name + '</h1>' +
          '<p class="product-price">' + formatPrice(product.price) + '</p>' +
          '<div class="product-divider"></div>' +
          '<p class="product-description">' + product.desc + '</p>' +
          '<div class="product-details-grid">' +
            '<div class="product-detail-item"><span class="product-detail-label">Fabric</span><span class="product-detail-value">' + (product.fabric || '\u2014') + '</span></div>' +
            '<div class="product-detail-item"><span class="product-detail-label">Embroidery</span><span class="product-detail-value">' + (product.embroidery || '\u2014') + '</span></div>' +
            '<div class="product-detail-item"><span class="product-detail-label">Designer</span><span class="product-detail-value">' + (product.designer || '\u2014') + '</span></div>' +
            '<div class="product-detail-item"><span class="product-detail-label">Occasion</span><span class="product-detail-value">' + (product.occasion || '\u2014') + '</span></div>' +
            '<div class="product-detail-item"><span class="product-detail-label">Fit</span><span class="product-detail-value">' + (product.fit || '\u2014') + '</span></div>' +
            '<div class="product-detail-item"><span class="product-detail-label">Color</span><span class="product-detail-value"><span class="color-swatch swatch-' + colorClass + '"></span>' + (product.color || '\u2014') + '</span></div>' +
          '</div>' +
          '<div class="product-actions">' +
            '<button class="btn btn-primary" id="bookConsultationBtn">Book Consultation</button>' +
            '<button class="product-wishlist-btn" data-product-id="' + product.id + '" aria-label="Wishlist">' + (isInWishlist(product.id) ? '<i class="fas fa-heart"></i>' : '<i class="far fa-heart"></i>') + '</button>' +
          '</div>' +
        '</div></div></div></section>' +
      '<section class="product-story"><div class="container"><div class="product-story-content fade-in"><p class="product-story-label">The Story Behind</p><h2 class="product-story-title">' + product.name + '</h2><p class="product-story-text">' + (product.story || 'Every LUXE AURA creation is a narrative of passion, heritage, and meticulous artistry.') + '</p></div></div></section>' +
      (related.length > 0
        ? '<section class="related-products" id="relatedProducts"><div class="container"><div class="related-header fade-in"><p class="section-label">Complete the Edit</p><h2 class="section-title">Related Designs</h2></div><div class="product-grid" id="relatedGrid">' + related.map(function(p) { return createProductCardHTML(p, { overlay: false }); }).join('') + '</div></div></section>'
        : '') +
      '<div class="lightbox" id="detailLightbox"><button class="lightbox-close" id="dlClose">&times;</button><button class="lightbox-nav lightbox-prev" id="dlPrev">&#8249;</button><img src="" alt="" id="dlImage"><button class="lightbox-nav lightbox-next" id="dlNext">&#8250;</button></div>';

    setTimeout(function () {
      initProductDetailGallery(detailImages);
      initProductCardClicks();
      initWishlistButtons();
      initScrollAnimations();

      document.getElementById('bookConsultationBtn').addEventListener('click', function() { window.location.hash = '#/'; setTimeout(function() { window.location.hash = '#contact'; }, 100); });
    }, 50);
  }

  function initProductDetailGallery(images) {
    var mainImg = document.getElementById('mainProductImage');
    var thumbs = document.getElementById('productThumbs');
    if (!mainImg || !thumbs) return;

    thumbs.addEventListener('click', function(e) {
      var thumb = e.target.closest('.product-gallery-thumb');
      if (thumb && thumb.dataset.src) {
        mainImg.src = thumb.dataset.src;
        thumbs.querySelectorAll('.product-gallery-thumb').forEach(function(t) { t.classList.remove('active'); });
        thumb.classList.add('active');
      }
    });

    var mainContainer = document.getElementById('productMainImage');
    mainContainer.addEventListener('mousemove', function(e) {
      var rect = mainContainer.getBoundingClientRect();
      var x = (e.clientX - rect.left) / rect.width;
      var y = (e.clientY - rect.top) / rect.height;
      mainImg.style.transformOrigin = (x * 100) + '% ' + (y * 100) + '%';
      mainImg.style.transform = 'scale(1.5)';
    });
    mainContainer.addEventListener('mouseleave', function() {
      mainImg.style.transform = 'scale(1)';
      mainImg.style.transformOrigin = 'center center';
    });

    mainContainer.addEventListener('click', function() {
      var lightbox = document.getElementById('detailLightbox');
      var lbImg = document.getElementById('dlImage');
      var ci = 0;
      function showLb() { lbImg.src = images[ci]; }
      lightbox.classList.add('open');
      document.body.style.overflow = 'hidden';
      showLb();
      function cleanup() { lightbox.classList.remove('open'); document.body.style.overflow = ''; }
      document.getElementById('dlClose').onclick = cleanup;
      document.getElementById('dlPrev').onclick = function() { ci = (ci - 1 + images.length) % images.length; showLb(); };
      document.getElementById('dlNext').onclick = function() { ci = (ci + 1) % images.length; showLb(); };
      lightbox.onclick = function(e) { if (e.target === lightbox) cleanup(); };
    });
  }

  function initHeader() {
    var header = document.getElementById('header');
    var hamburger = document.getElementById('hamburger');
    var nav = document.getElementById('headerNav');
    var overlay = document.getElementById('mobileOverlay');

    function handleScroll() { if (window.scrollY > 60) header.classList.add('scrolled'); else header.classList.remove('scrolled'); }
    handleScroll();
    window.addEventListener('scroll', handleScroll);

    if (hamburger && nav) {
      function closeMenu() { hamburger.classList.remove('active'); nav.classList.remove('open'); if (overlay) overlay.classList.remove('open'); document.body.style.overflow = ''; }
      hamburger.addEventListener('click', function() {
        var isOpen = nav.classList.contains('open');
        if (isOpen) closeMenu();
        else { hamburger.classList.add('active'); nav.classList.add('open'); if (overlay) overlay.classList.add('open'); document.body.style.overflow = 'hidden'; }
      });
      if (overlay) overlay.addEventListener('click', closeMenu);
      nav.querySelectorAll('a').forEach(function(a) { a.addEventListener('click', closeMenu); });
    }
  }

  function initHeroParallax() {
    var hero = document.getElementById('hero');
    var heroBg = document.getElementById('heroBg');
    if (!hero || !heroBg) return;
    window.addEventListener('scroll', function() {
      var scrollY = window.scrollY;
      var heroHeight = hero.offsetHeight;
      if (scrollY <= heroHeight) heroBg.style.transform = 'translateY(' + (scrollY * 0.4) + 'px) scale(1.05)';
    });
  }

  function initHeroCursor() {
    var hero = document.getElementById('hero');
    var overlay = document.querySelector('.hero-overlay');
    if (!hero || !overlay) return;
    hero.addEventListener('mousemove', function(e) {
      var rect = hero.getBoundingClientRect();
      var x = (e.clientX - rect.left) / rect.width;
      var y = (e.clientY - rect.top) / rect.height;
      overlay.style.background = 'radial-gradient(ellipse at ' + (x * 100) + '% ' + (y * 100) + '%, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.5) 70%)';
    });
  }

  function initGalleryLightbox() {
    var grid = document.getElementById('galleryGrid');
    if (!grid) return;
    var lightbox = document.getElementById('lightbox');
    var lbImg = document.getElementById('lightboxImage');
    var closeBtn = document.getElementById('lightboxClose');
    var prevBtn = document.getElementById('lightboxPrev');
    var nextBtn = document.getElementById('lightboxNext');
    if (!lightbox) return;

    var currentImages = [];
    var currentIndex = 0;

    function showImage() { if (currentImages.length > 0) lbImg.src = currentImages[currentIndex]; }
    function openLightbox(images, idx) { currentImages = images; currentIndex = idx; showImage(); lightbox.classList.add('open'); document.body.style.overflow = 'hidden'; }

    grid.addEventListener('click', function(e) {
      var item = e.target.closest('.gallery-item');
      if (item) {
        var imgs = [];
        grid.querySelectorAll('.gallery-item img').forEach(function(img) { imgs.push(img.src); });
        openLightbox(imgs, parseInt(item.dataset.index));
      }
    });

    if (closeBtn) closeBtn.addEventListener('click', function() { lightbox.classList.remove('open'); document.body.style.overflow = ''; });
    if (prevBtn) prevBtn.addEventListener('click', function() { currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length; showImage(); });
    if (nextBtn) nextBtn.addEventListener('click', function() { currentIndex = (currentIndex + 1) % currentImages.length; showImage(); });
    lightbox.addEventListener('click', function(e) { if (e.target === lightbox) { lightbox.classList.remove('open'); document.body.style.overflow = ''; } });
    document.addEventListener('keydown', function(e) {
      if (!lightbox.classList.contains('open')) return;
      if (e.key === 'Escape') { lightbox.classList.remove('open'); document.body.style.overflow = ''; }
      else if (e.key === 'ArrowLeft' && prevBtn) prevBtn.click();
      else if (e.key === 'ArrowRight' && nextBtn) nextBtn.click();
    });
  }

  function initContactForm() {
    var form = document.getElementById('contactForm');
    if (!form) return;
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      var btn = form.querySelector('button[type="submit"]');
      btn.textContent = 'Thank You';
      btn.style.background = '#C9A84C';
      setTimeout(function() { btn.textContent = 'Request Appointment'; btn.style.background = ''; form.reset(); }, 3000);
    });
  }

  function initNewsletter() {
    document.querySelectorAll('.footer-newsletter').forEach(function(container) {
      var btn = container.querySelector('button');
      var input = container.querySelector('input');
      btn.addEventListener('click', function() {
        if (input.value.trim()) { btn.textContent = 'Subscribed'; btn.style.background = '#C9A84C'; setTimeout(function() { btn.textContent = 'Subscribe'; btn.style.background = ''; input.value = ''; }, 3000); }
      });
    });
  }

  function initSmoothAnchors() {
    document.querySelectorAll('a[href^="#/"]').forEach(function(a) {
      a.addEventListener('click', function(e) {
        e.preventDefault();
        var hash = a.getAttribute('href').slice(1);
        window.location.hash = hash;
      });
    });
    document.querySelectorAll('a[href^="#"]:not([href^="#/"])').forEach(function(a) {
      a.addEventListener('click', function(e) {
        var target = document.querySelector(a.getAttribute('href'));
        if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
      });
    });
  }

  function initProductCardClicks() {
    document.querySelectorAll('.product-card').forEach(function(card) {
      card.addEventListener('click', function(e) {
        if (e.target.closest('.product-card-wishlist, .product-wishlist-btn')) return;
        var id = card.dataset.id;
        if (id) { window.location.hash = '#/product/' + id; }
      });
    });
  }

  function initWishlistButtons() {
    document.querySelectorAll('.product-card-wishlist, .product-wishlist-btn').forEach(function(btn) {
      btn.removeEventListener('click', handleWishlistClick);
      btn.addEventListener('click', handleWishlistClick);
    });
  }

  function handleWishlistClick(e) {
    e.stopPropagation();
    var id = this.dataset.productId;
    if (id) { toggleWishlist(id); showWishlistToast(id); }
  }

  function showWishlistToast(id) {
    var liked = isInWishlist(id);
    var toast = document.createElement('div');
    toast.style.cssText = 'position:fixed;bottom:30px;left:50%;transform:translateX(-50%);background:#1A1A1A;color:#fff;padding:14px 32px;font-family:Inter,sans-serif;font-size:0.8rem;letter-spacing:1px;z-index:9999;opacity:0;transition:opacity 0.4s ease;border:1px solid rgba(201,168,76,0.3);text-transform:uppercase';
    toast.textContent = liked ? '\u2665 Added to Wishlist' : '\u2661 Removed from Wishlist';
    document.body.appendChild(toast);
    requestAnimationFrame(function() { toast.style.opacity = '1'; });
    setTimeout(function() { toast.style.opacity = '0'; setTimeout(function() { toast.remove(); }, 400); }, 2000);
  }

  function router() {
    var hash = window.location.hash.slice(1) || '/';
    document.getElementById('mainContent').innerHTML = '';
    window.scrollTo(0, 0);
    setTimeout(function() { window.scrollTo(0, 0); }, 10);

    if (hash === '/' || hash === '') { renderHome(); }
    else if (hash.indexOf('/collection/') === 0) { renderCollection(hash.split('/collection/')[1]); }
    else if (hash.indexOf('/product/') === 0) { renderProductDetail(hash.split('/product/')[1]); }
    else if (hash.indexOf('=') > -1) {
      var params = new URLSearchParams(hash.replace('?', ''));
      if (params.get('id')) { renderProductDetail(params.get('id')); }
      else if (params.get('collection')) { renderCollection(params.get('collection')); }
      else { renderHome(); }
    }
    else { renderHome(); }

    setTimeout(function () {
      initNewsletter();
      updateWishlistUI();
    }, 100);
  }

  document.addEventListener('DOMContentLoaded', function () {
    if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
    initHeader();
    initSmoothAnchors();
    router();
    window.addEventListener('hashchange', router);
  });

})();
