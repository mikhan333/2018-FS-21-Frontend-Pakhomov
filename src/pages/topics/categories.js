import React from 'react';
import { Route } from "react-router-dom";
import './index.css';
import Category from './questions';
import CategoryMain from './category_main';

function Categories({match}){
  return (
    <div>
      <Route path={`${match.path}/:id`} component={Category} />
      <Route exact path={match.path} component={CategoryMain}/>
    </div>
  );
}
export default Categories;
