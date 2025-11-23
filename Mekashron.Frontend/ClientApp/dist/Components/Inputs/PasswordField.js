import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Form } from "react-bootstrap";
export function PasswordField({ label, password, onChange }) {
    return (_jsxs(_Fragment, { children: [_jsx(Form.Label, { children: label }), _jsx(Form.Control, { type: "password", onChange: (e) => onChange(e.target.value) })] }));
}
//# sourceMappingURL=PasswordField.js.map