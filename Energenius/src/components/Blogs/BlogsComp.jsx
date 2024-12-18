import React from "react";
import BlogCard from "./BlogCard";
// import dwo from "./download.png";
import img2 from "./image2.jpg";
import img1 from "./image.jpg";
import img3 from "./image3.jpg";

const BlogsData = [
  {
    id: 1,
    image: img1,
    title: "The Future of IT",
    description:
      "The rapid advancement of technology is causing a significant shift in the corporate environment. At Keendroid, we keep up with these developments and are aware of how they will change the way companies run. We'll look at a few major trends that are shaping the direction of IT and how they affect the workplace in this blog post. The development of machine learning (ML) and artificial intelligence (AI) is one of the biggest shifts. By automating monotonous jobs, these technologies allow human workers to concentrate on more complex strategic thinking and problem-solving. Furthermore, organisations are gaining deeper insights into their data with AI-powered analytics, which empowers them to make data-driven decisions and optimise operations.",
    author: "Someone",
    date: "April 22, 2022",
  },
  {
    id: 2,
    image: img2,
    title: "How to Make the Most of Your Budget for IT",
    description:
      "Strapped for IT resources? Keendroid can help you stretch your budget further! Here's a sneak peek: prioritize projects aligned with business goals, explore cost-effective solutions like open-source software, leverage cloud services for scalability, and train your IT staff to maximize existing resources.  Stay tuned for our next blog post where we'll delve deeper into these strategies! ",
    author: "Someone",
    date: "April 22, 2022",
  },
  {
    id: 3,
    image: img3,
    title:
      "The Power of Real-Time Tracking: How Businesses Can Benefit from Increased Visibility",
    description:
      "In today's fast-paced business environment, real-time tracking empowers companies with a superpower:  increased visibility.  Imagine knowing exactly where your inventory is located, monitoring deliveries in real-time to keep customers informed, or even tracking field service technicians to optimize routes and boost productivity.  This is the power of real-time tracking, and Keendroid can help you harness it to streamline operations, improve customer satisfaction, and gain a vital edge in the competitive marketplace.  Stay tuned for our next blog post where we'll delve deeper into how real-time tracking can benefit your specific business needs! ",
    author: "Someone",
    date: "April 22, 2022",
  },
];

const BlogsComp = () => {
  return (
    <>
      <div className="bg-gray-100 dark:bg-gray-900 dark:text-white py-10 pb-14">
        <section data-aos="fade-up" className="container ">
          <h1
            className="my-8 /50 py-2 pl-2 text-3xl font-semibold"
            style={{ color: "#ab0000" }}
          >
            Our Blogs
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BlogsData.map((item) => (
              <BlogCard key={item.id} {...item} />
            ))}
          </div>
          <div className="text-center">
            {/* <button
              style={{ backgroundColor: "#ab0000" }}
              className="primary-btn"
            >
              View All Posts
            </button> */}
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogsComp;
