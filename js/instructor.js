const instructorDetails = [
  {
    name: "Raveen R V",
    profession: "Web Developer",
    img: "./img/team-1.jpg",
    facebook: "",
    insta: "",
    x: "",
  },
  {
    name: "Harhini",
    profession: "Dockor",
    img: "./img/team-2.jpg",
    facebook: "",
    insta: "",
    x: "",
  },
  {
    name: "John",
    profession: "Mern Stack",
    img: "./img/team-3.jpg",
    facebook: "",
    insta: "",
    x: "",
  },
  {
    name: "Seth Rollins",
    profession: "Designer",
    img: "./img/team-4.jpg",
    facebook: "",
    insta: "",
    x: "",
  },
];

let time = 0.1;

const instructorInsert = document.querySelectorAll(".insert-instructor");

for (let i = 0; i <= instructorInsert.length; i++) {
  instructorDetails.forEach((instructor) => {
    instructorInsert[i].innerHTML += `
      <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="${time}s">
              <div class="team-item bg-light">
                <div class="overflow-hidden">
                  <img class="img-fluid" src="${instructor.img}" alt="" />
                </div>
                <div
                  class="position-relative d-flex justify-content-center"
                  style="margin-top: -23px"
                >
                  <div class="bg-light d-flex justify-content-center pt-2 px-1">
                    <a class="btn btn-sm-square btn-primary mx-1" target="_blank" href="${instructor.facebook}"
                      ><i class="fab fa-facebook-f"></i
                    ></a>
                    <a class="btn btn-sm-square btn-primary mx-1" target="_blank" href="${instructor.x}"
                      ><i class="fab fa-twitter"></i
                    ></a>
                    <a class="btn btn-sm-square btn-primary mx-1" target="_blank" href="${instructor.insta}"
                      ><i class="fab fa-instagram"></i
                    ></a>
                  </div>
                </div>
                <div class="text-center p-4">
                  <h5 class="mb-0">${instructor.name}</h5>
                  <small>${instructor.profession}</small>
                </div>
              </div>
            </div>
      `;
    time += 0.2;
  });
}
