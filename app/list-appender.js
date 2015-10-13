import React from 'react'

export default React.createClass({
  getInitialState() {
    return { items: [] }
  },
  addOne() {
    const items = this.state.items
    items.push(new Date().getTime())
    this.setState({ items: items })
  },
  clear() {
    this.setState({ items: [] })
  },
  render() {
    return (
      <div>
        <button className="button-add" onClick={this.addOne}>{this.props.label}</button>
        <button className="button-clear" onClick={this.clear}>Clear</button>
        <ul>
          {this.state.items.map((item, i) => <li key={`items-${i}`}>{item}</li>)}
        </ul>
      </div>
    );
  }
})
