'use strict';

// checkbox menu toggles
document.querySelectorAll('.js-checkbox-toggle').forEach((checkbox) => {
  // js enhancement for "return" key on menu toggle
  checkbox.addEventListener('keyup', function(e) {
    let keycode = e.keyCode ? e.keyCode : e.which;
    if (keycode == 13) {
      checkbox.click();
    }
  });
  // adding classes to html when checked / unchecked
  if (checkbox.getAttribute('data-html-toggle')) {
    checkbox.addEventListener('click', function() {
      let htmlClass = checkbox.getAttribute('data-html-toggle');
      if (checkbox.checked) {
        document.documentElement.classList.add(htmlClass);
      } else {
        document.documentElement.classList.remove(htmlClass);
      }
    });
  }
  // firing on touchstart to get around double-clicking
  // on iOS because of :hover, :focus styles.
  // Don't even need to do any work within the event.
  checkbox.nextElementSibling.addEventListener('touchstart', function() {});
});

// make visual buttons work like buttons
document.querySelectorAll('[role=button], .btn').forEach((button) => {
  // js enhancement for "space" key on visual buttons
  button.addEventListener('keyup', function(e) {
    let keycode = e.keyCode ? e.keyCode : e.which;
    if (keycode == 32) {
      button.click();
    }
  });
});
