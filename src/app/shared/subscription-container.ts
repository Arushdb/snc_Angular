import {Subscription} from 'rxjs'
export class SubscriptionContainer{

private subs:Subscription[]=[];

set add(s:Subscription){
    console.log("Subscription added",s);
    this.subs.push(s);
}

dispose(){
    this.subs.forEach(s=>{  
        console.log("Subscription removed",s);
        s.unsubscribe() ;})
}

}