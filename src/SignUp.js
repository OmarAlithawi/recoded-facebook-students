import React,{useState} from "react";
import * as firebase from 'firebase';
import db from "./firebase";
import 'firebase/auth';
import { Button ,Row , Col , Container , Form , Image } from 'react-bootstrap';
import googleImg from './google-signin.png'

const SignUpPage = () => {

  const [cityInputValue , setCityInputValue] = useState("");
  const [porfileInputValue , setProfileInputValue] = useState("");
  const [name , setName] = useState("");
  const [userID , setUserId] = useState("");
  const [imageUrl , setImageUrl] = useState("");

  const addData = (e) => {
    e.preventDefault()

    const info = {
      city : cityInputValue,
      name:name,
      userId: userID,
      imageUrl:imageUrl,
      profile: porfileInputValue
    }
    db.collection("profiles").doc(userID).set(info);
  }

   const signUpWithGoogle =  ()  => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(googleProvider).then((result) =>{
      //const token = result.credential.accessToken;
      const user = result.user;
      setName(user.displayName);
      setUserId(user.uid);
      setImageUrl(user.photoURL)
      console.log(user)
    
    }).catch(function(error) {
      console.log(error);
      console.log("Failed");
   
    });
  }
  

  return (
    <Container>
        <Row>
          <Col>
          <Image onClick = {() => signUpWithGoogle()} src ={googleImg}/>
          <Form onSubmit = {(e) => addData(e)}>
          <Form.Group >
            <Form.Control onChange = {(e) => setCityInputValue(e.target.value)} type="text" placeholder="city" />
            <Form.Control onChange = {(e) => setProfileInputValue(e.target.value)}  type="text" placeholder="profile" />
            <Button type = "submit"  variant="primary">Submit</Button>
            </Form.Group>  
            </Form>
          </Col>
        </Row>
    </Container>
  )
};

export default SignUpPage;
