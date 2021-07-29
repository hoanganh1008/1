let character=document.getElementById('character')
let block=document.getElementById('block');
let count=0
function jump(){
    if(character.classList!='animate'){
    character.classList.add('animate');}
    setTimeout(function(){
    character.classList.remove('animate');
},500)};
let checkDead=setInterval(function(){
    let characterTop=parseInt(window.getComputedStyle(character).getPropertyValue('top'
    ));
    let blockLeft=parseInt(window.getComputedStyle(block).getPropertyValue('left'))
    if(blockLeft<20 && blockLeft>0 && characterTop>=130){
        block.style.animation='none';
        block.style.display='none';
        alert('u lose, score'+ Math.floor(count/100));

        location.reload()
    }
    else{
        count++
        document.getElementById('score').innerHTML=Math.floor(count/100)
    }
},10);
