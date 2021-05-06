import { HashLink } from 'react-router-hash-link';
import { ProSidebar, Menu, MenuItem, SidebarHeader } from 'react-pro-sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEuroSign, faHandsHelping, faInfoCircle, faMoneyCheckAlt, faPalette, faPeopleCarry, faStar } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
    
  return (
    <div className='Sidebar'>
      <ProSidebar>
        <SidebarHeader className="sidetitle">Règlements</SidebarHeader>
        <Menu iconShape="square">
          <MenuItem icon={<FontAwesomeIcon icon={faStar} />}>
            <HashLink smooth to="/apply#infos">
              Infos
            </HashLink>
          </MenuItem>
          <MenuItem icon={<FontAwesomeIcon icon={faPalette} />}>
            <HashLink smooth to="/apply#art">
              Oeuvres
            </HashLink>
          </MenuItem>
          <MenuItem icon={<FontAwesomeIcon icon={faMoneyCheckAlt} />}>
            <HashLink smooth to="/apply#apply">
              Candidatures
            </HashLink>
          </MenuItem>
          <MenuItem icon={<FontAwesomeIcon icon={faEuroSign} />}>
            <HashLink smooth to="/apply#sells">
              Ventes
            </HashLink>
          </MenuItem>
          <MenuItem icon={<FontAwesomeIcon icon={faPeopleCarry} />}>
            <HashLink smooth to="/apply#insurances">
              Assurances
            </HashLink>
          </MenuItem>
          <MenuItem icon={<FontAwesomeIcon icon={faInfoCircle} />}>
            <HashLink smooth to="/apply#permanences">
              Permanences
            </HashLink>
          </MenuItem>
          <MenuItem icon={<FontAwesomeIcon icon={faHandsHelping} />}>
            <HashLink smooth to="/apply#divers">
              Divers
            </HashLink>
          </MenuItem>
        </Menu>
      </ProSidebar> 
    </div>
  );
};
    
export default Sidebar;