import CardTabelForm from '../user form/Card_Table_Form';


function UserList(props) {
    return (
      <section id="projects" style={{ backgroundColor: "#00203fff" }}>
        <div className="container">
          <div className="">
            <h1
              className="text-center text-white text-underline"
              style={{ padding: "20px 0 12px 0" }}
            >
              <u>{props.title}</u>
            </h1>
  
            <CardTabelForm />
          </div>
        </div>
      </section>
    );
  }
  
  export default UserList;