// src/BackToTop.jsx
import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const BackToTop = ({ color = "bg-blue-700", iconColor = "text-white" }) => {
  const [isVisible, setIsVisible] = useState(false);

  // ฟังก์ชันตรวจสอบการเลื่อนหน้า
  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300); // เมื่อเลื่อนมากกว่า 300px ปุ่มจะปรากฏ
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility); // ลบ event listener เมื่อ component ถูกทำลาย
  }, []);

  // ฟังก์ชันเลื่อนกลับไปที่ด้านบน
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 ${color} hover:opacity-90 p-3 rounded-full shadow-lg transition duration-300`}
        aria-label="Back to top"
      >
        <FaArrowUp className={`${iconColor}`} size={20} />
      </button>
    )
  );
};

export default BackToTop;
