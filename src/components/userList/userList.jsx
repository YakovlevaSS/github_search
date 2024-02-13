import * as S from './styles'
import { useNavigate } from "react-router";
import UserItem from '../userItem/UserItem';
import { date } from '../utitits/mock';

const UserList = () => {
  const navigate = useNavigate();
  const users = date

function handleNavigate () {
        navigate(`/users/${user.owner[login]}`);
}

  return (
    <S.List>
      {users?.map((user) => (
        <UserItem
          key={user.id}
          user={user}
          onClick={handleNavigate}
        />
      ))}
    </S.List>
  );
};

export default UserList ;