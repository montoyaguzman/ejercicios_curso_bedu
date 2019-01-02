function divisora(dividendo, divisor) {
  if (dividendo < divisor) {
    return 0
  }
  return 1 + divisora(dividendo - divisor, divisor)
}

console.log(divisora(13, 4))