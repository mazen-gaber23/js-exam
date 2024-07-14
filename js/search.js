function getNav(){
  $('.open').click(function(){
  $('.n').css({left: '0px', transition: 'left 0.5s'});
  $('.n2').css({left: $('.n').outerWidth(), transition: 'left 0.5s'});
  $('.open').css({display: 'none'});
  $('.close').css({display: 'block'});
  $('.links').css({ transform:'translateY(0px)',transition:'all 1s'});
});
}
function closeNav(){
  $('.close').click(function(){
  $('.n').css({left: '-210px', transition: 'left 0.5s'});
  $('.n2').css({left: '0px', transition: 'left 0.5s'});
  $('.close').css({display: 'none'});
  $('.open').css({display: 'block'});
  $('.links').css({ transform:'translateY(209px)',transition:'all 1s'});
});
}

 getNav();
 closeNav();
let meals = [];
async function getApi1(search) {
     let myData = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
     let response = await myData.json();
     meals = response.meals;
     console.log(meals);
     getMeals();
 
}
function getMeals(){
    let cartuna='';
    for(let i=0;i<meals.length;i++){
cartuna+=` <div class="col-lg-3 position-relative overflow-hidden">
                <div class="card ms-3"data="${meals[i].idMeal}">
            <img src="${meals[i].strMealThumb}" class="card-img-top" alt="meal">
             <div class="layer bg-opacity-75 bg-white position-absolute start-0 end-0 bottom-0 top-0 rounded-2 d-flex align-items-center">
            <p class="h2 m-2  ">${meals[i].strMeal}</p>
          </div>
          </div>

            </div>`

    }
    document.getElementById('meals1').innerHTML=cartuna;
    ClickEvent2()
}
function inputEvent1() {
  $('.search1').keyup(function(){
let search = $('.search1').val();
           getApi1(search);
   })       
        }
  function inputEvent2() {
     $('.search2').keyup(function(){
     let search = $('.search2').val();
         getApi1(search);
           })       
                }
        inputEvent1()
        inputEvent2()


        let details=[];
async function getApiDetails(data) {
    let myData = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${data}`);
    let response = await myData.json();
    details = response.meals;
    console.log(details);
    getDetails()
}
function ClickEvent2() {
    $('.card').click(function(){
  let data = this.getAttribute('data');
              getApiDetails(data);
     })       
          }
          function getDetails(){
            let cartuna = '';
            for(let i = 0; i < details.length; i++){
                cartuna += `<div class="min-vh-100 position-relative">
<div class="container text-white">
    <div class="row py-5 ">
<div class="col-md-4">
        <img class="w-100 rounded-3" src="${details[i].strMealThumb}" alt="">
            <h2>${details[i].strMeal}</h2>
    </div>
    <div class="col-md-8">
        <h2>Instructions</h2>
        <p>${details[i].strInstructions}</p>
        <h3><span class="fw-bolder">Area : </span>${details[i].strArea}</h3>
        <h3><span class="fw-bolder">Category : </span>${details[i].strCategory}</h3>
        <h3>Recipes :</h3>
        <ul class="list-unstyled d-flex g-3 flex-wrap">
            <li class="alert alert-info m-2 p-1">${details[i].strMeasure1}${details[i].strIngredient1}</li><li class="alert alert-info m-2 p-1">${details[i].strMeasure2}${details[i].strIngredient2}</li><li class="alert alert-info m-2 p-1">${details[i].strMeasure3}${details[i].strIngredient3}</li><li class="alert alert-info m-2 p-1">${details[i].strMeasure4}${details[i].strIngredient4}</li><li class="alert alert-info m-2 p-1">${details[i].strMeasure5}${details[i].strIngredient5}</li><li class="alert alert-info m-2 p-1">${details[i].strMeasure6}${details[i].strIngredient6}</li><li class="alert alert-info m-2 p-1">${details[i].strMeasure7}${details[i].strIngredient7}</li><li class="alert alert-info m-2 p-1">${details[i].strMeasure8}${details[i].strIngredient8}</li><li class="alert alert-info m-2 p-1">${details[i].strMeasure9}${details[i].strIngredient9}</li><li class="alert alert-info m-2 p-1">${details[i].strMeasure10}${details[i].strIngredient10}</li><li class="alert alert-info m-2 p-1">${details[i].strMeasure11}${details[i].strIngredient11}</li><li class="alert alert-info m-2 p-1">${details[i].strMeasure12}${details[i].strIngredient12}</li><li class="alert alert-info m-2 p-1">${details[i].strMeasure13}${details[i].strIngredient13}</li><li class="alert alert-info m-2 p-1">${details[i].strMeasure14}${details[i].strIngredient14}</li><li class="alert alert-info m-2 p-1">${details[i].strMeasure15}${details[i].strIngredient15}</li><li class="alert alert-info m-2 p-1">${details[i].strMeasure16}${details[i].strIngredient16}</li><li class="alert alert-info m-2 p-1">${details[i].strMeasure17}${details[i].strIngredient17}</li><li class="alert alert-info m-2 p-1">${details[i].strMeasure18}${details[i].strIngredient18}</li><li class="alert alert-info m-2 p-1">${details[i].strMeasure19}${details[i].strIngredient19}</li><li class="alert alert-info m-2 p-1">${details[i].strMeasure20}${details[i].strIngredient20}</li>
        </ul>


        <a target="_blank"  class="btn btn-danger">Source</a>
        <a target="_blank"  class="btn btn-danger">Youtube</a>
    </div></div>
</div>
</div> `;
            }
            document.getElementById('meals1').innerHTML = cartuna;
        }
