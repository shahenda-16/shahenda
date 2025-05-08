// عرض رسالة داخل الصفحة
document.addEventListener("DOMContentLoaded", function () {
    const messageDiv = document.createElement("div");
    messageDiv.innerHTML = "مرحبًا بك في عالم الطيران!";
    messageDiv.style.color = "darkblue";
    messageDiv.style.fontSize = "20px";
    messageDiv.style.textAlign = "center";
    document.body.prepend(messageDiv);

    // نافذة تنبيه
    alert("أهلاً بك! استعد للانطلاق في جولة عبر الطيران.");

    // الحصول على عنصر من المستند وتغيير لونه
    const heading = document.getElementById("gallery");
    heading.style.color = "green";

    // إنشاء زر ديناميكياً
    const button = document.createElement("button");
    button.innerText = "اضغط لمفاجأة";
    button.style.padding = "10px 20px";
    button.style.margin = "20px auto";
    button.style.display = "block";
    button.style.cursor = "pointer";
    document.body.appendChild(button);

    // حركة عند الضغط على الزر
    button.addEventListener("click", () => {
        const flyingText = document.createElement("div");
        flyingText.innerText = "انطلقت الطائرة!";
        flyingText.className = "fly-text";
        document.body.appendChild(flyingText);
    });
});
// حركة الطائرة عند التمرير
window.addEventListener("scroll", () => {
    document.body.classList.add("scrolled");
    setTimeout(() => {
        document.body.classList.remove("scrolled");
    }, 6000); // تُعيد الوضع الطبيعي بعد الطيران
});

// تحريك الصور تلقائياً في المعرض
document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".gallery img");
    let index = 0;

    function showNextImage() {
        images.forEach(img => img.classList.remove("active"));
        images[index].classList.add("active");
        index = (index + 1) % images.length;
    }

    showNextImage(); // عرض أول صورة
    setInterval(showNextImage, 3000); // تغيير الصورة كل 3 ثوانٍ
});