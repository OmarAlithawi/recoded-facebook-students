import React,{useState} from "react";
import db from "./firebase";
import * as firebase from 'firebase';
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
    db.collection("profiles").add({
      city : cityInputValue,
      name:name,
      userID: userID,
      imageUrl:imageUrl,
      profile: porfileInputValue
    })
  }

   const signUpWithGoogle =  ()  => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(googleProvider).then((result) =>{
      const token = result.credential.accessToken;
      const user = result.user;
      setName(user.displayName);
      setUserId(user.a.c);
      setImageUrl(user.photoURL)
    
    }).catch(function(error) {
      // Handle Errors here.
      console.log(error);
      console.log("Failed");
      /*
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The db.auth.AuthCredential type that was used.
      const credential = error.credential;
      // ...
      */
    });
  }
  

  return (
    <Container>
        <Row>
          <Col>
          <Image onClick = {() => signUpWithGoogle()} src ={googleImg}/>
          <Form.Group>
            <Form.Control onChange = {(e) => setCityInputValue(e.target.value)} type="text" placeholder="city" />
            <Form.Control onChange = {(e) => setProfileInputValue(e.target.value)}  type="text" placeholder="profile" />
          </Form.Group>
            <Button type = "submit" onClick = {(e) => addData(e)} variant="primary">Submit</Button>
          </Col>
        </Row>
    </Container>
  )
};

export default SignUpPage;
