/*
// Отримуємо поточну дату
const today = new Date();

// Встановлюємо початкову дату на 1 січня поточного року
const startDate = new Date(today.getFullYear(), 0, 1);

// Проходимо циклом від початкової дати до поточної дати
for (let date = startDate; date <= today; date.setDate(date.getDate() + 1)) {
  console.log(date.toDateString());
}
*/
function showGooseAnim() {    
    const gusImage = document.createElement('img');
    gusImage.setAttribute('src', '../img/gus-anim.gif');
    gusImage.classList.add('gus-anim');

    form.appendChild(gusImage);

    setTimeout(2000, () => {
      form.removeChild(gusImage);
    })
}



let mainButton = document.querySelector(".textBlock > button");
let formButton = document.querySelector(".formBlock button");
let form = document.getElementById("myForm");

mainButton.addEventListener('click',(e)=>{
    const element = document.querySelector("footer");
    element.scrollIntoView({ behavior: "smooth" });
})

form.addEventListener("submit", function(event) {
  event.preventDefault(); 
	
	let nameField = document.querySelector("#name");
	let emailField = document.querySelector("#email");
	const formData = new FormData(form);

  	
  if (nameField.value != '' && emailField.value != ''){
    //alert(`${nameField.value} Ваш запит на запис гуся до бандерозагону подано! Очікуйте детальну інформацію на email - ${emailField.value}`);
    
    nameField.style.border = emailField.style.border = '2px solid var(--blue)';
    nameField.value = emailField.value = '';
  }else{ 
    nameField.style.border = emailField.style.border = '2px solid red';
    //alert(`Заповніть усі поля для запису гуся до бандерозагону!`);
  }
 

  
  formButton.setAttribute('disabled', true);

  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString(),
  })
  .then(() => {        
    showGooseAnim();

    setTimeout(() => {
      formButton.removeAttribute('disabled');
    }, 2000);
  })
  .catch((error) => console.log('Відправка не відбулась'));
 
});








