import { Form } from "react-bootstrap";

interface PaswordFieldProps {
    label: string;
    password: string;
    onChange: (password: string) => void;
}

export function PasswordField({ label, password, onChange }: PaswordFieldProps) {
    return (
        <div>
            <Form.Label>{label}</Form.Label>
            <Form.Control type="password" onChange={(e) => onChange(e.target.value)} />
        </div>
    )
}