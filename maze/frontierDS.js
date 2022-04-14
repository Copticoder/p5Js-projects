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


class QueueFrontier extends StackFrontier{
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