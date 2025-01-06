import React, { useState } from "react";

const SuccessNotification = ({ message = "تمت إضافة المهمة بنجاح!" }) => {
  const [isVisible, setIsVisible] = useState(false);

  const showNotification = () => {
    setIsVisible(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 3000); // إخفاء الرسالة بعد 3 ثوانٍ
  };

  return (
    <div className="relative">
      <button
        onClick={showNotification}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
      >
        إضافة مهمة
      </button>

      {isVisible && (
        <div className="fixed top-{100px} right-{100px} bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg animate-fade-in-out">
          {message}
        </div>
      )}
    </div>
  );
};

export default SuccessNotification;
