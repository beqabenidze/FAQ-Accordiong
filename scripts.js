const ulFlex = document.querySelectorAll('.ul-flex');
const hidden = document.querySelectorAll('.hidden');
const arrow = document.querySelectorAll('.arrow')



for(let n = 0; n < ulFlex.length; n++){
    ulFlex[n].addEventListener('click', () => {
        for(let k of hidden){
            k.style.display = 'none'
        }
        for(k of ulFlex){
            k.style.color = 'initial'
        }
        for(k of arrow){
            k.style.transform = 'none'
        }        
        ulFlex[n].style.color = '#1E1F36'
        ulFlex[n].style.weight = '700'
        hidden[n].style.display = 'inherit';
        hidden[n].style.marginTop = '15px'
        hidden[n].style.color = '#787887'
        arrow[n].style.transform = 'rotate(180deg)'
    });
    ulFlex[n].addEventListener('mouseenter', () => {
        ulFlex[n].style.color = '#F47B56'
    });
    ulFlex[n].addEventListener('mouseleave', () => {
        ulFlex[n].style.color = 'inherit'
    })
}



