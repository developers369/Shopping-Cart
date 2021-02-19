import React, {useState}from 'react';
import Cart from './Components/Cart'
import DisplayItems from "./Components/DisplayItems"

let cart = []

const ShoppingCart = (props) => {

    const [totalItems,  setTotalItems] = useState(0)

    const [isOpen, setIsOpen] = useState(false)

    const [showCheckout, setShowCheckout] = useState(false)

    console.log("render")

    const handleDelete = (index, quantity) => {

        console.log("INDEX="+index)
        cart.splice(index, 1)
        setTotalItems(totalItems-quantity)
    }

    const handleClick = () => {

        // alert("Clicked")
        setIsOpen(!isOpen)
        
    }

    const handlePlus = (item) => {

        console.log(item)
        cart.map((product) => {

            if(item.product_id === product.product_id){
                
                product.product_qty++

               
                return setTotalItems(totalItems+1)
            }

        })

    }

    const handleMinus = (item) => {

        cart.map((product, index) => {

            if(item.product_id === product.product_id){
                
                if(product.product_qty > 1){
                    product.product_qty--
                    setTotalItems(totalItems-1)
                }
                else{
                    
                    handleDelete(index, product.product_qty)
                }
            }

        })
    }


    const handleClear = () => {
        //alert("HELLO")
        cart = []
        setTotalItems(0)
        setIsOpen(!isOpen)
    }

    function getSubTotal(){
        return cart.reduce((sum, i) => {
            return sum + (i.product_qty * i.product_price)
        }, 0)
    }

    function showCheckoutArea(){

        return (
            <div className="checkout-area" style={{marginTop : "40px"}}>
                <div className = "checkout-header" style={{textAlign : "center"}}>

                    <h1>Checkout Area</h1>
                    <span className="cart-size">{totalItems}</span>
                    <i className="fa fa-shopping-cart" aria-hidden="true"></i>

                </div>

                <div className="checkout-content" style={{fontSize: "20px", marginTop: "20px"}}>

                    <table className="checkout-table" >
                        <thead>
                            <tr>
                                <th>SKU</th>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Amount</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        
                        <tbody>
                            {
                                cart.map((item) =>{
                                    return <tr key={item.product_id}>
                                        <td>{item.product_id}</td>
                                        <td>{item.product_name}</td>
                                        <td>This is a {item.product_name}</td>
                                        <td>{item.product_qty}</td>
                                        <td>${item.product_price}</td>
                                    </tr>
                                    
                                })
                            }    

                            <tr>
                                <td colSpan="3"></td>
                                <td>Subtotal:</td>
                                <td><b>${getSubTotal().toFixed(2)}</b></td>
                            </tr>

                            <tr>
                                <td colSpan="3"></td>
                                <td>Tax:</td>
                                <td><b>${(getSubTotal() * 0.06).toFixed(2)}</b></td>
                            </tr>
                            
                            
                            <tr>
                                <td colSpan="3"></td>
                                <td>Total:</td>
                                <td><h2>{(getSubTotal() + (getSubTotal() * 0.06)).toFixed(2)}</h2></td>
                            </tr>

                        </tbody>
                        
                    </table>
                    
                        
                    
                </div>

                <button className="cart-button checkout" onClick={handleCheckout}>CheckOut</button>
            </div>
        )
    }


    const handleCheckout = () => {
        setShowCheckout(!showCheckout)
    }

    return(

        <React.Fragment>
             

             <div className="header">
                <h1>Shopping Cart</h1>
            </div>
            
            <Cart 
                isOpen={isOpen}
                onClick={() => handleClick()}
                addedItem={cart}
                totalItems={totalItems}
                setTotalItems={setTotalItems}
                onDelete={handleDelete}
                onPlus={handlePlus} 
                onMinus={handleMinus} 
                onClear={handleClear}
                showCheckout={showCheckout}
                setShowCheckout={setShowCheckout}
            />
            
            <DisplayItems 
                cartItems={cart}
                totalItems={totalItems}
                setTotalItems={setTotalItems}
            
            />

            { cart.length > 0 && showCheckoutArea()}
         
        </React.Fragment>
    )
}

export default ShoppingCart
