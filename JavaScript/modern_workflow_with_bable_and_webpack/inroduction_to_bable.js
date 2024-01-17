// Introduction to Babel

// Babel is a JavaScript compiler that allows developers to write code using the latest ECMAScript features
// while ensuring compatibility with older browsers and environments that may not support those features.

// Key Features of Babel:

// 1. **ECMAScript Compatibility:**
//    - Babel enables developers to use the latest ECMAScript syntax (such as ES6, ES7, etc.) before it is widely supported in all browsers.

// 2. **Plugin System:**
//    - Babel uses a plugin system that allows developers to add or customize transformations applied to their code during the compilation process.

// 3. **Presets:**
//    - Babel presets are predefined sets of plugins configured to support specific ECMAScript versions or environments.

// 4. **Integration with Build Tools:**
//    - Babel is often integrated into build tools like Webpack, enabling seamless transpilation of code during the build process.

// How to Use Babel:

// 1. **Installation:**
//    - Install Babel and the necessary presets or plugins using npm:
//      ```
//      npm install @babel/core @babel/preset-env --save-dev
//      ```

// 2. **Configuration:**
//    - Create a configuration file (babel.config.js) to specify the presets:
//      ```javascript
//      module.exports = {
//        presets: ['@babel/preset-env']
//      };
//      ```

// 3. **Integration with Build Tools (e.g., Webpack):**
//    - If you're using Webpack, configure it to use Babel by adding the babel-loader:
//      ```javascript
//      module.exports = {
//        // ...other webpack configurations
//        module: {
//          rules: [
//            {
//              test: /\.js$/,
//              exclude: /node_modules/,
//              use: {
//                loader: 'babel-loader',
//              }
//            }
//          ]
//        }
//      };
//      ```

// 4. **Transpilation:**
//    - Run the build process (e.g., `npx webpack`) to transpile your code using Babel.

// Example:
const modernCode = () => {
  const arrowFunction = () => {
    console.log("This is an arrow function using modern syntax!");
  };

  arrowFunction();
};

modernCode();
