
class Vampire {
  constructor(name, yearConverted) {
    this.name = name;
    this.yearConverted = yearConverted;
    this.offspring = [];
    this.creator = null;
  }

  /** Simple tree methods **/

  // Adds the vampire as an offspring of this vampire
  addOffspring(vampire) {
    this.offspring.push(vampire)
    vampire.creator = this;
  }

  // Returns the total number of vampires created by that vampire
  get numberOfOffspring() {
    return this.offspring.length;
  }

  theName()
  {
    return this.name;
  }

  // Returns the number of vampires away from the original vampire this vampire is
  get numberOfVampiresFromOriginal() {
    let distance = 0;
    let currentVamp = this;

    while (currentVamp.creator) {

      currentVamp = currentVamp.creator;
      distance++;
      // console.log('num vamps from orig: ', distance)
    }
    return distance;
  }

  
  // Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
  isMoreSeniorThan(vampire) {
    let v1distance = this.numberOfVampiresFromOriginal;
    let v2distance = vampire.numberOfVampiresFromOriginal;
    if (v1distance < v2distance)
      return true
    else
      return false;
  }
  hasSameAncestor(vampire) {
    return this.creator = vampire.creator;
  }

  isSameVampire(vampire){
    if (this.numberOfVampiresFromOriginal === vampire.numberOfVampiresFromOriginal && this.creator === vampire.creator)
      return true;
    else return false;
  }

  /** Stretch **/

  // Returns the closest common ancestor of two vampires.
  // The closest common anscestor should be the more senior vampire if a direct ancestor is used.
  // For example:
  // * when comparing Ansel and Sarah, Ansel is the closest common anscestor.
  // * when comparing Ansel and Andrew, Ansel is the closest common anscestor.
  closestCommonAncestor(vampire) {

    
// Check if either is ROOT Vampire
    if (this.numberOfVampiresFromOriginal === 0
      && vampire.numberOfVampiresFromOriginal > 0)
        return this;
     else if (this.numberOfVampiresFromOriginal > 0
      && vampire.numberOfVampiresFromOriginal ===0)
        return vampire;

// test for same vampire
    else if (this.isSameVampire(vampire)) {
      return this;    
    }
// if vamp is closer to root and level 
    else if (this.numberOfVampiresFromOriginal < vampire.numberOfVampiresFromOriginal &&
      this.numberOfVampiresFromOriginal >=2)
      return this;
    else return vampire;

    // else if (this.numberOfVampiresFromOriginal >=1  && 
    //   ){
    //   return vampire;
        
    //  }
    // else if (this.numberOfVampiresFromOriginal < vampire.numberOfVampiresFromOriginal &&
    //   this.creator.numberOfVampiresFromOriginal ===0  )
    //   return this.creator;
    // else if (this.numberOfVampiresFromOriginal > vampire.numberOfVampiresFromOriginal &&
    //   vampire.creator.numberOfVampiresFromOriginal ===0  )
    //   return vampire.creator;
     } // end closest commonAncenstor
  } // end the class

  module.exports = Vampire;