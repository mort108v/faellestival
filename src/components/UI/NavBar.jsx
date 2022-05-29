import React, { useContext } from "react";
import { LoginContext } from "../../Contexts/LoginContext.js";
import Btn from "./Btn.jsx";
import NavBrand from "./NavBrand.jsx";
import BtnGrid from "../UI/BtnGrid.jsx";

function NavBar(props) {
  const { isLogin, setIsLogin } = useContext(LoginContext);

  function goToLineup() {
    props.setShowLineup(true);
    props.setShowTicketsPage(false);
    props.setShowLandPage(false);
  }
  function goToFestApp() {
    setIsLogin(true);
  }

  function openBurger() {
    console.log("openburger");
    props.showBurgerMenu
      ? props.setShowBurgerMenu(false)
      : props.setShowBurgerMenu(true);
  }
  function goToTicketsPage() {
    props.setShowLineup(false);
    props.setShowTicketsPage(true);
    props.setShowLandPage(false);
    console.log("gototickets");
  }
  const user = { name: "Melania" };

  return (
    <nav className={props.className}>
      {props.showLandPage || props.showFestLandPage ? (
        []
      ) : (
        <NavBrand
          {...props}
          logoClassName="navLogo"
          className="navTitle"
          content="Faellestival"
        />
      )}

      {props.showTicketsPage && (
        <BtnGrid
          btn1action={goToLineup}
          btn1content="Line Up"
          btn1className="SecBtn"
          btn2action={goToFestApp}
          btn2content="Fest App"
          btn2className="primBtn"
          btn3content="☰"
          btn3action={openBurger}
          btn3className="burgerBtn"
        />
      )}
      {props.showLineup && (
        <BtnGrid
          btn1action={goToFestApp}
          btn1content="Fest App"
          btn1className="SecBtn"
          btn2action={goToTicketsPage}
          btn2content="Tickets"
          btn2className="primBtn"
          btn3content="☰"
          btn3action={openBurger}
          btn3className="burgerBtn"
        />
      )}
      {props.showLandPage && (
        <Btn action={goToFestApp} content="Fest App" className="primBtn" />
      )}
      {props.showLandPage && (
        <Btn content="☰" action={openBurger} className="burgerBtn" />
      )}
      {isLogin && (
        <BtnGrid
          btn1action={openBurger}
          btn1content={user.name}
          btn1className="name"
          btn2content="☰"
          btn2action={openBurger}
          btn2className="burgerBtn"
        />
      )}
    </nav>
  );
}

export default NavBar;
