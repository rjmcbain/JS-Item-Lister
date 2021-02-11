const form = document.getElementById('addForm');
const itemList = document.getElementById('items');
const filter = document.getElementById('filter');

// Form submit event

form.addEventListener('submit', addItem);
itemList.addEventListener('click', delItem);
filter.addEventListener('keyup', filterItems);

function addItem(e) {
  e.preventDefault();
  const newItem = document.getElementById('item').value;

  const li = document.createElement('li');
  li.className = 'list-group-item';
  li.appendChild(document.createTextNode(newItem));

  const delButton = document.createElement('button');

  delButton.className = 'btn btn-danger btn-sm float-right delete';
  delButton.innerHTML = 'X';
  console.log(delButton);
  li.appendChild(delButton);


  itemList.appendChild(li);
}



function delItem(e) {
  e.preventDefault();
  console.log(e);
  if(e.target.classList.contains('delete')) {
    if(confirm('Are you sure?')) {
      const li = e.target.parentElement;
      console.log(li);
      itemList.removeChild(li);
    }
  }
}

function filterItems(e) {
  const text = e.target.value.toLowerCase();
  const items = itemList.getElementsByTagName('li');
  console.log(items);
  // Convert to array
  Array.from(items).forEach((i) => {
    const itemName = i.firstChild.textContent;
    // console.log(itemName);
    if(itemName.toLocaleLowerCase().indexOf(text) != -1) {
      i.style.display = 'block'
    } else {
      i.style.display = 'none';
    }
  })
}