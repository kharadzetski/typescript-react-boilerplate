import * as React from 'react';

export interface HelloProps { compiler: string; framework: string;
}

export class Main extends React.Component<HelloProps, { counter: number }> {
  constructor() {
    super();
    this.state = {counter: 0};
  }

  private btnClick = (): boolean => {
    this.setState({counter: this.state.counter + 1});
    return false;
  };

  render() {
    return <h1 onClick={this.btnClick}>Hello from {this.props.compiler}
      and {this.props.framework}! Click counter is {this.state.counter}</h1>;
  };
}
