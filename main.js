// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};


function pAeqorFactory(num, arr) {
  return{
    specimenNum: num,
    dna:arr,
    mutate () {
      let index = Math.floor(Math.random()*16)
      let base
      do {
        base = returnRandBase()
      } while (base === arr[index])

      arr[index] = base
      return this.dna
    },
    compareDNA (otherOrg) {
      let count = 0
      for (let index = 0; index < this.dna.length; index++) {
        if(this.dna[index]===otherOrg.dna[index]) {
          count ++
        }
      }
      console.log(`${this.specimenNum} and ${otherOrg.specimenNum} have ${(count/15 * 100).toFixed(2)}% DNA in common`)
    },
    willLikelySurvive() {
      let count = 0
      this.dna.forEach(element => {
        if(element === "C" || element ==="G") {
          count ++
        }
      });
      if(count/this.dna.length * 100 >= 60) {
        return true
      } else {
        return false
      }
    }
  }
}

var pAeqorArray = []
var num = 0
while (pAeqorArray.length < 30) {
  let pAeqor = pAeqorFactory(num, mockUpStrand())
  if (pAeqor.willLikelySurvive()) {
    pAeqorArray.push(pAeqor)
  }
  num ++
}

console.log(num)