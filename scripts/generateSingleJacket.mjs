export function generateSingleJacket(jacket) {
  const jacketListItem = document.createElement("li");
  jacketListItem.classList.add("jacketItem");

  const jacketLink = document.createElement("a");
  jacketLink.href = `../product/index.html?id=${jacket.id}`;

  //Item image
  const jacketImage = document.createElement("img");
  jacketImage.src = `${jacket.image}`;

  //Title
  const jacketTitle = document.createElement("h2");
  jacketTitle.textContent = `${jacket.title}`;

  //Price
  const jacketPrice = document.createElement("p");
  jacketPrice.textContent = `${jacket.price}`;

  //Color
  const jacketColor = document.createElement("p");
  jacketColor.textContent = `${jacket.baseColor}`;

  //Size
  const jacketSize = document.createElement("p");
  jacketSize.textContent = `${jacket.sizes}`;
    
  //Append image and title
  jacketLink.appendChild(jacketImage);
  jacketLink.appendChild(jacketTitle);
  jacketLink.appendChild(jacketPrice);
  jacketLink.appendChild(jacketColor);
  jacketLink.appendChild(jacketSize);

  jacketListItem.appendChild(jacketLink);

  //Return
  return jacketListItem;
}