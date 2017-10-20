import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { selectCity, removeCity, reorderCities } from '../actions';
import City from './City';

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.onRemove = this.onRemove.bind(this);
    this.onDragEnd = this.onDragEnd.bind(this);
  }

  async onRemove(id) {
    await this.props.removeCity(id);
    if (this.props.cities[0]) {
      this.props.selectCity(this.props.cities[0].id);
    }
  }

  onDragEnd(result) {
    // dropped outside the list
    if (!result.destination) {
      return;
    }
    this.props.reorderCities(result.source.index, result.destination.index);
  }

  render() {
    return (
      <div className="sidebar">
        <DragDropContext onDragEnd={this.onDragEnd}>
          <Droppable droppableId="droppable">
            {(provided, snapshot) => (
              <div className="droppable" ref={provided.innerRef}>
                {this.props.cities.map(city => (
                  <Draggable key={city.id} draggableId={city.id}>
                    {(provided, snapshot) => (
                      <div>
                        <div
                          className="draggable"
                          ref={provided.innerRef}
                          style={provided.draggableStyle}
                        >
                          <i
                            className="material-icons handle"
                            {...provided.dragHandleProps}
                          >
                            import_export
                          </i>
                          <City
                            key={city.id}
                            city={city}
                            selected={city.id === this.props.selectedCity}
                            onRemove={this.onRemove}
                            onSelect={id => this.props.selectCity(id)}
                          />
                        </div>
                        {provided.placeholder}
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    );
  }
}

function mapStateToProps({ cities, selectedCity }) {
  return { cities, selectedCity };
}

const mapDispatchToProps = {
  selectCity,
  removeCity,
  reorderCities
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
