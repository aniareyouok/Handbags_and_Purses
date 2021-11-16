import React, {Fragment} from 'react';
import './App.css';
import Button from './components/Button';
import bag_1 from './assets/bag_1.png';
import bag_2 from './assets/bag_2.png';
import bag_3 from './assets/bag_3.png';
import bag_4 from './assets/bag_4.png';

function App() {
  return (
      <Fragment>
      <h1>Handbags & Purses</h1>

          {/*Navigation bar with buttons*/}
          <nav>
              <Button>
                  name="to the collection"
                  message="To the Collection"
                  disabled={false}
              </Button>
              <Button>
                  name="shop all bags"
                  message="Shop all bags"
                  disabled={false}
              </Button>
              <Button>
                  name="pre-orders"
                  message="To Pre-Orders"
                  disabled={true}
              </Button>
          </nav>

          {/*Product gallery*/}
          {/*Note that images are imported, see line 4 to 7*/}
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
        </Fragment>
  )}

export default App;



