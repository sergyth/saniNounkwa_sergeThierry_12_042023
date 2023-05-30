class UserModelActivity{
    constructor(data) {
        this.day = Number(data.day.slice(8));
        this.kilogram = data.kilogram;
        this.calories = data.calories;
    }
}
export default UserModelActivity;