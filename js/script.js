document.addEventListener('DOMContentLoaded', function () {

  
    // inputmask - Телефон/forms
    const formJs = document.querySelector('.form_js');
    if (formJs) { // Обёртка if. Спасение Gulp-а от null в браузере
      const telSelector = formJs.querySelector('input[type="tel"]');
      const inputMask = new Inputmask('+7 999 999 99 99');
      inputMask.mask(telSelector);
  
      // const validateForms = function validateForms(form, selector, successModal, yaGoal) {
      new window.JustValidate('.form_js', {
        rules: {
          name: {
            required: true,
            minLength: 2,
            maxLenght: 10,
            strength: {
              custom: '^[А-яёЁ\s-]' //только по русски текст
              //custom: '^[а-яёЁ\s]+$'только по русски и маленькими буквами
              //custom: '^[a-yeO\s]+$'только по английски текст
            }
          },
          tel: {
            required: true,
            function: () => {
              const phone = telSelector.inputmask.unmaskedvalue();
              return Number(phone) && phone.length === 10;
            }
          },
          checkbox: { // Обязательная галка
            required: true
          }
        },
        colorWrong: '#ff6972',
        messages: {
          name: {
            required: 'Введите ваше имя',
            minLength: 'Введите 3 и более символов',
            maxLength: 'Запрещено вводить более 15 символов',
            strength: 'Текст только по русски'
            //strength: 'Текст только по русски и маленькими буквами'
            //strength: 'Текст только по английски'
          },
          // email: {
          //   email: 'Недопустимый формат',
          //   required: 'Введите email'
          // },
          tel: {
            required: 'Введите ваш телефон',
            function: 'Здесь должно быть 11 симв..'
          },
          text: {
            required: 'Пару инфы о заказе',
            minLength: 'Введите 15 и более символов',
            maxLength: 'Запрещено вводить более 1000 символов'
          },
          checkbox: {
            required: 'Поставьте галочку',
            function: 'Здесь должна быть галка'
          }
        },
  
        //*отправка формы*/
        submitHandler: function (thisForm) {
          let formData = new FormData(thisForm);
          let xhr = new XMLHttpRequest();
  
          xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
              if (xhr.status === 200) {
                console.log('Отправлено');
              } //if xhr
            }
          }
  
          xhr.open('POST', 'mail.php', 'list.php', true);//
          xhr.send(formData);
          thisForm.reset();
          document.querySelector('.modal_js').classList.toggle('modal_js_active');
          document.querySelector('.modal__sps_js').classList.toggle('modal__sps_js_active');
        }
      })
    }
  
    
  
    // Плавный скролл по якорям. В любое место можно кинуть.
    const smoothLinks = document.querySelectorAll('a[href^="#"]');
    for (let smoothLink of smoothLinks) {
      smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');
  
        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
      });
    };
  
    
    
   
  
  
  });