import React from "react";
import "./style.css";

const Contact = () => {
    return (
        <section className="contact">
            <h1>drop me a line</h1>
            <form>
                <div className="flex">
                    <input type="text" placeholder="your name" />
                    <input type="email" placeholder="your email" />
                </div>
                <input className="subject" type="text" placeholder="subject" />
                <textarea />
                <input type='submit' value="send a message" />
            </form>
        </section>
    )
}

export default Contact;