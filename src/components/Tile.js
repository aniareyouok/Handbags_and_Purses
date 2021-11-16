import React from 'react';
import Text from '../assets/Text';

// This is a component with dynamic tiles and properties in four different sections,
// as wel as a function where if an image is given
// the "image" and "image alternative text" is given as properties
// otherwise a header for the "title" and two "paragraphs" will be given
function Tile({title, imgtext, image}) {

    // After every soft return the text is split and stored in the array paragraph
    const paragraph = Text().split('\r')
    if (image) {
        return <section>
            <img alt={imgtext} src={image}/>
        </section>
    } else {
        return <section>
            <h2>{title}</h2>

            {/*The map method puts each item of the array in a html paragraph item*/}
            {paragraph.map((p, index) => <p key={index}>{p}</p>)}
        </section>
    }

}

export default Tile;