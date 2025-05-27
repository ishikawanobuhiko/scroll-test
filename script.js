const boxes = document.querySelectorAll('.box');

window.addEventListener("scroll",() => {
 //今いる位置(座標)をどのように扱うか? 
    const line = 400;
boxes.forEach((box) => {
    const top = box.getBoundingClientRect().top;
if(top> line) {
box.classList.add('show');
} else {
    box.classList.remove('show');
}
});
});     