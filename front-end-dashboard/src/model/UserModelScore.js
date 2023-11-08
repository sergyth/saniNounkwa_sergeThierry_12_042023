class UserModelScore{
    constructor(data){
      this.score = data.todayScore ? data.todayScore * 100 : data.score * 100 
    
    }
    getUserModelScore(){
        let model = {score: this.score,
        fill: '#E60000'}
       return model
    }
}
export default UserModelScore