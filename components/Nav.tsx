import {
  AnchorButton,
  Navbar,
  NavbarGroup,
  NavbarHeading,
} from "@blueprintjs/core";
import Link from "next/link";
export function Nav() {
  return (
    <Navbar>
      <NavbarGroup>
        <NavbarHeading>
          <Link href="/">No Agenda FAQ</Link>
        </NavbarHeading>
        <AnchorButton minimal={true} icon="home" href="/">
          <NavbarHeading>No Agenda FAQ</NavbarHeading>
        </AnchorButton>
      </NavbarGroup>
    </Navbar>
  );
}
