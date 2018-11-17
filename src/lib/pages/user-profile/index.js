import React from 'react';
import './index.css';
import { Link } from "react-router-dom";

export function ProfilePage() {
  return (
    <div className="ProfileUser">
      <h2>You are brilliant -> go to</h2>
      <h2><Link to="/topics">Topics</Link></h2>
    </div>
  );
}