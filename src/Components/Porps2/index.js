import React from "react";
import BlogCard from "../../Shared/BlogCard";

const Props2 = () => {
  const dummyBlogs = [
    {
      id: 1,
      title: "The Art of Cooking: Mastering Culinary Skills",
      author: "Chef Gordon",
      content:
        "Cooking is not just about following recipes; it's about understanding ingredients...",
      date: "2024-03-10",
      tags: ["cooking", "culinary", "recipes"],
      likes: 56,
      comments: [
        {
          id: 1,
          user: "Foodie123",
          comment:
            "I love experimenting in the kitchen, this article is inspiring!",
          date: "2024-03-11",
        },
        {
          id: 2,
          user: "CookingEnthusiast",
          comment:
            "These tips are so helpful for beginners like me, thank you!",
          date: "2024-03-12",
        },
      ],
    },
    {
      id: 2,
      title: "Exploring the Wonders of Space Travel",
      author: "Dr. Astronaut",
      content:
        "Space travel has always fascinated humanity. From the first human steps on the moon...",
      date: "2024-03-08",
      tags: ["space", "exploration", "astronomy"],
      likes: 78,
      comments: [
        {
          id: 1,
          user: "SpaceGeek1",
          comment: "I dream of going to space one day!",
          date: "2024-03-09",
        },
        {
          id: 2,
          user: "StarGazer22",
          comment: "These advancements in space technology are mind-blowing!",
          date: "2024-03-10",
        },
      ],
    },
    {
      id: 3,
      title: "The Power of Mindfulness: Achieving Inner Peace",
      author: "Meditation Master",
      content:
        "In today's fast-paced world, mindfulness has become increasingly important...",
      date: "2024-03-05",
      tags: ["mindfulness", "meditation", "mental health"],
      likes: 102,
      comments: [
        {
          id: 1,
          user: "ZenSeeker",
          comment: "Practicing mindfulness has changed my life for the better!",
          date: "2024-03-06",
        },
        {
          id: 2,
          user: "InnerPeace123",
          comment:
            "I struggle with anxiety, and mindfulness has been a lifesaver!",
          date: "2024-03-07",
        },
      ],
    },
    {
      id: 4,
      title: "Unraveling the Mysteries of Ancient Civilizations",
      author: "History Buff",
      content:
        "Ancient civilizations hold a wealth of knowledge and mysteries waiting to be uncovered...",
      date: "2024-03-03",
      tags: ["history", "archaeology", "ancient civilizations"],
      likes: 92,
      comments: [
        {
          id: 1,
          user: "ArchaeoExplorer",
          comment:
            "I'm fascinated by ancient history, can't wait to read more!",
          date: "2024-03-04",
        },
        {
          id: 2,
          user: "HistoryEnthusiast",
          comment: "It's amazing how much we can learn from our ancestors!",
          date: "2024-03-05",
        },
      ],
    },
    {
      id: 5,
      title: "The Beauty of Nature: Exploring National Parks",
      author: "Nature Lover",
      content:
        "National parks are a treasure trove of natural beauty and biodiversity...",
      date: "2024-03-01",
      tags: ["nature", "national parks", "outdoors"],
      likes: 120,
      comments: [
        {
          id: 1,
          user: "OutdoorAdventurer",
          comment:
            "I've visited several national parks, each one is unique and breathtaking!",
          date: "2024-03-02",
        },
        {
          id: 2,
          user: "NaturePhotographer",
          comment:
            "Nature never fails to inspire me. These photos are stunning!",
          date: "2024-03-03",
        },
      ],
    },
  ];

  console.log(dummyBlogs);

  return (
    <div className="grid grid-cols-4 bg-gray-200 gap-3 p-3">
      {/* <p>{dummyBlogs[0].title}</p>
      <p>{dummyBlogs[1].title}</p>
      <p>{dummyBlogs[2].title}</p>
      <p>{dummyBlogs[3].title}</p>
      <p>{dummyBlogs[4].title}</p> */}
      {/* {dummyBlogs.map((blog) => {
        return <BlogCard title={blog.title} content={blog.content} />;
      })} */}
      {dummyBlogs.map((blog) => {
        return <BlogCard data={blog} />;
      })}
    </div>
  );
};

export default Props2;
