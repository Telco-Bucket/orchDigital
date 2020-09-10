import React from "react";
import PropTypes from "prop-types";
import MaterialTitlePanel from "./material_title_panel";
import styles from "./Styles"


const SidebarContent = props => {
  const style = props.style
    ? { ...styles.sidebar, ...props.style }
    : styles.sidebar;

  const links = [];

//   for (let ind = 0; ind < 10; ind++) {
//     links.push(
//       <a key={ind} href="#" style={styles.sidebarLink}>
//         Mock menu item {ind}
//       </a>
//     );
//   }

  return (
    <MaterialTitlePanel title="Menu" style={style}>
      <div style={styles.content}>
        <a href="/" style={styles.sidebarLink}>
          Home
        </a>

        
        <div style={styles.divider} />
        <a href="/admin" style={styles.sidebarLink}>
         Contact List Table
        </a>

        <a href="/consultformtable" style={styles.sidebarLink}>
         Consultation List Table
        </a>

        <a href="/" style={styles.sidebarLink}>
       Registration List Table
        </a>
        <a href="/" style={styles.sidebarLink}>
         Post Articles
        </a>

        <a href="/" style={styles.sidebarLink}>
       Articles List
        </a>
        
        {links}
      </div>
    </MaterialTitlePanel>
  );
};

SidebarContent.propTypes = {
  style: PropTypes.object
};

export default SidebarContent;