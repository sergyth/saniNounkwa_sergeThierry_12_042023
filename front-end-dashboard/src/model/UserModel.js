export default class UserModel {
  constructor(activity, userInfos, sessions, firstName, performance) {
    this.activity = activity
    this.userInfos = userInfos
    this.firstName = firstName
    this.sessions = sessions
    this.performance = performance
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
    return this.performace
  }
}
