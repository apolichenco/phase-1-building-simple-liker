// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
addClassOne('#modal', 'hidden');

const hearts = document.querySelectorAll('span.like-glyph')
console.log(hearts);
for (const heart of hearts) {
  heart.addEventListener("click", function() {
    mimicServerCall()
    .then(function() {
      if (heart.classList.length === 2) {
        function makeItEmpty() {
          heart.className = 'like-glyph';
          heart.innerHTML = EMPTY_HEART;    
        }
        makeItEmpty();
      }
      else {
        function makeItRed() {
          heart.className += ' activated-heart';
          heart.innerHTML = FULL_HEART;    
        }
        makeItRed();
      }
    })
    .catch(function() {
      console.log('error');
      removeClass('#modal', 'hidden');
      function addClassTwo() {
        const ele = document.querySelector('#modal')
        ele.className += 'hidden';   
      }
        setTimeout(addClassTwo, 3000);
    })
  })
}
  function addClassOne(av, children) {
    const el = document.querySelector(av)
    el.classList.add(children);   
  }


  function removeClass(av, children) {
    const element = document.querySelector(av)
    element.classList.remove(children); 
  }
  //------------------------------------------------------------------------------
  // Don't change the code below: this function mocks the server response
  //------------------------------------------------------------------------------

  function mimicServerCall(url="http://mimicServer.example.com", config={}) {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        let isRandomFailure = Math.random() < .2
        if (isRandomFailure) {
          reject("Random server error. Try again.");
        } else {
          resolve("Pretend remote server notified of action!");
        }
      }, 300);
    });
  }
