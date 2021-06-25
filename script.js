function getData() {
  const date = new Date();
  const dateInSevenDays = new Date();
  dateInSevenDays.setDate(date.getDate() + 7);

  let testTime = getFormatedDate(date);
  const testTimeSpan = document.getElementById("testTimeSpan");
  testTimeSpan.innerText = testTime;

  testTime = prompt("Muahaha:", testTime);
  testTimeSpan.innerText = testTime;

  const validUntilTime = getFormatedDate(dateInSevenDays);
  const validUntilSpan = document.getElementById("validUntilSpan");
  validUntilSpan.innerText = validUntilTime;

  const name = prompt("Name:", "Andrei-Iulian Bostan");
  const nameSpan = document.getElementById("nameSpan");
  nameSpan.innerText = name;
}

function getFormatedDate(date) {
  const year = date.getFullYear();

  let day = date.getDate();
  day = day < 10 ? "0" + day : day;

  let month = date.getMonth() + 1;
  month = month < 10 ? "0" + month : month;

  const time = date.toTimeString();
  let hour = time.substr(0, 2) - 3;
  hour = hour < 10 ? "0" + hour : hour;

  let formatedDate = `${day}-${month}-${year} ${hour}:${time.substr(
    3,
    2
  )} (UTC+2)`;

  return formatedDate;
}
