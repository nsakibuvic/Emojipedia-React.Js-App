import React from "react";



function Entry(props) {
    return (
      <div>
         <dl className="dictionary">
         <div class ="term">
            <dt>
              <span className="emoji" role="img" aria-label="Tense Biceps">
                {props.emoji}
              </span>
              <span>{props.name}</span>
            </dt>
            <dd>
              {props.meaning}
            </dd>
            </div>                    
          </dl>
         </div>
      
    );
  }

  export default Entry;