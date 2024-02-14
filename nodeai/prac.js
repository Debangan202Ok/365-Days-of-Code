function greet(a) {
  console.log(this);
}
// greet(2);

const greet2 = (a) => {
  let b = a;
  console.log(this.b);
};

// greet2();
