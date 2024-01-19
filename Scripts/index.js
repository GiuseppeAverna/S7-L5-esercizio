//  fetch("https://striveschool-api.herokuapp.com/api/put-your-endpoint-here/", {
//     headers: {
//     "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFhNDQ5NjE4N2U1YzAwMTgxNGM2MzgiLCJpYXQiOjE3MDU2NTc0OTUsImV4cCI6MTcwNjg2NzA5NX0.-_Qcy-gvFdXv3hAtVsaIqG7Kp08ZbCqaP9rUOXPAduE"
//     }
//     })

const apiKey =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFhNDQ5NjE4N2U1YzAwMTgxNGM2MzgiLCJpYXQiOjE3MDU2NTc0OTUsImV4cCI6MTcwNjg2NzA5NX0.-_Qcy-gvFdXv3hAtVsaIqG7Kp08ZbCqaP9rUOXPAduE";
const URL = "https://striveschool-api.herokuapp.com/api/product/";

const generateCards = (arrayofSunglasses) => {
  arrayofSunglasses.forEach((sunglasses) => {
    const newCol = document.createElement("div");
    newCol.classList.add("col", "col-12", "col-md-4", "col-lg-3");
    newCol.innerHTML = `<div class="card">
    <img src="https://www.bing.com/images/blob?bcid=qNq8KaDou5IGfgIiNRcCmKkkiNPO.....yc" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${sunglasses.name}/h5>
      <p class="card-text">${sunglasses.description}</p>
      <p class="card-text">${sunglasses.createdAt}</p>
      <a href="#" class="btn btn-primary">${sunglasses.price}€</a>
    </div>
  </div>`;

    const eventRow = document.getElementById("events-row");
    eventRow.appendChild(newCol);
  });
};
const getSunglasses = () => {
  fetch(URL, {
    headers: {
      Authorization: apiKey,
    },
  })
    .then((response) => {
      console.log("response ok", response);
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("errore nella chiamata");
      }
    })
    .then((data) => {
      console.log("data", data);
      generateCards(data);
    })
    .catch((error) => {
      console.error("error", error);
    });
};

getSunglasses();
