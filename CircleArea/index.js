// Circle area formula π x r2

const arguments = process.argv.slice(1);

const calculateCircle = (r) => {
  console.log(`for radius ${r} result is ${(Math.PI * r * r).toFixed(2)}`);
};
calculateCircle(arguments[1] *1);
