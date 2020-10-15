import React from 'react';



function Gizmo(props) {

  return (
    <div className="Contact" >
      < img src={props.img} className="avatar"></img>
      <div>
        < div className="name"> {props.name} </div>

        <StatusGizmo status="online" />
      </div>

    </div>



  )

};

function StatusGizmo(props) {

  return (

    < div className="status">
      < div className="status-text"> {props.status} </div>
      < div className="status-online"></div>
    </div>
  )


}



function BabyYoda(props) {


  return (
    <div className="Contact" >
      < img src={props.img} className="avatar"></img>
      <div>
        < div className="name"> {props.name} </div>

        <StatusBabyYoda status="online" />
      </div>

    </div>



  )
  }

  function StatusBabyYoda(props) {

    return (

      < div className="status">
        < div className="status-text"> {props.status} </div>
        < div className="status-online"></div>
      </div>
    )
  }




  function Chewie(props) {


    return (
      <div className="Contact" >
        < img src={props.img} className="avatar"></img>
        <div>
          < div className="name"> {props.name} </div>

          <StatusChewie status="offline" />
        </div>

      </div>



    )
  }

  function StatusChewie(props) {

    return (

      < div className="status">
        < div className="status-text"> {props.status} </div>
        < div className="status-online"></div>
      </div>
    )
  }










  export { Gizmo, BabyYoda, Chewie } 
