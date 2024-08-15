import { useContext, useState } from "react";
import{useNavigate} from "react-router-dom";
import {AppContext} from "../Context/AppContext"
import styles from "./RegisterPage.module.css";
import Form from "../Components/Form";
import validateform from '../Utils/Validateform';


export default function Registerpage() {
  const{User, setUser} = useContext(AppContext);
  const[name,setName] = useState(User?.name || "");
  const[email,setEmail] = useState(User?.email || "");
  const[username,setusername] = useState(User?.username || "");
  const [phone,setPhone] = useState(User?.phone || "");
  const[error,setError] = useState(false);
  const navigate = useNavigate();

  const submitHandler = () => {
    const {valid,invalid} = validateform(name,email,username,phone);
    if(!valid) {
       setError({...invalid});
       return;

    }
    setError(null);
    
    setUser({name,email,username,phone});  
    navigate("genre");
  
  };
  

  return (
    <div className={styles.container}>
    <div className={styles.left}>
    <div className={styles.background}></div>
    <div className={styles.label}>Discover new things on SuperApp</div>
    </div>
    <div className={styles.right}>
     <div className={styles.header}>
      <h2 className={styles.heading}>SuperApp</h2>
      <h3 className={styles.subheading}>Create your new account</h3>
     </div>
     <Form 
     name={name}
     setName={setName}
     email={email}
     setEmail={setEmail}
     username={username}
     setusername={setusername}
     phone={phone}
     setPhone={setPhone}
     error={error}
     setError={setError}
     submitHandler={submitHandler}
     />
     <div className={styles.footer}>
     
     <p>By clicking on Sign up. you agree to Superapp {" "}
     <span>Terms and Conditions of Use</span>
     </p>
     <p>
        To learn more about how Superapp collects, uses, shares and protects
        your personal data please head Superapp <span>Privacy Policy</span>
     </p>
     </div>
    </div>
    </div>
  );
  
}
