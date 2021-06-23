import { useState } from "react";

export function useModal(config?: {
    isOpen?: boolean;
    onClose?: () => void;
    onOpen?: () => void;
}) {
    const [open, setOpen] = useState<boolean>(!!config?.isOpen);

    const openModal = () => {
        setOpen(true);
        config?.onOpen?.();
    };

    const closeModal = () => {
        setOpen(false);
        config?.onClose?.();
    };

    const toggleModal = () => {
        setOpen((s) => !s);
        if (open) {
            config?.onOpen?.();
        } else {
            config?.onClose?.();
        }
    };


    return { isOpen: open, openModal, closeModal, toggleModal };
}