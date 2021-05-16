import React from "react";
import preloader from '../../../assets/images/load.gif';

let Preloader = (props) => {
	return <div><img src={preloader} style={ {backgroundColor: "white"} }/></div>
}

export default Preloader