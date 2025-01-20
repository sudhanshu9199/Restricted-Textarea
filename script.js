const textarea = document.getElementById('text-area');
const charCount = document.getElementById('char-count');
const maxLength = textarea.getAttribute('maxlength');

textarea.addEventListener('input', () => {
    const currentLength = textarea.value.length;
    charCount.textContent = currentLength;

    if(currentLength >= maxLength){
        textarea.classList.add('limit-reached');
    }
    else{
        textarea.classList.remove('limit-reached');
    }
});