# Window object

The window object represents an open window in your browser.

If a document contains frames (`<iframe>` tags), the browser creates one window object for the HTML document, and anohter window object for each frame.

The `Window` interface contains a plethora of functions, namespaces, objects and constructors which are not necessarily directly associated with the conceeot if the user interface window. However, the `Window` interface is a suitable place to include these items that need to be globally available

In a tabbed browser, each tab is represented by its own `Window` object; the global `window` seen by JavaScript code running within a given tab always represents the tab in which the code is running. That said, even in a tabbed browser, some properties and methods still apply to the overall window that contains the tab, such as resizeTo() and innerHeight. Generally, anything that can't reasonably pertain to a tab pertains to the window instead.

