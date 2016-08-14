const help = {
  save: (dataObj) => {
    const fetchSettings = {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify(dataObj)
    }
    const url = "https://bomberman-react.firebaseio.com/non-user-high-scores.json"
    return fetch(url, fetchSettings);
  },
  saveToUser: (dataObj, uid) => {
    const fetchSettings = {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify(dataObj)
    }
    const url = `https://bomberman-react.firebaseio.com/users/${uid}/high-scores.json`
    return fetch(url, fetchSettings);
  },

  showAll: () => {
    const url = "https://bomberman-react.firebaseio.com/high-scores.json?print=pretty"
    return fetch(url)
  }
}

module.exports = help
