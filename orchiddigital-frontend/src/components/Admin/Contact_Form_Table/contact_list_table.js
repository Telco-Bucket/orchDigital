import React from "react";
import Sidebar from "react-sidebar";
import MaterialTitlePanel from "../material_title_panel";
import SidebarContent from "../SiddebarContent";
import axios from 'axios';
import { Link } from "react-router-dom";

const styles = {
  contentHeaderMenuLink: {
    textDecoration: "none",
    color: "white",
    padding: 8
  },
  content: {
    padding: "16px"
  }
};

const mql = window.matchMedia(`(min-width: 1500px)`);


const ContactForm= props => (
    <tr>
      <td style={{fontSize:"10px"}}>{props.info.posted_date}</td>
        <td style={{fontWeight:"bolder", fontSize:"10px"}}>{props.info.contact_name}</td>
        <td style={{fontSize:"10px"}}>{props.info.contact_email}</td>
        <td style={{fontSize:"10px"}}>{props.info.contact_message}</td>
        
        <td>
            {/* <Link to={"/edit/"+props.todo._id}>Edit</Link> */}
            <Link to={"/delete_contact/"+props.info._id}>Delete</Link>

        </td>
    </tr>
)

 class ContactList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      docked: mql.matches,
      open: false,
      infos: []
    };

    this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
    this.toggleOpen = this.toggleOpen.bind(this);
    this.onSetOpen = this.onSetOpen.bind(this);
  }


componentDidMount() {
    axios.get('http://localhost:4001/contact_form/')
        .then(response => {
            this.setState({infos: response.data});
        })
        .catch(function (error) {
            console.log(error);
        })
}

componentDidUpdate() {
    axios.get('http://localhost:4001/contact_form/')
    .then(response => {
        this.setState({infos: response.data});
    })
    .catch(function (error) {
        console.log(error);
    })   
}

contactFormList() {
    return this.state.infos.map(function(currentinfos, i) {
        return <ContactForm info={currentinfos} key={i} />;
    });
}




  componentWillMount() {
    mql.addListener(this.mediaQueryChanged);
  }

  componentWillUnmount() {
    mql.removeListener(this.mediaQueryChanged);
  }

  onSetOpen(open) {
    this.setState({ open });
  }

  mediaQueryChanged() {
    this.setState({
      docked: mql.matches,
      open: false
    });
  }

  toggleOpen(ev) {
    this.setState({ open: !this.state.open });

    if (ev) {
      ev.preventDefault();
    }
  }

  render() {
    const sidebar = <SidebarContent />;

    const contentHeader = (
      <span>
        {!this.state.docked && (
          <a
            onClick={this.toggleOpen}
            href="#"
            style={styles.contentHeaderMenuLink}
          >
            =
          </a>
        )}
        <span>OrchidDigital Admin Section</span>
      </span>
    );

    const sidebarProps = {
      sidebar,
      docked: this.state.docked,
      open: this.state.open,
      onSetOpen: this.onSetOpen
    };

    return (
      <Sidebar {...sidebarProps}>
        <MaterialTitlePanel title={contentHeader}>
          <div style={styles.content}>
          <div>
                <h3>Contact  List</h3>
                <table className="table table-striped" style={{ marginTop: 20, overflowX:"auto", width:"100%" }}>
                    <thead>
                        <tr>
                        <th>Date</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Message</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.contactFormList().reverse() }
                    </tbody>
                </table>
            </div>
          </div>
         
        </MaterialTitlePanel>
      </Sidebar>
    );
  }
}

export default ContactList