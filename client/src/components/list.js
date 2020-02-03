import React from "react";
import { Link } from 'react-router-dom'

export function List({ children }) {
    return(
        <div className="list-overflow-container col-lg-12" id="blogfeed">
            {children}
        </div>
    );
}

export function ListItem({ children }, props) {
    return <div className="card" onClick={props.onClick}>{children}</div>;
  }

export function PageButton () {
    return(
        <Link to="/art" className="btn"></Link>
    )
}
  