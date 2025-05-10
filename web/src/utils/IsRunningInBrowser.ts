const IsRunningInBrowser = (): boolean => !(window as any).invokeNative;

export default IsRunningInBrowser;