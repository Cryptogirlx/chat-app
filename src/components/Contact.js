import React from 'react';



function Contact() {

  return ( 
    <div className = "Contact" >
    < img src= "https://miro.medium.com/max/700/1*qyAOepULOa_kVehhEIySKA.jpeg" className= "avatar"></img>
   <div>
    < div className = "name"> The Cat </div>
    
    <Status />
    </div>

    </div>
  
  

  )

};

function Status(){

  return(

    < div className = "status"> 
    < div className = "status-text"> online </div>
    < div className = "status-online"></div>
    </div>
  )


}

export default Contact
