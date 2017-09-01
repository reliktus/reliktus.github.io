let order = {
    count: 1,
    price: 0,
    total: 0,
    name: "",
    actionTotal: function() {
        this.total = this.count * this.price
    },
    actionReset: function () {
        this.count = 1;
        this.price = 0;
        showPrice();
    },
    actionCount: function (atr) {
        if (atr==="++") {
            this.count++;
        } else {
            if (this.count > 1) {
                this.count--;
            }
        }
    }

    
};

function stampCount() {
    $('.stampCount').on('click',function () {
        let atr = $(this).attr('datatype');
        order.actionCount(atr);
        updateStampNumber();
        showPrice();
    });
    function updateStampNumber() {
        $('#stampNumber').html(order.count);
    }
}

function drawCounter() {
    let data = '<div class=\"col-sm-6\">' +
        '<h2>Ilość:</h2>' +
        '</div>' +
        '<div class=\"btn btn-info stampCount\" datatype=\"--\">-</div>' +
        '<div class=\"btn btn-default disabled\" id=\"stampNumber\">1</div>' +
        '<div class=\"btn btn-info stampCount\" datatype=\"++\">+</div>';
    document.write(data);
}

 function showPrice() {
    order.actionTotal();
    console.log(order.total);
 $('#price1').html(order.total);
 }
