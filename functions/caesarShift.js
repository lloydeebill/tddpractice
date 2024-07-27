function caesarShift(message, shiftValue) {
  const codeUpperA = 'A'.codePointAt(0);
  const codeUpperZ = 'Z'.codePointAt(0);
  const codeLowera = 'a'.codePointAt(0);
  const codeLowerz = 'z'.codePointAt(0);

  let shiftedMsg = '';

  for (let char of message) {
    let code = char.codePointAt(0);

    if (code >= codeUpperA && code <= codeUpperZ) {
      code -= codeUpperA;
      code = modulo(code + shiftValue, 26);
      code += codeUpperA;
    } else if (code >= codeLowera && code <= codeLowerz) {
      code -= codeLowera;
      code = modulo(code + shiftValue, 26);
      code += codeLowera;
    }

    shiftedMsg += String.fromCodePoint(code);
  }

  return shiftedMsg;
}

function modulo(n, p) {
  let r = n % p;

  if (r < 0) {
    r += p;
  }

  return r;
}

export { caesarShift };
