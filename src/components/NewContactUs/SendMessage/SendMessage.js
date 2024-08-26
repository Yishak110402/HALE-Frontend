import { useContext } from "react";
import "./SendMessage.css";
import { GeneralContext } from "../../../hooks/GeneralContext";
export default function SendMessage() {
  const { sendMessageFromContact, messageData, setMessageData, sending, success } =
    useContext(GeneralContext);
  return (
    <div className="send-message">
      <h1>
        Would you like to know more or work with us? Get in touch with our team.
      </h1>
      <hr />
      <form onSubmit={(e) => sendMessageFromContact(e)}>
        <div className="inputs">
          <div>
            <label>Name</label>
            <input
              type="text"
              placeholder="John Doe"
              value={messageData.name}
              onChange={(e) =>
                setMessageData((data) => ({ ...data, name: e.target.value }))
              }
            />
          </div>
          <div>
            <label>Email</label>
            <input
              type="email"
              placeholder="email@example.com"
              value={messageData.email}
              onChange={(e) =>
                setMessageData((data) => ({ ...data, email: e.target.value }))
              }
            />
          </div>
        </div>
        <div>
          <label>Message</label>
          <textarea
            placeholder="Your Message Here"
            value={messageData.message}
            onChange={(e) =>
              setMessageData((data) => ({ ...data, message: e.target.value }))
            }
          />
          <button type="submit" disabled={sending}>
            {sending ? "Sending..." : "Send"}
          </button>
        </div>
      </form>
      {success && (
        <div className="success-msg">
          <h2>Message Sent Successfully</h2>
        </div>
      )}
    </div>
  );
}
