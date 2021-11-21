import React, {Fragment} from 'react';
import './App.css';
import Button from './components/Button';
import Product from './components/Product';
import Tile from './components/Tile';
import bag_1 from './assets/bag_1.png';
import bag_2 from './assets/bag_2.png';
import bag_3 from './assets/bag_3.png';
import bag_4 from './assets/bag_4.png';
import brand from './assets/brand.png';
import our_story from './assets/our_story.png';

function App() {
    return (
        <Fragment>

            <h1>Handbags & Purses</h1>

            {/*Navigation bar with buttons*/}
            <nav>
                <Button
                    name="to the collection"
                    message="To the Collection"
                    disabled={false}
                />
                <Button
                    name="shop all bags"
                    message="Shop all bags"
                    disabled={false}
                />
                <Button
                    name="pre-orders"
                    message="To Pre-Orders"
                    disabled={true}
                />
            </nav>

            {/*Product gallery*/}
            {/*euro sign is added with css*/}
            <main>
                <Product
                    sticker="Best seller"
                    image={bag_1}
                    imgtext="picture of bag"
                    title="The handy bag"
                    price="400"
                />
                <Product
                    sticker="Best seller"
                    image={bag_2}
                    imgtext="picture of bag"
                    title="The stylish bag"
                    price="250"
                />
                <Product
                    sticker="Best seller"
                    image={bag_3}
                    imgtext="picture of bag"
                    title="The simple bag"
                    price="300"
                />
                <Product
                    sticker="Best seller"
                    image={bag_4}
                    imgtext="picture of bag"
                    title="The trendy bag"
                    price="150"
                />
            </main>

            {/*Footer with four tiles*/}
            {/*the Tile.js component contains a function that splits the text in paragraphs at every soft return*/}
            <footer>
                <Tile
                    title="The brand"
                    text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam dicta dolor ducimus eveniet hic iure magni necessitatibus numquam quae!

                   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam dicta dolor ducimus eveniet hic iure magni necessitatibus numquam quae!"
                />
                <Tile
                    image={brand}
                    imgtext="picture of brand or designer"
                />
                <Tile
                    image={our_story}
                    imgtext="picture of brand or designer"
                />
                <Tile
                    title="Our story"
                    text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam dicta dolor ducimus eveniet hic iure magni necessitatibus numquam quae!

                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam dicta dolor ducimus eveniet hic iure magni necessitatibus numquam quae!"
                />
            </footer>

        </Fragment>
    )
}

export default App;



