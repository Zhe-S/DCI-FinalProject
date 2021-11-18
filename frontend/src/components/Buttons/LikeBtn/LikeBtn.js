import React, { Component } from 'react'
import styles from './LikeBtn.module.scss'


export class LikeBtn extends Component {
    
    state={
        count:0
    }
    incrementMe = () => {
        let newCount = this.state.count + 1
        this.setState({
          count: newCount
        })
      }
   
    
    render() {
        return (
            <div>
             {this.state.count===0?
         <div onClick={this.incrementMe}><i className={['far fa-thumbs-up fa-2x',styles.LikeBtn].join(' ')}></i>  {this.state.count}</div>
             :<div onClick={this.incrementMe}><i className={['far fa-thumbs-up fa-2x',styles.Liked].join(' ')}></i>  {this.state.count}</div>}
            </div>
        )
    }
}

export default LikeBtn
