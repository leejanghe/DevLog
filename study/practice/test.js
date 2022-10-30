// console.log(1 + 1);

// function add(a, b) {
//   return a + b;
// }

// console.log(add(2, 3));

// 코파일럿 test
function calculateDaysBetweenDates(begin, end) {
  const beginDate = new Date(begin);
  const endDate = new Date(end);
  const diff = endDate.getTime() - beginDate.getTime();
  const days = diff / (1000 * 60 * 60 * 24);
  return days;
}

//날짜를 입력받아서 날짜를 반환하는 함수
function getDateString(date) {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${year}-${month}-${day}`;
}
