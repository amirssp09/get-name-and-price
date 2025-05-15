function extractProducts() {
    const products = [];
    // المنت‌های محصول در دیجی‌کالا
    const productCards = document.querySelectorAll("article");

    productCards.forEach(card => {
        const nameElement = card.querySelector("h3");//در دیجی کالا نام محصولات با h3 نوشته شده است در هر سایت این متغیر است
        const priceElement = card.querySelector("span[data-testid='price-final']");//در دیجی کالا قیمت محصولات در اسپن و با این ادرس قابل دریافت است در هر سایت متغیر است

        if (nameElement && priceElement) {
            const name = nameElement.textContent.trim();
            const price = priceElement.textContent.trim();

            products.push({ name, price });
        }
    });
    return products;
}

setTimeout(() => {
    const data = extractProducts();
    console.log("محصولات دیجی‌کالا:", data);
}, 5000); // 5 ثانیه صبر میکنیم