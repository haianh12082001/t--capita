$(function () {
    var serviceList = $('.product1 .product-list');
    var serviceItem = $('.product1 .product-item');
    for (i = 0; i < 4; i++) {
        serviceItem.clone().appendTo(serviceList);
    }
})