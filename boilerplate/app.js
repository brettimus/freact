var React = require("react");
var ReactDOM = require("react-dom");

// Best practice is not to render directly in the body
// So, we create a special container element
var container = createContainerElement("app");
appendToBody(container);

var App = function() {
  return {
    render: function() {
      return <h1> Well, that was quick! </h1>;
    }
  };
}

ReactDOM.render(<App />, container);

function createContainerElement(id) {
  var container = document.createElement("div");
  if (id) container.id = id;
  return container;
}

function appendToBody(node) {
  document.body.insertBefore(node, document.body.firstElementChild)
}
