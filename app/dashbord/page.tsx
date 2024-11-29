"use client"
 
import React,{useState} from 'react'
import SearchSection from './_components/searchSection'
import TemplateList from './_components/TemplateList'

function Dashbord() {
  const [userSearchInpute,setUserSearchInput]=useState<string>()
  return (
    <div>
     {/*search section*/ }
      <SearchSection onSearchinpute={(value:string)=>setUserSearchInput(value)}/>

      {/* Templet list section*/}
        <TemplateList userSearchInpute={userSearchInpute}/>


    </div>
  )
}

export default Dashbord