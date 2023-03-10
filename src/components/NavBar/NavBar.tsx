import React, { FC, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import Logo from '../../images/logo.jpg';
import styles from './NavBar.module.css';
import { FaShoppingCart, FaBars, FaSearch } from "react-icons/fa";

export const NavBar: FC = () => {
  const [isOpenList, setIsOpenList] = useState<boolean>(false);
  const [isOpenSearch, setIsOpenSearch] = useState<boolean>(false);
  const [toggle, setToggle] = useState<boolean>(false);
  const isMobileSearch = useMediaQuery({ maxWidth: 479 });
  const isMobileMenu = useMediaQuery({ maxWidth: 960 });

  return (
    <nav className={styles.navBar}>
      <a href='#'>
        <img src={Logo} alt='' className={styles.navBar_img} />
      </a>
      {isMobileSearch ? (
        <button className={styles.navBar_searchBtn} id={styles.navBtn} onClick={() => {setIsOpenSearch(!isOpenSearch)
          setIsOpenList(false)}}>
          <FaSearch />
        </button>
      ) : (
        <form /*onSubmit={handleSubmit}*/ className={styles.navBar_searchBar}>
          <input
            className={styles.navBar_inputText}
            type='text'
            placeholder='Find your favorite book'
            //   value={searchTerm}
            //   onChange={handleChange}
          />
          <button id={styles.navBtn} type='submit' aria-label='Search'>
            <FaSearch />
          </button>
        </form>
      )}
      {isOpenSearch && isMobileSearch ? (
        <form /*onSubmit={handleSubmit}*/ className={styles.navBar_searchBarMobile}>
          <input
            className={styles.navBar_inputTextMobile}
            type='text'
            placeholder='Find your favorite book'
            //   value={searchTerm}
            //   onChange={handleChange}
          />
          <button id={styles.navBtn} type='submit' aria-label='Search'>
            <FaSearch />
          </button>
        </form>
      ) : (
        ''
      )}
      {isMobileMenu ? (
        <button className={styles.navBar_menuBtn} id={styles.navBtn} onClick={() => {setIsOpenList(!isOpenList); setIsOpenSearch(false)}}>
          <FaBars />
        </button>
      ) : (
        <ul className={styles.navBar_list}>
          <li>
            <a href='#' tabIndex={0} aria-label='Home'>
              Home
            </a>
          </li>
          <li>
            <a href='#' tabIndex={0} aria-label='Categories'>
              Categories
            </a>
          </li>
          <li>
            <a href='#' tabIndex={0} aria-label='Wishlist'>
              Wishlist
            </a>
          </li>
          <div className={styles.navBar_toggleListDiv}>
              <li    className={styles.navBar_toggleButton} onClick={() => setToggle(!toggle)}>

              Account
           </li>
            {toggle && (
              <ul className={styles.navBar_toggleList}>
                <li>
                  <a href='#' aria-label='Profile'>
                    Profile
                  </a>
                </li>
                <li>
                  <a href='#' aria-label='Sign Up'>
                    Sign Up
                  </a>
                </li>
                <li>
                  <a href='#' aria-label='Login'>
                    Login
                  </a>
                </li>
              </ul>
            )}
          </div>
        
         
          <li>
            <a href='#' tabIndex={0} aria-label='ShoppingCar'>
              <FaShoppingCart />
            </a>
          </li>
        </ul>
      )}{' '}
      {isOpenList && isMobileMenu ? (
        <ul className={styles.navBar_listMobile}>
          <li>
            <a href='#' tabIndex={0} aria-label='Home'>
              Home
            </a>
          </li>
          <li>
            <a href='#' tabIndex={0} aria-label='Categories'>
              Categories
            </a>
          </li>
          <li>
            <a href='#' tabIndex={0} aria-label='Wishlist'>
              Wishlist
            </a>
          </li>
          <div className={styles.navBar_toggleListDiv}>
            <li  className={styles.navBar_toggleButton} onClick={() => setToggle(!toggle)}>
           
             My Account
              
            </li>
              
           
            {toggle && (
              <ul className={styles.navBar_toggleListMobile}>
                <li>
                  <a href='#' aria-label='Profile'>
                    Profile
                  </a>
                </li>
                <li>
                  <a href='#' aria-label='Sign Up'>
                    Sign Up
                  </a>
                </li>
                <li>
                  <a href='#' aria-label='Login'>
                    Login
                  </a>
                </li>
              </ul>
            )}
          </div>
          
          
          <li>
            <a href='#' tabIndex={0} aria-label='ShoppingCar'>
              <FaShoppingCart style={{height:'1rem'}} />
            </a>
          </li>
        </ul>
      ) : (
        ''
      )}
    </nav>
  );
};
