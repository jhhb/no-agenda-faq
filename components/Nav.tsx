import { Navbar, NavbarGroup, NavbarHeading } from "@blueprintjs/core";

export const HOME_HEADING_ID = "no-agenda-faq-heading";

export function Nav() {
  return (
    <Navbar>
      <NavbarGroup>
        <NavbarHeading id={HOME_HEADING_ID}>No Agenda FAQ</NavbarHeading>
      </NavbarGroup>
    </Navbar>
  );
}
