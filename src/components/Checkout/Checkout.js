import { Button, Input } from "@mui/material";
import "./Checkout.scss"
import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { useCartContext } from "../../Context/CartContext";
import { addDoc, collection, getDoc, updateDoc,doc } from "firebase/firestore/lite";
import { db } from "../../firebase/config";



const Checkout = () => {

    const {cart,cartTotal,finishCheckout} = useCartContext();

    const [values,setValues] = useState({
        name: ``,
        email: ``,
        address:``
    })
 


    const handleInputChange = (e) => {
        
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })

    }
    
    const handleSubmit = (e) => {
        e.preventDefault()


        const purchaseOrder ={
            buyer: values,
            items: cart,
            total: cartTotal()
        }

        
        if(values.name.length < 3){
            alert("name wrong")
            return
        }

        if(values.email.length < 3){
            alert("short email")
            return
        }

        const ordersRef = collection(db,`orders`);

        cart.forEach((item) => {

          const docRef = doc(db,'productos',item.id)

          getDoc(docRef)
              .then((doc) => {
                  updateDoc(docRef,{
                    stock: doc.data().stock  - item.quantity
                  })
              })

        })




        addDoc(ordersRef,purchaseOrder)
            .then((doc) =>{
                console.log(doc.id)
                finishCheckout(doc.id)
            })
    
    }




    if(cart.length === 0 ) {
        return <Navigate to="/"/>
    }

  return (
    <div className="containerDiv">
      <h2>CHECKOUT</h2>
      <hr />
      <div className="containerDivForm">
        <form className="containerFormControl" onSubmit={handleSubmit}>

          <Input 
            name="name"
            value={values.name}
            onChange={handleInputChange}
            className="containerInput" 
            type="text" 
            placeholder="Name"
          />

          <Input 
            name="email"
            value={values.email}
            onChange={handleInputChange}
            className="containerInput" 
            type="email" 
            placeholder="Email"
          />

          <Input 
            name="address"
            value={values.address}
            onChange={handleInputChange}
            className="containerInput" 
            type="address" 
            placeholder="Address"
          />

          <Button type="submit" variant="contained" color="primary">Send</Button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
