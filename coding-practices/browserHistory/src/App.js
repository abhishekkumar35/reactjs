import './App.css'
import {useState} from 'react'

// These are the list used in the application. You can move them to any component needed.
const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]
const filterData = text => {
  const filterD = initialHistoryList.filter(historyItem =>
    historyItem.title.toLowerCase().includes(text.toLowerCase()),
  )
  return filterD
}
// Replace your code here
// eslint-disable-next-line arrow-body-style
const App = () => {
  const [inputValue, setInputValue] = useState('')
  const [filteredHistoryList, setFilteredHistoryList] = useState([
    ...initialHistoryList,
  ])

  const deleteItemHandler = item => {
    const filtered = initialHistoryList.filter(
      everyItem => item.title !== everyItem.title,
    )
    const lenx = initialHistoryList.length
    initialHistoryList.splice(0, lenx, ...filtered)
    setFilteredHistoryList([...initialHistoryList])
  }
  const handleChange = e => {
    setInputValue(e.target.value)
    const data = filterData(e.target.value)
    setFilteredHistoryList([...data])
    console.log(...data)
  }
  return (
    <div className="app_card">
      <div>
        <h1 className="app_card__title">Browser History</h1>
      </div>
      <div className="app_card__searchbar">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
          />
        </div>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/search-img.png"
            alt="search"
          />
        </div>
        <div>
          <input type="search" value={inputValue} onChange={handleChange} />
        </div>
      </div>
      <ul>
        {filteredHistoryList.length ? (
          filteredHistoryList.map(item => (
            <li key={Math.random()} className="app_history_card">
              <div>
                <p>{item.timeAccessed}</p>
              </div>
              <div className="app_history_card__sub_flex_row">
                <div>
                  <img src={item.logoUrl} alt="domain logo" />
                </div>
                <div>
                  <div>
                    <p>{item.title}</p>
                  </div>
                  <div>
                    <p>{item.domainUrl}</p>
                  </div>
                </div>
                <div>
                  <button
                    type="button"
                    data-testid="delete"
                    onClick={() => deleteItemHandler(item)}
                  >
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
                      alt="delete"
                    />
                  </button>
                </div>
              </div>
            </li>
          ))
        ) : (
          <p>There is no history to show</p>
        )}
      </ul>
    </div>
  )
}
export default App
