/**
 * s0 税前工资
 * s1 应纳税部分
 * s2 税后工资
 * r  税
 */

function getIncomeAfterTax (s0, base) {
 let critical = [0, 1500, 4500, 9000, 35000, 55000, 80000];
 let rates = [0.03, 0.1, 0.2, 0.25, 0.3, 0.35, 0.45];
 let rapidMinus = [0, 0, 105, 555, 1005, 2755, 5505, 13505];
 let i = critical.length;
  let taxBase = base | 3500;
 let s1 = s0 - taxBase;
 let r = 0;
 if(s1 > 0) {
  for (;i > 0; i--) {
   if (s1 > critical[i]) break;
  }
  console.log(i);
  if(i > -1) {
   r = s1*rates[i] + rapidMinus[i];
   console.log(r);
  }
 }
 return {
  income: s0 - r,
  tax: r
 };
}

console.log(getIncomeAfterTax(3500))
console.log(getIncomeAfterTax(4000))
console.log(getIncomeAfterTax(5000))
console.log(getIncomeAfterTax(5500))

console.log(getIncomeAfterTax(20000))
console.log(getIncomeAfterTax(83500))
console.log(getIncomeAfterTax(150000))
