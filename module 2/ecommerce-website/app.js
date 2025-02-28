import { auth, db, onAuthStateChanged, signInWithEmailAndPassword, signOut, collection, addDoc, getDocs, doc, updateDoc, deleteDoc, getDoc } from './firebase-config.js';
// import { supabase } from './supabase-config.js';

// Check Auth State
onAuthStateChanged(auth, (user) => {

  
  if (!user && !window.location.pathname.includes('index.html')) {
    window.location.href = 'index.html';
  }
});



const loginForm = document.getElementById('login-form');


if (loginForm) {

  loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    try {
      await signInWithEmailAndPassword(auth, email, password);
      window.location.href = 'products.html';
    } catch (error) {
      document.getElementById('error-message').textContent = error.message;
    }
  });
  
}

const logoutBtn = document.getElementById('logout-btn');

if (logoutBtn) {
  logoutBtn.addEventListener('click', async () => {
    await signOut(auth);
    window.location.href = 'index.html';
  });
}


const productsContainer = document.getElementById('products-container');
if (productsContainer) {
  const fetchProducts = async () => {
    const querySnapshot = await getDocs(collection(db, 'products'));
    querySnapshot.forEach((doc) => {
      const product = doc.data();
      productsContainer.innerHTML += `
        <div class="product">
          <img src="${product.imageUrl}" alt="${product.name}">
          <h3>${product.name}</h3>
          <p>${product.price}</p>
          <button onclick="addToCart('${doc.id}')">Add to Cart</button>
          <button onclick="addToFavorites('${doc.id}')">❤️</button>
        </div>
      `;
    });
  };
  fetchProducts();
}

const productForm = document.getElementById('product-form'); 
if (productForm) {
  productForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('product-name').value;
    const price = document.getElementById('product-price').value;
    const imageUrl = document.getElementById('product-image').value;
    
    const productsContainer = document.getElementById('products-container');

    // Try adding the product
    try {
      // addDoc returns a DocumentReference, which contains the new document's ID.
      const docRef = await addDoc(collection(db, 'products'), {
        name: name,
        price: price,
        imageUrl: imageUrl
      });
      alert('Product added successfully!');
      productForm.reset(); // Clear the form

      // Immediately update the UI by appending the new product
      if (productsContainer) {
        productsContainer.innerHTML += `
          <div class="product">
            <img src="${imageUrl}" alt="${name}">
            <h3>${name}</h3>
            <p>${price}</p>
            <button onclick="addToCart('${docRef.id}')">Add to Cart</button>
            <button onclick="addToFavorites('${docRef.id}')">❤️</button>
          </div>
        `;
      }
    } catch (error) {
      console.error("Error adding product:", error);
      alert('Failed to add product.');
      return; // Stop further execution if adding fails
    }
  });
}






window.addToCart = (productId) => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
      // Increase quantity if the product is already in the cart
      existingItem.quantity += 1;
    } else {
      // Add new product with quantity 1
      cart.push({ id: productId, quantity: 1 });
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Product added to cart!');
  };
  