import React from 'react';

//import EditorWithTwoContexts from './components/editor';
import Editor from './components/editor/editor.js';
import Content from './components/content/content.js';
import { ThemeContext } from './components/settings/theme-context.js';

/**
 * When using one context, you can use
 * contextType to set it statically on your
 * class, and then reference it with
 * this.context.  Cool!
 */
class Main extends React.Component {
  static contextType = ThemeContext;
  render() {
    const style = {
      background: this.context.background,
      fontSize: this.context.fontSize,
    };

    return (
      <main style={style}>
        <section>
          <Content />
          <Editor />
        </section>
      </main>
    );

    // return (
    //   <main style={style}>
    //     <EditorWithTwoContexts />
    //   </main>
    // );
  }
}

export default Main;
