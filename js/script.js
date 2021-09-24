/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

document.addEventListener('DOMContentLoaded', () => {

    const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
    };

    const Adv = document.querySelectorAll('.promo__adv img'),
        gener = document.querySelector('.promo__genre'),
        fon = document.querySelector('.promo__bg'),
        filmList = document.querySelector('.promo__interactive-list'),
        formInput = document.querySelector('form.add'),
        addInput = formInput.querySelector(".adding__input"),
        checkbox = formInput.querySelector('[type = "checkbox"]');


    Adv.forEach(item  =>{
        item.remove();
    });
   
    gener.textContent = 'ДРАМА';
    fon.style.backgroundImage = `url('img/bg.jpg')`;
      
    formInput.addEventListener('submit', (e) =>{
        e.preventDefault();
    let filmNew = addInput.value;
    const lovelyFilm = checkbox.checked;

        if (filmNew) {
            if (filmNew.length >21) {
                filmNew = `${filmNew.substring(0, 22)} ...`;
            }

            if (lovelyFilm) {
                console.log('ok');
            }
            movieDB.movies.push(filmNew);
            sortArr(movieDB.movies);
            createML(movieDB.movies, filmList);
        }
       
        //formInput.reset();
        e.target.reset();
    });

        const sortArr = (arr) => {
        arr.sort();
    };

    function createML(films, parent) {

        parent.innerHTML = '';
        sortArr(films);

        films.forEach( (film, i ) =>{
            parent.innerHTML += `<li class="promo__interactive-item"> ${i+1}. ${film}
                <div class="delete"></div>
            </li>`;
        });

        document.querySelectorAll('.delete').forEach ((batton, i) =>{
            batton.addEventListener('click', (ev)=>{
                batton.parentElement.remove();
                movieDB.movies.splice(i, 1);  
                createML(films, parent);

            });
        });
  }
   
    });
