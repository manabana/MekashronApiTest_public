import * as React from 'react';
import { LoginPage } from './Components/Login/LoginPage';
import { Stack } from 'react-bootstrap';
import { Header } from './Components/Header';


export function App() {
  return (
    <div className="app">
      <Stack direction='vertical'>
        <Header />
        <LoginPage />
      </Stack>
    </div>
  );
} 