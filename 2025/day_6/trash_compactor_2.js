import fs from 'fs'

const main = () => {
    const input = fs.readFileSync(0, "utf8").split('\n')
    const operators = input[input.length-2]
    console.log(operators)
    const final_operators = []
    let len_cnt = []
    let cnt = 0

    for(let i =0; i < operators.length; i +=1){
        if(operators[i] === '+' || operators[i] === '*'){
            final_operators.push(operators[i])
            len_cnt.push(cnt)
            cnt = 0
        }else{
            cnt += 1
        }
    }
    cnt += 1
    len_cnt.push(cnt)

    len_cnt = len_cnt.splice(1,)

    len_cnt = len_cnt.map(e => new Array(e).fill('')) 
    console.log(len_cnt)

    for(let i=0; i < input.length; i +=1){
        if (i === input.length-1){
            continue
        } 
        let index = 0;
        let internal_index = 0
        let var_len = 0
        for(let j =0; j < input[i].length; j += 1){  
            if(input[i][j] === ' '){
                if(var_len === len_cnt[index].length){
                index += 1
                internal_index = 0
                var_len = 0
                }else{
                    internal_index += 1
                    var_len += 1
                }
            }else{
                len_cnt[index][internal_index] += input[i][j]
                var_len += 1
                internal_index += 1
            }
            
        }
    }

    let ans = []

    for(let i=0; i < final_operators.length; i += 1){
        if(final_operators[i] === '*'){
            ans.push(len_cnt[i].reduce((a,b) => parseInt(a,10)*parseInt(b,10), 1))
        }else if(final_operators[i] === '+'){
            ans.push(len_cnt[i].reduce((a,b) => parseInt(a,10)+parseInt(b,10), 0))
        }
    }
    console.log(ans.reduce((a,b) => parseInt(a,10)+parseInt(b,10), 0))
}

main()
