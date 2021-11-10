# The DOM!

### The HTML DOM (Document Object Model)

When a web page is loaded, the browser creates a Document Object Model of the page.

The HTML DOM is a standard object model and programming interface for HTML. It defines:

The HTML elements as objects
The properties of all HTML elements
The methods to access all HTML elements
The events for all HTML elements
In other words: The HTML DOM is a standard for how to get, change, add, or delete HTML elements.



### The DOM Programming Interface

The HTML DOM can be accessed with JavaScript (and with other programming languages).

In the DOM, all HTML elements are defined as objects.

The programming interface is the properties and methods of each object.

A property is a value that you can get or set (like changing the content of an HTML element).

A method is an action you can do (like add or deleting an HTML element).

## Methods and Properties

The document object represents your web page.

If you want to access any element in a HTML page, you always start with accessing the document object.

Let's see some examples of methods and properties for HTML manipulation.

#### Finding HTML Elements

| **Method**                                   | **Description**                |
| -------------------------------------------- | ------------------------------ |
| `document.getElementById(id)`                | Find an element by element id. |
| `document.getElementsByTagName(tagName)`     | Find elements by tag name.     |
| `document.getElementsByClassName(className)` | Find elements by class name.   |

#### Changing HTML Elements

| **Property**                             | **Description**                                |
| ---------------------------------------- | ---------------------------------------------- |
| `element.innerHTML` = new html content   | Change the inner HTML of an element.           |
| `element.attribute` = new value          | Change the attribute value of an HTML element. |
| `element.style.property` = new style     | Change the style of an HTML element.           |
| **Method**                               | **Description**                                |
| `element.setAttribute(attribute, value)` | Change the attribute value of an HTML element. |

#### Adding and Deleting Elements

| **Method**                        | **Description**                   |
| --------------------------------- | --------------------------------- |
| `document.createElement(element)` | Create an HTML element.           |
| `document.removeChild(element)`   | Remove an HTML element.           |
| `document.appendChild(element)`   | Add an HTML element.              |
| `document.replaceChild(new, old)` | Replace an HTML element.          |
| `document.write(text)`            | Write into the HTML output stream |

#### Adding Evenets Handlers

| **Method**                                               | **Description**                               |
| -------------------------------------------------------- | --------------------------------------------- |
| `document.getElementById(id).onclick` = function(){code} | Adding event handler code to an onclick event |

#### Finding HTML Objects

| **Property**                   | **Description**                                                     |
| ------------------------------ | ------------------------------------------------------------------- |
| `document.anchors`             | Returns all `<a>` elements that have a name attribute.              |
| `document.baseURI`             | Returns the absolute base URI of the document.                      |
| `document.body`                | Returns the `<body>` element.                                       |
| `document.cookie`              | Returns the document's cookie.                                      |
| `document.doctype`             | Returns the document's doctype.                                     |
| `document.documentElement`     | Returns the `<html>` element.                                       |
| `document.documentMode`        | Returns the mode used by the browser.                               |
| `document.documentURI`         | Returns the URI of the document.                                    |
| `document.domain`              | Returns the domain name of the document server.                     |
| `document.embeds`              | Returns all `<embed>` elements.                                     |
| `document.forms`               | Returns all `<form>` elements.                                      |
| `document.head`                | Returns the `<head>` element.                                       |
| `document.images`              | Returns all `<img>` elements.                                       |
| `document.implementation`      | Returns the DOM implementation.                                     |
| `document.inputEncoding`       | Returns the document's encoding (character set).                    |
| `document.lastModified`        | Returns the date and time the document was updated.                 |
| `document.links`               | Returns all `<area>` and `<a>` elements that have a href attribute. |
| `document.readyState`          | Returns the (loading) status of the document.                       |
| `document.referrer`            | Returns the URI of the referrer (the linking document).             |
| `document.scripts`             | Returns all `<script>` elements.                                    |
| `document.strictErrorChecking` | Returns if error checking is enforced.                              |
| `document.title`               | Returns the `<title>` element.                                      |
| `document.URL`                 | Returns the complete URL of the document.                           |
