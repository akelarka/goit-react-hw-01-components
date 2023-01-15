import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem/FriendListItem';

import { List} from './FriendList.styled';

const FriendList = ({ friends }) => {
    const elements = friends.map(({id, ...props}) => <FriendListItem key={id} {...props}/>)
    return (
    <List>
        {elements}
    </List>
    );
};

export default FriendList;

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            isOnline: PropTypes.bool.isRequired,
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
        })
    ),
};