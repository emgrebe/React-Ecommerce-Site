import Item1 from '../../images/wht-phara.jpg'
import Item2 from '../../images/wht-thomas.jpg'

const initState = {
  items: [
    {id:1, title:'Phara Necklace', desc: 'White-Plated Phara Necklace. Barely Worn.', price:45, img: Item1},
    {id:2, title:'Thomas Earrings', desc: 'White-Plated Thomas Earrings. Barely Worn.', price:20, img: Item2},
  ],
  addedItems: [],
  total: 0
}

const cartReducer = (state = initState, action) => {
  return state
}

export default cartReducer