const burger = document.getElementById("burger");
  const navbar = document.getElementById("navbar");
  const overlay = document.getElementById("overlay");

  burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });

  overlay.addEventListener("click", () => {
    burger.classList.remove("active");
    navbar.classList.remove("active");
    overlay.classList.remove("active");
  });

  document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');

    form.addEventListener('submit', (event) => {
    
        event.preventDefault();

        const formData = new FormData(form);
        const data = {};

        formData.forEach((value, key) => {

            if (data[key]) {
                if (!Array.isArray(data[key])) {
                    data[key] = [data[key]];
                }
                data[key].push(value);
            } else {
                data[key] = value;
            }
        });

        const catName = formData.get('cat-name');
        const email = formData.get('email');

        if (!email) {
            alert('Пожалуйста, укажите E-mail владельца');
            return;
        }

        console.log('Данные котика готовы к отправке:', data);
        
        alert(`Спасибо! Заявка для кота по имени ${data['cat-name'] || 'Барсик'} отправлена.`);
    });
});