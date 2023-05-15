import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import { apiUrl, filterData } from "./data";
import { useEffect } from "react";
import { toast } from "react-toastify";
import Cards from "./components/Cards";
import Spinner from "./components/Spinner";

const App = () => {

  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true)

  const fetchData = async() => {
    setLoading(true) 
    try {
      const res = await fetch(apiUrl);
      const opt = await res.json();
      // console.log(opt)
      setCourses(opt.data);

    } catch (error) {
      toast.error("something went wrong");
    }
    setLoading(false)
  } 

  useEffect(() => {
    fetchData();
  }, [])
 
  return(
  <div className="min-h-screen flex flex-col">
    <div>
      <Navbar/>
    </div>

    <div>
      <Filter filterData={filterData}></Filter>
    </div>
    
    {/* <Cards courses={courses}></Cards> */}
    <div>
      {loading ? (<Spinner></Spinner>) : (<Cards courses={courses}/>)}
    </div>

  </div>
)};

export default App;
