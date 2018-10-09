import React, { Component } from 'react';

import AssignmentDetails from './AssignmentDetails';
import NotFound from './SubComponents/NotFound'
import Reload from './SubComponents/Reload'
import  Loading from './SubComponents/Loading'
import  ServerError from './SubComponents/ServerError'

class ConditionalRenderPractice extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
    };
  }

  render() {
    return (
        <section className="lesson-conditional-render info-panel">
          <h2>Practice Conditional Rendering</h2>
            <div>
                <span> <button >Not Found</button> </span>
                <span> <button>Server Error</button> </span>
                <span> <button>Loading</button> </span>
                <span> <button>Re-Load</button> </span>
            </div>

            <div>

            </div>
        </section>
    );
  }
}

export default ConditionalRenderPractice;
