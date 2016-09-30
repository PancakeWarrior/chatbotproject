var response = {
  "hi": "Hello! ( ･ω･)ﾉ",
  "hello": "Hi! ( ﾟ▽ﾟ)/",
  "how are you?": "I'm doing fine. (*•̀ᴗ•́*)و ̑̑",
  "what time is it?": "If you look in the bottom right hand corner of your laptop you will see. (－‸ლ)",
  "what is your favorite color?": "Red. ♥(ˆ⌣ˆԅ)",
  "what is the meaning of life?": "42. ƪ(•̃͡•̃͡ ƪ",
  "what is your favorite animal?": "computer bugs. (¬‿¬)",
  "who are you?": "I am me. Who are you? ◑.◑",
  "how old are you?": "I was created in the month of September 2016. (*^▽^*)",
  "do you like drawing?": "Sure. ( ﾉ^ω^)ﾉﾟ",
  "hOi": "hOi!!! °˖✧◝(ਠᴥਠ)◜✧˖°",
  "Boi": "ఠ ͟ಠ",
  "Goodbye": "Bye! ヾ(°∇°*)",
  "Bye": "Goodbye! ヾ(･ω･ )",
  "Do you watch Teah and Kial?": "Of course, what kind of question is that? ( ┐΄✹ਊ✹)┐"

}

function speak() {
  var userInput = $("#input").val();
  userInput = userInput.toLowerCase();

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
