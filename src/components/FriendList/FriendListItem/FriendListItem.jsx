import PropTypes from 'prop-types';
import { Item, Status, Name, AvatarImg } from '../FriendList.styled';

const FriendListItem = ({ isOnline, avatar, name }) => {
    return (
        <Item >
            <Status isOnline={isOnline} />
            <AvatarImg src={avatar} alt={name} width="48" />
            <Name>{name}</Name>
        </Item>
    );
};

export default FriendListItem;
