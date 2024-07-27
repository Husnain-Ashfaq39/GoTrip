import Link from "next/link";

import {
  homeItems,
  blogItems,
  pageItems,
  dashboardItems,
} from "../../data/mainMenuData";
import CategoriesMegaMenu from "./CategoriesMegaMenu";
import {
  isActiveParent,
  isActiveLink,
  isActiveParentChaild,
} from "../../utils/linkActiveChecker";
import { useRouter } from "next/router";

const MainMenu = ({ style = "" }) => {
  const router = useRouter();

  return (
    <nav className="menu js-navList">
      <ul className={`menu__nav ${style} -is-active`}>
        <li
          className={`${
            isActiveParentChaild(homeItems, router.asPath) ? "current" : ""
          } menu-item-has-children`}
        >
          <a href="/">
            <span className="mr-10">Home</span>
           
          </a>
          
        </li>
        {/* End home page menu */}

        <li className="menu-item-has-children -has-mega-menu">
          <a href="hotel/hotel-list-v4">
            <span className="mr-10">Find Places</span>
            
          </a>
         
        </li>
        {/* End categories menu items */}

        <li className={router.pathname === "/destinations" ? "current" : ""}>
          <Link href="/destinations">Destinations</Link>
        </li>
        {/* End Destinatinos single menu */}

        <li
          className={`${
            isActiveParentChaild(blogItems, router.asPath) ? "current" : ""
          } menu-item-has-children`}
        >
          <a href="/blog/blog-list-v2">
            <span className="mr-10">Blog</span>
           
          </a>
          
        </li>
        {/* End blogIems */}

        <li
          className={`${
            isActiveParentChaild(pageItems, router.asPath) ? "current" : ""
          } menu-item-has-children`}
        >
          <a href="/others-pages/about">
            <span className="mr-10">About us</span>
           
          </a>
         
        </li>
        {/* End pages items */}

        <li
          className={`${
            isActiveParentChaild(dashboardItems, router.asPath) ? "current" : ""
          } menu-item-has-children`}
        >
          <a href="/dashboard/db-dashboard">
            <span className="mr-10">Dashboard</span>
           
          </a>
          
        </li>

        <li className={router.pathname === "/contact" ? "current" : ""}>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default MainMenu;
