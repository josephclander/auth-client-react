import { useParams } from 'react-router-dom';

const Account = () => {
  const { id } = useParams();

  return (
    <div className="account">
      <h1 className="account__header">Account Page: {id}</h1>
    </div>
  );
};

export default Account;
