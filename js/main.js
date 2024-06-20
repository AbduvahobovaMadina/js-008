
{
    // while 1
    function son(a,b){
        let = 0
        while(a >= b){
            a = a - b
        }
        console.log(a);
    }
    // console.log(son(19, 4));
}


{
    // while 2
    function son(a,b){
        let i = 0
        while(a >= b){
            a -= b
            i++
        }
        console.log(i);
    }
    // console.log(son(20, 4));
}

{
    // while 3
    function son (n, k){
        let i = 0
        while(n >= k){
            n = n - k
            i++
        }
        console.log(`Butun: ${i}  qoldiq: ${n}`);
    }
    // console.log(son(17,4));
}

{
    // while 4
    function son(n){
        let i = 1
        while(i <= n){
            i = i * 3
            if(n > 0){
                i == n * 3
                return ` 3 ning darajasi`
            }else{
                return `3 ning darajasi emas`
            }
        }
        console.log(i);
    }
    // console.log(son(9));
}


// keyinggi 3talik masalalar
{
    // masala 1
    function son(array) {
      let musbat = 0,
         manfiy = 0;
      for (let i = 0; i < array.length; i++) {
        if (array[i] > 0) {
          musbat += array[i];
        } else {
          manfiy += array[i];
        }
      }
      return ` ${musbat} ${manfiy}`;
    }
    // console.log(son([1,2,3,4,5,-3,-5,-10]));
}

{
    // masala 1 while
    function son(array) {
        let musbat = 0,
          manfiy = 0;
        let i = 0;
        while (i < array.length) {
          if (array[i] > 0) {
            musbat += array[i];
          } else {
            manfiy += array[i];
          }
    
          i++;
        }
        return `${musbat} ${manfiy}`;
    }
    // console.log(son([1,2,3,4,5,-3,-5,-10]));
}
{
    // masala 1 do while
    function son(array) {
        let musbat = 0,
          manfiy = 0;
        let i = 0;
        do {
          if (array[i] > 0) {
            musbat += array[i];
          } else {
            manfiy += array[i];
          }
          i++;
        } while (i < array.length);
        return `Musbat:${musbat}  Manfiy:${manfiy}`;
    }
    // console.log(son([1,2,3,4,5,-3,-5,-10]));
}


{
    // masala 2
    function son(array) {
        let juft = 0;
    
        for (let i = 0; i < array.length; i += 2) {
            juft += array[i];
        }
        return juft;
    }
    // console.log(son([1,2,4,6,7]));
}

{
    // masala 2 while
    function son(array){
        let juft = 0
        let i = 0
        while (i < array.length){
            if(array[i] % 2 === 0){
                juft += array[i]
            } 
            i++           
        }
        return juft
    }
    // console.log(son([1,2,4,6,7]));
}

{
    // masala 2 do while
    function son(array){
        let juft = 0
        let i = 0
        do{
            if(array[i] % 2 === 0){
                juft += array[i]
            } 
            i++ 
        }while(i < array.length)
        return juft
    }
    // console.log(son([1,2,4,6,7]));
}

{
    // masala 3
    function son(a, b){
        let sum = 0
        for(let i = a; i <= b; i++){
            sum += i
        }
        return sum
    }
    // console.log(son(2,5));
}
{
    // masala 3 while
    function son(a, b){
        let sum = 0
        while(a <= b){
            sum += a;
            a++
        }
        return sum
    }
    // console.log(son(2,5));
}
{
    // masala 3 do while
    function son (a, b){
        let sum = 0
        do{
            sum += a;
            a++
        }while(a <= b)
        return sum
    }
    // console.log(son(2,5));
}

{
    // masala 4
   function son(n){
    for (let i = n; i >= 0; i--) {
            if (i % 2 !== 0) {
               console.log(i);
            }
        }
        return `${n} dagi toq sonlar`
    }
    // console.log(son(10));
}
{
    // masala 4 while
    function son(n){
        let i = n
        while(i > 0){
            i--
            if (i % 2 !== 0) {
                console.log(i);
            }
        }
        return `${n} dagi toq sonlar`
    }
    // console.log(son(10));
}

{
    // masala 4 do while 
    function son(n){
        let i = n
        do{
            i--
            if (i % 2 !== 0) {
                console.log(i);
            }
        }while(i > 0)
        return `${n} dagi toq sonlar`
    }
    console.log(son(15));
}

