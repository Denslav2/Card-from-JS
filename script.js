class Card {
    constructor(src, alt, title, descr, price, parentSelector) {
        this.src = src;
        this.alt = alt;
        this.title = title;
        this.descr = descr;
        this.price = price;
        this.parent = document.querySelector(parentSelector);
    }
    render() {
        const elem = document.createElement('div');
        elem.classList.add("card__item");
        elem.innerHTML = `
            <div class="card__box">
                <img src=${this.src} alt=${this.alt} class="card__img">
            </div>
            <div class="card__title">${this.title}</div>
            <div class="card_descr">${this.descr}</div>
            <div class="card__price">Price: <span class="numer">${this.price}</span></div>
        `;
        this.parent.append(elem);
    }
}
new Card(
    "img/1.jpg",
    "Lamborgini",
    "Lamborgini",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium reiciendis magnam ullam. Odio, perferendis omnis! Dolorum praesentium assumenda illo quae vero temporibus, est aliquid obcaecati officia. Dolorem odio assumenda hic maxime, adipisci reprehenderit minima consectetur labore expedita, ullam veniam fugit totam autem voluptatum exercitationem numquam perferendis magnam cum! Deleniti, modi",
    "100000$",
    ".card"
).render();

new Card(
    "img/2.jpg",
    "Ferrari",
    "Ferrari",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium reiciendis magnam ullam. Odio, perferendis omnis! Dolorum praesentium assumenda illo quae vero temporibus, est aliquid obcaecati officia. Dolorem odio assumenda hic maxime, adipisci reprehenderit minima consectetur labore expedita, ullam veniam fugit totam autem voluptatum exercitationem numquam perferendis magnam cum! Deleniti, modi",
    "200000$",
    ".card"
).render();

new Card(
    "img/3.jpg",
    "Tron",
    "Tron",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium reiciendis magnam ullam. Odio, perferendis omnis! Dolorum praesentium assumenda illo quae vero temporibus, est aliquid obcaecati officia. Dolorem odio assumenda hic maxime, adipisci reprehenderit minima consectetur labore expedita, ullam veniam fugit totam autem voluptatum exercitationem numquam perferendis magnam cum! Deleniti, modi",
    "300000$",
    ".card"
).render();