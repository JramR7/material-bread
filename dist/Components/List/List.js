var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _interopRequireWildcard=require("@babel/runtime/helpers/interopRequireWildcard");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));var _createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass"));var _possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));var _getPrototypeOf2=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));var _inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits"));var _defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));var _react=_interopRequireWildcard(require("react"));var _propTypes=_interopRequireDefault(require("prop-types"));var _withTheme=_interopRequireDefault(require("../../Theme/withTheme"));var _BodyText=_interopRequireDefault(require("../Typography/BodyText/BodyText.js"));var _Paper=_interopRequireDefault(require("../Paper/Paper.js"));var _List=_interopRequireDefault(require("./List.styles"));var _jsxFileName="/Users/cody/projects/material-bread/src/Components/List/List.js";var List=function(_Component){(0,_inherits2.default)(List,_Component);function List(){(0,_classCallCheck2.default)(this,List);return(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(List).apply(this,arguments));}(0,_createClass2.default)(List,[{key:"_renderSubheader",value:function _renderSubheader(){var subheader=this.props.subheader;return _react.default.createElement(_BodyText.default,{style:_List.default.subheader,__source:{fileName:_jsxFileName,lineNumber:20}},subheader);}},{key:"render",value:function render(){var _this$props=this.props,style=_this$props.style,shadow=_this$props.shadow,subheader=_this$props.subheader,testID=_this$props.testID;return _react.default.createElement(_Paper.default,{shadow:shadow?shadow:0,style:[{backgroundColor:'#fff'},style],testID:testID,__source:{fileName:_jsxFileName,lineNumber:25}},subheader?this._renderSubheader():null,this.props.children);}}]);return List;}(_react.Component);(0,_defineProperty2.default)(List,"propTypes",{children:_propTypes.default.node,style:_propTypes.default.oneOfType([_propTypes.default.object,_propTypes.default.array]),shadow:_propTypes.default.number,subheader:_propTypes.default.string,testID:_propTypes.default.string});var _default=(0,_withTheme.default)(List);exports.default=_default;