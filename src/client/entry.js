/*
  it will be the entry of webpack
*/

import React from 'react';
import {render} from 'react-dom';
import { createHashHistory } from 'history';
import Client from '.';

render(<Client createHistory={createHashHistory}/>,document.getElementById('app-view'));