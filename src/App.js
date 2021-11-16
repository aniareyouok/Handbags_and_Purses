import React, {Fragment} from 'react';
import './App.css';
import Button from './components/Button';

function App() {
  return (
      <Fragment>
      <h1>Handbags & Purses</h1>
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
        </Fragment>
  )}

export default App;



