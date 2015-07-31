const tabsInstance = (
  <Tabs defaultActiveKey={1} animation={false}>
    <Tab eventKey={1} title='Tab 1'>Tab 1 content</Tab>
    <Tab eventKey={2} title='Tab 2'>Tab 2 content</Tab>
  </Tabs>
);

React.render(tabsInstance, mountNode);
