let anything: any;

anything = "rafi";

(anything as string).length;

const kgToGmConverter = (
  input: string | number
): string | number | undefined => {
  if (typeof input === "number") {
    return input * 1000;
    // } else if (typeof input === "string") {
    //   const [value] = input.split(" ");
    //   return `Converted output is ${Number(value) * 1000}`;
  } else if (typeof input === "string") {
    const convertedValue = parseFloat(input) * 1000;
    return convertedValue;
  }
};

const result1 = kgToGmConverter(222) as number;
console.log(result1);
const result2 = kgToGmConverter("2 kg");
const result3 = kgToGmConverter("50");
console.log({ result2 });
console.log({ result3 });
