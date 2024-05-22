import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CourseList = () => {
  const [courses, setCources] = useState([]);
  const navigate = useNavigate();
  const getCoursesFn = async () => {
    const response = await axios.get(
      "https://api-eduvila.onrender.com/courses",
      { params: {} }
    );
    setCources(response.data);
  };
  useEffect(() => {
    getCoursesFn();
  }, []);
  return (
    <div className="grid grid-cols-5 bg-gray-200">
      {courses.map((course) => {
        if (course.heading === "Core Java")
          return (
            <div
              className="bg-white rounded-md"
              onClick={() => navigate(`/courses/${course.id}`)}
            >
              {course.heading}
            </div>
          );
      })}
    </div>
  );
};

export default CourseList;
