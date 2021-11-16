import React from 'react';

//This is the component for the product gallery with props for image, pricing, title and sticker.
function Product({sticker, imgtext, image, title, price}) {
    return <>
        <article>
            <span>{sticker}</span>
            <img alt={imgtext} src={image}/>
            <p>{title}</p>
            <h4>{price}</h4>
        </article>

    </>

}

export default Product;