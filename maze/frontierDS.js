class StackFrontier{
    constructor(){
        this.frontier=[];
    }
    empty(){
        if(this.frontier.length==0){
            return true;
        }
        return false;
    }
    add(node){
        this.frontier.push(node);
    }
    remove(){
        if(this.frontier.length>0){
            return this.frontier.pop();
        }else{
            print('empty frontier');
        }
    }
}


class QueueFrontier extends StackFrontier {
        constructor(){
            super();
        }
        // override remove
        remove(){
            if(this.frontier.length>0){
                this.frontier=this.frontier.splice(1);
            }else{
                print('empty frontier');
            }
        }
}


class PQMinHeap{
    constructor(){
        this.heap=[null];
    }
    swap(a,b){
        var temp=this.heap[a];
        this.heap[a]=this.heap[b];
        this.heap[b]=temp;
    }
    add(cell){
        this.heap.push(cell);
        var i=this.heap.length-1;
        
        while(i>1 && this.heap[i].fCost<this.heap[Math.floor(i/2)].fCost){
            this.swap(Math.floor(i/2),i);
            i=Math.floor(i/2);
        }
    }
    remove(){
        var i=1;
        this.swap(this.heap.length-1,i);
        var node = this.heap.pop();
        for(var i=Math.floor(this.heap.length/2);i>=1;i--){
            this.heapify(i);
        }
        // while( ((i>=1 && 2*i+1<this.heap.length) && this.heap[i].fCost>this.heap[(2*i+1)].fCost) || ((i>=1 && 2*i < this.heap.length)&&this.heap[i].fCost>this.heap[(2*i)].fCost)){
        //     if(this.heap[2*i + 1].fCost>this.heap[(2*i)].fCost){
        //         this.swap(i,(2*i));
        //         i=(2*i );
        //     }else if(this.heap[2*i + 1].fCost<this.heap[(2*i)].fCost){
        //         this.swap(i,(2*i +1 ));
        //         i=2*i +1 ;
        //     }else{
        //         this.swap(i,(2*i +1 ));
        //         i=2*i +1 ;
        //     }
        // }
        return node

    }
    heapify(i){
        var smallest=i;
        var l=2*i; 
        var r=2*i +1;
        if (l<this.heap.length && this.heap[smallest].fCost>this.heap[l].fCost){
            smallest=l
        }
        if(r<this.heap.length && this.heap[smallest].fCost>this.heap[r].fCost){
            smallest=r;
        }
        if(smallest!=i){this.swap(i,smallest);
        this.heapify(smallest);
        }
    }
    empty(){
        if(this.heap.length==1){
            return true;
        }else{
            return false;
        }
    }
}
