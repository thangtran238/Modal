var btnOpen = document.querySelector('.open-modal')
var modal = document.querySelector('.modal')
var btnClose = document.querySelector('.modal-header i')
var iClose = document.querySelector('.modal-footer button')

function toggleModal() {
  modal.classList.toggle('hide')
}

btnOpen.addEventListener('click', toggleModal)
btnClose.addEventListener('click',toggleModal)
iClose.addEventListener('click',toggleModal)
modal.addEventListener('click',function(e) {
  if(e.target == e.currentTarget) {
    toggleModal();
  }
  console.log(e.currentTarget);
})
