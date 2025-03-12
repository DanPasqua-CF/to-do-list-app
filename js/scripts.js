function newItem() {
  // Add an item to the list 
  let li = $('<li></li>');
  let inputValue = $('#input').val();
  li.append(inputValue);

  // Add the Check and Delete buttons
  let crossOutButton = $('<button class="button-x">X</button>');
  let checkButton = $('<button class="button-check">&#10003;</button>')
  li.append(crossOutButton);
  li.append(checkButton);

  crossOutButton.on('click', deleteListItem);
  checkButton.on('click', crossOut);

  if (inputValue === '') {
    alert("You must write something!");
  } else {
    $("#list").append(li);
  }

  // Strike an item from the list
  function crossOut() {
    li.toggleClass('strike');
  }

  li.on('dblclick', crossOut);

  // Add .delete class
  function deleteListItem() {
    li.addClass('delete');
  }

  // Make list sortable 
  $('#list').sortable();
  $('#input').val('');
}

