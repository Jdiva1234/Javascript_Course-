var name = prompt("What is your name?");
alert("Hello, " + name + "!");

let tweet = prompt("Compose your tweet");
let yourCharacter = tweet.length;
alert("You have written " + yourCharacter + "characters,  you have " + (140- tweet.length) + "charcters left");
let tweetLess = tweet.slice(0,140);
alert(tweetLess);


/** The different types of functions in JavaScripts are: 
 */