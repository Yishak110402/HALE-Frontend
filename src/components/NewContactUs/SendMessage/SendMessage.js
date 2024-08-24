import "./SendMessage.css";
export default function SendMessage() {
  return (
    <div className="send-message">
      <h1>
        Would you like to know more or work with us? Get in touch with our team.
      </h1>
      <hr />
      <form>
        <div className="inputs">
          <div>
            <label>Name</label>
            <input type="text" placeholder="John Doe" />
          </div>
          <div>
            <label>Email</label>
            <input type="email" placeholder="email@example.cpm" />
          </div>
        </div>
        <div>
          <label>Message</label>
          <textarea placeholder="Your Message Here" />
          <button type="submit">Send</button>
        </div>
      </form>
    </div>
  );
}
