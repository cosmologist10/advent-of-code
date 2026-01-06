
import fs from 'fs'


class UnionFind{

    constructor(N){
        this.parent = [...new Array(N).keys()]
        this.size = new Array(N).fill(1)
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

        return true
    }

    componentSize(){
        const sizes = []
        console.log('===', this.parent)
        console.log('==size=', this.size)

        for(let i=0; i < this.parent.length; i+=1){
            if(this.find(i) === i) sizes.push(this.size[i])

        }

        return sizes;
    }
}

const main = () => {
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

    for(let k = 0; k < Math.min(1000, edges.length); k +=1){
        const [_,i,j] = edges[k]
        union_find.union(i,j)
    }

    const sizes = union_find.componentSize().sort((a, b) => b - a);
    console.log(sizes[0] * sizes[1] * sizes[2])
}

main()

