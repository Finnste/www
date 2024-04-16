var scrollContainer = document.getElementById('reihe');
console.log(scrollContainer);

scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
});