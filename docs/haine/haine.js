// --- JavaScript Code (script.js) ---

let allProducts = [];

// --- Data Fetching and Initial Setup ---
Promise.all([
    fetch("essentials.json").then(res => {
        if (!res.ok) { throw new Error(`HTTP error! status: ${res.status}`); }
        return res.json();
    }),
    fetch("denim.json").then(res => {
        if (!res.ok) { throw new Error(`HTTP error! status: ${res.status}`); }
        return res.json();
    }),
    fetch("puma.json").then(res => {
        if (!res.ok) { throw new Error(`HTTP error! status: ${res.status}`); }
        return res.json();
    })
]).then(([essentialsData, denimData, pumaData]) => {
    // Corectare denumire camp de la 'image' la 'images' daca e necesar
    // Sau lasa asa daca in JSON chiar e 'image'. Eu presupun ca e 'image' dupa discutia anterioara.
    // Daca in JSON e 'images', schimba p.image in p.images mai jos.
    const normalizeImages = (product) => {
        if (Array.isArray(product.images)) { // <-- Schimba aici in 'images' daca e cazul
            return product.images; // <-- Schimba aici in 'images' daca e cazul
        } else {
            return [];
        }
    };

    allProducts = [
        ...essentialsData.map(p => ({ ...p, images: normalizeImages(p) })), // <-- Asigura-te ca e 'images' sau 'image' consistent
        ...denimData.map(p => ({ ...p, images: normalizeImages(p) })),       // <-- Asigura-te ca e 'images' sau 'image' consistent
        ...pumaData.map(p => ({ ...p, images: normalizeImages(p) }))         // <-- Asigura-te ca e 'images' sau 'image' consistent
    ];

    console.log("Produse încărcate:", allProducts);

    populateDropdowns(allProducts);
    displayProducts(allProducts); // Afișează toate produsele inițial

    // --- Atașează event listenerii DOAR după ce datele sunt încărcate ---
    // Acum știm sigur că `allProducts` are datele și că `displayProducts` funcționează
    document.getElementById("brandDropdown").addEventListener("change", () => displayProducts(allProducts));
    document.getElementById("typeDropdown").addEventListener("change", () => displayProducts(allProducts));
    document.getElementById("colorDropdown").addEventListener("change", () => displayProducts(allProducts));
    // ---------------------------------------------------------------------

}).catch(error => {
    console.error("Eroare la încărcarea fișierelor JSON:", error);
    document.getElementById("productList").innerHTML = "<p>Eroare la încărcarea produselor. Verificați consola pentru detalii.</p>";
});

// Restul funcțiilor (populateDropdowns, displayProducts) rămân neschimbate
// ... (codul lor existent) ...

// --- Functions ---

/**
 * Populates the brand, type, and color dropdowns with unique values from the product list.
 * @param {Array} products - The list of products to extract values from.
 */
function populateDropdowns(products) {
    const brandDropdown = document.getElementById("brandDropdown");
    const typeDropdown = document.getElementById("typeDropdown");
    const colorDropdown = document.getElementById("colorDropdown");

    // Reset dropdowns (keep the first empty option)
    brandDropdown.innerHTML = '<option value="">-- Brand --</option>';
    typeDropdown.innerHTML = '<option value="">-- Tip --</option>';
    colorDropdown.innerHTML = '<option value="">-- Culoare --</option>';

    // Get unique values using Set
    const brands = [...new Set(products.map(p => p.brand).filter(Boolean))]; // Filter out undefined/null/empty strings
    const types = [...new Set(products.map(p => p.type).filter(Boolean))];
    const colors = [...new Set(products.map(p => p.color).filter(Boolean))];

    // Populate dropdowns
    brands.forEach(b => {
        const option = document.createElement("option");
        option.value = b;
        option.textContent = b;
        brandDropdown.appendChild(option);
    });

    types.forEach(t => {
        const option = document.createElement("option");
        option.value = t;
        option.textContent = t;
        typeDropdown.appendChild(option);
    });

    colors.forEach(c => {
        const option = document.createElement("option");
        option.value = c;
        option.textContent = c;
        colorDropdown.appendChild(option);
    });
}

/**
 * Filters and displays products based on selected dropdown values.
 * @param {Array} products - The full list of products to filter and display.
 */
function displayProducts(products) {
    const selectedBrand = document.getElementById("brandDropdown").value;
    const selectedType = document.getElementById("typeDropdown").value;
    const selectedColor = document.getElementById("colorDropdown").value;

    const productList = document.getElementById("productList");

    // Filtrare produse
    const filteredProducts = products.filter(p =>
        (selectedBrand === "" || p.brand === selectedBrand) &&
        (selectedType === "" || p.type === selectedType) &&
        (selectedColor === "" || p.color === selectedColor)
    );

    // Curățare lista de produse
    productList.innerHTML = "";

    // Mesaj dacă nu se găsesc produse
    if (filteredProducts.length === 0) {
        productList.innerHTML = "<p>Niciun produs găsit.</p>";
        return;
    }

    // Iterează prin produsele filtrate și generează HTML
    filteredProducts.forEach(p => {
        // Asigură-te că `p.images` este întotdeauna un array
        const images = Array.isArray(p.images) ? p.images : [];

        // Generează HTML-ul pentru imaginile produsului
        const imagesHtml = images.map(img => `
            <img src="${img}" 
                 alt="${p.brand} ${p.type}" 
                 onerror="this.onerror=null; this.src='placeholder.jpg';" 
                 style="width:100%; max-width:300px; margin-bottom:5px;">
        `).join("");

        // Generează cardul produsului
        const productCard = document.createElement("div");
        productCard.className = "product";
        productCard.innerHTML = `
            ${imagesHtml}
            <h3>${p.brand} - ${p.type}</h3>
            <p>Culoare: ${p.color}</p>
        `;
        // Adaugă cardul la lista de produse
        productList.appendChild(productCard);
    });
}

// The actual event listener attachment happens after data is successfully loaded.
// This is handled inside the Promise.all().then() block above.
// The logic there is correct: after data is loaded, attach listeners that use `allProducts`.