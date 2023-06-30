interface Item {
    title: string;
    checkedOut: boolean;
  }
  
  class Book implements Item {
    title: string;
    checkedOut: boolean;
    author: string;
    genre: string;
  
    constructor(title: string, author: string, genre: string) {
      this.title = title;
      this.checkedOut = false;
      this.author = author;
      this.genre = genre;
    }
  }
  
  class DVD implements Item {
    title: string;
    checkedOut: boolean;
    director: string;
    duration: number;
  
    constructor(title: string, director: string, duration: number) {
      this.title = title;
      this.checkedOut = false;
      this.director = director;
      this.duration = duration;
    }
  }
  
  class Library {
    items: Item[];
  
    constructor() {
      this.items = [];
    }
  
    addItem(item: Item) {
      this.items.push(item);
    }
  
    getItemByTitle(title: string) {
      for (const item of this.items) {
        if (item.title === title) {
          return item;
        }
      }
      return null;
    }
  
    checkOutItem(title: string) {
      const item = this.getItemByTitle(title);
      if (item) {
        item.checkedOut = true;
        console.log(`Checked out ${item.title}`);
      } else {
        console.log(`Item "${title}" not found in the library.`);
      }
    }
  
    displayAvailableItems() {
      const itemsContainer = document.getElementById('items-container');
      if (!itemsContainer) return;
  
      itemsContainer.innerHTML = '';
  
      const availableItems = this.items.filter((item) => !item.checkedOut);
      if (availableItems.length === 0) {
        const message = document.createElement('p');
        message.textContent = 'No items available in the library.';
        itemsContainer.appendChild(message);
      } else {
        const itemList = document.createElement('ul');
        itemList.classList.add('item-list');
  
        availableItems.forEach((item) => {
          const listItem = document.createElement('li');
          listItem.classList.add('item');
  
          const title = document.createElement('p');
          title.classList.add('item-title');
          title.textContent = item.title;
  
          listItem.appendChild(title);
          itemList.appendChild(listItem);
        });
  
        itemsContainer.appendChild(itemList);
      }
    }
  }
  
  const library = new Library();
  
  const book1 = new Book('The Great Gatsby', 'F. Scott Fitzgerald', 'Classic');
  const book2 = new Book('To Kill a Mockingbird', 'Harper Lee', 'Fiction');
  const dvd1 = new DVD('Inception', 'Christopher Nolan', 120);
  const dvd2 = new DVD('The Shawshank Redemption', 'Frank Darabont', 142);
  
  library.addItem(book1);
  library.addItem(book2);
  library.addItem(dvd1);
  library.addItem(dvd2);
  
  library.displayAvailableItems();
  