import fs from 'fs'

const main = () => {
  let input = fs.readFileSync(0, "utf8").trim().split("\n")
  input = input.map(e => e.split(''))
  let cnt = 0

  for(let i =0; i < input.length; i +=1){
    for(let j=0; j < input[0].length; j +=1){
      if(input[i][j] === '.' && (i-1) >= 0 && input[i-1][j] === 'S'){
        input[i][j] = '|'
      }else if(input[i][j] === '.' && (i-1) >=0 && input[i-1][j] === '|'){
        input[i][j] = '|'
      }else if(input[i][j] === '^' && input[i-1][j] === '|'){
        cnt += 1;
        input[i][j-1] = '|'
        input[i][j+1] = '|'
      }
    }
  }
  console.log(cnt);

}

main()