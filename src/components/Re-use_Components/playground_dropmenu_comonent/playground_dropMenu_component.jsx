import PlaygroundDropdownItem from './playground_Dropdown_item_component';
import React, {useState} from 'react';
// import '../../routes/navigation/navigation.styles.scss';
import './playground_menu.styles.scss';


function increaseFonts (setFontSize, fontSize, pushCount, setPushCount) {


  if(pushCount == 8) {
    return;
  }
  if(pushCount < 8) {
    setFontSize({small: fontSize.small + 1, medium: fontSize.medium + 1, large: fontSize.large + 1, 
                xLarge: fontSize.xLarge + 1, xxLarge: fontSize.xxLarge + 1});
    setPushCount(pushCount + 1);
    }
}

function decreaseFonts (setFontSize, fontSize, setInlarged, pushCount, setPushCount) {

  if(pushCount == 0) {
    return;
  }
 
    if(pushCount > 0) {
      setFontSize({small: fontSize.small - 1, medium: fontSize.medium - 1, large: fontSize.large - 1, 
                  xLarge: fontSize.xLarge - 1, xxLarge: fontSize.xxLarge - 1});
      setInlarged(false);
      setPushCount(pushCount - 1);
      }

    
    
  }

  function underlineLinks () {

    // let myDocStyle = document.documentElement.style;
    const element = document.querySelector(':root');
    let compStyle = getComputedStyle(element);
    let currentProp = compStyle.getPropertyValue('--text-decoration-line');
    
    if (currentProp === 'underline') element.style.setProperty('--text-decoration-line', `none`);
    
    if (currentProp === 'none') element.style.setProperty('--text-decoration-line', `underline`);
  
  }

  function resetAttributes (setFontSize, setInlarged, setPushCount) {

    const resetElement = document.querySelector(':root');
 
    setFontSize({small: 14, medium: 16, large: 20, xLarge: 28, xxLarge: 40});
    
    resetElement.style.setProperty('--grayScale_Value', '0');
    resetElement.style.setProperty('--text-decoration-line', `none`);
    setInlarged(false);
    setPushCount(0);

  }

  function selectGrayScale() {

    const element = document.querySelector(':root');
    let compStyle = getComputedStyle(element);
    let grayScale_Value = compStyle.getPropertyValue('--grayScale_Value');
    
    if (grayScale_Value === '0') element.style.setProperty('--grayScale_Value', '1');
    if (grayScale_Value === '1') element.style.setProperty('--grayScale_Value', '0');

   return;

 }





function PlaygroundMenu(props) {
   

  const [fontSize, setFontSize] = useState({small: 14,
    medium: 16,
    large: 20,
    xLarge: 28,
    xxLarge: 40,});

 
  

    // This code is set to open the drop down menu.  Future plan to use dropdownState instead if possible. 
    const [open, setOpen] = useState(false);

      // this line is to set the current state as to if the text is already in larged or not.
    const [inLarged, setInlarged] = useState(false);
    const [pushCount, setPushCount] = useState(0);
  

    function Delay() {

    /*This block of code is used to access the scss class.  This also takes into account the
   setTimeout section is set to account for the initial error of trying to access content 
   before fully loaded. */
   setTimeout(function() {
     const profileElement = document.querySelector(':root');
     profileElement.style.setProperty('--fontSize_small', `${fontSize.small}px`);
     profileElement.style.setProperty('--fontSize_medium', `${fontSize.medium}px`);
     profileElement.style.setProperty('--fontSize_large', `${fontSize.large}px`);
     profileElement.style.setProperty('--fontSize_xLarge', `${fontSize.xLarge}px`);
     profileElement.style.setProperty('--fontSize_xxLarge', `${fontSize.xxLarge}px`);
   }, 200);
}

if (document.readyState == 'complete') {
   Delay();
} else {
   document.onreadystatechange = function () {
       if (document.readyState === "complete") {
           Delay();
       }
   }
}

  
    
    

  return(
    <div className='menu-container' /*ref ={menuRef}*/> 
        <button className='playgroundMenu-trigger' onClick={() =>{setOpen(!open)}}>
          <span>
              Playground Features
          </span>
        </button>
        <div className={`playgroundDropdown-menu  ${open? 'active': 'inactive'}`}>
            <br/>
            <h3><center>Features</center></h3>
          
            <PlaygroundDropdownItem onClick={() => increaseFonts(setFontSize, fontSize, pushCount, setPushCount)} 
                            text = {"Increase text"} />
             <PlaygroundDropdownItem onClick={() => decreaseFonts(setFontSize, fontSize, setInlarged, pushCount, setPushCount)}
                            text = {"Decrease text"} />
            <PlaygroundDropdownItem onClick={() => underlineLinks()}
                            text = {"Links Underline"} />
            {/* <DropdownItem onClick={() => readableFonts(setFontSize, fontSize, setInlarged, inLarged, setPushCount)}
                            text = {"Readable Font"}/> */}
            <PlaygroundDropdownItem onClick={() => selectGrayScale()}
                            text = {"GrayScale"} />                                                                                
            <PlaygroundDropdownItem onClick={() => resetAttributes(setFontSize, setInlarged, setPushCount)}
                            text = {"Reset"}/>
          
        </div>  
    </div>

  );
}



export default PlaygroundMenu;





