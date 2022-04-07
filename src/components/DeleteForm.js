import React, { useMemo, useEffect, useState } from 'react'
import { Button, Form, Header, Input,Modal } from 'semantic-ui-react'
import './style.scss'
const DeleteForm = (data) => {
  
    const [open,setOpen]=useState(true)
    const handleClose=()=>{
     setOpen(false)
    
    }
  return (
    <Modal
      className='modalContainer modalBackground' 
      closeOnDimmerClick={false}
      
     
      open={open}
      size='large'>
      <Modal.Content >
        <Form style={{width:'400px'}} >
          <Header as='h2' >
           Are you sure you want to delete Item?
          </Header>
          
          <Form.Group widths='equal'>
            <Form.Field>
              <Button
              
                content='Confirm'
                style={{fontSize:'large'}}
                onClick={()=>{handleClose()}}
                type='button'/>
              <Button
                content= 'Cancel'
                style={{fontSize:'large'}}
              />
            </Form.Field>
          </Form.Group>
        </Form>
      </Modal.Content>
    </Modal>
  )
}

export default DeleteForm;
