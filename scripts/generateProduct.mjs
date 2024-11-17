import { addToCart } from "./cart.mjs";

export function generateProduct(jacket) {
 
  const jacketContainer = document.createElement('div');

  const jacketTitle = document.createElement('h2');
  jacketTitle.textContent = jacket.title;

  const jacketDescription = document.createElement('p');
  jacketDescription.textContent = `Description: ${jacket.description}`;

  const jacketSizes = document.createElement('p');
  jacketSizes.textContent = `Sizes: ${jacket.sizes.join(', ')}`;

  const jacketColor = document.createElement("p");
  jacketColor.textContent = `${jacket.baseColor}`;

  const jacketPrice = document.createElement('p');
  if (jacket.onSale) {
    jacketPrice.innerHTML = `
      Original: $ ${jacket.price}
      Now: $ ${jacket.discountedPrice}`;
  } else {
    jacketPrice.textContent = `Price: $ ${jacket.price}`;
  }

  const jacketAddToCartButton = document.createElement('button');
  jacketAddToCartButton.textContent = 'Add to cart';
  jacketAddToCartButton.addEventListener('click', () => {
    addToCart(jacket);
    alert("Added to cart!");
  });


  
  const jacketImage = document.createElement("img");
  jacketImage.src = jacket.image;


  jacketContainer.append(
    jacketTitle,
    jacket.description,
    jacketSizes,
    jacketColor,
    jacketPrice, 
    jacketAddToCartButton,
    jacketImage 

  );
  return jacketContainer;
}