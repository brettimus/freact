# freact
> | frēˈakt |
>
> to freely start a new react project

## Quick Use
* Create a new project
```bash
freact new free-to-react && cd free-to-react
```
* Just add code!
```javascript
const React = require("react");
const ReactDOM = require("react-dom");
// ...
const App = () => ({
    render() {
      return <h1> That was quick! </h1>;
    }
})
// ...
ReactDOM.render(<App />, document.body)
```
* Start the development server
```bash
freact start
```
