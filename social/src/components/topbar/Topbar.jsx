import "./topbar.css";

import {
  SearchOutlined,
  Person,
  Chat,
  Notifications,
} from "@mui/icons-material";

export default function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">HTMLDEV</span>
      </div>

      <div className="topbarCenter">
        <div className="searchBar">
        <SearchOutlined className="searchIcon"  />
        <input
          className="searchInput"
          placeholder="Search for Friend or post"
        />
        </div>
        
      </div>

      
      <div className="topbarRight">
        <div className="topbarLink">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
          <span className="topbarLink">Friends</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">6</span>
          </div>
        </div>

        <img src="/assets/person/1.jpeg" alt="image" className="topbarImg" />
      </div>
    </div>
  );
}
