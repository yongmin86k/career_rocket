import React, { Component } from "react";
import { TrainingSelectBox } from "../components";

export class TrainingProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showSelectBox: false
    };
  }

  toggleTrainingSelect = () => {
    this.setState({ showSelectBox: !this.state.showSelectBox });
  };

  render() {
    return (
      <TrainingContext.Provider
        value={{
          toggleTrainingSelect: this.toggleTrainingSelect
        }}
      >
        {this.props.children}
        {this.state.showSelectBox && <TrainingSelectBox />}
      </TrainingContext.Provider>
    );
  }
}

const TrainingContext = React.createContext();

export default TrainingContext;
