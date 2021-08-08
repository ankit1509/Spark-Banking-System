import React from "react";

export const CustomerStatements = (props) => {
  return (
    <>
      <div className="column is-12 table my-0">
        <div className="columns has-text-centered is-mobile p-0">
          <div className="column is-3">
            <h3 className="title is-size-7-touch is-size-3-desktop">
              {props.statements.Created_on.slice(0, 10)}
            </h3>
          </div>
          <div className="column is-3">
            {props.statements.Status === "Credited" ? (
              <h3 className="title is-size-7-touch is-size-3-desktop">
                Transferred to the account {props.statements.Debated_to}
              </h3>
            ) : (
              <h3 className="title is-size-7-touch is-size-3-desktop">
                Received from the account {props.statements.Debated_to}
              </h3>
            )}
          </div>
          <div className="column is-3">
            {props.statements.Status === "Credited" ? (
              <h3 className="title is-size-7-touch is-size-3-desktop">
                ₹{props.statements.Amount}
              </h3>
            ) : (
                <h3 className="title is-size-7-touch is-size-3-desktop">
                -
              </h3>
            )}
          </div>
          <div className="column is-3">
            
          {props.statements.Status === "Debited" ? (
              <h3 className="title is-size-7-touch is-size-3-desktop">
                ₹{props.statements.Amount}
              </h3>
            ) : (
                <h3 className="title is-size-7-touch is-size-3-desktop">
                -
              </h3>
            )}
          </div>
        </div>
      </div>
      <div className="column is-12 my-0 py-0">
        <hr className="has-background-dark" />
      </div>
    </>
  );
};
