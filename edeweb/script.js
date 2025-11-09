//  Theme 
const body = document.body;
lightBtn.onclick = () => body.setAttribute("data-theme","light");
darkBtn.onclick  = () => body.setAttribute("data-theme","dark");

// Page Switch
contactBtn.onclick = () => {
  homePage.classList.add("hide");
  contactPage.classList.remove("hide");
  goBackBtn.classList.remove("hide");
  contactBtn.classList.add("hide");
};
goBackBtn.onclick = () => {
  contactPage.classList.add("hide");
  homePage.classList.remove("hide");
  goBackBtn.classList.add("hide");
  contactBtn.classList.remove("hide");
};

// Typing 
const typingText = document.getElementById("typingText");
const text = "Welcome";
let i = 0;
(function type(){
  if(i < text.length){ typingText.textContent += text[i++]; setTimeout(type,120); }
})();

//  Scroll 
window.addEventListener("scroll", () => {
  document.querySelectorAll(".reveal").forEach((el,i)=>{
    if(el.getBoundingClientRect().top < window.innerHeight - 100)
      setTimeout(()=>el.classList.add("visible"), i*100);
  });
});
