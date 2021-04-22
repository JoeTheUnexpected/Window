import Inputmask from "inputmask";

const validatePhone = (selector) => {
    const inputs = document.querySelectorAll(selector);
    const inputMask = new Inputmask('+7 (999) 999-99-99');

    inputMask.mask(inputs);
    
    // inputs.forEach(item => {
    //     // item.addEventListener('input', () => {
    //     //     item.value = item.value.replace(/\D/, '');
    //     // });
    // });
};

export default validatePhone;