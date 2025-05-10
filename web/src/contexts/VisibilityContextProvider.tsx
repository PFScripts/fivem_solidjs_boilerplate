import { createContext, useContext, createSignal, createEffect, Show } from 'solid-js';
import IsRunningInBrowser from '../utils/IsRunningInBrowser';
import TriggerNuiCallback from '../utils/TriggerNuiCallback';
import HandleNuiMessage from '../hooks/HandleNuiMessage';

type VisibilityContextValue = {
    visibility: () => boolean;
    setVisibility: (v: boolean) => void;
};

const VisibilityContext = createContext<VisibilityContextValue>();

/**
    * `VisibilityContextProvider` manages the visibility state of its children.
    * @param props: any
    * @example
    * <VisibilityContextProvider>
    *     <App />
    * </VisibilityContextProvider>
**/

export const VisibilityContextProvider = (props: any) => {
    const [visibility, setVisibility] = createSignal(IsRunningInBrowser());
    HandleNuiMessage<boolean>('visibility', (boolean) => setVisibility(boolean));
    createEffect(() => {
        if (visibility()) {
            const keyHandler = (keyboardEvent: KeyboardEvent) => {
                if (['Backspace', 'Escape'].includes(keyboardEvent.key)) {
                    if (!IsRunningInBrowser()) {
                        TriggerNuiCallback('hide', { action: 'visibility', data: false });
                    } else {
                        setVisibility(false);
                    };
                };
            };
            window.addEventListener('keydown', keyHandler);
            return () => window.removeEventListener('keydown', keyHandler);
        };
    });
    return (
        <VisibilityContext.Provider value={{ visibility, setVisibility }}>
            <Show when={visibility()}>
                {props.children}
            </Show>
        </VisibilityContext.Provider>
    );
};

/**
    * `GetVisibilityContext` gets the `VisibilityContext` context.
    * @example
    * const App: Component = () => {
    *     const {visibility, setVisibility} = GetVisibilityContext();
    * 
    *     const timer = setInterval(() => {
    *         setVisibility(!visibility());
    *     }, 5000);
    * 
    *     return (
    *         <p>Visibility is now: {visibility() ? 'ON' : 'OFF'}</p>
    *     );
    * };
**/

export const GetVisibilityContext = () => {
    const context = useContext(VisibilityContext);
    if (!context) throw new Error("GetVisibilityContext must be used within VisibilityContextProvider");
    return context;
};