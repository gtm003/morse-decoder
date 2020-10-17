const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    '':       ' ',
};

function decode(expr) {
    let arr = [];
    let result = '';
    
    for (i = 0; i < expr.length / 10; i++) {
      arr.push(expr.substr (i * 10, 10));
    }
    console.log (arr);
    arr.forEach(function(item, i, array) {
      let simbol = '';
      for (i = 0; i < 10;) {
      if (item.substr (i,2) == '10') simbol += '.';
      else if (item.substr (i,2) == '11') simbol += '-';
      //console.log (arr[1].substr (i,2));
      //console.log (result);
      i += 2;
    } result += (MORSE_TABLE[simbol]);
    });
    return result;
  }

module.exports = {
    decode
}