import React from 'react';
import ReactDOM from 'react-dom';
import "semantic-ui-css/semantic.min.css"
import { faker } from '@faker-js/faker';
import ComponentDetails from './ComponentDetails';
import AppprovalCard from './ApprovalCard';

const App = () =>{
    return(
        <div className='ui container comments'>
        <AppprovalCard>
            <ComponentDetails
           author="De-Prof"
           blog="Nice blog post" 
           time="Today at 4:00pm"
           avatar= {faker.image.avatar()}/>
        </AppprovalCard>

        <AppprovalCard>
            <ComponentDetails 
          author="Gore" 
          blog="very intressting"
           time="Yesterday at 2:00am"
           avatar= {faker.image.avatar()}/> 
        </AppprovalCard>
         
        <AppprovalCard>
        <ComponentDetails
           author="Fresh"
           blog="Does impressive"
           time="Today at 7:20pm"
           avatar= {faker.image.avatar()}/>
        </AppprovalCard>
                  
    </div>
    );
};

ReactDOM.render(
    <App/>, document.querySelector('#root')
)