const courseTitleHtml = `

<div class="row g-3" style="justify-content:center">
          
          <div
            class="col-lg-5 col-md-6 wow zoomIn course-hook"
            data-wow-delay="0.7s"
            style="max-height: 300px;max-width:400px"
          >
            <a class="position-relative d-block h-100 overflow-hidden" href="courses.html">
              <img
                class="img-fluid position-absolute w-100 h-100"
                src="./img/new/bootcamp.jpeg"
                alt="workshop"
                style="object-fit: cover"
              />
              <div
                class="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3"
                style="margin: 1px"
              >
                <h5 class="m-0">Bootcamps & Workshops</h5>
                <small class="text-primary">Courses</small>
              </div>
            </a>
          </div><div
            class="col-lg-5 col-md-6 wow zoomIn course-hook"
            data-wow-delay="0.7s"
            style="max-height: 300px;max-width:400px;"
          >
            <a class="position-relative d-block h-100 overflow-hidden" href="courses.html">
              <img
        class="img-fluid"
        src="./assets/Temp/main 4.jpeg"
        alt="robotics"      />
              <div
                class="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3"
                style="margin: 1px"
              >
                <h5 class="m-0">Robotics</h5>
                <small class="text-primary">Courses</small>
              </div>
            </a>
          </div><div
            class="col-lg-5 col-md-6 wow zoomIn course-hook"
            data-wow-delay="0.7s"
            style="max-height: 300px;max-width:400px"
          >
            <a class="position-relative d-block h-100 overflow-hidden" href="courses.html">
              <img
        class="img-fluid"
        src="./img/new/events.jpeg"
         alt="events"
       />
              <div
                class="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3"
                style="margin: 1px"
              >
                <h5 class="m-0">Events</h5>
                <small class="text-primary">Courses</small>
              </div>
            </a>
          </div>
        </div>


        

        `;

// <div class="col-lg-7 col-md-6">

//   </div>

//   <div class="row g-3">
//   <div class="col-lg-12 col-md-12 wow zoomIn course-hook" data-wow-delay="0.1s">
//     <a class="position-relative d-block overflow-hidden" href="courses.html">
//       <img
//         class="img-fluid"
//         src="./img/new/stem.jpg"
//         alt="stem education"
//       />
//       <div
//         class="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3"
//         style="margin: 1px"
//       >
//         <h5 class="m-0">Stem Education</h5>
//         <small class="text-primary">Courses</small>
//       </div>
//     </a>
//   </div>
//   <div class="col-lg-6 col-md-12 wow zoomIn course-hook" data-wow-delay="0.3s">
//     <a class="position-relative d-block overflow-hidden" href="courses.html">
//       <img
//         class="img-fluid"
//         src="./assets/Temp/main 4.jpeg"
//         alt="robotics"
//       />
//       <div
//         class="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3"
//         style="margin: 1px"
//       >
//         <h5 class="m-0">Robotics</h5>
//         <small class="text-primary">Courses</small>
//       </div>
//     </a>
//   </div>
//   <div class="col-lg-6 col-md-12 wow zoomIn course-hook" data-wow-delay="0.5s">
//     <a class="position-relative d-block overflow-hidden" href="courses.html">
//       <img
//         class="img-fluid"
//         src="./img/new/events.jpeg"
//         alt="events"
//       />
//       <div
//         class="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3"
//         style="margin: 1px"
//       >
//         <h5 class="m-0">Events</h5>
//         <small class="text-primary">Courses</small>
//       </div>
//     </a>
//   </div>
// </div>

const courseTitle = document.querySelector(".course-titles");

courseTitle.innerHTML += courseTitleHtml;
