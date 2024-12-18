import React from "react";
import "./Blogdetails.css";
import img from "./image.jpg";
import dwo from "./download.png";
import parse from "html-react-parser";
import { useLocation, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

function BlogsDetails(props) {
  const location = useLocation();
  let navigate = useNavigate();
  const params = useParams();
  let BlockID = params.cid;
  const { title, image, description, content } = location.state || {};

  return (
    <>
      <Helmet>
        <title>{title ? `${title} - Keendroid Blog` : "Keendroid Blog"}</title>
        <meta name="description" content={description || "Read the latest blog post"} />
        <meta name="keywords" content="blog, React, SEO, Technology, Articles" />
        <meta name="author" content="Keendroid Team" />
        {/* Open Graph Tags for better social media sharing */}
        <meta property="og:title" content={title || "Keendroid Blog"} />
        <meta property="og:description" content={description || "Read the latest blog post"} />
        <meta property="og:image" content={image || img} />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:type" content="article" />
        {/* Twitter Card Tags for Twitter sharing */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title || "Keendroid Blog"} />
        <meta name="twitter:description" content={description || "Read the latest blog post"} />
        <meta name="twitter:image" content={image || img} />
      </Helmet>
      <div className="blog-details">
        <div className="container">
          <p className="subtitle">
            <b>{title}</b>
          </p>
          <div className="image-container">
            <img src={image} alt="Creative abstract image" />
          </div>
          <div className="post-meta">
            <p className="author">
              <img src={dwo} alt="Author Image" className="author-image" />
              by Keendroid Team
            </p>
            <p className="date">27 February, 2024</p>
          </div>
          <h2 className="significant_text" style={{ color: "#ffff" }}>
            {parse(content)}
          </h2>
          <br />
          <div className="post-content">
            <p className="post-content">{parse(description)}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogsDetails;
