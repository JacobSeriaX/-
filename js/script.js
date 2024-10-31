document.getElementById('order-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Получаем значения из формы
    const size = document.getElementById('size').value;
    const quantity = document.getElementById('quantity').value;
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;

    // Проверка заполненности полей (можно добавить дополнительные проверки)
    if(size === "" || quantity === "" || name === "" || phone === "") {
        document.getElementById('message').textContent = "Пожалуйста, заполните все поля.";
        document.getElementById('message').style.color = "red";
        return;
    }

    // Формируем данные для EmailJS
    const templateParams = {
        size: size,
        quantity: quantity,
        name: name,
        phone: phone
    };

    // Отправка письма через EmailJS
    emailjs.send('service_kgy1daa', 'template_enwfc97', templateParams)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            document.getElementById('message').textContent = "Ваш заказ успешно оформлен!";
            document.getElementById('message').style.color = "green";
            document.getElementById('order-form').reset();
        }, function(error) {
            console.log('FAILED...', error);
            document.getElementById('message').textContent = "Произошла ошибка при отправке заказа. Пожалуйста, попробуйте позже.";
            document.getElementById('message').style.color = "red";
        });
});
