import React from 'react';
import './App.css';
import {Gizmo,BabyYoda,Chewie} from './components/Contact.js'

function App() {
  return (
    <div className="App">
  <Gizmo img=  "https://miro.medium.com/max/700/1*qyAOepULOa_kVehhEIySKA.jpeg" name= "Gizmo"  />
  <BabyYoda img ="https://tinyurl.com/yxpat9dz" name = "Baby Yoda" />
 <Chewie  img= "https://tinyurl.com/yaqpwgly"  name = "Chewbacca" />

    
    
    </div>

  );
}

export default App;
