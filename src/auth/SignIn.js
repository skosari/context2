import { useState } from 'react'
import { Auth } from 'aws-amplify'

export function SignIn(){
  
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [authStatus, setAuthStatus] = useState(false)
  const [curUser, setCurUser] = useState([])

  async function handleSubmit(e){
    e.preventDefault()
      // AWS Cognito integration here
      try {
        const user = await Auth.signIn(userName, password)
        console.log(user);
        setAuthStatus(true);
        setCurUser(user);
      }catch(err) {
        console.log(err)
        }
    }
  

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='UserName'
        value={userName}
        onChange={(e)=>setUserName(e.currentTarget.value)}
      /> 
      <input
        type='current-password'
        placeholder='Password'
        value={password}
        onChange={(e)=>setPassword(e.currentTarget.value)}
      />
      <input
        type='email'
        placeholder='Email'
        value={email}
        onChange={(e)=>setEmail(e.currentTarget.value)}
      />
      <button>LogIn</button>
    </form>
    )

}

