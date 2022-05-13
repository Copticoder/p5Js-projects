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
        var i=this.heap.length-1;
        this.heap.push(cell);
        
        
        while(i>1 && this.heap[i].fCost<this.heap[Math.floor(i/2)].fCost){
            this.swap(Math.floor(i/2),i);
            i=Math.floor(i/2);
        }
    }
    remove(){
        var i=1;
        this.swap(this.heap.length-1,i);

    
        while( ((i>1 && 2*i+1<this.heap.length) && this.heap[i].fCost>this.heap[(2*i+1)].fCost) || ((i>1 && 2*i < this.heap.length)&&this.heap[i].fCost>this.heap[(2*i)].fCost)){
            if(this.heap[2*i + 1].fCost>this.heap[(2*i)].fCost){
                this.swap(i,(2*i));
                i=(2*i );
            }else if(this.heap[2*i + 1].fCost<this.heap[(2*i)].fCost){
                this.swap(i,(2*i +1 ));
                i=2*i +1 ;
            }else{
                this.swap(i,(2*i +1 ));
                i=2*i +1 ;
            }
        }
        return this.heap.pop();

    }
    empty(){
        if(this.heap.length==1){
            return true;
        }else{
            return false;
        }
    }
}
