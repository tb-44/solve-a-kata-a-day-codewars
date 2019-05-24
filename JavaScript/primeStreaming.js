// Create an endless stream of prime numbers - a bit like IntStream.of(2, 3, 5, 7, 11, 13, 17), but infinite. 
// The stream must be able to produce a million primes in a few seconds.

class Primes {
    static * stream() {
        let ct = 1;
        while (true) {
            ct++;
            if (prime(ct)) {
                yield ct;
            }
        }
    }
}

function prime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0)
            return false;
    }
    return true;
}

//Sample Tests
// function verify (from_n, ...vals) {
//     const stream = Primes.stream()
//     for(let i=0; i<from_n; ++i) stream.next()
//     for(let v of vals) Test.assertEquals(stream.next().value, v)
//   }

//   describe('Small numbers', ()=>{
//     it('0_10', ()=> verify(0,2,3,5,7,11,13,17,19,23,29))
//     it('10_10', ()=> verify(10,31,37,41,43,47,53,59,61,67,71))
//     it('100_10', ()=> verify(100,547,557,563,569,571,577,587,593,599,601))
//     it('1000_10', ()=> verify(1000,7927,7933,7937,7949,7951,7963,7993,8009,8011,8017))
//   })