import { ReactNode, useState } from "react";
import { Alert, Button } from "react-bootstrap";
import { Variant } from "react-bootstrap/esm/types";

interface CustomAlertProps {
    title?: string;
    message?: string | ReactNode;
    variant: Variant;
    show: boolean;
    onClose: () => void;
}

export function CustomAlert({ title, message, variant, show, onClose }: CustomAlertProps) {

    return (
        <div>
            <Alert show={show} variant={variant}>
                <Alert.Heading>{title}</Alert.Heading>
                <div>{message}</div>
                <hr />
                <div className="d-flex justify-content-end">
                    <Button onClick={onClose} variant={`outline-${variant}`}>
                        Close
                    </Button>
                </div>
            </Alert>
        </div>
    );
}