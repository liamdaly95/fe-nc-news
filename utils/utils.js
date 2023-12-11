export const convertDate = (dateTime) => {
  const date = dateTime.slice(0, 10);
  const time = dateTime.slice(11,16);
  const currDate = new Date();
  const currDay = currDate.getDate();
  const currMonth = currDate.getMonth() + 1;
  const currYear = currDate.getFullYear();
  const currDateConverted = `${currYear}-${currMonth}-${currDay}`;
  if (currDateConverted === date) {
    return `Created at ${time}`;
  }
  return `Created on ${date.slice(8)}-${date.slice(5,7)}-${date.slice(0,4)}`;
};

