import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function SponsorPage() {
  const [key, setKey] = useState('monthly');

  return (
    <Tabs style={{ justifyContent: "center", marginTop: "2rem"}}
      id="controlled-tab-example"
      defaultActiveKey="monthly"
      activeKey={key}
      onSelect={(k) => setKey(k)} 
      className="mb-3"
    >
      <Tab eventKey="monthly" title="Monthly">
        Monthly subscription
      </Tab>
      <Tab eventKey="onetime" title="One-time">
        One-time payment
      </Tab>
    </Tabs>
  );
}

export default SponsorPage;