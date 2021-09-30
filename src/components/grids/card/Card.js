import React from 'react';
import './Card.css';
import { connect } from 'react-redux';
import * as actionTypes from '../../../store/actions/action';
function Card(props) {
    return (
        <div className="Card" onClick={()=>props.musicChange(props.id)}>
            <img src={props.src} alt="title"className="cardimg" />
            <div className="cardDesc">
               <p className="cardTitle">{props.title}</p>
            </div>
        </div>
    )
}

  
  const mapDispatchToProps = (dispatch)=>{
    return{
      musicChange :(id)=>dispatch({type:actionTypes.CURRENT_SONG , id : id}),
    }
  }
  export default connect(null , mapDispatchToProps)(Card);