import { useNavigate } from 'react-router-dom';

import NavbarUi from './NavbarUi';

function Navbar() {
  const navigate = useNavigate();


  const gotoPage = (url) => {
    navigate(url);
  }

  return (
    <NavbarUi  gotoPage={gotoPage} />
  );
}

export default Navbar;