import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from '../data/data'

const getUserMainActivity = (userId) => {
  return USER_ACTIVITY.find((user) => user.userId.toString() === userId)
}
const getUserMainData = (userId) => {
  return USER_MAIN_DATA.find((user) => user.id.toString() === userId)
}
const getUserMainSessions = (userId) => {
  return USER_AVERAGE_SESSIONS.find((user) => user.userId.toString()=== userId)
}
const getUserMainPerformance = (userId) => {
  return USER_PERFORMANCE.find((user) => user.userId.toString() === userId)
}

export { getUserMainActivity, getUserMainData, getUserMainPerformance, getUserMainSessions }
