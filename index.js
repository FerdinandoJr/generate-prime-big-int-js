function modPow(base, expoent, modulus){
	if (modulus === BigInt('1')){
		return 0
	}

	let result = BigInt('1')
	base = base % modulus
	while (expoent > BigInt('0')) {
		if (expoent % BigInt('2') === BigInt('1')){
			result = (result * base) % modulus
		}
		expoent = expoent / BigInt('2')
		base = (base * base) % modulus
	}
	return result
}

function geraBigInt( n ){
	let result = BigInt('0')
	let aux = BigInt('0')
	for(let i = 0; i < n; i++){
		if(i == 0 || i == n - 1){
			aux = BigInt(2)
			aux = aux ** BigInt(i)
			result = result + aux
		}else {
			if(Math.random() < 0.5){
				aux = BigInt(2)
				aux = aux ** BigInt(i)
			}else{
				aux = BigInt(0)
			}
		result = result + aux
		}
	}
	return result;
}

function isPrime(n) {
	if (n == BigInt(1)) {
		return false
	}
	if(modPow(BigInt('2'), n - BigInt('1'), n) != 1) {
		return false
	}
	return true
}

// size is binary
function getPrimeNumber(size=1024){
	let n = 0
	do{
		n = geraBigInt(size)
	} while(!isPrime(n))
	return n
}


// Using
console.log(getPrimeNumber(1024))
