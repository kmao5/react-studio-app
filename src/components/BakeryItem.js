// TODO: create a component that displays a single bakery item

import "./BakeryItem.css";

function BakeryItem(props) {
    return (
        <div className="BakeryItem" >
            <div>

                <h3>{props.item.name}</h3>
                <p>{props.item.description}</p>
                <p>Price: {props.item.price}</p>

                <div>
                    <img src={props.item.image}></img>
                    <button onClick={() => {props.addToCart(props.item.name)}}>Add to cart</button>
                </div>

            </div>
        
        </div>
    )
}

export default BakeryItem;