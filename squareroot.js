//Finding the square root on num
 const findSqrt = num => {
    let i = 1;
    const found = false;
    while (!found){
       //Checking if n is a perfect square number
       if (i * i === num){
          return i;
       }else if (i * i > num){
          let res = square(num, i - 1, i); // num=n     i-1=i   i=j
          return res;
       };
       i++;
    }
 }

 const square = (n, i, j) => {
    let mid = (i + j) / 2; 
    let mul = mid * mid;  
    if ((mul === n) || (Math.abs(mul - n) < 0.00001)){ //Checks if equal
       return mid;
    }else if (mul < n){
       return square(n, mid, j);
    }else{
       return square(n, i, mid);
    }
 }

 console.log(findSqrt(25));