import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './Addblog.css';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

export default function Editblog() {
    const params = useParams();
    const vehiclid = params.sid;
    const location = useLocation();
    let navigate=useNavigate();
    const Data = location.state.data;
  const [title, setTitle] = useState(Data.title||'');
  const [description, setDescription] = useState(Data.description||''); // Corrected spelling
  const [content, setContent] = useState(Data.content||'');
  const [category, setCategory] = useState(Data.category||'');
  const [image, setImage] = useState(Data.image||null);


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('description', description); // Corrected spelling
      formData.append('content', content);
      formData.append('category', category);
      formData.append('image', image);

      const response = await fetch(`http://localhost:5000/api/blogs/edit/${Data._id}`, {
        method: 'PUT',
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to create blog');
      }

      const data = await response.json();
      console.log('Blog created:', data);
      navigate("/bloglist")
      
      // Optionally, reset form fields or navigate to another page upon success
    } catch (error) {
      console.error('Error creating blog:', error.message);
    }
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <div className="add-blog-container">
      <h2>Edit New Blog</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label> {/* Corrected spelling */}
          <input
            type="text"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)} // Corrected spelling
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="content">Content:</label>
          <ReactQuill
            value={content}
            onChange={setContent}
            modules={{
              toolbar: [
                [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
                [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                ['bold', 'italic', 'underline', 'blockquote'],
                ['link', 'image', 'video'],
                ['clean']
              ],
            }}
            formats={[
              'header', 'font', 'list', 'bullet',
              'bold', 'italic', 'underline', 'blockquote',
              'link', 'image', 'video'
            ]}
          />
        </div>
        <div className="form-group">
          <label htmlFor="category">Category:</label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="">Select Category</option>
            <option value="Technology">Technology</option>
            <option value="Health">Health</option>
            <option value="Lifestyle">Lifestyle</option>
            <option value="Business">Business</option>
            <option value="Education">Education</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="image">Image:</label>
          <input
            type="file"
            id="image"
            onChange={handleImageChange}
            required
          />
        </div>
        <button type="submit">Edit Blog</button>
      </form>
    </div>
  );
}