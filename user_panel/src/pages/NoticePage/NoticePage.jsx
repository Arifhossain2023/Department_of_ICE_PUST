import React, { useState } from "react";
import NoticeUploadForm from "../../components/NoticeBoard//UploadNoticeForm/UploadNoticeForm";
import NoticeList from "../../components/NoticeBoard/NoticeList/NoticeList";
import "./NoticePage.css"; // CSS ইমপোর্ট করলাম

const NoticePage = () => {
  const [noticeType, setNoticeType] = useState("General");
  const [showUploadForm, setShowUploadForm] = useState(false);

  return (
    <div className="container">
      <h1>Notice Board</h1>

      {/* Notice Type Buttons */}
      <div className="notice-type-buttons" role="group" aria-label="Select Notice Category">
        <button
          onClick={() => setNoticeType("General")}
          className={noticeType === "General" ? "active" : ""}
          aria-pressed={noticeType === "General"}
        >
          General Notice
        </button>
        <button
          onClick={() => setNoticeType("CA")}
          className={noticeType === "CA" ? "active" : ""}
          aria-pressed={noticeType === "CA"}
        >
          CA Result
        </button>
        <button
          onClick={() => setNoticeType("SF")}
          className={noticeType === "SF" ? "active" : ""}
          aria-pressed={noticeType === "SF"}
        >
          SF Result
        </button>
      </div>

      {/* Upload Notice Toggle Header */}
      <div
        className="upload-toggle"
        onClick={() => setShowUploadForm(!showUploadForm)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") setShowUploadForm(!showUploadForm);
        }}
        aria-expanded={showUploadForm}
        aria-controls="notice-upload-form"
      >
        {showUploadForm ? (
          <>
            Upload the Notice
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowUploadForm(false);
              }}
              className="close-btn"
              aria-label="Close upload form"
              title="Close"
            >
              &times;
            </button>
          </>
        ) : (
          "Upload the Notice"
        )}
      </div>

      {/* Conditionally show the upload form */}
      {showUploadForm && (
        <div id="notice-upload-form" role="region" aria-live="polite">
          <NoticeUploadForm noticeType={noticeType} />
        </div>
      )}

      {/* Show the Notice List below */}
      <div className="notice-list">
        <NoticeList category={noticeType} />
      </div>
    </div>
  );
};

export default NoticePage;
