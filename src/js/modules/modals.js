import setBodyMargin from './setBodyMargin';

const modals = () => {
    const scroll = setBodyMargin();

    function bindModal(triggerSelector, modalSelector, closeSelector, modalTimer, closeClickOverlay = true, valuesInputed = true) {
        const trigger = document.querySelectorAll(triggerSelector),
              modal = document.querySelector(modalSelector),
              close = document.querySelector(closeSelector),
              windows = document.querySelectorAll('[data-modal]');
        
        trigger.forEach(item => {
            item.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }
    
                if (valuesInputed) {
                    openModal(modal, windows, modalTimer);
                } else {
                    let message = document.createElement('div');
                    message.classList.add('status');
                    message.textContent = 'Введите размеры';

                    const parent = item.parentNode;
                    const inputs = parent.querySelectorAll('input');
                    if (inputs[0].value && inputs[0].value) {
                        if (parent.querySelector('.status')) {
                            parent.querySelector('.status').remove();
                        }
                        openModal(modal, windows, modalTimer);
                    } else {
                        if (!parent.querySelector('.status')) {
                            parent.appendChild(message);
                        }
                    }
                }
            });
        });

        close.addEventListener('click', () => {
            closeModal(modal, windows);
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal && closeClickOverlay) {
                closeModal(modal, windows);
            }
        });

        document.addEventListener('keydown', (event) => {
            if (event.code === 'Escape') {
                closeModal(modal, windows);
            }
        });
    }

    const setModalTimer = setTimeout(() => {
        document.querySelector('.popup_engineer').style.display = 'block';
        document.body.style.overflow = 'hidden';
        document.body.style.marginRight = `${scroll}px`;
    }, 60000);

    function openModal(modal, windows, modalTimer) {
        windows.forEach(item => {
            item.style.display = 'none';
        });

        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        document.body.style.marginRight = `${scroll}px`;

        if (modalTimer) {
            clearInterval(modalTimer);
        }
    }

    function closeModal(modal, windows) {
        windows.forEach(item => {
            item.style.display = 'none';
        });

        modal.style.display = 'none';
        document.body.style.overflow = '';
        document.body.style.marginRight = `0px`;
    }

    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close', setModalTimer);
    bindModal('.phone_link', '.popup', '.popup .popup_close', setModalTimer);
    bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close', setModalTimer);
    bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', setModalTimer, false, false);
    bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', setModalTimer, false);
};

export default modals;