import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux'; Comment dahil sa hooks
/* Need iimport ang actions para sa ating mapDispatchToProps */
import { setUserInfo } from './redux/actions/users';


const App = props => {
    const users = useSelector(state => state.users);
    const dispatch = useDispatch();

    // const { name } = props.users.info
    const handleOnClick = (type) => {
        if (type === 'name') {
            // props.setUserInfo({ name: 'bossArjay' })
            dispatch(setUserInfo({ name: 'bossArjay' }));
        } else if (type === 'age') {
            // props.setUserInfo({ age: 21 })
            dispatch(setUserInfo({ age: 21 }));
        } else {
            // props.setUserInfo({ gender: 'Male' })
            dispatch(setUserInfo({ gender: 'Male' }));
        }
    }
    console.log(users)
    return (

        <div>
            <button onClick={() => handleOnClick('name')}>Add Name</button>
            <button onClick={() => handleOnClick('age')}>Add Age</button>
            <button onClick={() => handleOnClick('gender')}>Add Gender</button>
        </div>
    )
}
// const mapStateToProps = state => { Comment dahil sa hooks
//     return {
//         users: state.users
//     }
// }

//Eto naman yung nag aupdate ng data natin sa actions at nag babato Comment dahil sa hooks
// const mapDispatchToProps = dispatch => {
//     return bindActionCreators({
//         setUserInfo: setUserInfo
//     }, dispatch)
// }
// export default connect(mapStateToProps, mapDispatchToProps)(App)
export default App