Hello! This is my project, it was created using the following technologies: HTML, CSS, JavaScript and a little bit of JQuery and Bootstrap.
It's a website for luxury watches, that has few categories: Rolex, Patek Philippe, Jacob & Co and a category for men or women's watches and watches that are on Sale. The website has a sorting mechanism that sorts the rendered products by: Price(Ascending or Descending) and by Name(A-z and Z-a). Also a filtering mechanism that filters by: Brand, Material, Size and Gender(Male or Female);

***Note***

* In order for the products to be displayed the server must be started, before you start the server, you will need to install the node_modules by running npm install in the Node folders terminal. The server is listed at port 3000.

* After you installed the node_modules, simply run nodemon index.js to start the server.

  
  
***Parts of the website that work and how it was achieved***

* Loading and retrieving the products - i stored the products on a local server and im retrieving them by a function that uses Ajax, i have an empty array that i store the response from the ajax call for the rendering of the products.

* Rendeing the Products - i have two functions a template function and a render function: the render function uses the array with the stored data from the ajax call and uses a .forEach method that assigns the products to the template function. The template function get the products data and finds the HTML elements by class, and then assigns the data of the products to them (Example: $template.find('.product-price').text(product.price);).

* Navbar - in order for the navbar to remain visible when the customer scrolls down i used position: fixed and a litte bit of JavaScript to make it look cooler when scrolling.

* Product Counter - i have two variables one for rendered products and one for total products, basically one shows how much products are rendered and the other one show the total products(the count of the total products will be different on each page - based on category selected).

* The product Grid - i used display:grid with a few other options.

* Product tile - created empty elements that serve as placeholders for the data we get from the template function.

* Sorting mechanism - for the sorting mechanims i used a select element with four options in it: Sort by Price(Ascending or Descending) and sort by Name(A-z and Z-a) each of the options in the select element have a value. Then i get the select element by its class(example: const sortingList = document.querySelector(".sorting-list")) and then use it with a .addEventListener, so every time we change the option we get a different value depending on what we select. Then i use a simple if-else statement, to define on what to sort price or name. Example: (if (e.target.value === 'asc') { dataSort.sort((a, b) => { return a.price - b.price });}) this will sort the products by ascending price.

* Add to cart button - each cart button has a onClick={addCart()} function that just shows an alert with the text "Product
added to cart".

* Footer - on the desktop version there are 5 sections , one with logo and links for social media, 2 for links, 1 for information and 1 for newsletter. On the mobile version the sections with links and information are replaced by bootstrap accordion, the accordions still have the links inside them, but are not working because i didn't set their hrefs.

* Filters on mobile version - the filters section on the mobile version is moved to a sidebar on the left that is opened by a button, this is also bootstrap.

* Loading different products based on category - in my case the categories are the Brands/ products that are On Sale and Male or Female.

/* Example for the On Sale page i use a filter that checks if the product is on sale:
const filteredData = data.filter(product => product.onDiscount.includes('Yes')); */

/* Same is for the Brands - 
const filteredData = data.filter(product => product.brand.includes('Rolex'));
Checks if the product brand contains 'Rolex', and then stores all the products with brand 'Rolex' in filteredData. */

/* Even if i had other products like jewelry, bags, etc i would have used the same filter method */

***Parts of the Website that do no work, or do not work properly***

* Filtering - ***Not Working Properly*** - Filtering mechanism is not working properly, it filters only by 1 characteristic and i currently grouped the checkboxes so you can select only one from few option(Example: if you want to filter by brand there are 3 options Rolex, Jacob & Co and Patek Philippe and only one can be selected) and if you want want to filter by something else you need to uncheck the previous checked checkbox.

* Limiting the rendered products - ***Not Working*** - I didn't find a way to limit the rendered products(Examples: Loads all 39 of 39 products).

* The Load More Button - ***Not Working*** - Since i didn't find a way to limit the renders, this button is not wokring.

***Screenshots***

* Home Page

![Model](https://github.com/atanas-zlatev-98/Braga-Luxury-Watches/blob/main/Website/screenshots/All-Watches.jpg?raw=true)

* Home Page Mobile Version

![Model](https://github.com/atanas-zlatev-98/Braga-Luxury-Watches/blob/main/Website/screenshots/All-Watches-m.jpg?raw=true)

* NavBar Before Scroll

![Model](https://github.com/atanas-zlatev-98/Braga-Luxury-Watches/blob/main/Website/screenshots/nav-before-scroll.png?raw=true)

* NavBar After Scroll

![Model](https://github.com/atanas-zlatev-98/Braga-Luxury-Watches/blob/main/Website/screenshots/nav-after-scroll.png?raw=true)

* NavBar After Scroll Mobile

![Model](https://github.com/atanas-zlatev-98/Braga-Luxury-Watches/blob/main/Website/screenshots/navbar-m-scroll.jpg?raw=true)

* NavBar After Clicked Mobile

![Model](https://github.com/atanas-zlatev-98/Braga-Luxury-Watches/blob/main/Website/screenshots/navbar-m-scroll-active.jpg?raw=true)

* Sorting Products

![Model](https://github.com/atanas-zlatev-98/Braga-Luxury-Watches/blob/main/Website/screenshots/Sorting-d.jpg)

* The list of Products after Sorting by Ascending Price

![Model](https://github.com/atanas-zlatev-98/Braga-Luxury-Watches/blob/main/Website/screenshots/Products%20After%20Sort.jpg?raw=true)

* Filtered Products + Products Count

![Model](https://github.com/atanas-zlatev-98/Braga-Luxury-Watches/blob/main/Website/screenshots/All-Watches-filters.jpg?raw=true)

* Filters Mobile View

![Model](https://github.com/atanas-zlatev-98/Braga-Luxury-Watches/blob/main/Website/screenshots/All-Watches-filters-m.jpg?raw=true)

* Footer Desktop

![Model](https://github.com/atanas-zlatev-98/Braga-Luxury-Watches/blob/main/Website/screenshots/footer-d.jpg?raw=true)

* Footer Mobile

![Model](https://github.com/atanas-zlatev-98/Braga-Luxury-Watches/blob/main/Website/screenshots/footer-m-active.jpg?raw=true)
