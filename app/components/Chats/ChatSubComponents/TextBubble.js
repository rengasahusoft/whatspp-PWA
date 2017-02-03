import React,{ Component } from 'react';
import ContactContainer from './ContactIndicator';
import TimeContainer from './TimeIndicator';

export default class TextComponent extends Component {
  render() {
    return (
        <div className="text-bubble">
          <span className={this.props.className} ></span>
            <ContactContainer />
            <TimeContainer />
        </div>
    );
  }
}

TextComponent.propTypes = {
  className: React.PropTypes.string
};
