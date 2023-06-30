var Book = /** @class */ (function () {
    function Book(title, author, genre) {
        this.title = title;
        this.checkedOut = false;
        this.author = author;
        this.genre = genre;
    }
    return Book;
}());
var DVD = /** @class */ (function () {
    function DVD(title, director, duration) {
        this.title = title;
        this.checkedOut = false;
        this.director = director;
        this.duration = duration;
    }
    return DVD;
}());
var Library = /** @class */ (function () {
    function Library() {
        this.items = [];
    }
    Library.prototype.addItem = function (item) {
        this.items.push(item);
    };
    Library.prototype.getItemByTitle = function (title) {
        for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.title === title) {
                return item;
            }
        }
        return null;
    };
    Library.prototype.checkOutItem = function (title) {
        var item = this.getItemByTitle(title);
        if (item) {
            item.checkedOut = true;
            console.log("Checked out ".concat(item.title));
        }
        else {
            console.log("Item \"".concat(title, "\" not found in the library."));
        }
    };
    Library.prototype.displayAvailableItems = function () {
        var itemsContainer = document.getElementById('items-container');
        if (!itemsContainer)
            return;
        itemsContainer.innerHTML = '';
        var availableItems = this.items.filter(function (item) { return !item.checkedOut; });
        if (availableItems.length === 0) {
            var message = document.createElement('p');
            message.textContent = 'No items available in the library.';
            itemsContainer.appendChild(message);
        }
        else {
            var itemList_1 = document.createElement('ul');
            itemList_1.classList.add('item-list');
            availableItems.forEach(function (item) {
                var listItem = document.createElement('li');
                listItem.classList.add('item');
                var title = document.createElement('p');
                title.classList.add('item-title');
                title.textContent = item.title;
                listItem.appendChild(title);
                itemList_1.appendChild(listItem);
            });
            itemsContainer.appendChild(itemList_1);
        }
    };
    return Library;
}());
var library = new Library();
var book1 = new Book('The Great Gatsby', 'F. Scott Fitzgerald', 'Classic');
var book2 = new Book('To Kill a Mockingbird', 'Harper Lee', 'Fiction');
var dvd1 = new DVD('Inception', 'Christopher Nolan', 120);
var dvd2 = new DVD('The Shawshank Redemption', 'Frank Darabont', 142);
library.addItem(book1);
library.addItem(book2);
library.addItem(dvd1);
library.addItem(dvd2);
library.displayAvailableItems();
