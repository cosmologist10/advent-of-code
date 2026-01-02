import fs from 'fs';

const main = () => {
    const input = fs.readFileSync(0, "utf8").split(',')
    let ans = 0
    for(let i = 0; i < input.length; i +=1){
        const range = input[i].split('-')
        const start = parseInt(range[0], 10)
        const end = parseInt(range[1], 10)
        for(let i = start; i <= end; i +=1){
            if(isInvalidNumber(i)){
                ans += i
            }
        }

    }
    console.log('ans', ans)
    return ans;
}

const isInvalidNumber = (num) => {
    const length = Math.floor(Math.log10(num)) + 1
    if(length % 2 === 0){
        const divisible_value = 10 ** (length/2)
        if(num % divisible_value === Math.trunc(num/divisible_value)) return true
    }
    return false
    
}

main()
