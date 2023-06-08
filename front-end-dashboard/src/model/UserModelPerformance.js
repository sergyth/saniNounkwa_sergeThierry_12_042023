class UserModelPerformance{
    constructor(data){
        this.kind = data.kind;
        this.value = data.data;
    }
    getUserModelPerformance(index){
        const performanceModel = {
            kind: this.kind,
            value: this.value
        }
        console.log(performanceModel)
        return performanceModel
    }
}
export default UserModelPerformance;