/*
* Evan Powlowsky's Calculator, 3/17/2021
*/

//This array is where values and operands will be stored and read from.
//Acts as a 'storage device'.
var nums = [];
//--------------------------NUM-BUTTONS---------------------------------//
$(".numButton").click(function() {
    var huh = $("#output").val()
    if (huh == 'true') {
        $("#display").val('');
        $("#output").val('false');
        console.log('scrap-off');
    }
    var currentValue = $("#display").val();
    var toAdd = $(this).val();
    var newValue = currentValue + toAdd;
    $("#display").val(newValue);
});
//--------------------------ADD-BUTTON---------------------------------//
$('#addButton').click(function() {
    if (nums.length == 2) {

        var SecondValue = $('#display').val();

        if (nums[1]=='+'){
            var Answer = nums[0] + Number(SecondValue);
        }
        if (nums[1]=='-'){
            var Answer = nums[0] - Number(SecondValue);
        }
        if (nums[1]=='*'){
            var Answer = nums[0] * Number(SecondValue);
        }
        if (nums[1]=='/'){
            var Answer = nums[0] / Number(SecondValue);
        }

        $('#display').val(Answer);
        nums[0] = Answer;
        nums[1] = '+';
        console.log(nums);
    }

    else {
        var FirstValue = $("#display").val();
        nums[0] = Number(FirstValue);
        nums[1] = '+';
        $('#output').html('+');
        console.log(nums);
        $("#display").val(FirstValue);
    }

    $('#output').val('true');     // By setting to 'true' we indicate to the buttons function that we need to clear the display first.
    console.log('scrap-on');
});
//-------------------------SUB-BUTTON------------------------------//
$('#subtractButton').click(function() {
    if (nums.length == 2) {

        var SecondValue = $('#display').val();

        if (nums[1]=='+'){
            var Answer = nums[0] + Number(SecondValue);
        }
        if (nums[1]=='-'){
            var Answer = nums[0] - Number(SecondValue);
        }
        if (nums[1]=='*'){
            var Answer = nums[0] * Number(SecondValue);
        }
        if (nums[1]=='/'){
            var Answer = nums[0] / Number(SecondValue);
        }

        $('#display').val(Answer);
        nums[0] = Answer;
        nums[1] = '-';
        console.log(nums);
    }

    else {
        var FirstValue = $("#display").val();
        nums[0] = Number(FirstValue);
        nums[1] = '-';
        $('#output').html('-');
        console.log(nums);
        $("#display").val(FirstValue);
    }

    $('#output').val('true');     // By setting to 'true' we indicate to the buttons function that we need to clear the display first.
    console.log('scrap-on');
});
//-------------------------MULTIPLY-BUTTON-----------------------------//
$('#multiplyButton').click(function() {
    if (nums.length == 2) {

        var SecondValue = $('#display').val();

        if (nums[1]=='+'){
            var Answer = nums[0] + Number(SecondValue);
        }
        if (nums[1]=='-'){
            var Answer = nums[0] - Number(SecondValue);
        }
        if (nums[1]=='*'){
            var Answer = nums[0] * Number(SecondValue);
        }
        if (nums[1]=='/'){
            var Answer = nums[0] / Number(SecondValue);
        }

        $('#display').val(Answer);
        nums[0] = Answer;
        nums[1] = '*';
        console.log(nums);
    }

    else {
        var FirstValue = $("#display").val();
        nums[0] = Number(FirstValue);
        nums[1] = '*';
        $('#output').html('*');
        console.log(nums);
        $("#display").val(FirstValue);
    }

    $('#output').val('true');     // By setting to 'true' we indicate to the buttons function that we need to clear the display first.
    console.log('scrap-on');
});
//-------------------------DIVIDE-BUTTON------------------------------//
$('#divideButton').click(function() {
    if (nums.length == 2) {

        var SecondValue = $('#display').val();

        if (nums[1]=='+'){
            var Answer = nums[0] + Number(SecondValue);
        }
        if (nums[1]=='-'){
            var Answer = nums[0] - Number(SecondValue);
        }
        if (nums[1]=='*'){
            var Answer = nums[0] * Number(SecondValue);
        }
        if (nums[1]=='/'){
            var Answer = nums[0] / Number(SecondValue);
        }

        $('#display').val(Answer);
        nums[0] = Answer;
        nums[1] = '/';
        console.log(nums);
    }

    else {
        var FirstValue = $("#display").val();
        nums[0] = Number(FirstValue);
        nums[1] = '/';
        $('#output').html('/');
        console.log(nums);
        $("#display").val(FirstValue);
    }

    $('#output').val('true');     // By setting to 'true' we indicate to the buttons function that we need to clear the display first.
    console.log('scrap-on');
});
//-------------------------CLEAR-BUTTON------------------------------//
$('#clearButton').click(function() {
    $('#display').val('');
    nums = [];
    $('#output').html('');
    $('#output').val('false');
    console.log('all clear');
});
//-------------------------EQUALS-BUTTON------------------------------//
$('#equalsButton').click(function() {
    var sus = $('#output').val();
    if (sus == 'true' || nums.length == 0) {
        console.log('You need to enter a value after pressing an operator!');
    }
    else{
        var SecondValue = $('#display').val();
        nums[2] = Number(SecondValue);
        console.log(nums);
        if (nums[1] == '+') {
            var Answer = nums[0] + nums[2];
        }
        if (nums[1] == '-') {
            var Answer = nums[0] - nums[2];
        }
        if (nums[1] == '*') {
            var Answer = nums[0] * nums[2];
        }
        if (nums[1] == '/') {
            var Answer = nums[0] / nums[2];
        }
        else{
            console.log(nums[1]);
        }
        //$('#output').html('=');
        console.log(Answer);

        $('#display').val(Answer);
        //$('#output').html('=');
    }
});



