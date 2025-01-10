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
    size?: 'sm' | 'md' | 'lg';
    shape?: 'rounded-sm '| 'rounded-md '| 'rounded-full';
    className?: string;
}

export type { DummyInterface };