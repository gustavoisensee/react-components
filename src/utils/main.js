export const getFullDateTimeMinMilliseconds = () => {
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  const hour = date.getHours();
  const min = date.getMinutes();
  const milleseconds = date.getMilliseconds();
  return `${day}${month}${year}${hour}${min}${milleseconds}`;
};

export default getFullDateTimeMinMilliseconds;
