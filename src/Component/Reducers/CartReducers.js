import Item1 from '../../Images/item1.jpg'
import Item2 from '../../Images/item2.jpg'
import Item3 from '../../Images/item3.jpg'
import Item4 from '../../Images/item4.jpg'
import Item5 from '../../Images/item5.jpg'
import Item6 from '../../Images/item6.jpg'
import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY } from '../Actions/Action-types/Cart-actions'


const initState = {
    items: [
        {id:1,title:'Winter body', desc: "Casual sneakers for men", price:110,img:Item1},
        {id:2,title:'Adidas', desc: "Sports shoes for Men, Running, Casual, Gymwear", price:80,img: Item2},
        {id:3,title:'Vans', desc: "xyz",price:120,img: Item3},
        {id:4,title:'White', desc: "abc", price:260,img:Item4},
        {id:5,title:'Cropped-sho', desc: "xxxxxx", price:160,img: Item5},
        {id:6,title:'Blues', desc: "yyyyyy",price:90,img: Item6}
    ],
    addedItems:[],
    total: 0

}
const cartReducer= (state = initState,action)=>{
   
    
    if(action.type === ADD_TO_CART){
          let addedItem = state.items.find(item=> item.id === action.id)
          
         let existed_item= state.addedItems.find(item=> action.id === item.id)
         if(existed_item)
         {
            addedItem.quantity += 1 
             return{
                ...state,
                 total: state.total + addedItem.price 
                  }
        }
         else{
            addedItem.quantity = 1;
        
            let newTotal = state.total + addedItem.price 
            
            return{
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total : newTotal
            }
            
        }
    }
    if(action.type === REMOVE_ITEM){
        let itemToRemove= state.addedItems.find(item=> action.id === item.id)
        let new_items = state.addedItems.filter(item=> action.id !== item.id)
        
        
        let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity )
        console.log(itemToRemove)
        return{
            ...state,
            addedItems: new_items,
            total: newTotal
        }
    }
    
    if(action.type=== ADD_QUANTITY){
        let addedItem = state.items.find(item=> item.id === action.id)
          addedItem.quantity += 1 
          let newTotal = state.total + addedItem.price
          return{
              ...state,
              total: newTotal
          }
    }
    if(action.type=== SUB_QUANTITY){  
        let addedItem = state.items.find(item=> item.id === action.id) 
      
        if(addedItem.quantity === 1){
            let new_items = state.addedItems.filter(item=>item.id !== action.id)
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                addedItems: new_items,
                total: newTotal
            }
        }
        else {
            addedItem.quantity -= 1
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                total: newTotal
            }
        }
        
    }

    return state
}

export default cartReducer;