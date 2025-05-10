import { createEffect, onMount, onCleanup } from "solid-js";

interface MessageData<T = unknown> {
    action: string;
    data: T;
};

type HandlerSignature<T> = (data: T) => void;

/**
    * Registers a window 'message' listener for a specific action,
    * and invokes your handler whenever a matching message arrives.
    *
    * @param action  the message.action you want to listen for
    * @param handler callback that receives message.data when action matches
*/

const HandleNuiMessage = <T = unknown>(action: string, handler: HandlerSignature<T>) => {
    let savedHandler: HandlerSignature<T> = () => { };
    createEffect(() => {
        savedHandler = handler;
    });
    onMount(() => {
        const messageListener = (message: MessageEvent<MessageData<T>>) => {
            const { action: messageAction, data } = message.data;
            if (messageAction === action) {
                savedHandler(data);
            };
        };
        window.addEventListener('message', messageListener);
        onCleanup(() => {
            window.removeEventListener('message', messageListener);
        });
    });
};

export default HandleNuiMessage;