// import axios from "axios";
import { normalize, schema } from "normalizr";


// axios
//   .get("https://api.myjson.com/bins/y355u")
//   .then(function(response) {
//     console.log(response.data);
//     return response.data;
//   })
//   .then(originalData => {
//     console.log(normalizeData(originalData));
//   })
//   .catch(function(error) {
//     console.log(error);
//   });

const originalData = [
  {
    "id": "student-1", 
    "name": "Mango", 
    "courses": [
      { 
        "id": "course-1", 
        "name": "Blockchain", 
        "instructors": [
          { 
            "id": "instructor-1", 
            "name": "Jack" 
          }, { 
            "id": "instructor-2", 
            "name": "Ming" 
          }
        ] 
      }, { 
        "id": "course-2", 
        "name": "AI", 
        "instructors": [
          { 
            "id": "instructor-2", 
            "name": "Ming" 
          }, { 
            "id": "instructor-3", 
            "name": "Pam" 
          }
        ] 
      }
    ] 
  }, { 
    "id": "student-2", 
    "name": "Poly", 
    "courses": [
      { 
        "id": "course-2", 
        "name": "AI", 
        "instructors": [
          { 
            "id": "instructor-2", 
            "name": "Ming" 
          }, { 
            "id": "instructor-3", 
            "name": "Pam" 
          }
        ] 
      }, { 
        "id": "course-3", 
        "name": "Machine Learning", 
        "instructors": [
          { 
            "id": "instructor-1", 
            "name": "Jack" 
          }, { 
            "id": "instructor-4", 
            "name": "David" 
          }
        ] 
      }
    ] 
  }, { 
    "id": "student-3", 
    "name": "Ajax", 
    "courses": [
      { 
        "id": "course-1", 
        "name": "Blockchain", 
        "instructors": [
          { 
            "id": "instructor-1", 
            "name": "Jack" 
          }, { 
            "id": "instructor-2", 
            "name": "Ming" 
          }
        ] 
      }, { 
        "id": "course-3", 
        "name": "Machine Learning", 
        "instructors": [
          { 
            "id": "instructor-1", 
            "name": "Jack" 
          }, { 
            "id": "instructor-4", 
            "name": "David" 
          }
        ] 
      }
    ] 
  }
]

const normalizeData = originalData => {
  const instructor = new schema.Entity("instructors");
  const course = new schema.Entity("cources", {
    instructors: [instructor]
  });
  const student = new schema.Entity("students", {
    courses: [course]
  });
  const normalizedData = normalize(originalData, [student]);
  console.log(normalizedData);
};

console.log(normalizeData(originalData));