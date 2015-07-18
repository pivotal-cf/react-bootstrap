/* eslint react/jsx-no-undef: 0 */

const handleSelect = (event, selectEvent) => {
  console.log(`SELECTED ${selectEvent.eventKey}`);
};

const handleClick = (event, selectEvent) => {
  console.log('CICKED SplitButton');
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
        <MenuItem eventKey='1'>Action</MenuItem>
        <MenuItem header>Some Header</MenuItem>
        <MenuItem eventKey='2'>Another action</MenuItem>
        <MenuItem eventKey='3'>Something else here</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey='4'>Separated link</MenuItem>
      </DropdownButtonRevisited>
      <DropdownButtonRevisited id='dropdown-2'>
        <DropdownButtonRevisited.Toggle>Custom Title</DropdownButtonRevisited.Toggle>
        <CustomMenu>
          <div>hello</div>
        </CustomMenu>
      </DropdownButtonRevisited>
      <SplitButton title='Split Title Prop' onClick={handleClick} onSelect={handleSelect} id='split-dropdown-1'>
        <SplitButton.Toggle title='SR-Only Title' />
        <MenuItem eventKey='1'>Action</MenuItem>
        <MenuItem header>Some Header</MenuItem>
        <MenuItem eventKey='2'>Another action</MenuItem>
        <MenuItem eventKey='3'>Something else here</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey='4'>Separated link</MenuItem>
      </SplitButton>
      <SplitButton onSelect={handleSelect} id='split-dropdown-1'>
        <SplitButton.Toggle title='SR-Only Title' />
        <SplitButton.Button onClick={handleClick}>
          Split Title Prop Child
        </SplitButton.Button>
        <MenuItem eventKey='1'>Action</MenuItem>
        <MenuItem header>Some Header</MenuItem>
        <MenuItem eventKey='2'>Another action</MenuItem>
        <MenuItem eventKey='3'>Something else here</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey='4'>Separated link</MenuItem>
      </SplitButton>
    </ButtonToolbar>
    <Navbar>
      <Nav>
        <NavItem>Item 1</NavItem>
        <NavDropdown id='nav-dropdown-1'>
          <NavDropdown.Toggle>Custom Title</NavDropdown.Toggle>
          <MenuItem eventKey='1'>Action</MenuItem>
          <MenuItem header>Some Header</MenuItem>
          <MenuItem eventKey='2'>Another action</MenuItem>
        </NavDropdown>
      </Nav>
    </Navbar>
    <input placeholder='After' type='text' />
  </div>
);

React.render(buttonsInstance, mountNode);
