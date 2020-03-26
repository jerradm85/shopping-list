$(function () {
    $('form').submit(event => {
      event.preventDefault();
  
      let itemVal = $('#shopping-list-entry').val();
  
      if (itemVal === '') {
        alert("You must enter a value.")
      }else {
  
        $('ul.shopping-list').append(`<li>
          <span class="shopping-item">${itemVal}</span>
          <div class="shopping-item-controls">
            <button class="shopping-item-toggle">
              <span class="button-label">check</span>
            </button>
            <button class="shopping-item-delete">
              <span class="button-label">delete</span>
            </button>
          </div>
        </li>`);
      }
    });
  
    $(this).on('click', 'button.shopping-item-toggle', event => {
      $(event.currentTarget).parent().siblings('.shopping-item').toggleClass("shopping-item__checked");
    });
  
    $(this).on('click', 'button.shopping-item-delete', event => {
      $(event.currentTarget).parent().parent().remove();
    });
  
  });