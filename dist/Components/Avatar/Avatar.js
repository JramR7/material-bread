var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _interopRequireWildcard=require("@babel/runtime/helpers/interopRequireWildcard");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends"));var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));var _createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass"));var _possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));var _getPrototypeOf2=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));var _inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits"));var _defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));var _react=_interopRequireWildcard(require("react"));var _propTypes=_interopRequireDefault(require("prop-types"));var _reactNative=require("react-native");var _withTheme=_interopRequireDefault(require("../../Theme/withTheme"));var _Icon=_interopRequireDefault(require("../Icon/Icon"));var _Ripple=_interopRequireDefault(require("../Ripple/Ripple"));var _Typography=require("../Typography");var _jsxFileName="/Users/ricbermo/development/material-bread/src/Components/Avatar/Avatar.js";var Avatar=function(_Component){(0,_inherits2.default)(Avatar,_Component);function Avatar(){(0,_classCallCheck2.default)(this,Avatar);return(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(Avatar).apply(this,arguments));}(0,_createClass2.default)(Avatar,[{key:"_renderImage",value:function _renderImage(){var _this$props=this.props,image=_this$props.image,size=_this$props.size;return _react.default.cloneElement(image,{style:{width:size,height:size,borderRadius:size/2}});}},{key:"_renderIcon",value:function _renderIcon(){var _this$props2=this.props,content=_this$props2.content,contentSize=_this$props2.contentSize,contentStyles=_this$props2.contentStyles,size=_this$props2.size,contentColor=_this$props2.contentColor;return _react.default.createElement(_Icon.default,{name:content,size:contentSize?contentSize:size/1.5,style:contentStyles,color:contentColor,__source:{fileName:_jsxFileName,lineNumber:55}});}},{key:"_renderTypographyText",value:function _renderTypographyText(){var _this$props3=this.props,content=_this$props3.content,contentColor=_this$props3.contentColor,contentSize=_this$props3.contentSize,contentStyles=_this$props3.contentStyles,size=_this$props3.size;return _react.default.createElement(_Typography.BodyText,{type:1,style:[{color:contentColor?contentColor:'white',fontSize:contentSize?contentSize:size/2},contentStyles],__source:{fileName:_jsxFileName,lineNumber:74}},content);}},{key:"_renderItem",value:function _renderItem(){var type=this.props.type;if(type=='image'){return this._renderImage();}else if(type=='icon'){return this._renderIcon();}else if(type=='text'){return this._renderTypographyText();}}},{key:"_renderAvatarContent",value:function _renderAvatarContent(){var _this$props4=this.props,style=_this$props4.style,color=_this$props4.color,size=_this$props4.size,children=_this$props4.children,theme=_this$props4.theme;return _react.default.createElement(_reactNative.View,{style:[{width:size,height:size,borderRadius:size/2,backgroundColor:color?color:theme.primary.main,alignItems:'center',justifyContent:'center'},style],__source:{fileName:_jsxFileName,lineNumber:102}},children?children:this._renderItem());}},{key:"render",value:function render(){var _this$props5=this.props,onPress=_this$props5.onPress,ripple=_this$props5.ripple,rippleProps=_this$props5.rippleProps;if(onPress){return _react.default.createElement(_Ripple.default,(0,_extends2.default)({onPress:onPress,disable:!ripple,rippleContainerBorderRadius:100},rippleProps,{__source:{fileName:_jsxFileName,lineNumber:124}}),this._renderAvatarContent());}return this._renderAvatarContent();}}]);return Avatar;}(_react.Component);(0,_defineProperty2.default)(Avatar,"propTypes",{style:_propTypes.default.oneOfType([_propTypes.default.object,_propTypes.default.array]),theme:_propTypes.default.object,color:_propTypes.default.string,type:_propTypes.default.string,size:_propTypes.default.number,contentSize:_propTypes.default.number,contentColor:_propTypes.default.string,contentStyles:_propTypes.default.object,content:_propTypes.default.string,image:_propTypes.default.node,onPress:_propTypes.default.func,ripple:_propTypes.default.bool,rippleProps:_propTypes.default.object,testID:_propTypes.default.string,children:_propTypes.default.node});(0,_defineProperty2.default)(Avatar,"defaultProps",{size:24});var _default=(0,_withTheme.default)(Avatar);exports.default=_default;