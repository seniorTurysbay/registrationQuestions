const getInputText = document.querySelectorAll("input[type='text']");
const getForm = document.querySelector("#regQuestionsForm");

//предотвращает перезагрузку страницы
function handleForm(event){
    event.preventDefault();
}
getForm.addEventListener("submit",handleForm);

//проверка на заполнение страницы,
// если все поля не заполнены кнопка серая и нельзя нажимать,
// если все заполнена кнопка красная и на него можно нажимать

function success(){
    getInputText.forEach(function (item){
        if(item.value === ""){
            document.getElementById("confirm").disabled = true;
        }else{
            document.getElementById("confirm").disabled = false;
        }
    });
}