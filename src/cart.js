import { cartData } from "./data/dummy";

const $ = document.querySelector.bind(document);

export const decrement = (id) => {
  const search = cartData.find((item) => item.id === id);

  if (search === undefined) return;
  else {
    if (search.quantity === 0) return;
    else {
      search.quantity--;
    }
  }

  update(id);
};

export const increment = (id) => {
  const search = cartData.find((item) => item.id === id);

  if (search !== undefined) {
    search.quantity++;
  }

  update(id);
};

const update = (id) => {
  const search = cartData.find((item) => item.id === id);

  search !== undefined
    ? ($(`#quantity-${id}`).innerText = search.quantity)
    : ($(`#quantity-${id}`).innerText = 0);
};
