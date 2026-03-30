document.addEventListener('DOMContentLoaded', () => {

    // === VENDEDORES DE CONFIANZA ===
    const vendedoresConfianza = [
        { name: "Gustavo", linkWa: "https://wa.me/+5493584243017", linkTienda: "#PONER_LINK_AQUI", imagenTienda: "" },

        { 
            name: "Federico F Torres",linkWa: "https://wa.me/+5492657219227",linkTienda: "#PONER_LINK_AQUI", 
            imagenTienda: "img/logoft.png" 
        },

        { name: "Franco Rivero", linkWa: "https://wa.me/+5493856183712", linkTienda: "#PONER_LINK_AQUI", imagenTienda: "" },
        { name: "Leila", linkWa: "https://wa.me/+5493412810132", linkTienda: "#PONER_LINK_AQUI", imagenTienda: "" },
        { name: "Erico", linkWa: "https://wa.me/+5493757618408", linkTienda: "#PONER_LINK_AQUI", imagenTienda: "" },
        { name: "Rulo", linkWa: "https://wa.me/+5491154767460", linkTienda: "#PONER_LINK_AQUI", imagenTienda: "" },
        { name: "Eli", linkWa: "https://wa.me/+5491123443298", linkTienda: "#PONER_LINK_AQUI", imagenTienda: "img/logoeli.jpg" },
        { name: "Luis", linkWa: "https://wa.me/+5491171104707", linkTienda: "#PONER_LINK_AQUI", imagenTienda: "img/logola.jpg" },
    ];

    // === PROVEEDORES VERIFICADOS 2 ===
    const proveedoresVerificados2 = [
        { name: "Cuervo Store", linkWa: "https://wa.me/message/HQ4DLAV7IGZEE1", linkTienda: "#PONER_LINK_AQUI", imagenTienda: "img/logocs.jpg" },
        { name: "Leonel", linkWa: "https://wa.me/5493777844725", linkTienda: "#PONER_LINK_AQUI", imagenTienda: "img/logotl.jpg" },
        { name: "Mile Almiron", linkWa: "https://wa.me/+5493624110890", linkTienda: "#PONER_LINK_AQUI", imagenTienda: "" },
        { name: "Víctor 99", linkWa: "https://wa.me/message/VPZ3NL7TISPRL1", linkTienda: "#PONER_LINK_AQUI", imagenTienda: "" }
    ];

    function createSellerCards(containerId, sellersList) {
        const container = document.getElementById(containerId);

        sellersList.forEach((seller, index) => {
            const card = document.createElement('div');
            card.className = 'seller-card glass-reveal';
            card.style.transitionDelay = `${index * 0.1}s`;

            const avatarHtml = seller.imagenTienda && seller.imagenTienda !== "" 
                ? `<img src="${seller.imagenTienda}" alt="${seller.name}" 
                    onerror="this.outerHTML='<i class=\\'fa-solid fa-store\\'></i>';">`
                : `<i class="fa-solid fa-store"></i>`;

            card.innerHTML = `
                <div class="seller-avatar">
                    ${avatarHtml}
                </div>
                <h3 class="seller-name">${seller.name}</h3>
                <div class="card-actions">
                    <a href="${seller.linkTienda}" target="_blank" class="btn btn-store">
                        <i class="fa-solid fa-shop"></i> Visitar Tienda
                    </a>
                    <a href="${seller.linkWa}" target="_blank" class="btn btn-wa">
                        <i class="fa-brands fa-whatsapp"></i> WhatsApp
                    </a>
                </div>
            `;

            container.appendChild(card);
        });
    }

    createSellerCards('vendedores-confianza', vendedoresConfianza);
    createSellerCards('proveedores-verificados-2', proveedoresVerificados2);

    // Animación scroll
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    });

    document.querySelectorAll('.glass-reveal').forEach(el => observer.observe(el));
});