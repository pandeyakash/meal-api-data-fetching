//Selecting both the buttons
const getCategoryData = document.querySelector("#get-category-data");
const getIngredientData = document.querySelector("#get-ingredient-data");

//Added click listeners to both the buttons and invoke getCategoriesData() and getIngredientsData() functions respectively.
getCategoryData.addEventListener("click", () => {
  getCategoriesData();
});

getIngredientData.addEventListener("click", () => {
  getIngredientsData();
});

function getCategoriesData() {
  async function call() {
    try {
      let r1 = fetch(
        "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"
      );
      let response = await r1;
      let data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
      console.log("Something went wrong.");
    }
  }
  call();
}

function getIngredientsData() {
  let r1 = fetch(
    "https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast"
  );
  async function call() {
    try {
      let response = await r1;
      let data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
      console.log("Something went wrong.");
    }
  }
  call();
}
