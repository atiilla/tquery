class TQ {
    constructor(props) {
        this.props = props;
        this.author = 'https://github.com/atiilla';
        this.versiyon = '0.0.1';
        this.desc = 'TJS - DOM işlemleri için kolaylık sağlayan bir kütüphanedir.';
        console.log(`%c${this.desc} | Versiyon: ${this.versiyon} | Author: ${this.author}`, 'color: #fff; background: #000; padding: 10px; border-radius: 5px; font-size: 14px; font-weight: bold;');
    }

    bul(selector) {
        return document.querySelector(selector);
    }

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

    ekle(parentElement, childElement) {
        parentElement = typeof parentElement === 'string' ? this.bul(parentElement) : parentElement;
        if (Array.isArray(childElement)) {
            parentElement.append(...childElement);
        } else {
            parentElement.append(childElement);
        }
    }

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

    sil(element) {
        element = typeof element === 'string' ? this.bul(element) : element;
        if (element.id !== 'kok') {
            element.remove();
        } else {
            console.log('Kök eleman silinemez!');
        }
    }
}