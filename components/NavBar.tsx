import { ActiveLink } from "./ActiveLink";
import styles from "./NavBar.module.css";

const menuItems = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "About",
    href: "/about",
  },
  // {
  //   text: "Contact",
  //   href: "/contact",
  // },
  {
    text: "Pricing",
    href: "/pricing",
  },
];

export const NavBar = () => {
  return (
    <nav className={styles.menu}>
      {/* <ActiveLink href='/' text='Home' />
      <ActiveLink href='/about' text='About' /> */}
      {menuItems.map(({ href, text }) => (
        <ActiveLink href={href} text={text} key={href} />
      ))}
    </nav>
  );
};
