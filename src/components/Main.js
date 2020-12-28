import React from 'react'
import './main.css'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';




export default function Main() {


  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log('hello World');
  }
  return (
    <React.Fragment>
      <div className='container'>
        <div className='row justify-content-center mt-5'>
          <div className='col-12 col-md-6 mt-5'>
            <div className='alert alert-success'>Modal Here</div>
            <form className='form text-center' onSubmit={handleSubmit}>
              <h4 className='display-5 fw-3 mb-4'> Shopping Bud </h4>
              <TextField id="item" label="add your item" variant="outlined" name='item' size="small"/>
              <Button variant='contained' type='submit' color='primary' size="medium">Add</Button>

              <div className='list-group'>
                <div className='list-group-item'>
                  <span className='display-5 fw-3'> Item </span>
                    <IconButton aria-label="delete">
                      <DeleteIcon fontSize="small" />
                    </IconButton>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
