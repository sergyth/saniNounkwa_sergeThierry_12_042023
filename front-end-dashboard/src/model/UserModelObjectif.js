class UserModelObjectif{
    constructor(data){
        this.day = data.day;
        this.sessionLength = data.sessionLength
    }
    getModelObjectif(){
        const day = (element)=>{
            const week =['L','M','M','J','V','S', 'D']
            return week[element-1]
        }
        const objectifModel = {
            day: day(this.day),
            sessionLength: this.sessionLength
        }
        return objectifModel
    }
}
export default UserModelObjectif