import React from 'react';
import ReactDOM from 'react-dom'

import Card from './components/card';
import Collapse from './components/collapse';

//JSX


const App = () => {


  return (
    <div className="container">
      <div className="row">
        <div className="card-group w-100">
          <div className="col">
            <Collapse href="collapseExample1">
              <Card 
                cardText="Lorem İpsum Text 1"
                updatedTime="Last updated 1 min ago"
                image="https://picsum.photos/id/1/200/300" />
            </Collapse>
          </div>
          <div className="col">
            <Collapse href="collapseExample2">
              <Card cardTitle="Card Title - 2"
                cardText="Lorem İpsum Text 2"
                updatedTime="Last updated 2 min ago"
                image="https://picsum.photos/id/10/200/300" />
            </Collapse>
          </div>
          <div className="col">
            <Collapse href="collapseExample3">
              <Card cardTitle="Card Title - 3"
                cardText="Lorem İpsum Text 3"
                updatedTime="Last updated 3 min ago"
                image="https://picsum.photos/id/100/200/300" />
            </Collapse>
          </div>
        </div>
      </div>

    </div>

  );

}



ReactDOM.render(
  <App />,
  // document.getElementById('root')
  document.getElementById('root')
);