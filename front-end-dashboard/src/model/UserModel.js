export default class UserModel {
  constructor(activity, userInfos, sessions, firstName, performance, score, keyData) {
    this.activity    = activity
    this.userInfos   = userInfos
    this.firstName   = firstName
    this.sessions    = sessions
    this.performance = performance
    this.score       = score
    this.keyData     = keyData
  }

  getInfos() {
    return this.userInfos
  }
  getFirstName() {
    return this.firstName
  }

  getActivity() {
    return this.activity
  }

  getSessions() {
    return this.sessions
  }
  getPerformance(){
    return this.performance
  }
  getScore(){
    return this.score
  }
  getKeyData(){
    return this.keyData
  }
}
