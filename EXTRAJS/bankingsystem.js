let Accounts = [];

function createAcc(accHolderName, accType, initialBal = 0) {
  const newAcc = {
    accHolderName: accHolderName,
    initialBal: initialBal,
    currentBal: initialBal,
    accType: accType.toLowerCase(),
    interestRate: accType === "saving" ? 2 : 3,
    overdraftFacility: accType === "saving" ? false : true,
  };
  Accounts.push(newAcc);
}

createAcc("Jhon", "SaVinG", 1000);
createAcc("doe", "current");

function deposit(acc, amt) {
  acc.currentBal = acc.currentBal + amt;
  return `${amt} Rupess Successfully Deposited into ${acc.accHolderName}'s Account`;
}

function withdrawl(acc, amt) {
  if (acc.currentBal >= amt) {
    if (acc.overdraftFacility === true && amt > 500) {
      acc.currentBal -= amt;
      return `${amt} Rupees Successfully Withdrawn from ${acc.accHolderName}'s Account`;
    }
  } else {
    return `You Don't have sufficient balance to withdrawl`;
  }
}

function balance(acc) {
  return `Your Account Balance is: ${acc.currentBal}`;
}

function bankFacilities(accHolderName, feature, amt = 0) {
  Accounts.forEach((acc) => {
    if (acc.accHolderName === accHolderName) {
      console.log(feature(acc, amt));
    }
  });
}

bankFacilities("Jhon", balance);
bankFacilities("Jhon", withdrawl, 1000);
bankFacilities("Jhon", balance);
