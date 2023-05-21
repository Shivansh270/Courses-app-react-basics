import React from 'react'
import { FcLike } from "react-icons/fc";

const Card = (props) => {

  let course = props.course
  let likedCourses = props.likedCourses;
    let setLikedCourses = props.setLikedCourses;

    function clickHandler() {
        //logic
        if(likedCourses.includes(course.id)) {
            //pehle se like hua pada tha
            setLikedCourses( (prev) => prev.filter((cid)=> (cid !== course.id) )  );
            toast.warning("like removed");
        }
        else {
            //pehle se like nahi hai ye course
            //insert karna h ye course liked courses me 
            if(likedCourses.length === 0 ) {
                setLikedCourses([course.id]);
            }
            else {
                //non-empty pehle se
                setLikedCourses((prev) => [...prev, course.id]);
            }
            toast.success("Liked Successfully");
        }
    }

  return (
  <div className='w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden'>
    <div className='relative'>
    <img src={course.image.url}/>
    </div>
      
     <div className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-12px] grid place-items-center'>   
      <button><FcLike></FcLike></button>
    </div>

    <div className='p-4'>
        <p className="text-white font-semibold text-lg leading-6">{course.title}</p>
        <p className='mt-2 text-white'></p>
        </div>
  </div>
  )
}
export default Card