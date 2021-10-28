# Window object

The window object represents an open window in your browser.

If a document contains frames (`<iframe>` tags), the browser creates one window object for the HTML document, and anohter window object for each frame.

The `Window` interface contains a plethora of functions, namespaces, objects and constructors which are not necessarily directly associated with the conceeot if the user interface window. However, the `Window` interface is a suitable place to include these items that need to be globally available

In a tabbed browser, each tab is represented by its own `Window` object; the global `window` seen by JavaScript code running within a given tab always represents the tab in which the code is running. That said, even in a tabbed browser, some properties and methods still apply to the overall window that contains the tab, such as resizeTo() and innerHeight. Generally, anything that can't reasonably pertain to a tab pertains to the window instead.

## Location object

The `Location` interface represents the location (URL) of the object it is linked to. Changes done on it are reflected on the object it relates to.

##### Properties of the Location object:

| `hash`     | Sets or returns the anchor part (#) of a URL.            |
| ---------- | -------------------------------------------------------- |
| `host`     | Sets or returns the hostname and port number of a URL.   |
| `hostname` | Sets or returns the hostname of a URL.                   |
| `href`     | Sets or returns the entire URL.                          |
| `origin`   | Returns the protocol, hostname and port number of a URL. |
| `pathname` | Sets or returns the path name of a URL.                  |
| `port`     | Sets or returns the port number of a URL.                |
| `protocol` | Sets or returns the protocol of a URL.                   |
| `search`   | Sets ir retyrbs tge querystring part of a URL.           |

##### Methods of the Location object:

| `assing()`  | Loads a new document.                         |
| ----------- | --------------------------------------------- |
| `reload()`  | Reloads the current document.                 |
| `replace()` | Replaces the current document with a new one. |

## History object

The `History` interface allows manipulation of the browser _session history_, pages visited in the tab/frame that the current page is loaded in.

##### Properties of the History object:

| `length` _read only_ | Returns an `Integer` representing the number of elements in the session history                                                                                |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `scrollRestoration`  | Allows web applications to explicitly set default scroll restoration behavior on history navigation. This property can be either `auto` or `manual`.           |
| `state` _read only_  | Returns an `any` value representing the state at the top of the history stack. This is a way to look at the state without having to wait for a popstate event. |

##### Methods of the History object:

| `back()`         | This asynchronous method goes to the previous page in session history.                                                                                                     |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `forward()`      | This asynchronous method goes to the next page in session history.                                                                                                         |
| `go()`           | Asynchronously loads a page from the session history, identified by its relative location to the current page, for example -1 for the previous page or 1 for the next page |
| `pushState()`    | Pushes the given data onto the session history stack with the specified title.                                                                                             |
| `replaceState()` | Updates the most recent entry on the history stack to have the specified data, title, and, if provided, URL.                                                               |

## Navigator object

The `Navigator` interface represents the state and the identity of the user agent (the browser). It allows scripts to query it and to register themselves to carry on some activites.

##### Properties of the Navigator object:

| `appCodeName`   | Returns the code name of the browser.                                        |
| --------------- | ---------------------------------------------------------------------------- |
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

| `javaEnabled()` | Specifies whether the browser has Java enabled or not. |
| --------------- | ------------------------------------------------------ |

