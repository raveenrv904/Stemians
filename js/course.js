const courseDetails = [
  {
    category: "Stem Education",
    title: "Robotics",
    instructor: "Raveen",
    hrs: "9.49",
    students: "67",
    price: "3,999",
    star: "3",
    review: "223",
    img: "./img/new/courses/Stem/robo.png",
  },
  {
    category: "Stem Education",
    title: "Chatgpt",
    instructor: "Raveen",
    hrs: "9.49",
    students: "67",
    price: "3,999",
    star: "3",
    review: "223",
    img: "./img/new/courses/Stem/chat.png",
  },

  {
    category: "Stem Education",
    title: "Artificial Intelligence",
    instructor: "John Doe",
    hrs: "1.49",
    students: "30",
    price: "5,999",
    star: "4",
    review: "120",
    img: "./img/new/courses/Stem/ai.png",
  },
  {
    category: "Stem Education",
    title: "Machine Learning",
    instructor: "John Doe",
    hrs: "1.49",
    students: "30",
    price: "5,999",
    star: "4",
    review: "120",
    img: "./img/new/courses/Stem/ml.png",
  },

  {
    category: "Robotics",
    title: "IOT Projects",
    instructor: "John Doe",
    hrs: "4.49",
    students: "66",
    price: "4,999",
    star: "5",
    review: "157",
    img: "./img/new/courses/Robotic/iot.png",
  },

  {
    category: "Robotics",
    title: "Arduino Projects",
    instructor: "John Doe",
    hrs: "4.49",
    students: "66",
    price: "4,999",
    star: "5",
    review: "157",
    img: "./img/new/courses/Robotic/au.png",
  },
  {
    category: "Popular",
    title: "Arduino Projects",
    instructor: "John Doe",
    hrs: "4.49",
    students: "66",
    price: "4,999",
    star: "5",
    review: "157",
    img: "./img/new/courses/Robotic/au.png",
  },
  {
    category: "Robotics",
    title: "Smartivity Projects",
    instructor: "John Doe",
    hrs: "1.49",
    students: "30",
    price: "5,999",
    star: "4",
    review: "120",
    img: "./img/new/courses/Robotic/st.png",
  },
  {
    category: "Robotics",
    title: "Moving and Electronic Bots",
    instructor: "Raveen",
    hrs: "9.49",
    students: "67",
    price: "3,999",
    star: "3",
    review: "223",
    img: "./img/new/courses/Robotic/me.png",
  },
  {
    category: "Robotics",
    title: "Touch Sensors",
    instructor: "John Doe",
    hrs: "4.49",
    students: "66",
    price: "4,999",
    star: "5",
    review: "157",
    img: "./img/new/courses/Robotic/ts.png",
  },
  {
    category: "Popular",
    title: "Touch Sensors",
    instructor: "John Doe",
    hrs: "4.49",
    students: "66",
    price: "4,999",
    star: "5",
    review: "157",
    img: "./img/new/courses/Robotic/ts.png",
  },
  {
    category: "Robotics",
    title: "Voice Activated Light Bulbs",
    instructor: "John Doe",
    hrs: "1.49",
    students: "30",
    price: "5,999",
    star: "4",
    review: "120",
    img: "./img/new/courses/Robotic/vlb.png",
  },
  {
    category: "Bootcamps",
    title: "Agumented & Virtual Reality",
    instructor: "Raveen",
    hrs: "9.49",
    students: "67",
    price: "3,999",
    star: "3",
    review: "223",
    img: "./img/new/courses/Bootcamps/vr.png",
  },
  {
    category: "Bootcamps",
    title: "Machine Learning",
    instructor: "John Doe",
    hrs: "4.49",
    students: "66",
    price: "4,999",
    star: "5",
    review: "157",
    img: "./img/new/courses/Bootcamps/ml.png",
  },
  {
    category: "Bootcamps",
    title: "Chatgpt",
    instructor: "John Doe",
    hrs: "1.49",
    students: "30",
    price: "5,999",
    star: "4",
    review: "120",
    img: "./img/new/courses/Bootcamps/chat.png",
  },
  {
    category: "Bootcamps",
    title: "Iot Projects",
    instructor: "Raveen",
    hrs: "9.49",
    students: "67",
    price: "3,999",
    star: "3",
    review: "223",
    img: "./img/new/courses/Bootcamps/iot.png",
  },
  {
    category: "Events",
    title: "AI Exhibition",
    instructor: "Raveen",
    hrs: "9.49",
    students: "67",
    price: "3,999",
    star: "3",
    review: "223",
    img: "./img/new/courses/Events/ai.png",
  },
  {
    category: "Events",
    title: "Robotics Carnival",
    instructor: "Raveen",
    hrs: "9.49",
    students: "67",
    price: "3,999",
    star: "3",
    review: "223",
    img: "./img/new/courses/Events/rc.png",
  },
  {
    category: "Events",
    title: "Guest Lectures",
    instructor: "John Doe",
    hrs: "4.49",
    students: "66",
    price: "4,999",
    star: "5",
    review: "157",
    img: "./img/new/courses/Events/gl.png",
  },
  {
    category: "Events",
    title: "National & International Competitions",
    instructor: "John Doe",
    hrs: "4.49",
    students: "66",
    price: "4,999",
    star: "5",
    review: "157",
    img: "./img/new/courses/Events/nc.png",
  },
  {
    category: "Popular",
    title: "National & International Competitions",
    instructor: "John Doe",
    hrs: "4.49",
    students: "66",
    price: "4,999",
    star: "5",
    review: "157",
    img: "./img/new/courses/Events/nc.png",
  },
  {
    category: "Coding Course",
    title: "Animation/Games in Scratch",
    instructor: "John Doe",
    hrs: "4.49",
    students: "66",
    price: "4,999",
    star: "5",
    review: "157",
    img: "./img/course-3.jpg",
  },
  {
    category: "Coding Course",
    title: "Programming Blocks in Scratch",
    instructor: "John Doe",
    hrs: "4.49",
    students: "66",
    price: "4,999",
    star: "5",
    review: "157",
    img: "./img/course-3.jpg",
  },
  {
    category: "Coding Course",
    title: "Programming Blocks in Pictoblox",
    instructor: "John Doe",
    hrs: "4.49",
    students: "66",
    price: "4,999",
    star: "5",
    review: "157",
    img: "./img/course-3.jpg",
  },
  {
    category: "Coding Course",
    title: "Data Science-Python",
    instructor: "John Doe",
    hrs: "4.49",
    students: "66",
    price: "4,999",
    star: "5",
    review: "157",
    img: "./img/course-3.jpg",
  },
];

const createStar = (num) => {
  let value = "";
  for (let i = 0; i < Number(num); i++) {
    value += '<small class="fa fa-star text-primary"></small>';
  }

  return value;
};

const courseInsert = document.querySelector(".course-insert");
// let t = 0.1;

const courseInsertFunction = (title) => {
  courseInsert.innerHTML = "";
  courseDetails.forEach((course) => {
    if (course.category == title) {
      courseInsert.innerHTML += `
      <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                <div class="course-item bg-light">
                  <div class="position-relative overflow-hidden">
                    <img class="img-fluid" src="${course.img}" alt="" />
                  </div>
                  <div class="text-center p-4 pb-3">
                    <h5 class="mb-4">
                      ${course.title}
                    </h5>
                  </div>
                  
                </div>
              </div>
      `;
    }

    // t += 0.1;
  });
};

courseInsertFunction("Popular");
const courseMainTitle = document.querySelector(".course-title");

const courseHook = document.querySelectorAll(".course-hook");

courseHook.forEach((course) => {
  course.addEventListener("click", (event) => {
    event.preventDefault();
    courseMainTitle.innerHTML = course.textContent.split("0")[0].trim();
    const courseT = course.textContent.trim().split("Courses")[0].trim();
    if (courseT == "Stem Education") {
      courseInsertFunction("Stem Education");
    } else if (courseT == "Robotics") {
      courseInsertFunction("Robotics");
    } else if (courseT == "Events") {
      courseInsertFunction("Events");
    } else if (courseT == "Bootcamps & Workshops") {
      courseInsertFunction("Bootcamps");
    }
  });
});
