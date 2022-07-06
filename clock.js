let dot1 = document.getElementsByClassName('dot1');
dot1[0].addEventListener('click',()=>{
    let content = document.getElementsByClassName('content');
    if(content[0].classList.contains('pop1')){
        content[1].classList.toggle('pop2');
        content[0].classList.toggle('pop1');
    }else{
        content[0].classList.toggle('pop1');
        content[1].classList.toggle('pop2');
    }
})
