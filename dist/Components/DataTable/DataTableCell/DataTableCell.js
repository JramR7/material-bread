var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _interopRequireWildcard=require("@babel/runtime/helpers/interopRequireWildcard");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));var _createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass"));var _possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));var _getPrototypeOf2=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));var _assertThisInitialized2=_interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));var _inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits"));var _defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));var _react=_interopRequireWildcard(require("react"));var _reactNative=require("react-native");var _propTypes=_interopRequireDefault(require("prop-types"));var _withTheme=_interopRequireDefault(require("../../../Theme/withTheme"));var _=require("../../../");var _DataTableCell=_interopRequireDefault(require("./DataTableCell.styles"));var _jsxFileName="/Users/ricbermo/development/material-bread/src/Components/DataTable/DataTableCell/DataTableCell.js";var TableCell=function(_Component){(0,_inherits2.default)(TableCell,_Component);function TableCell(props){var _this;(0,_classCallCheck2.default)(this,TableCell);_this=(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(TableCell).call(this,props));(0,_defineProperty2.default)((0,_assertThisInitialized2.default)(_this),"state",{roateIcon:new _reactNative.Animated.Value(0)});return _this;}(0,_createClass2.default)(TableCell,[{key:"componentDidUpdate",value:function componentDidUpdate(prevProps){var sortingIcon=this.props.sortingIcon;if(sortingIcon=='up'&&prevProps.sortingIcon=='down'){this.animateSortingIcon('up');}else if(sortingIcon=='down'&&prevProps.sortingIcon=='up'){this.animateSortingIcon('down');}}},{key:"animateSortingIcon",value:function animateSortingIcon(type){var value=type=='up'?1:0;_reactNative.Animated.timing(this.state.roateIcon,{toValue:value,duration:200}).start();}},{key:"_renderSortingIcon",value:function _renderSortingIcon(){return _react.default.createElement(_reactNative.Animated.View,{useNativeDriver:false,style:{transform:[{rotate:this.state.roateIcon.interpolate({inputRange:[0,1],outputRange:['0deg','180deg']})}]},__source:{fileName:_jsxFileName,lineNumber:60}},_react.default.createElement(_.Icon,{name:'arrow-downward',size:18,style:_DataTableCell.default.sortingIcon,__source:{fileName:_jsxFileName,lineNumber:72}}));}},{key:"_renderText",value:function _renderText(){var _this$props=this.props,text=_this$props.text,type=_this$props.type,sortingIcon=_this$props.sortingIcon,textStyle=_this$props.textStyle;var style=type=='header'?_DataTableCell.default.textHeader:_DataTableCell.default.text;var color=type=='header'?'rgba(0,0,0,.54)':'rgba(0,0,0,.87)';if(sortingIcon=='down'||sortingIcon=='up')color='black';return _react.default.createElement(_reactNative.Text,{style:[style,{color:color},textStyle],__source:{fileName:_jsxFileName,lineNumber:83}},text);}},{key:"render",value:function render(){var _this$props2=this.props,children=_this$props2.children,style=_this$props2.style,right=_this$props2.right,borderRight=_this$props2.borderRight,borderLeft=_this$props2.borderLeft,onPress=_this$props2.onPress,sortingIcon=_this$props2.sortingIcon,minWidth=_this$props2.minWidth,relativeWidth=_this$props2.relativeWidth;var minWidthImplemented=minWidth+minWidth*(relativeWidth-1);var platformStyles=_reactNative.Platform.OS=='web'?{}:{};return _react.default.createElement(_reactNative.TouchableWithoutFeedback,{disabled:!onPress,onPress:onPress,style:{flex:1},__source:{fileName:_jsxFileName,lineNumber:103}},_react.default.createElement(_reactNative.View,{style:[_DataTableCell.default.dataTableItem,{flex:1,justifyContent:right?'flex-end':'flex-start',borderRightWidth:borderRight?1:0,borderLeftWidth:borderLeft?1:0,minHeight:25,minWidth:minWidthImplemented,flexWrap:'wrap'},platformStyles,style],__source:{fileName:_jsxFileName,lineNumber:107}},sortingIcon?this._renderSortingIcon():null,children?children:this._renderText()));}}]);return TableCell;}(_react.Component);(0,_defineProperty2.default)(TableCell,"propTypes",{children:_propTypes.default.node,style:_propTypes.default.oneOfType([_propTypes.default.object,_propTypes.default.array]),right:_propTypes.default.bool,borderRight:_propTypes.default.bool,borderLeft:_propTypes.default.bool,minWidth:_propTypes.default.number,text:_propTypes.default.string,onPress:_propTypes.default.func,type:_propTypes.default.string,sortingIcon:_propTypes.default.string,relativeWidth:_propTypes.default.number,textStyle:_propTypes.default.oneOfType([_propTypes.default.object,_propTypes.default.array])});(0,_defineProperty2.default)(TableCell,"defaultProps",{relativeWidth:1,minWidth:100});var _default=(0,_withTheme.default)(TableCell);exports.default=_default;