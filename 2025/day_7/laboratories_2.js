import fs from 'fs'

const main = () => {
  let input = fs.readFileSync(0, "utf8").trim().split("\n")
  input = input.map(e => e.split(''))

  let height = input.length
  let width = input[0].length

  let row = -1;
  let col = -1

  for(let i=0; i < height; i+=1){
    for(let j=0; j < width; j+=1){
        if(input[i][j] === 'S'){
            row = i
            col = j
            break
        } 
    }
  }

  let memo = new Map()

  const ways = (r, c) => {
    if(r === height) return 1
    if(c < 0 || c >= width) return 0
    const key = `${r}-${c}`
    if(memo.has(key)) return memo.get(key)
    let count = 0

    if(input[r][c] === '.'){
        count = ways(r+1, c)
    }else if(input[r][c] === '^'){
        count = ways(r+1, c-1) + ways(r+1, c+1)
    }
    memo.set(key, count)
    return memo.get(key) 
  }
  console.log(ways(row+1, col))
}
main()