//задача 1
//null

//задача 2
// Вася

//задача 3
// undefined.
// Результатом работы bind является другой объект. У него уже нет свойства test.

//задача 4
// Ошибка происходит потому, что askPassword получает функции loginOk/loginFail без контекста.
// askPassword(user.loginOk.bind(user), user.loginFail.bind(user));

//задача 5
// askPassword(user.login.bind(user, true), user.login.bind(user, false));
