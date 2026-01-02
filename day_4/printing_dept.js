import fs from 'fs'


const main = () => {
    const input = fs.readFileSync(0, "utf8").trim().split("\n");

    const arr = []

    for(let i=0; i < input.length; i+=1){
        const internal_arr = []
        for(let j = 0; j < input[i].length; j+=1){
            internal_arr.push(input[i][j])
        }
        arr.push(internal_arr)
    }

    const direction = [[-1,0],[1,0],[0,-1],[0,1],[-1,-1],[-1,1],[1,-1],[1,1]]
    let sum = 0

    for(let i =0; i < arr.length; i +=1){
        for(let k =0; k < arr[0].length; k +=1){
            if(arr[i][k] === '.') continue
            let cnt = 0;
            // console.log('==i,k==', i, k)
            for(let j=0; j < direction.length; j+=1){
                const x_axis = direction[j][0] + i;
                const y_axis =  direction[j][1] + k;
                if(x_axis >= 0 & x_axis < arr.length && y_axis >= 0 & y_axis < arr[0].length && arr[x_axis][y_axis] === '@'){
                    // console.log('here===', arr[x_axis][y_axis])
                    cnt +=1
                }
            }
            // console.log('cnt:', cnt)
            if(cnt < 4){
                sum += 1
            }
        }
    }
    console.log('sum:', sum)
}


main()