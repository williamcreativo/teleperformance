var btnOpenModal = document.getElementById('btn_open_modal'),
    overlay = document.getElementById('overlay'),
    modal = document.getElementById('modal'),
    btnCloseModal = document.getElementById('btn_close_modal');

    btnOpenModal.addEventListener('click', function(){
        overlay.classList.add('active');
        modal.classList.add('animation');
    })

    btnCloseModal.addEventListener('click', function(){
        overlay.classList.remove('active');
        
    })