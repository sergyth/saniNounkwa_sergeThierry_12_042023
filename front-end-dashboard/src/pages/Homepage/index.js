import { useState } from 'react'
import getUsers from '../../data/index'
import User from '../../Components/User'
import './homepage.css'

const Homepage = () => {
  const [users, setUsers] = useState(false)
  const [dataType, setDataType] = useState()
  const clickMockHandler = () => {
    setDataType('mock')
    const mockedUsers = getUsers('mock')
    setUsers(mockedUsers)
  }
  const renderListOfUserLinks = (users) => {
    return users.map((user) => (
      <User id={user.id} key={user.id} firstName={user.userInfos.firstName} />
    ))
  }

  return (
    <div>
      <div className="dataType-wrapper">
        <div className="choose-dataType-wrapper">
          <h1 className="choose-dataType">
            {!dataType
              ? 'Choisir le type de données'
              : "Choisir l' utilisateur"}
          </h1>
        </div>
        <div className="dataType-buttons">
          {!dataType && (
            <>
              <button className="dataType mock" onClick={clickMockHandler}>
                Mock
              </button>
              <button className="dataType api" onClick={() => getUsers('api')}>
                Api
              </button>
            </>
          )}
          {users && renderListOfUserLinks(users)}
        </div>
      </div>
    </div>
  )
}

export default Homepage
