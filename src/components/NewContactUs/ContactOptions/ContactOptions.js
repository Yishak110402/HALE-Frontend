import ContactsList from "../ContactsList/ContactsList"
import MapContainer from "../MapContainer/MapContainer"
import "./ContactOptions.css"
export default function ContactOptions(){
    return(
        <div className="contact-options">
            <h1>Contact Us</h1>
            <hr />
            <div className="contact-container">
                <ContactsList />
                <MapContainer />
            </div>
        </div>
    )
}