

let actualStamp = {
    color:"",
    textColorName:"X",
    actualModel:"X",
    modelName:"X",
    caseColor:"",
    caseColorName:"X",
    text:"",
    width: 0,
    height:"",
     actionReset: function () {
         this.color = "";
         this.text = "";
         this.textColorName = "X";
         this.actualModel = "";
         this.modelName ="X";
         this.caseColor="";
         this.caseColorName="X";
         colorSwitch();
         modelSwitch();
         switchCaseColor();
     }

};
let stamps = {
    1:{ model:"Model_1",
        price:"10",
        picture:"img/stamp_example_1.jpg"},

    2:{ model:"Model_2",
        price:"12",
        picture:"img/stamp_example_2.jpg"},

    3:{ model:"Model_3",
        price:"15",
        picture:"img/stamp_example_3.jpg"}

};
function loadStampModels() {
    $('.stampPicture')
        .each(loadPicture)
        .on('change', loadPicture);

    function loadPicture() {
        let stat = $(this).closest('div').attr('id');
        $(this).attr('src',stamps[stat].picture);
    }

}
function previewSlider() {
    $(document).scroll(function() {
        let scrollVal = $(document).scrollTop();
        move(scrollVal);
        if (scrollVal < 40) {
            move('40px');
        }
        if (scrollVal > 315) {
            move('315px');
        }
        function move(data) {
            $('.stampPreviewContainer').css('top',data);
        }
    });
}

function updateColorButtons() {
    loader('.modelColorSwitch');
    loader('.textColorSwitch');
    loader('.modelSwitch');
    function loader(atr) {
        $(atr)
            .each(user_handler)
            .on('change', user_handler);
    }
    function user_handler() {
        let stat = $(this).attr('datatype');
        $(this).css('color',stat).addClass('btn-default');
    }
}

function resetBtn() {
    $('#resetBtn').on('click',function () {
        CKEDITOR.instances.editor.setData('');
        $('#stampPreview').html("");
        actualStamp.actionReset();
        order.actionReset();
        moveTop();
    });
    function moveTop() {
        $('html,body').animate({ scrollTop: 0 }, 1000);
    }
}

function updateStampSize() {
    let target = '#stampPreview';
    actualStamp.width = $(target).width();
    actualStamp.height = $(target).height();
    $('#stampSize').html(actualStamp.width + "x" + actualStamp.height);
}

function insertCKE() {
    CKEDITOR.replace( 'editor' );
    let editor = CKEDITOR.instances.editor;
    editor.on('key', function(){
        let data = editor.getData();
        $('#stampPreview').html(data);
        // colorSwitch();
        updateStampSize();
    });
}
function animate(atr, newVal) {
    //$(atr).effect("bounce", {direction:'left', times: 1}, 300);
    $(atr).fadeOut(function(){
        $(atr).html(newVal).fadeIn(400);
    })
}

function colorSwitch() {
    let target = '.stampColorInfo';
    let newVal = 'X';
    $('.textColorSwitch').on('click', function () {
        actualStamp.color = $(this).attr('datatype');
        console.log(actualStamp.color);
        actualStamp.textColorName = $(this).attr('title');
        newVal = '<b>' + actualStamp.textColorName + '</b>';
        updateColor();
        animate(target,newVal);
    });
    animate(target,newVal);
}
function updateColor() {
    let target = '#stampPreview';
    $(target).fadeOut(function(){
        $(target).css('color',actualStamp.color).fadeIn(400);
    })
}

function modelSwitch() {
    let target = '.stampModelInfo';
    let newVal = '<b>X</b>';
    $('.modelSwitch').on('click', function () {
        let number = $(this).attr('id');
        actualStamp.actualModel = stamps[number];
        order.price = actualStamp.actualModel.price;
        newVal = '<b>' + actualStamp.actualModel.model + '</b><br><img class=\"stampPicture\" src=\"' + actualStamp.actualModel.picture + '\">';
        animate(target,newVal);
        showPrice();
    });
    animate(target,newVal);
}
function switchCaseColor() {
    let target = '.CaseColorInfo';
    let newVal = "<b>X</b>";
    $('.modelColorSwitch').on('click',function () {
        actualStamp.caseColor = $(this).attr('datatype');
        actualStamp.caseColorName = $(this).attr('title');
        newVal = '<b>' + actualStamp.caseColorName + '</b>';
        animate(target,newVal);
    });
    animate(target,newVal);
}
