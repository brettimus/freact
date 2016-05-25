**No longer on npm**
I gave the package name `freact` to someone else because :heart:.

If you want to run this, install it locally with `npm link`. If that makes no sense to you, email me.

# freact
> | frēˈakt |
>
> To freely start a new React project.

## Quick Use
Go to the freact store. **[CURRENTLY CLOSED]**
```bash
# Sorry, the freact store is closed
# npm i -g freact
```

Do some React in a file called `app.js`.
```javascript
var React = require("react");
var ReactDOM = require("react-dom");

var App = function() {
  return {
    render: function() {
      return <h1>Holy cow it worked!</h1>
    }
  };
}

ReactDOM.render(<App />, document.body);
```

Serve up that React.
```bash
freact start
```

## Slow Use
_**TODO**_

* `freact new <name-of-project>` Creates new directory and populates with boilerplate code.
  * Defaults to current directory.
* `freact start <port-number>` Attempts to serve `app.js` out of current directory.
  * Defaults to port `8000`

## Notes
* Uses a tiny express server.
* Kinda slow to reload because the javascript is recompiled with every request to `/freact-javascript`.
