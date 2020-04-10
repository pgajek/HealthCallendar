export const createDate = () => {
  const date = new Date();
  let month = 0;
  let day = 0;
  if (date.getMonth() < 10) {
    month = `0${date.getMonth() + 1}`;
  } else {
    month = date.getMonth() + 1;
  }
  if (date.getDate() < 10) {
    day = `0${date.getDate()}`;
  } else {
    day = date.getDate();
  }
  const theDate = `${date.getFullYear()}-${month}-${day}`;
  return theDate;
};

export const createHour = () => {
  const date = new Date();
  let Hour;
  let Minutes;
  if (date.getHours() < 10) {
    Hour = `0${date.getHours()}`;
  } else {
    Hour = date.getHours();
  }
  if (date.getMinutes() < 10) {
    Minutes = `0${date.getMinutes()}`;
  } else {
    Minutes = date.getMinutes();
  }
  const theHour = `${Hour}:${Minutes}`;
  return theHour;
};
