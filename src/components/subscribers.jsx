import React from 'react'
import {connect} from 'react-redux'

import {Link} from 'react-router'
import TileUserList from './tile-user-list'

const SubscribersHandler = (props) => {
  return (
    <div className='box'>
      <div className='box-header-timeline'>
        {props.boxHeader}
      </div>
      <div className='box-body'>
        <div><Link to={`/${props.username}`}>{props.username}</Link> › Subscribers</div>
        <TileUserList title='Subscribers' users={props.subscribers} />
      </div>
      <div className='box-footer'></div>
    </div>
  )
}

function selectState(state) {
  const boxHeader = state.boxHeader
  const username = state.router.params.userName
  const subscribers = state.usernameSubscribers

  return { boxHeader, username, subscribers }
}

export default connect(selectState)(SubscribersHandler)