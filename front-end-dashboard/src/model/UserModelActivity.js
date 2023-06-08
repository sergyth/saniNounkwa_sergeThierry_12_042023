class UserModelActivity{
    constructor(data) {
        this.day = Number(data.day.slice(8))
        this.kilogram = data.kilogram;
        this.calories = data.calories;
    }
    getModelActivity(){
        const activityModel = {
            day: this.day, 
            kilogram: this.kilogram,
            calories: this.calories
        }
        return activityModel;
    }
}
export default UserModelActivity;