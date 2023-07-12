const input = document.querySelector("#inp")

function getValue(num){
    input.value += num 
}
// console.log(input.value);
function natija(){
    try {
        input.value = eval(input.value);
    } catch (error) {
        input.value = "xato qilyapsan"
        // alert("xato kiritting")
    }
}
// catch xato bulsa aytadi

function cl(){
    input.value = ""
}

function del(){
    input.value = input.value.slice(0, -1)
}
// slice malum bir qiymat ni chiqaradi
