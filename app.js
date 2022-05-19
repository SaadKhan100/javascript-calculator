var input =  document.getElementById("input")


function display (num){
    input.value += num
}
function calculate(){
    input.value = eval(input.value)
}
function Clear(){
    input.value = ""
}
function del(){
    input.value = input.value.slice(0 , -1)
}
