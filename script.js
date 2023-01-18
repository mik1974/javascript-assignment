'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data



const account1 = {
  "login": "Bilal",
  "id": 1111,
  "email": "bilal@mailinator.com",
};

const account2 = {
  "login": "Ali",
  "id": 2222,
  "email": "ali@mailinator.com",
};

const account3 = {
  "login": "Wali",
  "id": 3333,
  "email": "wali@mailinator.com",
};
const account4 = {
  "login": "Zafar",
  "id": 4444,
  "email": "zafar@mailinator.com",
};
const account5 = {
  "login": "Hammad",
  "id": 5555,
  "email": "hammad@mailinator.com",
};
const account6 = {
  "login": "Muhammad Imran Khan",
  "id": 6666,
  "email": "imran@mailinator.com",
};
const account7 = {
  "login": "Yashwa",
  "id": 7777,
  "email": "yashwa@mailinator.com",

};
const account8 = {
  "login": "Saymoon",
  "id": 8888,
  "email": "saymoon@mailinator.com",
};
const account9 = {
  "login": "Hassan",
  "id": 9999,
  "email": "hassan@mailinator.com",
};
const account10 = {
  "login": "Tanzeela Zuhaib",
  "id": 1010,
  "email": "tanzeela@mailinator.com",
};
const account11 = {
  "login": "Awais Bariro",
  "id": 1020,
  "email": "awais@mailinator.com",
};
const account12 = {
  "login": "Wamiq Wasi",
  "id": 1030,
  "email": "wamiq@mailinator.com",
};
const account13 = {
  "login": "Nabeela Khan",
  "id": 1040,
  "email": "nabeela@mailinator.com",
};
const account14 = {
  "login": "Talal Chaudri",
  "id": 1050,
  "email": "talal@mailinator.com",
};
const account15 = {
  "login": "Ammar Ahmed",
  "id": 1060,
  "email": "ammar@mailinator.com",
}




//const accounts = [account1, account2, account3, account4, account5, account6, account7, account8, account9, account10, account11, account12, account13, account14, account15];

// Elements
const labelWelcome = document.querySelector('.welcome');
const user_exists = document.querySelector('.user_exists');
const try_again = document.querySelector('.try_again');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');
const formLogin = document.querySelector('.login');
const formLogout = document.querySelector('.logout');
const btnLogin = document.querySelector('.login__btn');
const btnLogout = document.querySelector('.logout__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');
const signupBlockin = document.querySelector('.signup-block');
const signupArea = document.querySelector('.signup');
const signupButton = document.querySelector('.signup__btn');
const signupLogin = document.querySelector('.signup__input--username');
const signupEmail = document.querySelector('.signup__input--email');
const signupPassword = document.querySelector('.signup__input--password');
const signupConfirmPassword = document.querySelector('.signup__input--confirm-password');
const usersList = document.querySelector('.login__select--user');
const usersList02 = document.querySelector('.form__input--to');

//Signup Validation

let accounts = JSON.parse(localStorage.getItem('accounts')) || [];
let curlog = JSON.parse(localStorage.getItem('loggedIn')) || [];
let selectedText;
let selectedText02;

// let currentTimeStamp = Date.parse(new Date());
// console.log(currentTimeStamp, "cur");
// function getTimeFromDate(timestamp) {
//   var date = new Date(timestamp * 1000);
//   var hours = date.getHours();
//   var minutes = date.getMinutes();
//   var seconds = date.getSeconds();

//   var time = new Date();
//   return time.setHours(hours, minutes, seconds);
// }
// //console.log(getTimeFromDate(timestamp), "jjj")
// console.log(new Date(timestamp).toTimeString());


const addUsers = function () {
  usersList.innerHTML = '';

  accounts = JSON.parse(localStorage.getItem('accounts')) || [];
  const ulist = accounts.map((acc) => acc.login)
  console.log(ulist, "mylist");
  ulist.forEach((acc, i, arr) => {

    const optHtml = `<option value="${acc}">${acc}</option>`
    usersList.insertAdjacentHTML("afterbegin", optHtml);

  })

}
addUsers()

const addUsers02 = function () {

  usersList02.innerHTML = '';
  accounts = JSON.parse(localStorage.getItem('accounts')) || [];
  const ulist02 = accounts.map((acc) => acc.login)
  console.log(ulist02);
  ulist02.forEach((acc, i, arr) => {

    const optHtml02 = `<option value="${acc}">${acc}</option>`

    usersList02.insertAdjacentHTML("afterbegin", optHtml02);

  })

}
addUsers02()


usersList.addEventListener('click', function () {

  selectedText = usersList.value;
  console.log("Users", selectedText);

});

usersList02.addEventListener('click', function () {

  selectedText02 = usersList02.value;
  console.log("Users", selectedText02);

});

let currentAccount;
let currentLoggedin;

//LogIn Function
btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  const userListName = selectedText
  const userinput = inputLoginUsername.value;
  const pininput = Number(inputLoginPin.value);
  //const str = localStorage.getItem('accounts');
  const allAccounts = JSON.parse(localStorage.getItem('accounts'));

  const curLogedin = allAccounts.find((acc) => {
    return acc.email === userinput;
  });
  curLogedin.status = true;

  curLogedin.movementsDate = Date.parse(new Date())
  if (userinput === '') {
    alert('Please Write Email Address');
    inputLoginUsername.focus();
    return false;
  }

  console.log(curLogedin, "New Look")

  const currLogedin = JSON.stringify(curLogedin);
  localStorage.setItem("loggedIn", currLogedin);
  //currentLoggedin = currentAccount

  currentAccount = JSON.parse(localStorage.getItem('loggedIn'));



  if (currentAccount?.id == pininput && currentAccount?.login == userListName && currentAccount?.email == userinput) {
    mainDisplay(currentAccount);
  }

  else {
    labelWelcome.textContent = `User Id and Password are not matched`;
    containerApp.style.opacity = 0;
    inputLoginUsername.focus();

  }
});

const calcDaysPassed = (dateNow) => {
  let today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth()).padStart(2, '0'); //January is 0!
  const yyyy = today.getFullYear();
  console.log(dateNow, 'Bilalll')
  let lastDate = Number(new Date(dateNow));

  console.log(lastDate, "lastDay")

  //today = mm + ',' + dd + ',' + yyyy;

  const dayspass = Number(new Date(yyyy, mm, dd) / (1000 * 60 * 60 * 24) - Number(new Date(dateNow)) / (1000 * 60 * 60 * 24));


  console.log(Number(new Date(yyyy, mm, dd)), "bilal022")


  console.log(dayspass, "Days Passed");
};



const displayMovements = function (account, sorts = false) {

  containerMovements.innerHTML = '';

  //const movs = sorts ? account.movements.slice().sort((a, b) => { return a - b }) : account.movements.slice().reverse();
  const movs = sorts ? account.movements.slice().reverse() : account.movements.slice();
  movs.forEach((mov, i, arr) => {
    //const timestamp = Date.now();
    const ctime = new Date(mov.movementsDate);
    const cuuTime = `${ctime.getFullYear()}-${ctime.getMonth() + 1}-${ctime.getDate()}`;
    console.log(cuuTime, "ddd");
    calcDaysPassed(cuuTime);

    console.log(cuuTime, "ctime")


    const html = `<div class="movements__row">
    <div class="movements__type movements__type--${mov.amount > 0 ? 'deposit' : 'withdrawal'}">${i + 1} - ${mov.amount > 0 ? 'deposit' : 'withdrawal'}</div>
    <div class="movements__date">${mov.depositor} on ${ctime.getDate()}/${ctime.getMonth() + 1}/${ctime.getFullYear()}</div> 
    <div class="movements__date"></div>          
      <div class="movements__value">${Math.abs(mov.amount)} €</div>
  </div>`
    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
}

//Displaying Current Balance.
const calcDisplayBalance = function (account) {


  account.balance = account.movements.map((mov, i, arr) => { return mov.amount }).reduce((acc, mov, i, arr) => acc + mov, 0);
  //account.balance = account.movements.amount.reduce((acc, mov, i, arr) => acc + mov, 0);
  labelBalance.textContent = account.balance + '€';

  console.log(account.balance, "Ye bjhi")


  const curLogedin = JSON.parse(localStorage.getItem('loggedIn'));
  curLogedin.balance = account.balance

  const allAcc = JSON.stringify(curLogedin);
  localStorage.setItem("loggedIn", allAcc);


}

//Display all Summary
const calcDisplaySummary = function (account) {

  //Display summary of all deposit
  const depositVal = account.movements.filter(mov => mov.amount > 0).map((mov, i, arr) => { return mov.amount }).reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = depositVal + '€';

  //Display summery of all withdrawls
  const withdrawalVal = account.movements.filter(mov => mov.amount < 0).map((mov, i, arr) => { return mov.amount }).reduce((acc, move) => acc + move, 0);
  labelSumOut.textContent = Math.abs(Number(withdrawalVal)) + '€';

}

const updateUI = function (acc) {

  //For Display movements now.
  displayMovements(acc, false);

  //for Display Balance
  calcDisplayBalance(acc);

  //for Display Summary
  calcDisplaySummary(acc);
}
const mainDisplay = function (ca) {
  containerApp.style.opacity = 1;
  labelWelcome.textContent = `Welcome back Dear ${ca.login}`;
  updateUI(ca);
  inputLoginUsername.value = '';
  inputLoginPin.value = '';
  formLogin.style.display = 'none';
  formLogout.style.display = 'block';
  signupBlockin.style.display = 'none'

}
if (curlog.status) {
  console.log(curlog, "after refresh")
  mainDisplay(curlog);
}












// Transfer the Amount from current Account to Other
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();

  // const transferToInput = inputTransferTo.value;
  const transferToInput = selectedText02;
  const transferAmount = Number(inputTransferAmount.value);
  const str = localStorage.getItem("accounts");
  const allAccounts = JSON.parse(str);
  const receiverAccount = allAccounts.find((acc, i, arr) => {
    return acc.login === transferToInput;
  });

  const curClient = JSON.parse(localStorage.getItem('loggedIn'));

  const pA = curClient;
  console.log(pA, "New Try");
  console.log(pA.balance);
  // pA.movementsDate = Date.now();

  if (pA.balance > 0 && transferAmount > 0 && receiverAccount && pA.balance >= transferAmount && pA?.login !== receiverAccount.login) {

    receiverAccount.movements.push({ amount: transferAmount, depositor: 'Received from: ' + pA.login, movementsDate: pA.movementsDate });

    //receiverAccount.movements.push(transferAmount);
    pA.movements.push({ amount: -transferAmount, depositor: 'Sent to: ' + transferToInput, movementsDate: pA.movementsDate });
    //currentAccount.movements.push(-transferAmount);

    const allAcc = JSON.stringify(allAccounts);
    localStorage.setItem("accounts", allAcc);

    const currClientAfter = JSON.stringify(pA);
    localStorage.setItem("loggedIn", currClientAfter);

    updateUI(pA);

    inputTransferTo.value = '';
    inputTransferAmount.value = '';

  }
  else { alert("Balance is in sufficiant") }

})

//Remove the Account 
btnClose.addEventListener('click', function (e) {

  e.preventDefault();

  const accountToRemove = inputCloseUsername.value;
  const accToremovePin = Number(inputClosePin.value);

  const str = localStorage.getItem("accounts");
  const allAccounts = JSON.parse(str);

  const closeAccount = allAccounts.find(acc => acc.login === accountToRemove);


  const pA = allAccounts.find((acc, i, arr) => {
    return acc.login === currentAccount.login;
  });

  console.log(closeAccount)

  if (accToremovePin !== '' && accountToRemove !== '' && pA.id === accToremovePin) {

    const caIndex = allAccounts.findIndex(acc => acc.login === pA.login);
    allAccounts.splice(caIndex, 1);
    window.localStorage.removeItem("loggedIn");
    containerApp.style.opacity = 0;
    formLogin.style.display = 'block';
    formLogout.style.display = 'none';


    labelWelcome.textContent = `${pA.login}'s Account has been removed`;
    signupBlockin.style.display = 'block'

    const allAcc = JSON.stringify(allAccounts);
    localStorage.setItem("accounts", allAcc);
    addUsers()

    // updateUI(pA);

    inputCloseUsername.value = inputClosePin.value = '';
  } else {

    const allAcc = JSON.stringify(allAccounts);
    localStorage.setItem("accounts", allAcc);
    updateUI(pA);

    inputCloseUsername.value = inputClosePin.value = '';
  }

  updateUI(pA);
  inputCloseUsername.value = '';
  inputClosePin.value = '';
});


//Deposit Loan to Current Account
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const depositAmount = Number(inputLoanAmount.value);
  const str = localStorage.getItem("loggedIn");
  const ppA = JSON.parse(str);

  ppA.movementsDate = new Date();


  if (depositAmount !== '' && depositAmount > 0) {
    ppA.movements.push({ amount: depositAmount, depositor: 'Received Loan', movementsDate: ppA.movementsDate });
    //currentAccount.movements.push(depositAmount);

    const allAcc = JSON.stringify(ppA);
    localStorage.setItem("loggedIn", allAcc);


    updateUI(ppA);
    inputLoanAmount.value = '';

  }
  updateUI(pA);
  inputLoanAmount.value = '';
})

//logout
btnLogout.addEventListener('click', function (e) {
  e.preventDefault();

  const curLogedin = JSON.parse(localStorage.getItem('loggedIn'));
  console.log(curLogedin);

  curLogedin.status = false;
  const allAccs = JSON.parse(localStorage.getItem('accounts'));
  console.log(allAccs)

  const cIndex = allAccs.findIndex(acc => acc.login == curLogedin.login);

  console.log(cIndex, "IndexNum");

  const newRec = allAccs.splice(cIndex, 1, curLogedin);
  console.log(allAccs, "updated Recordss");
  localStorage.setItem("accounts", JSON.stringify(allAccs));
  containerApp.style.opacity = 0;
  formLogin.style.display = 'block';
  formLogout.style.display = 'none';
  signupBlockin.style.display = 'block';
  labelWelcome.textContent = `Good Bye Dear ${curLogedin.login}`;
  window.localStorage.removeItem("loggedIn");
});

//Sorting

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();

  const str = localStorage.getItem("loggedIn");
  const currentClient = JSON.parse(str);





  displayMovements(currentClient, !sorted);

  sorted = !sorted;

  if (sorted) {
    btnSort.innerHTML = '&uparrow;' + 'SORT'

  } else {

    btnSort.innerHTML = '&downarrow;' + 'SORT'

  }

});
//Currtent Date

const now = new Date();
const day = `${now.getDate()}`.padStart(2, '0');
const month = `${now.getMonth()}`.padStart(1, '0');
const year = now.getFullYear();
const hours = `${now.getHours()}`.padStart(2, 0);
const min = `${now.getMinutes()}`.padStart(2, 0);

document.querySelector('.date').textContent = `${day}/${month + 1}/${year}, ${hours}:${min}`;




//signup
signupBlockin.addEventListener('click', function (e) {
  e.preventDefault();
  if (signupArea.style.display === 'table') {
    signupArea.style.display = 'none';
    formLogin.style.display = 'block';
    formLogout.style.display = 'none';
  } else {
    signupArea.style.display = 'table'; containerApp.style.opacity = 0;
    formLogin.style.display = 'none';
    formLogout.style.display = 'none';
  }
  signupLogin.value = '';
  signupEmail.value = '';
  signupPassword.value = '';
  signupConfirmPassword.value = '';
});

signupButton.addEventListener('click', function (e) {
  e.preventDefault();


  const userlogin = signupLogin.value;
  const userEmail = signupEmail.value;
  const userPassword = Number(signupPassword.value);
  const userconfirmedPassword = Number(signupConfirmPassword.value);
  if (userlogin === '') {

    alert('Please Write the User Name');
    //userlogin.focus();
    return false;
  }


  if (userPassword === userconfirmedPassword && userEmail !== '' && userlogin !== '') {

    if (allLetter(userlogin)) {
      if (validateEmail(userEmail)) {

        accounts = JSON.parse(localStorage.getItem('accounts')) || [];

        const checkEmail = accounts.find((acc) => acc.email === userEmail);

        if (!checkEmail) {
          const move = {
            amount: 100,
            depositor: 'Self',
            movementsDate: new Date(Date.now())
          };
          const movements = [move]

          let objectlast = {
            login: userlogin,
            id: userPassword,
            email: userEmail,
            movements: movements,
            status: false,
          };

          accounts.push(objectlast);

          console.log('these are accounts', accounts);


          signupArea.style.display = 'none';
          formLogin.style.display = 'block';
          localStorage.setItem("accounts", JSON.stringify(accounts));
          labelWelcome.textContent = `Log in to get started`;
          addUsers()
          addUsers02()
        }

      }
    } else {
      labelWelcome.textContent = `Sorry User is already Exists`;


      addUsers()
      addUsers02()
    }

  } else { labelWelcome.textContent = `Please Try Again`; }
})


function allLetter(uname) {
  console.log("check")
  //var letters = /^[A-Za-z]+$/;
  var letters = /^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/
  //var letters = isNaN(parseInt(uname))
  if (uname.match(letters)) {
    return true;
  }
  else {
    alert('Username must have alphabet characters only');
    username.focus();
    return false;
  }
}

function validateEmail(uemail) {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (uemail.match(mailformat)) {
    return true;
  }
  else {
    alert("You have entered an invalid email address!");
    signupEmail.focus();
    return false;
  }
}



/////////////////////////////////////////////////
/////////////////////////////////////////////////
const aallAccounts = JSON.parse(localStorage.getItem('accounts')) || []
const bankDepositSum = accounts.map((acc) => acc.movements).flat();

console.log(bankDepositSum);
const bankTotalDepositAmount = bankDepositSum.map((acc) => acc.amount).reduce((acc, am) => acc + am, 0);
console.log(bankTotalDepositAmount);

const moveabove100 = bankDepositSum.map((acc) => acc.amount).reduce((acc, curr) => curr >= 100 ? ++acc : acc, 0);

console.log(moveabove100);

const { deposits, withdrawls } = bankDepositSum.map((acc) => acc.amount).reduce((acc, cur) => {

  // cur > 0 ? (acc.deposits += cur) : (acc.withdrawls += cur)

  acc[cur > 0 ? 'deposits' : 'withdrawls'] += cur

  return acc;

}, { deposits: 0, withdrawls: 0 });

console.log("deposits :", deposits, "widthdrawls :", withdrawls);

// console.log(deposits });

/////////////////////////////////////////////////
