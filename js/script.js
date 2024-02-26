document.addEventListener('DOMContentLoaded', function() {


  //*1.Селект(Выбор) в codepen-е. Здесь два селекта объединили в один код с помощью переменных(const)*//
  //Селект 9:00 AM - 5:30 PM
  const citySelect = () => {
    const element = document.querySelector('.header__time-select');
      const choices = new Choices(element, {
        searchEnabled: false,//убирает Ентер*/
        /*работает если отключить searchEnabled: false. будет поиск по селекту*/
        noResultsText: 'Ничего не найдено'
      }); 
  };
  
  citySelect();


  /*Клик БУРГЕР*/
  document.querySelector('.burger').addEventListener('click', function(){
    document.querySelector('.burger span').classList.toggle('active');
    document.querySelector('.menu').classList.toggle("animate");
  });



  /*Открываем лупу-поиск*/  
  document
  .querySelector(".header__search-icon")
  .addEventListener("click", function () {
    document.querySelector(".header__search-input").style.display =
      "inline";
    document.querySelector(".header__close-icon").style.display =
      "inline";
    // document.querySelector(".header__search-icon").style.right =
    //   "79px";  
  });

  /*Закрываем лупу-поиск крестом*/  
  document
  .querySelector(".header__close-icon")
  .addEventListener("click", function () {
    document.querySelector(".header__search-input").style.display =
      "none";
    document.querySelector(".header__close-icon").style.display =
      "none";
    // document.querySelector(".header__search-icon").style.right =
    //   "9px";   
  });
  
 



  // Плавный скролл по якорям. В любое место можно кинуть.
  const smoothLinks = document.querySelectorAll('a[href^="#"]');
  for (let smoothLink of smoothLinks) {
      smoothLink.addEventListener('click', function(e) {
          e.preventDefault();
          const id = smoothLink.getAttribute('href');

          document.querySelector(id).scrollIntoView({
              behavior: 'smooth',
              block: 'start'
          });
      });
  };


});