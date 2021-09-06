import { HashLink } from 'react-router-hash-link';
import { ProSidebar, Menu, MenuItem, SidebarHeader } from 'react-pro-sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEuroSign, 
        faHandsHelping, 
        faInfoCircle, 
        faMoneyCheckAlt, 
        faPalette, 
        faPeopleCarry, 
        faStar } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from "react-i18next";

const Sidebar = () => {
  const { t } = useTranslation();

  return (
    <div className='Sidebar'>
      <ProSidebar>
        <SidebarHeader className="sidetitle">
          {t("regulation")}
        </SidebarHeader>
        <Menu iconShape="square">
          <MenuItem icon={<FontAwesomeIcon icon={faStar} />}>
            <HashLink smooth to="/apply#info">
              {t("info")}
            </HashLink>
          </MenuItem>
          <MenuItem icon={<FontAwesomeIcon icon={faPalette} />}>
            <HashLink smooth to="/apply#artwork">
              {t("artwork")}
            </HashLink>
          </MenuItem>
          <MenuItem icon={<FontAwesomeIcon icon={faMoneyCheckAlt} />}>
            <HashLink smooth to="/apply#applications">
              {t("applications")}
            </HashLink>
          </MenuItem>
          <MenuItem icon={<FontAwesomeIcon icon={faEuroSign} />}>
            <HashLink smooth to="/apply#sales">
              {t("sales")}
            </HashLink>
          </MenuItem>
          <MenuItem icon={<FontAwesomeIcon icon={faPeopleCarry} />}>
            <HashLink smooth to="/apply#insurances">
              {t("insurances")}
            </HashLink>
          </MenuItem>
          <MenuItem icon={<FontAwesomeIcon icon={faInfoCircle} />}>
            <HashLink smooth to="/apply#permanency">
              {t("permanency")}
            </HashLink>
          </MenuItem>
          <MenuItem icon={<FontAwesomeIcon icon={faHandsHelping} />}>
            <HashLink smooth to="/apply#others">
              {t("others")}
            </HashLink>
          </MenuItem>
        </Menu>
      </ProSidebar> 
    </div>
  );
};
    
export default Sidebar;