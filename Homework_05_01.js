/*
Поиск элементов

Вот документ с таблицей и формой.

Как найти?…

1) Таблицу с id="age-table".
2) Все элементы label внутри этой таблицы (их три).
3) Первый td в этой таблице (со словом «Age»).
4) Форму form с именем name="search".
5) Первый input в этой форме.
6) Последний input в этой форме.

Откройте страницу table.html в отдельном окне и используйте для этого браузерные инструменты разработчика.

*/

console.log(document.getElementById('age-table'));

console.log(document.querySelectorAll('table label'));

console.log(document.querySelectorAll('table td')[0]);

console.log(document.getElementsByName('search')[0]);

const nodes = document.getElementsByName('search')[0].childNodes;

const firstInput = document.querySelectorAll('form[name="search"] input[name="search"]')[0];

console.log(firstInput);

const lastInput = document.querySelectorAll('form[name="search"] input[value="Search!"]')[0];

console.log(lastInput);

/*
Тег в комментарии

Что выведет этот код?

<script>
  let body = document.body;

  body.innerHTML = "<!--" + body.tagName + "-->";

  alert( body.firstChild.data ); // что выведет?
</script>
*/

let body = document.body;

body.innerHTML = "<!--" + body.tagName + "-->";

alert( body.firstChild.data );

// Ответ: Этот код выведет строку "BODY" - имя тега body.tagName в комментарии: "<!--BODY-->" 
// текстового узла firstChild элемента body