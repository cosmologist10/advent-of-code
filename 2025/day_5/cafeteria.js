import fs from 'fs'


const main = () => {
    const input = fs.readFileSync(0, "utf8").trim().split("\n");
    const ranges = []
    const queries = []
    for(let i = 0; i < input.length; i +=1){
        if(input[i]){
            if(input[i].includes('-')){
                ranges.push(input[i].split('-').map((e) => e - '0'))
            }else{
                queries.push(parseInt(input[i], 10))
            }
        }
    }

    ranges.sort((a,b) => a[0] - b[0])
    queries.sort((a,b) => a - b)

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
    // console.log('optimized_range:', optimized_range)
    // console.log('queries:', queries)

    let sum = 0
    for(let i =0; i < queries.length; i +=1){
        // console.log('queries[i]:', queries[i])
        if(isFresh(queries[i], optimized_range)){
            // console.log('===true===')
            sum += 1
        }
    }
    console.log(sum)
}


const isFresh = (val, range) => {
    if(range.length === 1){
        if(val >= range[0][0] && val <= range[0][1]){
            return true
        }else{
            return false
        }
    }else if(range.length === 2){
        if(val >= range[0][0] && val <= range[0][1]){
            return true
        }else if(val >= range[1][0] && val <= range[1][1]){
            return true
        }else{
            return false
        }
    }else{
        const data =  binarySearch(val, range)
        // console.log('dara===', data)
        return data
    }
}

const binarySearch = (val, range) => {
    let start = -1;
    let end = range.length;

    while(end - start > 1){
        // console.log('start, end:', start, end)
        const mid = Math.floor((end + start)/2)
        // console.log('mid:', mid, range[mid])
        if(range[mid][0] > val){
            end = mid
        }else{
            start = mid
        }
    }
    // console.log('start==', start, val, range[start])
    if(start !== -1 && val >= range[start][0] && val <= range[start][1]){
        return true
    }else{
        return false
    }
}

main()