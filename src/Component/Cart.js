import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeItem,addQuantity,subtractQuantity} from './Actions/Cart-actions'

class Cart extends Component{

    
    handleRemove = (id)=>{
        this.props.removeItem(id);
    }
    
    handleAddQuantity = (id)=>{
        this.props.addQuantity(id);
    }
    
    handleSubtractQuantity = (id)=>{
        this.props.subtractQuantity(id);
    }
    render(){
              
        let addedItems = this.props.items.length ?
            (  
                this.props.items.map(item=>{
                    return(
                        <li className="collection-item avatar" key={item.id}>
                        <div className="item-img"> 
                            <img src={item.img} alt={item.img} className=""/>
                        </div>
                    
                        <div className="item-descp">
                            <span className="title">{item.title}</span>
                            <p>{item.desc}</p>
                            <p><b>Price: {item.price}$</b></p> 
                            <p>
                                <b>Quantity: {item.quantity}</b> 
                            </p>                        
                            <div className="add-remove">
                                <div>Add/Remove</div>
                                <Link to="/cart"><i className="material-icons" onClick={()=>{this.handleAddQuantity(item.id)}}>&#8593;</i></Link>
                                <Link to="/cart"><i className="material-icons" onClick={()=>{this.handleSubtractQuantity(item.id)}}>&#8595;</i></Link>
                            </div>
                            <button className="waves-effect waves-light btn pink remove" onClick={()=>{this.handleRemove(item.id)}}>Remove</button>
                            <div> Total Amount: {this.props.total}</div>

                        </div>
                        
                    </li>
             
        )
      
    })
):

 (
    <p>There is Nothing in your Bag. Lets add some items</p>
 )
 return(
    <div className="container">
        <div className="cart">
            <h5>You have ordered:</h5>
            <ul className="collection">
                {addedItems}      
                                     
            </ul>     
        </div> 
          
    </div>
)
}
}
const mapStateToProps = (state)=>{
    return{
        items: state.addedItems,
        total: state.total,     
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        removeItem: (id)=>{dispatch(removeItem(id))},
        addQuantity: (id)=>{dispatch(addQuantity(id))},
        subtractQuantity: (id)=>{dispatch(subtractQuantity(id))}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Cart)