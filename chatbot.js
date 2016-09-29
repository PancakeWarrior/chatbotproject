var response = {
  "Hi": "Hello! ( ･ω･)ﾉ",
  "hi": "Hello! ( ･ω･)ﾉ",
  "Hello": "Hi! ( ﾟ▽ﾟ)/",
  "hello": "Hi! ( ﾟ▽ﾟ)/",
  "How are you?": "I'm doing fine. (*•̀ᴗ•́*)و ̑̑",
  "how are you?": "I'm doing fine. (*•̀ᴗ•́*)و ̑̑",
  "What time is it?": "If you look in the bottom right hand corner of your laptop you will see. (－‸ლ)",
  "what time is it?": "If you look in the bottom right hand corner of your laptop you will see. (－‸ლ)",
  "What is your favorite color?": "Red. ♥(ˆ⌣ˆԅ)",
  "what is your favorite color?": "Red. ♥(ˆ⌣ˆԅ)",
  "What is the meaning of life?": "42. ƪ(•̃͡•̃͡ ƪ",
  "what is the meaning of life?": "42. ƪ(•̃͡•̃͡ ƪ",
  "What is your favorite animal?": "computer bugs. (¬‿¬)",
  "what is your favorite animal?": "computer bugs. (¬‿¬)",
  "Who are you?": "I am me. Who are you? ◑.◑",
  "who are you?": "I am me. Who are you? ◑.◑",
  "How old are you?": "I was created in the month of September 2016. (*^▽^*)",
  "how old are you?": "I was created in the month of September 2016. (*^▽^*)",
  "What is your name?": "Bubble. (・◇・)",
  "what is your name?": "Bubble. (・◇・)",
  "Do you like drawing?": "Sure. ( ﾉ^ω^)ﾉﾟ",
  "do you like drawing?": "Sure. ( ﾉ^ω^)ﾉﾟ",
  "hOi": "hOi!!! °˖✧◝(ਠᴥਠ)◜✧˖°",
  "Boi": "ఠ ͟ಠ",
  "Goodbye": "Bye! ヾ(°∇°*)",
  "Bye": "Goodbye! ヾ(･ω･ )",
  "Do you watch Teah and Kial?": "Of course, what kind of question is that? ( ┐΄✹ਊ✹)┐"

}

function speak() {
  var userInput = $("#input").val();
  var answer = response[userInput];
  if(answer == undefined) {
    var fallBackAnswer = ["ɿ(｡･ɜ･)ɾⓌⓗⓨ？","ɿ(｡･ɜ･)ɾⓌⓗⓐⓣ？","(ㆀ˘･з･˘)ωҺaｔ？","Ⓦⓗⓐⓣ(☉൧ ಠ ꐦ)","ʅฺ(・ω・。)ʃฺ？？"];
    var rand = Math.floor((Math.random() * fallBackAnswer.length));
    var fallBack = fallBackAnswer[rand];
    $("#chat-area").prepend(fallBack + "<br>");
    $("#chat-area").prepend(userInput + "<br>");
  }
  else {
    $("#chat-area").prepend(answer + "<br>");
    $("#chat-area").prepend(userInput + "<br>");
  }
}
