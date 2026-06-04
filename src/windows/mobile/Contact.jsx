import { socials } from "#constants";
import MobileWindowWrapper from "#hoc/MobileWindowWrapper";
import MobileWindowHeader from "#components/mobile/WindowHeader";

const MobileContactContent = () => {
  return (
    <>
      <MobileWindowHeader windowKey="contact" title="Contact" />

      <div className="content">
        <img
          src="/images/eric.jpg"
          alt="Eric Rai"
          className="w-20 rounded-full object-cover aspect-square"
        />

        <h3>Let's Connect</h3>
        <p>
          Creative Freelancer & Content Creator from Nepal. Got a project, a wild
          idea, or want to collab? Let's talk.
        </p>

        <ul>
          {socials.map(({ id, bg, link, icon, text }) => (
            <li key={id} style={{ backgroundColor: bg }}>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                title={text}
              >
                <img src={icon} alt={text} className="size-5" />
                <p>{text}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

const MobileContact = MobileWindowWrapper(MobileContactContent, "contact");

export default MobileContact;
