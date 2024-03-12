function factorial(n){
    let sum = 1
    for(let i=1; i<=n; i++){
        sum *= i
    }
    return sum
}

function factorialR(n){

    if(n == 0 || n == 1) {
      return 1
    }

    return n * factorialR(n-1)
}
