import React from "react";
import Nav from "./Nav";
import "./ActionPlanPage.css";
// import Button from "./Button";

// attributes need to be changed to props
// need to change button html to button component with attr passed down as props this.props.type 
// need to import section and change sections from html to section component 
function ActionPlanPage() {
  return (
    <>
      <Nav />
      <main role="main">
        <section className="action-plan">
          <h1>Action Plan</h1>
          <form action="/future-server-endpoint" method="post"id="action-plan-form">
            <label htmlFor="action-plan-entry">Add a todo</label>
            <input type="text" name="action-plan-entry" placeholder="e.g, Submit immigration paperwork"/>
            <div className="action-plan-entry-btns">
              <button type="submit">Add entry</button>
              <button type="submit">Remove entry</button>
            </div>
            <ul>
              <li>Test Action Item 1</li>
              <li>Test Action Item 2</li>
              <li>Test Action Item 3</li>
              <li>Test Action Item 4</li>
            </ul>
          </form>
        </section>
        <section className="action-plan-comments">
          <form action="/future-server-endpoint" method="post">
            <label htmlFor="action-plan-comment">Add a comment</label>
            <textarea name="action-plan-comment" cols="33" rows="5"></textarea>
          </form>
          <button>Add comment</button>
        </section>
      </main>
    </>
  );
};

export default ActionPlanPage;