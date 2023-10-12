//Library Catalog

//id all html elements

//h1 
document.querySelectorAll('h1')[0].innerHTML = 'Library Catalog';

//updated catalog items
document.getElementsByClassName('desc')[1].innerHTML = 'Updated Catalog Items: ';

//grabbing two divs on screen

//div one
const catalogDisplay = document.querySelectorAll('div')[0];

//div two
const updatedCatalogDisplay = document.querySelectorAll('div')[1];

//create the base class
//holds id, title, pub yr, and val
class Item {
        //create the constructor
        constructor(id, title, pubYr, val) {

                //using this. op to get the vals of all items in constructor

                //id
                this.id = id;

                //title
                this.title = title;

                //pub year
                this.pubYr = pubYr;

                //val
                this.val = val;
        }
}

//create all child classes
//all will extend item
//all will hold parents itms + individual one


//Book
class Book extends Item {
        //constructor will hold items in parent
        //will hold author and genre
        constructor(id, title, pubYr, val, author, genre) {

                //using super to grab all spef. itms
                super(id, title, pubYr, val);

                //this. op to get vals

                //author
                this.author = author;

                //genre
                this.genre = genre;
        }
}

//DVD
class DVD extends Item {
        //constructor will hold items in parent
        //will hold director and runtime
        constructor(id, title, pubYr, val, director, runtime) {

                //using super to grab all spef. itms
                super(id, title, pubYr, val);

                //this. op to get vals

                //director
                this.director = director;

                //runtime
                this.runtime = runtime;
        }
}

//CD
class CD extends Item {
        //constructor will hold items in parent
        //will hold artist and songNums
        constructor(id, title, pubYr, val, artist, songNums) {

                //using super to grab all spef. itms
                super(id, title, pubYr, val);

                //this. op to get vals

                //director
                this.artist = artist;

                //runtime
                this.songNums = songNums;
        }
}


//creating another class named catalog
class Catalog {

        //constructor: an empty catalog
        constructor() {
          this.items = [];
        }

        //addItem: add one or more items 
        addItem(...newItems) {
        //this is going to shove vals into the arr created (which is empty rn)
        this.items.push(...newItems);
        }

        //removeItem: remove item from the catalog by its id.
        //using the filter method to do this
        removeItem(id) {
                this.items = this.items.filter(item => item.id !== id);
              }

        //totalValue: calculate and return the total value of all the catalog items.
        //using the reduce method for this 
        totalValue() {
                return this.items.reduce((accumulator, item) => accumulator + item.val, 0);
            }
        
        //displayCatalog: display the items in the catalog
        //include titles (italicized), publication data, value, and additional properties specific to the media type.
        displayCatalog(catalogDisplay) {
                //catalog items
        document.getElementsByClassName('desc')[0].innerHTML = 'Catalog Items: ';

//use a forEach to iterate through all different classes and display its specific val
this.items.forEach(item => {
//create and append html elements for info

//create element, give it a class name 
//create a p tag
const catalogOne = document.createElement('p');

//give it a class name 
catalogOne.classList.add('catalogOne');

//innerhtml to display the title and val , adding a different function which will display individual items
catalogOne.innerHTML = `<i>${item.title}</i> - $${item.val} ${this.specProps(item)}`;

//append the child. parent is catalogDisplay(first div)
catalogDisplay.appendChild(catalogOne);
    });


    //display the total value after each iteration

    //create the p tag
    const totalValueDisplay = document.createElement('p');

    //assign it a class (styling purposes)
    totalValueDisplay.classList.add('tot-val');

    //its text will be the total value. calls the totalValue function and sets it to only have 2 decimal places
    totalValueDisplay.textContent = `Total Value: $${this.totalValue().toFixed(2)}`;

    //append the child. parent is catalogDisplay(first div)
    catalogDisplay.appendChild(totalValueDisplay);
}


//specific properties for each class
specProps(item) {

        //if item is a book
        if (item instanceof Book) {

        //return everything in Item. also return an author and genre (from Book)
            return `Author: ${item.author},  Genre: ${item.genre}`;

            //if item is a dvd
        } else if (item instanceof DVD) {

        //return everything in Item. also return a director and runtime (from DVD)
            return `Director: ${item.director}, Runtime: ${item.runtime} minutes`;

            //if item is a cd
        } else if (item instanceof CD) {

        //return everything in Item. also return an artist and num of songs (from CD)
            return `Artist: ${item.artist}, Number of Songs: ${item.songNums}`;
        } else {
           //leave blank (don't return anything)
        }
    }
        
}

//create 3 different catalogs - a book, a dvd, and a cd

//create a new book
const book1 = new Book(1, 'Divergent', 2011, 7.99, 'Veronica Roth', 'Science Fiction');

//create a new dvd
const dvd1 = new DVD(2, 'Barbie', 2023, 24.99, 'Greta Gerwig', 114);

//create a new cd
const cd1 = new CD(3, 'Un Verano Sin Ti', 2022, 14.26, 'Bad Bunny', 23);

//create a new instance of catalog
const catalog = new Catalog();

//add the items
catalog.addItem(book1, dvd1, cd1);


//display the first instance of catalog in the first div
catalog.displayCatalog(catalogDisplay);

//remove an item. in this case, we are removing dvd
catalog.removeItem(2);


//display all new info in the updated catalog. this is the second div
catalog.displayCatalog(updatedCatalogDisplay);