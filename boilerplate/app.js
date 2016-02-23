var React = require("react");
var ReactDOM = require("react-dom");

var App = function() {
  return {
    render: function() {
      return <h1> Well, that was quick! </h1>;
    }
  };
}

ReactDOM.render(<App />, document.querySelector("#app"));
