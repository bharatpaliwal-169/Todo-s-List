import React,{useState,useEffect} from 'react'
import './main.css'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import List from './List';
import Alert from './Alert';


const getLocalStorage = () => {
  let list = localStorage.getItem('list');
  if(list){
    return JSON.parse(list)
  }else{
    return []
  }
}



export default function Main() {
  const [name,setName] = useState('')
  const [list,setList] = useState(getLocalStorage())
  const [isEditing,setIsEditing] = useState(false)
  const [editId,setEditId] = useState(null)
  const [alert,setAlert] = useState({show:false,msg:'',type:'' })

  const handleSubmit = (e) =>{
    e.preventDefault()

    if(!name){
      //alert
      showAlert(true,'danger','Please enter some item')
    } else if(name && isEditing){
      //show alert and item
      setList(list.map((item) => {
        if(item.id === editId){
          return {...item,title:name}
        }
        return item
      }))
      setName('')
      setEditId(null)
      setIsEditing(false)
      showAlert(true,'info','Item Changed')
    }
    else{
      showAlert(true,'success','Item Added')
      const newItem = {
        id: new Date().getTime().toString(),
        title:name
      }
      setList([...list,newItem]);
      setName('')
    }

  }

  const showAlert = (show=false,type="",msg='')=>{
    setAlert({show,type,msg})
  }


  const clearList = () => {
    showAlert(true, 'danger', 'List Cleared!');
    setList([]);
  };

  const removeItem = (id) =>{
    showAlert(true,'warning','Item Removed')
    setList(list.filter((item)=> item.id !== id))
  }

  const editItem = (id) => {
    const specificItem = list.find((item)=> item.id === id);
    setIsEditing(true)
    setEditId(id)
    setName(specificItem.title)
  }
  
  useEffect(()=>{
    localStorage.setItem('list',JSON.stringify(list))
  },[list])
  
  return (
    <React.Fragment>
      <div className='container'>
        <div className='row justify-content-center mt-5'>
          <div className='col-12 col-md-6 mt-5'>
            
            {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
            
            <form className='form text-center' onSubmit={handleSubmit}>

              <h4 className='display-5 fw-3  mb-4 headp'> Task List </h4>
              <TextField id="item"
                          label="add your item"
                          variant="outlined"
                          name='item'  
                          size="small"
                          value={name}
                          onChange={(e)=> setName(e.target.value)}/>
              <Button variant='contained' type='submit' color='primary' size="medium"> {isEditing ? 'Edit' : 'Add'} </Button>

              {list.length > 0 && (
                      <div className='mb-2'>
                          <List items={list} removeItem={removeItem} editItem={editItem} />
                          <Button className='mt-4' color='secondary' variant='contained' onClick={clearList} >Clear All</Button>
                      </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
