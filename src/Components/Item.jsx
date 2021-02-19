import React, {useState} from 'react'

const Item = (props) => {

    const [isHover, setIsHover] = useState(false)

    const [isClicked, setIsClicked] = useState(false)

    const [inputText, setInputText] = useState("1")

    const [currItem, setCurrItem] = useState(props.item)

    // console.log(currItem.product_img)

    const handleHover = () => {
        // alert(isHover)
        setIsHover(!isHover)
    }

    const handleClick = () => {
        setIsClicked(!isClicked)
    }

    const handleClose = () => {
        setIsClicked(!isClicked)
    }

    const handleChange = (event) => {

        setInputText(event.target.value)
      
    }

    const handlePrev = () => {

        // get the current product index
        let currIndex = props.products.indexOf(currItem)
        //alert(props.products.length)

        if(currIndex === 0){
            setCurrItem(props.products[props.products.length - 1])
        }else{
        setCurrItem(props.products[currIndex-1])
        }
        // console.log(currItem)

    }

    const handleNext = () => {
         // get the current product index
         let currIndex = props.products.indexOf(currItem)
         //alert(props.products.length)
         if(currIndex === props.products.length -1 ){
            setCurrItem(props.products[0])
        }else{
            setCurrItem(props.products[currIndex+1])
        }
        //  console.log(currItem)
    }

    const ShowAddToCartModel = 
    
    <div id="myModal" className="addtocart-modal" >
        
        <div className="prev-product" onClick={handlePrev}>
            <i className="fa fa-chevron-left" aria-hidden="true"></i>
        </div>

        <div className="next-product" onClick={handleNext}>
            <i className="fa fa-chevron-right" aria-hidden="true"></i>       
        </div>

        <div className="modal-content-addtocart">
            <span className="close-cart-model" onClick={handleClose}>&times;</span>
            <br></br>
            <div className="item-img">
                <img className="item-image" src={currItem.product_img} alt={currItem.product_name} />
            </div>

            <div className="item-desc">
            <h2>{currItem.product_name}</h2>
                <p style={{fontSize : "20px"}}>This is a {currItem.product_name}</p>
                <p style={{padding : "10px 0px"}}>
                    This is where some detailes on {currItem.product_name} would go.<br></br>
                    {currItem.product_name === "Monkey" && "This monkey done seent some shit."}

                    {currItem.product_name === "Kitten" && "Shout out kittens for being adorable."}

                    {currItem.product_name === "Shark" && "Damn nature, you scary."}

                    {currItem.product_name === "Puppy" && "Shout out puppies for being adorable."}

                    {currItem.product_name === "Apple" && "Shout out apples for being delicious."}

                    {currItem.product_name === "Orange" && "Shout out oranges for being delicious."}

                    {currItem.product_name === "Peach" && "Shout out peaches for being delicious."}

                    {currItem.product_name === "Mango" && "Shout out mangos for being delicious."}

                    {currItem.product_name === "Cognac" && "I'm like hey whats up, hello."}

                    {currItem.product_name === "Chain" && "2Chainz but I got me a few on."}
                </p>
                <h2>${currItem.product_price}</h2>
               
                <label>QTY</label>
                <input className="cart-input" type="number" value={inputText} onChange={handleChange} />
                <button className="addToCartButton" onClick={() => {

                 props.onClick(currItem, parseInt(inputText))
                 handleClose()
                 }} >Add to Cart</button>
            </div>
        </div>

    </div>

    return (
        <div className="Item">
            <div className="imgContainer" onMouseOver={handleHover} onMouseOut={handleHover} onClick={handleClick}>
                <img className={isHover === true ? "imgContainer iHover" : "imgContainer"} src={currItem.product_img} alt={currItem.product_name} />
                <i className={isHover === true ? "fa fa-search-plus search-plus itemImageHover" : "fa fa-search-plus search-plus"} aria-hidden="true" ></i>
            </div>

            <div className="itemText">
                <h2>{currItem.product_name}</h2>
                <p style={{fontSize : "20px"}}>This is a {currItem.product_name}</p>
                <b>${currItem.product_price}</b>
                <br></br>

                <button className="addToCartButton" onClick={() => props.onClick(currItem, 1)} >Add to Cart</button>
            </div>

            {isClicked && ShowAddToCartModel}
        </div>

        
    )
}

export default Item