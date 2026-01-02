import fs from 'fs'

const adjaceny_list = new Map()
const memo = new Map()

const main = () => {
    const input = fs.readFileSync(0, "utf-8").trim().split("\n")
    for(let i =0; i < input.length; i +=1){
        adjaceny_list.set(input[i].split(':')[0], input[i].split(':')[1].trim().split(' '))
    }

    console.log(( get_count('svr', 'fft') * (get_count('fft', 'dac')) * (get_count('dac', 'out')) )
                    +
                ( get_count('svr', 'dac') * (get_count('dac', 'fft')) * (get_count('fft`', 'out')) )
                );
}


const get_count = (starting_point, end_point) => {
    if(memo.has(`${starting_point}-${end_point}`)) return memo.get(`${starting_point}-${end_point}`)
    if(starting_point === end_point){
        return 1;
    };
    const nodes = adjaceny_list.get(starting_point)
    if(nodes && nodes.length){
        let sum = 0
        for(let i = 0; i < nodes.length; i += 1){
            sum += get_count(nodes[i], end_point)
        }
        memo.set(`${starting_point}-${end_point}`, sum)
        return sum;
    }else{
        memo.set(`${starting_point}-${end_point}`, 0)
        return 0
    }
    
}

main()