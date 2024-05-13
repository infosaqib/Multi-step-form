//Variables
const month = document.querySelector(".monthly");
const year = document.querySelector(".yearly");
const cardSub = document.querySelectorAll(".card-subs");
const cardName = document.querySelectorAll(".card-name");
const freeSub = document.querySelectorAll(".free-subs");
const card1 = document.getElementsByClassName("card")[0];
const card2 = document.getElementsByClassName("card")[1];
const card3 = document.getElementsByClassName("card")[2];
const checkbox = document.querySelectorAll(".checkbox");
const firstCheckbox = document.querySelector(".first-checkbox");
const secondCheckbox = document.querySelector(".second-checkbox");
const thirdCheckbox = document.querySelector(".third-checkbox");
const addsCard = document.querySelectorAll(".adds-card");
const addsPrice = document.querySelectorAll(".adds-price");
const stepButton = document.querySelectorAll(".btn");
const stepperNum = document.querySelectorAll(".stepper-number");
const planName = document.querySelector(".selected-plan-name");
const planType = document.querySelector(".selected-plan-type");
const planPrice = document.querySelector(".selected-plan-price");
const totalpkgPrice = document.querySelectorAll(".total-pkg-price");
const totalPrice = document.querySelector(".total-price");
const totalPriceCheckout = document.querySelector("#total-checkout-price");

//Data
const monthPkg = ["+9$/mo", "+12$/mo", "+15$/mo"];
const yearPkg = ["+90$/yr", "+120$/yr", "+150$/yr"];
const monthAds = ["+1$/mo", "+2$/mo", "+2$/mo"];
const yearAds = ["+10$/yr", "+20$/yr", "+20$/yr"];
const stringArr = [''];
// Default

let action = 0;
month.classList.add("toggle");
planType.textContent = "(Monthly)";
year.classList.remove("toggle");
cardSub.forEach((element, index) => {
     element.textContent = monthPkg[index];
});
freeSub.forEach((element) => {
     element.classList.add("toggle");
});
let totalPricetype = "mo";
let totalPriceAmount = 0;

//When button toggles
function toggleBtn(e) {
     if (action == 0) {
          e.classList.add("toggle");
          month.classList.remove("toggle");
          year.classList.add("toggle");
          cardSub.forEach((element, index) => {
               element.textContent = yearPkg[index];
          });
          freeSub.forEach((element) => {
               element.classList.remove("toggle");
          });
          addsPrice.forEach((element, index) => {
               element.textContent = yearAds[index];
          });
          totalpkgPrice.forEach((element, index) => {
               element.textContent = yearAds[index];
          });
          planType.textContent = "(Yearly)";
          totalPricetype = "yr";
          action = 1;
     } else {
          e.classList.remove("toggle");
          month.classList.add("toggle");
          cardSub.forEach((element, index) => {
               element.textContent = monthPkg[index];
          });
          year.classList.remove("toggle");
          freeSub.forEach((element) => {
               element.classList.add("toggle");
          });
          addsPrice.forEach((element, index) => {
               element.textContent = monthAds[index];
          });
          totalpkgPrice.forEach((element, index) => {
               element.textContent = monthAds[index];
          });
          planType.textContent = "(Monthly)";
          totalPricetype = "mo";
          action = 0;
     }
}

//function to get numbers from a string
function extractNumbers(e, num) {
     // let num = "";
     for (let i = 0; i < e.length; i++) {
          if (!isNaN(e[i])) {
               num += e[i];
          }
     }
     let pnum = parseInt(num);
     console.log(pnum, typeof pnum);
}

// let str = "+2$/mo";

//sum the values to get total price
let arrTotal = [];
//function
function sum(a) {
     console.log(a + 1)
}

//Functions for card plans
card1.addEventListener("click", () => {
     card1.classList.toggle("selected");
     card2.classList.remove("selected");
     card3.classList.remove("selected");
     planName.textContent = cardName[0].textContent;
     planPrice.innerHTML = cardSub[0].textContent;
});
card2.addEventListener("click", () => {
     card2.classList.toggle("selected");
     card1.classList.remove("selected");
     card3.classList.remove("selected");
     planName.textContent = cardName[1].textContent;
     planPrice.innerHTML = cardSub[1].textContent;
});
card3.addEventListener("click", () => {
     card3.classList.toggle("selected");
     card1.classList.remove("selected");
     card2.classList.remove("selected");
     planName.innerHTML = cardName[2].textContent;
     planPrice.innerHTML = cardSub[2].textContent;
});



// checkbox.forEach((element) => {
//      element.addEventListener("click", () => {
//           element.classList.toggle("selected");
//           element.parentElement.classList.toggle("selected");
//      });
// })


function first(element) {
     element.classList.toggle("selected");
     element.firstElementChild.classList.toggle("selected");

     const firstProduct = document.querySelector(".pkg-product-1");
     firstProduct.classList.toggle("view");
}
function second(element) {
     element.classList.toggle("selected");
     element.firstElementChild.classList.toggle("selected");
     const secondProduct = document.querySelector(".pkg-product-2");
     secondProduct.classList.toggle("view");
}
function third(element) {
     element.classList.toggle("selected");
     element.firstElementChild.classList.toggle("selected");
     const thirdProduct = document.querySelector(".pkg-product-3");
     thirdProduct.classList.toggle("view");
}

addsPrice.forEach((element, index) => {
     element.textContent = monthAds[index];
});

// -----------------------------    Form validation
// const name = document.myForm.name.value;
// const email = document.myForm.email.value;
// const number = document.myForm.number.value;
// const nameErr = document.querySelector('.err-name')
// const mailErr = document.querySelector('.err-email')
// const numErr = document.querySelector('.err-num')
// const submit = document.querySelector('.submit-btn')
// // const myForm = document.getElementsByTagName('form');

// function formValidate(){

// if (name == null || name == "" || email == null || email == "" || number == null || number == "" ) {
//      nameErr.textContent = "This feild is required"
//      mailErr.textContent = "This feild is required"
//      numErr.textContent = "This feild is required"
//      return false;

// } else if (name.length < 5) {
//      nameErr.textContent = "name is too short"
//      return false;
// }

// }

//--------------------  Tab Content Effect --------------------------------------

// console.log(stepButton)

stepButton.forEach((element) => {
     element.addEventListener("click", function () {
          let stepName = this.dataset.step;
          let stepContent = document.getElementById(stepName);

          let allSteps = document.querySelectorAll(".stepContent");
          // let allButtons = document.querySelectorAll('.btn');

          allSteps.forEach((element) => {
               element.style.display = "none";
          });

          stepContent.style.display = "block";
          // stepperNum.forEach((element) => {
          //      element.classList.add('active')
          // })
     });
});

// Default user action
document.querySelector(".init-btn").click();
card1.click();


//sections
// let info = document.getElementById("infoStep");
// let plans = document.getElementById("planStep");
// let adds = document.getElementById("addStep");
// let final = document.getElementById("finalStep");

//stepper-numb
function infoisAcive() {
     stepperNum[0].classList.add("active");
     stepperNum[1].classList.remove("active");
     stepperNum[2].classList.remove("active");
     stepperNum[3].classList.remove("active");
}
function planisActive() {
     stepperNum[0].classList.remove("active");
     stepperNum[1].classList.add("active");
     stepperNum[2].classList.remove("active");
     stepperNum[3].classList.remove("active");
}
function addsisActive() {
     stepperNum[0].classList.remove("active");
     stepperNum[1].classList.remove("active");
     stepperNum[2].classList.add("active");
     stepperNum[3].classList.remove("active");
}
function finalisActive() {
     stepperNum[0].classList.remove("active");
     stepperNum[1].classList.remove("active");
     stepperNum[2].classList.remove("active");
     stepperNum[3].classList.add("active");
}
function lastisActive() {
     stepperNum[0].classList.remove("active");
     stepperNum[1].classList.remove("active");
     stepperNum[2].classList.remove("active");
     stepperNum[3].classList.remove("active");
}


// script for dynamic checkout
function extractAndSumNumbers(strings) {
     let total = 0;
     strings.forEach(str => {
          const numbers = str.match(/\d+/g);
          if (numbers) {
               numbers.forEach(num => {
                    total += parseInt(num)
               })
          }
     })
     return total;
}

let vara = '';
let varb = '';
let varc = '';
// example usage

const sumer = extractAndSumNumbers(stringArr);
totalPriceAmount = sumer;

totalPrice.innerHTML =
     `<p>Total (per month/year)</p>
     <h3 id="total-checkout-price">+${[totalPriceAmount]}$/${totalPricetype}</h3>`;