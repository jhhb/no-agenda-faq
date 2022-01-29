import {
  Navbar,
  NavbarDivider,
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
        <NavbarDivider />
        <NavbarGroup>
          <Link href="/resources">Community Resources</Link>
        </NavbarGroup>
      </NavbarGroup>
    </Navbar>
  );
}
