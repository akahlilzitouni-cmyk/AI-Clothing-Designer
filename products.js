// أضف هنا أسماء جميع الصور في مجلد assets
const products = [
    {name: "shirt1.jpg", title: "تيشيرت 1", description: "تصميم عصري وراقي"},
    {name: "shirt2.jpg", title: "تيشيرت 2", description: "تصميم جديد ومميز"},
    {name: "shirt3.jpg", title: "تيشيرت 3", description: "راحة وأناقة في نفس الوقت"}
];

const container = document.getElementById('products-container');

products.forEach(product => {
    const div = document.createElement('div');
    div.className = 'product';
    div.innerHTML = `
        <img src="./assets/${product.name}" alt="${product.title}">
        <h3>${product.title}</h3>
        <p>${product.description}</p>
        <button>اشتري الآن</button>
    `;
    container.appendChild(div);
});
