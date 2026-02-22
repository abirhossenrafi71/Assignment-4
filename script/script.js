const deleteButtons = document.querySelectorAll(".btn-delete");
deleteButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const card = button.closest(".job-card");
        card.remove();
    });
});