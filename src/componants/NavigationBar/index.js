import { NavLink } from "react-router-dom";
import useStyle from "./style";

const NavigationBar = () => {
  const classes = useStyle();
  return (
    <div>
      <ul className={classes.unorderedListWrapper}>
        <NavLink to="/" className={classes.linkWrapper}>
          <li>Home</li>
        </NavLink>
        <NavLink to="/about" className={classes.linkWrapper}>
          <li>About</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default NavigationBar;
