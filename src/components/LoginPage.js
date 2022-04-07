import React,{useState} from 'react';
import { Button, Checkbox,  Form,  Input,Container,Popup } from 'semantic-ui-react';
import './style.scss'
function LoginPage({Login,error}) {
  const [details,setDetails]=useState({email:"",password:""})
  
  const handleSubmit=e=>{
    e.preventDefault();
    Login(details)
  }
  
  return (
    <Container  className='modalContainer modalBackground'><Form  className='body' style={{fontSize:'xx-large'}} onSubmit={handleSubmit}>
      <Form.Group style={{marginTop:'40px'}} >
        {
          error!=""? <div>
            <span style={{color:'red'}}>
              {error}
            </span>
          </div>:""
        }
        <Form.Field
          style={{fontSize:'large',marginRight:'40px',marginLeft:'100px',display:'inline-grid'}}
          control={Input}
          label='Email'
          name='email'
          placeholder='Enter email'
          onChange={e=>setDetails({...details,email:e.target.value})}
          
          type='email' />
      </Form.Group>
      <Form.Group >
        <Form.Field
        style={{fontSize:'large',marginRight:'40px',marginLeft:'45px',display:'inline-grid'}}
          action={{
            basic: true,
            icon: 'eye',

            type: 'button'
          }}

          control={Input}
          label='Password'
          name='password'
          placeholder='Enter your password'
          onChange={e=>setDetails({...details,password:e.target.value})}
          type='password' />
      </Form.Group>


      <Form.Group >
        <Form.Field

          
          label='Remember me'
          control={Checkbox} />
        
      </Form.Group>

      <Form.Group>
        <Form.Field
          color='teal'
          control={Button}
          style={{fontSize:'x-large'}} 
          type='submit'
          width={16}>
          Sign in
        </Form.Field>
      </Form.Group>


      <br />
      <Form.Group>
        <Form.Field>
          <strong>Credentials</strong>
          <span style={{ color: 'gray' }}>

            <br />
            admin user - all companies: test@yahoo.com <br />pass: test1234
          </span>
        </Form.Field>
      </Form.Group>


    </Form>
    </Container>
  )
}

export default LoginPage
