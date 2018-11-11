import React from 'react';
import { Route, Link } from "react-router-dom";
import './index.css';



export function Topics({match}){
  return (
    <div>
      <Route path={`${match.path}/:id`} component={Topic} />
      <Route exact path={match.path} render={TopicMain}/>
    </div>
  );
}

export function TopicMain({match}) {
  return (
    <div>
      <h3>Please select a topic:</h3>
      <hr />
      <ul>
        <li><Link to={`${match.url}/1topic`}>1 topic</Link></li>
        <li><Link to={`${match.url}/2topic`}>2 topic</Link></li>
        <li><Link to={`${match.url}/3topic`}>3 topic</Link></li>
        <li><Link to={`${match.url}/4topic`}>4 topic</Link></li>
        <li><Link to={`${match.url}/5topic`}>5 topic</Link></li>
        <li><Link to={`${match.url}/6topic`}>6 topic</Link></li>
        <li><Link to={`${match.url}/7topic`}>7 topic</Link></li>
        <li><Link to={`${match.url}/8topic`}>8 topic</Link></li>
        <li><Link to={`${match.url}/9topic`}>9 topic</Link></li>
      </ul>
    </div>
  );
}

export function Topic({match}){
  return (
    <div>
      <h3>This is topic: {match.params.id}</h3><br />
      <Link to={`${match.url}/answers`}>Answers on this topic</Link>
      <Route path={`${match.path}/answers`} component={Answers} />
    </div>
  );
}

export function Answers({match}){
  return (
    <div>
      <h3>zero answers on {match.params.id}</h3>
    </div>
  );
}