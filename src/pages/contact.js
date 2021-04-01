import React from "react";
import Layout from "../components/Layout";

function Contact() {
  return (
    <Layout>
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>want to get in touch?</h3>
            <p>
              Melted cheese jarlsberg pepper jack. Swiss emmental cheese slices
              cheesy feet cheesecake.
            </p>
            <p>
              roquefort when the cheese comes out everybody's happy who moved my
              cheese.
            </p>
            <p>
              Chalk and cheese fromage frais ricotta cut the cheese when the
              cheese comes out everybody's happy swiss cheeseburger who moved my
              cheese.
            </p>
          </article>
          <article>
            <form className="form contact-form">
              <div className="form-row">
                <label htmlFor="name">your name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-row">
                <label htmlFor="email">your email</label>
                <input type="text" name="email" id="email" />
              </div>
              <div className="form-row">
                <label htmlFor="message">message</label>
                <textarea name="message" id="message"></textarea>
              </div>
              <button type="submit" className="btn block">
                submit
              </button>
            </form>
          </article>
        </section>
      </main>
    </Layout>
  );
}

export default Contact;
