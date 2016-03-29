window.onload = function () {

  console.log("started")

  quotes = [
  {text: "Visual Basic is the way forward, I don't know why we are doing JavaScript.", author: "Jay Chetty"},
  {text: "The only CSS you need to know is background-color: tomato", author: "Rick"},
  {text: "Are those hand-cut artisan crisps?", author: "Keith"},
  {text: "Scaffolding is nothing but a fiery hell.", author: "Val"},
  {text: "That is quite obviously a frog.", author: "Val"},
  {text: "Im better than batman", author: "Robin"}
  ];

  var list = document.getElementById('quote-list')
  var button = document.getElementById('submit-button');
  var quoteBox = document.getElementById('quote-box');
  var authorBox = document.getElementById('author-box');
  var form = document.getElementById('input-form');


  var loadQuotes = function() {
    for (i = 0; i < quotes.length; i++ ) {
      li = document.createElement('li');
      li.innerText = quotes[i].text + " by: " + quotes[i].author
      createDeleteButton(i, li);
      list.appendChild(li);
    }
  }

  var createDeleteButton = function(indexPos, li) {
    del = document.createElement('button');
    del.innerText = 'Delete';
    li.appendChild(del);
  }

  var createNewDeleteButton = function( ) {
    del = document.createElement('button');
    del.innerText = 'Delete';
    return del;
  }

  var loadNewQuote = function() {
    li = document.createElement('li')
    li.innerText = quotes[quotes.length - 1].text + " by: " + quotes[quotes.length - 1].author;
    list.appendChild(li);
    del = createNewDeleteButton();
    li.appendChild(del);
  }

  var saveQuote = function() {
    quotes.push({text: quoteBox.value, author: authorBox.value});    
    loadNewQuote();
  }

  counter = 0;

  form.onsubmit = function( event ) {
    event.preventDefault();
    saveQuote();
    counter = 0;
    quoteBox.value = "";
    authorBox.value = "";
    form.onkeydown();
  }

  form.onkeydown=function(){
    if (counter = 0) {
      li = document.createElement('li')
      list.appendChild(li)
    } else {
      li.innerText = quoteBox.value + " by: " + authorBox.value;
    }
  };
  
  loadQuotes();


}

//   button.onsubmit = saveQuote;
//   loadQuotes();
// }


  // var button = document.getElementById( 'add-button' );
  // var input = document.getElementById('film-text-input');
  // list1 = document.getElementById('film-list');

  // var handleClick = function() {
  //   var listItem = document.createElement('li');
  //   listItem.innerText = input.value;
  //   list1.appendChild(listItem);
  // }