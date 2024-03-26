document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.cart-item');
  
    items.forEach(item => {
      const incrementBtn = item.querySelector('.increment-btn');
      const decrementBtn = item.querySelector('.decrement-btn');
      const quantityInput = item.querySelector('.quantity-input');
      const removeBtn = item.querySelector('.remove-btn');
      const likeBtn = item.querySelector('.like-btn');
  
      // Increment quantity
      incrementBtn.addEventListener('click', function() {
        let quantity = parseInt(quantityInput.value);
        quantityInput.value = ++quantity;
        updateTotal();
      });
  
      // Decrement quantity
      decrementBtn.addEventListener('click', function() {
        let quantity = parseInt(quantityInput.value);
        if (quantity > 1) {
          quantityInput.value = --quantity;
          updateTotal();
        }
      });
  
      // Remove item from cart
      removeBtn.addEventListener('click', function() {
        item.remove();
        updateTotal();
      });
  
      // Toggle like button
      likeBtn.addEventListener('click', function() {
        likeBtn.classList.toggle('liked');
      });
    });
  
    // Update total price
    function updateTotal() {
      let total = 0;
      items.forEach(item => {
        const price = parseFloat(item.querySelector('.item-price').textContent.slice(1));
        const quantity = parseInt(item.querySelector('.quantity-input').value);
        total += price * quantity;
      });
      document.getElementById('total-price').textContent = total.toFixed(2);
    }
  });
  