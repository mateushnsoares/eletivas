const counter = document.querySelector('#counter');
function Increase () {
  counter.innerHTML = parseInt(counter.innerHTML) + 1;
}
function Decrease () {
  counter.innerHTML = parseInt(counter.innerHTML) - 1;
}
