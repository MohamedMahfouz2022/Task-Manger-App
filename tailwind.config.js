/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightestBackground: '#EEF2FF', // خلفية فاتحة جدًا للأقسام
        secondaryBackground: '#E0E7FF', // خلفية ثانوية أو تأثير Hover
        cardBackground: '#C7D2FE', // خلفية للبطاقات
        lightBorder: '#A5B4FC', // حدود خفيفة
        iconColor: '#818CF8', // لون الأيقونات أو الأزرار الثانوية
        primaryButton: '#6366F1', // لون الأزرار الرئيسية
        activeButton: '#4F46E5', // لون الأزرار أثناء التفاعل
        subtitleText: '#4338CA', // لون النصوص الفرعية أو المهمة
        darkSectionBackground: '#3730A3', // خلفية غامقة للأقسام
        darkestText: '#312E81', // لون النصوص الداكنة جدًا
      },
    },
  },
  plugins: [],
}

