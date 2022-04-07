import React,{useMemo,useState} from 'react'
import {useTable} from 'react-table'
import DATA from './DATA.json'
import OrderForm from '../modal'
import DeleteForm from '../DeleteForm'
import { Button, Table,Popup } from 'semantic-ui-react'
import './table.css'

export const TableData = () => {

    const data =useMemo(()=>DATA,[])
    const [modalShow,setShow] = useState(false);
    const [modalDelete,setDelete] = useState(false);
    const [edit,setEdit]=useState([])

 
    
   
    const handleEdit=(item)=>{
        setShow(true);
        setEdit(item)
      
    }

    const handleClose=()=>{
        
        setDelete(true)
       }

    const handleModal=(item)=>{
        setShow(true);
      
    }
   
  return (
      
    <>
     {!modalShow && !modalDelete && <Button onClick={()=>{handleModal()}} style={{fontSize:'larger',float:'right',margin:'4px'}}>Add Item</Button>
     }{!modalShow && !modalDelete && <Table style={{marginLeft:'10px'}}
         selectable
        sortable unstackable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Order Number</Table.HeaderCell>
            <Table.HeaderCell >Order Due Date</Table.HeaderCell>
            <Table.HeaderCell>Customer Buyer Name</Table.HeaderCell>
            <Table.HeaderCell >Customber Address</Table.HeaderCell>
            <Table.HeaderCell >Customber Phone</Table.HeaderCell>
            <Table.HeaderCell >Order Total</Table.HeaderCell>
            <Table.HeaderCell >Action</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body >
          <>
            {
              data.map((item,index) => {
                  console.log(index)
                return (
                  <>
                    <Table.Row key={index}>
                    <Table.Cell >
                        <p>
                          {item.order_number}
                        </p>
                      </Table.Cell>
                      <Table.Cell >
                        <p>
                          {item.order_due_date}
                        </p>
                      </Table.Cell>
                      <Table.Cell>
                        <p>
                          {item.customer_buyer_name}
                        </p>
                      </Table.Cell>
                      <Table.Cell>
                        <p>
                          {item.customer_address}
                        </p>
                      </Table.Cell>
                      <Table.Cell>
                        <p>
                          {item.customer_phone}
                        </p>
                      </Table.Cell>
                      <Table.Cell>
                        <p>
                          {item.order_total}
                        </p>
                      </Table.Cell>
                      <Table.Cell>
                        <Button onClick={()=>{handleEdit(item)}}
                        type='button'
                        key={index}>
                           Edit
                        </Button>
                        <Button onClick={()=>{handleClose()}}
                        type='button'
                      >
                           Delete
                        </Button>
                      </Table.Cell>
                    </Table.Row>
                  </>
                )
              })
            }
            
          </>
        </Table.Body>
      </Table>}
     {modalShow && <OrderForm data={edit}/>}
     {modalDelete && <DeleteForm />}
    </>
  )
}

export default TableData
