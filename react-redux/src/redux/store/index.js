import { createStore } from 'redux'
import keranjangReducer from '../reducer/keranjangReducer.js'

const store = createStore(keranjangReducer)

export default store