import { createSignal, Show, type Component, type JSX } from 'solid-js';
import styles from './App.module.css';

const App: Component = () => {
  const [name, setName] = createSignal('');
  const [greeting, setGreeting] = createSignal('');
  let nameInput!: HTMLInputElement;

  const handleSubmit: JSX.EventHandler<HTMLFormElement, Event> = (e) => {
    e.preventDefault();
    const user = name().trim() || 'World';
    setGreeting(`Hello, ${user}!`);
    setName('');
    nameInput.focus();
  };

  const handleInput: JSX.EventHandler<HTMLInputElement, InputEvent> = (e) => {
    setName(e.currentTarget.value);
  };

  return (
    <main class={styles.appContainer}>
      <form
        class={styles.form}
        onSubmit={handleSubmit}
        aria-labelledby="greeting-form"
      >
        <h2 id="greeting-form" class="visually-hidden">
          Enter your name
        </h2>
        <input
          id="name"
          ref={nameInput}
          type="text"
          class={styles.input}
          value={name()}
          onInput={handleInput}
          autofocus
        />

        <button type="submit" class={styles.button} disabled={!name().trim()}>
          Greet Me
        </button>
      </form>

      <Show when={greeting()}>
        <p class={styles.greeting} aria-live="polite">
          {greeting()}
        </p>
      </Show>
    </main>
  );
};

export default App;