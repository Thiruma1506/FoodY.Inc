const buttons=document.querySelectorAll('.button');

function pagetransitions()
{
  for(let i=0;i<buttons.length;i++)
  {
   buttons[i].addEventListener('click',function (){
      let currentactive=document.querySelector(".active");
      currentactive.className=currentactive.className.replace('active',' ');
      this.className+=' active';      
   })
  }
}
pagetransitions();