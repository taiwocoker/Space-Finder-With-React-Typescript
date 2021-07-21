import React from "react";
import { AuthService } from "../services/AuthService";

interface LoginProps {
   authService: AuthService
}

export class Login extends React.Component<LoginProps>{
 render(){
  return(
   <div>Login</div>
  )
 }
}