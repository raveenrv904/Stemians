const galleryImages = [
  {
    category: "Camp",
    gallery: [
      {
        img: "./assets/camps/camp4.jpg",
      },
      {
        img: "./assets/camps/camp2.jpg",
      },
      {
        img: "./assets/camps/camp3.jpg",
      },
      {
        img: "./assets/camps/camp7.jpg",
      },
      {
        img: "./assets/camps/camp1.jpg",
      },
      {
        img: "./assets/camps/camp5.jpg",
      },
      {
        img: "./assets/camps/camp6.jpg",
      },
    ],
  },

  {
    category: "Coding",
    gallery: [
      {
        img: "./assets/coding/coding1.jpg",
      },
      {
        img: "./assets/coding/coding5.jpg",
      },
      {
        img: "./assets/coding/coding3.jpg",
      },
      {
        img: "./assets/coding/coding4.jpg",
      },
    ],
  },
  {
    category: "Pictoblox",
    gallery: [
      {
        img: "./assets/pictoblox/pictoblox1.jpg",
      },
      {
        img: "./assets/pictoblox/pictoblox9.jpg",
      },
      {
        img: "./assets/pictoblox/pictoblox3.jpg",
      },
      {
        img: "./assets/pictoblox/pictoblox4.jpg",
      },
      {
        img: "./assets/pictoblox/pictoblox5.jpg",
      },
      {
        img: "./assets/pictoblox/pictoblox6.jpg",
      },
      {
        img: "./assets/pictoblox/pictoblox7.jpg",
      },
      {
        img: "./assets/pictoblox/pictoblox8.jpg",
      },
      {
        img: "./assets/pictoblox/pictoblox2.jpg",
      },
    ],
  },
  {
    category: "Robotics",
    gallery: [
      {
        img: "./assets/robotics/robotics1.jpg",
      },
      {
        img: "./assets/robotics/robotics2.jpg",
      },
      {
        img: "./assets/robotics/robotics3.jpg",
      },
      {
        img: "./assets/robotics/robotics4.jpg",
      },
      {
        img: "./assets/robotics/robotics5.jpg",
      },
      {
        img: "./assets/robotics/robotics6.jpg",
      },
      {
        img: "./assets/robotics/robotics9.jpg",
      },
      {
        img: "./assets/robotics/robotics10.jpg",
      },
      {
        img: "./assets/robotics/robotics7.jpg",
      },
    ],
  },
  {
    category: "Stem Education",
    gallery: [
      {
        img: "./assets/stem education/stemm1.jpg",
      },
      {
        img: "./assets/stem education/stemm2.jpg",
      },
      {
        img: "./assets/stem education/stem 2.jpg",
      },
      {
        img: "./assets/stem education/stem 6.jpg",
      },
      {
        img: "./assets/stem education/stem 7.jpg",
      },
      {
        img: "./assets/stem education/stem 5.jpg",
      },
      {
        img: "./assets/stem education/stem 9.jpg",
      },
      {
        img: "./assets/stem education/stem 4.jpg",
      },
      {
        img: "./assets/stem education/stem1.jpg",
      },
      {
        img: "./assets/stem education/stem 3.jpg",
      },
    ],
  },
  {
    category: "Achievements",
    gallery: [
      {
        img: "./assets/achievements/01.jpeg",
      },
      {
        img: "./assets/achievements/02.jpeg",
      },
      {
        img: "./assets/achievements/03.jpeg",
      },
      {
        img: "./assets/achievements/13.jpeg",
      },

      {
        img: "./assets/achievements/04.jpeg",
      },
      {
        img: "./assets/achievements/05.jpeg",
      },
      {
        img: "./assets/achievements/06.jpeg",
      },
      {
        img: "./assets/achievements/07.jpeg",
      },
      {
        img: "./assets/achievements/14.jpeg",
      },
      {
        img: "./assets/achievements/15.jpeg",
      },
      {
        img: "./assets/achievements/16.jpeg",
      },
      {
        img: "./assets/achievements/18.jpeg",
      },

      {
        img: "./assets/achievements/09.jpeg",
      },
      {
        img: "./assets/achievements/11.jpeg",
      },
      {
        img: "./assets/achievements/17.jpeg",
      },
      {
        img: "./assets/achievements/12.jpeg",
      },

      // {
      //   img: "./assets/achievements/08.jpeg",
      // },
    ],
  },
];

const galleryContainer = document.querySelector(".gallery");

galleryImages.forEach((container) => {
  let image = "";
  container.gallery.forEach((img) => {
    image += `
            <div class="col-3">
          <img
            class="img-fluid bg-light p-2"
            src="${img.img}"
            alt=""
          />
        </div>
            `;
  });

  galleryContainer.innerHTML += `
      <div class="text-center wow fadeInUp mb-5" data-wow-delay="0.1s">
          <h1 class="mt-5">${container.category}</h1>
        </div>
        <div class="row g-2 pt-2 nm">
        ${image}
        </div>
      `;
});
