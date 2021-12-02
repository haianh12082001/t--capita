$(function () {
    var serviceList = $('.service .list');
    var serviceItem = $('.product1 .product-item');
    for (i = 0; i < 4; i++) {
        serviceItem.clone().appendTo(serviceList);
    }
})