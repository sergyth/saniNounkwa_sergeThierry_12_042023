import { useState} from 'react'
import {USER_MAIN_DATA} from '../../data/data.js'
import User from '../../Components/User'
import './selectDataType.css'
import { Link } from 'react-router-dom';
import { useDataSourceContext } from '../../contexts/DataSourceContext';

const SelectDataType= () => {
  const [users, setUsers] = useState(false)
  console.log(useDataSourceContext())
  const { useLocalData, toggleDataSource } = useDataSourceContext();

  const clickMockHandler = () => {
    toggleDataSource(true)
    const mockedUsers = USER_MAIN_DATA
    setUsers(mockedUsers)
  }
console.log(useLocalData)
  const clickApiHandler = () => {
  toggleDataSource(false)
    return(
      <>
          <Link to="http://localhost:3000/user/12">Karl</Link>
          <Link to="http://localhost:3000/user/18">Cecilia</Link>
      </>
    )
  }
  const renderListOfUserLinks = (users) => {
    return users.map((user) => (
      <User id={user.id} key={user.id} firstName={user.userInfos.firstName} />
    ))
  }
  return (
      <div className="dataType-wrapper  red ">
        <div className="label-wrapper ">
          <h1 className="label">
            {!useLocalData
              ? 'Choisir le type de données:'
              : "Choisir l' utilisateur:"}
          </h1>
        </div>
        <div className="dataType-buttons">
          {!useLocalData && (
              <>
                <button className="dataType-button mock" onClick={clickMockHandler}>
                  Mock
                </button>
                <button className="dataType-button api" onClick={clickApiHandler}>
                  Api
                </button>
              </>
          )}
          {users && renderListOfUserLinks(users)}
        </div>
      </div>
  )

}

export default SelectDataType
