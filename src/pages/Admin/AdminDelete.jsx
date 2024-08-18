import { Link } from 'react-router-dom';


function AdminDelete() {
    return (
      <>
        <div className="animalData">
          <p>ID</p>
          <p>Name </p>
          <p>Species</p>
          <p>Gender</p>
          <p>Life stage</p>
          <p>Weight</p>
          <p>Breed</p>
          <p>Location</p>
          <p>Known illnesses</p>
          <p>Adoption status</p>
          <p>Description</p>
        </div>
        <div>
          <button>Delete animal</button>
          <p>Do you want to <Link to="/adminedit" >edit</Link> instead?</p>
        </div> 
      </>

    )
}


export default AdminDelete;