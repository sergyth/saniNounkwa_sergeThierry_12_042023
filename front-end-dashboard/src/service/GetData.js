
const getData = (userId, useLocalData) => {

  if (useLocalData) {
    const data = require('../data/data.js')
    const userMainData = data.USER_MAIN_DATA.find(user => user.id.toString() === userId);
    const userActivity = data.USER_ACTIVITY.find((user) => user.userId === userId)
    const userSessions = data.USER_AVERAGE_SESSIONS.find((user) => user.userId.toString() === userId)
    const userPerformance = data.USER_PERFORMANCE.find((user) => user.userId.toString() === userId)
    
    return { userMainData, userActivity, userSessions, userPerformance }
  } else if(!useLocalData) {
    // const userId = window.location.href.split('/').at(-1)
    return Promise.all([
      fetch(`http://localhost:3000/user/${userId}`).then((response) =>
        response.json()
      ),
      fetch(`http://localhost:3000/user/${userId}/activity`).then((response) =>
        response.json()
      ),
      fetch(`http://localhost:3000/user/${userId}/average-sessions`).then((response) =>
        response.json()
      ),
      fetch(`http://localhost:3000/user/${userId}/performance`).then((response) =>
        response.json()
      ),
    ])
      .then(([userMainData, userActivity, userSessions, userPerformance ]) => {
      
        return { userMainData, userActivity, userSessions, userPerformance  }
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération des données :', error)
        throw error 
      })
  }
}
export { getData }
