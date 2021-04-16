import React from 'react';

export default function Header (props){
    const {countCartItems}=props; 
    return (
        <header class="row block center">
            <div>
                <a href="#/">
                    <h1>ToyRoboto</h1> 
                    {/* Este es el nombre de la marca */}
                </a>
            </div>
            <div>
                <a href="#/cart">

                    Cart {''}
                    {countCartItems?(
                        <button className="badge">{countCartItems}</button>
                    ):(
                        ''
                    )
                }
                </a>
                <a href= "#/sigin">SignIn</a>
            </div>
        </header>
    );
}