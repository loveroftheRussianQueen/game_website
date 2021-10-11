window.onload = function(){
   const items = document.querySelectorAll('._anim_items');

    if(items.length>0){
        window.addEventListener('scroll', animonScroll);
        function animonScroll(){
              for (let index = 0; index < items.length; index++) {
                  const animItem = items[index];
                  const animItemHeight = animItem.offsetHeight;
                  const animItemOffset = getOffset(animItem).top;
                  const animStart = 4;
       
                  let animItemPoint = window.innerHeight - animItemHeight / animStart;
       
                  if(animItemHeight > window.innerHeight){
                   animItemPoint = window.innerHeight - window.innerHeight / animStart;
                  }
       
                  if((scrollY > animItemOffset - animItemPoint) && scrollY < (animItemOffset + animItemHeight)){
                       animItem.classList.add('_active');
                  }else{
                      animItem.classList.remove('_active');
                  }
       
                  
              }
          }
          function getOffset(el){
              const rect = el.getBoundingClientRect(),
              scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
              scrollTop = window.pageYOffset || document.documentElement.scrollTop;
              return { top: rect.top + scrollTop, left: rect.left + scrollLeft}
          }
       
          setTimeout(() => {
              animonScroll();
          }, 100);
    }

    const toggleButton = document.getElementsByClassName('toggle_button')[0];
    const navbarLinks = document.getElementsByClassName('navbar_links')[0];

    toggleButton.addEventListener('click', () =>{
        navbarLinks.classList.toggle('active')
    })
}




