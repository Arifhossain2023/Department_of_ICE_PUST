// src/components/NoticeBoard/NoticeList/NoticeList.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { url } from "../../../assets/assets";
import "./NoticeList.css";

const NoticeList = ({ category }) => {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    if (!category) return;

    axios
      .get(`${url}/api/notices/${category}`)
      .then((res) => setNotices(res.data))
      .catch((err) => console.error("Error fetching notices", err));
  }, [category]);

  return (
    <div className="notice-list">
      <h2 className="notice-list-heading">{category} Notices</h2>
      {notices.length === 0 ? (
        <p className="notice-empty">No notices available.</p>
      ) : (
        notices.map((notice) => (
          <div key={notice._id} className="notice-card">
            <h3 className="notice-title">{notice.title}</h3>
            <p className="notice-content">{notice.content}</p>
            {notice.file && (
              <a
                href={`${url}${notice.file}`}
                target="_blank"
                rel="noopener noreferrer"
                className="notice-link"
              >
                View Attachment
              </a>
            )}
            <p className="notice-date">
              {new Date(notice.date).toLocaleDateString()}
            </p>
          </div>
        ))
      )}
    </div>
  );
};

export default NoticeList;
