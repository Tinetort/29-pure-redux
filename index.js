import store from './redux/store.js'
import { clearAllTime, addCurrentTime } from './redux/actionCreators.js'

const addTime = document.getElementById('addTime')
addTime.addEventListener('click', () => store.dispatch(addCurrentTime()))

const timesList = document.getElementById('timesList')

store.subscribe(() => {
    const times = store.getState()
    timesList.innerHTML = ''
    times.forEach((time) => {
        let li = document.createElement('li')
        li.innerText = time
        timesList.appendChild(li)
    })
})

const clearTime = document.getElementById('clearTime')
clearTime.addEventListener('click', () => store.dispatch(clearAllTime()))

// const unsubscribe = store.subscribe(() =>
//     console.log(`Redux store has been changed! ${store.getState()}`)
// )

// store.dispatch({
//     type: 'ADD_CURRENT_TIME',
//     payload: '22:30:00',
// })
// unsubscribe()

// store.dispatch({
//     type: 'ADD_CURRENT_TIME',
//     payload: '22:40:00',
// })

// store.dispatch({
//     type: 'CLEAR_ALL_TIMES',
// })
