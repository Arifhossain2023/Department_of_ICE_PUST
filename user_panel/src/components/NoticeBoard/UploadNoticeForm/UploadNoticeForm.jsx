// src/components/NoticeBoard/UploadNoticeForm/NoticeUploadForm.jsx
import React, { useState } from "react";
import axios from "axios";
import { url } from "../../../assets/assets";
import "./UploadNoticeForm.css";

const NoticeUploadForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState(null);
  const [category, setCategory] = useState("General");
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim()) {
      setMessage("Please enter a title.");
      return;
    }

    const formData = new FormData();
    formData.append("title", title.trim());
    formData.append("content", content.trim());
    formData.append("category", category);
    if (file) formData.append("file", file);

    try {
      setUploading(true);
      setMessage("");
      await axios.post(`${url}/api/notices`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setMessage("✅ Notice uploaded successfully!");
      setTitle("");
      setContent("");
      setFile(null);
    } catch (error) {
      console.error(error);
      setMessage("❌ Upload failed. Please try again.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="notice-upload-form">
      <h2 className="form-title">📤 Upload the Notice</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <label>
          Category:
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            disabled={uploading}
          >
            <option value="General">General Notice</option>
            <option value="CA">CA Result</option>
            <option value="SF">SF Result</option>
          </select>
        </label>

        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter notice title"
            disabled={uploading}
            required
          />
        </label>

        <label>
          Content:
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Enter notice content (optional)"
            rows={4}
            disabled={uploading}
          />
        </label>

        <label>
          Attachment (PDF, DOC, Image):
          <input
            type="file"
            accept=".pdf,.doc,.docx,.jpg,.png"
            onChange={(e) => setFile(e.target.files[0])}
            disabled={uploading}
          />
        </label>

        <button type="submit" disabled={uploading}>
          {uploading ? "Uploading..." : "Upload Notice"}
        </button>
      </form>

      {message && (
        <p className={message.includes("success") ? "msg-success" : "msg-error"}>
          {message}
        </p>
      )}
    </div>
  );
};

export default NoticeUploadForm;
