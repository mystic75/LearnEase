import { useContext } from 'react';
import { UserContext } from '../../context/userContext';

export default function Dashboard() {
  const { user } = useContext(UserContext);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <h1>DASHBOARD</h1>
      {!!user && <h2>Hi {user.name}!</h2>}
    </div>
  );
}
