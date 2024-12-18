import React, { useEffect, useState } from "react";
import img1 from "../Blogs/image2.jpg";
import img3 from "../Blogs/image.jpg";
import img2 from "../Blogs/image3.jpg";
import { Link } from "react-router-dom";
export default function Blog() {
  let [BlogsData, setBlogsdata] = useState([]);
  

  let fetchdata = () => {
    let url = "http://localhost:5000/api/blogs/addblogs";
    let res = fetch(url);
    res
      .then((res) => res.json())
      .then((data) => {
        setBlogsdata(data);
      });
  };
  useEffect(() => {
    fetchdata();
  }, []);
  console.log("allblog", BlogsData);
  const handleDelete = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/blogs/delete/${id}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to delete blog");
      }

      console.log("Blog deleted");
      fetchBlogs(); // Refresh the blog list
    } catch (error) {
      console.error("Error deleting blog:", error.message);
    }
  };

  return (
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
            <div className="dark:text-white group">
              <div className="overflow-hidden">
                <img
                  style={{ width: "100%" }}
                  src={item.image}
                  alt="No image"
                  className="mx-auto h-[420px] w-full object-cover group-hover:scale-105 duration-300"
                />
              </div>
              <div className="space-y-2 p-4 ml-6 bg-white dark:bg-slate-950 -translate-y-16">
                <h1 className="line-clamp-1 text-2xl font-semibold">
                  {item.title}
                </h1>
                <p
                  className="line-clamp-4 text-gray-500 text-sm"
                  style={{ color: "#000" }}
                >
                  {item.description}
                </p>
                <div className="flex justify-end pr-4 text-gray-500">
               
                  <Link
                    to={`/blogsdetail/${item._id}`}
                    state={{
                      title: item.title,
                      image: item.image,
                      description: item.description,
                      content: item.content,
                    }}
                  >
                    Go to Blog Details
                   
                  </Link>
                </div>
              </div>
            </div>
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
  );
}
