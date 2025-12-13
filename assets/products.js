// هذه الصور سيتم إنشاؤها تلقائيًا كألوان افتراضية
const products = [
    {name: "shirt1.jpg", title: "تيشيرت 1", description: "تصميم عصري وراقي", color: "#ff0000"},
    {name: "shirt2.jpg", title: "تيشيرت 2", description: "تصميم جديد ومميز", color: "#0000ff"},
    {name: "shirt3.jpg", title: "تيشيرت 3", description: "راحة وأناقة في نفس الوقت", color: "#00ff00"}
];

const container = document.getElementById('products-container');

products.forEach(product => {
    const div = document.createElement('div');
    div.className = 'product';
    
    // إنشاء صورة افتراضية باستخدام canvas
    const canvas = document.createElement('canvas');
    canvas.width = 200;
    canvas.height = 200;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = product.color;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // تحويل canvas إلى صورة
    const img = document.createElement('img');
    img.src = canvas.toDataURL('image/jpeg');
    img.alt = product.title;

    div.appendChild(img);

    const h3 = document.createElement('h3');
    h3.textContent = product.title;
    div.appendChild(h3);

    const p = document.createElement('p');
    p.textContent = product.description;
    div.appendChild(p);

    const button = document.createElement('button');
    button.textContent = "اشتري الآن";
    div.appendChild(button);

    container.appendChild(div);
});
