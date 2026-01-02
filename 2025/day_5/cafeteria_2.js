import fs from 'fs'


const main = () => {
    const input = fs.readFileSync(0, "utf8").trim().split("\n");
    const ranges = []
    for(let i = 0; i < input.length; i +=1){
        if(input[i]){
            if(input[i].includes('-')){
                ranges.push(input[i].split('-').map((e) => e - '0'))
            }
        }
    }

    ranges.sort((a,b) => a[0] - b[0])

    const optimized_range = [ranges[0]]
    for(let i =1; i < ranges.length; i +=1){
        const last_val_opt_range =  optimized_range.pop()
        if(ranges[i][0] <= last_val_opt_range[1]){
            optimized_range.push([Math.min(ranges[i][0], last_val_opt_range[0]), Math.max(ranges[i][1], last_val_opt_range[1])])
        }else{
            optimized_range.push(last_val_opt_range)
            optimized_range.push(ranges[i])
        }
    }

    let count = 0
    for(let i =0; i < optimized_range.length; i +=1){
        count += ((optimized_range[i][1] - optimized_range[i][0]) + 1)
    }
    console.log(count)
}

main()
