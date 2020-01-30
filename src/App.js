import React from 'react';
import './App.css';
import marked from 'marked';

const initialMarkdown = `

# Welcome to Markdown Preview
---------------------------------------------
## This is a subheader
### Another subheader
#### Smaller one

#### List:
- item one
- item two
- item three

#### Links:

[FreeCodeCamp](https://www.freecodecamp.org)

[Google](https://www.google.com "world's most popular")

#### Text decorations

*italic*

**bold**

___this is crazy___  

### Inline code:  
You just have to insert a double back tick:
 \`var revelations = 123456789 + 987654321\`

### Example for a code block:  
     <html>
      <head>
      </head>
     </html>

#### A simple blockquote:
>_Life is beautiful!_ by ___Adrian Murillo___

#### A random image:
![Just a random image](https://picsum.photos/200)

| Syntax | Description |
| ----------- | ----------- |
| Header | Title |
| Paragraph | Text |
`

marked.setOptions({
  breaks: true
})

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      markdown: initialMarkdown
    };
  }
  
  handleChange = e => this.setState({markdown: e.target.value})
  handleClick = e => this.setState({markdown: ''})
  exampleClick = e => this.setState({markdown: initialMarkdown})

render() {
    return (
      <div id='body'>
        <h1 id='title'>Markdown Previewer</h1>
        <button id='clear' onClick={this.handleClick}>Clear Text</button>
        <button id='example' onClick={this.exampleClick}>Show example</button>
        <div className="container">
          <div className="left">
            <textarea id="editor" value={this.state.markdown} onChange={this.handleChange} />
          </div>
          <div className="right">
            <div id="preview" dangerouslySetInnerHTML={{ __html: marked(this.state.markdown) }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;