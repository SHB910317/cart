import React from 'react'

export default function Product(props) {
    const{product, onAdd}=props;
    return (
        <div>
            <img className = "photos" src={product.image} alt={product.name}></img>
            <h3>{product.name}</h3>
            <div className="price">${product.price}</div>
            <div>
                <button onClick={()=>onAdd(product)}>Add to cart</button>
            </div>
        </div>
        
    )
}
