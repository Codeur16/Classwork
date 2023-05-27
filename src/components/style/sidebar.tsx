import React, { FunctionComponent, useState } from 'react';
import "../style/sidebar.css";
import logo from '../../pages/image/logobg.png'
import { Link } from 'react-router-dom';
// import "../js/sidebar.js"
const Sidebar: FunctionComponent = () => {
    const [show, setShow]=useState(true);
    const hadleShow=()=>{
        setShow(!show);
    }
return(
    <div>
        
        <div className={show? "sidebar":"sidebarclose"}>
            <div className="d-flex sidebar-header">
               <span><img width="60" height="50" src={ logo} alt=''/></span>
                <h3><span style={{color:"#22a2e3"}}>Class</span>work</h3>
                <span className='close'><img width="30" onClick={ hadleShow} onMouseMove={hadleShow} height="30"  src="https://img.icons8.com/fluency/48/double-left.png" alt="double-left"/></span>
                   

            </div>
            <div className='sidebar-content'>
                <Link to="/dashboard"> <div className='sidebar-item'>
                    <div className='sidebar-item-icon'><img width="35" height="35" src="https://img.icons8.com/color/48/dashboard-layout.png" alt="dashboard-layout"/></div>
                    <div className='sidebar-item-title'> Tableau de bord</div>
                </div></Link>
                <Link to="/cours"><div className='sidebar-item'>
                    <div className='sidebar-item-icon'><img width="35" height="35" src="https://img.icons8.com/3d-fluency/94/classroom.png" alt="classroom"/></div>
                    <div className='sidebar-item-title'> Cours</div>
                </div></Link>
                <Link to="/devoir"><div className='sidebar-item'>
                    <div className='sidebar-item-icon'><img width="35" height="35" src="https://img.icons8.com/glyph-neue/64/22a2e3/school.png" alt="school"/></div>
                    <div className='sidebar-item-title'> Devoirs</div>
                </div></Link>
                <Link to="/Evaluation"><div className='sidebar-item'>
                    <div className='sidebar-item-icon'><img width="35" height="30" src="https://img.icons8.com/ios/50/22a2e3/test-partial-passed.png" alt="test-partial-passed"/></div>
                    <div className='sidebar-item-title'> Evaluation</div>
                </div></Link>
                <Link to="/statistique"><div className='sidebar-item'>
                    <div className='sidebar-item-icon'><img width="35" height="35" src="https://img.icons8.com/fluency/48/combo-chart.png" alt="combo-chart"/></div>
                    <div className='sidebar-item-title'> Statistique</div>
                </div></Link>
                <Link to="/compte"><div className='sidebar-item'>
                    <div className='sidebar-item-icon'><img width="35" height="35" src="https://img.icons8.com/fluency/48/user-male-circle.png" alt="user-male-circle"/></div>
                    <div className='sidebar-item-title'> Compte</div>
                </div></Link>
                <Link to="/"><div className='sidebar-item'>
                    <div className='sidebar-item-icon'><img width="35" height="35" src="https://img.icons8.com/fluency/48/share--v2.png" alt="share--v2"/></div>
                    <div className='sidebar-item-title'> Partager</div>
                </div></Link>
                {/* <Link to="/"><div className='sidebar-item'>
                    <div className='sidebar-item-icon'><img width="35" height="35" src="https://img.icons8.com/fluency/48/settings.png" alt="settings"/></div>
                    <div className='sidebar-item-title'> Paramétre</div>
                </div></Link> */}
                {/* <div style={{height:"200px"}}>
                   
                </div> */}
                <div className='sidebar-item'>
                    {/* <div className='sidebar-item-icon'><img width="35" height="35" src="https://img.icons8.com/fluency/48/settings.png" alt="settings"/></div>
                    <div className='sidebar-item-title'> Paramétre</div> */}
                </div>
                <div className='sidebar-item'>
                   <Link to="/login"><div className=' de-flex signout'> 
                            <div className='sidebar-item-icon'><img width="30" height="30" src="https://img.icons8.com/fluency/48/exit.png" alt="exit"/></div>
                            <div className='sidebar-item-title1'> logout</div>
                    </div></Link>
                    <Link to="/help"><div className='d-flex help'>
                           <div className='sidebar-item-title2'> help</div>
                            <div className='sidebar-item-icon'><img width="30" height="30" src="https://img.icons8.com/cute-clipart/64/help.png" alt="help"/></div>
                            
                    </div></Link>
                </div>
                <div style={{height:"200px"}}>
                   
                </div>
            </div>
        </div>
    </div>
  );
};

export default Sidebar;







// //   const [isDarkMode, setIsDarkMode] = useState(false);
// //   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
// //   const toggleSidebar = () => {
// //     const sidebar = document.querySelector('nav');
// //     sidebar?.classList.toggle('close');
// //   };
// //   const toggleSidebar1 = () => {
// //     setIsSidebarOpen(!isSidebarOpen);
// //   };

// //   const openSidebar1 = () => {
// //     setIsSidebarOpen(true);
// //   };
// //   const openSidebar = () => {
// //     const sidebar = document.querySelector('nav');
// //     sidebar?.classList.remove('close');
// //   };

// //   const toggleDarkMode = () => {
// //     const body = document.querySelector('body');
// //     body?.classList.toggle('dark');

// //     if (body?.classList.contains('dark')) {
// //       setIsDarkMode(true);
// //     } else {
// //       setIsDarkMode(false);
// //     }
// //   };

// return (
//     <div>
    
//     <div className="offcanvas-end offcanvas-end w-25"  id="offcanvas-end" data-bs-keyboard="false" data-bs-backdrop="false">
//     <div className="offcanvas-header">
//         <h6 className="offcanvas-title d-none d-sm-block" id="offcanvas">Menu</h6>
//         <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
//     </div>
//     <div className="offcanvas-body px-0">
//         <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-start" id="menu">
//             <li className="nav-item">
//                 <a href="#" className="nav-link text-truncate">
//                     <i className="fs-5 bi-house"></i><span className="ms-1 d-none d-sm-inline">Home</span>
//                 </a>
//             </li>
//             <li>
//                 <a href="#submenu1" data-bs-toggle="collapse" className="nav-link text-truncate">
//                     <i className="fs-5 bi-speedometer2"></i><span className="ms-1 d-none d-sm-inline">Dashboard</span> </a>
//             </li>
//             <li>
//                 <a href="#" className="nav-link text-truncate">
//                     <i className="fs-5 bi-table"></i><span className="ms-1 d-none d-sm-inline">Orders</span></a>
//             </li>
//             <li className="dropdown">
//                 <a href="#" className="nav-link dropdown-toggle  text-truncate" id="dropdown" data-bs-toggle="dropdown" aria-expanded="false">
//                     <i className="fs-5 bi-bootstrap"></i><span className="ms-1 d-none d-sm-inline">Bootstrap</span>
//                 </a>
//                 <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdown">
//                     <li><a className="dropdown-item" href="#">New project...</a></li>
//                     <li><a className="dropdown-item" href="#">Settings</a></li>
//                     <li><a className="dropdown-item" href="#">Profile</a></li>
//                     <li>
//                         <hr className="dropdown-divider"/>
//                     </li>
//                     <li><a className="dropdown-item" href="#">Sign out</a></li>
//                 </ul>
//             </li>
//             <li>
//                 <a href="#" className="nav-link text-truncate">
//                     <i className="fs-5 bi-grid"></i><span className="ms-1 d-none d-sm-inline">Products</span></a>
//             </li>
//             <li>
//                 <a href="#" className="nav-link text-truncate">
//                     <i className="fs-5 bi-people"></i><span className="ms-1 d-none d-sm-inline">Customers</span> </a>
//             </li>
//         </ul>
//     </div>
// </div>

// {/* <nav classNameNameName={isSidebarOpen ? "sidebar open" : "sidebar close"}> */}
//       {/* <button classNameNameNameName="toggle" onClick={toggleSidebar}>
//         Toggle sidebar
//       </button>
//       <button classNameNameNameName="search-box" onClick={openSidebar}>
//         Open sidebar
//       </button>
//       <button classNameNameNameName="toggle-switch" onClick={toggleDarkMode}>
//         {isDarkMode ? 'Light mode' : 'Dark mode'}
//       </button> */}
//     </div>