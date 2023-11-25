let buttonCollapse, legend;
buttonCollapse = document.getElementById('collapselegend');
legend= document.querySelector('#legend ul');
buttonCollapse.addEventListener('click',function(){
    legend.style.display='none';
    buttonCollapse.textContent='Mostrar';
})