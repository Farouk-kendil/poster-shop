
document.addEventListener('DOMContentLoaded', () => {

  const q = s => document.querySelector(s);
  const qa = s => Array.from(document.querySelectorAll(s));

  const cart = [];
  const cartList = q('#cartList');
  const totalPriceEl = q('#totalPrice');
  const confirmBtn = q('#confirmBtn');

  
  q('#year').textContent = new Date().getFullYear();

  
  qa('.add-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const card = e.target.closest('.card');
      if (!card) return;
      const name = card.dataset.name || card.querySelector('.product-name').textContent;
      const price = Number(card.dataset.price || 0);
      const img = card.querySelector('img')?.src || '';
      addToCart({name, price, img});
      
      
      e.target.textContent = 'Added';
      setTimeout(()=> e.target.textContent = 'Add to Cart', 900);
    });
  });

    
  function removeFromCart(index){
    cart.splice(index,1);
    renderCart();
  }

  function formatPrice(num){
    return 'DZD ' + Number(num).toLocaleString('en-US', {minimumFractionDigits:0, maximumFractionDigits:0});
  }

  function renderCart(){
    cartList.innerHTML = '';
    if (cart.length === 0){
      const li = document.createElement('li');
      li.className = 'empty';
      li.textContent = 'Your cart is empty.';
      cartList.appendChild(li);
      totalPriceEl.textContent = formatPrice(0);
      confirmBtn.disabled = true;
      return;
    }

    cart.forEach((it, idx) => {
      const li = document.createElement('li');

      const thumb = document.createElement('div');
      thumb.className = 'thumb';
      const img = document.createElement('img');
      img.src = it.img || 'https://via.placeholder.com/80x120?text=Poster';
      img.alt = it.name;
      thumb.appendChild(img);

      const meta = document.createElement('div');
      meta.className = 'meta';
      const n = document.createElement('div');
      n.className = 'n';
      n.textContent = it.name;
      const p = document.createElement('div');
      p.className = 'p';
      p.textContent = formatPrice(it.price);
      meta.appendChild(n);
      meta.appendChild(p);

      const actions = document.createElement('div');
      actions.className = 'actions';
      const rm = document.createElement('button');
      rm.className = 'remove-btn';
      rm.innerHTML = '<i class="fa fa-trash"></i>';
      rm.title = 'Remove';
      rm.addEventListener('click', () => removeFromCart(idx));
      actions.appendChild(rm);

      li.appendChild(thumb);
      li.appendChild(meta);
      li.appendChild(actions);

      cartList.appendChild(li);
    });

    const total = cart.reduce((s,i) => s + Number(i.price || 0), 0);
    totalPriceEl.textContent = formatPrice(total);
    confirmBtn.disabled = false;
  }

  // confirm order
  confirmBtn.addEventListener('click', () => {
    const name = q('#custName').value.trim();
    const phone = q('#custPhone').value.trim();
    if (!name || !phone){
      alert('Please fill name and phone to confirm order.');
      return;
    }

    const order = {
      customer: {
        name, phone,
        wilaya: q('#wilaya').value,
        baladia: q('#baladia').value,
        address: q('#custAddress').value
      },
      items: cart.slice(),
      total: q('#totalPrice').textContent
    };

    console.log('Order confirmed (example):', order);
    alert('Thank you! Your order was confirmed.\nYou can check the browser console for the order object (example).');

    cart.length = 0;
    renderCart();
    q('#customerForm').reset();
  });

  // Filters
  qa('.filter').forEach(btn => {
    btn.addEventListener('click', (e) => {
      qa('.filter').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      const filter = e.target.dataset.filter;
      applyFilter(filter);
    });
  });

  function applyFilter(filter){
    qa('.card').forEach(card => {
      const cat = card.dataset.category || 'other';
      if (filter === 'all' || filter === cat){
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    });
  }

  // small UX: toggle cart visibility on small screens
  const cartToggle = q('.cart-toggle');
  if (cartToggle){
    cartToggle.addEventListener('click', () => {
      const sidebar = q('.sidebar');
      if (!sidebar) return;
      sidebar.scrollIntoView({behavior:'smooth'});
      sidebar.style.boxShadow = '0 20px 60px rgba(110,45,208,0.18)';
      setTimeout(()=> sidebar.style.boxShadow = '', 800);
    });
  }

  // initial render
  renderCart();
  applyFilter('all');

});

