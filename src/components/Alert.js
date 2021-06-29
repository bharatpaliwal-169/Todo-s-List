import React,{useEffect} from 'react'
import './main.css'
const Alert =({msg,type,removeAlert,list}) => {
  useEffect(() => {
    const timeout = setTimeout(()=>{
      removeAlert();
    },2500)
    return () => clearTimeout(timeout)

  }, [list])
  return (
    <div className={`justify-content-center align-item-center alert alert-${type}`}>
      <h6 className='mt-1'>{msg}</h6>
    </div>
  )
}

export default Alert;
