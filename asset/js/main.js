let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let title = document.getElementById('title');
let opacity = document.getElementById('opacity');
let opacity2 = document.getElementById('opacity2');
let section0 = document.querySelector('section');
let g1 = document.getElementById('g1');
let g2 = document.getElementById('g2');
let d4 = document.getElementById('d4');
let d1 = document.getElementById('d1');
let d2 = document.getElementById('d2');
let d3 = document.getElementById('d3');

window.addEventListener('scroll', function(){
    var value = window.scrollY;
    opa = 1;
    title.style.opacity = opa - value  * 0.0016;
    opacity.style.opacity = opa - value  * 0.0016;
    opacity2.style.opacity = opa - value  * 0.0016;
    stars.style.left = value * 0.25 + 'px';
    moon.style.top = value * 2.50 + 'px';
    g2.style.top = value * 1.5 +'px';
    g1.style.top = value * 0.9 +'px';
    d4.style.top = value * 1.4 +'px';
    d3.style.top = value * 1.2 +'px';
    d2.style.top = value * 1.3 +'px';
    d1.style.top = value * 1 +'px';
});



let section = document.querySelector('section');
let space = document.getElementById('space');
let marge = 170;
let marge2 = 170;
let moon2 = document.getElementById('moon2');
let m_1 = document.getElementById('m-1');
let d_0 = document.getElementById('d-0');
let d_1 = document.getElementById('d-1');
let d_2 = document.getElementById('d-2');
let g_0 = document.getElementById('g-0');
let g_1 = document.getElementById('g-1');
let g_2 = document.getElementById('g-2');
let g_3 = document.getElementById('g-3');


window.addEventListener('scroll', function(){
    valueSection = section.offsetHeight;
    valueSpace = space.offsetHeight;
    valueFinal = valueSection + valueSpace;
    margeTest = valueSection + marge2;
    margeFinal = valueFinal + marge;
    value = window.scrollY;
    resScrollValue = (value - valueSection - valueSpace );
    resScrollValueMarge = (value - valueSection - valueSpace - marge );

    if ( value > valueSection && value < valueFinal) {
        moon2.style.top = resScrollValue * 1.3 + 'px';
        g_0.style.left = resScrollValue * 3 + 'px';
        g_1.style.top = - resScrollValue * 0.8 + 'px';
        g_2.style.top = - resScrollValue * 1.3 + 'px';
        g_3.style.top = resScrollValue * 0.5 + 'px';
        d_0.style.left = - resScrollValue * 1.3 + 'px';
        d_1.style.top = resScrollValue * 1 + 'px';
        d_1.style.left = - resScrollValue * 1 + 'px';
        d_2.style.left = - resScrollValue * 0.5 + 'px';
        m_1.style.top = - resScrollValue * 2 + 'px';
    }
    if (value > margeFinal) {
        moon2.style.top = - resScrollValueMarge * 1.3 + 'px';
        g_0.style.left = - resScrollValueMarge * 3 + 'px';
        g_1.style.top =  resScrollValueMarge * 0.8 + 'px';
        g_2.style.top =  resScrollValueMarge * 1.3 + 'px';
        g_3.style.top = - resScrollValueMarge * 0.5 + 'px';
        d_0.style.left =  resScrollValueMarge * 1.3 + 'px';
        d_1.style.top = - resScrollValueMarge * 1 + 'px';
        d_1.style.left = resScrollValueMarge * 1 + 'px';
        d_2.style.left =  resScrollValueMarge * 0.5 + 'px';
        m_1.style.top =  resScrollValueMarge * 2 + 'px';
    }
})


let toggle = document.querySelector('.anim_toggle');
let menu = document.querySelector('.anim_menu');

let toggle1 = document.querySelector('.anim_toggle1');
let menu1 = document.querySelector('.anim_menu1');

toggle.onclick = function(){
    menu.classList.toggle('active');
    menu1.classList.remove('active');

}
toggle1.onclick = function(){
    menu1.classList.toggle('active');
    menu.classList.remove('active');
}


let last = document.getElementById('last');
let litle = document.getElementById('litle');
let medium = document.getElementById('medium');
let big = document.getElementById('big');

let section2 = document.querySelector('seconde');

window.addEventListener('scroll', function(){
    valueSection = section.offsetHeight;
    valueSection2 = section.offsetHeight;
    valueSpace = space.offsetHeight;
    valueFinal = valueSection +  valueSection2 + valueSpace;
    margeTest = valueSection + marge2;
    margeFinal = valueFinal + marge;
    value = window.scrollY;
    resScrollValue = (value - valueSection - valueSpace - valueSection2 );

    if ( valueFinal > value) {
        litle.style.left =  resScrollValue * 0.5 + 'px';
        medium.style.left = - resScrollValue * 0.5 + 'px';
        big.style.top = - resScrollValue * 1 + 'px';
    }
})


const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)
  
    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
  }
  showMenu('nav-toggle','nav-menu');


  const navA = document.querySelectorAll('.nav_a');   

  function linkAction(){
    navA.forEach(n => n.classList.remove('active'));
    this.classList.add('active');
  
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
  }
  navA.forEach(n => n.addEventListener('click', linkAction));