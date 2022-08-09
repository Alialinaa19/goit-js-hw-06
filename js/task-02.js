const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients")


const arrayOfFood = ingredients.map(ingredient => {
  const point = document.createElement("li");
  point.textContent = ingredient;
  point.classList.add("item");

  return point;
})

list.append(...arrayOfFood);