// Slider Advertisment
var slider_ads = document.querySelector(".slider-ads-item-container");
var slider_ads_img_all = document.querySelectorAll(".slider-ads-item-container img");
var slider_ads_img = document.querySelector(".slider-ads-item-container img");
var ads_pre = document.querySelector(".ads-pre");
var ads_next = document.querySelector(".ads-next");

let count_ads = 0;
let width_item_ads = slider_ads_img.clientWidth;
var translateX_ads = 0;
var dem_ads = 0;
slider_ads_img_all.forEach(elem => {
    count_ads++;
})

function next_slider_ads() {
    ads_next.addEventListener('click', () => {
        if (dem_ads < count_ads - 1) {
            translateX_ads -= width_item_ads;
            slider_ads.style.transform = `translate3d(${translateX_ads}px, 0, 0)`;
            dem_ads++;
        } else {
            translateX_ads = 0;
            slider_ads.style.transform = `translate3d(${translateX_ads}px, 0, 0)`;
            dem_ads = 0;
        }
    })
}
next_slider_ads();
function next_slider_ads_interval() {
    if (dem_ads < count_ads - 1) {
        translateX_ads -= width_item_ads;
        slider_ads.style.transform = `translate3d(${translateX_ads}px, 0, 0)`;
        dem_ads++;
    } else {
        translateX_ads = 0;
        slider_ads.style.transform = `translate3d(${translateX_ads}px, 0, 0)`;
        dem_ads = 0;
    }
}
setInterval(next_slider_ads_interval, 3000);

function pre_slider_ads() {
    ads_pre.addEventListener('click', () => {
        if (dem_ads != 0) {
            translateX_ads += width_item_ads;
            slider_ads.style.transform = `translate3d(${translateX_ads}px, 0, 0)`;
            dem_ads--;
        }
    })
}
pre_slider_ads();

// Slider Sale Product
var sale_product = document.querySelector(".sale-product .sale-product-content");
var sale_product_item_all = document.querySelectorAll(".sale-product .sale-product-item");
var sale_product_item = document.querySelector(".sale-product .sale-product-item");
var sale_pre = document.querySelector(".sale-product .s-pro-h-pre");
var sale_next = document.querySelector(".sale-product .s-pro-h-next");

let count_sale = 0;
let width_item_sale = sale_product_item.clientWidth + 20;
var translateX_sale = 0;
var dem_sale = 0;
sale_product_item_all.forEach(elem => {
    count_sale++;
})

function next_slider_sale() {
    sale_next.addEventListener('click', () => {
        if (dem_sale < count_sale - 5) {
            translateX_sale -= width_item_sale;
            sale_product.style.transform = `translate3d(${translateX_sale}px, 0, 0)`;
            dem_sale++;
        } else {
            translateX_sale = 0;
            sale_product.style.transform = `translate3d(${translateX_sale}px, 0, 0)`;
            dem_sale = 0;
        }
    })
}
next_slider_sale();
function next_slider_sale_interval() {
    if (dem_sale < count_sale - 5) {
        translateX_sale -= width_item_sale;
        sale_product.style.transform = `translate3d(${translateX_sale}px, 0, 0)`;
        dem_sale++;
    } else {
        translateX_sale = 0;
        sale_product.style.transform = `translate3d(${translateX_sale}px, 0, 0)`;
        dem_sale = 0;
    }
}
setInterval(next_slider_sale_interval, 3000);

function pre_slider_sale() {
    sale_pre.addEventListener('click', () => {
        if (dem_sale != 0) {
            translateX_sale += width_item_sale;
            sale_product.style.transform = `translate3d(${translateX_sale}px, 0, 0)`;
            dem_sale--;
        }
    })
}
pre_slider_sale();


// Slider Best Seller Product
var bsl_product = document.querySelector(".best-selling-product .sale-product-content");
var bsl_product_item_all = document.querySelectorAll(".best-selling-product .sale-product-item");
var bsl_product_item = document.querySelector(".best-selling-product .sale-product-item");
var bsl_pre = document.querySelector(".best-selling-product .bsl-pro-h-pre");
var bsl_next = document.querySelector(".best-selling-product .bsl-pro-h-next");

let count_bsl = 0;
let width_item_bsl = bsl_product_item.clientWidth + 20;
var translateX_bsl = 0;
var dem_bsl = 0;
bsl_product_item_all.forEach(elem => {
    count_bsl++;
})

function next_slider_bsl() {
    bsl_next.addEventListener('click', () => {
        if (dem_bsl < count_bsl - 5) {
            translateX_bsl -= width_item_bsl;
            bsl_product.style.transform = `translate3d(${translateX_bsl}px, 0, 0)`;
            dem_bsl++;
        } else {
            translateX_bsl = 0;
            bsl_product.style.transform = `translate3d(${translateX_bsl}px, 0, 0)`;
            dem_bsl = 0;
        }
    })
}
next_slider_bsl();
function next_slider_bsl_interval() {
    if (dem_bsl < count_bsl - 5) {
        translateX_bsl -= width_item_bsl;
        bsl_product.style.transform = `translate3d(${translateX_bsl}px, 0, 0)`;
        dem_bsl++;
    } else {
        translateX_bsl = 0;
        bsl_product.style.transform = `translate3d(${translateX_bsl}px, 0, 0)`;
        dem_bsl = 0;
    }
}
setInterval(next_slider_bsl_interval, 3000);

function pre_slider_bsl() {
    bsl_pre.addEventListener('click', () => {
        if (dem_bsl != 0) {
            translateX_bsl += width_item_bsl;
            bsl_product.style.transform = `translate3d(${translateX_bsl}px, 0, 0)`;
            dem_bsl--;
        }
    })
}
pre_slider_bsl();

// Home Product Tab 1
var pro_btn = document.querySelectorAll(".pro-btn");
var pro_page = document.querySelectorAll(".h-pro-tab-1-pg");

pro_btn.forEach((elem1, index1) => {
    elem1.addEventListener('click', () => {
        pro_page.forEach((elem2, index2) => {
            if (index1 == index2) {
                pro_btn.forEach(elem3 => {
                    elem3.classList.remove('active');
                })
                elem1.classList.add('active');
                elem2.classList.add('active');
            } else {
                elem2.classList.remove('active');
            }
        })
    })
})


// Home Product Tab 2
var pro_btn_2 = document.querySelectorAll(".pro-btn-2");
var pro_page_2 = document.querySelectorAll(".h-pro-tab-2-pg");

pro_btn_2.forEach((elem1, index1) => {
    elem1.addEventListener('click', () => {
        pro_page_2.forEach((elem2, index2) => {
            if (index1 == index2) {
                pro_btn_2.forEach(elem3 => {
                    elem3.classList.remove('active');
                })
                elem1.classList.add('active');
                elem2.classList.add('active');
            } else {
                elem2.classList.remove('active');
            }
        })
    })
})

// Show Product

var add_cart = document.querySelectorAll(".s-pro-add-cart");

var pro_pop = document.querySelector(".product-pop-up");

var pro_pop_container = document.querySelector(".pro-pop-up-container");

var cart_container = document.querySelector(".cart-container");




var test = document.createElement("div");
test.setAttribute("class", "pro_pop_content");


function showProductClicked() {
    add_cart.forEach(element => {
        element.addEventListener('click', (e) => {
            pro_pop.classList.add('active');

            let button = e.currentTarget;
            let shopProduct = button.parentElement;
            let brand = shopProduct.querySelector(".s-pro-item-detail p").innerText;
            let name = shopProduct.querySelector(".s-pro-item-detail h3").innerText;
            // let color = shopProduct.querySelector(".s-pro-item-detail span").innerText;
            let sale_price = shopProduct.querySelector(".s-pro-item-detail .sale-price").innerText;
            let org_price = shopProduct.querySelector(".s-pro-item-detail .price").innerText;
            let sale_persent = shopProduct.querySelector(".s-pro-item-detail .product-price-right").innerText;
            let shopProduct2 = shopProduct.parentElement;
            let img_pro = shopProduct2.querySelector(".sale-product-item .s-pro-main-img").src;

            show(img_pro, sale_persent, name, brand, sale_price, org_price, sale_persent);
            // Add to cart
            var add_cart_btn = document.querySelector(".add-cart-btn");
            addToCart(add_cart_btn);


        })
    })
}
function addToCart(add_cart_btn) {
    let option;
    let count = 0;

    add_cart_btn.addEventListener('click', (e) => {
        let button2 = e.currentTarget;
        let shopProduct2 = button2.parentElement;
        let name2 = shopProduct2.querySelector(".pro-pop-detail h2").innerText;
        let color2 = shopProduct2.querySelectorAll(".pro-pop-detail input[type='radio']");

        color2.forEach((elem, index) => {
            if (elem.checked == true && index == 0) {
                option = "Nâu";
            } else if (elem.checked == true && index == 1) {
                option = "Đen";
            } else if (elem.checked == true && index == 2) {
                option = "Hồng";
            } else if (elem.checked == true && index == 3) {
                option = "Trắng";
            }
        })
        color2.forEach(elem => {
            if (elem.checked == true) {
                count++;
            }
        })
        if (count == 0) {
            alert("Vui lòng chọn màu");
            return;
        }
        let sale_price2 = shopProduct2.querySelector(".pro-pop-detail .pro-pop-price").innerText;
        let pro_quanity = shopProduct2.querySelector(".pro-pop-detail .pro-pop-up-quantity").value;

        let shopProduct3 = shopProduct2.parentElement;
        let img_pro2 = shopProduct3.querySelector(".pro_pop_content img").src;
        // var test = document.querySelectorAll
        let pro_pop_content2 = `
                <div class="cart-item">
                    <div class="cart-left">
                        <div class="cart-img">
                            <img src="${img_pro2}" alt="">
                        </div>
                        <div class="cart-detail">
                            <h3>${name2}</h3>
                            <span>Giá: <strong style="color: red;">${sale_price2}</strong></span>
                            <span>Màu: <strong>${option}</strong></span>
                            <span>Số lượng: <strong>${pro_quanity}</strong></span>
                        </div>
                    </div>
                    <div class="cart-del" style="cursor: pointer;"><i class="fa-solid fa-trash" style="color: #ff0a2f;"></i></div>
                </div>
                `;
        var test2 = document.createElement("div");
        test2.setAttribute("class", "cart-content");

        test2.innerHTML = pro_pop_content2;
        cart_container.append(test2);
        alert("Thêm vào giỏ hàng thành công");
        var cart_del = document.querySelectorAll(".cart-del");
        cart_remove(cart_del);
        cart_thanh_toan(cart_del);
    })
}
function show(img_pro, sale_persent, name, brand, sale_price, org_price, sale_persent) {
    let pro_pop_content = `
                <div class="pro-pop-img">
                    <img src="${img_pro}" alt="">
                    <span>${sale_persent}<br>OFF</span>
                </div>
                <div class="pro-pop-detail">
                    <h2>${name}</h2>
                    <span class="pro-pop-soldold">Tình trạng:
                        <strong style="color: #f9bb01;">Còn hàng</strong>
                    </span>
                    <span class="pro-pop-vendor">Thương hiệu:
                        <strong style="color: #f9bb01;">${brand}</strong>
                    </span>
                    <div class="pro-pop-up-price-container">
                        <span class="pro-pop-price-title">Giá: </span>
                        <span class="pro-pop-price">${sale_price}</span>
                        <del>${org_price}</del>
                        <span class="pro-pop-percent">${sale_persent}</span>
                    </div>
                    <div class="pro-pop-up-color-container">
                        <span class="pro-pop-color-title">Màu sắc:</span>
                        <div class="pro-pop-up-color">
                            <input name="color" type="radio" id="option-1" checked>
                            <input name="color" type="radio" id="option-2">
                            <input name="color" type="radio" id="option-3">
                            <input name="color" type="radio" id="option-4">
                            <label for="option-1" class="option-1"></label>
                            <label for="option-2" class="option-2"></label>
                            <label for="option-3" class="option-3"></label>
                            <label for="option-4" class="option-4"></label>
                        </div>
                    </div>
                    <div class="pro-pop-up-quantity-container">
                        <span class="pro-pop-quantity-title">Số lượng:</span>
                        <input type="number" value="1" class="pro-pop-up-quantity">
                    </div>
                    <button class="add-cart-btn">THÊM VÀO GIỎ</button>
                    <div class="pro-pop-up-share">
                        <span>Chia sẻ: </span>
                        <i class="fa-brands fa-facebook" style="color: #1749a1;"></i>
                        <i class="fa-brands fa-facebook-messenger" style="color: #116fe8;"></i>
                        <i class="fa-brands fa-twitter"
                            style="color: #5cb8ff;"></i>
                        <i class="fa-brands fa-pinterest" style="color: #eb2d2d;"></i>
                    </div>
                    <a href="#">Xem chi tiết sản phẩm >></a>
                </div>
            `;
    test.innerHTML = pro_pop_content;
    pro_pop_container.append(test);
}
showProductClicked();

function closeProductClicked() {
    var pro_pop_up_close = document.querySelector(".pro-pop-close");

    pro_pop_up_close.addEventListener('click', (e) => {
        pro_pop.classList.remove('active');
    })
}
closeProductClicked();

function closeCartClicked() {
    var pro_pop_up_close = document.querySelector(".pro-pop-close");

    pro_pop_up_close.addEventListener('click', (e) => {
        pro_pop.classList.remove('active');
    })
}
closeCartClicked();

var shopping_cart = document.querySelector(".shopping-cart");

function openCart() {
    var cart = document.querySelector(".mn-bt-it3-inside");
    cart.addEventListener('click', () => {
        shopping_cart.classList.add('active');
    })
}
openCart();

function closeCart() {
    var cart_close = document.querySelector(".cart-close");
    cart_close.addEventListener('click', () => {
        shopping_cart.classList.remove('active');
    })
}
closeCart();


function cart_remove(event){
    event.forEach(elem => {
        elem.addEventListener('click', () => {
            remove_pro(elem);
        })
    })
}
function remove_pro(e){
    e.parentElement.parentElement.remove();
}

function cart_thanh_toan(event){
    var buy_btn = document.querySelector(".cart-buy-btn");
    buy_btn.addEventListener('click', (e) => {
        event.forEach(elem => {
            remove_pro(elem);
        })
    })
}


