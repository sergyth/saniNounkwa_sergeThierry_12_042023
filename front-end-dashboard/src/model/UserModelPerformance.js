class UserModelPerformance{
    constructor(data){
        this.kind = Object.values(data.kind);
        this.value = data.data.map(item => item.value);
    }
    getUserModelPerformance(){
        let model= []  
        for(let i=0; i < this.kind.length; i++){
            const performanceModel = {
                kind: this.kind[i],
                value: this.value[i]
            }
            model.push(performanceModel);
        } 
       return model
        
    }
}
export default UserModelPerformance;