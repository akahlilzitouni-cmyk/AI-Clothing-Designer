let cart = JSON.parse(localStorage.getItem("cart")) || [];

// إضافة للسلة
function addToCart(name, price) {
  cart.push({name, price});
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("تمت إضافة المنتج");
}

// عرض الطلب
if (document.getElementById("orderDetails")) {
  let text = "";
  let total = 0;

  cart.forEach(item => {
    text += `- ${item.name} : ${item.price} دج\n`;
    total += item.price;
  });

  text += `\nالمجموع: ${total} دج`;
  document.getElementById("orderDetails").value = text;
}

// إرسال الطلب عبر واتساب
document.getElementById("orderForm")?.addEventListener("submit", function(e){
  e.preventDefault();

  let name = this.querySelectorAll("input")[0].value;
  let phone = this.querySelectorAll("input")[1].value;
  let address = this.querySelectorAll("input")[2].value;
  let order = document.getElementById("orderDetails").value;

  let message = `
🛍️ طلب جديد
الاسم: ${name}
الهاتف: ${phone}
العنوان: ${address}

📦 الطلب:
${order}
  `;

  let whatsappNumber = "213668086810"; // رقمك صحيح 👍
  let url = "https://wa.me/" + whatsappNumber + "?text=" + encodeURIComponent(message);

  window.open(url, "_blank");
});