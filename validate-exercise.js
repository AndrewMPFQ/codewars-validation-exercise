function validatePIN(pin) {
  if (pin.length === 4) {
    return /[0-9]{4}/.test(pin);
  } else if (pin.length === 6) {
    return /[0-9]{6}/.test(pin);
  } else {
    return false;
  }
}

validatePIN("234568");
