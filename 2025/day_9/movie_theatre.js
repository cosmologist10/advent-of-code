import fs from "fs";

const main = () => {
  const lines = fs.readFileSync(0, "utf8").trim().split("\n")

  const pts = lines.map((line) => {
    const [xs, ys] = line.split(",");
    return [parseInt(xs, 10), parseInt(ys, 10)];
  });

  let best = 0;


  for (let i = 0; i < pts.length; i++) {
    const [x1, y1] = pts[i];
    for (let j = i + 1; j < pts.length; j++) {
      const [x2, y2] = pts[j];

      const area = (Math.abs(x1 - x2) + 1) * (Math.abs(y1 - y2) + 1);
      if (area > best) best = area;
    }
  }

  console.log(best);
};

main();
