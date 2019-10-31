import Item1 from '../../images/wht-phara.jpg'
import Item2 from '../../images/wht-thomas.jpg'
import Item3 from '../../images/gld-augusta.jpg'
import Item4 from '../../images/gld-brett.jpg'
import Item5 from '../../images/gld-brettr.jpg'
import Item6 from '../../images/gld-atticus.jpg'
import Item7 from '../../images/gld-denise.jpg'
import Item8 from '../../images/gld-didi.jpg'
import Item9 from '../../images/gld-juniper.jpg'
import Item10 from '../../images/gld-kristen.jpg'
import Item11 from '../../images/gld-kayla.jpg'
import Item12 from '../../images/gld-reagan.jpg'
import Item13 from '../../images/gld-supak.jpg'
import Item14 from '../../images/gnmt-darrell.jpg'
import Item15 from '../../images/gnmt-alex.jpg'
import Item16 from '../../images/gnmt-elora.jpg'
import Item17 from '../../images/gnmt-malia.jpg'
import Item18 from '../../images/rsg-allie.jpg'
import Item19 from '../../images/rsg-corza.jpg'
import Item20 from '../../images/rsg-deena.jpg'
import Item21 from '../../images/rsg-hoop.jpg'
import Item22 from '../../images/rsg-kirsten.jpg'
import Item23 from '../../images/rsg-lindsey.jpg'
import Item24 from '../../images/rsg-joel.jpg'
import Item25 from '../../images/rsg-pryded.jpg'
import Item26 from '../../images/rhod-crosby.jpg'
import Item27 from '../../images/rhod-leanor.jpg'
import Item28 from '../../images/rhod-oscar.jpg'
import Item29 from '../../images/rhod-caleb.jpg'
import Item30 from '../../images/rhod-calista.jpg'
import Item31 from '../../images/rhod-angela.jpg'
import { ADD_TO_CART, REMOVE_ITEM, SUB_QUANTITY, ADD_QUANTITY } from '../actions/action-types/cart-actions'

const initState = {
  items: [
    {id:1, title:'Phara Necklace', desc: 'Matte-White Long Necklace. Barely Worn.', price:45, img: Item1},
    {id:2, title:'Thomas Earrings', desc: 'Matte-White Medium-sized Dangle Earrings. Barely Worn.', price:20, img: Item2},
    {id:3, title:'Augusta Necklace', desc: 'Gold and Aqua-Howlite Long Frilly Necklace. Barely Worn.', price:30, img: Item3},
    {id:4, title:'Brett Necklace', desc: 'Gold and Emerald Small Adjustable Necklace. Barely Worn.', price:20, img: Item4},
    {id:5, title:'Brett Necklace', desc: 'Gold and Berry-Glass Small Adjustable Necklace. Barely Worn.', price:20, img: Item5},
    {id:6, title:'Atticus Earrings', desc: 'Gold and Emerald Medium Stud Earrings. Never Worn.', price:20, img: Item6},
    {id:7, title:'Denise Earrings', desc: 'Gold and Aqua-Howlite Medium/Large Detachable Dangle Earrings (3 tassles). Slightly Heavy. Barely Worn.', price:40, img: Item7},
    {id:8, title:'Didi Earrings', desc: 'Gold and Ivory-Mother-Of-Pearl Medium Drop Earrings. Slightly Heavy. Barely Worn.', price:50, img: Item8},
    {id:9, title:'Juniper Earrings', desc: 'Gold and Emerald Small Drop Earrings. Never Worn.', price:15, img: Item9},
    {id:10, title:'Kristen Earrings', desc: 'Gold and Pink-Agate Medium Frilly Drop Earrings. Barely Worn.', price:35, img: Item10},
    {id:11, title:'Kayla Ring', desc: 'Gold and Aqua-Howlite Medium Adjustable Ring. Size small/medium. Never Worn.', price:20, img: Item11},
    {id:12, title:'Reagan Ring', desc: 'Gold Large Ring. Size 7. Barely Worn.', price:20, img: Item12},
    {id:13, title:'Supak Bracelet Set', desc: 'Gold and Aqua-Howlite Beaded Bracelet Set(5). Never Worn.', price:20, img: Item13},
    {id:14, title:'Darrell Necklace', desc: 'Gunmetal Abalone, Dichroic-Glass, and Clear-Crystal Long Adjustable Necklace. Barely Worn. ', price:55, img: Item14},
    {id:15, title:'Alex Earrings', desc: 'Gunmetal and Abalone Medium Drop Earrings. Barely Worn.', price:30, img: Item15},
    {id:16, title:'Elora Earrings', desc: 'Gunmetal and Sky-Blue-Illusion Medium/Large Hoop Earrings. Barely Worn.', price:35, img: Item16},
    {id:17, title:'Malia Bracelet Set', desc: 'Navy-Gunmetal and Dark-Blue Large Bangle Bracelet Set(3). Barely Worn. ', price:20, img: Item17},
    {id:18, title:'Allie Earrings', desc: 'RoseGold and Ivory-Mother-Of-Pearl Medium/Large Drop Earrings. Barely Worn. ', price:50, img: Item18},
    {id:19, title:'Corza Earrings', desc: 'RoseGold and Clear-Crystal Medium Special Occasion Drop Earrings. Barely Worn. ', price:30, img: Item19},
    {id:20, title:'Deena Earrings', desc: 'RoseGold and Abalone Small Drop Earrings. Barely Worn. ', price:30, img: Item20},
    {id:21, title:'Hoop Earrings', desc: 'RoseGold Medium Hammered Hoop Earrings. Never Worn. ', price:15, img: Item21},
    {id:22, title:'Kirsten Earrings', desc: 'RoseGold and Ivory-Mother-Of-Pearl Medium Drop Earrings. Slightly Heavy. Never Worn. ', price:25, img: Item22},
    {id:23, title:'Lindsey Earrings', desc: 'RoseGold Medium Hoop Earrings. Barely Worn. ', price:20, img: Item23},
    {id:24, title:'Joel Ring', desc: 'RoseGold Small Ring. Size 7. Barely Worn. ', price:5, img: Item24},
    {id:25, title:'Pryde Ring', desc: 'RoseGold and Irridescent-Drusy Small/Medium Adjustable Ring. Barely Worn. ', price:25, img: Item25},
    {id:26, title:'Crosby Necklace', desc: 'Silver Small Evil-Eye Pendant. Barely Worn.', price:20, img: Item26},
    {id:27, title:'Leanor Necklace', desc: 'Silver and Multi-Color-Drusy Small/Medium Rectangle Pendant. Barely Worn.', price:25, img: Item27},
    {id:28, title:'Oscar Necklace', desc: 'Silver and Amethyst Large Adjustable Statement Necklace. Barely Worn.', price:65, img: Item28},
    {id:29, title:'Caleb Earrings', desc: 'Silver Small Evil-Eye Stud Earrings. Barely Worn.', price:20, img: Item29},
    {id:30, title:'Calista Earrings', desc: 'Silver and Amethyst Medium Drop Earrings. Barely Worn.', price:25, img: Item30},
    {id:31, title:'Angela Bracelet', desc: 'Silver Dainty Adjustable Bracelet. Barely Worn.', price:10, img: Item31},
  ],
  addedItems: [],
  total: 0
}

const cartReducer = (state = initState, action) => {
  if(action.type === ADD_TO_CART) {
    let addedItem = state.items.find(item => item.id === action.id)
    let existed_item = state.addedItems.find(item => action.id === item.id)
    if(existed_item) {
      addedItem.quantity += 1
      return {
        ...state,
        total: state.total + addedItem.price
      }
    } else {
      addedItem.quantity = 1
      let newTotal = state.total + addedItem.price
      return {
        ...state, 
        addedItems: [...state.addedItems, addedItem],
        total: newTotal
      }
    }
  }
  if(action.type === REMOVE_ITEM) {
    let itemToRemove = state.addedItems.find(item => action.id === item.id)
    let new_items = state.addedItems.filter(item => action.id !== item.id)
    let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity)
    console.log(itemToRemove)
    return {
      ...state,
      addedItems: new_items,
      total: newTotal
    }
  }
  if(action.type === ADD_QUANTITY) {
    let addedItem = state.items.find(item => item.id === action.id)
    addedItem.quantity += 1
    let newTotal = state.total + addedItem.price
    return {
      ...state,
      total: newTotal
    }
  }
  if(action.type === SUB_QUANTITY) {
    let addedItem = state.items.find(item => item.id === action.id)
    if(addedItem.quantity === 1) {
      let new_items = state.addedItems.filter(item => item.id !== action.id)
      let newTotal = state.total - addedItem.price
      return {
        ...state,
        addedItems: new_items,
        total: newTotal
      }
    } else {
      addedItem.quantity -= 1
      let newTotal = state.total - addedItem.price
      return {
        ...state,
        total: newTotal
      }
    }
  }
  return state
}

export default cartReducer