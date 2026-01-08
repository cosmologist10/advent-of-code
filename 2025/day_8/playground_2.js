
import fs from 'fs'

class UnionFind{

    constructor(N){
        this.parent = [...new Array(N).keys()]
        this.size = new Array(N).fill(1)
        this.last_coordinate = [];
    }

    find(node){
        if(this.parent[node] !== node){
            this.parent[node] = this.find(this.parent[node])
        }
        return this.parent[node]
    }

    union(node1, node2){
        const node1_parent = this.find(node1)
        const node2_parent = this.find(node2)

        if(node1_parent === node2_parent) return false;

        if(this.size[node1_parent] >= this.size[node2_parent]){
            this.parent[node2_parent] = node1_parent
            this.size[node1_parent] += this.size[node2_parent]
        }else{
            this.parent[node1_parent] = node2_parent
            this.size[node2_parent] += this.size[node1_parent]
        }
        this.last_coordinate.push([node1,node2])
        return true
    }

    get_lastcordinate(){
        return this.last_coordinate.pop()
    }
}

const t1= +new Date();

const lines = fs.readFileSync(0, "utf8").trim().split('\n')

const pts = lines.map((line) => {
    const [x,y,z] = line.split(',').map((v) => parseInt(v,10))
    return [x,y,z]
})

const edges = []

for(let i = 0; i < pts.length; i +=1){
    const [x1,y1,z1] = pts[i];

    for(let j=i+1; j <pts.length; j +=1){
        const [x2,y2,z2] = pts[j];

        const dx = x1 - x2;
        const dy = y1 - y2;
        const dz = z1 - z2;
        const d2 = dx*dx + dy*dy + dz*dz;
        edges.push([d2, i, j])
    }
}

edges.sort((a,b) => a[0] - b[0])

const union_find = new UnionFind(pts.length)

for(let k = 0; k < edges.length; k +=1){
    const [_,i,j] = edges[k]
    union_find.union(i,j)
}

const [x,y] = union_find.get_lastcordinate()

console.log(pts[x][0]*pts[y][0])

const t2= +new Date();
console.log(t2-t1) // 238 milliseconds on average of 10