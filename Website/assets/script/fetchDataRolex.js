$productList = $('#products-list');
let data = [];

function load() {
    $.ajax({
        type: "GET",
        url: "http://localhost:3000/watches",
        contentType: "application/json",
        dataType: "json",
    }).done(response => {
        data = response;
        render();
    }).fail(response => {
        console.log(response);

    }).always(() => {

        console.log('ajax completed');
    })
}

function addCart() {
    alert(`Product added to cart`);
}

function render() {

    $productList.empty();
    const dataCheckBox = [];
    const dataSort = [];

    const checkBoxes = document.querySelectorAll('.input-value:checked');
    const productCounter = document.getElementById('product-counter');
    const totalProducts = document.getElementById('total-products');
   

    for (let i = 0; i < checkBoxes.length; i++) {
        dataCheckBox.push(checkBoxes[i].value);
    }

    const filteredData = data.filter(product => product.brand.includes('Rolex'));

    filteredData.forEach(product => {

        const $template = template(product);


        if (dataCheckBox[0] == product.size) {
            $productList.append($template);
            dataSort.push(product);
        }else if (dataCheckBox[0] == product.material) {
            $productList.append($template);
            dataSort.push(product);
        }else if (dataCheckBox[0] == product.gender) {
            $productList.append($template);
            dataSort.push(product);
        }else if (dataCheckBox.length === 0) {
            $productList.append($template);
            dataSort.push(product);
        }

    })

    totalProducts.innerHTML = filteredData.length;

    const sortingList = document.querySelector(".sorting-list");

    sortingList.addEventListener("change", (e) => {
        if (e.target.value === 'asc') {
            $productList.empty();
            dataSort.sort((a, b) => { return a.price - b.price });
            dataSort.forEach(product => {
                const $templateSort = template(product);
                $productList.append($templateSort);
            })
        } else if (e.target.value === 'desc') {
            $productList.empty();
            dataSort.sort((a, b) => { return b.price - a.price });
            dataSort.forEach(product => {
                const $templateSort = template(product);
                $productList.append($templateSort);
            })
        } else if (e.target.value === 'alphabetic-a-z') {

            $productList.empty();

            dataSort.sort((a, b) => {

                const nameA = a.productName.toUpperCase();
                const nameB = b.productName.toUpperCase();

                if (nameA < nameB) { return -1; }
                if (nameA > nameB) { return 1; }

                return 0;
            });

            dataSort.forEach(product => {
                const $templateSort = template(product);
                $productList.append($templateSort);
            })

        } else if (e.target.value === 'alphabetic-z-a') {

            $productList.empty();

            dataSort.sort((a, b) => {

                const nameA = a.productName.toUpperCase();
                const nameB = b.productName.toUpperCase();

                if (nameA > nameB) { return -1; }
                if (nameA < nameB) { return 1; }

                return 0;
            });

            dataSort.forEach(product => {
                const $templateSort = template(product);
                $productList.append($templateSort);
            })
        }
    });
    productCounter.innerHTML = dataSort.length;
}

function template(product) {
    const templateSelector = $(`#products-list-template`);
    const $template = $($(templateSelector).html());
    const productImg = product.productImage;
    const discountPrice = document.getElementsByClassName('discount-price').innerHTML;
    const discountPriceID = document.getElementById('discount-price-id');

    if (product.onDiscount == 'Yes') {

        $template.find('.product-price').text(product.price);
        $template.find('.discount-price').text(product.oldPrice);

    } else {

        $template.find('.product-price').text(product.price);

    }

    if (discountPrice != '') {

        discountPriceID.classList.add('old-price');

    } else {

        discountPriceID.classList.remove('old-price');

    }


    $template.find('.product-title').text(product.productName);
    $template.find('.product-description').text(product.productDescription);
    $template.find('.product-img').attr('src', productImg);

    return $template;
}

const btn = document.getElementById('btnFilter');
btn.addEventListener('click', () => { render() });

const btnM = document.getElementById('btnFilterM');
btnM.addEventListener('click', () => { render() });

load();