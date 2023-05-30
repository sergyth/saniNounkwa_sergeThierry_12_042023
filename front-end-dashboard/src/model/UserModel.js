export default class UserModel {
  constructor(activity, userInfos, sessions, firstName) {
    this.activity = activity
    this.userInfos = userInfos
    this.firstName = firstName
    this.sessions = sessions
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
}
