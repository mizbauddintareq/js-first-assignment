// Problem:1  radianToDegree

function radianToDegree(radian) {
  if (typeof radian === "number") {
    const pi = 3.14159265359;
    const degree = ((radian * 180) / pi).toFixed(2);

    return parseFloat(degree);
  } else {
    return "Please input a valid number";
  }
}

// Problem:2  isJavaScriptFile

function isJavaScriptFile(fileName) {
  if (typeof fileName === "string" && fileName.endsWith(".js") === true) {
    return true;
  } else if (typeof fileName !== "string") {
    return "Please input only string";
  } else if (
    typeof fileName === "string" &&
    fileName.endsWith(".js") !== true
  ) {
    return false;
  }
}

// Problem 3: oilPrice

function oilPrice(diesel, petrol, octane) {
  if (typeof (diesel, petrol, octane) === "number") {
    const dieselPrice = diesel * 114;
    const petrolPrice = petrol * 130;
    const octanePrice = octane * 135;

    const totalPrice = dieselPrice + petrolPrice + octanePrice;
    return totalPrice;
  } else {
    return "Please input only valid number";
  }
}

// Problem 4: publicBusFare

function publicBusFare(peoples) {
  if (typeof peoples === "number") {
    let remainingBusPeople = peoples % 50;
    let remainingMicroPeople = remainingBusPeople % 11;
    let remainingBusFare = remainingMicroPeople * 250;
    return remainingBusFare;
  } else {
    return "Please input a valid number";
  }
}

// Problem 5: isBestFriend

function isBestFriend(friend1, friend2) {
  if (typeof friend1 === "object" && typeof friend2 === "object") {
    if (friend1.name === friend2.friend && friend1.friend === friend2.name) {
      return true;
    } else {
      return false;
    }
  } else {
    return "Please input an object";
  }
}
