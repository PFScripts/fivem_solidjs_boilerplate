import IsRunningInBrowser from "./IsRunningInBrowser";

interface NuiMessage<T = unknown> { action: string, data: T };

/**
    * This simulates the SEND_NUI_MESSAGE native.
    * 
    * This is intended to run in the developing environment.
    * @param messages 
    * @param timeout 
**/

const SendNuiMessage = <P>(messages: NuiMessage<P>[], timeout = 1000): void => {
    if (IsRunningInBrowser()) {
        for (const message of messages) {
            setTimeout(() => {
                window.dispatchEvent(new MessageEvent('message', { data: { action: message.action, data: message.data } }));
            }, timeout);
        };
    };
};

export default SendNuiMessage;