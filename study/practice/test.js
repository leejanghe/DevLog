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

//mbti 테스트
function getMBTI() {
  const answers = [];
  const questions = document.querySelectorAll(".question");
  questions.forEach((question) => {
    const answer = question.querySelector("input:checked");
    answers.push(answer.value);
  });
  const result = answers.reduce((acc, cur) => acc + cur);
  const mbti = {
    E: "외향형",
    I: "내향형",
    S: "감각형",
    N: "직관형",
    T: "사고형",
    F: "감정형",
    J: "결정형",
    P: "유연형",
  };
  const resultMBTI = result
    .split("")
    .map((v) => mbti[v])
    .join("");
  document.querySelector(".result").innerHTML = resultMBTI;
}
