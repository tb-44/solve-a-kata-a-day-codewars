//Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. 
//It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

//Ribonucleic acid, RNA, is the primary messenger molecule in cells. 
//RNA differs slightly from DNA its chemical structure and contains no Thymine. 
//In RNA Thymine is replaced by another nucleic acid Uracil ('U').

//Create a funciton which translates a given DNA string into RNA.

//For example:

//DNAtoRNA("GCAT") returns ("GCAU")

//solution
function DNAtoRNA(dna) {
    var output = '';
    for (var i = 0; i < dna.length; i++) {
        if (dna[i] === 'T') {
            output = output + 'U';
        } else {
            output = output + dna[i];
        }
    }
    return output;
}

//others
function DNAtoRNA(dna) {
    return dna.replace(/T/g, 'U');
}

function DNAtoRNA(dna) {
    return dna.split("T").join("U");
}

