// import './App.css'
import Card from './components/Card'
import AddPasswordForm from './components/AddPasswordForm'
import ViewPassword from './components/ViewPassword'
import style from './App.module.css'

const App = () => (
  <div>
    <Card className={style.bgLightBlue}>
      <h2 className={style.bgLightSkyBlue}>Password Manager</h2>
      <Card className={style.bgLightPurple}>
        <Card className={style.bgLightGrey}>
          <AddPasswordForm />
        </Card>
        <div>
          <img src="url" alt="img" />
        </div>
      </Card>
      <Card className={style.bgLightSkyBlue}>
        <ViewPassword />
      </Card>
    </Card>
  </div>
)

export default App
