class TQ {
    /**
     * Creates an instance of TQ.
     * @param {Object} props - The properties for TQ.
     */
    constructor(props) {
        this.props = props;
        this.author = 'https://github.com/atiilla';
        this.versiyon = '0.0.1';
        this.desc = ['TJS - DOM işlemleri için kolaylık sağlayan bir kütüphanedir.', 'TJS - It is a library that provides convenience for DOM operations.'];
        console.log(`%c${this.desc[0]} | Versiyon: ${this.versiyon} | Author: ${this.author}`, 'color: #fff; background: #000; padding: 10px; border-radius: 5px; font-size: 10px; font-weight: bold;');
        console.log(`%c${this.desc[1]} | Version: ${this.versiyon} | Author: ${this.author}`, 'color: #fff; background: #000; padding: 10px; border-radius: 5px; font-size: 10px; font-weight: bold;');
    }

    /**
     * Finds and returns the first element that matches the specified selector.
     * @param {string} selector - The selector to search for.
     * @returns {Element} - The matching element.
     */
    bul(selector) {
        return document.querySelector(selector);
    }

    /**
     * Creates a new element with the specified tag, attributes, and content.
     * @param {string} tag - The tag name of the element to create.
     * @param {Object} features - The attributes and their values to add to the element.
     * @param {string} content - The text content to add to the element.
     * @returns {Element} - The newly created element.
     */
    olustur(tag, features, content) {
        const element = document.createElement(tag);
        for (const key in features) {
            element.setAttribute(key, features[key]);
        }
        if (content) {
            const contentNode = document.createTextNode(content);
            element.appendChild(contentNode);
        }
        return element;
    }

    /**
     * Appends a child element or an array of child elements to a parent element.
     * @param {Element|string} parentElement - The parent element or its selector.
     * @param {Element|Element[]} childElement - The child element(s) to append.
     */
    ekle(parentElement, childElement) {
        parentElement = typeof parentElement === 'string' ? this.bul(parentElement) : parentElement;
        if (Array.isArray(childElement)) {
            parentElement.append(...childElement);
        } else {
            parentElement.append(childElement);
        }
    }

    /**
     * Adds an event listener to an element for the specified event.
     * @param {Element|string} element - The element or its selector to attach the event listener.
     * @param {string} event - The event name.
     * @param {Function} handler - The event handler function.
     */
    olayEkle(element, event, handler) {
        element = typeof element === 'string' ? this.bul(element) : element;
        switch (event) {
            case 'tikla':
                event = 'click';
                break;
            case 'degistiginde':
                event = 'change';
                break;
            case 'fareGirdiginde':
                event = 'mouseenter';
                break;
            case 'fareCikinca':
                event = 'mouseleave';
                break;
            case 'tusBasinca':
                event = 'keydown';
                break;
            case 'tusBirakinca':
                event = 'keyup';
                break;
        }
        element.addEventListener(event, handler);
    }

    /**
     * Removes an element from the DOM.
     * @param {Element|string} element - The element or its selector to remove.
     */
    sil(element) {
        element = typeof element === 'string' ? this.bul(element) : element;
        if (element.id !== 'kok') {
            element.remove();
        } else {
            console.log('Kök eleman silinemez!');
        }
    }

    /**
     * Updates the attributes of an element with the specified features.
     * @param {Element|string} element - The element or its selector to update.
     * @param {Object} features - The attributes and their updated values.
     */
    OznitelikGuncelle(element, features) {
        element = typeof element === 'string' ? this.bul(element) : element;
        for (const key in features) {
            element.setAttribute(key, features[key]);
        }
    }

    /**
     * Removes the specified attributes from an element.
     * @param {Element|string} element - The element or its selector to remove attributes from.
     * @param {string[]} features - The attributes to remove.
     */
    OznitelikSil(element, features) {
        element = typeof element === 'string' ? this.bul(element) : element;
        for (const key in features) {
            element.removeAttribute(key);
        }
    }

    /**
     * Reads the value of a specific attribute of an element.
     * @param {Element|string} element - The element or its selector to read the attribute from.
     * @param {string} feature - The attribute to read.
     * @returns {string} - The value of the specified attribute.
     */
    OznitelikOku(element, feature) {
        element = typeof element === 'string' ? this.bul(element) : element;
        return element.getAttribute(feature);
    }

    /**
     * Retrieves all child elements of a parent element.
     * @param {Element|string} element - The parent element or its selector.
     * @returns {Element[]} - An array of child elements.
     */
    AltElemanlariGetir(element) {
        element = typeof element === 'string' ? this.bul(element) : element;
        return Array.from(element.children);
    }

    /**
     * Updates the content of an element with the specified content.
     * @param {Element|string} element - The element or its selector to update the content of.
     * @param {string} content - The new content to set for the element.
     */
    IcerikGuncelle(element, content) {
        element = typeof element === 'string' ? this.bul(element) : element;
        element.innerHTML = content;
    }

    /**
     * Reads the content of an element.
     * @param {Element|string} element - The element or its selector to read the content from.
     * @returns {string} - The content of the element.
     */
    IcerikOku(element) {
        element = typeof element === 'string' ? this.bul(element) : element;
        return element.innerHTML;
    }

    /**
     * Replaces an element with a new element.
     * @param {Element|string} element - The element or its selector to replace.
     * @param {Element|string} newElement - The new element or its selector.
     */
    ElementDegistir(element, newElement) {
        element = typeof element === 'string' ? this.bul(element) : element;
        newElement = typeof newElement === 'string' ? this.bul(newElement) : newElement;
        element.replaceWith(newElement);
    }

    /**
     * Creates a deep copy of an element.
     * @param {Element|string} element - The element or its selector to copy.
     * @returns {Element} - The copied element.
     */
    ElementKopyala(element) {
        element = typeof element === 'string' ? this.bul(element) : element;
        return element.cloneNode(true);
    }

    /**
     * Converts an HTML string into an element.
     * @param {string} element - The HTML string to convert.
     * @returns {Element} - The converted element.
     */
    HTMLElDonustur(element) {
        element = document.createRange().createContextualFragment(element);
        return element.childNodes[0];
    }
}
