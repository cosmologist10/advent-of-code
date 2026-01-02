import fs from "fs";

function main() {
  const lines = fs.readFileSync(0, "utf8").trim().split("\n");

  const rows = lines.map((line) => line.trim().split(/\s+/));

  const opRow = rows[rows.length - 1]; 
  const acc = rows[rows.length - 2].map((x) => parseInt(x, 10)); 

  for (let r = rows.length - 3; r >= 0; r--) {
    const row = rows[r];
    for (let c = 0; c < row.length; c++) {
      const n = parseInt(row[c], 10);
      if (opRow[c] === "+") acc[c] += n;
      else if (opRow[c] === "*") acc[c] *= n;
    }
  }

  const total = acc.reduce((sum, v) => sum + v, 0);
  console.log(total);
}

main();
