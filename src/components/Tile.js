import React from 'react';

function Tile({title, imgtext, image, text}) {
    if (image) {
        return <section>
            <img alt={imgtext} src={image}/>
        </section>
    } else {
        // After every soft return ('\r' e.g. 'enter next line') the text is split and stored in an array
        const paragraphs = text.split('\r')
        // The map method puts each item of the array in a html paragraph item
        const tileP = paragraphs.map((paragraph) => {
            return <p>{paragraph}</p>
        });
        return <section>
            <h2>{title}</h2>
            {tileP}
        </section>
    }
}

export default Tile;