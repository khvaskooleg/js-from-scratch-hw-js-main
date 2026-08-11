/*
  Нужно написать функцию capitalizeWords, которая принимает строку и делает так, чтобы каждое слово начиналось с заглавной буквы.
  Например, если передать строку "hello world from javascript", функция должна вернуть "Hello World From JavaScript".

  🧙‍♂️Эту задачу можно решить при помощь цикла for. Рекомендуем реализовать этот вариант решения, как самый эффективный.
  Другой вариант - использовать метод split строк, и метод массива join.
*/

function capitalizeWords(str) {              // str = "hello world from javascript"
  let wordsArray = str.split(' '); //Массив из слов ['hello', 'world', 'from', 'javascript']
  const upWords = wordsArray.map(words => words[0].toUpperCase() + words.slice(1))   //map берет каждое слово массива и меняет первую букву на заглавную.
  return upWords.join(' ');  //Возвращает масив в строку
}
