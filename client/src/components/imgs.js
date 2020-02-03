import React from "react";
import pic from "../img/Paul-4.jpg";
import bucket from "../img/bucket.png"
import "../components/components.css"
export function PaulPic() {
    return (
        <img src={pic} id="pict" alt="Paul Pic"></img>
    );
}
export function BucketPic() {
    return(
        <img src={bucket} id="bucket" alt="Bucket List"></img>
    )
}