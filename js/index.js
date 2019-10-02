// Your code goes here

// elements
const logo     = document.querySelector   ( '.nav-container h1'                  );
const map      = document.querySelector   ( '.content-section:nth-child(2) img'  );
const boat2    = document.querySelector   ( '.content-destination img'           );
const go       = document.querySelector   ( '.content-section .text-content h2'  );
const copy     = document.querySelector   ( 'footer p'                           );
const navList  = document.querySelectorAll( '.nav-link'                          );


// functions
const logoRotate   = () => { logo.style.transform = `rotate(180deg)`; };
const logoUnRotate = () => { logo.style.transform = `rotate(0deg)`;   };

const moveLeft = () => {
   go.style.transform = "translate( -10rem )";
   event.stopPropagation();
};

const scaleMapUp   = () => { map.style.transform = "scale(1.4)"; };
const scaleMapDown = () => { map.style.transform = "scale(1)";   };

const scaleBoatUp   = () => { boat2.style.transform = "scale(1.4)"; };
const scaleBoatDown = () => { boat2.style.transform = "scale(1)";   };

const changeBodyColor = () => { 
   document.body.style.backgroundColor = document.body.style.backgroundColor !== "rgb(68, 68, 68)" ? "rgb(68, 68, 68)" : "white";
   document.body.style.color = document.body.style.backgroundColor !== "white" ? "white" : "black";
};

const toggleCopyDisplay = () => { 
   copy.textContent = copy.textContent !== "Copyright Fun Bus 2018" ? "Copyright Fun Bus 2018" : " ";
};

const blackBody = () => {
   document.body.style.backgroundColor = "black";
   document.body.style.color = "white";
};

//events - 10
window.addEventListener( 'resize',     changeBodyColor   );
copy.addEventListener  ( 'dblclick',   toggleCopyDisplay );
logo.addEventListener  ( 'mouseenter', logoRotate        );
logo.addEventListener  ( 'mouseleave', logoUnRotate      );
go.addEventListener    ( 'click',      moveLeft          );
window.addEventListener( 'keyup',      scaleMapDown      );
window.addEventListener( 'keydown',    scaleMapUp        );
window.addEventListener( 'scroll',     changeBodyColor   );
boat2.addEventListener ( 'mousedown',  scaleBoatUp       );
boat2.addEventListener ( 'mouseup',    scaleBoatDown     );

document.body.addEventListener( 'click', blackBody ); // for event propagation mvp

navList.forEach( e => {
   e.addEventListener( 'click', () => { event.preventDefault(); });
});
