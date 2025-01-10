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

export type { DummyInterface };