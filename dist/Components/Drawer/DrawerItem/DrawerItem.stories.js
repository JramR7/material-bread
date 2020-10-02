var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _react=_interopRequireDefault(require("react"));var _reactNative=require("react-native");var _=require("../../..");var _Header=_interopRequireDefault(require("../../../storybook/components/Header"));var _Container=_interopRequireDefault(require("../../../storybook/components/Container"));var _storiesOf=require("../../../storybook/helpers/storiesOf");var _storybookState=require("@sambego/storybook-state");var _jsxFileName="/Users/ricbermo/development/material-bread/src/Components/Drawer/DrawerItem/DrawerItem.stories.js";var store=new _storybookState.Store({isOpen:true,isOpenPermanent:true});var DrawerContent=function DrawerContent(){return _react.default.createElement(_reactNative.View,{__source:{fileName:_jsxFileName,lineNumber:18}},_react.default.createElement(_.DrawerItem,{text:'Inbox',icon:'mail',active:true,__source:{fileName:_jsxFileName,lineNumber:19}}),_react.default.createElement(_.DrawerItem,{text:'Outbox',icon:'send',__source:{fileName:_jsxFileName,lineNumber:20}}),_react.default.createElement(_.DrawerItem,{text:'Favorites',icon:'favorite',__source:{fileName:_jsxFileName,lineNumber:21}}),_react.default.createElement(_.DrawerItem,{text:'Important',icon:'bookmark',__source:{fileName:_jsxFileName,lineNumber:22}}),_react.default.createElement(_.DrawerItem,{text:'Spam',icon:'error',__source:{fileName:_jsxFileName,lineNumber:23}}),_react.default.createElement(_.DrawerItem,{text:'Trash',icon:'delete',__source:{fileName:_jsxFileName,lineNumber:24}}));};var DrawerContentNoIcon=function DrawerContentNoIcon(){return _react.default.createElement(_reactNative.View,{__source:{fileName:_jsxFileName,lineNumber:31}},_react.default.createElement(_.DrawerItem,{text:'Inbox',active:true,__source:{fileName:_jsxFileName,lineNumber:32}}),_react.default.createElement(_.DrawerItem,{text:'Outbox',__source:{fileName:_jsxFileName,lineNumber:33}}),_react.default.createElement(_.DrawerItem,{text:'Favorites',__source:{fileName:_jsxFileName,lineNumber:34}}),_react.default.createElement(_.DrawerItem,{text:'Important',__source:{fileName:_jsxFileName,lineNumber:35}}),_react.default.createElement(_.DrawerItem,{text:'Spam',__source:{fileName:_jsxFileName,lineNumber:36}}),_react.default.createElement(_.DrawerItem,{text:'Trash',__source:{fileName:_jsxFileName,lineNumber:37}}));};var PageContent=function PageContent(){return _react.default.createElement(_reactNative.View,{style:{marginTop:20,alignItems:'center'},__source:{fileName:_jsxFileName,lineNumber:44}},_react.default.createElement(_.Heading,{type:4,style:{marginBottom:20},__source:{fileName:_jsxFileName,lineNumber:45}},"This is a page"),_react.default.createElement(_.BodyText,{text:"Click the menu button to open the drawer",__source:{fileName:_jsxFileName,lineNumber:48}}),_react.default.createElement(_.BodyText,{text:"Click outside the drawer to close it",__source:{fileName:_jsxFileName,lineNumber:49}}));};var pageWidth=_reactNative.Platform.OS=='web'?600:_reactNative.Dimensions.get('window').width;var _default=(0,_storiesOf.storiesOf)('Components|Drawer/DrawerItem',module).addParameters({jest:['Drawer']}).add('Simple',function(){return _react.default.createElement(_Container.default,{scroll:true,style:{padding:0},__source:{fileName:_jsxFileName,lineNumber:59}},_react.default.createElement(_Header.default,{title:'Drawer',__source:{fileName:_jsxFileName,lineNumber:60}}),_react.default.createElement(_storybookState.State,{store:store,style:{flex:1},__source:{fileName:_jsxFileName,lineNumber:61}},function(state){return _react.default.createElement(_reactNative.View,{style:styles.container,__source:{fileName:_jsxFileName,lineNumber:63}},_react.default.createElement(_.Drawer,{open:state.isOpen,pageWidth:pageWidth,pageHeight:500,drawerContent:_react.default.createElement(DrawerContent,{__source:{fileName:_jsxFileName,lineNumber:68}}),onClose:function onClose(){return store.set({isOpen:false});},animationTime:250,opacity:0.33,__source:{fileName:_jsxFileName,lineNumber:64}},_react.default.createElement(_reactNative.View,{style:styles.body,__source:{fileName:_jsxFileName,lineNumber:72}},_react.default.createElement(_.IconButton,{size:24,name:"menu",onPress:function onPress(){return store.set({isOpen:!state.isOpen});},__source:{fileName:_jsxFileName,lineNumber:73}}),_react.default.createElement(PageContent,{__source:{fileName:_jsxFileName,lineNumber:78}}))));}));}).add('no icon',function(){return _react.default.createElement(_Container.default,{scroll:true,style:{padding:0},__source:{fileName:_jsxFileName,lineNumber:87}},_react.default.createElement(_Header.default,{title:'Drawer',__source:{fileName:_jsxFileName,lineNumber:88}}),_react.default.createElement(_storybookState.State,{store:store,style:{flex:1},__source:{fileName:_jsxFileName,lineNumber:89}},function(state){return _react.default.createElement(_reactNative.View,{style:styles.container,__source:{fileName:_jsxFileName,lineNumber:91}},_react.default.createElement(_.Drawer,{open:state.isOpen,pageWidth:pageWidth,pageHeight:500,drawerContent:_react.default.createElement(DrawerContentNoIcon,{__source:{fileName:_jsxFileName,lineNumber:96}}),onClose:function onClose(){return store.set({isOpen:false});},animationTime:250,opacity:0.33,__source:{fileName:_jsxFileName,lineNumber:92}},_react.default.createElement(_reactNative.View,{style:styles.body,__source:{fileName:_jsxFileName,lineNumber:100}},_react.default.createElement(_.IconButton,{size:24,name:"menu",onPress:function onPress(){return store.set({isOpen:!state.isOpen});},__source:{fileName:_jsxFileName,lineNumber:101}}),_react.default.createElement(PageContent,{__source:{fileName:_jsxFileName,lineNumber:106}}))));}));});exports.default=_default;var styles=_reactNative.StyleSheet.create({container:{zIndex:1,position:'relative'},body:{backgroundColor:'#eee',width:pageWidth,height:500}});