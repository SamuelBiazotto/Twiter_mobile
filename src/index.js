import React from 'react';
import {YellowBox} from 'react-native'
YellowBox.ignoreWarnings(['Unrecognized WebSocket'])
import { View } from 'react-native';
import Routes from './routes';

const App = () => <Routes />;

export default App;
