import { Form } from "react-bootstrap";

interface TextFieldProps {
    label: string;
    text: string;
    onChange: (text: string) => void;
}

export function TextField({ label, text, onChange }: TextFieldProps) {
    return (
        <div>
            <Form.Label>{label}</Form.Label>
            <Form.Control content={text} type="text" onChange={(e) => onChange(e.target.value)} />
        </div>
    )
}