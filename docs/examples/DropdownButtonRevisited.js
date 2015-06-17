/* eslint react/jsx-no-undef: 0 */

const handleSelect = (event, selectEvent) => {
  console.log(`SELECTED ${selectEvent.eventKey}`);
};

class CustomMenu extends React.Component {
  render() {
    return (
      <ul className='dropdown-menu' style={{backgroundColor: 'red'}}>
        {this.props.children}
      </ul>
    );
  }
}

const buttonsInstance = (
  <div>
    <input placeholder='Before' type='text' />
    <ButtonToolbar>
      <DropdownButtonRevisited onSelect={handleSelect} id='dropdown-1'>
        <DropdownButtonRevisited.Toggle>Custom Title</DropdownButtonRevisited.Toggle>
        <MenuItemRevisited eventKey='1'>Action</MenuItemRevisited>
        <MenuItemRevisited header>Some Header</MenuItemRevisited>
        <MenuItemRevisited eventKey='2'>Another action</MenuItemRevisited>
        <MenuItemRevisited eventKey='3'>Something else here</MenuItemRevisited>
        <MenuItemRevisited divider />
        <MenuItemRevisited eventKey='4'>Separated link</MenuItemRevisited>
      </DropdownButtonRevisited>
      <DropdownButtonRevisited id='dropdown-2'>
        <DropdownButtonRevisited.Toggle>Custom Title</DropdownButtonRevisited.Toggle>
        <CustomMenu>
          <div>hello</div>
        </CustomMenu>
      </DropdownButtonRevisited>
      <SplitButtonRevisited onSelect={handleSelect} id='split-dropdown-1'>
        <SplitButtonRevisited.Toggle title='SR-Only Title' />
        <MenuItemRevisited eventKey='1'>Action</MenuItemRevisited>
        <MenuItemRevisited header>Some Header</MenuItemRevisited>
        <MenuItemRevisited eventKey='2'>Another action</MenuItemRevisited>
        <MenuItemRevisited eventKey='3'>Something else here</MenuItemRevisited>
        <MenuItemRevisited divider />
        <MenuItemRevisited eventKey='4'>Separated link</MenuItemRevisited>
      </SplitButtonRevisited>
    </ButtonToolbar>
    <Navbar>
      <Nav>
        <NavItem>Item 1</NavItem>
        <NavDropdown id='nav-dropdown-1'>
          <NavDropdown.Toggle>Custom Title</NavDropdown.Toggle>
          <MenuItemRevisited eventKey='1'>Action</MenuItemRevisited>
          <MenuItemRevisited header>Some Header</MenuItemRevisited>
          <MenuItemRevisited eventKey='2'>Another action</MenuItemRevisited>
        </NavDropdown>
      </Nav>
    </Navbar>
    <input placeholder='After' type='text' />
  </div>
);

React.render(buttonsInstance, mountNode);
