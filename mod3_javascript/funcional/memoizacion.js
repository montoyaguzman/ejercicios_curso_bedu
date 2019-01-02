function factorial(n) {
  if(!this.cache) {
    this.cache = {}
  }
  if(this.cache[n]) {
    console.log(`CACHE | Factorial(${n}) = `, this.cache[n])
    return this.cache
  }
  if(n === 1){
    return 1
  }
  this.cache[n] = n * factorial(n - 1)
  console.log(`NUEVO | Factorial(${n}) = `, this.cache[n])
  return this.cache[n]
}

factorial(6)
factorial(5)
factorial(3)
factorial(6)
factorial(2)