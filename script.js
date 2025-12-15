/* ====== السلة ====== */
let cart = JSON.parse(localStorage.getItem("cart")) || [];

/* تحديث عدد السلة */
function updateCartCount(){
  const el = document.getElementById("cartCount");
  if(el) el.textContent = cart.length;
}
updateCartCount();

/* إضافة منتج */
function addToCart(name, price){
  cart.push({name, price});
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  alert("✔️ تمت إضافة المنتج إلى السلة");
}

/* عرض الطلبات في checkout */
function loadOrder(){
  const box = document.getElementById("orderDetails");
  if(!box) return;

  let text = "";
  let total = 0;

  if(cart.length === 0){
    box.value = "السلة فارغة";
    return;
  }

  cart.forEach((item, i) => {
    text += `${i+1}- ${item.name} | ${item.price} دج\n`;
    total += item.price;
  });

  text += `\n💰 المجموع: ${total} دج`;
  box.value = text;
}

/* إرسال الطلب */
document.getElementById("orderForm")?.addEventListener("submit", function(e){
  e.preventDefault();

  if(cart.length === 0){
    alert("❌ السلة فارغة");
    return;
  }

  const name = this.querySelector("input[placeholder='الاسم الكامل']").value;
  const phone = this.querySelector("input[placeholder='رقم الهاتف']").value;
  const address = this.querySelector("input[placeholder='العنوان']").value;
  const state = document.getElementById("state").value;

  if(!state){
    alert("❗ اختر الولاية");
    return;
  }

  let order = "";
  let total = 0;

  cart.forEach(i=>{
    order += `- ${i.name} (${i.price} دج)\n`;
    total += i.price;
  });

  let msg = `🛍️ طلب جديد
👤 الاسم: ${name}
📞 الهاتف: ${phone}
📍 الولاية: ${state}
🏠 العنوان: ${address}

📦 الطلب:
${order}

💰 المجموع: ${total} دج`;

  window.open(
    "https://wa.me/213668086810?text=" + encodeURIComponent(msg),
    "_blank"
  );

  localStorage.removeItem("cart");
});

/* تحميل الطلب عند فتح الصفحة */
loadOrder();
