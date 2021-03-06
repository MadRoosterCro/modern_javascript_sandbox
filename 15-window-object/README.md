# Window object

The window object represents an open window in your browser.

If a document contains frames (`<iframe>` tags), the browser creates one window object for the HTML document, and anohter window object for each frame.

The `Window` interface contains a plethora of functions, namespaces, objects and constructors which are not necessarily directly associated with the conceeot if the user interface window. However, the `Window` interface is a suitable place to include these items that need to be globally available

In a tabbed browser, each tab is represented by its own `Window` object; the global `window` seen by JavaScript code running within a given tab always represents the tab in which the code is running. That said, even in a tabbed browser, some properties and methods still apply to the overall window that contains the tab, such as resizeTo() and innerHeight. Generally, anything that can't reasonably pertain to a tab pertains to the window instead.

## Location object

The `Location` interface represents the location (URL) of the object it is linked to. Changes done on it are reflected on the object it relates to.

##### Properties of the Location object:

| Property   | Description                                              |
| ---------- | -------------------------------------------------------- |
| `hash`     | Sets or returns the anchor part (#) of a URL.            |
| `host`     | Sets or returns the hostname and port number of a URL.   |
| `hostname` | Sets or returns the hostname of a URL.                   |
| `href`     | Sets or returns the entire URL.                          |
| `origin`   | Returns the protocol, hostname and port number of a URL. |
| `pathname` | Sets or returns the path name of a URL.                  |
| `port`     | Sets or returns the port number of a URL.                |
| `protocol` | Sets or returns the protocol of a URL.                   |
| `search`   | Sets ir retyrbs tge querystring part of a URL.           |

##### Methods of the Location object:

| Method      | Description                                   |
| ----------- | --------------------------------------------- |
| `assing()`  | Loads a new document.                         |
| `reload()`  | Reloads the current document.                 |
| `replace()` | Replaces the current document with a new one. |

## History object

The `History` interface allows manipulation of the browser _session history_, pages visited in the tab/frame that the current page is loaded in.

##### Properties of the History object:

| Property             | Description                                                                                                                                                    |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `length` _read only_ | Returns an `Integer` representing the number of elements in the session history                                                                                |
| `scrollRestoration`  | Allows web applications to explicitly set default scroll restoration behavior on history navigation. This property can be either `auto` or `manual`.           |
| `state` _read only_  | Returns an `any` value representing the state at the top of the history stack. This is a way to look at the state without having to wait for a popstate event. |

##### Methods of the History object:

| Method           | Description                                                                                                                                                                |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `back()`         | This asynchronous method goes to the previous page in session history.                                                                                                     |
| `forward()`      | This asynchronous method goes to the next page in session history.                                                                                                         |
| `go()`           | Asynchronously loads a page from the session history, identified by its relative location to the current page, for example -1 for the previous page or 1 for the next page |
| `pushState()`    | Pushes the given data onto the session history stack with the specified title.                                                                                             |
| `replaceState()` | Updates the most recent entry on the history stack to have the specified data, title, and, if provided, URL.                                                               |

## Navigator object

The `Navigator` interface represents the state and the identity of the user agent (the browser). It allows scripts to query it and to register themselves to carry on some activites.

##### Properties of the Navigator object:

| Property        | Description                                                                  |
| --------------- | ---------------------------------------------------------------------------- |
| `appCodeName`   | Returns the code name of the browser.                                        |
| `appName`       | Returns the name of the browser.                                             |
| `appVersion`    | Returns the version information of the browser.                              |
| `cookieEnabled` | Determines whether cookies are enabled in the browser.                       |
| `geolocation`   | Returns a Geolocation object that can be used to locate the user's position. |
| `language`      | Returns the language of the browser.                                         |
| `onLine`        | Determines whether the browser is online.                                    |
| `platform`      | Returns for which platform the browser is compiled.                          |
| `product`       | Returns the engine name of the browser.                                      |
| `userAgent`     | Returns the user-agent header sent by the browser to the server.             |

##### Methods of the Navigator object:

| Method          | Description                                            |
| --------------- | ------------------------------------------------------ |
| `javaEnabled()` | Specifies whether the browser has Java enabled or not. |

### Window object properties:

| **Property**     | **Description**                                                                                                     |
| ---------------- | ------------------------------------------------------------------------------------------------------------------- |
| `closed`         | Returns a Boolean value indicating whether a window has been closed or not.                                         |
| `console`        | Returns a reference to the Console object, which provides methods for logging information to the browser's console. |
| `defaultStatus`  | Sets or returns the default text in the statusbar of a window.                                                      |
| `document`       | Returns the Document object for the window.                                                                         |
| `frameElement`   | Returns the `<iframe>` element in which the current window is inserted.                                             |
| `frames`         | Returns all `<iframe>` elements in the current window.                                                              |
| `history`        | Returns the History object for the window.                                                                          |
| `innerHeight`    | Returns the height of the window's content area (viewport) including scrollbars.                                    |
| `innerWidth`     | Returns the width of a window's content area (viewport) including scrollbars.                                       |
| `length`         | Returns the number of `<iframe>` elements in the current window.                                                    |
| `localStorage`   | Allows to save key/value pairs in a web browser. Stores the data with no expiration date.                           |
| `location`       | Returns the Location object for the window.                                                                         |
| `name`           | Sets or returns the name of a window.                                                                               |
| `navigator`      | Returns the Navigator object for the window.                                                                        |
| `opener`         | Returns a reference to the window that created the window.                                                          |
| `outerHeight`    | Returns the height of the browser window, including toolbars/scrollbars.                                            |
| `outerWidth`     | Returns the width of the browser window, including toolbars/scrollbars.                                             |
| `pageXOffset`    | Returns the pixels the current document has been scrolled (horizontally) from the upper left corner of the window.  |
| `pageYOffset`    | Returns the pixels the current document has been scrolled (vertically) from the upper left corner of the window.    |
| `parent`         | Returns the parent window of the current window.                                                                    |
| `screen`         | Returns the Screen object for the window.                                                                           |
| `screenLeft`     | Returns the horizontal coordinate of the window relative to the screen.                                             |
| `screenTop`      | Returns the vertical coordinate of the window relative to the screen.                                               |
| `screenX`        | Returns the horizontal coordinate of the window relative to the screen.                                             |
| `screenY`        | Returns the vertical coordinate of the window relative to the screen.                                               |
| `sessionStorage` | Allows to save key/value pairs in a web browser. Stores the data for one session.                                   |
| `scrollX`        | An alias of pageXOffset.                                                                                            |
| `scrollY`        | An alias of pageYOffset.                                                                                            |
| `self`           | Returns the current window.                                                                                         |
| `status`         | Sets or returns the text in the statusbar of a window.                                                              |
| `top`            | Returns the topmost browser window.                                                                                 |

### Window object methods:

| **Method**                | **Description**                                                                         |
| ------------------------- | --------------------------------------------------------------------------------------- |
| `alert()`                 | Displays an alert box with a message and an OK button.                                  |
| `atob()`                  | Decodes a base-64 encoded string.                                                       |
| `blur()`                  | Removes focus from the current window.                                                  |
| `btoa()`                  | Encodes a string in base-64.                                                            |
| `clearInterval()`         | Clears a timer set with `setInterval()`.                                                |
| `clearTimeout()`          | Clears a timer set with `setTimeout()`.                                                 |
| `close()`                 | Closes the current window.                                                              |
| `confirm()`               | Displays a dialog box with a message and an OK and a Cancel button.                     |
| `focus()`                 | Sets focus to the current window.                                                       |
| `getComputedStyle()`      | Gets the current computed CSS styles applied to an element.                             |
| `getSelection()`          | Returns a Selection object representing the range of text selected by the user.         |
| `matchMedia()`            | Returns a MediaQueryList object representing the specified CSS media query string.      |
| `moveBy()`                | Moves a window relative to its current position.                                        |
| `moveTo()`                | Moves a window to the specified position.                                               |
| `open()`                  | Opens a new browser window.                                                             |
| `print()`                 | Prints the content of the current window.                                               |
| `prompt()`                | Displays a dialog box that prompts the visitor for input.                               |
| `requestAnimationFrame()` | Requests the browser to call a function to update an animation before the next repaint. |
| `resizeBy()`              | Resizes the window by the specified pixels.                                             |
| `resizeTo()`              | Resizes the window to the specified width and height.                                   |
| `scrollBy()`              | Scrolls the document by the specified number of pixels.                                 |
| `scrollTo()`              | Scrolls the document to the specified coordinates.                                      |
| `setInterval()`           | Calls a function or evaluates an expression at specified intervals (in milliseconds).   |
| `setTimeout()`            | Calls a function or evaluates an expression after a specified number of milliseconds.   |
| `stop()`                  | Stops the window from loading.                                                          |

> You might notice I've purposely skipped the Document object. We will cover that in a separate lesson. :)

