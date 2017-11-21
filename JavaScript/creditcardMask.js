//Usually when you buy something, you're asked whether your credit card number, 
//phone number or answer to your most secret question is still correct. 
//However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

//Your task is to write a function maskify, which changes all but the last four characters into '#'.

//solution
function maskify(cc) {
    if (cc.length <= 4) {
        return cc;
    }

    let i = 0;
    while (i < cc.length - 4) {
        cc = cc.replace(cc[i], '#')
        i++
    }
    return cc;
}

//others solutions
function maskify(cc) {
    return cc.replace(/.(?=....)/g, '#');
  }

  maskify = (cc) => '#'.repeat(Math.max(0, cc.length - 4)) + cc.substr(-4);

  function maskify(cc) {
    var maskedString = "";
    for(var i = 0; i < cc.length; i++) {
      if(i < cc.length - 4) {
        maskedString = maskedString + "#";
      } else {
        maskedString = maskedString + cc.charAt(i);
      };
    }
    return maskedString;
  }