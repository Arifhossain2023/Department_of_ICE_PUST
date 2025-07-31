// client/src/utils/getTodayName/getTodayName.js

const getTodayName = () => {
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const today = new Date();
  return days[today.getDay()];
};

export default getTodayName;
