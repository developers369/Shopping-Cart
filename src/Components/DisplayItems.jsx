import React from 'react'
import Item from "./Item"

// Import all item images
import monkey from "../Images/monkey.png"
import kitten from "../Images/kitten.png"
import shark from "../Images/shark.png"
import puppy from "../Images/puppy.png"
import apple from "../Images/apple.png"
import orange from "../Images/orange.png"
import peach from "../Images/peach.png"
import mango from "../Images/mango.png"
import cognac from "../Images/cognac.png"
import chain from "../Images/chain.png"

const products = [
    {
        product_id : 1,
        product_img : monkey,
        product_name : "Monkey",
        product_qty : 1,
        product_price : 5.50,
    },
    {
        product_id : 2,
        product_img : kitten,
        product_name : "Kitten",
        product_qty : 1,
        product_price : 10.00,
    },
    {
        product_id : 3,
        product_img : shark,
        product_name : "Shark",
        product_qty : 1,
        product_price : 15.00,
    },
    {
      
        product_id : 4,
        product_img : puppy,
        product_name : "Puppy",
        product_qty : 1,
        product_price : 5.00,
     
    },
    {
        product_id : 5,
        product_img : apple,
        product_name : "Apple",
        product_qty : 1,
        product_price : 1.00,
    },
    {
        product_id : 6,
        product_img : orange,
        product_name : "Orange",
        product_qty : 1,
        product_price : 1.10,
    },
    {
        product_id : 7,
        product_img : peach,
        product_name : "Peach",
        product_qty : 1,
        product_price : 1.50,
    },
    {
        product_id : 8,
        product_img : mango,
        product_name : "Mango",
        product_qty : 1,
        product_price : 2.00,
    },
    {
        product_id : 9,
        product_img : cognac,
        product_name : "Cognac",
        product_qty : 1,
        product_price : 17.38,
    },
    {
        product_id : 10,
        product_img : chain,
        product_name : "Chain",
        product_qty : 1,
        product_price : 17.38,
    }
]


const DisplayItems = (props) => {

    console.log("render")
    const handleAddToCart = (item, qty) => {
        
        // console.log(props.cartArray)
        
        let exist = false
        // chek whether item is exist in cart array or not
        props.cartItems.map(function(product) {

            if(item.product_id === product.product_id){
                exist = true
                product.product_qty += qty   
            }
            
        })

        if(!exist){

            if(qty !== 1){
            item.product_qty += qty
            }

            props.cartItems.push(item)
        }

        props.setTotalItems(props.cartItems.reduce((sum, i) => {
            return sum + i.product_qty
        }, 0))
    }

   

    return(
        <div className="item-container" >
            <h1>Products</h1>
            
            <div className="displayItems">

                
                {products.map(function(item) {
                    
                
                    return <Item key={item.product_id} item={item} img={item.product_img} name={item.product_name} price={item.product_price} products={products} onClick={handleAddToCart}/>
                }
                    
                )}
                
               
            </div>
        </div>
    )
}

export default DisplayItems