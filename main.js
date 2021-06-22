const boxEl = document.querySelector('.box');
const contextEl = document.getElementById('context');





window.addEventListener("click", e => {
  contextEl.classList.remove("context")
 contextEl.classList.add("hide")
});

boxEl.addEventListener("contextmenu", e => {

  e.preventDefault();
  const origin = {
    left: e.pageX,
    top: e.pageY
  };

  console.log(origin  , e.clientX , e.clientY)
  // setPosition(origin);
  contextEl.style.left = e.pageX+"px"
  contextEl.style.top =  e.pageY +"px"
  contextEl.classList.add("context")
  return false;
});
