import fs from 'fs'


const main = () => {
    const input = fs.readFileSync(0, "utf8").trim().split("\n");
    let sum = 0

    for(let i = 0; i < input.length; i +=1){
        const parsedInput = input[i].split('').map(id => id - '0')
        const first_point = getfirstLargestVoltage(parsedInput, 0, parsedInput.length-12)
        const second_point = getfirstLargestVoltage(parsedInput, first_point[1]+ 1, parsedInput.length-11)
        const third_point = getfirstLargestVoltage(parsedInput, second_point[1]+ 1, parsedInput.length-10)
        const fourth_point = getfirstLargestVoltage(parsedInput, third_point[1]+ 1, parsedInput.length-9)
        const fifth_point = getfirstLargestVoltage(parsedInput, fourth_point[1]+ 1, parsedInput.length-8)
        const sixth_point = getfirstLargestVoltage(parsedInput, fifth_point[1]+ 1, parsedInput.length-7)
        const seventh_point = getfirstLargestVoltage(parsedInput, sixth_point[1]+ 1, parsedInput.length-6)
        const eighth_point = getfirstLargestVoltage(parsedInput, seventh_point[1]+ 1, parsedInput.length-5)
        const ninth_point = getfirstLargestVoltage(parsedInput, eighth_point[1]+ 1, parsedInput.length-4)
        const tenth_point = getfirstLargestVoltage(parsedInput, ninth_point[1]+ 1, parsedInput.length-3)
        const eleventh_point = getfirstLargestVoltage(parsedInput, tenth_point[1]+ 1, parsedInput.length-2)
        const twelth_point = getfirstLargestVoltage(parsedInput, eleventh_point[1]+ 1, parsedInput.length-1)
        const val = '' + first_point[0] +second_point[0] +third_point[0] +fourth_point[0] +fifth_point[0] +sixth_point[0] +seventh_point[0] + eighth_point[0]
        + ninth_point[0] + tenth_point[0] + eleventh_point[0] + twelth_point[0]
        sum += parseInt(val, 10)
    }
    console.log('sum:', sum)
}


const getfirstLargestVoltage = (input, start_index, end_index) => {
    // console.log('input, start_index, end_index', input, start_index, end_index)
    const heap = []

    while(end_index >= start_index){
        if(heap.length === 0){
            heap.push([input[end_index], end_index])
        }else{
            while(heap.length && (heap[heap.length-1][0] <= input[end_index])){
                heap.pop()
            }
            heap.push([input[end_index], end_index])
        }
        end_index -= 1
    }
    // console.log('heap==', heap)
    return heap[0]

}




main()