export const getCurrentDateTime = () => {
  const date = new Date();
  const options = {
    timeZone: 'Asia/Kolkata',
    hour: '2-digit' as '2-digit',
    minute: '2-digit' as '2-digit',
    hour12: true,
    weekday: 'short' as 'short',
    day: '2-digit' as '2-digit',
    month: 'short' as 'short',
  };
  const formattedDate = date.toLocaleString('en-US', options);
  const [weekday, month, day, time, period] = formattedDate.split(/[\s,]+/);
  return `${time} ${period} ${day} ${month}`;
};