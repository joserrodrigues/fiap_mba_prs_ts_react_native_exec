import React, { FC } from 'react';
import HomeView from './LoginView';
import { registerRootComponent } from 'expo';

const LoginController:FC = () => {    
    return (
        <HomeView />
    );
};

export default registerRootComponent(LoginController);