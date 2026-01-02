import fs from 'fs'


const main = () => {
    const input = fs.readFileSync(0, "utf8").trim().split("\n");
    let sum = 0

    for(let i = 0; i < input.length; i +=1){
        const parsedInput = input[i].split('').map(id => id - '0')
        const first_point = getfirstLargestVoltage(parsedInput, 0, parsedInput.length-2)
        const second_point = getfirstLargestVoltage(parsedInput, first_point[1]+ 1, parsedInput.length-1)
        sum += first_point[0]* 10 + second_point[0]
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