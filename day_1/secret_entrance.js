import fs from 'fs'


const main = () => {
    const input = fs.readFileSync(0, "utf8").trim().split("\n");
    let current_point = 50;
    let count = 0
    for(let i = 0; i <input.length; i +=1){
        let rotation = input[i];

        if(rotation.includes('L')){
            rotation = rotation.split('L')[1] - '0'
            count += Math.trunc(rotation / 100)
            rotation = rotation % 100
            current_point  -=  rotation
            // console.log('current_point:', current_point, rotation, count)
            if(current_point < 0) {
                if(Math.abs(current_point) !== rotation){
                    count += 1
                    // console.log('Count increasing as it crossing ')
                }
                current_point = 100 + current_point
                // console.log('after performance ', current_point, rotation)
            } else if(current_point === 0){
                count += 1
                // console.log('Count increasing as it is 0 ')
            }
        }else if(rotation.includes('R')){
            rotation = rotation.split('R')[1] - '0'
            count += Math.trunc(rotation / 100)
            rotation = rotation % 100
            current_point  +=  rotation
            // console.log('current_point:', current_point, rotation, count)
            if(current_point > 100){
                current_point = current_point % 100
                // console.log('after performance ', current_point, rotation)
                if(current_point !== rotation){
                    count += 1
                    // console.log('Count increasing as it crossing ')
                }
            }else if(current_point === 100){
                current_point = 0
                count += 1
                // console.log('Count increasing as it is 0 ')
            }
        }
    }
    console.log('final count', count)
}

main()



