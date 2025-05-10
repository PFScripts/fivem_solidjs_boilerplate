import { render } from 'solid-js/web'
import 'modern-css-reset/dist/reset.css';
import App from './components/App'
import { VisibilityContextProvider } from './contexts/VisibilityContextProvider';

render(
  () => (
    <VisibilityContextProvider>
      <App />
    </VisibilityContextProvider>
  ), document.getElementById('root')!
);