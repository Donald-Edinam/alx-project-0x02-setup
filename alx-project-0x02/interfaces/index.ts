import exp from "constants";

interface DummyInterface {
    id: number;
    name: string;
    isActive: boolean;
}

export interface CardProps {
    title: string
    content: string
}

export interface PostModalProps {
    visible: boolean;
    onClose: () => void;
    onSubmit: (post: { title: string; content: string }) => void;
}

export interface ButtonProps {
    onClick?: () => void;
    children: React.ReactNode;
    size?: 'small' | 'medium' | 'large';
    shape?: 'rounded-sm '| 'rounded-md '| 'rounded-full';
    className?: string;
}

export interface PostProps {
    title: string;
    content: string;
    userId: number;
}

export interface UserProps {
    name: string;
    email: string;
    address?: string;
}

export type { DummyInterface };