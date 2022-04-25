//Created Custom Marathi Array functions

//Array Connstructor function

function myArray() {
  Object.defineProperty(this, "length", {
    value: 0,
    writable: true,
    enumerable: false, //dont count this property
  });

  this.length = arguments.length;

  for (let i = 0; i < this.length; i++) {
    this[i] = arguments[i];

  }
}

let a2 = new myArray("x", "y", "z");

myArray.prototype.ढकल = function (value) {
  let index = this.length;
  this[index] = value;
  this.length++;
};



myArray.prototype.काढा = function () {
  let index = this.length - 1;

  delete this[index];

  this.length--;
};

myArray.prototype.शीर्ष = function () {
    let index = this.length -1;
    console.log(a2[index]);
  };

  myArray.prototype.छापणे=function(){
    let a4=[]
    for(let i=0;i<a2.length;i++){
    a4.push(a2[i]);
    }
    console.log(a4)
  }

  myArray.prototype.उलट=function(){
    let a3=[];
    for(let i=a2.length-1;i>=0;i--){
      a3.push(a2[i]);
    }
    console.log(a3)
  }

  myArray.prototype.आकार=function(){
   console.log( a2.length);
  }
a2.ढकल("a");
a2.ढकल("b");
a2.ढकल("c");
// a2.काढा();
a2.काढा();
// a2.काढा();
a2.शीर्ष();
a2.छापणे();
a2.उलट();
a2.आकार();
// console.log("a2:", Object.values(a2));
