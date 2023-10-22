function login() {
  const username = document.getElementById('loginUsername').value;
  const password = document.getElementById('loginPassword').value;

  if (username && password) {
    document.getElementById('loginMessage').innerText = `Welcome, ${username}!`;
  } else {
    document.getElementById('loginMessage').innerText = 'Please fill in all fields.';
  }
}

function signup() {
  const username = document.getElementById('signupUsername').value;
  const password = document.getElementById('signupPassword').value;

  if (username && password) {
    document.getElementById('signupMessage').innerText = `Account created for ${username}.`;
  } else {
    document.getElementById('signupMessage').innerText = 'Please fill in all fields.';
  }
}
function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if (email && password) {
    document.getElementById('loginMessage').innerText = `Welcome! You are logged in with email: ${email}`;
  } else {
    document.getElementById('loginMessage').innerText = 'Please fill in all fields.';
  }
}
//dbjsbadba//
let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'PRODUCT NAME 1',
        image: 'abso.png',
        price: 120000
    },
    {
        id: 2,
        name: 'PRODUCT NAME 2',
        image: 'astra.png',
        price: 120000
    },
    {
        id: 3,
        name: 'PRODUCT NAME 3',
        image: 'co.png',
        price: 220000
    },
    {
        id: 4,
        name: 'PRODUCT NAME 4',
        image: 'cranberry.png',
        price: 123000
    },
    {
        id: 5,
        name: 'PRODUCT NAME 5',
        image: 'cur.png',
        price: 320000
    },
    {
        id: 6,
        name: 'PRODUCT NAME 6',
        image: 'gin.png',
        price: 120000
    },
    {
      id: 7,
      name: 'PRODUCT NAME 1',
      image: 'korean.png',
      price: 120000
  },
  {
      id: 8,
      name: 'PRODUCT NAME 2',
      image: 'nano.png',
      price: 120000
  },
  {
      id: 9,
      name: 'PRODUCT NAME 3',
      image: 'amla.png',
      price: 220000
  },
  {
      id: 10,
      name: 'PRODUCT NAME 4',
      image: 'banana.png',
      price: 123000
  },
  {
      id: 11,
      name: 'PRODUCT NAME 5',
      image: 'beetroot.png',
      price: 320000
  },
  {
      id: 12,
      name: 'PRODUCT NAME 6',
      image: 'bhringraj.png',
      price: 120000
  },
  {
    id: 13,
    name: 'PRODUCT NAME 1',
    image: 'mango.png',
    price: 120000
  },
{
    id: 14,
    name: 'PRODUCT NAME 2',
    image: 'orange.png',
    price: 120000
},
{
    id: 15,
    name: 'PRODUCT NAME 3',
    image: 'safed.png',
    price: 220000
},
{
    id: 16,
    name: 'PRODUCT NAME 4',
    image: 'wheatgrass.png',
    price: 123000
},
{
    id: 17,
    name: 'PRODUCT NAME 5',
    image: 'shata.png',
    price: 320000
},
{
    id: 18,
    name: 'PRODUCT NAME 6',
    image: 'img1.png',
    price: 120000
},
{
  id: 19,
  name: 'PRODUCT NAME 1',
  image: 'img2.png',
  price: 120000
},
{
  id: 20,
  name: 'PRODUCT NAME 2',
  image: 'img3.png',
  price: 120000
},
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="img/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="img/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}