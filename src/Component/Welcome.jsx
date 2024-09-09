import { SiWechat } from "react-icons/si";

export default function Welcome() {
  return (
    <section className="welcome-sec">
      <div>
        <div>
          <SiWechat size={250} color="7369ee" />
        </div>
        <h1>Welcome to React Chat App</h1>
        <p>
          Chat with your friends, share photo and video fast with high quality
        </p>
      </div>
    </section>
  );
}
