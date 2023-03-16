//задача 1
// let scrollBottom = elem.scrollHeight - elem.scrollTop - elem.clientHeight;

//задача 2
// let div = document.createElement('div');
// div.style.overflowY = 'scroll';
// div.style.width = '50px';
// div.style.height = '50px';
// document.body.append(div);
// let scrollWidth = div.offsetWidth - div.clientWidth;
// div.remove();
// alert(scrollWidth);

//задача 3
// ball.style.left = Math.round(field.clientWidth / 2 - ball.offsetWidth / 2) + 'px'
// ball.style.top = Math.round(field.clientHeight / 2 - ball.offsetHeight / 2) + 'px'

//задача 4
// clientWidth возвращает число, а getComputedStyle(elem).width – строку с px на конце.
// getComputedStyle не всегда даст ширину, он может вернуть, к примеру, "auto" для строчного элемента.
// clientWidth соответствует внутренней области элемента, включая внутренние отступы padding, а CSS-ширина (при стандартном значении box-sizing) соответствует внутренней области без внутренних отступов padding.
// Если есть полоса прокрутки, и для неё зарезервировано место, то некоторые браузеры вычитают его из CSS-ширины (т.к. оно больше недоступно для содержимого), а некоторые – нет. Свойство clientWidth всегда ведёт себя одинаково: оно всегда обозначает размер за вычетом прокрутки, т.е. реально доступный для содержимого.
