let submit = document.getElementById("submit");
let curentRating = 0;
let num1 = document.getElementById("rating1");
let num2 = document.getElementById("rating2");
let num3 = document.getElementById("rating3");
let num4 = document.getElementById("rating4");
let num5 = document.getElementById("rating5");
let ratingPage = document.getElementById("page1");
let thankYou = document.getElementById("page2");
let rating = document.getElementById("rating");

submit.addEventListener("click", function ratingCheck(){
    if (num1.checked) {
        currentRating =1;
        pageChange();
      } else if (num2.checked) {
        currentRating =2;
        pageChange();
      }
      else if (num3.checked) {
        currentRating =3;
        pageChange();
      }
      else if (num4.checked) {
        currentRating =4;
        pageChange();
      }
      else if (num5.checked) {
        currentRating =5;
        pageChange();
      }
    rating.innerHTML="You selected " + currentRating + " out of 5";
});

function pageChange(){
    ratingPage.style.display="none";
    thankYou.style.display="flex";
}