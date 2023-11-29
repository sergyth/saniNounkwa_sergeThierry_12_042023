export default class UserModelKeyData {
  constructor(data) {
    this.calorie = data.keyData.calorieCount.toLocaleString('en-US');
    this.lipide = data.keyData.lipidCount
    this.glucide = data.keyData.carbohydrateCount
    this.proteine = data.keyData.proteinCount
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
