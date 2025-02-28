import { db, doc, getDoc } from './firebase-config.js';

const cartContainer = document.getElementById('cart-container');
const totalAmountElem = document.getElementById('total-amount');

function loadCart() {
  return JSON.parse(localStorage.getItem('cart')) || [];
}

async function fetchProduct(productId) {
  const docRef = doc(db, 'products', productId);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return { id: productId, ...docSnap.data() };
  }
  return null;
}

async function renderCart() {
  const cart = loadCart();
  cartContainer.innerHTML = '';
  let total = 0;

  for (let item of cart) {
    const product = await fetchProduct(item.id);
    if (!product) continue;

    const itemTotal = Number(product.price) * item.quantity;
    total += itemTotal;

    const cartItemElem = document.createElement('div');
    cartItemElem.classList.add('cart-item');
    cartItemElem.innerHTML = `
      <img src="${product.imageUrl}" alt="${product.name}">
      <div class="item-info">
        <h3>${product.name}</h3>
        <p>Price: $${product.price}</p>
        <p>Subtotal: $${itemTotal.toFixed(2)}</p>
      </div>
      <div class="item-actions">
        <button class="minus-btn" data-id="${product.id}">−</button>
        <span class="quantity">${item.quantity}</span>
        <button class="plus-btn" data-id="${product.id}">+</button>
      </div>
    `;
    cartContainer.appendChild(cartItemElem);
  }
  
  totalAmountElem.textContent = total.toFixed(2);
  attachCartEventListeners();
}

function attachCartEventListeners() {
  const plusButtons = document.querySelectorAll('.plus-btn');
  const minusButtons = document.querySelectorAll('.minus-btn');
  
  plusButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const id = e.target.dataset.id;
      updateCartQuantity(id, 1);
    });
  });
  
  minusButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const id = e.target.dataset.id;
      updateCartQuantity(id, -1);
    });
  });
}

function updateCartQuantity(productId, change) {
  let cart = loadCart();
  const index = cart.findIndex((item) => item.id === productId);
  
  if (index > -1) {
    cart[index].quantity += change;
    if (cart[index].quantity < 1) {
      cart.splice(index, 1);
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
  }
}

renderCart();
