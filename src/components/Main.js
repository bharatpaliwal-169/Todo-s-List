import React,{useState} from 'react'
import './main.css'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import DeleteIcon from '@material-ui/icons/Delete';
// import CreateIcon from '@material-ui/icons/Create';
import List from './List';
import Alert from './Alert';

export default function Main() {
  //Hooks
  const [name,setName] = useState('')
  const [list,setList] = useState([])
  const [isEditing,setIsEditing] = useState(false)
  const [editId,setEditId] = useState(null)
  const [alert,setAlert] = useState({show:true,msg:'Modal msg',type:'success' })

  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log('hello World');

    if(!name){
      //alert
    } else if(name && isEditing){
      //show alert and item
    }
    else{
      const newItem = {
        id: new Date().getTime().toString(),
        title:name
      }
      setList([...list,newItem]);
      setName('')
    }

  }
  const clearList = () => {
    setAlert(true, 'danger', 'empty list');
    setList([]);
  };
  return (
    <React.Fragment>
      <div className='container'>
        <div className='row justify-content-center mt-5'>
          <div className='col-12 col-md-6 mt-5'>
            <div className='alert alert-success'>{alert.show && <Alert/>}</div>
            <form className='form text-center' onSubmit={handleSubmit}>

              <h4 className='display-5 fw-3  mb-4 headp'> Shopping Bud </h4>
              <TextField id="item"
                          label="add your item"
                          variant="outlined"
                          name='item'  
                          size="small"
                          value={name}
                          onChange={(e)=> setName(e.target.value)}/>
              <Button variant='contained' type='submit' color='primary' size="medium"> {isEditing ? 'Edit' : 'Add'} </Button>

              {list.length > 0 && (
                      <div>
                          <List items={list} />
                          <Button color='secondary' variant='contained' onClick={clearList} >Clear All</Button>
                      </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
