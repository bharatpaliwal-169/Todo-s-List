import React from 'react'
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';


const List = ({items,removeItem,editItem})=>{
  return(
    <React.Fragment>
      <div className='list-group mt-3'>
      {items.map((item)=>{
        const {id,title} = item;
        return(
          <div className='list-group-item' key={id}>
            <span className='display-5 mt-2 float-left'> {title} </span>
            <span className='float-right'>
            <IconButton style={{ color: 'green' }} onClick={()=> editItem(id)}  aria-label="delete">
                <CreateIcon fontSize="small" style={{ color: 'green' }}  />
              </IconButton>
              <IconButton style={{ color: 'red' }} onClick={() => removeItem(id)} aria-label="delete">
                <DeleteIcon fontSize="small" style={{ color: 'red' }}  />
              </IconButton>
            </span>
          </div>
        )
      })}
      </div>
    </React.Fragment>
  )
}

export default List