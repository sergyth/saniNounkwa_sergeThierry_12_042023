export default class UserModelKeyData {
  constructor(data) {
    this.calorie = data.calorieCount.toLocaleString();
    this.lipide = data.lipidCount
    this.glucide = data.carbohydrateCount
    this.proteine = data.proteinCount
  }
  getCalorie() {
    const calorie = this.calorie
    return calorie
  }
  getLipide() {
    return this.lipide
  }
  getProteine() {
    return this.proteine
  }
  getGlucides() {
    return this.glucide
  }
}
