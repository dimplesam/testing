import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Courses = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const getCoursesFn = async () => {
    const response = await axios.get(
      "https://api-eduvila.onrender.com/courses"
    );
    console.log(response.data);
    setData(response.data);
  };

  useEffect(() => {
    getCoursesFn();
  }, []);

  return (
    <div>
      {data.map((course) => {
        return (
          <div onClick={() => navigate(`/courses/${course.id}`)}>
            {course.heading}
            <img src={course.image_url} alt="" />
          </div>
        );
      })}
    </div>
  );
};

export default Courses;
