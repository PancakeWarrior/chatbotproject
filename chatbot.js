function returnTime(){
  var now = new Date(Date.now());
  return now;
}


var response = {
  "hi": "Hello! ( ･ω･)ﾉ",
  "hello": "Hi! ( ﾟ▽ﾟ)/",
  "how is it going?": "I'm doing great! (｡･ω･｡)ﾉ♡",
  "how are you?": "I'm doing fine. (*•̀ᴗ•́*)و ̑̑",
  "what time is it?": "If you look in the bottom right hand corner of your laptop you will see. (－‸ლ)",
  "what is your favorite color?": "Red. ♥(ˆ⌣ˆԅ)",
  "what is the meaning of life?": "42. ƪ(•̃͡•̃͡ ƪ",
  "what is your favorite animal?": "computer bugs. (¬‿¬)",
  "who are you?": "I am me. Who are you? ◑.◑",
  "how old are you?": "I was created in the month of September 2016. (*^▽^*)",
  "do you like drawing?": "Sure. ( ﾉ^ω^)ﾉﾟ",
  "what is your horoscope?": "I'm a virgo. ♍",
  "what is your favorite plant?": "I like roses. ೭੧(❛▿❛✿)੭೨",
  "Goodbye": "Bye! ヾ(°∇°*)",
  "Bye": "Goodbye! ヾ(･ω･ )",
  "what is your favorite season": "Fall/Autumn because I love the colors the leaves turn. ᕕ( ᐛ )ᕗ",
  "what time is it?": returnTime()

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
