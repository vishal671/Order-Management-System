import React,{useState} from 'react'
import LoginPage from './components/LoginPage'
import TableData from './components/Table/Table'

function App() {
  const adminUser={
      email:"test@yahoo.com",
      password:"test1234"
  }
  const [user,setUser]=useState({name:"",email:""});
  const [error,setError]=useState("");

  const Login = details=> {
      console.log(details)
      if(details.email==adminUser.email && details.password==adminUser.password){
      console.log("Logged in")
      setUser({
          email:details.email,
          password:details.password
      })}
      else{
         setError('Details not match!')
      }
  }
  const Logout=()=>{
      console.log("Logout")
      setUser({name:"",email:""});
  }


return(
<div className='App' style={{marginRight:'20px'}}>
    {(user.email!="")?<TableData/>:(
<LoginPage Login={Login} error={error} />)}
</div>
);
}
export default App;

