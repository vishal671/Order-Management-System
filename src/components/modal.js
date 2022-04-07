import React, { useMemo, useEffect, useState } from 'react'
import { Button, Form, Header, Input,Modal } from 'semantic-ui-react'
import './style.scss'
const OrderForm = (data) => {
  
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
        <Form className='body'  style={{width:'400px'}} >
          <Header as='h2' className='title'>
           Order
          </Header>
          <Form.Group style={{display:'flex'}} >
            <Form.Field
              style={{fontSize:'large',marginRight:'40px'}}
              control={Input}
              label='Order Number'
              name='order_number'
              defaultValue ={data.data.order_number>0?data.data.order_number:""}
              
              placeholder='Enter order number'
              required
              />
            <Form.Field
              style={{fontSize:'large',marginRight:'40px'}}
              control={Input}
              label='Order Due date'
              name='order_due_date'
              defaultValue ={data.data.order_number>0?data.data.order_due_date:""}
              placeholder='Enter order due date'
              type='date'/>

          </Form.Group>
          <Form.Group style={{display:'flex'}}>
         <Form.Field
             style={{fontSize:'large',marginRight:'40px'}}
              control={Input}
              label='Customer Name'
              name='customer_buyer_name'
              defaultValue ={data.data.order_number>0?data.data.customer_buyer_name:""}
              placeholder='Enter customer buyer name'/>
            <Form.Field
            style={{fontSize:'large',marginRight:'40px'}}
               control={Input}
              label='Customer Address'
              name='customer_address'
              defaultValue ={data.data.order_number>0?data.data.customer_address:""}
              placeholder='Enter customer address'
             />
          </Form.Group>
          <Form.Group style={{display:'flex'}} >
          <Form.Field
              style={{fontSize:'large',marginRight:'40px'}}
              control={Input}
              label='Customer Phone'
              name='customer_phone'
              defaultValue ={data.data.order_number>0?data.data.customer_phone:""}
              placeholder='Enter customer phone'
              type='phone'
              />
              <Form.Field
              style={{fontSize:'large',marginRight:'40px'}}
              control={Input}
              label='Order Total'
              name='order_total'
              defaultValue ={data.data.order_number>0?data.data.order_total:""}
              placeholder='Enter order total'
              />
          </Form.Group>

         

          <Form.Group widths='equal'>
            <Form.Field>
              <Button
                content='Cancel'
                style={{fontSize:'large'}}
                onClick={()=>{handleClose()}}
                type='button'/>
              <Button
                content= 'Save'
                style={{fontSize:'large'}}
              />
            </Form.Field>
          </Form.Group>
        </Form>
      </Modal.Content>
    </Modal>
  )
}

export default OrderForm;
