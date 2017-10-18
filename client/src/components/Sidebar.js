import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { selectCity, removeCity } from '../actions';
import City from './City';

const Fade = ({ children, ...props }) => (
  <CSSTransition {...props} timeout={1000} classNames="fade">
    {children}
  </CSSTransition>
);

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.onRemove = this.onRemove.bind(this);
  }

  async onRemove(id) {
    await this.props.removeCity(id);
    if (this.props.cities[0]) {
      this.props.selectCity(this.props.cities[0].id);
    }
  }

  renderCities() {
    return (
      <TransitionGroup>
        {this.props.cities.map(city => {
          return (
            <Fade key={city.id}>
              <City
                key={city.id}
                city={city}
                selected={city.id === this.props.selectedCity}
                onRemove={this.onRemove}
                onSelect={id => this.props.selectCity(id)}
              />
            </Fade>
          );
        })}
      </TransitionGroup>
    );
  }

  render() {
    return <div className="sidebar">{this.renderCities()}</div>;
  }
}

function mapStateToProps({ cities, selectedCity }) {
  return { cities, selectedCity };
}

export default connect(mapStateToProps, { selectCity, removeCity })(Sidebar);
