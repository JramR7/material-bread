var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _interopRequireWildcard=require("@babel/runtime/helpers/interopRequireWildcard");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));var _createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass"));var _possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));var _getPrototypeOf2=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));var _inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits"));var _react=_interopRequireWildcard(require("react"));var _reactNative=require("react-native");var _reactNative2=require("@storybook/react-native");var _jsxFileName="/Users/ricbermo/development/material-bread/src/storybook/storybook.js";(0,_reactNative2.configure)(function(){require('./stories');},module);var StorybookUIRoot=(0,_reactNative2.getStorybookUI)({port:7007,onDeviceUI:true});var StorybookUIHMRRoot=function(_Component){(0,_inherits2.default)(StorybookUIHMRRoot,_Component);function StorybookUIHMRRoot(){(0,_classCallCheck2.default)(this,StorybookUIHMRRoot);return(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(StorybookUIHMRRoot).apply(this,arguments));}(0,_createClass2.default)(StorybookUIHMRRoot,[{key:"render",value:function render(){return _react.default.createElement(StorybookUIRoot,{__source:{fileName:_jsxFileName,lineNumber:19}});}}]);return StorybookUIHMRRoot;}(_react.Component);_reactNative.AppRegistry.registerComponent('MaterialBread',function(){return StorybookUIHMRRoot;});var _default=StorybookUIHMRRoot;exports.default=_default;