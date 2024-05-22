import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CourseDetail = () => {
  const [data, setData] = useState({});
  const { course_id } = useParams();

  const getCourseFn = async () => {
    const response = await axios.get(
      `https://api-eduvila.onrender.com/courses?id=${course_id}`
    );
    setData(response.data[0]);
  };
  useEffect(() => {
    getCourseFn();
  }, []);
  return <div>{data?.heading}</div>;
};

export default CourseDetail;
