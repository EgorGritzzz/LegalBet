let toggleButton = document.querySelector('.toggle__button');
let toggleText = document.querySelector('.hidden');
let rotatedArrow  = document.querySelector('#arrow')
let readText = document.querySelector('.read_next');

toggleButton.addEventListener('click',()=>{
  if (toggleText.style.display === 'none') {
    toggleText.style.display = 'block';
    rotatedArrow.style.transform  = 'rotate(180deg)';
    readText.innerText = '';
  } else {
    toggleText.style.display = 'none';
    rotatedArrow.style.transform = 'rotate(0deg)';
    readText.innerText = '...';
  }
});