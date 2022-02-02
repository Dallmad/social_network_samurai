import React from 'react';
import './index.css';
import {store} from './redux/state'
import {RerenderEntireTree} from "./render";

store.subscribe(RerenderEntireTree)
RerenderEntireTree()






