var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _react=_interopRequireDefault(require("react"));var _reactNative=require("react-native");var _=require("../../../");var _Header=_interopRequireDefault(require("../../../storybook/components/Header"));var _Container=_interopRequireDefault(require("../../../storybook/components/Container"));var _storiesOf=require("../../../storybook/helpers/storiesOf");var _jsxFileName="/Users/cody/projects/material-bread/src/Components/Fab/FabSpeedDial/FabSpeedDial.stories.js";var actions=[_react.default.createElement(_.Fab,{key:1,backgroundColor:'#E91E63',icon:'archive',__source:{fileName:_jsxFileName,lineNumber:10}}),_react.default.createElement(_.Fab,{key:2,backgroundColor:'#F44336',icon:'delete',__source:{fileName:_jsxFileName,lineNumber:11}}),_react.default.createElement(_.Fab,{key:3,backgroundColor:'#009688',icon:'edit',__source:{fileName:_jsxFileName,lineNumber:12}}),_react.default.createElement(_.Fab,{key:4,backgroundColor:'black',icon:'attach-money',__source:{fileName:_jsxFileName,lineNumber:13}})];var actionsExtended=[_react.default.createElement(_.Fab,{key:4,label:"Buy",backgroundColor:'black',icon:'attach-money',__source:{fileName:_jsxFileName,lineNumber:17}}),_react.default.createElement(_.Fab,{key:3,label:"Edit",backgroundColor:'#009688',icon:'edit',__source:{fileName:_jsxFileName,lineNumber:18}}),_react.default.createElement(_.Fab,{key:2,label:"Delete",backgroundColor:'#F44336',icon:'delete',__source:{fileName:_jsxFileName,lineNumber:20}}),_react.default.createElement(_.Fab,{key:1,label:"Archive",backgroundColor:'#E91E63',icon:'archive',__source:{fileName:_jsxFileName,lineNumber:21}})];var _default=(0,_storiesOf.storiesOf)('Components|Fab/FabSpeedDial',module).addParameters({jest:['FabSpeedDial']}).add('simple',function(){return _react.default.createElement(_Container.default,{__source:{fileName:_jsxFileName,lineNumber:27}},_react.default.createElement(_Header.default,{title:'Fab SpeedDial',__source:{fileName:_jsxFileName,lineNumber:28}}),_react.default.createElement(_reactNative.View,{style:{flex:1,position:'relative',paddingTop:400},__source:{fileName:_jsxFileName,lineNumber:30}},_react.default.createElement(_.FabSpeedDial,{actions:actions,style:{marginTop:400},__source:{fileName:_jsxFileName,lineNumber:31}})));}).add('extended',function(){return _react.default.createElement(_Container.default,{__source:{fileName:_jsxFileName,lineNumber:36}},_react.default.createElement(_Header.default,{title:'Fab SpeedDial',__source:{fileName:_jsxFileName,lineNumber:37}}),_react.default.createElement(_reactNative.View,{style:{flex:1,position:'relative',paddingTop:400},__source:{fileName:_jsxFileName,lineNumber:39}},_react.default.createElement(_.FabSpeedDial,{extended:true,actions:actionsExtended,style:{marginTop:400},fab:_react.default.createElement(_.Fab,{label:"Open",icon:"add",__source:{fileName:_jsxFileName,lineNumber:44}}),__source:{fileName:_jsxFileName,lineNumber:40}})));});exports.default=_default;