// client/src/components/NoticeBoard/NoticeTabs/NoticeTabs.jsx
import React, { useState } from "react";
import NoticeList from "../NoticeList/NoticeList";

const NoticeTabs = () => {
  const categories = ["General", "CA", "SF"];
  const [active, setActive] = useState("General");

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <div className="flex gap-4 mb-4">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-4 py-2 rounded font-semibold shadow ${
              active === cat ? "bg-blue-600 text-white" : "bg-gray-200"
            }`}
          >
            {cat} Notice
          </button>
        ))}
      </div>

      <NoticeList category={active} />
    </div>
  );
};

export default NoticeTabs;
