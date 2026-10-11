document.addEventListener('DOMContentLoaded', () => {
    const productList = document.getElementById('product-list');
    
    // Updated with all 12 exact image filenames provided by the user. 
    // Added 'image/' before the filename to account for the new folder.
    const products = [
        { id: 1, title: 'ProDentim', description: 'Oral probiotic for gum health and microbiome balance.', url: 'https://225f3locyfwras2nsbk2tdrg31.hop.clickbank.net', image: 'image/ProDentim.jpg' },
        { id: 2, title: 'Kerassentials', description: 'Topical drops for nail and foot fungus.', url: 'https://18d77jqg0jyn1r0glbig7cqsbz.hop.clickbank.net', image: 'image/Kerassentials.jpg' },
        { id: 3, title: 'Joint Genesis', description: 'Joint mobility formula for restoring synovial fluid.', url: 'https://7ff05sio29sv5u9ip5rpw4or98.hop.clickbank.net', image: 'image/Joint Genesis.jpg' },
        { id: 4, title: 'FemiCore', description: 'Pelvic floor support supplement targeting women 45+.', url: 'https://hop.clickbank.net/?affiliate=zestorx&vendor=femicore&cbpage=tsl&affop=1', image: 'image/FemiCore.jpg' },
        { id: 5, title: 'Audifort', description: 'Hearing and auditory nerve support supplement.', url: 'https://9b437nlp5k2j3qa28cw4weur5g.hop.clickbank.net', image: 'image/Audifort.jpg' },
        { id: 6, title: 'PhytoMem', description: 'Cognitive support and memory enhancement.', url: 'https://86be0qto0h1vap2hiw7g19npb8.hop.clickbank.net', image: 'image/Phytomem One.jpg' },
        { id: 7, title: 'Pineal Guardian', description: 'Specific supplement targeting pineal gland decalcification.', url: 'https://ae055xrlzm0t0oennerb66tx0k.hop.clickbank.net', image: 'image/Pineal Guardian X Botanical Supplement Halo.jpg' },
        { id: 8, title: 'ProstaVive', description: 'Liquid wellness drop for general vitality.', url: 'https://e9bd1qlnu93i5w4j6ex4z42wco.hop.clickbank.net', image: 'image/ProstaVive Herbal Supplement Showcase.jpg' },
        { id: 9, title: 'Visiflora', description: 'Niche supplement focused on balancing internal flora.', url: 'https://b00advic1a2w3n1pngq2-836dn.hop.clickbank.net', image: 'image/Visiflora Vision and Gut Support.jpg' },
        { id: 10, title: 'Java Burn', description: 'Metabolism-boosting powder mixed into coffee.', url: 'https://bba0csuo5nvl9r09fonzzjys9n.hop.clickbank.net', image: 'image/Java Burn.jpg' },
        { id: 11, title: 'Tea Burn', description: 'Thermogenic fat-burning powder for tea.', url: 'https://36470lke8euu6v5dr5dl-e3qcx.hop.clickbank.net', image: 'image/TEA BURN Metabolism Blend.jpg' },
        { id: 12, title: 'All Day Slimming Tea', description: 'A daily herbal tea blend marketed to support metabolism, energy, and digestion.', url: 'https://391f0kod6mxofnfvuj-hvg61nm.hop.clickbank.net', image: 'image/tea.jpg' }
    ];

    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.title} image" onerror="this.onerror=null; this.parentNode.innerHTML='[ Image Not Found: ' + this.src.split('/').pop() + ' ]';">
            </div>
            <h3>${product.title}</h3>
            <p>${product.description}</p>
            <a href="${product.url}" target="_blank" rel="noopener noreferrer" class="btn-view">View Product</a>
        `;
        productList.appendChild(card);
    });

    // Handle E-book Form Automation
    const ebookForm = document.getElementById('ebook-form');
    const formMessage = document.getElementById('form-message');
    const submitBtn = ebookForm.querySelector('button[type="submit"]');

    ebookForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const emailInput = document.getElementById('email').value;
        
        // Show loading state
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;

        // Functional Google Apps Script Web App URL
        const scriptURL = 'https://script.google.com/macros/s/AKfycby7Vf5dQJyqHWx2bH-xaILIT0m7HStM_WbpPexDLsip2gk_b1l2N4haPprXc5qubACJ/exec';
        
        const formData = new FormData();
        formData.append('email', emailInput);

        fetch(scriptURL, { 
            method: 'POST', 
            body: formData 
        })
        .then(response => {
            // Hide form and show success message
            ebookForm.style.display = 'none';
            formMessage.classList.remove('hidden');
        })
        .catch(error => {
            console.error('Error!', error.message);
            submitBtn.textContent = 'Send My Free E-Book';
            submitBtn.disabled = false;
            alert('There was an error sending your request. Please try again.');
        });
    });

    // Modals for Privacy Policy and Terms & Conditions
    const modal = document.getElementById('modal');
    const closeBtn = document.querySelector('.close-btn');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');

    const privacyText = `
        <h3>Information We Collect</h3>
        <p>When you sign up for our e-book, we collect your email address. We store this securely in our spreadsheet to send you updates and newsletters.</p>
        <br>
        <h3>How We Use It</h3>
        <p>Your email is strictly used for sending the e-book and related health content. We do not sell your data.</p>
    `;

    const termsText = `
        <h3>Affiliate Disclosure</h3>
        <p>The products listed on this site are affiliate links. If you click "View Product" and make a purchase on the external site, we may earn a commission at no additional cost to you.</p>
        <br>
        <h3>Disclaimer</h3>
        <p>The information on Longetivity Living is for educational purposes and should not replace professional medical advice. Always consult a physician before starting any new supplement.</p>
    `;

    document.getElementById('btn-privacy').addEventListener('click', () => {
        modalTitle.textContent = 'Privacy Policy';
        modalBody.innerHTML = privacyText;
        modal.style.display = 'block';
    });

    document.getElementById('btn-terms').addEventListener('click', () => {
        modalTitle.textContent = 'Terms & Conditions';
        modalBody.innerHTML = termsText;
        modal.style.display = 'block';
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target == modal) {
            modal.style.display = 'none';
        }
    });
});
