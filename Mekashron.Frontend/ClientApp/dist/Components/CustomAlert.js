import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Alert, Button } from "react-bootstrap";
export function CustomAlert({ title, message, show, onClose }) {
    return (_jsx("div", { children: _jsxs(Alert, { show: show, variant: "success", children: [_jsx(Alert.Heading, { children: title }), _jsx("p", { children: message }), _jsx("hr", {}), _jsx("div", { className: "d-flex justify-content-end", children: _jsx(Button, { onClick: onClose, variant: "outline-success", children: "Close" }) })] }) }));
}
//# sourceMappingURL=CustomAlert.js.map