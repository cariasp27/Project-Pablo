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

export function PageButtons() {
    return(
        <div>
                <Link to="/art" className="btn">
                    <span className="text-secondary">Art</span>
                </Link>
                <Link to="/music" className="btn">
                    <span className="text-secondary">Music</span>
                </Link>
                <Link to="/science" className="btn">
                    <span className="text-secondary">Science</span>
                </Link>
                <Link to="/travel" className="btn">
                    <span className="text-secondary">Travel</span>
                </Link>
        </div>
    );
}
  