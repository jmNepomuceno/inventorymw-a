import React, { Component } from 'react';

import Header from './components/Title'
import VisitorsSection from './components/VisitorsSection'

import visitorOptionFiles from './files/visitorOptions'


class Home extends Component {
    state = {
    }

      render() {
        const visitorsComponents = visitorOptionFiles.map(elem => {
            return (
                <VisitorsSection 
                    key={elem.id}
                    attr={elem}
                    usersInfo={this.props}
                />
            )
        })
   
        return (
            <div>
                <Header />
                <main className="home-main">
                    {visitorsComponents}
                </main> 
            </div>
        );
    }
}
 
export default Home;