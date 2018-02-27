import React, { Component } from 'react';

class KeyProp extends Component {
  static allItems = [
    {
      id: 1,
      value: 'apple'
    },
    {
      id: 2,
      value: 'pear'
    },
    {
      id: 3,
      value: 'orange'
    },
    {
      id: 4,
      value: 'banana'
    }
  ];

  state = {
    items: []
  };

  addItems = () => {
    this.setState(({ items }) => ({
      items: [...items, KeyProp.allItems.find(i => !items.includes(i))]
    }));
  };

  removeItems = item => {
    this.setState(({ items }) => ({
      items: items.filter(i => i !== item)
    }));
  };

  render() {
    const { items } = this.state;
    return (
      <div className="container">
        <button
          disabled={items.length >= KeyProp.allItems.length}
          className="addBtn"
          onClick={this.addItems}
        >
          +
        </button>
        <div className="items-wrap">
          {items.map((i, index) => {
            // Without a key prop in this example, React is not able to stablish a connection between the input and the items that live in the array. This is why a key prop is important
            return (
              <div key={i.id}>
                <button
                  onClick={() => this.removeItems(i)}
                  className="removeBtn"
                >
                  -
                </button>
                <p className="item">{i.value}</p>
                <input type="text" />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default KeyProp;
