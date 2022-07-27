import React, { FC } from 'react';
import HomeView from './HomeView';
import { registerRootComponent } from 'expo';

const HomeController:FC = () => {    
    return (
        <HomeView />
    );
};

export default registerRootComponent(HomeController);