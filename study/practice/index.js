console.log("ggss");

// 버튼 클릭시 컨텐츠 5번 이동
const btn = document.querySelector(".btn");
const contents = document.querySelector(".test4");
btn.addEventListener("click", () => {
  contents.scrollIntoView({ behavior: "smooth" });
});
