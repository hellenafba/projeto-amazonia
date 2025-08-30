const productModal = document.getElementById('productModal');
    productModal.addEventListener('show.bs.modal', event => {
      const card = event.relatedTarget;

      const title = card.getAttribute('data-title');
      const price = card.getAttribute('data-price');
      const description = card.getAttribute('data-description');
      const imgSrc = card.getAttribute('data-img');

      productModal.querySelector('#modalTitle').textContent = title;
      productModal.querySelector('#modalPrice').textContent = price;
      productModal.querySelector('#modalDescription').textContent = description;
      const modalImg = productModal.querySelector('#modalImg');
      modalImg.src = imgSrc;
      modalImg.alt = title;
    });