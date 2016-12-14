// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  Code,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";
//import createTheme from 'spectacle-theme-nova';

// Import custom component
import Interactive from "../assets/interactive";

var FontAwesome = require('react-fontawesome');

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const images = {
  city: require("../assets/city.jpg"),
  feries: require("../assets/feries-logo.svg"),
  panic: require("../assets/panic-button.jpg"),
  panic2: require("../assets/panic-button2.jpg"),
  react: require("../assets/react-logo.png"),
  rossi: require("../assets/valentino-rossi.png"),
};

preloader(images);

//const theme = createTheme({
  //primary: "#ff4081"
  //primary: "teal"
//});
const theme = createTheme();

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>
          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={3} fit caps lineHeight={1} textColor="black">
              React.js
            </Heading>
            <Heading size={1} fit caps>
              @casevacanza.it
            </Heading>
            <Link href="https://facebook.github.io/react/">
              <Text bold caps textColor="tertiary">React</Text>
            </Link>
            <Text textSize="1.0em" margin="20px 0px 0px" bold>With (a lot of) Love!</Text>
          </Slide>
          <Slide transition={["slide"]} bgColor="black" notes="You can even put notes on your slide. How awesome is that?">
            <Image src={images.react.replace("/", "")} margin="0px auto 40px" height="293px"/>
            <Heading size={2} caps fit textColor="primary" textFont="primary">
              Wait wait wait...why??
            </Heading>
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <Heading size={2} textColor="primary" textFont="primary">
              Today I'm not
            </Heading>
            <List>
              <Appear><ListItem>Teaching Javascript</ListItem></Appear>
              <Appear><ListItem>Teaching React</ListItem></Appear>
              <Appear><ListItem>Teaching Redux</ListItem></Appear>
              <Appear><ListItem>Teaching...</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <Heading size={2} textColor="primary" textFont="primary">
              Today I will
            </Heading>
            <List>
              <Appear><ListItem>Describe how small parts of our website have been migrated to React</ListItem></Appear>
              <Appear><ListItem>Give you some hints on how to do the same</ListItem></Appear>
              <Appear><ListItem>Help you to debug our React codebase</ListItem></Appear>
              <Appear><ListItem>Peppe silenzio!</ListItem></Appear>
            </List>
          </Slide>
          <Slide>
            <Heading size={3} textFont="primary">
              Let's go!
            </Heading>
            <Image src={images.rossi.replace("/", "")} margin="20px auto 40px" height="450px"/>
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
            <Heading size={3} fit textColor="primary" textFont="primary">
              What is React?
            </Heading>
            <BlockQuote >
              <Quote textSize="1.0em">React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
                Declarative views make your code more predictable and easier to debug.</Quote>
              <Cite>https://facebook.github.com/react</Cite>
            </BlockQuote>
          </Slide>
          <Slide>
            Simpler? Snippet jQuery (big fail)
          </Slide>
          <Slide>
            Simpler? Snipper React
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
            git diff 67b303dc002321f373e0d0 master -- package.json
            <CodePane
              lang="jsx"
              source={require("raw!../assets/package.json.diff")}
              margin="10px auto"
            />
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
            git diff 67b303dc002321f373e0d0 master -- package.json
            <CodePane
              lang="jsx"
              source={require("raw!../assets/package.json.1.diff")}
              margin="10px auto"
            />
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
            git diff 67b303dc002321f373e0d0 master -- package.json
            <CodePane
              lang="jsx"
              source={require("raw!../assets/package.json.2.diff")}
              margin="10px auto"
            />
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
            git diff 67b303dc002321f373e0d0 master -- package.json
            <CodePane
              lang="jsx"
              source={require("raw!../assets/package.json.3.diff")}
              margin="10px auto"
            />
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
            git diff 67b303dc002321f373e0d0 master -- package.json
            <CodePane
              lang="jsx"
              source={require("raw!../assets/package.json.4.diff")}
              margin="10px auto"
            />
          </Slide>
          <Slide>
            <Heading size={2} textFont="primary">
              Stack Overview: development
            </Heading>
            <List>
              <Appear><ListItem>babel</ListItem></Appear>
              <Appear><ListItem>ECMAScript 2015 aka ES6</ListItem></Appear>
              <Appear><ListItem>eslint</ListItem></Appear>
              <Appear><ListItem>react</ListItem></Appear>
              <Appear><ListItem>redux</ListItem></Appear>
              <Appear><ListItem>react-redux</ListItem></Appear>
              <Appear><ListItem>redux-thunk</ListItem></Appear>
              <Appear><ListItem>webpack</ListItem></Appear>
              <Appear><ListItem>whatwg-fetch</ListItem></Appear>
            </List>
          </Slide>
          <Slide>
            <Heading size={2} textFont="primary">
              Stack Overview: testing
            </Heading>
            <List>
              <Appear><ListItem>chai</ListItem></Appear>
              <Appear><ListItem>enzyme</ListItem></Appear>
              <Appear><ListItem>karma</ListItem></Appear>
              <Appear><ListItem>mocha</ListItem></Appear>
            </List>
          </Slide>
          <Slide>
            <Heading size={3} textFont="primary" textFont="primary">
              npm scripts
            </Heading>
            <CodePane
              lang="node"
              margin="20px auto"
            >
              $ npm run eslint
            </CodePane>
            <CodePane
              lang="node"
              margin="20px auto"
            >
              $ npm run dev
            </CodePane>
            <CodePane
              lang="node"
              margin="20px auto"
            >
              $ npm run build
            </CodePane>
            <CodePane
              lang="node"
              margin="20px auto"
            >
              $ npm run deploy
            </CodePane>
            <CodePane
              lang="node"
              margin="20px auto"
            >
              $ npm run test
            </CodePane>
          </Slide>
          <Slide transition={["slide"]} bgImage={images.city.replace("/", "")} bgDarken={0.75} textColor="primary">
            <Appear fid="1">
              <Heading size={1} caps fit textColor="primary">
                webpack
              </Heading>
            </Appear>
            <Appear fid="2">
              <Heading size={1} caps fit textColor="tertiary">
                is a module bundler
              </Heading>
            </Appear>
            <Appear fid="3">
              <Heading size={2} fit textColor="primary">
                takes modules with dependencies and emits static assets representing those modules
              </Heading>
            </Appear>
          </Slide>
          <Slide>
            webpack.config.js
            <CodePane
              lang="jsx"
              source={require("raw!../assets/webpack-excerpt.txt")}
              margin="10px auto"
            />
          </Slide>
          <Slide>
            <Image src={images.panic2.replace("/", "")} margin="0px auto 40px" height="450px"/>
          </Slide>
          <Slide>
            <Heading size={3} fit caps lineHeight={1} textColor="black">
              the (symfony) view
            </Heading>
            <div id="react-autocomplete" data-api-path="<?php echo $apiPath; ?>" class="col_9 centered_col react-big"></div>
            <CodePane
              lang="jsx"
              source={require("raw!../assets/react-to-template.html")}
              margin="25px auto"
            />
            <FontAwesome
              className='super-crazy-colors'
              name='rocket'
              size='10x'
              spin
              style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
            />
          </Slide>
          <Slide transition={["spin", "slide"]} bgColor="black">
            <Heading size={1} lineHeight={1.5} textColor="primary">
              Reusable components
            </Heading>
            <BlockQuote >
              <Quote textSize="1.0em">Components let you split the UI into independent, reusable pieces, and think about each piece in isolation.
                Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called "props") and return React elements describing what should appear on the screen.</Quote>
              <Cite>https://facebook.github.io/react/docs/components-and-props.html</Cite>
            </BlockQuote>
          </Slide>
          <Slide transition={["spin", "slide"]}>
            <Heading size={1} fit lineHeight={1.5}>
              Our Reusable components
            </Heading>
            <List>
              <Appear><ListItem>Autocomplete</ListItem></Appear>
              <Appear><ListItem>Modal</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["spin", "slide"]}>
            <Text textSize="1.0em" margin="20px 0px 0px" bold>components/global/Modal.js</Text>
            <CodePane
              lang="jsx"
              source={require("raw!../assets/modal.txt")}
              margin="0px auto"
            />
          </Slide>
          <Slide transition={["spin", "slide"]} bgDarken={0.75} textColor="primary">
            <Appear fid="1">
              <Heading size={1} caps fit>
                Small Example
              </Heading>
            </Appear>
            <Appear fid="3">
              <Heading size={2} fit>
                Please change the tooltip position (only when...)
              </Heading>
            </Appear>
            <Appear fid="3">
              <Heading size={3} fit>
                Pull Request #836 https://github.com/feries/casevacanza.it/pull/836
              </Heading>
            </Appear>
          </Slide>
          <Slide transition={["spin", "slide"]} bgColor="black" align="center center">
            <Heading size={1} fit lineHeight={1.5} textColor="primary">
              Made with Love <FontAwesome size='5x' name='heart' /> in Rome by
            </Heading>
            <i aria-hidden="true" className="fa fa-heart fa-5x"></i>
            <Image src={images.feries.replace("/", "")} margin="0px auto 40px" height="150px"/>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
