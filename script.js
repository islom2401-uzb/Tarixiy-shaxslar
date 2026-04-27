// Sahifa yuklanganda avtomatik "Ortga" tugmasini qo'shadi
document.addEventListener("DOMContentLoaded", function() {
    // Agar bu asosiy sahifa (index.html) bo'lmasa, tugmani qo'sh
    if (!window.location.pathname.endsWith("index.html") && window.location.pathname !== "/") {
        let backBtn = document.createElement("a");
        backBtn.innerHTML = "← Ortga qaytish";
        backBtn.href = "javascript:history.back()";
        backBtn.className = "back-button";
        
        // Tugmani sahifaning eng tepasiga, body ichiga qo'shish
        document.body.prepend(backBtn);
    }
});