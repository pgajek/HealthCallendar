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

export const checkValidity = (name, regex) => {
  if (name !== '') {
    if (regex.test(name)) return true;
    else return false;
  } else return false;
};

export const createNewDay = (userId, apiToken) => {
  const day = {
    date: createDate(),
    portionsAlcohol: 0,
    portionsDrink: 0,
    portionsSnack: 0,
    userId,
  };
  const token = JSON.parse(JSON.stringify(`Bearer ${apiToken}`));
  return fetch(`https://164.132.97.42:8443/health-calendar/api/day`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      Authorization: `${token}`,
    },
    body: JSON.stringify(day),
  })
    .then((res) => {
      this.getDayData();
    })
    .catch((err) => console.log(err));
};
