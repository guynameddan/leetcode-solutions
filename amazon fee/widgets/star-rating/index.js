const ratingStars = [...document.getElementsByClassName("rating__star")];

function executeRating(stars) {
    const starClassActive = "rating__star fas fa-star";
    const starClassInactive = "rating__star far fa-star";
    const starsLength = stars.length;
    let i;

    stars.map((star) => {
        star.onclick = () => {
            i = stars.indexOf(star);

            if (star.className === starClassInactive) {
                for (i; i >= 0; --i) stars[i].className = starClassActive;
            } else {
                for (i; i < starsLength; ++i) stars[i].className = starClassInactive;
            }
        };
    });
}

executeRating(ratingStars);

let stars = document.querySelectorAll(".star");
document.querySelector(".rating-v2").addEventListener("click", starRating);
let rating = document.querySelector(".rating");

function starRating(e) {
    stars.forEach((star) => star.classList.remove("star__checked"));
    const i = [...stars].indexOf(e.target);
    if (i > -1) {
        stars[i].classList.add("star__checked");
        rating.textContent = `${stars.length - i}/5`;
    } else {
        rating.textContent = `${0}/5`;
    }
}

// star -> star-v3
(() => {
    // example product id
    // const productId = "ID_12345";
    const ratingResult = document.querySelector(".ratingResult");
    const stars = document.querySelectorAll(".star-v3");
  
    stars.forEach((star) => {
      star.addEventListener("click", () => {
        const rating = star.dataset.rating;
  
        // print rating
        ratingResult.innerText = `${rating} star rating`;
  
        // clear stars
        stars.forEach((s) => {
          if (s.classList.contains("selected")) {
            s.classList.remove("selected");
          }
        });
        
        // add selected class to stars until rating
        stars.forEach((s) => {
          if (s.dataset.rating <= rating) {
            s.classList.add("selected");
          }
        });
  
        // send post request or do something with rating
        // console.log({ productId, rating });
      });
    });
  })();