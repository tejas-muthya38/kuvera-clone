import "./styles.css";
import { testimonials } from "../../constants";

export default function Testimonials() {
  return (
    <div className="testimonials">
      <p>#happykuverians</p>
      <h1>Our users love us</h1>
      <div className="testimonial-items">
        {testimonials.map((item, index) => {
          const authorFirstName = item.author.name.split(" ")[0];
          return (
            <div key={index} className="testimonial-item">
              <div className="testimonial-top">
                <img src={item.author.image} alt={item.author.name} />
                <p>{item.description}</p>
              </div>
              <div>
                <p>{item.author.name}</p>
                <span>
                  {item.author.profession}, {item.author.age},{" "}
                  {item.author.from}
                </span>
                <a href={item.endpoint}>Read {authorFirstName}'s story </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
