const input = document.forms[0].elements.sInput;
input.addEventListener('blur', () => alert('blurred'), false);
input.addEventListener('change', () => alert('Value has changed'), false);

const form = document.forms['search'];
form.addEventListener('submit', subSearch, false);

function subSearch() {
    alert('Form Submitted');
}