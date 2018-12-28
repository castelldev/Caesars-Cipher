function rot13(str) { // LBH QVQ VG!
    let decoded = "";
    let filter = new RegExp(/[A-M]/i);
    let shift = (code)=>{return String.fromCharCode(code+13)};
    let unshift = (code)=>{return String.fromCharCode(code-13)};
    let decipher = (chr)=>{
      if(!chr.match(/[\s\W*]/))
        return filter.test(chr)?shift(chr.charCodeAt()):unshift(chr.charCodeAt());
      else
        return chr;
    };
  
    decoded = str.split('').map((char)=>{return decipher(char)}).join('')
    return decoded;
}
// Change the inputs below to test
console.log(rot13("SERR PBQR PNZC"));