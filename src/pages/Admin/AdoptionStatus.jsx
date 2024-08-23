// should show every animal card, searchable by ID

// each card should have buttons for: Approve, Reject, More(+) --> with link to form

import Button  from "react-bootstrap/Button";


function AdoptionStatus ({  }) {
  return ( <>
  


    <div style={{ display: "flex", justifyContent: "right" }}>
        <Button href='/adminpage' variant="outline-secondary" >Return</Button>
    </div>
  </>
  );
}

export default AdoptionStatus;