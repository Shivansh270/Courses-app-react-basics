import React from 'react'
import { FcLike } from "react-icons/fc";

const Card = (props) => {

  let course = props.course

  return (<div>
    <div>
    <img src={course.image.url}/>
    </div>
      
     <div>   
      <button><FcLike></FcLike></button>
    </div>
      {course.title}
      {course.description}
    </div>
  )
}
export default Card