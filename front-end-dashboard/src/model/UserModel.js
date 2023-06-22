export default class UserModel {
  constructor(activity, userInfos, sessions, firstName, performance, score) {
    this.activity    = activity
    this.userInfos   = userInfos
    this.firstName   = firstName
    this.sessions    = sessions
    this.performance = performance
    this.score       = score
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
}
