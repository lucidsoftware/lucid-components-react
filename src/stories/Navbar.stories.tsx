import React from 'react';
import { Story, Meta } from '@storybook/react';

import { default as NavbarComponent } from '../components/navbar/navbar';

export default {
  title: 'Components/Navbar',
  component: NavbarComponent,
  subcomponents: {
    NavbarItem: NavbarComponent.Item,
    NavbarBrand: NavbarComponent.Brand,
    NavbarBorder: NavbarComponent.Border,
    NavbarDropdown: NavbarComponent.Dropdown,
    NavbarDropdownContainer: NavbarComponent.DropdownContainer,
    NavbarContainer: NavbarComponent.Container,
    NavbarInnerContainer: NavbarComponent.InnerContainer,
    NavbarToggle: NavbarComponent.Toggle,
    NavbarDropdownGroup: NavbarComponent.DropdownGroup
  }
} as Meta;

const NavbarTemplate: Story = args => {
  return <NavbarComponent {...args}>{args.children}</NavbarComponent>;
};

export const Navbar = NavbarTemplate.bind({});
Navbar.args = {
  titleProps: {
    children: 'Navbar Title'
  }
};
