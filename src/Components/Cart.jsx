import React, {useState} from 'react';

const Cart = (props) => {
    
    const [checkout, setCheckout] = useState(false)
    
    //console.log(props.addedItem)  
    const handleCheckout = () =>{

        setCheckout(!checkout)
    }

    function getSubTotal(){
        return props.addedItem.reduce((sum, i) => {
            return sum + (i.product_qty * i.product_price)
        }, 0)
    }


    const handleClose = () =>{

        if(checkout)
            setCheckout(!checkout)


        if(props.showCheckout)
            props.setShowCheckout(!props.showCheckout) 
    }

    const ShowCheckOutModel = 
    
    <div id="myModal" className="checkout-modal" >
            
        <div className="modal-content">
            <span className="close" onClick={handleClose}>&times;</span>
            <h1>Checkout</h1>
            <p style={{fontSize : "20px"}}>
                We accept: 
                <i className="fa fa-cc-visa" aria-hidden="true" style={{marginLeft: "5px"}}></i>
                <i className="fa fa-cc-mastercard" aria-hidden="true" style={{marginLeft: "5px"}}></i>
                <i className="fa fa-cc-visa" aria-hidden="true" style={{marginLeft: "5px"}}></i>
                <i className="fa fa-cc-mastercard" aria-hidden="true" style={{marginLeft: "5px"}}></i>
    
            </p>

            <br></br>

            <h2>Subtotal: ${getSubTotal().toFixed(2)}</h2>
            <h3>Tax: ${(getSubTotal() * 0.06).toFixed(2)}</h3>

            <h1>Total: ${(getSubTotal() + (getSubTotal() * 0.06)).toFixed(2)}</h1>

            <br></br>

            <p style={{fontSize : "20px"}}>This is where our payment processor goes</p>
        </div>

    </div>


    const ShowButton = (
        <>
            <button className="cart-button clear" onClick={() => props.onClear()}>Clear Cart</button>
            <button className="cart-button checkout" onClick={handleCheckout}>CheckOut</button>
        </>
    )
    
    return(
        <React.Fragment>
            <div className="cart-container" >

                <div className="cartDiv" onClick={props.onClick} style={{cursor: "pointer"}}>
                    <span className="cart-size">{props.totalItems}</span>
                    <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                </div>

                <div style={props.isOpen === true ? {display: "block"} : {display : "none"}} className="cart-items">
                    <table className="cartTable">
                        <tbody>
                        
                            {props.addedItem.map((item,index) => {
                                
                                    return(
                                        
                                        <tr key={item.product_id}>

                                            <td>
                                                <div className="cartImage" style={{backgroundImage: "url("+item.product_img+")"}}>
                                                    <i className="fa fa-times" aria-hidden="true" style={{cursor: "pointer"}} onClick={() => props.onDelete(index, item.product_qty)}></i>
                                                </div>
                                            </td>
                                            <td className="align-center">
                                                <button onClick={() => props.onMinus(item)}>
                                                <i className="fa fa-minus" aria-hidden="true"></i>
                                                </button>
                                            </td>
                                            <td className="align-center">{item.product_qty}</td>
                                            <td className="align-center">
                                                <button onClick={() => props.onPlus(item)}>
                                                <i className="fa fa-plus" aria-hidden="true"></i>
                                                </button>
                                            </td>
                                            <td className="align-center">{item.product_name}</td>
                                            <td>${item.product_price}</td>
                                            
                                        </tr>
                                    )
                                }
                            )}
                            

                        </tbody>

                    </table>

                    <h4 className="subTotal">${

                        props.addedItem.length > 0 && getSubTotal()

                    }

                    {
                        props.addedItem.length === 0 && "0.00"
                    }
                    
                    </h4>

                    { props.addedItem.length > 0 && ShowButton}

                    
                </div>
                
                
            </div>

            {checkout && ShowCheckOutModel}
            
            {props.showCheckout && ShowCheckOutModel}
            
            
        </React.Fragment>
    )
}

export default Cart