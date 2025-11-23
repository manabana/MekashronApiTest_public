import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { LoginPage } from './Components/Login/LoginPage';
import { Stack } from 'react-bootstrap';
import { Header } from './Components/Header';
export function App() {
    return (_jsx("div", { className: "app", style: { backgroundColor: 'lightgrey' }, children: _jsxs(Stack, { direction: 'vertical', children: [_jsx(Header, {}), _jsx(LoginPage, {})] }) }));
}
//# sourceMappingURL=App.js.map