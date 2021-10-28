# Window object

The window object represents an open window in your browser.

If a document contains frames (`<iframe>` tags), the browser creates one window object for the HTML document, and anohter window object for each frame.

The `Window` interface contains a plethora of functions, namespaces, objects and constructors which are not necessarily directly associated with the conceeot if the user interface window. However, the `Window` interface is a suitable place to include these items that need to be globally available

In a tabbed browser, each tab is represented by its own `Window` object; the global `window` seen by JavaScript code running within a given tab always represents the tab in which the code is running. That said, even in a tabbed browser, some properties and methods still apply to the overall window that contains the tab, such as resizeTo() and innerHeight. Generally, anything that can't reasonably pertain to a tab pertains to the window instead.

### History object

The `History` interface allows manipulation of the browser _session history_, pages visited in the tab/frame that the current page is loaded in.

##### Properties of the History object

| `lenght` _read only_ | Returns an `Integer` representing the number of elements in the session history                                                                                |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `scrollRestoration`  | Allows web applications to explicitly set default scroll restoration behavior on history navigation. This property can be either `auto` or `manual`.           |
| `state` _read only_  | Returns an `any` value representing the state at the top of the history stack. This is a way to look at the state without having to wait for a popstate event. |

##### Methods of the History object

| `back()`         | This asynchronous method goes to the previous page in session history.                                                                                                     |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `forward()`      | This asynchronous method goes to the next page in session history.                                                                                                         |
| `go()`           | Asynchronously loads a page from the session history, identified by its relative location to the current page, for example -1 for the previous page or 1 for the next page |
| `pushState()`    | Pushes the given data onto the session history stack with the specified title.                                                                                             |
| `replaceState()` | Updates the most recent entry on the history stack to have the specified data, title, and, if provided, URL.                                                               |
