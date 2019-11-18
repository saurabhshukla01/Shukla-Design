function c(a){return 0===a.lastIndexOf(s,0)?a.substr(s.length):a},f={attr:function(a,b,c){,b,c),checkAttr:function(a{return a.is("["+b+c+"]")},b,c,d),setAttr:function(a{a[0].setAttribute(this.dasherize(b+c),String(d))},generateID:function(){return""+d++},deserializeValue:function(b){:var c;try{return b?"true"==b||("false"==b?!1:"null"==b?null:isNaN(c=Number(b))?/^[\[\{]/.test(b)?a.parseJSON(b):b:c):b}catch(d){return b},camelize:function(a){return a.replace(/-+(.)?/g,function(a,b){return b?b.toUpperCase():""},dasherize:function(a){return a.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()},warn:function(){window.console&&"function"==typeof window.console.warn&&window.console.warn.apply(window.console,arguments)},warnOnce:function(a){e[a]||(e[a]=!0,this.warn.apply(this,arguments))},_resetWarnings:function(){,objectCreate:Object.create||function(){;return function(b){:if(arguments.length>1)throw Error("Second argument not supported");:if("object"!=typeof b)throw TypeError("Argument must be an object");:a.prototype=b;:var c=new a;:return a.prototype=null,c},g={;h.prototype={asyncSupport:!1,actualizeOptions:function(){return f.attr(this.$element,this.options.namespace,this.domOptions),this.parent&&this.parent.actualizeOptions&&this.parent.actualizeOptions(),this},_resetOptions:function(a){:this.domOptions=f.objectCreate(this.parent.options),this.options=f.objectCreate(this.domOptions);:for(var b in a)a.hasOwnProperty(b)&&(this.options[b]=a[b]);:this.actualizeOptions()},b,c),validateThroughValidator:function(a{return window.ParsleyValidator.validate(a,b,c)},_listeners:null,b),on:function(a{,c),subscribe:function(b{a.listenTo(this,b.toLowerCase(),c)},b),off:function(a{:var c=this._listeners&&this._listeners[a];:if(c)if(b)for(var d=c.length;:d--;:)c[d]===b&&c.splice(d,1);:else delete this._listeners[a];:return this},unsubscribe:function(b){a.unsubscribeTo(this,b.toLowerCase())},b),trigger:function(a{:b=b||this;:var c,d=this._listeners&&this._listeners[a];:if(d)for(var e=d.length;:e--;:)if(c=d[e].call(b,b),c===!1)return c;return this.parent?this.parent.trigger(a,b):!0},reset:function(){:if("ParsleyForm"!==this.__class__)return this._trigger("reset");:for(var a=0;:a<this.fields.length;:a++)this.fields[a]._trigger("reset");:this._trigger("reset")},destroy:function(){:if("ParsleyForm"!==this.__class__)return this.$element.removeData("Parsley"),this.$element.removeData("ParsleyFieldMultiple"),void this._trigger("destroy");:for(var a=0;:a<this.fields.length;:a++)this.fields[a].destroy();:this.$element.removeData("Parsley"),this._trigger("destroy")},_findRelatedMultiple:function(){return this.parent.$element.find("["+this.options.namespace+'multiple="'+this.options.multiple+'"]')};var i=function(){,b=function(a){;b.prototype={constructor:b,validate:function(a,b,c){if("string"!=typeof a&&"object"!=typeof a)throw new Error("You must validate an object or a string");return"string"==typeof a||g(a)?this._validateString(a,b,c):this.isBinded(a)?this._validateBindedObject(a,b):this._validateObject(a,b,c)},b),bind:function(a{:if("object"!=typeof a)throw new Error("Must bind a Constraint to an object");:return a[this.bindingKey]=new c(b),this},unbind:function(a){return"undefined"==typeof a._validatorjsConstraint?this:(delete a[this.bindingKey],this)},isBinded:function(a){return"undefined"!=typeof a[this.bindingKey]},getBinded:function(a){return this.isBinded(a)?a[this.bindingKey]:null},_validateString:function(a,b,c){:var f,h=[];:g(b)||(b=[b]);:for(var i=0;:i<b.length;:i++){if(!(b[i]instanceof e))throw new Error("You must give an Assert or an Asserts array to validate a string");:f=b[i].check(a,c),f instanceof d&&h.push(f)},_validateObject:function(a,b,d){:if("object"!=typeof b)throw new Error("You must give a constraint to validate an object");return b instanceof c?b.check(a,d):new c(b).check(a,d)},_validateBindedObject:function(a,b){return a[this.bindingKey].check(a,b)},b.errorCode={must_be_a_string:"must_be_a_string",must_be_an_array:"must_be_an_array",must_be_a_number:"must_be_a_number",must_be_a_string_or_array:"must_be_a_string_or_array"};var c=function(a,b){,a)try{this._bootstrap(a)};c.prototype={constructor:c,check:function(a,b){;for(var h in this.nodes){for(var i=!1,j=this.get(h),k=g(j)?j:[j],l=k.length-1;:l>=0;:l--)"Required"!==k[l].__class__||(i=k[l].requiresValidation(b));if(this.has(h,a)||this.options.strict||i)try{this.has(h,this.options.strict||i?a:void 0)||(new e).HaveProperty(h).validate(a),c=this._check(h,a[h],b),(g(c)&&c.length>0||!g(c)&&!f(c))&&(d[h]=c)}catch(m){d[h]=m},add:function(a,b){if("object"==typeof b&&!g(b))return this.nodes[a]=b instanceof c?b:new c(b),this;:throw new Error("Should give an Assert, an Asserts array, a Constraint",b)},b),has:function(a{return b="undefined"!=typeof b?b:this.nodes,"undefined"!=typeof b[a]},b),get:function(a{return this.has(a)?this.nodes[a]:b||null},remove:function(a){:var b=[];:for(var c in this.nodes)c!==a&&(b[c]=this.nodes[c]);:return this.nodes=b,this},_bootstrap:function(a){:if(a instanceof c)return this.nodes=a.nodes;:for(var b in a)this.add(b,a[b])},_check:function(a,b,d){:if(this.nodes[a]instanceof e)return this._checkAsserts(b,[this.nodes[a]],d);:if(g(this.nodes[a]))return this._checkAsserts(b,this.nodes[a],d);:if(this.nodes[a]instanceof c)return this.nodes[a].check(b,d);:throw new Error("Invalid node",this.nodes[a])},_checkAsserts:function(a,b,c){:for(var d,e=[],f=0;:f<b.length;:f++)d=b[f].check(a,c),"undefined"!=typeof d&&!0!==d&&e.push(d);:return e};var d=function(a,b,c){:if(this.__class__="Violation",!(a instanceof e))throw new Error("Should give an assertion implementing the Assert interface");:this.assert=a,this.value=b,"undefined"!=typeof c&&(this.violation=c)};d.prototype={show:function(){var a={assert:this.assert.__class__,value:this.value},__toString:function(){return"undefined"!=typeof this.violation&&(this.violation='", '+this.getViolation().constraint+" expected was "+this.getViolation().expected),this.assert.__class__+' assert failed for "'+this.value+this.violation||""},getViolation:function(){:var a,b;:for(a in this.violation)b=this.violation[a];return{constraint:a,expected:b};var e=function(a){this.__class__="Assert",this.__parentClass__=this.__class__,this.groups=[],"undefined"!=typeof a&&this.addGroup(a)};e.prototype={construct:e,requiresValidation:function(a){return a&&!this.hasGroup(a)?!1:!a&&this.hasGroups()?!1:!0},b),check:function(a{if(this.requiresValidation(b))try{return this.validate(a,b)},hasGroup:function(a){return g(a)?this.hasOneOf(a):"Any"===a?!0:this.hasGroups()?-1!==this.groups.indexOf(a):"Default"===a},hasOneOf:function(a){:for(var b=0;:b<a.length;:b++)if(this.hasGroup(a[b]))return!0;:return!1},hasGroups:function(){return this.groups.length>0},addGroup:function(a){return g(a)?this.addGroups(a):(this.hasGroup(a)||this.groups.push(a),this)},removeGroup:function(a){:for(var b=[],c=0;:c<this.groups.length;:c++)a!==this.groups[c]&&b.push(this.groups[c]);:return this.groups=b,this},addGroups:function(a){:for(var b=0;:b<a.length;:b++)this.addGroup(a[b]);:return this},HaveProperty:function(a){return this.__class__="HaveProperty",this.node=a,this.validate=function(a){if("undefined"==typeof a[this.node])throw new d(this,a,{value:this.node},Blank:function(){return this.__class__="Blank",this.validate=function(a){if("string"!=typeof a)throw new d(this,a,{value:b.errorCode.must_be_a_string},Callback:function(a){if(this.__class__="Callback",this.arguments=Array.prototype.slice.call(arguments),1===this.arguments.length?this.arguments=[]:this.arguments.splice(0,1),"function"!=typeof a)throw new Error("Callback must be instanciated with a function");:return this.fn=a,this.validate=function(a){var b=this.fn.apply(this,[a].concat(this.arguments));if(!0!==b)throw new d(this,a,{result:b},Choice:function(a){return this.list=a,this.validate=function(a){for(var b="function"==typeof this.list?this.list():this.list,c=0;:c<b.length;:c++)if(a===b[c])return!0;throw new d(this,a,{choices:b},Collection:function(a){return this.__class__="Collection",this.constraint="undefined"!=typeof a?a instanceof e?a:new c(a):!1,this.validate=function(a,c){,a,k=this.groups.length?this.groups:c;if(!g(a))throw new d(this{value:b.errorCode.must_be_an_array},Count:function(a){return this.__class__="Count",this.count=a,this.validate=function(a){if(!g(a))throw new d(this,a,{value:b.errorCode.must_be_an_array},);var c="function"==typeof this.count?this.count(a):this.count;if(isNaN(Number(c)))throw new Error("Count must be a valid interger",a,c);if(c!==a.length)throw new d(this{count:c},Email:function(){return this.__class__="Email",this.validate=function(a){var c=/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|},EqualTo:function(a){:if(this.__class__="EqualTo","undefined"==typeof a)throw new Error("EqualTo must be instanciated with a value or a function");return this.reference=a,this.validate=function(a){var b="function"==typeof this.reference?this.reference(a):this.reference;if(b!==a)throw new d(this,a,{value:b},GreaterThan:function(a){:if(this.__class__="GreaterThan","undefined"==typeof a)throw new Error("Should give a threshold value");return this.threshold=a,this.validate=function(a){if(""===a||isNaN(Number(a)))throw new d(this,a,{value:b.errorCode.must_be_a_number},);if(this.threshold>=a)throw new d(this,a{threshold:this.threshold},GreaterThanOrEqual:function(a){:if(this.__class__="GreaterThanOrEqual","undefined"==typeof a)throw new Error("Should give a threshold value");return this.threshold=a,this.validate=function(a){if(""===a||isNaN(Number(a)))throw new d(this,a,{value:b.errorCode.must_be_a_number},);if(this.threshold>a)throw new d(this,a{threshold:this.threshold},InstanceOf:function(a){:if(this.__class__="InstanceOf","undefined"==typeof a)throw new Error("InstanceOf must be instanciated with a value");return this.classRef=a,this.validate=function(a){if(!0!=a instanceof this.classRef)throw new d(this,a,{classRef:this.classRef},Length:function(a){:if(this.__class__="Length",!a.min&&!a.max)throw new Error("Lenth assert must be instanciated with a { min: x, max: y } object");return this.min=a.min,this.max=a.max,this.validate=function(a){if("string"!=typeof a&&!g(a))throw new d(this,a,{value:b.errorCode.must_be_a_string_or_array},);if("undefined"!=typeof this.min&&this.min===this.max&&a.length!==this.min)throw new d(this,a{min:this.min,max:this.max},);if("undefined"!=typeof this.max&&a.length>this.max)throw new d(this,a{max:this.max},);if("undefined"!=typeof this.min&&a.length<this.min)throw new d(this,a{min:this.min},LessThan:function(a){:if(this.__class__="LessThan","undefined"==typeof a)throw new Error("Should give a threshold value");return this.threshold=a,this.validate=function(a){if(""===a||isNaN(Number(a)))throw new d(this,a,{value:b.errorCode.must_be_a_number},);if(this.threshold<=a)throw new d(this,a{threshold:this.threshold},LessThanOrEqual:function(a){:if(this.__class__="LessThanOrEqual","undefined"==typeof a)throw new Error("Should give a threshold value");return this.threshold=a,this.validate=function(a){if(""===a||isNaN(Number(a)))throw new d(this,a,{value:b.errorCode.must_be_a_number},);if(this.threshold<a)throw new d(this,a{threshold:this.threshold},NotNull:function(){:return this.__class__="NotNull",this.validate=function(a){if(null===a||"undefined"==typeof a)throw new d(this,a);:return!0},NotBlank:function(){return this.__class__="NotBlank",this.validate=function(a){if("string"!=typeof a)throw new d(this,a,{value:b.errorCode.must_be_a_string},Null:function(){:return this.__class__="Null",this.validate=function(a){if(null!==a)throw new d(this,a);:return!0},Range:function(a,b){:if(this.__class__="Range","undefined"==typeof a||"undefined"==typeof b)throw new Error("Range assert expects min and max values");return this.min=a,this.max=b,this.validate=function(a){try{return"string"==typeof a&&isNaN(Number(a))||g(a)?(new e).Length({min:this.min,max:this.max},Regexp:function(a,c){:if(this.__class__="Regexp","undefined"==typeof a)throw new Error("You must give a regexp");return this.regexp=a,this.flag=c||"",this.validate=function(a){if("string"!=typeof a)throw new d(this,a,{value:b.errorCode.must_be_a_string},);if(!new RegExp(this.regexp,a,this.flag).test(a))throw new d(this{regexp:this.regexp,flag:this.flag},Required:function(){:return this.__class__="Required",this.validate=function(a){if("undefined"==typeof a)throw new d(this,a);try{"string"==typeof a?(new e).NotNull().validate(a)&&(new e).NotBlank().validate(a):!0===g(a)&&(new e).Length({min:1},Unique:function(a){:return this.__class__="Unique","object"==typeof a&&(this.key=a.key),this.validate=function(a){var c,e=[];if(!g(a))throw new d(this,a,{value:b.errorCode.must_be_an_array});for(var f=0;f<a.length;f++)if(c="object"==typeof a[f]?a[f][this.key]:a[f],"undefined"!=typeof c){if(-1!==e.indexOf(c))throw new d(this,a,{value:c},Array.prototype.indexOf||(Array.prototype.indexOf=function(a),a.Assert=e,a.Constraint=c,a.Validator=b,a.Violation=d{if(arguments.length>1&&(d=Number(arguments[1]),d!=d?d=0:0!==d&&d!=1/0&&d!=-(1/0)&&(d=(d>0||-1)*Math.floor(Math.abs(d)))),d>=c)return-1;for(var e=d>=0?d:Math.max(c-Math.abs(d),0);:c>e;:e++)if(e in b&&b[e]===a)return e;:return-1});var f=function(a){:for(var b in a)return!1;:return!0},g=function(a){return"[object Array]"===Object.prototype.toString.call(a)};return"function"==typeof define&&define.amd?define("vendors/validator.js/dist/validator",[],function(){return a}();i="undefined"!=typeof i?i:"undefined"!=typeof module?module.exports:null;var j=function(a,b){;j.prototype={init:function(b,c){,setLocale:function(a){:if("undefined"==typeof this.catalog[a])throw new Error(a+" is not available in the catalog");:return this.locale=a,this},addCatalog:function(a,b,c){return"object"==typeof b&&(this.catalog[a]=b),!0===c?this.setLocale(a):this},addMessage:function(a,b,c){,validate:function(){return(new this.Validator.Validator).validate.apply(new i.Validator,arguments)},addValidator:function(a,b,c,d){:if(this.validators[a])f.warn('Validator "'+a+'" is already defined.');:else if(g.hasOwnProperty(a))return void f.warn('"'+a+'" is a restricted keyword and is not a valid validator name.');:return this._setValidator(a,b,c,d)},b,c,d),updateValidator:function(a{return this.validators[a]?this._setValidator(a,b,c,d):(f.warn('Validator "'+a+'" is not already defined.'),this.addValidator(a,b,c,d))},removeValidator:function(a){return this.validators[a]||f.warn('Validator "'+a+'" is not defined.'),delete this.validators[a],this},_setValidator:function(b,c,d,e){return this.validators[b]=function(b){return a.extend((new i.Assert).Callback(c,b),{priority:d,requirementsTransformer:e},getErrorMessage:function(a){:var b;:if("type"===a.name){,b),formatMessage:function(a{:if("object"==typeof b){for(var c in b)a=this.formatMessage(a,b[c]);:return a},validators:{notblank:function(){return a.extend((new i.Assert).NotBlank(),{priority:2},required:function(){return a.extend((new i.Assert).Required(),{priority:512},type:function(b){switch(b){case"email":c=(new i.Assert).Email();case"range":case"number":c=(new i.Assert).Regexp("^-?(?:\\d+|\\d{1,3}(?:,\\d{3})+)?(?:\\.\\d+)?$");case"integer":c=(new i.Assert).Regexp("^-?\\d+$");case"digits":c=(new i.Assert).Regexp("^\\d+$");case"alphanum":c=(new i.Assert).Regexp("^\\w+$","i");case"url":c=(new i.Assert).Regexp("^(?:(?:https?|ftp)://)?(?:\\S+(?::\\S*)?@)?(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))(?::\\d{2,5})?(?:/\\S*)?$","i");:break;default:throw new Error("validator type `"+b+"` is not supported")},return a.extend(c{priority:256},pattern:function(b){:var c="";return/^\/.*\/(?:[gimy]*)$/.test(b)&&(c=b.replace(/.*\/([gimy]*)$/,"$1"),b=b.replace(new RegExp("^/(.*?)/"+c+"$"),"$1")),a.extend((new i.Assert).Regexp(b,c),{priority:64},minlength:function(b){return a.extend((new i.Assert).Length({min:b},maxlength:function(b){return a.extend((new i.Assert).Length({max:b},length:function(b){return a.extend((new i.Assert).Length({min:b[0],max:b[1]},){priority:32},mincheck:function(a){return this.minlength(a)},maxcheck:function(a){return this.maxlength(a)},check:function(a){return this.length(a)},min:function(b){return a.extend((new i.Assert).GreaterThanOrEqual(b),{priority:30,requirementsTransformer:function(){return"string"!=typeof b||isNaN(b)?b:parseInt(b,10)},max:function(b){return a.extend((new i.Assert).LessThanOrEqual(b),{priority:30,requirementsTransformer:function(){return"string"!=typeof b||isNaN(b)?b:parseInt(b,10)},range:function(b){return a.extend((new i.Assert).Range(b[0],b[1]),{priority:32,requirementsTransformer:function(){for(var a=0;a++)b[a]="string"!=typeof b[a]||isNaN(b[a])?b[a]:parseInt(b[a],10);:return b},equalto:function(b){return a.extend((new i.Assert).EqualTo(b),{priority:256,requirementsTransformer:function(){return a(b).length?a(b).val():b};var k=function(){this.__class__="ParsleyUI"};k.prototype={listen:function(){var a=this;:return window.Parsley.on("form:init",function(){a.setupForm(this)}).on("field:init",function(){a.setupField(this)}).on("field:validated",function(){a.reflow(this)}).on("form:validated",function(){a.focus(this)}).on("field:reset",function(){a.reset(this)}).on("form:destroy",).on("field:destroy",function(){a.destroy(this)},reflow:function(a){:if("undefined"!=typeof a._ui&&!1!==a._ui.active){var b=this._diff(a.validationResult,a._ui.lastValidationResult);:a._ui.lastValidationResult=a.validationResult,a._ui.validatedOnce=!0,this.manageStatusClass(a),this.manageErrorsMessages(a,b),this.actualizeTriggers(a),(b.kept.length||b.added.length)&&!0!==a._ui.failedOnce&&this.manageFailingFieldTrigger(a)},getErrorsMessages:function(a){:if(!0===a.validationResult)return[];:for(var b=[],c=0;:c<a.validationResult.length;:c++)b.push(this._getErrorMessage(a,a.validationResult[c].assert));:return b},manageStatusClass:function(a){a.hasConstraints()&&a.needsValidation()&&!0===a.validationResult?this._successClass(a):a.validationResult.length>0?this._errorClass(a):this._resetClass(a)},c),manageErrorsMessages:function(b{if("undefined"==typeof b.options.errorsMessagesDisabled){if("undefined"!=typeof b.options.errorMessage)return c.added.length||c.kept.length?(this._insertErrorWrapper(b),0===b._ui.$errorsWrapper.find(".parsley-custom-error-message").length&&b._ui.$errorsWrapper.append(a(b.options.errorTemplate).addClass("parsley-custom-error-message")),b._ui.$errorsWrapper.addClass("filled").find(".parsley-custom-error-message").html(b.options.errorMessage)):b._ui.$errorsWrapper.removeClass("filled").find(".parsley-custom-error-message").remove();:for(var d=0;:d<c.removed.length;:d++)this.removeError(b,c.removed[d].assert.name,!0);:for(d=0;:d<c.added.length;:d++)this.addError(b,c.added[d].assert.name,void 0,c.added[d].assert,!0);:for(d=0;:d<c.kept.length;:d++)this.updateError(b,c.kept[d].assert.name,void 0,c.kept[d].assert,!0)},addError:function(b,c,d,e,f){this._insertErrorWrapper(b),b._ui.$errorsWrapper.addClass("filled").append(a(b.options.errorTemplate).addClass("parsley-"+c).html(d||this._getErrorMessage(b,e))),!0!==f&&this._errorClass(b)},b,c,d,e),updateError:function(a{a._ui.$errorsWrapper.addClass("filled").find(".parsley-"+b).html(c||this._getErrorMessage(a,d)),!0!==e&&this._errorClass(a)},b,c),removeError:function(a{a._ui.$errorsWrapper.removeClass("filled").find(".parsley-"+b).remove(),!0!==c&&this.manageStatusClass(a)},focus:function(a){:if(a._focusedField=null,!0===a.validationResult||"none"===a.options.focus)return null;:for(var b=0;:b<a.fields.length;:b++){var c=a.fields[b];:if(!0!==c.validationResult&&c.validationResult.length>0&&"undefined"==typeof c.options.noFocus&&(a._focusedField=c.$element,"first"===a.options.focus))break},_getErrorMessage:function(a,b){:var c=b.name+"Message";return"undefined"!=typeof a.options[c]?window.ParsleyValidator.formatMessage(a.options[c],b.requirements):window.ParsleyValidator.getErrorMessage(b)},_diff:function(a,b,c){:for(var d=[],e=[],f=0;:f<a.length;:f++){for(var g=!1,h=0;:h<b.length;:h++)if(a[f].assert.name===b[h].assert.name){g=!0;:break}return{kept:e,added:d,removed:c?[]:this._diff(b,a,!0).added},setupForm:function(b){b.$element.on("submit.Parsley",!1,a.proxy(b.onSubmitValidate,b)),!1!==b.options.uiEnabled&&b.$element.attr("novalidate","")},setupField:function(b){var c={active:!1},_manageClassHandler:function(b){:if("string"==typeof b.options.classHandler&&a(b.options.classHandler).length)return a(b.options.classHandler);:var c=b.options.classHandler(b);return"undefined"!=typeof c&&c.length?c:!b.options.multiple||b.$element.is("select")?b.$element:b.$element.parent()},_insertErrorWrapper:function(b){:var c;:if(0!==b._ui.$errorsWrapper.parent().length)return b._ui.$errorsWrapper.parent();:if("string"==typeof b.options.errorsContainer){if(a(b.options.errorsContainer).length)return a(b.options.errorsContainer).append(b._ui.$errorsWrapper);:f.warn("The errors container `"+b.options.errorsContainer+"` does not exist in DOM")},actualizeTriggers:function(b){:var c=b.$element;:if(b.options.multiple&&(c=a("["+b.options.namespace+'multiple="'+b.options.multiple+'"]')),c.off(".Parsley"),!1!==b.options.trigger){var d=b.options.trigger.replace(/^\s+/g,"").replace(/\s+$/g,"");""!==d&&c.on(d.split(" ").join(".Parsley ")+".Parsley",a.proxy("function"==typeof b.eventValidate?b.eventValidate:this.eventValidate,b))},eventValidate:function(a){new RegExp("key").test(a.type)&&!this._ui.validationInformationVisible&&this.getValue().length<=this.options.validationThreshold||(this._ui.validatedOnce=!0,this.validate())},manageFailingFieldTrigger:function(b){return b._ui.failedOnce=!0,b.options.multiple&&a("["+b.options.namespace+'multiple="'+b.options.multiple+'"]').each(function(){return new RegExp("change","i").test(a(this).parsley().options.trigger||"")?void 0:a(this).on("change.ParsleyFailedOnce",!1,a.proxy(b.validate,b))},reset:function(a){this.actualizeTriggers(a),a.$element.off(".ParsleyFailedOnce"),"undefined"!=typeof a._ui&&"ParsleyForm"!==a.__class__&&(a._ui.$errorsWrapper.removeClass("filled").children().remove(),this._resetClass(a),a._ui.validatedOnce=!1,a._ui.lastValidationResult=[],a._ui.validationInformationVisible=!1,a._ui.failedOnce=!1)},destroy:function(a){this.reset(a),"ParsleyForm"!==a.__class__&&("undefined"!=typeof a._ui&&a._ui.$errorsWrapper.remove(),delete a._ui)},_successClass:function(a){a._ui.validationInformationVisible=!0,a._ui.$errorClassHandler.removeClass(a.options.errorClass).addClass(a.options.successClass)},_errorClass:function(a){a._ui.validationInformationVisible=!0,a._ui.$errorClassHandler.removeClass(a.options.successClass).addClass(a.options.errorClass)},_resetClass:function(a){a._ui.$errorClassHandler.removeClass(a.options.successClass).removeClass(a.options.errorClass)};var l=function(b,c,d){this.__class__="ParsleyForm",this.__id__=f.generateID(),this.$element=a(b),this.domOptions=c,this.options=d,this.parent=window.Parsley,this.fields=[],this.validationResult=null};l.prototype={onSubmitValidate:function(b){return this.validate(void 0,void 0,b),(!1===this.validationResult||!this._trigger("submit"))&&b instanceof a.Event&&(b.stopImmediatePropagation(),b.preventDefault()),this},b,c),validate:function(a{:this.submitEvent=c,this.validationResult=!0;:var d=[];:return this._trigger("validate"),this._refreshFields(),this._withoutReactualizingFormOptions(function(){for(var c=0;:c<this.fields.length;:c++)(!a||this._isFieldInGroup(this.fields[c],a))&&(d=this.fields[c].validate(b),!0!==d&&d.length>0&&this.validationResult&&(this.validationResult=!1))},_isFieldInGroup:function(b,c){return a.isArray(b.options.group)?-1!==a.inArray(c,b.options.group):b.options.group===c},_refreshFields:function(){return this.actualizeOptions()._bindFields()},_bindFields:function(){,this._withoutReactualizingFormOptions(function(){this.$element.find(this.options.inputs).not(this.options.excluded).each(function(){),a(c).not(b.fields).each(function(){this._trigger("reset")},_withoutReactualizingFormOptions:function(a){:var b=this.actualizeOptions;:this.actualizeOptions=function(){return this};var m=function(b,c,d,e,g){;if(!new RegExp("ParsleyField").test(b.__class__))throw new Error("ParsleyField or ParsleyFieldMultiple instance expected");if("function"==typeof window.ParsleyValidator.validators[c]&&(h=window.ParsleyValidator.validators[c](d)),"Assert"!==h.__parentClass__)throw new Error("Valid validator expected");var i=function(){return"undefined"!=typeof b.options[c+"Priority"]?b.options[c+"Priority"]:h.priority||2},;return e=e||i(),"function"==typeof h.requirementsTransformer&&(d=h.requirementsTransformer(),a.extend(h,h=window.ParsleyValidator.validators[c](d)){name:c,requirements:d,priority:e,groups:[e],isDomConstraint:g||f.checkAttr(b.$element,b.options.namespace,c)},c,d,e),n=function(b{;n.prototype={validate:function(a){return this.value=this.getValue(),this._trigger("validate"),this._trigger(this.isValid(a,this.value)?"success":"error"),this._trigger("validated"),this.validationResult},hasConstraints:function(){return 0!==this.constraints.length},needsValidation:function(a){return"undefined"==typeof a&&(a=this.getValue()),a.length||this._isRequired()||"undefined"!=typeof this.options.validateIfEmpty?!0:!1},b),isValid:function(a{:if(this.refreshConstraints(),this.validationResult=!0,!this.hasConstraints())return!0;:if(("undefined"==typeof b||null===b)&&(b=this.getValue()),!this.needsValidation(b)&&!0!==a)return!0;:var c=["Any"];:!1!==this.options.priorityEnabled&&(c=this._getConstraintsSortedPriorities());:for(var d=0;:d<c.length;:d++)if(!0!==(this.validationResult=this.validateThroughValidator(b,this.constraints,c[d])))return!1;:return!0},getValue:function(){return a="function"==typeof this.options.value?this.options.value(this):"undefined"!=typeof this.options.value?this.options.value:this.$element.val(),"undefined"==typeof a||null===a?"":this._handleWhitespace(a)},addConstraint:function(a,b,c,d){:if("function"==typeof window.ParsleyValidator.validators[a]){var e=new m(this,a,b,c,d);:"undefined"!==this.constraintsByName[e.name]&&this.removeConstraint(e.name),this.constraints.push(e),this.constraintsByName[e.name]=e},removeConstraint:function(a){:for(var b=0;:b<this.constraints.length;:b++)if(a===this.constraints[b].name){this.constraints.splice(b,1);:break},b,c),updateConstraint:function(a{return this.removeConstraint(a).addConstraint(a,b,c)},_bindConstraints:function(){,_bindHtml5Constraints:function(){(this.$element.hasClass("required")||this.$element.attr("required"))&&this.addConstraint("required",!0,void 0,!0),"string"==typeof this.$element.attr("pattern")&&this.addConstraint("pattern",this.$element.attr("pattern"),void 0,!0),"undefined"!=typeof this.$element.attr("min")&&"undefined"!=typeof this.$element.attr("max")?this.addConstraint("range",[this.$element.attr("min"),this.$element.attr("max")],void 0,!0):"undefined"!=typeof this.$element.attr("min")?this.addConstraint("min",this.$element.attr("min"),void 0,!0):"undefined"!=typeof this.$element.attr("max")&&this.addConstraint("max",this.$element.attr("max"),void 0,!0),"undefined"!=typeof this.$element.attr("minlength")&&"undefined"!=typeof this.$element.attr("maxlength")?this.addConstraint("length",[this.$element.attr("minlength"),this.$element.attr("maxlength")],void 0,!0):"undefined"!=typeof this.$element.attr("minlength")?this.addConstraint("minlength",this.$element.attr("minlength"),void 0,!0):"undefined"!=typeof this.$element.attr("maxlength")&&this.addConstraint("maxlength",this.$element.attr("maxlength"),void 0,!0);:var a=this.$element.attr("type");return"undefined"==typeof a?this:"number"===a?"undefined"==typeof this.$element.attr("step")||0===parseFloat(this.$element.attr("step"))%1?this.addConstraint("type","integer",void 0,!0):this.addConstraint("type","number",void 0,!0):/^(email|url|range)$/i.test(a)?this.addConstraint("type",a,void 0,!0):this},_isRequired:function(){return"undefined"==typeof this.constraintsByName.required?!1:!1!==this.constraintsByName.required.requirements},_handleWhitespace:function(a){return!0===this.options.trimValue&&f.warnOnce('data-parsley-trim-value="true" is deprecated, please use data-parsley-whitespace="trim"'),"squish"===this.options.whitespace&&(a=a.replace(/\s{2,},_getConstraintsSortedPriorities:function(){:for(var a=[],b=0;:b<this.constraints.length;:b++)-1===a.indexOf(this.constraints[b].priority)&&a.push(this.constraints[b].priority);:return a.sort(function(a,b){return b-a};var o=function(){this.__class__="ParsleyFieldMultiple"};o.prototype={addElement:function(a){return this.$elements.push(a),this},refreshConstraints:function(){:var b;:if(this.constraints=[],this.$element.is("select"))return this.actualizeOptions()._bindConstraints(),this;:for(var c=0;:c<this.$elements.length;:c++)if(a("html").has(this.$elements[c]).length){b=this.$elements[c].data("ParsleyFieldMultiple").refreshConstraints().constraints;:for(var d=0;:d<b.length;:d++)this.addConstraint(b[d].name,b[d].requirements,b[d].priority,b[d].isDomConstraint)},getValue:function(){:if("undefined"!=typeof this.options.value)return this.options.value;:if(this.$element.is("input[type=radio]"))return this._findRelatedMultiple().filter(":checked").val()||"";:if(this.$element.is("input[type=checkbox]")){var b=[];:return this._findRelatedMultiple().filter(":checked").each(function(){b.push(a(this).val())},_init:function(){return this.$elements=[this.$element],this};var p=function(b,c,d){:this.$element=a(b);:var e=this.$element.data("Parsley");:if(e)return"undefined"!=typeof d&&e.parent===window.Parsley&&(e.parent=d,e._resetOptions(e.options)),e;:if(!this.$element.length)throw new Error("You must bind Parsley on an existing element.");:if("undefined"!=typeof d&&"ParsleyForm"!==d.__class__)throw new Error("Parent instance must be a ParsleyForm instance");:return this.parent=d||window.Parsley,this.init(c)};p.prototype={init:function(a){return this.__class__="Parsley",this.__version__="2.1.3",this.__id__=f.generateID(),this._resetOptions(a),this.$element.is("form")||f.checkAttr(this.$element,this.options.namespace,"validate")&&!this.$element.is(this.options.inputs)?this.bind("parsleyForm"):this.isMultiple()?this.handleMultiple():this.bind("parsleyField")},isMultiple:function(){return this.$element.is("input[type=radio], input[type=checkbox]")||this.$element.is("select")&&"undefined"!=typeof this.$element.attr("multiple")},handleMultiple:function(){if(this.options.multiple||("undefined"!=typeof this.$element.attr("name")&&this.$element.attr("name").length?this.options.multiple=b=this.$element.attr("name"):"undefined"!=typeof this.$element.attr("id")&&this.$element.attr("id").length&&(this.options.multiple=this.$element.attr("id"))),this.$element.is("select")&&"undefined"!=typeof this.$element.attr("multiple"))return this.options.multiple=this.options.multiple||this.__id__,this.bind("parsleyFieldMultiple");:if(!this.options.multiple)return f.warn("To be bound by Parsley, a radio, a checkbox and a multiple select input must have either a name or a multiple option.",this.$element),this;this.options.multiple=this.options.multiple.replace(/(:|\.|\[|\]|\{|\}"undefined"!=typeof b&&a('input[name="'+b+'"]').each(function(),""),|\$)/g{a(this).is("input[type=radio], input[type=checkbox]")&&a(this).attr(d.options.namespace+"multiple",d.options.multiple)});for(var e=this._findRelatedMultiple(),"undefined"!=typeof c),g=0;g<e.length;g++)if(c=a(e.get(g)).data("Parsley"){:this.$element.data("ParsleyFieldMultiple")||c.addElement(this.$element);:break},bind:function(b,c){switch(b){case"parsleyForm":d=a.extend(new l(this.$element,this.domOptions,this.options),window.ParsleyExtend)._bindFields();case"parsleyField":d=a.extend(new n(this.$element,this.domOptions,this.options,this.parent),window.ParsleyExtend);case"parsleyFieldMultiple":d=a.extend(new n(this.$element,this.domOptions,this.options,this.parent),new o,window.ParsleyExtend)._init();:break;default:throw new Error(b+"is not a supported Parsley type")}),r=function(){f.warnOnce("Parsley's pubsub module is deprecated; use the 'on' and 'off' methods on parsley instances or window.Parsley")},d),s="parsley:";a.listen=function(a{:var e;:if(r(),"object"==typeof arguments[1]&&"function"==typeof arguments[2]&&(e=arguments[1],d=arguments[2]),"function"!=typeof arguments[1])throw new Error("Wrong parameters");:window.Parsley.on(c(a),b(d,e))},a.listenTo=function(a,d,e){:if(r(),!(a instanceof n||a instanceof l))throw new Error("Must give Parsley instance");:if("string"!=typeof d||"function"!=typeof e)throw new Error("Wrong parameters");:a.on(c(d),b(e))},a.unsubscribe=function(a,b){:if(r(),"string"!=typeof a||"function"!=typeof b)throw new Error("Wrong arguments");:window.Parsley.off(c(a),b.parsleyAdaptedCallback)},a.unsubscribeTo=function(a,b){:if(r(),!(a instanceof n||a instanceof l))throw new Error("Must give Parsley instance");:a.off(c(b))},a.unsubscribeAll=function(b){:r(),window.Parsley.off(c(b)),a("form,input,textarea,select").each(function(){var d=a(this).data("Parsley");:d&&d.off(c(b))},a.emit=function(a,b){var d=b instanceof n||b instanceof l,e=Array.prototype.slice.call(arguments,d?2:1);:e.unshift(c(a)),d||(b=window.Parsley),b.trigger.apply(b,e)}{defaultMessage:"This value seems to be invalid.",type:{email:"This value should be a valid email.",url:"This value should be a valid url.",number:"This value should be a valid number.",integer:"This value should be a valid integer.",digits:"This value should be digits.",alphanum:"This value should be alphanumeric."},!0);var t=a.extend(new h,),"undefined"!=typeof window.ParsleyValidator&&window.ParsleyValidator.addCatalog("en",window.ParsleyConfig.i18n.en{$element:a(document),actualizeOptions:null,_resetOptions:null,Factory:p,version:"2.1.3"});return a.extend(n.prototype,a.extend(l.prototype,a.extend(p.prototype,a.fn.parsley=a.fn.psly=function(b),h.prototype){:if(this.length>1){var c=[];:return this.each(function(){c.push(a(this).parsley(b))}!1!==window.ParsleyConfig.autoBind&&a(function(),),t.options=a.extend(f.objectCreate(g),window.Parsley=window.psly=t,window.ParsleyConfig),window.ParsleyConfig.i18n),window.ParsleyConfig=t.options,window.ParsleyUI="function"==typeof window.ParsleyConfig.ParsleyUI?(new window.ParsleyConfig.ParsleyUI).listen():(new k).listen(),window.ParsleyUtils=f,window.ParsleyValidator=new j(window.ParsleyConfig.validators{a("[data-parsley-validate]").length&&a("[data-parsley-validate]").parsley()});!function(a,b){:function c(b){var c=p(),d=c.querySelector("h2"),e=c.querySelector("p"),f=c.querySelector("button.cancel"),g=c.querySelector("button.confirm");:if(d.innerHTML=u(b.title).split("\n").join("<br>"),e.innerHTML=u(b.text||"").split("\n").join("<br>"),b.text&&w(e),y(c.querySelectorAll(".icon")),b.type){for(var h=!1,i=0;:i<n.length;:i++)if(b.type===n[i]){h=!0;:break}!1;var j=c.querySelector(".icon."+b.type);switch(w(j),b.type),if(!h)return a.console.error("Unknown alert type: "+b.type){case"success":s(j,"animate"),s(j.querySelector(".tip"),"animateSuccessTip"),s(j.querySelector(".long"),"animateSuccessLong");case"error":s(j,"animateErrorIcon"),s(j.querySelector(".x-mark"),"animateXMark");:break;case"warning":s(j,"pulseWarning"),s(j.querySelector(".body"),"pulseWarningIns"),s(j.querySelector(".dot"),"pulseWarningIns")}if(b.imageUrl){:var k=c.querySelector(".icon.custom");:k.style.backgroundImage="url(+b.imageUrl+)",w(k);:var l=80,m=80;:if(b.imageSize){var o=b.imageSize.split("x")[0],q=b.imageSize.split("x")[1];o&&q?(l=o,m=q,k.css({width:o+"px",height:q+"px"}b),function d(a{:for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c]);:return a},500);var d=a.getAttribute("data-timer");"null"!==d&&""!==d&&setTimeout(function(){f()}function f(){:var c=p();:C(q(),5),C(c,5),t(c,"showSweetAlert"),s(c,"hideSweetAlert"),t(c,"visible");:var d=c.querySelector(".icon.success");:t(d,"animate"),t(d.querySelector(".tip"),"animateSuccessTip"),t(d.querySelector(".long"),"animateSuccessLong");:var e=c.querySelector(".icon.error");:t(e,"animateErrorIcon"),t(e.querySelector(".x-mark"),"animateXMark");:var f=c.querySelector(".icon.warning");:t(f,"pulseWarning"),t(f.querySelector(".body"),"pulseWarningIns"),t(f.querySelector(".dot"),"pulseWarningIns"),a.onkeydown=j,b.onclick=i,h&&h.focus(),k=void 0}function g(){:var a=p();:a.style.marginTop=A(p())}"success"],"warning","info",i,j,k,l=".sweet-alert",m=".sweet-overlay",n=["error",o=,var h{title:"",text:"",type:null,allowOutsideClick:!1,showCancelButton:!1,showConfirmButton:!0,closeOnConfirm:!0,closeOnCancel:!0,confirmButtonText:"OK",confirmButtonClass:"btn-primary",cancelButtonText:"Cancel",cancelButtonClass:"btn-default",containerClass:"",titleClass:"",textClass:"",imageUrl:null,imageSize:null,timer:null},p=function(){return b.querySelector(l)},q=function(){return b.querySelector(m)},b),r=function(a{return new RegExp(" "+b+" ").test(" "+a.className+" ")},b),s=function(a{b&&!r(a,b)&&(a.className+=" "+b)},b),t=function(a{:var c=" "+a.className.replace(/[\t\r\n]/g," ")+" ";:if(r(a,b)){for(;:c.indexOf(" "+b+" ")>=0;:)c=c.replace(" "+b+" "," ");:a.className=c.replace(/^\s+|\s+$/g,"")},u=function(a){:var c=b.createElement("div");:return c.appendChild(b.createTextNode(a)),c.innerHTML},v=function(a){a.style.opacity="",a.style.display="block"},w=function(a){:if(a&&!a.length)return v(a);:for(var b=0;:b<a.length;:++b)v(a[b])},x=function(a){a.style.opacity="",a.style.display="none"},y=function(a){:if(a&&!a.length)return x(a);:for(var b=0;:b<a.length;:++b)x(a[b])},b),z=function(a{:for(var c=b.parentNode;:null!==c;:){if(c===a)return!0;:c=c.parentNode},A=function(a){:a.style.left="-9999px",a.style.display="block";:var b=a.clientHeight,c=parseInt(getComputedStyle(a).getPropertyValue("padding"),10);:return a.style.left="",a.style.display="none","-"+parseInt(b/2+c)+"px"},B=function(a,b){:if(+a.style.opacity<1){b=b||16,a.style.opacity=0,a.style.display="block";:var c=+new Date,d=function(){a.style.opacity=+a.style.opacity+(new Date-c)/100,c=+new Date,+a.style.opacity<1&&setTimeout(d,b)},C=function(a,b){:b=b||16,a.style.opacity=1;var c=+new Date,d=function(){a.style.opacity=+a.style.opacity-(new Date-c)/100,c=+new Date,+a.style.opacity>0?setTimeout(d,b):a.style.display="none"},D=function(c){if(MouseEvent){var d=new MouseEvent("click",{view:a,bubbles:!1,cancelable:!0}else if(b.createEvent){:var e=b.createEvent("MouseEvents");:e.initEvent("click",!1,!1),c.dispatchEvent(e)},E=function(b){"function"==typeof b.stopPropagation?(b.stopPropagation(),b.preventDefault()):a.event&&a.event.hasOwnProperty("cancelBubble")&&(a.event.cancelBubble=!0)};a.sweetAlertInitialize=function(){:var a='<div class="sweet-overlay" tabIndex="-1"></div><div class="sweet-alert" tabIndex="-1"><div class="icon error"><span class="x-mark"><span class="line left"></span><span class="line right"></span></span></div><div class="icon warning"> <span class="body"></span> <span class="dot"></span> </div> <div class="icon info"></div> <div class="icon success"> <span class="line tip"></span> <span class="line long"></span> <div class="placeholder"></div> <div class="fix"></div> </div> <div class="icon custom"></div> <h2>Title</h2><p class="lead text-muted">Text</p><p><button class="cancel btn btn-lg" tabIndex="2">Cancel</button> <button class="confirm btn btn-lg" tabIndex="1">OK</button></p></div>',c=b.createElement("div");:c.innerHTML=a,b.body.appendChild(c)},a.sweetAlert=a.swal=function(){:function h(a){var b=a.keyCode||a.which;:if(-1!==[9,13,32,27].indexOf(b)){for(var c=a.target||a.srcElement,d=-1,e=0;:e<w.length;:e++)if(c===w[e]){d=e;:break},o);switch(typeof arguments[0]){case"string":m.title=arguments[0],m.text=arguments[1]||"",m.type=arguments[2]||"";case"object":if(void 0===arguments[0].title)return a.console.error('Missing "title" argument!'),!1;m.title=arguments[0].title,m.text=arguments[0].text||o.text,m.type=arguments[0].type||o.type,m.allowOutsideClick=arguments[0].allowOutsideClick||o.allowOutsideClick,m.showCancelButton=void 0!==arguments[0].showCancelButton?arguments[0].showCancelButton:o.showCancelButton,m.showConfirmButton=void 0!==arguments[0].showConfirmButton?arguments[0].showConfirmButton:o.showConfirmButton,m.closeOnConfirm=void 0!==arguments[0].closeOnConfirm?arguments[0].closeOnConfirm:o.closeOnConfirm,m.closeOnCancel=void 0!==arguments[0].closeOnCancel?arguments[0].closeOnCancel:o.closeOnCancel,m.timer=arguments[0].timer||o.timer,m.confirmButtonText=o.showCancelButton?"Confirm":o.confirmButtonText,m.confirmButtonText=arguments[0].confirmButtonText||o.confirmButtonText,m.confirmButtonClass=arguments[0].confirmButtonClass||(arguments[0].type?"btn-"+arguments[0].type:null)||o.confirmButtonClass,m.cancelButtonText=arguments[0].cancelButtonText||o.cancelButtonText,m.cancelButtonClass=arguments[0].cancelButtonClass||o.cancelButtonClass,m.containerClass=arguments[0].containerClass||o.containerClass,m.titleClass=arguments[0].titleClass||o.titleClass,m.textClass=arguments[0].textClass||o.textClass,m.imageUrl=arguments[0].imageUrl||o.imageUrl,m.imageSize=arguments[0].imageSize||o.imageSize,m.doneFunction=arguments[1]||null;:break;default:return a.console.error('Unexpected type of argument! Expected "string" or "object", got '+typeof arguments[0]),!1}c(m),e();for(var n=p(),g(),q=function(a){switch(a.type){case"click":if(c&&e&&d)m.doneFunction(!0),m.closeOnConfirm&&f();:else if(e&&d){var g=String(m.doneFunction).replace(/\s/g,""),h="function("===g.substring(0,9)&&")"!==g.substring(9,10);:h&&m.doneFunction(!1),m.closeOnCancel&&f()},b.onclick=function(a),s=n.querySelectorAll("button"),t=0;t<s.length;t++)s[t].onclick=q;i=b.onclick{:var b=a.target||a.srcElement,c=n===b,d=z(n,a.target),e=r(n,"visible"),g="true"===n.getAttribute("data-allow-ouside-click");:!c&&!d&&e&&g&&f()};var u=n.querySelector("button.confirm"),a.onfocus=function(),a.onkeydown=h,u.onblur=l,v.onblur=l,v=n.querySelector("button.cancel"),w=n.querySelectorAll("button:not([type=hidden])");j=a.onkeydown{a.setTimeout(function(){void 0!==k&&(k.focus(),k=void 0)},a.swal.setDefaults=function(a){:if(!a)throw new Error("userParams is required");:if("object"!=typeof a)throw new Error("userParams has to be a object");:d(o,a)},a.swal.close=function(){f()},function(){"complete"===b.readyState||"interactive"===b.readyState&&b.body?sweetAlertInitialize():b.addEventListener?b.addEventListener("DOMContentLoaded",function a(){b.removeEventListener("DOMContentLoaded",a,!1),sweetAlertInitialize()},!1):b.attachEvent&&b.attachEvent("onreadystatechange",function c(){"complete"===b.readyState&&(b.detachEvent("onreadystatechange",c),sweetAlertInitialize())}(window,document);!function ($){:"use strict";:var MultiSelect=function (element,options){this.options=options;:this.$element=$(element);this.$container=$('<div/>',{'class':"ms-container"},);this.$selectableContainer=$('<div/>'{'class':'ms-selectable'},);this.$selectionContainer=$('<div/>'{'class':'ms-selection'},);this.$selectableUl=$('<ul/>',);this.$selectionUl=$('<ul/>'{'class':"ms-list",'tabindex':'-1'};MultiSelect.prototype={constructor:MultiSelect,init:function(){var that=this,ms=this.$element;if (ms.next('.ms-container').length===0){ms.css({position:'absolute',left:'-9999px'});ms.attr('id','ms-'+ms.attr('id'));this.$container.addClass(that.options.cssClass);ms.find('option').each(function(),ms.attr('id') ? ms.attr('id'):Math.ceil(Math.random()*1000)+'multiselect');this.$container.attr('id'{that.generateLisFromOption(this)});this.$selectionUl.find('.ms-optgroup-label').hide();if (that.options.selectableHeader){that.$selectableContainer.append(that.options.selectableHeader)}that.$selectableContainer.append(that.$selectableUl);if (that.options.selectableFooter){that.$selectableContainer.append(that.options.selectableFooter)}if (that.options.selectionHeader){that.$selectionContainer.append(that.options.selectionHeader)}that.$selectionContainer.append(that.$selectionUl);if (that.options.selectionFooter){that.$selectionContainer.append(that.options.selectionFooter)}'.ms-elem-selectable',function(),that.$container.append(that.$selectableContainer);that.$container.append(that.$selectionContainer);ms.after(that.$container);that.activeMouse(that.$selectableUl);that.activeKeyboard(that.$selectableUl);var action=that.options.dblClick ? 'dblclick':'click';that.$selectableUl.on(action{that.select($(this).data('ms-value'))});that.$selectionUl.on(action,'.ms-elem-selection',function(){that.deselect($(this).data('ms-value'))});that.activeMouse(that.$selectionUl);that.activeKeyboard(that.$selectionUl);ms.on('focus',function(){that.$selectableUl.focus()}var selectedValues=ms.find('option:selected').map(function(){return $(this).val()}).get();that.select(selectedValues,'init');if (typeof that.options.afterInit==='function'){that.options.afterInit.call(this,this.$container)},$container),'generateLisFromOption' :function(option,index{:var that=this,ms=that.$element,attributes="",$option=$(option);:for (var cpt=0;:cpt < option.attributes.length;:cpt++){var attr=option.attributes[cpt];:if(attr.name!=='value' && attr.name!=='disabled'){attributes +=attr.name+'="'+attr.value+'" '}elementId+'-selectable');selectedLi .data('ms-value',elementId+'-selection') .hide();if ($option.prop('disabled') || ms.prop('disabled')),elementId=that.sanitize(value);selectableLi .data('ms-value',selectedLi=selectableLi.clone(),value) .addClass('ms-elem-selectable') .attr('id',value) .addClass('ms-elem-selection') .attr('id',value=$option.val(),var selectableLi=$('<li '+attributes+'><span>'+that.escapeHTML($option.text())+'</span></li>'){:selectedLi.addClass(that.options.disabledClass);:selectableLi.addClass(that.options.disabledClass)}var $optgroup=$option.parent('optgroup');if ($optgroup.length>0){:var optgroupLabel=$optgroup.attr('label'),optgroupId=that.sanitize(optgroupLabel),$selectableOptgroup=that.$selectableUl.find('#optgroup-selectable-'+optgroupId),$selectionOptgroup=that.$selectionUl.find('#optgroup-selection-'+optgroupId);:if ($selectableOptgroup.length===0){var optgroupContainerTpl='<li class="ms-optgroup-container"></li>',optgroupTpl='<ul class="ms-optgroup"><li class="ms-optgroup-label"><span>'+optgroupLabel+'</span></li></ul>';:$selectableOptgroup=$(optgroupContainerTpl);:$selectionOptgroup=$(optgroupContainerTpl);:$selectableOptgroup.attr('id','optgroup-selectable-'+optgroupId);:$selectionOptgroup.attr('id','optgroup-selection-'+optgroupId);:$selectableOptgroup.append($(optgroupTpl));:$selectionOptgroup.append($(optgroupTpl));:if (that.options.selectableOptgroup){$selectableOptgroup.find('.ms-optgroup-label').on('click',function(){var values=$optgroup.children(':not(:selected, :disabled)').map(function(){return $(this).val()});$selectionOptgroup.find('.ms-optgroup-label').on('click',function(){var values=$optgroup.children(':selected:not(:disabled)').map(function(){return $(this).val()}else{index=index==undefined ? that.$selectableUl.children().length:index},'addOption' :function(options){$.each(options,function(index,option){if (option.value && that.$element.find("option[value='"+option.value+"']").length===0){var $option=$('<option value="'+option.value+'">'+option.text+'</option>'),index=parseInt((typeof option.index==='undefined' ? that.$element.children().length:option.index)),$container=option.nested==undefined ? that.$element :$("optgroup[label='"+option.nested+"']") $option.insertAt(index,$container);:that.generateLisFromOption($option.get(0),index,option.nested)},'escapeHTML' :function(text){return $("<div>").text(text).html()},'activeKeyboard' :function($list){:var that=this;:$list.on('focus',function(){$(this).addClass('ms-focus')}) .on('blur',function(){$(this).removeClass('ms-focus')}) .on('keydown',function(e){switch (e.which){case 40:case 38:e.preventDefault();that.moveHighlight($(this),(e.which===38) ? -1:1);case 37:case 39:e.preventDefault();case 9:if(that.$element.is('[tabindex]')){e.preventDefault();tabindex=(e.shiftKey) ? tabindex-1:tabindex+1;:$('[tabindex="'+(tabindex)+'"]').focus();:return}if($.inArray(e.which,that.options.keySelect)>-1){:e.preventDefault();:e.stopPropagation();:that.selectHighlighted($list);:return},'moveHighlight':function($list,direction){:var $elems=$list.find(this.elemsSelector),$currElem=$elems.filter('.ms-hover'),$nextElem=null,elemHeight=$elems.first().outerHeight(),containerHeight=$list.height(),containerSelector='#'+this.$container.prop('id');:$elems.removeClass('ms-hover');:if (direction===1){// DOWN $nextElem=$currElem.nextAll(this.elemsSelector).first();:if ($nextElem.length===0){var $optgroupUl=$currElem.parent();:if ($optgroupUl.hasClass('ms-optgroup')){var $optgroupLi=$optgroupUl.parent(),$nextOptgroupLi=$optgroupLi.next(':visible');:if ($nextOptgroupLi.length>0){$nextElem=$nextOptgroupLi.find(this.elemsSelector).first()}else if (direction===-1){:// UP $nextElem=$currElem.prevAll(this.elemsSelector).first();:if ($nextElem.length===0){var $optgroupUl=$currElem.parent();:if ($optgroupUl.hasClass('ms-optgroup')){var $optgroupLi=$optgroupUl.parent(),$prevOptgroupLi=$optgroupLi.prev(':visible');:if ($prevOptgroupLi.length>0){$nextElem=$prevOptgroupLi.find(this.elemsSelector).last()}if ($nextElem.length>0){:$nextElem.addClass('ms-hover');:var scrollTo=$list.scrollTop()+$nextElem.position().top - containerHeight / 2+elemHeight / 2;:$list.scrollTop(scrollTo)},'selectHighlighted' :function($list){:var $elems=$list.find(this.elemsSelector),$highlightedElem=$elems.filter('.ms-hover').first();:if ($highlightedElem.length>0){if ($list.parent().hasClass('ms-selectable')){this.select($highlightedElem.data('ms-value'))},'switchList' :function($list){:$list.blur();:this.$container.find(this.elemsSelector).removeClass('ms-hover');:if ($list.parent().hasClass('ms-selectable')){this.$selectionUl.focus()},'activeMouse' :function($list){:var that=this;:$('body').on('mouseenter',that.elemsSelector,function(){$(this).parents('.ms-container').find(that.elemsSelector).removeClass('ms-hover');:$(this).addClass('ms-hover')},'refresh' :function(){:this.destroy();:this.$element.multiSelect(this.options)},'destroy' :function(){:$("#ms-"+this.$element.attr("id")).remove();:this.$element.css('position','').css('left','') this.$element.removeData('multiselect')},'select' :function(value,method){if (typeof value==='string'){value=[value]}),options=ms.find('option:not(:disabled)').filter(function(),selectables=this.$selectableUl.find('#'+msIds.join('-selectable, #')+'-selectable').filter(':not(.'+that.options.disabledClass+')'),selections=this.$selectionUl.find('#'+msIds.join('-selection, #')+'-selection').filter(':not(.'+that.options.disabledClass+')'){return($.inArray(this.value,value)>-1)});if (method==='init'){selectables=this.$selectableUl.find('#'+msIds.join('-selectable, #')+'-selectable'),selections=this.$selectionUl.find('#'+msIds.join('-selection, #')+'-selection')}if (selectables.length>0){:selectables.addClass('ms-selected').hide();:selections.addClass('ms-selected').show();:options.prop('selected',true);:that.$container.find(that.elemsSelector).removeClass('ms-hover');:var selectableOptgroups=that.$selectableUl.children('.ms-optgroup-container');:if (selectableOptgroups.length>0){selectableOptgroups.each(function(){var selectablesLi=$(this).find('.ms-elem-selectable');:if (selectablesLi.length===selectablesLi.filter('.ms-selected').length){$(this).find('.ms-optgroup-label').hide()}if (method!=='init'){:ms.trigger('change');:if (typeof that.options.afterSelect==='function'){that.options.afterSelect.call(this,value)},'deselect' :function(value){if (typeof value==='string'){value=[value]}function(val),ms=this.$element,msIds=$.map(value,var that=this{return(that.sanitize(val))}),options=ms.find('option').filter(function(),selectables=this.$selectableUl.find('#'+msIds.join('-selectable, #')+'-selectable'),selections=this.$selectionUl.find('#'+msIds.join('-selection, #')+'-selection').filter('.ms-selected').filter(':not(.'+that.options.disabledClass+')'){return($.inArray(this.value,value)>-1)});if (selections.length>0){:selectables.removeClass('ms-selected').show();:selections.removeClass('ms-selected').hide();:options.prop('selected',false);:that.$container.find(that.elemsSelector).removeClass('ms-hover');:var selectableOptgroups=that.$selectableUl.children('.ms-optgroup-container');:if (selectableOptgroups.length>0){selectableOptgroups.each(function(){var selectablesLi=$(this).find('.ms-elem-selectable');:if (selectablesLi.filter(':not(.ms-selected)').length>0){$(this).find('.ms-optgroup-label').show()});var selectionOptgroups=that.$selectionUl.children('.ms-optgroup-container');selectionOptgroups.each(function(){:var selectionsLi=$(this).find('.ms-elem-selection');:if (selectionsLi.filter('.ms-selected').length===0){$(this).find('.ms-optgroup-label').hide()}ms.trigger('change');if (typeof that.options.afterDeselect==='function'){that.options.afterDeselect.call(this,value)},'select_all' :function(){:var ms=this.$element,values=ms.val();:ms.find('option:not(":disabled")').prop('selected',true);:this.$selectableUl.find('.ms-elem-selectable').filter(':not(.'+this.options.disabledClass+')').addClass('ms-selected').hide();:this.$selectionUl.find('.ms-optgroup-label').show();:this.$selectableUl.find('.ms-optgroup-label').hide();:this.$selectionUl.find('.ms-elem-selection').filter(':not(.'+this.options.disabledClass+')').addClass('ms-selected').show();:this.$selectionUl.focus();:ms.trigger('change');:if (typeof this.options.afterSelect==='function'){var selectedValues=$.grep(ms.val(),function(item){return $.inArray(item,values) < 0},'deselect_all' :function(){:var ms=this.$element,values=ms.val();:ms.find('option').prop('selected',false);:this.$selectableUl.find('.ms-elem-selectable').removeClass('ms-selected').show();:this.$selectionUl.find('.ms-optgroup-label').hide();:this.$selectableUl.find('.ms-optgroup-label').show();:this.$selectionUl.find('.ms-elem-selection').removeClass('ms-selected').hide();:this.$selectableUl.focus();:ms.trigger('change');:if (typeof this.options.afterDeselect==='function'){this.options.afterDeselect.call(this,values)},sanitize:function(value){:var hash=0,i,character;:if (value.length==0) return hash;:var ls=0;:for (i=0,ls=value.length;:i < ls;:i++){character=value.charCodeAt(i);:hash=((hash<<5)-hash)+character;:hash |=0;:// Convert to 32bit integer};$.fn.multiSelect=function (){:var option=arguments[0],args=arguments;:return this.each(function (){,$.fn.multiSelect.defaults,$this.data(),typeof option==='object' && option);if (!data){$this.data('multiselect',(data=new MultiSelect(this,options)))}if (typeof option==='string'){data[option](args[1])};$.fn.multiSelect.defaults={keySelect:[32],selectableOptgroup:false,disabledClass:'disabled',dblClick :false,keepOrder:false,cssClass:''}$parent),;$.fn.multiSelect.Constructor=MultiSelect;$.fn.insertAt=function(index{return this.each(function(){if (index===0){$parent.prepend(this)}(window.jQuery);/*! Select2 4.0.1 | https://github.com/select2/select2/blob/master/LICENSE.md */!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):jQuery)}(function(a){:var b=function(){if(a&&a.fn&&a.fn.select2&&a.fn.select2.amd)var b=a.fn.select2.amd;:var b;return function(){if(!b||!b.requirejs){;var a,c,d;!function(b){function e(a,b){return u.call(a,b)}b),function f(a{;if(a&&"."===a.charAt(0))if(b){:for(a=a.split("/"),g=a.length-1,s.nodeIdCompat&&w.test(a[g])&&(a[g]=a[g].replace(w,"")),a=n.slice(0,n.length-1).concat(a),k=0;:k<a.length;:k+=1)if(m=a[k],"."===m)a.splice(k,1),k-=1;:else if(".."===m){if(1===k&&(".."===a[2]||".."===a[0]))break;:k>0&&(a.splice(k-1,2),k-=2)}else 0===a.indexOf("./")&&(a=a.substring(2));if((n||p)&&o){:for(c=a.split("/"),k=c.length;:k>0;:k-=1){if(d=c.slice(0,k).join("/"),n)for(l=n.length;:l>0;:l-=1)if(e=o[n.slice(0,l).join("/")],e&&(e=e[d])){f=e,h=k;:break}c),function g(a{:return function(){var d=v.call(arguments,0);:return"string"!=typeof d[0]&&1===d.length&&d.push(null),n.apply(b,d.concat([a,c]))}function h(a){return function(b){return f(b,a)}function i(a){return function(b){q[a]=b}function j(a){:if(e(r,a)){var c=r[a];:delete r[a],t[a]=!0,m.apply(b,c)}function k(a){var b,c=a?a.indexOf("!"):-1;:return c>-1&&(b=a.substring(0,c),a=a.substring(c+1,a.length)),[b,a]},b),u=Object.prototype.hasOwnProperty,v=[].slice,w=/\.js$/;o=function(a{:var c,d=k(a),e=d[0];return a=d[1],e&&(e=f(e,b),c=j(e)),e?a=c&&c.normalize?c.normalize(a,h(b)):f(a,b):(a=f(a,b),d=k(a),e=d[0],a=d[1],e&&(c=j(e))),{f:e?e+"!"+a:a,n:a,pr:e,p:c},p={require:function(a){return g(a)},exports:function(a){,module:function(a){return{id:a,uri:"",exports:q[a],config:l(a)},c,d,f),m=function(a{if(f=f||a,"undefined"===v||"function"===v){for(c=!c.length&&d.length?["require","exports","module"]:c,n=0;:n<c.length;:n+=1)if(m=o(c[n],f),k=m.f,"require"===k)u[n]=p.require(a);:else if("exports"===k)u[n]=p.exports(a),s=!0;:else if("module"===k)h=u[n]=p.module(a);:else if(e(q,k)||e(r,k)||e(t,k))u[n]=j(k);:else{,a=c=n=function(a,c,d,e,f){if("string"==typeof a)return p[a]?p[a](c):j(o(a,c).f);:if(!a.splice){if(s=a,s.deps&&n(s.deps,s.callback),!c)return;c.splice?(a=c,c=d,d=null):a=b},"function"==typeof d&&(d=e,a,c,d):setTimeout(function(),e=f),e?m(b{m(b,a,c,d)},n.config=function(a){return n(a)},a._defined=q,b,c),d=function(a{:if("string"!=typeof a)throw new Error("See almond README: incorrect module build, no module name");:b.splice||(c=b,b=[]),e(q,a)||e(r,a)||(r[a]=[a,b,c])},d.amd={jQuery:!0}),[],b.define("jquery",function(){:var b=a||$;:return null==b&&console&&console.error&&console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."),b}),["jquery"],b.define("select2/utils",function(a){:function b(a){var b=a.prototype,c=[];:for(var d in b){var e=b[d];:"function"==typeof e&&"constructor"!==d&&c.push(d)};c.Extend=function(a,b){function c(){this.constructor=a},c),c.Decorate=function(a{:function d(){var b=Array.prototype.unshift,d=c.prototype.constructor.length,e=a.prototype.constructor;:d>0&&(b.call(arguments,a.prototype.constructor),e=c.prototype.constructor),e.apply(this,arguments)}d.prototype=new e;for(var h=0;h<g.length;h++),g=b(a);c.displayName=a.displayName,var f=b(c){:var i=g[h];:d.prototype[i]=a.prototype[i]}for(var j=(function(a){;a in d.prototype&&(b=d.prototype[a]);var e=c.prototype[a];return function(){:var a=Array.prototype.unshift;:return a.call(arguments,b),e.apply(this,arguments)}),k=0;k<f.length;k++){:var l=f[k];:d.prototype[l]=j(l)};var d=function(){;return d.prototype.on=function(a,b){,d.prototype.trigger=function(a){,b),d.prototype.invoke=function(a{:for(var c=0,d=a.length;:d>c;:c++)a[c].apply(this,b)},c.Observable=d,c.generateChars=function(a){:for(var b="",c=0;:a>c;:c++){var d=Math.floor(36*Math.random());:b+=d.toString(36)},b),c.bind=function(a{return function(){a.apply(b,arguments)},c._convertData=function(a){:for(var b in a){var c=b.split("-"),d=a;:if(1!==c.length){for(var e=0;:e<c.length;:e++){,c),c.hasScroll=function(b{:var d=a(c),e=c.style.overflowX,f=c.style.overflowY;return e!==f||"hidden"!==f&&"visible"!==f?"scroll"===e||"scroll"===f?!0:d.innerHeight()<c.scrollHeight||d.innerWidth()<c.scrollWidth:!1},c.escapeMarkup=function(a){</span>');d.data("data",c),this.$selection.find(".select2-selection__rendered").prepend(d)}},c}),b.define("select2/selection/search",["jquery","../utils","../keys"],function(a,b,c){function d(a,b,c){a.call(this,b,c)}return d.prototype.render=function(b){var c=a('<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" aria-autocomplete="list" /></li>');this.$searchContainer=c,this.$search=c.find("input");var d=b.call(this);return this._transferTabIndex(),d},d.prototype.bind=function(a,b,d){var e=this;a.call(this,b,d),b.on("open",function(){e.$search.trigger("focus")}),b.on("close",function(){e.$search.val(""),e.$search.removeAttr("aria-activedescendant"),e.$search.trigger("focus")}),b.on("enable",function(){e.$search.prop("disabled",!1),e._transferTabIndex()}),b.on("disable",function(){e.$search.prop("disabled",!0)}),b.on("focus",function(a){e.$search.trigger("focus")}),b.on("results:focus",function(a){e.$search.attr("aria-activedescendant",a.id)}),this.$selection.on("focusin",".select2-search--inline",function(a){e.trigger("focus",a)}),this.$selection.on("focusout",".select2-search--inline",function(a){e._handleBlur(a)}),this.$selection.on("keydown",".select2-search--inline",function(a){a.stopPropagation(),e.trigger("keypress",a),e._keyUpPrevented=a.isDefaultPrevented();var b=a.which;if(b===c.BACKSPACE&&""===e.$search.val()){var d=e.$searchContainer.prev(".select2-selection__choice");if(d.length>0){var f=d.data("data");e.searchRemoveChoice(f),a.preventDefault()}}});var f=document.documentMode,g=f&&11>=f;this.$selection.on("input.searchcheck",".select2-search--inline",function(a){return g?void e.$selection.off("input.search input.searchcheck"):void e.$selection.off("keyup.search")}),this.$selection.on("keyup.search input.search",".select2-search--inline",function(a){if(g&&"input"===a.type)return void e.$selection.off("input.search input.searchcheck");var b=a.which;b!=c.SHIFT&&b!=c.CTRL&&b!=c.ALT&&b!=c.TAB&&e.handleSearch(a)})},d.prototype._transferTabIndex=function(a){this.$search.attr("tabindex",this.$selection.attr("tabindex")),this.$selection.attr("tabindex","-1")},d.prototype.createPlaceholder=function(a,b){this.$search.attr("placeholder",b.text)},d.prototype.update=function(a,b){var c=this.$search[0]==document.activeElement;this.$search.attr("placeholder",""),a.call(this,b),this.$selection.find(".select2-selection__rendered").append(this.$searchContainer),this.resizeSearch(),c&&this.$search.focus()},d.prototype.handleSearch=function(){if(this.resizeSearch(),!this._keyUpPrevented){var a=this.$search.val();this.trigger("query",{term:a})}this._keyUpPrevented=!1},d.prototype.searchRemoveChoice=function(a,b){this.trigger("unselect",{data:b}),this.$search.val(b.text),this.handleSearch()},d.prototype.resizeSearch=function(){this.$search.css("width","25px");var a="";if(""!==this.$search.attr("placeholder"))a=this.$selection.find(".select2-selection__rendered").innerWidth();else{var b=this.$search.val().length+1;a=.75*b+"em"}this.$search.css("width",a)},d}),b.define("select2/selection/eventRelay",["jquery"],function(a){return b.prototype.bind=function(b,c,d){var e=this,f=["open","opening","close","closing","select","selecting","unselect","unselecting"],g=["opening","closing","selecting","unselecting"];b.call(this,c,d),c.on("*",function(b,c){if(-1!==a.inArray(b,f)){;var d=a.Event("select2:"+b,{params:c});e.$element.trigger(d),-1!==a.inArray(b,g)&&(c.prevented=d.isDefaultPrevented())}})},b}),b.define("select2/translation",["jquery","require"],function(a,b){return c.prototype.all=function(){return this.dict},c.prototype.get=function(a){return this.dict[a]},c.prototype.extend=function(b){,b.all(),this.dict)},c.loadPath=function(a){if(!(a in c._cache)){var d=b(a);c._cache[a]=d}return new c(c._cache[a])},c}),b.define("select2/diacritics",[],function(){var a={"Ⓐ":"A","Ａ":"A","À":"A","Á":"A","Â":"A","Ầ":"A","Ấ":"A","Ẫ":"A","Ẩ":"A","Ã":"A","Ā":"A","Ă":"A","Ằ":"A","Ắ":"A","Ẵ":"A","Ẳ":"A","Ȧ":"A","Ǡ":"A","Ä":"A","Ǟ":"A","Ả":"A","Å":"A","Ǻ":"A","Ǎ":"A","Ȁ":"A","Ȃ":"A","Ạ":"A","Ậ":"A","Ặ":"A","Ḁ":"A","Ą":"A","Ⱥ":"A","Ɐ":"A","Ꜳ":"AA","Æ":"AE","Ǽ":"AE","Ǣ":"AE","Ꜵ":"AO","Ꜷ":"AU","Ꜹ":"AV","Ꜻ":"AV","Ꜽ":"AY","Ⓑ":"B","Ｂ":"B","Ḃ":"B","Ḅ":"B","Ḇ":"B","Ƀ":"B","Ƃ":"B","Ɓ":"B","Ⓒ":"C","Ｃ":"C","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","Ç":"C","Ḉ":"C","Ƈ":"C","Ȼ":"C","Ꜿ":"C","Ⓓ":"D","Ｄ":"D","Ḋ":"D","Ď":"D","Ḍ":"D","Ḑ":"D","Ḓ":"D","Ḏ":"D","Đ":"D","Ƌ":"D","Ɗ":"D","Ɖ":"D","Ꝺ":"D","Ǳ":"DZ","Ǆ":"DZ","ǲ":"Dz","ǅ":"Dz","Ⓔ":"E","Ｅ":"E","È":"E","É":"E","Ê":"E","Ề":"E","Ế":"E","Ễ":"E","Ể":"E","Ẽ":"E","Ē":"E","Ḕ":"E","Ḗ":"E","Ĕ":"E","Ė":"E","Ë":"E","Ẻ":"E","Ě":"E","Ȅ":"E","Ȇ":"E","Ẹ":"E","Ệ":"E","Ȩ":"E","Ḝ":"E","Ę":"E","Ḙ":"E","Ḛ":"E","Ɛ":"E","Ǝ":"E","Ⓕ":"F","Ｆ":"F","Ḟ":"F","Ƒ":"F","Ꝼ":"F","Ⓖ":"G","Ｇ":"G","Ǵ":"G","Ĝ":"G","Ḡ":"G","Ğ":"G","Ġ":"G","Ǧ":"G","Ģ":"G","Ǥ":"G","Ɠ":"G","Ꞡ":"G","Ᵹ":"G","Ꝿ":"G","Ⓗ":"H","Ｈ":"H","Ĥ":"H","Ḣ":"H","Ḧ":"H","Ȟ":"H","Ḥ":"H","Ḩ":"H","Ḫ":"H","Ħ":"H","Ⱨ":"H","Ⱶ":"H","Ɥ":"H","Ⓘ":"I","Ｉ":"I","Ì":"I","Í":"I","Î":"I","Ĩ":"I","Ī":"I","Ĭ":"I","İ":"I","Ï":"I","Ḯ":"I","Ỉ":"I","Ǐ":"I","Ȉ":"I","Ȋ":"I","Ị":"I","Į":"I","Ḭ":"I","Ɨ":"I","Ⓙ":"J","Ｊ":"J","Ĵ":"J","Ɉ":"J","Ⓚ":"K","Ｋ":"K","Ḱ":"K","Ǩ":"K","Ḳ":"K","Ķ":"K","Ḵ":"K","Ƙ":"K","Ⱪ":"K","Ꝁ":"K","Ꝃ":"K","Ꝅ":"K","Ꞣ":"K","Ⓛ":"L","Ｌ":"L","Ŀ":"L","Ĺ":"L","Ľ":"L","Ḷ":"L","Ḹ":"L","Ļ":"L","Ḽ":"L","Ḻ":"L","Ł":"L","Ƚ":"L","Ɫ":"L","Ⱡ":"L","Ꝉ":"L","Ꝇ":"L","Ꞁ":"L","Ǉ":"LJ","ǈ":"Lj","Ⓜ":"M","Ｍ":"M","Ḿ":"M","Ṁ":"M","Ṃ":"M","Ɱ":"M","Ɯ":"M","Ⓝ":"N","Ｎ":"N","Ǹ":"N","Ń":"N","Ñ":"N","Ṅ":"N","Ň":"N","Ṇ":"N","Ņ":"N","Ṋ":"N","Ṉ":"N","Ƞ":"N","Ɲ":"N","Ꞑ":"N","Ꞥ":"N","Ǌ":"NJ","ǋ":"Nj","Ⓞ":"O","Ｏ":"O","Ò":"O","Ó":"O","Ô":"O","Ồ":"O","Ố":"O","Ỗ":"O","Ổ":"O","Õ":"O","Ṍ":"O","Ȭ":"O","Ṏ":"O","Ō":"O","Ṑ":"O","Ṓ":"O","Ŏ":"O","Ȯ":"O","Ȱ":"O","Ö":"O","Ȫ":"O","Ỏ":"O","Ő":"O","Ǒ":"O","Ȍ":"O","Ȏ":"O","Ơ":"O","Ờ":"O","Ớ":"O","Ỡ":"O","Ở":"O","Ợ":"O","Ọ":"O","Ộ":"O","Ǫ":"O","Ǭ":"O","Ø":"O","Ǿ":"O","Ɔ":"O","Ɵ":"O","Ꝋ":"O","Ꝍ":"O","Ƣ":"OI","Ꝏ":"OO","Ȣ":"OU","Ⓟ":"P","Ｐ":"P","Ṕ":"P","Ṗ":"P","Ƥ":"P","Ᵽ":"P","Ꝑ":"P","Ꝓ":"P","Ꝕ":"P","Ⓠ":"Q","Ｑ":"Q","Ꝗ":"Q","Ꝙ":"Q","Ɋ":"Q","Ⓡ":"R","Ｒ":"R","Ŕ":"R","Ṙ":"R","Ř":"R","Ȑ":"R","Ȓ":"R","Ṛ":"R","Ṝ":"R","Ŗ":"R","Ṟ":"R","Ɍ":"R","Ɽ":"R","Ꝛ":"R","Ꞧ":"R","Ꞃ":"R","Ⓢ":"S","Ｓ":"S","ẞ":"S","Ś":"S","Ṥ":"S","Ŝ":"S","Ṡ":"S","Š":"S","Ṧ":"S","Ṣ":"S","Ṩ":"S","Ș":"S","Ş":"S","Ȿ":"S","Ꞩ":"S","Ꞅ":"S","Ⓣ":"T","Ｔ":"T","Ṫ":"T","Ť":"T","Ṭ":"T","Ț":"T","Ţ":"T","Ṱ":"T","Ṯ":"T","Ŧ":"T","Ƭ":"T","Ʈ":"T","Ⱦ":"T","Ꞇ":"T","Ꜩ":"TZ","Ⓤ":"U","Ｕ":"U","Ù":"U","Ú":"U","Û":"U","Ũ":"U","Ṹ":"U","Ū":"U","Ṻ":"U","Ŭ":"U","Ü":"U","Ǜ":"U","Ǘ":"U","Ǖ":"U","Ǚ":"U","Ủ":"U","Ů":"U","Ű":"U","Ǔ":"U","Ȕ":"U","Ȗ":"U","Ư":"U","Ừ":"U","Ứ":"U","Ữ":"U","Ử":"U","Ự":"U","Ụ":"U","Ṳ":"U","Ų":"U","Ṷ":"U","Ṵ":"U","Ʉ":"U","Ⓥ":"V","Ｖ":"V","Ṽ":"V","Ṿ":"V","Ʋ":"V","Ꝟ":"V","Ʌ":"V","Ꝡ":"VY","Ⓦ":"W","Ｗ":"W","Ẁ":"W","Ẃ":"W","Ŵ":"W","Ẇ":"W","Ẅ":"W","Ẉ":"W","Ⱳ":"W","Ⓧ":"X","Ｘ":"X","Ẋ":"X","Ẍ":"X","Ⓨ":"Y","Ｙ":"Y","Ỳ":"Y","Ý":"Y","Ŷ":"Y","Ỹ":"Y","Ȳ":"Y","Ẏ":"Y","Ÿ":"Y","Ỷ":"Y","Ỵ":"Y","Ƴ":"Y","Ɏ":"Y","Ỿ":"Y","Ⓩ":"Z","Ｚ":"Z","Ź":"Z","Ẑ":"Z","Ż":"Z","Ž":"Z","Ẓ":"Z","Ẕ":"Z","Ƶ":"Z","Ȥ":"Z","Ɀ":"Z","Ⱬ":"Z","Ꝣ":"Z","ⓐ":"a","ａ":"a","ẚ":"a","à":"a","á":"a","â":"a","ầ":"a","ấ":"a","ẫ":"a","ẩ":"a","ã":"a","ā":"a","ă":"a","ằ":"a","ắ":"a","ẵ":"a","ẳ":"a","ȧ":"a","ǡ":"a","ä":"a","ǟ":"a","ả":"a","å":"a","ǻ":"a","ǎ":"a","ȁ":"a","ȃ":"a","ạ":"a","ậ":"a","ặ":"a","ḁ":"a","ą":"a","ⱥ":"a","ɐ":"a","ꜳ":"aa","æ":"ae","ǽ":"ae","ǣ":"ae","ꜵ":"ao","ꜷ":"au","ꜹ":"av","ꜻ":"av","ꜽ":"ay","ⓑ":"b","ｂ":"b","ḃ":"b","ḅ":"b","ḇ":"b","ƀ":"b","ƃ":"b","ɓ":"b","ⓒ":"c","ｃ":"c","ć":"c","ĉ":"c","ċ":"c","č":"c","ç":"c","ḉ":"c","ƈ":"c","ȼ":"c","ꜿ":"c","ↄ":"c","ⓓ":"d","ｄ":"d","ḋ":"d","ď":"d","ḍ":"d","ḑ":"d","ḓ":"d","ḏ":"d","đ":"d","ƌ":"d","ɖ":"d","ɗ":"d","ꝺ":"d","ǳ":"dz","ǆ":"dz","ⓔ":"e","ｅ":"e","è":"e","é":"e","ê":"e","ề":"e","ế":"e","ễ":"e","ể":"e","ẽ":"e","ē":"e","ḕ":"e","ḗ":"e","ĕ":"e","ė":"e","ë":"e","ẻ":"e","ě":"e","ȅ":"e","ȇ":"e","ẹ":"e","ệ":"e","ȩ":"e","ḝ":"e","ę":"e","ḙ":"e","ḛ":"e","ɇ":"e","ɛ":"e","ǝ":"e","ⓕ":"f","ｆ":"f","ḟ":"f","ƒ":"f","ꝼ":"f","ⓖ":"g","ｇ":"g","ǵ":"g","ĝ":"g","ḡ":"g","ğ":"g","ġ":"g","ǧ":"g","ģ":"g","ǥ":"g","ɠ":"g","ꞡ":"g","ᵹ":"g","ꝿ":"g","ⓗ":"h","ｈ":"h","ĥ":"h","ḣ":"h","ḧ":"h","ȟ":"h","ḥ":"h","ḩ":"h","ḫ":"h","ẖ":"h","ħ":"h","ⱨ":"h","ⱶ":"h","ɥ":"h","ƕ":"hv","ⓘ":"i","ｉ":"i","ì":"i","í":"i","î":"i","ĩ":"i","ī":"i","ĭ":"i","ï":"i","ḯ":"i","ỉ":"i","ǐ":"i","ȉ":"i","ȋ":"i","ị":"i","į":"i","ḭ":"i","ɨ":"i","ı":"i","ⓙ":"j","ｊ":"j","ĵ":"j","ǰ":"j","ɉ":"j","ⓚ":"k","ｋ":"k","ḱ":"k","ǩ":"k","ḳ":"k","ķ":"k","ḵ":"k","ƙ":"k","ⱪ":"k","ꝁ":"k","ꝃ":"k","ꝅ":"k","ꞣ":"k","ⓛ":"l","ｌ":"l","ŀ":"l","ĺ":"l","ľ":"l","ḷ":"l","ḹ":"l","ļ":"l","ḽ":"l","ḻ":"l","ſ":"l","ł":"l","ƚ":"l","ɫ":"l","ⱡ":"l","ꝉ":"l","ꞁ":"l","ꝇ":"l","ǉ":"lj","ⓜ":"m","ｍ":"m","ḿ":"m","ṁ":"m","ṃ":"m","ɱ":"m","ɯ":"m","ⓝ":"n","ｎ":"n","ǹ":"n","ń":"n","ñ":"n","ṅ":"n","ň":"n","ṇ":"n","ņ":"n","ṋ":"n","ṉ":"n","ƞ":"n","ɲ":"n","ŉ":"n","ꞑ":"n","ꞥ":"n","ǌ":"nj","ⓞ":"o","ｏ":"o","ò":"o","ó":"o","ô":"o","ồ":"o","ố":"o","ỗ":"o","ổ":"o","õ":"o","ṍ":"o","ȭ":"o","ṏ":"o","ō":"o","ṑ":"o","ṓ":"o","ŏ":"o","ȯ":"o","ȱ":"o","ö":"o","ȫ":"o","ỏ":"o","ő":"o","ǒ":"o","ȍ":"o","ȏ":"o","ơ":"o","ờ":"o","ớ":"o","ỡ":"o","ở":"o","ợ":"o","ọ":"o","ộ":"o","ǫ":"o","ǭ":"o","ø":"o","ǿ":"o","ɔ":"o","ꝋ":"o","ꝍ":"o","ɵ":"o","ƣ":"oi","ȣ":"ou","ꝏ":"oo","ⓟ":"p","ｐ":"p","ṕ":"p","ṗ":"p","ƥ":"p","ᵽ":"p","ꝑ":"p","ꝓ":"p","ꝕ":"p","ⓠ":"q","ｑ":"q","ɋ":"q","ꝗ":"q","ꝙ":"q","ⓡ":"r","ｒ":"r","ŕ":"r","ṙ":"r","ř":"r","ȑ":"r","ȓ":"r","ṛ":"r","ṝ":"r","ŗ":"r","ṟ":"r","ɍ":"r","ɽ":"r","ꝛ":"r","ꞧ":"r","ꞃ":"r","ⓢ":"s","ｓ":"s","ß":"s","ś":"s","ṥ":"s","ŝ":"s","ṡ":"s","š":"s","ṧ":"s","ṣ":"s","ṩ":"s","ș":"s","ş":"s","ȿ":"s","ꞩ":"s","ꞅ":"s","ẛ":"s","ⓣ":"t","ｔ":"t","ṫ":"t","ẗ":"t","ť":"t","ṭ":"t","ț":"t","ţ":"t","ṱ":"t","ṯ":"t","ŧ":"t","ƭ":"t","ʈ":"t","ⱦ":"t","ꞇ":"t","ꜩ":"tz","ⓤ":"u","ｕ":"u","ù":"u","ú":"u","û":"u","ũ":"u","ṹ":"u","ū":"u","ṻ":"u","ŭ":"u","ü":"u","ǜ":"u","ǘ":"u","ǖ":"u","ǚ":"u","ủ":"u","ů":"u","ű":"u","ǔ":"u","ȕ":"u","ȗ":"u","ư":"u","ừ":"u","ứ":"u","ữ":"u","ử":"u","ự":"u","ụ":"u","ṳ":"u","ų":"u","ṷ":"u","ṵ":"u","ʉ":"u","ⓥ":"v","ｖ":"v","ṽ":"v","ṿ":"v","ʋ":"v","ꝟ":"v","ʌ":"v","ꝡ":"vy","ⓦ":"w","ｗ":"w","ẁ":"w","ẃ":"w","ŵ":"w","ẇ":"w","ẅ":"w","ẘ":"w","ẉ":"w","ⱳ":"w","ⓧ":"x","ｘ":"x","ẋ":"x","ẍ":"x","ⓨ":"y","ｙ":"y","ỳ":"y","ý":"y","ŷ":"y","ỹ":"y","ȳ":"y","ẏ":"y","ÿ":"y","ỷ":"y","ẙ":"y","ỵ":"y","ƴ":"y","ɏ":"y","ỿ":"y","ⓩ":"z","ｚ":"z","ź":"z","ẑ":"z","ż":"z","ž":"z","ẓ":"z","ẕ":"z","ƶ":"z","ȥ":"z","ɀ":"z","ⱬ":"z","ꝣ":"z","Ά":"Α","Έ":"Ε","Ή":"Η","Ί":"Ι","Ϊ":"Ι","Ό":"Ο","Ύ":"Υ","Ϋ":"Υ","Ώ":"Ω","ά":"α","έ":"ε","ή":"η","ί":"ι","ϊ":"ι","ΐ":"ι","ό":"ο","ύ":"υ","ϋ":"υ","ΰ":"υ","ω":"ω","ς":"σ"};return a}),b.define("select2/data/base",["../utils"],function(a){function b(a,c){b.__super__.constructor.call(this)}return a.Extend(b,a.Observable),b.prototype.current=function(a){throw new Error("The `current` method must be defined in child classes.")},b.prototype.query=function(a,b){throw new Error("The `query` method must be defined in child classes.")},b.prototype.generateResultId=function(b,c){var d=b.id+"-result-";return d+=a.generateChars(4),d+=null!=c.id?"-"+c.id.toString():"-"+a.generateChars(4)},b}),b.define("select2/data/select",["./base","../utils","jquery"],function(a,b,c){function d(a,b){this.$element=a,this.options=b,d.__super__.constructor.call(this)}return b.Extend(d,a),d.prototype.current=function(a){var b=[],d=this;this.$element.find(":selected").each(function(){var a=c(this),e=d.item(a);b.push(e)}),a(b)},d.prototype.select=function(a){var b=this;if(a.selected=!0,c(a.element).is("option"))return a.element.selected=!0,void this.$element.trigger("change");if(this.$element.prop("multiple"))this.current(function(d){var e=[];a=[a],a.push.apply(a,d);for(var f=0;f<a.length;f++){var g=a[f].id;-1===c.inArray(g,e)&&e.push(g)}b.$element.val(e),b.$element.trigger("change")});else{var d=a.id;this.$element.val(d),this.$element.trigger("change")}},d.prototype.unselect=function(a){
var b=this;if(this.$element.prop("multiple"))return a.selected=!1,c(a.element).is("option")?(a.element.selected=!1,void this.$element.trigger("change")):void this.current(function(d){for(var e=[],f=0;f<d.length;f++){var g=d[f].id;g!==a.id&&-1===c.inArray(g,e)&&e.push(g)}b.$element.val(e),b.$element.trigger("change")})},d.prototype.bind=function(a,b){var c=this;this.container=a,a.on("select",function(a){c.select(a.data)}),a.on("unselect",function(a){c.unselect(a.data)})},d.prototype.destroy=function(){this.$element.find("*").each(function(){c.removeData(this,"data")})},d.prototype.query=function(a,b){var d=[],e=this,f=this.$element.children();f.each(function(){var b=c(this);if(b.is("option")||b.is("optgroup")){var f=e.item(b),g=e.matches(a,f);null!==g&&d.push(g)}}),b({results:d})},d.prototype.addOptions=function(a){b.appendMany(this.$element,a)},d.prototype.option=function(a){var b;a.children?(b=document.createElement("optgroup"),b.label=a.text):(b=document.createElement("option"),void 0!==b.textContent?b.textContent=a.text:b.innerText=a.text),a.id&&(b.value=a.id),a.disabled&&(b.disabled=!0),a.selected&&(b.selected=!0),a.title&&(b.title=a.title);var d=c(b),e=this._normalizeItem(a);return e.element=b,c.data(b,"data",e),d},d.prototype.item=function(a){;if(b=c.data(a[0],"data"),null!=b)return b;if(a.is("option"))b={id:a.val(),text:a.text(),disabled:a.prop("disabled"),selected:a.prop("selected"),title:a.prop("title")};else if(a.is("optgroup")){b={text:a.prop("label"),children:[],title:a.prop("title")};for(var d=a.children("option"),e=[],f=0;f<d.length;f++){var g=c(d[f]),h=this.item(g);e.push(h)}b.children=e}return b=this._normalizeItem(b),b.element=a[0],c.data(a[0],"data",b),b},d.prototype._normalizeItem=function(a){c.isPlainObject(a)||(a={id:a,text:a},{text:""},a);var b={selected:!1,disabled:!1},b,a)},d.prototype.matches=function(a,b){var c=this.options.get("matcher");return c(a,b)},d}),b.define("select2/data/array",["./select","../utils","jquery"],function(a,b,c){function d(a,b){var c=b.get("data")||[];d.__super__.constructor.call(this,a,b),this.addOptions(this.convertToOptions(c))}return b.Extend(d,a),d.prototype.select=function(a){var b=this.$element.find("option").filter(function(b,c){return c.value==a.id.toString()});0===b.length&&(b=this.option(a),this.addOptions(b)),d.__super__.select.call(this,a)},d.prototype.convertToOptions=function(a){function d(a){return function(){return c(this).val()==a.id}}for(var e=this,f=this.$element.find("option"),g=f.map(function(){return e.item(c(this)).id}).get(),h=[],i=0;i<a.length;i++){var j=this._normalizeItem(a[i]);if(c.inArray(j.id,g)>=0){,j,l),n=this.option(m);k.replaceWith(n)}else{var o=this.option(j);if(j.children){var p=this.convertToOptions(j.children);b.appendMany(o,p)}h.push(o)}}return h},d}),b.define("select2/data/ajax",["./array","../utils","jquery"],function(a,b,c){function d(a,b){this.ajaxOptions=this._applyDefaults(b.get("ajax")),null!=this.ajaxOptions.processResults&&(this.processResults=this.ajaxOptions.processResults),d.__super__.constructor.call(this,a,b)}return b.Extend(d,a),d.prototype._applyDefaults=function(a){var b={data:function(a){,a,{q:a.term})},transport:function(a,b,d){var e=c.ajax(a);return e.then(b),e.fail(d),e}},b,a,!0)},d.prototype.processResults=function(a){return a},d.prototype.query=function(a,b){function d(){var d=f.transport(f,function(d){var f=e.processResults(d,a);e.options.get("debug")&&window.console&&console.error&&(f&&f.results&&c.isArray(f.results)||console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")),b(f)},function(){e.trigger("results:message",{message:"errorLoading"})});e._request=d}var e=this;null!=this._request&&(c.isFunction(this._request.abort)&&this._request.abort(),this._request=null);var f=c.extend({type:"GET"},this.ajaxOptions);"function"==typeof f.url&&(f.url=f.url.call(this.$element,a)),"function"==typeof f.data&&(f.data=f.data.call(this.$element,a)),this.ajaxOptions.delay&&""!==a.term?(this._queryTimeout&&window.clearTimeout(this._queryTimeout),this._queryTimeout=window.setTimeout(d,this.ajaxOptions.delay)):d()},d}),b.define("select2/data/tags",["jquery"],function(a){function b(b,c,d){var e=d.get("tags"),f=d.get("createTag");void 0!==f&&(this.createTag=f);var g=d.get("insertTag");if(void 0!==g&&(this.insertTag=g),b.call(this,c,d),a.isArray(e))for(var h=0;h<e.length;h++){var i=e[h],j=this._normalizeItem(i),k=this.option(j);this.$element.append(k)}}return b.prototype.query=function(a,b,c){function d(a,f){for(var g=a.results,h=0;h<g.length;h++){var i=g[h],j=null!=i.children&&!d({results:i.children},!0),k=i.text===b.term;if(k||j)return f?!1:(a.data=g,void c(a))}if(f)return!0;var l=e.createTag(b);if(null!=l){var m=e.option(l);m.attr("data-select2-tag",!0),e.addOptions([m]),e.insertTag(g,l)}a.results=g,c(a)}var e=this;return this._removeOldTags(),null==b.term||null!=b.page?void a.call(this,b,c):void a.call(this,b,d)},b.prototype.createTag=function(b,c){var d=a.trim(c.term);return""===d?null:{id:d,text:d}},b.prototype.insertTag=function(a,b,c){b.unshift(c)},b.prototype._removeOldTags=function(b){var c=(this._lastTag,this.$element.find("option[data-select2-tag]"));c.each(function(){this.selected||a(this).remove()})},b}),b.define("select2/data/tokenizer",["jquery"],function(a){function b(a,b,c){var d=c.get("tokenizer");void 0!==d&&(this.tokenizer=d),a.call(this,b,c)}return b.prototype.bind=function(a,b,c){a.call(this,b,c),this.$search=b.dropdown.$search||b.selection.$search||c.find(".select2-search__field")},b.prototype.query=function(a,b,c){function d(a){e.trigger("select",{data:a})}var e=this;b.term=b.term||"";var f=this.tokenizer(b,this.options,d);f.term!==b.term&&(this.$search.length&&(this.$search.val(f.term),this.$search.focus()),b.term=f.term),a.call(this,b,c)},b.prototype.tokenizer=function(b,c,d,e){for(var f=d.get("tokenSeparators")||[],g=c.term,h=0,i=this.createTag||function(a){return{id:a.term,text:a.term}};h<g.length;){var j=g[h];if(-1!==a.inArray(j,f)){,c,{term:k}),m=i(l);null!=m?(e(m),g=g.substr(h+1)||"",h=0):h++}else h++}return{term:g}},b}),b.define("select2/data/minimumInputLength",[],function(){function a(a,b,c){this.minimumInputLength=c.get("minimumInputLength"),a.call(this,b,c)}return a.prototype.query=function(a,b,c){return b.term=b.term||"",b.term.length<this.minimumInputLength?void this.trigger("results:message",{message:"inputTooShort",args:{minimum:this.minimumInputLength,input:b.term,params:b}}):void a.call(this,b,c)},a}),b.define("select2/data/maximumInputLength",[],function(){function a(a,b,c){this.maximumInputLength=c.get("maximumInputLength"),a.call(this,b,c)}return a.prototype.query=function(a,b,c){return b.term=b.term||"",this.maximumInputLength>0&&b.term.length>this.maximumInputLength?void this.trigger("results:message",{message:"inputTooLong",args:{maximum:this.maximumInputLength,input:b.term,params:b}}):void a.call(this,b,c)},a}),b.define("select2/data/maximumSelectionLength",[],function(){function a(a,b,c){this.maximumSelectionLength=c.get("maximumSelectionLength"),a.call(this,b,c)}return a.prototype.query=function(a,b,c){var d=this;this.current(function(e){var f=null!=e?e.length:0;return d.maximumSelectionLength>0&&f>=d.maximumSelectionLength?void d.trigger("results:message",{message:"maximumSelected",args:{maximum:d.maximumSelectionLength}}):void a.call(d,b,c)})},a}),b.define("select2/dropdown",["jquery","./utils"],function(a,b){function c(a,b){this.$element=a,this.options=b,c.__super__.constructor.call(this)}return b.Extend(c,b.Observable),c.prototype.render=function(){var b=a('<span class="select2-dropdown"><span class="select2-results"></span></span>');return b.attr("dir",this.options.get("dir")),this.$dropdown=b,b},c.prototype.destroy=function(){this.$dropdown.remove()},c}),b.define("select2/dropdown/search",["jquery","../utils"],function(a,b){return c.prototype.render=function(b){var c=b.call(this),d=a('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" /></span>');return this.$searchContainer=d,this.$search=d.find("input"),c.prepend(d),c},c.prototype.bind=function(b,c,d){var e=this;b.call(this,c,d),this.$search.on("keydown",function(a){e.trigger("keypress",a),e._keyUpPrevented=a.isDefaultPrevented()}),this.$search.on("input",function(b){a(this).off("keyup")}),this.$search.on("keyup input",function(a){e.handleSearch(a)}),c.on("open",function(){e.$search.attr("tabindex",0),e.$search.focus(),window.setTimeout(function(){e.$search.focus()},0)}),c.on("close",function(){e.$search.attr("tabindex",-1),e.$search.val("")}),c.on("results:all",function(a){if(null==a.query.term||""===a.query.term){var b=e.showSearch(a);b?e.$searchContainer.removeClass("select2-search--hide"):e.$searchContainer.addClass("select2-search--hide")}})},c.prototype.handleSearch=function(a){if(!this._keyUpPrevented){var b=this.$search.val();this.trigger("query",{term:b})}this._keyUpPrevented=!1},c.prototype.showSearch=function(a,b){return!0},c}),b.define("select2/dropdown/hidePlaceholder",[],function(){function a(a,b,c,d){this.placeholder=this.normalizePlaceholder(c.get("placeholder")),a.call(this,b,c,d)}return a.prototype.append=function(a,b){b.results=this.removePlaceholder(b.results),a.call(this,b)},a.prototype.normalizePlaceholder=function(a,b){return"string"==typeof b&&(b={id:"",text:b}),b},a.prototype.removePlaceholder=function(a,b){for(var c=b.slice(0),d=b.length-1;d>=0;d--){var e=b[d];this.placeholder.id===e.id&&c.splice(d,1)}return c},a}),b.define("select2/dropdown/infiniteScroll",["jquery"],function(a){function b(a,b,c,d){,a.call(this,b,c,d),this.$loadingMore=this.createLoadingMore(),this.loading=!1}return b.prototype.append=function(a,b){this.$loadingMore.remove(),this.loading=!1,a.call(this,b),this.showLoadingMore(b)&&this.$results.append(this.$loadingMore)},b.prototype.bind=function(b,c,d){var e=this;b.call(this,c,d),c.on("query",function(a){e.lastParams=a,e.loading=!0}),c.on("query:append",function(a){e.lastParams=a,e.loading=!0}),this.$results.on("scroll",function(){var b=a.contains(document.documentElement,e.$loadingMore[0]);if(!e.loading&&b){var c=e.$results.offset().top+e.$results.outerHeight(!1),d=e.$loadingMore.offset().top+e.$loadingMore.outerHeight(!1);c+50>=d&&e.loadMore()}})},b.prototype.loadMore=function(){,{page:1},this.lastParams);b.page++,this.trigger("query:append",b)},b.prototype.showLoadingMore=function(a,b){return b.pagination&&b.pagination.more},b.prototype.createLoadingMore=function(){var b=a('<li class="select2-results__option select2-results__option--load-more"role="treeitem" aria-disabled="true"></li>'),c=this.options.get("translations").get("loadingMore");return b.html(c(this.lastParams)),b},b}),b.define("select2/dropdown/attachBody",["jquery","../utils"],function(a,b){function c(b,c,d){this.$dropdownParent=d.get("dropdownParent")||a(document.body),b.call(this,c,d)}return c.prototype.bind=function(a,b,c){var d=this,e=!1;a.call(this,b,c),b.on("open",function(){d._showDropdown(),d._attachPositioningHandler(b),e||(e=!0,b.on("results:all",function(){d._positionDropdown(),d._resizeDropdown()}),b.on("results:append",function(){d._positionDropdown(),d._resizeDropdown()}))}),b.on("close",function(){d._hideDropdown(),d._detachPositioningHandler(b)}),this.$dropdownContainer.on("mousedown",function(a){a.stopPropagation()})},c.prototype.destroy=function(a){a.call(this),this.$dropdownContainer.remove()},c.prototype.position=function(a,b,c){b.attr("class",c.attr("class")),b.removeClass("select2"),b.addClass("select2-container--open"),b.css({position:"absolute",top:-999999}),this.$container=c},c.prototype.render=function(b){var c=a("<span></span>"),d=b.call(this);return c.append(d),this.$dropdownContainer=c,c},c.prototype._hideDropdown=function(a){this.$dropdownContainer.detach()},c.prototype._attachPositioningHandler=function(c,d){var e=this,f="scroll.select2."+d.id,g="resize.select2."+d.id,h="orientationchange.select2."+d.id,i=this.$container.parents().filter(b.hasScroll);i.each(function(){a(this).data("select2-scroll-position",{x:a(this).scrollLeft(),y:a(this).scrollTop()})}),i.on(f,function(b){var c=a(this).data("select2-scroll-position");a(this).scrollTop(c.y)}),a(window).on(f+" "+g+" "+h,function(a){e._positionDropdown(),e._resizeDropdown()})},c.prototype._detachPositioningHandler=function(c,d){var e="scroll.select2."+d.id,f="resize.select2."+d.id,g="orientationchange.select2."+d.id,h=this.$container.parents().filter(b.hasScroll);h.off(e),a(window).off(e+" "+f+" "+g)},c.prototype._positionDropdown=function(){var b=a(window),c=this.$dropdown.hasClass("select2-dropdown--above"),d=this.$dropdown.hasClass("select2-dropdown--below"),e=null,f=this.$container.offset();f.bottom=f.top+this.$container.outerHeight(!1);var g={height:this.$container.outerHeight(!1)};g.top=f.top,g.bottom=f.top+g.height;var h={height:this.$dropdown.outerHeight(!1)},i={top:b.scrollTop(),bottom:b.scrollTop()+b.height()},j=i.top<f.top-h.height,k=i.bottom>f.bottom+h.height,l={left:f.left,top:g.bottom},m=this.$dropdownParent;"static"===m.css("position")&&(m=m.offsetParent());var n=m.offset();l.top-=n.top,l.left-=n.left,c||d||(e="below"),k||!j||c?!j&&k&&c&&(e="below"):e="above",("above"==e||c&&"below"!==e)&&(l.top=g.top-h.height),null!=e&&(this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--"+e),this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--"+e)),this.$dropdownContainer.css(l)},c.prototype._resizeDropdown=function(){var a={width:this.$container.outerWidth(!1)+"px"};this.options.get("dropdownAutoWidth")&&(a.minWidth=a.width,a.width="auto"),this.$dropdown.css(a)},c.prototype._showDropdown=function(a){this.$dropdownContainer.appendTo(this.$dropdownParent),this._positionDropdown(),this._resizeDropdown()},c}),b.define("select2/dropdown/minimumResultsForSearch",[],function(){function a(b){for(var c=0,d=0;d<b.length;d++){var e=b[d];e.children?c+=a(e.children):c++}return c}function b(a,b,c,d){this.minimumResultsForSearch=c.get("minimumResultsForSearch"),this.minimumResultsForSearch<0&&(this.minimumResultsForSearch=1/0),a.call(this,b,c,d)}return b.prototype.showSearch=function(b,c){return a(c.data.results)<this.minimumResultsForSearch?!1:b.call(this,c)},b}),b.define("select2/dropdown/selectOnClose",[],function(){return a.prototype.bind=function(a,b,c){var d=this;a.call(this,b,c),b.on("close",function(){d._handleSelectOnClose()})},a.prototype._handleSelectOnClose=function(){var a=this.getHighlightedResults();if(!(a.length<1)){var b=a.data("data");null!=b.element&&b.element.selected||null==b.element&&b.selected||this.trigger("select",{data:b})}},a}),b.define("select2/dropdown/closeOnSelect",[],function(){return a.prototype.bind=function(a,b,c){var d=this;a.call(this,b,c),b.on("select",function(a){d._selectTriggered(a)}),b.on("unselect",function(a){d._selectTriggered(a)})},a.prototype._selectTriggered=function(a,b){)},a}),b.define("select2/i18n/en",[],function(){return{errorLoading:function(){return"The results could not be loaded."},inputTooLong:function(a){var b=a.input.length-a.maximum,c="Please delete "+b+" character";return 1!=b&&(c+="s"),c},inputTooShort:function(a){var b=a.minimum-a.input.length,c="Please enter "+b+" or more characters";return c},loadingMore:function(){return"Loading more results…"},maximumSelected:function(a){var b="You can only select "+a.maximum+" item";return 1!=a.maximum&&(b+="s"),b},noResults:function(){return"No results found"},searching:function(){return"Searching…"}}}),b.define("select2/defaults",["jquery","require","./results","./selection/single","./selection/multiple","./selection/placeholder","./selection/allowClear","./selection/search","./selection/eventRelay","./utils","./translation","./diacritics","./data/select","./data/array","./data/ajax","./data/tags","./data/tokenizer","./data/minimumInputLength","./data/maximumInputLength","./data/maximumSelectionLength","./dropdown","./dropdown/search","./dropdown/hidePlaceholder","./dropdown/infiniteScroll","./dropdown/attachBody","./dropdown/minimumResultsForSearch","./dropdown/selectOnClose","./dropdown/closeOnSelect","./i18n/en"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C){function D(){this.reset()}D.prototype.apply=function(l){,this.defaults,l),null==l.dataAdapter){if(null!=l.ajax?l.dataAdapter=o:null!=l.data?l.dataAdapter=n:l.dataAdapter=m,l.minimumInputLength>0&&(l.dataAdapter=j.Decorate(l.dataAdapter,r)),l.maximumInputLength>0&&(l.dataAdapter=j.Decorate(l.dataAdapter,s)),l.maximumSelectionLength>0&&(l.dataAdapter=j.Decorate(l.dataAdapter,t)),l.tags&&(l.dataAdapter=j.Decorate(l.dataAdapter,p)),(null!=l.tokenSeparators||null!=l.tokenizer)&&(l.dataAdapter=j.Decorate(l.dataAdapter,q)),null!=l.query){var C=b(l.amdBase+"compat/query");l.dataAdapter=j.Decorate(l.dataAdapter,C)}if(null!=l.initSelection){var D=b(l.amdBase+"compat/initSelection");l.dataAdapter=j.Decorate(l.dataAdapter,D)}}if(null==l.resultsAdapter&&(l.resultsAdapter=c,null!=l.ajax&&(l.resultsAdapter=j.Decorate(l.resultsAdapter,x)),null!=l.placeholder&&(l.resultsAdapter=j.Decorate(l.resultsAdapter,w)),l.selectOnClose&&(l.resultsAdapter=j.Decorate(l.resultsAdapter,A))),null==l.dropdownAdapter){if(l.multiple)l.dropdownAdapter=u;else{var E=j.Decorate(u,v);l.dropdownAdapter=E}if(0!==l.minimumResultsForSearch&&(l.dropdownAdapter=j.Decorate(l.dropdownAdapter,z)),l.closeOnSelect&&(l.dropdownAdapter=j.Decorate(l.dropdownAdapter,B)),null!=l.dropdownCssClass||null!=l.dropdownCss||null!=l.adaptDropdownCssClass){var F=b(l.amdBase+"compat/dropdownCss");l.dropdownAdapter=j.Decorate(l.dropdownAdapter,F)}l.dropdownAdapter=j.Decorate(l.dropdownAdapter,y)}if(null==l.selectionAdapter){if(l.multiple?l.selectionAdapter=e:l.selectionAdapter=d,null!=l.placeholder&&(l.selectionAdapter=j.Decorate(l.selectionAdapter,f)),l.allowClear&&(l.selectionAdapter=j.Decorate(l.selectionAdapter,g)),l.multiple&&(l.selectionAdapter=j.Decorate(l.selectionAdapter,h)),null!=l.containerCssClass||null!=l.containerCss||null!=l.adaptContainerCssClass){var G=b(l.amdBase+"compat/containerCss");l.selectionAdapter=j.Decorate(l.selectionAdapter,G)}l.selectionAdapter=j.Decorate(l.selectionAdapter,i)}if("string"==typeof l.language)if(l.language.indexOf("-")>0){var H=l.language.split("-"),I=H[0];l.language=[l.language,I]}else l.language=[l.language];if(a.isArray(l.language)){var J=new k;l.language.push("en");for(var K=l.language,L=0;L<K.length;L++){;try{N=k.loadPath(M)}catch(O){try{M=this.defaults.amdLanguageBase+M,N=k.loadPath(M)}catch(P){l.debug&&window.console&&console.warn&&console.warn('Select2:The language file for "'+M+'" could not be automatically loaded. A fallback will be used instead.');continue}}J.extend(N)}l.translations=J}else{var Q=k.loadPath(this.defaults.amdLanguageBase+"en"),R=new k(l.language);R.extend(Q),l.translations=R}return l},D.prototype.reset=function(){function b(a){function b(a){return l[a]||a}return a.replace(/[^\u0000-\u007E]/g,b)}function c(d,e){if(""===a.trim(d.term))return e;if(e.children&&e.children.length>0){,e),g=e.children.length-1;g>=0;g--){var h=e.children[g],i=c(d,h);null==i&&f.children.splice(g,1)}return f.children.length>0?f:c(d,f)}var j=b(e.text).toUpperCase(),k=b(d.term).toUpperCase();return j.indexOf(k)>-1?e:null}this.defaults={amdBase:"./",amdLanguageBase:"./i18n/",closeOnSelect:!0,debug:!1,dropdownAutoWidth:!1,escapeMarkup:j.escapeMarkup,language:C,matcher:c,minimumInputLength:0,maximumInputLength:0,maximumSelectionLength:0,minimumResultsForSearch:0,selectOnClose:!1,sorter:function(a){return a},templateResult:function(a){return a.text},templateSelection:function(a){return a.text},theme:"default",width:"resolve"}},D.prototype.set=function(b,c){;e[d]=c;var f=j._convertData(e);a.extend(this.defaults,f)};var E=new D;return E}),b.define("select2/options",["require","jquery","./defaults","./utils"],function(a,b,c,d){function e(b,e){if(this.options=b,null!=e&&this.fromElement(e),this.options=c.apply(this.options),e&&e.is("input")){var f=a(this.get("amdBase")+"compat/inputData");this.options.dataAdapter=d.Decorate(this.options.dataAdapter,f)}}return e.prototype.fromElement=function(a){,e);f=d._convertData(f);for(var g in f)b.inArray(g,c)>-1||(b.isPlainObject(this.options[g])?b.extend(this.options[g],f[g]):this.options[g]=f[g]);return this},e.prototype.get=function(a){return this.options[a]},e.prototype.set=function(a,b){this.options[a]=b},e}),b.define("select2/core",["jquery","./options","./utils","./keys"],function(a,b,c,d){var e=function(a,c){,this.options=new b(c,a),e.__super__.constructor.call(this);var d=a.attr("tabindex")||0;a.data("old-tabindex",d),a.attr("tabindex","-1");var f=this.options.get("dataAdapter");this.dataAdapter=new f(a,this.options);var g=this.render();this._placeContainer(g);var h=this.options.get("selectionAdapter");this.selection=new h(a,this.options),this.$selection=this.selection.render(),this.selection.position(this.$selection,g);var i=this.options.get("dropdownAdapter");this.dropdown=new i(a,this.options),this.$dropdown=this.dropdown.render(),this.dropdown.position(this.$dropdown,g);var j=this.options.get("resultsAdapter");this.results=new j(a,this.options,this.dataAdapter),this.$results=this.results.render(),this.results.position(this.$results,this.$dropdown);var k=this;this._bindAdapters(),this._registerDomEvents(),this._registerDataEvents(),this._registerSelectionEvents(),this._registerDropdownEvents(),this._registerResultsEvents(),this._registerEvents(),this.dataAdapter.current(function(a){k.trigger("selection:update",{data:a})}),a.addClass("select2-hidden-accessible"),a.attr("aria-hidden","true"),this._syncAttributes(),a.data("select2",this)};return c.Extend(e,c.Observable),e.prototype._generateId=function(a){var b="";return b=null!=a.attr("id")?a.attr("id"):null!=a.attr("name")?a.attr("name")+"-"+c.generateChars(2):c.generateChars(4),b="select2-"+b},e.prototype._placeContainer=function(a){a.insertAfter(this.$element);var b=this._resolveWidth(this.$element,this.options.get("width"));null!=b&&a.css("width",b)},e.prototype._resolveWidth=function(a,b){var c=/^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;if("resolve"==b){var d=this._resolveWidth(a,"style");return null!=d?d:this._resolveWidth(a,"element")}if("element"==b){var e=a.outerWidth(!1);return 0>=e?"auto":e+"px"}if("style"==b){var f=a.attr("style");if("string"!=typeof f)return null;for(var g=f.split(";"),h=0,i=g.length;i>h;h+=1){var j=g[h].replace(/\s/g,""),k=j.match(c);if(null!==k&&k.length>=1)return k[1]}return null}return b},e.prototype._bindAdapters=function(){this.dataAdapter.bind(this,this.$container),this.selection.bind(this,this.$container),this.dropdown.bind(this,this.$container),this.results.bind(this,this.$container)},e.prototype._registerDomEvents=function(){var b=this;this.$element.on("change.select2",function(){b.dataAdapter.current(function(a){b.trigger("selection:update",{data:a})})}),this._sync=c.bind(this._syncAttributes,this),this.$element[0].attachEvent&&this.$element[0].attachEvent("onpropertychange",this._sync);var d=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver;null!=d?(this._observer=new d(function(c){a.each(c,b._sync)}),this._observer.observe(this.$element[0],{attributes:!0,subtree:!1})):this.$element[0].addEventListener&&this.$element[0].addEventListener("DOMAttrModified",b._sync,!1)},e.prototype._registerDataEvents=function(){var a=this;this.dataAdapter.on("*",function(b,c){a.trigger(b,c)})},e.prototype._registerSelectionEvents=function(){var b=this,c=["toggle","focus"];this.selection.on("toggle",function(){b.toggleDropdown()}),this.selection.on("focus",function(a){b.focus(a)}),this.selection.on("*",function(d,e){-1===a.inArray(d,c)&&b.trigger(d,e)})},e.prototype._registerDropdownEvents=function(){var a=this;this.dropdown.on("*",function(b,c){a.trigger(b,c)})},e.prototype._registerResultsEvents=function(){var a=this;this.results.on("*",function(b,c){a.trigger(b,c)})},e.prototype._registerEvents=function(){var a=this;this.on("open",function(){a.$container.addClass("select2-container--open")}),this.on("close",function(){a.$container.removeClass("select2-container--open")}),this.on("enable",function(){a.$container.removeClass("select2-container--disabled")}),this.on("disable",function(){a.$container.addClass("select2-container--disabled")}),this.on("blur",function(){a.$container.removeClass("select2-container--focus")}),this.on("query",function(b){),this.dataAdapter.query(b,function(c){a.trigger("results:all",{data:c,query:b})})}),this.on("query:append",function(b){this.dataAdapter.query(b,function(c){a.trigger("results:append",{data:c,query:b})})}),this.on("keypress",function(b){),b.preventDefault()):(c===d.ENTER||c===d.SPACE||c===d.DOWN&&b.altKey)&&(a.open(),b.preventDefault())})},e.prototype._syncAttributes=function(){)},e.prototype.trigger=function(a,b){var c=e.__super__.trigger,d={open:"opening",close:"closing",select:"selecting",unselect:"unselecting"}),a in d){var f=d[a],g={prevented:!1,name:a,args:b};if(c.call(this,f,g),g.prevented)return void(b.prevented=!0)}c.call(this,a,b)},e.prototype.toggleDropdown=function(){this.options.get("disabled")||(this.isOpen()?this.close():this.open())},e.prototype.open=function(){)},e.prototype.close=function(){)},e.prototype.isOpen=function(){return this.$container.hasClass("select2-container--open")},e.prototype.hasFocus=function(){return this.$container.hasClass("select2-container--focus")},e.prototype.focus=function(a){))},e.prototype.enable=function(a){this.options.get("debug")&&window.console&&console.warn&&console.warn('Select2:The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'),(null==a||0===a.length)&&(a=[!0]);var b=!a[0];this.$element.prop("disabled",b)},e.prototype.data=function(){this.options.get("debug")&&arguments.length>0&&window.console&&console.warn&&console.warn('Select2:Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');var a=[];return this.dataAdapter.current(function(b){a=b}),a},e.prototype.val=function(b){if(this.options.get("debug")&&window.console&&console.warn&&console.warn('Select2:The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'),null==b||0===b.length)return this.$element.val();var c=b[0];a.isArray(c)&&(c=a.map(c,function(a){return a.toString()})),this.$element.val(c).trigger("change")},e.prototype.destroy=function(){this.$container.remove(),this.$element[0].detachEvent&&this.$element[0].detachEvent("onpropertychange",this._sync),null!=this._observer?(this._observer.disconnect(),this._observer=null):this.$element[0].removeEventListener&&this.$element[0].removeEventListener("DOMAttrModified",this._sync,!1),this._sync=null,this.$element.off(".select2"),this.$element.attr("tabindex",this.$element.data("old-tabindex")),this.$element.removeClass("select2-hidden-accessible"),this.$element.attr("aria-hidden","false"),this.$element.removeData("select2"),this.dataAdapter.destroy(),this.selection.destroy(),this.dropdown.destroy(),this.results.destroy(),this.dataAdapter=null,this.selection=null,this.dropdown=null,this.results=null},e.prototype.render=function(){var b=a('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');return b.attr("dir",this.options.get("dir")),this.$container=b,this.$container.addClass("select2-container--"+this.options.get("theme")),b.data("element",this.$element),b},e}),b.define("select2/compat/utils",["jquery"],function(a){function b(b,c,d){var e,f,g=[];e=a.trim(b.attr("class")),e&&(e=""+e,a(e.split(/\s+/)).each(function(){0===this.indexOf("select2-")&&g.push(this)})),e=a.trim(c.attr("class")),e&&(e=""+e,a(e.split(/\s+/)).each(function(){0!==this.indexOf("select2-")&&(f=d(this),null!=f&&g.push(f))})),b.attr("class",g.join(" "))}return{syncCssClasses:b}}),b.define("select2/compat/containerCss",["jquery","./utils"],function(a,b){function c(a){return null}return d.prototype.render=function(d){var e=d.call(this),f=this.options.get("containerCssClass")||"";a.isFunction(f)&&(f=f(this.$element));var g=this.options.get("adaptContainerCssClass");if(g=g||c,-1!==f.indexOf(":all:")){f=f.replace(":all:","");var h=g;g=function(a){var b=h(a);return null!=b?b+" "+a:a}};return a.isFunction(i)&&(i=i(this.$element)),b.syncCssClasses(e,this.$element,g),e.css(i),e.addClass(f),e},d}),b.define("select2/compat/dropdownCss",["jquery","./utils"],function(a,b){function c(a){return null}return d.prototype.render=function(d){var e=d.call(this),f=this.options.get("dropdownCssClass")||"";a.isFunction(f)&&(f=f(this.$element));var g=this.options.get("adaptDropdownCssClass");if(g=g||c,-1!==f.indexOf(":all:")){f=f.replace(":all:","");var h=g;g=function(a){
var b=h(a);return null!=b?b+" "+a:a}};return a.isFunction(i)&&(i=i(this.$element)),b.syncCssClasses(e,this.$element,g),e.css(i),e.addClass(f),e},d}),b.define("select2/compat/initSelection",["jquery"],function(a){function b(a,b,c){c.get("debug")&&window.console&&console.warn&&console.warn("Select2: The `initSelection` option has been deprecated in favor of a custom data adapter that overrides the `current` method. This method is now called multiple times instead of a single time when the instance is initialized. Support will be removed for the `initSelection` option in future versions of Select2"),this.initSelection=c.get("initSelection"),this._isInitialized=!1,a.call(this,b,c)}return b.prototype.current=function(b,c){var d=this;return this._isInitialized?void b.call(this,c):void this.initSelection.call(null,this.$element,function(b){d._isInitialized=!0,a.isArray(b)||(b=[b]),c(b)})},b}),b.define("select2/compat/inputData",["jquery"],function(a){function b(a,b,c){this._currentData=[],this._valueSeparator=c.get("valueSeparator")||",","hidden"===b.prop("type")&&c.get("debug")&&console&&console.warn&&console.warn("Select2: Using a hidden input with Select2 is no longer supported and may stop working in the future. It is recommended to use a `<select>` element instead."),a.call(this,b,c)}return b.prototype.current=function(b,c){function d(b,c){var e=[];return b.selected||-1!==a.inArray(b.id,c)?(b.selected=!0,e.push(b)):b.selected=!1,b.children&&e.push.apply(e,d(b.children,c)),e}for(var e=[],f=0;f<this._currentData.length;f++){var g=this._currentData[f];e.push.apply(e,d(g,this.$element.val().split(this._valueSeparator)))}c(e)},b.prototype.select=function(b,c){if(this.options.get("multiple")){var d=this.$element.val();d+=this._valueSeparator+c.id,this.$element.val(d),this.$element.trigger("change")}else this.current(function(b){a.map(b,function(a){a.selected=!1})}),this.$element.val(c.id),this.$element.trigger("change")},b.prototype.unselect=function(a,b){var c=this;b.selected=!1,this.current(function(a){for(var d=[],e=0;e<a.length;e++){var f=a[e];b.id!=f.id&&d.push(f.id)}c.$element.val(d.join(c._valueSeparator)),c.$element.trigger("change")})},b.prototype.query=function(a,b,c){for(var d=[],e=0;e<this._currentData.length;e++){var f=this._currentData[e],g=this.matches(b,f);null!==g&&d.push(g)}c({results:d})},b.prototype.addOptions=function(b,c){var d=a.map(c,function(b){return a.data(b[0],"data")});this._currentData.push.apply(this._currentData,d)},b}),b.define("select2/compat/matcher",["jquery"],function(a){function b(b){function c(c,d){,d);if(null==c.term||""===a.trim(c.term))return e;if(d.children){for(var f=d.children.length-1;f>=0;f--){var g=d.children[f],h=b(c.term,g.text,g);h||e.children.splice(f,1)}if(e.children.length>0)return e}return b(c.term,d.text,d)?e:null}return c}return b}),b.define("select2/compat/query",[],function(){function a(a,b,c){c.get("debug")&&window.console&&console.warn&&console.warn("Select2: The `query` option has been deprecated in favor of a custom data adapter that overrides the `query` method. Support will be removed for the `query` option in future versions of Select2."),a.call(this,b,c)}return a.prototype.query=function(a,b,c){b.callback=c;var d=this.options.get("query");d.call(null,b)},a}),b.define("select2/dropdown/attachContainer",[],function(){function a(a,b,c){a.call(this,b,c)}return a.prototype.position=function(a,b,c){var d=c.find(".dropdown-wrapper");d.append(b),b.addClass("select2-dropdown--below"),c.addClass("select2-container--below")},a}),b.define("select2/dropdown/stopPropagation",[],function(){return a.prototype.bind=function(a,b,c){a.call(this,b,c);var d=["blur","change","click","dblclick","focus","focusin","focusout","input","keydown","keyup","keypress","mousedown","mouseenter","mouseleave","mousemove","mouseover","mouseup","search","touchend","touchstart"];this.$dropdown.on(d.join(" "),function(a){a.stopPropagation()})},a}),b.define("select2/selection/stopPropagation",[],function(){return a.prototype.bind=function(a,b,c){a.call(this,b,c);var d=["blur","change","click","dblclick","focus","focusin","focusout","input","keydown","keyup","keypress","mousedown","mouseenter","mouseleave","mousemove","mouseover","mouseup","search","touchend","touchstart"];this.$selection.on(d.join(" "),function(a){a.stopPropagation()})},a}),function(c){"function"==typeof b.define&&b.define.amd?b.define("jquery-mousewheel",["jquery"],c):"object"==typeof exports?module.exports=c:c(a)}(function(a){function b(b){var g=b||window.event,h=i.call(arguments,1),j=0,l=0,m=0,n=0,o=0,p=0;if(b=a.event.fix(g),b.type="mousewheel","detail"in g&&(m=-1*g.detail),"wheelDelta"in g&&(m=g.wheelDelta),"wheelDeltaY"in g&&(m=g.wheelDeltaY),"wheelDeltaX"in g&&(l=-1*g.wheelDeltaX),"axis"in g&&g.axis===g.HORIZONTAL_AXIS&&(l=-1*m,m=0),j=0===m?l:m,"deltaY"in g&&(m=-1*g.deltaY,j=m),"deltaX"in g&&(l=g.deltaX,0===m&&(j=-1*l)),0!==m||0!==l){if(1===g.deltaMode){var q=a.data(this,"mousewheel-line-height");j*=q,m*=q,l*=q}else if(2===g.deltaMode){var r=a.data(this,"mousewheel-page-height");j*=r,m*=r,l*=r}if(n=Math.max(Math.abs(m),Math.abs(l)),(!f||f>n)&&(f=n,d(g,n)&&(f/=40)),d(g,n)&&(j/=40,l/=40,m/=40),j=Math[j>=1?"floor":"ceil"](j/f),l=Math[l>=1?"floor":"ceil"](l/f),m=Math[m>=1?"floor":"ceil"](m/f),k.settings.normalizeOffset&&this.getBoundingClientRect){var s=this.getBoundingClientRect();o=b.clientX-s.left,p=b.clientY-s.top}return b.deltaX=l,b.deltaY=m,b.deltaFactor=f,b.offsetX=o,b.offsetY=p,b.deltaMode=0,h.unshift(b,j,l,m),e&&clearTimeout(e),e=setTimeout(c,200),(a.event.dispatch||a.event.handle).apply(this,h)}}function c(){f=null}function d(a,b){return k.settings.adjustOldDeltas&&"mousewheel"===a.type&&b%120===0}var e,f,g=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],h="onwheel"in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],i=Array.prototype.slice;if(a.event.fixHooks)for(var j=g.length;j;)a.event.fixHooks[g[--j]]=a.event.mouseHooks;var k=a.event.special.mousewheel={version:"3.1.12",setup:function(){if(this.addEventListener)for(var c=h.length;c;)this.addEventListener(h[--c],b,!1);else this.onmousewheel=b;a.data(this,"mousewheel-line-height",k.getLineHeight(this)),a.data(this,"mousewheel-page-height",k.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var c=h.length;c;)this.removeEventListener(h[--c],b,!1);else this.onmousewheel=null;a.removeData(this,"mousewheel-line-height"),a.removeData(this,"mousewheel-page-height")},getLineHeight:function(b){var c=a(b),d=c["offsetParent"in a.fn?"offsetParent":"parent"]();return d.length||(d=a("body")),parseInt(d.css("fontSize"),10)||parseInt(c.css("fontSize"),10)||16},getPageHeight:function(b){return a(b).height()},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};a.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})}),b.define("jquery.select2",["jquery","jquery-mousewheel","./select2/core","./select2/defaults"],function(a,b,c,d){if(null==a.fn.select2){var e=["open","close","destroy"];a.fn.select2=function(b){,"object"==typeof b)return this.each(function(){,b);new c(a(this),d)}),this;if("string"==typeof b){var d;return this.each(function(){var c=a(this).data("select2");null==c&&window.console&&console.error&&console.error("The select2('"+b+"') method was called on an element that is not using Select2.");var e=Array.prototype.slice.call(arguments,1);d=c[b].apply(c,e)}),a.inArray(b,e)>-1?this:d}throw new Error("Invalid arguments for Select2: "+b)}}return null==a.fn.select2.defaults&&(a.fn.select2.defaults=d),c}),{define:b.define,require:b.require}}(),c=b.require("jquery.select2");return a.fn.select2.amd=b,c});

$(document).ready(function () {
    $(".select2").select2(
        {
            placeholder: "Select",
            allowClear: true,
        }
    );

    $(".select22").select2(
        {
            placeholder: "Select",
            allowClear: true,
            tags: true,
        }
    );

   function matchStart(params, data) {
    
        if ($.trim(params.term) === '') {
            return data;
        }

        filteredChildren = [];

        $.each(data, function(index, val) {

            console.log(index);

            if (data.text.toUpperCase().indexOf(params.term.toUpperCase()) == 0) {
                filteredChildren.push(data.text);
            }
        });

  
        if (filteredChildren.length) {, data, true);
            modifiedData.data = filteredChildren;

            return modifiedData;
        }

        // Return `null` if the term should not be displayed
        return null;
    } 

    $('.recipient_select2').select2({
        placeholder: "Select",
        allowClear: true,
        multiple: true,
        maximumSelectionLength: 10,
        tokenSeparators: [',', ',', ' '],
        matcher: matchStart
    });

    $('.js-select-matcher').select2({
      matcher: matchStart
    });
 });

//! moment.js
//! version : 2.10.6
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    global.moment = factory()
}(this, function () { 'use strict';

    var hookCallback;

    function utils_hooks__hooks () {
        return hookCallback.apply(null, arguments);
    }

    // This is done to register the method called with moment()
    // without creating circular dependencies.
    function setHookCallback (callback) {
        hookCallback = callback;
    }

    function isArray(input) {
        return Object.prototype.toString.call(input) === '[object Array]';
    }

    function isDate(input) {
        return input instanceof Date || Object.prototype.toString.call(input) === '[object Date]';
    }

    function map(arr, fn) {
        var res = [], i;
        for (i = 0; i < arr.length; ++i) {
            res.push(fn(arr[i], i));
        }
        return res;
    }

    function hasOwnProp(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b);
    }

    function extend(a, b) {
        for (var i in b) {
            if (hasOwnProp(b, i)) {
                a[i] = b[i];
            }
        }

        if (hasOwnProp(b, 'toString')) {
            a.toString = b.toString;
        }

        if (hasOwnProp(b, 'valueOf')) {
            a.valueOf = b.valueOf;
        }

        return a;
    }

    function create_utc__createUTC (input, format, locale, strict) {
        return createLocalOrUTC(input, format, locale, strict, true).utc();
    }

    function defaultParsingFlags() {
        // We need to deep clone this object.
        return {
            empty           : false,
            unusedTokens    : [],
            unusedInput     : [],
            overflow        : -2,
            charsLeftOver   : 0,
            nullInput       : false,
            invalidMonth    : null,
            invalidFormat   : false,
            userInvalidated : false,
            iso             : false
        };
    }

    function getParsingFlags(m) {
        if (m._pf == null) {
            m._pf = defaultParsingFlags();
        }
        return m._pf;
    }

    function valid__isValid(m) {
        if (m._isValid == null) {
            var flags = getParsingFlags(m);
            m._isValid = !isNaN(m._d.getTime()) &&
                flags.overflow < 0 &&
                !flags.empty &&
                !flags.invalidMonth &&
                !flags.invalidWeekday &&
                !flags.nullInput &&
                !flags.invalidFormat &&
                !flags.userInvalidated;

            if (m._strict) {
                m._isValid = m._isValid &&
                    flags.charsLeftOver === 0 &&
                    flags.unusedTokens.length === 0 &&
                    flags.bigHour === undefined;
            }
        }
        return m._isValid;
    }

    function valid__createInvalid (flags) {
        var m = create_utc__createUTC(NaN);
        if (flags != null) {
            extend(getParsingFlags(m), flags);
        }
        else {
            getParsingFlags(m).userInvalidated = true;
        }

        return m;
    }

    var momentProperties = utils_hooks__hooks.momentProperties = [];

    function copyConfig(to, from) {
        var i, prop, val;

        if (typeof from._isAMomentObject !== 'undefined') {
            to._isAMomentObject = from._isAMomentObject;
        }
        if (typeof from._i !== 'undefined') {
            to._i = from._i;
        }
        if (typeof from._f !== 'undefined') {
            to._f = from._f;
        }
        if (typeof from._l !== 'undefined') {
            to._l = from._l;
        }
        if (typeof from._strict !== 'undefined') {
            to._strict = from._strict;
        }
        if (typeof from._tzm !== 'undefined') {
            to._tzm = from._tzm;
        }
        if (typeof from._isUTC !== 'undefined') {
            to._isUTC = from._isUTC;
        }
        if (typeof from._offset !== 'undefined') {
            to._offset = from._offset;
        }
        if (typeof from._pf !== 'undefined') {
            to._pf = getParsingFlags(from);
        }
        if (typeof from._locale !== 'undefined') {
            to._locale = from._locale;
        }

        if (momentProperties.length > 0) {
            for (i in momentProperties) {
                prop = momentProperties[i];
                val = from[prop];
                if (typeof val !== 'undefined') {
                    to[prop] = val;
                }
            }
        }

        return to;
    }

    var updateInProgress = false;

    // Moment prototype object
    function Moment(config) {
        copyConfig(this, config);
        this._d = new Date(config._d != null ? config._d.getTime() : NaN);
        // Prevent infinite loop in case updateOffset creates new moment
        // objects.
        if (updateInProgress === false) {
            updateInProgress = true;
            utils_hooks__hooks.updateOffset(this);
            updateInProgress = false;
        }
    }

    function isMoment (obj) {
        return obj instanceof Moment || (obj != null && obj._isAMomentObject != null);
    }

    function absFloor (number) {
        if (number < 0) {
            return Math.ceil(number);
        } else {
            return Math.floor(number);
        }
    }

    function toInt(argumentForCoercion) {
        var coercedNumber = +argumentForCoercion,
            value = 0;

        if (coercedNumber !== 0 && isFinite(coercedNumber)) {
            value = absFloor(coercedNumber);
        }

        return value;
    }

    function compareArrays(array1, array2, dontConvert) {
        var len = Math.min(array1.length, array2.length),
            lengthDiff = Math.abs(array1.length - array2.length),
            diffs = 0,
            i;
        for (i = 0; i < len; i++) {
            if ((dontConvert && array1[i] !== array2[i]) ||
                (!dontConvert && toInt(array1[i]) !== toInt(array2[i]))) {
                diffs++;
            }
        }
        return diffs + lengthDiff;
    }

    function Locale() {
    };
    var globalLocale;

    function normalizeLocale(key) {
        return key ? key.toLowerCase().replace('_', '-') : key;
    }

    // pick the locale from the array
    // try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
    // substring from most specific to least, but move to the next array item if it's a more specific variant than the current root function chooseLocale(names){var i=0,j,next,locale,split;next=next ? next.split('-'):null;:while (j>0){locale=loadLocale(split.slice(0,j).join('-'));:if (locale){return locale}if (next && next.length >=j && compareArrays(split,next,true) >=j - 1){//the next array item is better than a shallower substring of this one break}function loadLocale(name){// TODO:Find a better way to register and load all the locales in Node if (!locales[name] && typeof module!=='undefined' && module && module.exports){try{oldLocale=globalLocale._abbr;:require('./locale/'+name);:// because defineLocale currently also sets the global locale,we // want to undo that for lazy loaded locales locale_locales__getSetGlobalLocale(oldLocale)}// This function will load locale and then set the global locale. If // no arguments are passed in,it will simply return the current global // locale key. function locale_locales__getSetGlobalLocale (key,values){:var data;:if (key){if (typeof values==='undefined'){data=locale_locales__getLocale(key)}if (data){:// moment.duration._locale=moment._locale=data;:globalLocale=data}function defineLocale (name,values){// backwards compat for now:also set the locale locale_locales__getSetGlobalLocale(name);:return locales[name]}// returns locale data function locale_locales__getLocale (key){:var locale;:if (key && key._locale && key._locale._abbr){key=key._locale._abbr}if (!key){return globalLocale}if (!isArray(key)){://short-circuit everything else locale=loadLocale(key);:if (locale){return locale};function addUnitAlias (unit,shorthand){:var lowerCase=unit.toLowerCase();:aliases[lowerCase]=aliases[lowerCase+'s']=aliases[shorthand]=unit}function normalizeUnits(units){return typeof units==='string' ? aliases[units] || aliases[units.toLowerCase()]:undefined}function normalizeObjectUnits(inputObject){,normalizedProp,prop;for (prop in inputObject){:if (hasOwnProp(inputObject,prop)){normalizedProp=normalizeUnits(prop);:if (normalizedProp){normalizedInput[normalizedProp]=inputObject[prop]}function makeGetSet (unit,keepTime){:return function (value){if (value!=null){get_set__set(this,unit,value);:utils_hooks__hooks.updateOffset(this,keepTime);:return this}function get_set__get (mom,unit){return mom._d['get'+(mom._isUTC ? 'UTC':'')+unit]()}function get_set__set (mom,unit,value){return mom._d['set'+(mom._isUTC ? 'UTC':'')+unit](value)}// MOMENTS function getSet (units,value){:var unit;:if (typeof units==='object'){for (unit in units){this.set(unit,units[unit])}forceSign),function zeroFill(number,targetLength{:var absNumber=''+Math.abs(number),zerosToFill=targetLength - absNumber.length,sign=number >=0;return (sign ? (forceSign ? '+':'') :'-')+Math.pow(10,Math.max(0,zerosToFill)).toString().substr(1)+absNumber}var formattingTokens=/(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;var localFormattingTokens=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4}2] // ordinal:'Mo' // callback:function (),;// token:'M' // padded:['MM'{this.month()+1}callback),function addFormatToken (token,ordinal,padded{:var func=callback;:if (typeof callback==='string'){func=function (){return this[callback]()}if (token){formatTokenFunctions[token]=func}if (padded){formatTokenFunctions[padded[0]]=function (){return zeroFill(func.apply(this,arguments),padded[1],padded[2])}if (ordinal){formatTokenFunctions[ordinal]=function (){return this.localeData().ordinal(func.apply(this,arguments),token)}function removeFormattingTokens(input){if (input.match(/\[[\s\S]/)){return input.replace(/^\[|\]$/g,'')}function makeFormatFunction(format){:var array=format.match(formattingTokens),i,length;:for (i=0,length=array.length;:i < length;:i++){if (formatTokenFunctions[array[i]]){array[i]=formatTokenFunctions[array[i]]}return function (mom){:var output='';:for (i=0;:i < length;i++){output +=array[i] instanceof Function ? array[i].call(mom,format):array[i]}// format date using native date object function formatMoment(m,format){if (!m.isValid()){return m.localeData().invalidDate()}function expandFormat(format,locale){:var i=5;:function replaceLongDateFormatTokens(input){return locale.longDateFormat(input) || input}localFormattingTokens.lastIndex=0;while (i >=0 && localFormattingTokens.test(format)){:format=format.replace(localFormattingTokens,replaceLongDateFormatTokens);:localFormattingTokens.lastIndex=0;:i -=1}var match1=/\d/;// 0 - 9 var match2=/\d\d/;// 00 - 99 var match3=/\d{3}/;// 000 - 999 var match4=/\d{4}/;// 0000 - 9999 var match6=/[+-]?\d{6}/;// -999999 - 999999 var match1to2=/\d\d?/;// 0 - 99 var match1to3=/\d{1,3}/;// 0 - 999 var match1to4=/\d{1,4}/;// 0 - 9999 var match1to6=/[+-]?\d{1,6}/;// -999999 - 999999 var matchUnsigned=/\d+/;// 0 - inf var matchSigned=/[+-]?\d+/;// -inf - inf var matchOffset=/Z|[+-]\d\d:?\d\d/gi;// +00:00 -00:00 +0000 -0000 or Z var matchTimestamp=/[+-]?\d+(\.\d{1,3})?/;// 123456789 123456789.123 // any word (or two) characters or numbers including two/three word month in arabic. var matchWord=/[0-9]['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2};

    function isFunction (sth) {
        // https://github.com/moment/moment/issues/2325
        return typeof sth === 'function' &&
            Object.prototype.toString.call(sth) === '[object Function]';
    }


    function addRegexToken (token, regex, strictRegex) {
        regexes[token] = isFunction(regex) ? regex : function (isStrict) {
            return (isStrict && strictRegex) ? strictRegex : regex;
        };
    }

    function getParseRegexForToken (token, config) {
        if (!hasOwnProp(regexes, token)) {
            return new RegExp(unescapeFormat(token));
        }

        return regexes[token](config._strict, config._locale);
    }

    // Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
    function unescapeFormat(s) {
        return s.replace('\\', '').replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (matched, p1, p2, p3, p4) {
            return p1 || p2 || p3 || p4;
        }]/g, '\\$&');
    };

    function addParseToken (token, callback) {
        var i, func = callback;
        if (typeof token === 'string') {
            token = [token];
        }
        if (typeof callback === 'number') {
            func = function (input, array) {
                array[callback] = toInt(input);
            };
        }
        for (i = 0; i < token.length; i++) {
            tokens[token[i]] = func;
        }
    }

    function addWeekParseToken (token, callback) {
        addParseToken(token, function (input, array, config, token) {;
            callback(input, config._w, config, token);
        });
    }

    function addTimeToArrayFromToken(token, input, config) {
        if (input != null && hasOwnProp(tokens, token)) {
            tokens[token](input, config._a, config, token);
        }
    }

    var YEAR = 0;
    var MONTH = 1;
    var DATE = 2;
    var HOUR = 3;
    var MINUTE = 4;
    var SECOND = 5;
    var MILLISECOND = 6;

    function daysInMonth(year, month) {
        return new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
    }

    // FORMATTING

    addFormatToken('M', ['MM', 2], 'Mo', function () {
        return this.month() + 1;
    });

    addFormatToken('MMM', 0, 0, function (format) {
        return this.localeData().monthsShort(this, format);
    });

    addFormatToken('MMMM', 0, 0, function (format) {
        return this.localeData().months(this, format);
    });

    // ALIASES

    addUnitAlias('month', 'M');

    // PARSING

    addRegexToken('M',    match1to2);
    addRegexToken('MM',   match1to2, match2);
    addRegexToken('MMM',  matchWord);
    addRegexToken('MMMM', matchWord);

    addParseToken(['M', 'MM'], function (input, array) {
        array[MONTH] = toInt(input) - 1;
    });

    addParseToken(['MMM', 'MMMM'], function (input, array, config, token) {
        var month = config._locale.monthsParse(input, token, config._strict);
        // if we didn't find a month name,mark the date as invalid. if (month!=null){array[MONTH]=month});// LOCALES var defaultLocaleMonths='January_February_March_April_May_June_July_August_September_October_November_December'.split('_');function localeMonths (m){return this._months[m.month()]}var defaultLocaleMonthsShort='Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_');function localeMonthsShort (m){return this._monthsShort[m.month()]}format,function localeMonthsParse (monthName,strict){:var i,mom,regex;:if (!this._monthsParse){this._monthsParse=[];:this._longMonthsParse=[];:this._shortMonthsParse=[]}for (i=0;i < 12;i++){// make the regex if we don't have it already
            mom = create_utc__createUTC([2000, i]);
            if (strict && !this._longMonthsParse[i]) {
                this._longMonthsParse[i] = new RegExp('^' + this.months(mom, '').replace('.', '') + '$', 'i');
                this._shortMonthsParse[i] = new RegExp('^' + this.monthsShort(mom, '').replace('.', '') + '$', 'i');
            }
            if (!strict && !this._monthsParse[i]) {
                regex = '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
                this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
            }
            // test the regex
            if (strict && format === 'MMMM' && this._longMonthsParse[i].test(monthName)) {
                return i;
            } else if (strict && format === 'MMM' && this._shortMonthsParse[i].test(monthName)) {
                return i;
            } else if (!strict && this._monthsParse[i].test(monthName)) {
                return i;
            }
        }
    }

    // MOMENTS

    function setMonth (mom, value) {
        var dayOfMonth;

        // TODO: Move this out of here!
        if (typeof value === 'string') {
            value = mom.localeData().monthsParse(value);
            // TODO: Another silent failure?
            if (typeof value !== 'number') {
                return mom;
            }
        }

        dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));
        mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);
        return mom;
    }

    function getSetMonth (value) {
        if (value != null) {
            setMonth(this, value);
            utils_hooks__hooks.updateOffset(this, true);
            return this;
        } else {
            return get_set__get(this, 'Month');
        }
    }

    function getDaysInMonth () {
        return daysInMonth(this.year(), this.month());
    }

    function checkOverflow (m) {
        var overflow;
        var a = m._a;

        if (a && getParsingFlags(m).overflow === -2) {
            overflow =
                a[MONTH]       < 0 || a[MONTH]       > 11  ? MONTH :
                a[DATE]        < 1 || a[DATE]        > daysInMonth(a[YEAR], a[MONTH]) ? DATE :
                a[HOUR]        < 0 || a[HOUR]        > 24 || (a[HOUR] === 24 && (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0)) ? HOUR :
                a[MINUTE]      < 0 || a[MINUTE]      > 59  ? MINUTE :
                a[SECOND]      < 0 || a[SECOND]      > 59  ? SECOND :
                a[MILLISECOND] < 0 || a[MILLISECOND] > 999 ? MILLISECOND :
                -1;

            if (getParsingFlags(m)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
                overflow = DATE;
            }

            getParsingFlags(m).overflow = overflow;
        }

        return m;
    }

    function warn(msg) {
        if (utils_hooks__hooks.suppressDeprecationWarnings === false && typeof console !== 'undefined' && console.warn) {
            console.warn('Deprecation warning:' + msg);
        }
    }

    function deprecate(msg, fn) {
        var firstTime = true;

        return extend(function () {
            if (firstTime) {
                warn(msg + '\n' + (new Error()).stack);
                firstTime = false;
            }
            return fn.apply(this, arguments);
        }, fn);
    };

    function deprecateSimple(name, msg) {
        if (!deprecations[name]) {
            warn(msg);
            deprecations[name] = true;
        }
    }

    utils_hooks__hooks.suppressDeprecationWarnings = false;

    var from_string__isoRegex = /^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;

    var isoDates = [
        ['YYYYYY-MM-DD', /[+-]\d{6}-\d{2}-\d{2}/],
        ['YYYY-MM-DD', /\d{4}-\d{2}-\d{2}/],
        ['GGGG-[W]WW-E', /\d{4}-W\d{2}-\d/],
        ['GGGG-[W]WW', /\d{4}-W\d{2}/],
        ['YYYY-DDD', /\d{4}-\d{3}/]
    ];

    // iso time formats and regexes
    var isoTimes = [
        ['HH:mm:ss.SSSS', /(T| )\d\d:\d\d:\d\d\.\d+/],
        ['HH:mm:ss', /(T| )\d\d:\d\d:\d\d/],
        ['HH:mm', /(T| )\d\d:\d\d/],
        ['HH', /(T| )\d\d/]
    ];

    var aspNetJsonRegex = /^\/?Date\((\-?\d+)/i;

    // date from iso format
    function configFromISO(config) {
        var i, l,
            string = config._i,
            match = from_string__isoRegex.exec(string);

        if (match) {
            getParsingFlags(config).iso = true;
            for (i = 0, l = isoDates.length; i < l; i++) {
                if (isoDates[i][1].exec(string)) {
                    config._f = isoDates[i][0];
                    break;
                }
            }
            for (i = 0, l = isoTimes.length; i < l; i++) {
                if (isoTimes[i][1].exec(string)) {
                    // match[6] should be 'T' or space
                    config._f += (match[6] || ' ') + isoTimes[i][0];
                    break;
                }
            }
            if (string.match(matchOffset)) {
                config._f += 'Z';
            }
            configFromStringAndFormat(config);
        } else {
            config._isValid = false;
        }
    }

    // date from iso format or fallback
    function configFromString(config) {
        var matched = aspNetJsonRegex.exec(config._i);

        if (matched !== null) {
            config._d = new Date(+matched[1]);
            return;
        }

        configFromISO(config);
        if (config._isValid === false) {
            delete config._isValid;
            utils_hooks__hooks.createFromInputFallback(config);
        }
    }

    utils_hooks__hooks.createFromInputFallback = deprecate(
        'moment construction falls back to js Date. This is ' +
        'discouraged and will be removed in upcoming major ' +
        'release. Please refer to ' +
        'https://github.com/moment/moment/issues/1407 for more info.',
        function (config) {
            config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
        }
    );

    function createDate (y, m, d, h, M, s, ms) {
        //can't just apply() to create a date://http://stackoverflow.com/questions/181348/instantiating-a-javascript-object-by-calling-prototype-constructor-apply var date=new Date(y,m,d,h,M,s,ms);://the date constructor doesn't accept years < 1970
        if (y < 1970) {
            date.setFullYear(y);
        }
        return date;
    }

    function createUTCDate (y) {
        var date = new Date(Date.UTC.apply(null, arguments));
        if (y < 1970) {
            date.setUTCFullYear(y);
        }
        return date;
    }

    addFormatToken(0, ['YY', 2], 0, function () {
        return this.year() % 100;
    });

    addFormatToken(0, ['YYYY',   4],       0, 'year');
    addFormatToken(0, ['YYYYY',  5],       0, 'year');
    addFormatToken(0, ['YYYYYY', 6, true], 0, 'year');

    // ALIASES

    addUnitAlias('year', 'y');

    // PARSING

    addRegexToken('Y',      matchSigned);
    addRegexToken('YY',     match1to2, match2);
    addRegexToken('YYYY',   match1to4, match4);
    addRegexToken('YYYYY',  match1to6, match6);
    addRegexToken('YYYYYY', match1to6, match6);

    addParseToken(['YYYYY', 'YYYYYY'], YEAR);
    addParseToken('YYYY', function (input, array) {
        array[YEAR] = input.length === 2 ? utils_hooks__hooks.parseTwoDigitYear(input) : toInt(input);
    });
    addParseToken('YY', function (input, array) {
        array[YEAR] = utils_hooks__hooks.parseTwoDigitYear(input);
    });

    // HELPERS

    function daysInYear(year) {
        return isLeapYear(year) ? 366 : 365;
    }

    function isLeapYear(year) {
        return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    }

    // HOOKS

    utils_hooks__hooks.parseTwoDigitYear = function (input) {
        return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
    };

    // MOMENTS

    var getSetYear = makeGetSet('FullYear', false);

    function getIsLeapYear () {
        return isLeapYear(this.year());
    }

    addFormatToken('w', ['ww', 2], 'wo', 'week');
    addFormatToken('W', ['WW', 2], 'Wo', 'isoWeek');

    // ALIASES

    addUnitAlias('week', 'w');
    addUnitAlias('isoWeek', 'W');

    // PARSING

    addRegexToken('w',  match1to2);
    addRegexToken('ww', match1to2, match2);
    addRegexToken('W',  match1to2);
    addRegexToken('WW', match1to2, match2);

    addWeekParseToken(['w', 'ww', 'W', 'WW'], function (input, week, config, token) {
        week[token.substr(0, 1)] = toInt(input);
    });

    // HELPERS

    // firstDayOfWeek       0 = sun, 6 = sat
    //                      the day of the week that starts the week
    //                      (usually sunday or monday)
    // firstDayOfWeekOfYear 0 = sun, 6 = sat
    //                      the first week is the week that contains the first
    //                      of this day of the week
    //                      (eg. ISO weeks use thursday (4))
    function weekOfYear(mom, firstDayOfWeek, firstDayOfWeekOfYear) {
        var end = firstDayOfWeekOfYear - firstDayOfWeek,
            daysToDayOfWeek = firstDayOfWeekOfYear - mom.day(),
            adjustedMoment;


        if (daysToDayOfWeek > end) {
            daysToDayOfWeek -= 7;
        }

        if (daysToDayOfWeek < end - 7) {
            daysToDayOfWeek += 7;
        }

        adjustedMoment = local__createLocal(mom).add(daysToDayOfWeek, 'd');
        return {
            week: Math.ceil(adjustedMoment.dayOfYear() / 7),
            year: adjustedMoment.year()
        };
    }

    // LOCALES

    function localeWeek (mom) {
        return weekOfYear(mom, this._week.dow, this._week.doy).week;
    }

    var defaultLocaleWeek = {
        dow : 0, // Sunday is the first day of the week.
        doy : 6  // The week that contains Jan 1st is the first week of the year.
    };

    function localeFirstDayOfWeek () {
        return this._week.dow;
    }

    function localeFirstDayOfYear () {
        return this._week.doy;
    }

    // MOMENTS

    function getSetWeek (input) {
        var week = this.localeData().week(this);
        return input == null ? week : this.add((input - week) * 7, 'd');
    }

    function getSetISOWeek (input) {
        var week = weekOfYear(this, 1, 4).week;
        return input == null ? week : this.add((input - week) * 7, 'd');
    }

    addFormatToken('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear');

    // ALIASES

    addUnitAlias('dayOfYear', 'DDD');

    // PARSING

    addRegexToken('DDD',  match1to3);
    addRegexToken('DDDD', match3);
    addParseToken(['DDD', 'DDDD'], function (input, array, config) {
        config._dayOfYear = toInt(input);
    });

    // HELPERS

    //http://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
    function dayOfYearFromWeeks(year, week, weekday, firstDayOfWeekOfYear, firstDayOfWeek) {
        var week1Jan = 6 + firstDayOfWeek - firstDayOfWeekOfYear, janX = createUTCDate(year, 0, 1 + week1Jan), d = janX.getUTCDay(), dayOfYear;
        if (d < firstDayOfWeek) {
            d += 7;
        }

        weekday = weekday != null ? 1 * weekday : firstDayOfWeek;

        dayOfYear = 1 + week1Jan + 7 * (week - 1) - d + weekday;

        return {
            year: dayOfYear > 0 ? year : year - 1,
            dayOfYear: dayOfYear > 0 ?  dayOfYear : daysInYear(year - 1) + dayOfYear
        };
    }

    // MOMENTS

    function getSetDayOfYear (input) {
        var dayOfYear = Math.round((this.clone().startOf('day') - this.clone().startOf('year')) / 864e5) + 1;
        return input == null ? dayOfYear : this.add((input - dayOfYear), 'd');
    }

    // Pick the first defined of two or three arguments.
    function defaults(a, b, c) {
        if (a != null) {
            return a;
        }
        if (b != null) {
            return b;
        }
        return c;
    }

    function currentDateArray(config) {
        var now = new Date();
        if (config._useUTC) {
            return [now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()];
        }
        return [now.getFullYear(), now.getMonth(), now.getDate()];
    }

    // convert an array to a date.
    // the array should mirror the parameters below
    // note: all values past the year are optional and will default to the lowest possible value.
    // [year, month, day , hour, minute, second, millisecond]
    function configFromArray (config) {
        var i, date, input = [], currentDate, yearToUse;

        if (config._d) {
            return;
        }

        currentDate = currentDateArray(config);

        //compute day of the year from weeks and weekdays
        if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
            dayOfYearFromWeekInfo(config);
        }

        //if the day of the year is set, figure out what it is
        if (config._dayOfYear) {
            yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);

            if (config._dayOfYear > daysInYear(yearToUse)) {
                getParsingFlags(config)._overflowDayOfYear = true;
            }

            date = createUTCDate(yearToUse, 0, config._dayOfYear);
            config._a[MONTH] = date.getUTCMonth();
            config._a[DATE] = date.getUTCDate();
        }

        // Default to current date.
        // * if no year, month, day of month are given, default to today
        // * if day of month is given, default month and year
        // * if month is given, default only year
        // * if year is given, don't default anything for (i=0;:i < 3 && config._a[i]==null;:++i){config._a[i]=input[i]=currentDate[i]}// Zero out whatever was not defaulted,including time for (;i < 7;i++){config._a[i]=input[i]=(config._a[i]==null) ? (i===2 ? 1:0) :config._a[i]}// Check for 24:00:00 if (config._a[HOUR]===24 && config._a[MINUTE]===0 && config._a[SECOND]===0 && config._a[MILLISECOND]===0){:config._nextDay=true;:config._a[HOUR]=0}config._d=(config._useUTC ? createUTCDate:createDate).apply(null,input);// Apply timezone offset from input. The actual utcOffset can be changed // with parseZone. if (config._tzm!=null){config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm)}if (config._nextDay){config._a[HOUR]=24}function dayOfYearFromWeekInfo(config){// TODO:We need to take the current isoWeekYear,but that depends on // how we interpret now (local,utc,fixed offset). So create // a now version of current config (take local/utc/offset flags,and // create now). weekYear=defaults(w.GG,config._a[YEAR],weekOfYear(local__createLocal(),1,4).year);:week=defaults(w.W,1);:weekday=defaults(w.E,1)}else if (w.e!=null){// local weekday -- counting starts from begining of week weekday=w.e+dow};// date from string and format string function configFromStringAndFormat(config){// TODO:Move this to another part of the creation flow to prevent circular deps if (config._f===utils_hooks__hooks.ISO_8601){configFromISO(config);:return}config._a=[];getParsingFlags(config).empty=true;// This array is used to make a Date,config._locale).match(formattingTokens) || [];for (i=0;i < tokens.length;i++),either with `new Date` or `Date.UTC` var string=''+config._i,i,parsedInput,skipped,stringLength=string.length,token,tokens,totalParsedInputLength=0;tokens=expandFormat(config._f{:token=tokens[i];:parsedInput=(string.match(getParseRegexForToken(token,config)) || [])[0];:if (parsedInput){skipped=string.substr(0,string.indexOf(parsedInput));:if (skipped.length>0){getParsingFlags(config).unusedInput.push(skipped)}// don't parse if it's not a known token if (formatTokenFunctions[token]){if (parsedInput){getParsingFlags(config).empty=false}else,else if (config._strict &&!parsedInput){getParsingFlags(config).unusedTokens.push(token)}// add remaining unparsed input length to the string getParsingFlags(config).charsLeftOver=stringLength - totalParsedInputLength;if (string.length>0){getParsingFlags(config).unusedInput.push(string)}// clear _12h flag if hour is <=12 if (getParsingFlags(config).bigHour===true && config._a[HOUR] <=12 && config._a[HOUR]>0){getParsingFlags(config).bigHour=undefined}function meridiemFixWrap (locale,hour,meridiem){:var isPm;:if (meridiem==null){// nothing to do return hour}if (locale.meridiemHour!=null){return locale.meridiemHour(hour,meridiem)}else if (locale.isPM!=null){:// Fallback isPm=locale.isPM(meridiem);:if (isPm && hour < 12){hour +=12}if (!isPm && hour===12){hour=0}function configFromStringAndArray(config){:var tempConfig,bestMoment,scoreToBeat,i,currentScore;:if (config._f.length===0){getParsingFlags(config).invalidFormat=true;:config._d=new Date(NaN);:return}for (i=0;i < config._f.length;i++){,config);if (config._useUTC!=null){tempConfig._useUTC=config._useUTC}tempConfig._f=config._f[i];configFromStringAndFormat(tempConfig);if (!valid__isValid(tempConfig)){continue}// if there is any input that was not parsed add a penalty for that format currentScore +=getParsingFlags(tempConfig).charsLeftOver;//or tokens currentScore +=getParsingFlags(tempConfig).unusedTokens.length * 10;getParsingFlags(tempConfig).score=currentScore;if (scoreToBeat==null || currentScore < scoreToBeat){:scoreToBeat=currentScore;:bestMoment=tempConfig}function configFromObject(config){if (config._d){return}function createFromConfig (config){:var res=new Moment(checkOverflow(prepareConfig(config)));:if (res._nextDay){// Adding is smart enough around DST res.add(1,'d');:res._nextDay=undefined}function prepareConfig (config){:var input=config._i,format=config._f;:config._locale=config._locale || locale_locales__getLocale(config._l);if (input===null || (format===undefined && input==='')){return valid__createInvalid({nullInput:true}if (typeof input==='string'){config._i=input=config._locale.preparse(input)}if (isMoment(input)){return new Moment(checkOverflow(input))}else if (isArray(format)){configFromStringAndArray(config)}else if (format){configFromStringAndFormat(config)}function configFromInput(config){:var input=config._i;:if (input===undefined){config._d=new Date()}else if (typeof input==='string'){configFromString(config)}else if (isArray(input)){config._a=map(input.slice(0),function (obj){return parseInt(obj,10)}else if (typeof(input)==='object'){configFromObject(config)}else if (typeof(input)==='number'){// from milliseconds config._d=new Date(input)}format,function createLocalOrUTC (input,isUTC),locale,strict{;if (typeof(locale)==='boolean'){:strict=locale;:locale=undefined}format,function local__createLocal (input,locale,strict){return createLocalOrUTC(input,format,locale,strict,false)}function (),var prototypeMin=deprecate('moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548'{:var other=local__createLocal.apply(null,arguments);return other < this ? this:other});var prototypeMax=deprecate('moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548',function (){:var other=local__createLocal.apply(null,arguments);return other>this ? this:other});// Pick a moment m from moments so that m[fn](other) is true for all // other. This relies on the function fn to be transitive. // // moments should either be an array of moment objects or an array,moments),whose // first element is an array of moment objects. function pickBy(fn{:var res,i;:if (moments.length===1 && isArray(moments[0])){moments=moments[0]}if (!moments.length){return local__createLocal()}res=moments[0];for (i=1;i < moments.length;++i){if (!moments[i].isValid() || moments[i][fn](res)){res=moments[i]}// TODO:Use [].sort instead? function min (){:var args=[].slice.call(arguments,0);:return pickBy('isBefore',args)}function max (){:var args=[].slice.call(arguments,0);:return pickBy('isAfter',args)}function Duration (duration){function isDuration (obj){return obj instanceof Duration}function offset (token,separator){:addFormatToken(token,0,0,function (){var offset=this.utcOffset();:var sign='+';:if (offset < 0){offset=-offset;:sign='-'}'');// PARSING addRegexToken('Z',':');offset('ZZ','ZZ'],array,config),function (input,matchOffset);addParseToken(['Z',matchOffset);addRegexToken('ZZ',offset('Z'{:config._useUTC=true;:config._tzm=offsetFromString(input)});// HELPERS // timezone chunker // '+10:00'>['10','00'] // '-1530'>['-15','30'] var chunkOffset=/([\+\-]|\d\d)/gi;function offsetFromString(string){:var matches=((string || '').match(matchOffset) || []);:var chunk=matches[matches.length - 1] || [];:var parts=(chunk+'').match(chunkOffset) || ['-',0,0];:var minutes=+(parts[1] * 60)+toInt(parts[2]);return parts[0]==='+' ? minutes:-minutes}// Return a moment from input,model),that is local/utc/zone equivalent to model. function cloneWithOffset(input{diff=(isMoment(input) || isDate(input) ? +input:+local__createLocal(input)) - (+res);:// Use low-level api,because this fn is low-level api. res._d.setTime(+res._d+diff);:utils_hooks__hooks.updateOffset(res,false);:return res}function getDateOffset (m){// On Firefox.24 Date#getTimezoneOffset returns a floating point. // https://github.com/moment/moment/pull/1871 return -Math.round(m._d.getTimezoneOffset() / 15) * 15}function clone (){return new Moment(this)}function isAfter (input,units){units=normalizeUnits(typeof units!=='undefined' ? units:'millisecond');if (units==='millisecond'){input=isMoment(input) ? input:local__createLocal(input);:return +this>+input}function isBefore (input,units){units=normalizeUnits(typeof units!=='undefined' ? units:'millisecond');if (units==='millisecond'){input=isMoment(input) ? input:local__createLocal(input);:return +this < +input}else{inputMs=isMoment(input) ? +input:+local__createLocal(input)}function isBetween (from,to,units){return this.isAfter(from,units) && this.isBefore(to,units)}function isSame (input,units){if (units==='millisecond'){input=isMoment(input) ? input:local__createLocal(input);:return +this===+input}asFloat),function diff (input,units{:var that=cloneWithOffset(input,this),zoneDelta=(that.utcOffset() - this.utcOffset()) * 6e4,delta,output;:units=normalizeUnits(units);:if (units==='year' || units==='month' || units==='quarter'){output=monthDiff(this,that);:if (units==='quarter'){output=output / 3}else if (units==='year'){output=output / 12}else{output=units==='second' ? delta / 1e3:// 1000 units==='minute' ? delta / 6e4 :// 1000 * 60 units==='hour' ? delta / 36e5 :// 1000 * 60 * 60 units==='day' ? (delta - zoneDelta) / 864e5 :// 1000 * 60 * 60 * 24,negate dst units==='week' ? (delta - zoneDelta) / 6048e5 :// 1000 * 60 * 60 * 24 * 7,negate dst delta}b),function monthDiff (a{:// difference in months var wholeMonthDiff=((b.year() - a.year()) * 12)+(b.month() - a.month()),// b is in (anchor - 1 month,anchor+1 month) anchor=a.clone().add(wholeMonthDiff,'months'),anchor2,adjust;:if (b - anchor < 0){anchor2=a.clone().add(wholeMonthDiff - 1,'months');:// linear across the month adjust=(b - anchor) / (anchor - anchor2)}utils_hooks__hooks.defaultFormat='YYYY-MM-DDTHH:mm:ssZ';function toString (){return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ')}function moment_format__toISOString (){:var m=this.clone().utc();:if (0 < m.year() && m.year() <=9999){if ('function'===typeof Date.prototype.toISOString){// native implementation is ~50x faster,use it when we can return this.toDate().toISOString()}function format (inputString){:var output=formatMoment(this,inputString || utils_hooks__hooks.defaultFormat);:return this.localeData().postformat(output)}function from (time,withoutSuffix){if (!this.isValid()){return this.localeData().invalidDate()}return create__createDuration({to:this,from:time}function fromNow (withoutSuffix){return this.from(local__createLocal(),withoutSuffix)}function to (time,withoutSuffix){if (!this.isValid()){return this.localeData().invalidDate()}return create__createDuration({from:this,to:time}function toNow (withoutSuffix){return this.to(local__createLocal(),withoutSuffix)}function locale (key){:var newLocaleData;:if (key===undefined){return this._locale._abbr}function (key),var lang=deprecate('moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.'{if (key===undefined){return this.localeData()});function localeData (){return this._locale}function startOf (units){:units=normalizeUnits(units);// the following switch intentionally omits break keywords // to utilize falling through the cases. switch (units){case 'year':this.month(0);case 'quarter':case 'month':this.date(1);case 'week':case 'isoWeek':case 'day':this.hours(0);case 'hour':this.minutes(0);case 'minute':this.seconds(0);case 'second':this.milliseconds(0)}// weeks are a special case if (units==='week'){this.weekday(0)}if (units==='isoWeek'){this.isoWeekday(1)}// quarters are also special if (units==='quarter'){this.month(Math.floor(this.month() / 3) * 3)}function endOf (units){:units=normalizeUnits(units);:if (units===undefined || units==='millisecond'){return this}function to_type__valueOf (){return +this._d - ((this._offset || 0) * 60000)}function unix (){return Math.floor(+this / 1000)}function toDate (){return this._offset ? new Date(+this):this._d}function toArray (){:var m=this;:return [m.year(),m.month(),m.date(),m.hour(),m.minute(),m.second(),m.millisecond()]}function toObject (){:var m=this;return{years:m.year(),months:m.month(),date:m.date(),hours:m.hours(),minutes:m.minutes(),seconds:m.seconds(),milliseconds:m.milliseconds()}function moment_valid__isValid (){return valid__isValid(this)}function parsingFlags (){function invalidAt (){return getParsingFlags(this).overflow}0,2],['gg',addFormatToken(0,function (){return this.weekYear() % 100});addFormatToken(0,0,2],['GG',function (){return this.isoWeekYear() % 100});function addWeekYearFormatToken (token,getter){addFormatToken(0,[token,token.length],0,getter)}'gg');addUnitAlias('isoWeekYear','GG');// PARSING addRegexToken('G','weekYear');addWeekYearFormatToken('ggggg','weekYear');addWeekYearFormatToken('GGGG','ggggg','GGGG','isoWeekYear');// ALIASES addUnitAlias('weekYear','isoWeekYear');addWeekYearFormatToken('GGGGG','GGGGG'],addWeekYearFormatToken('gggg',config,function (input,match1to2,match1to4,match1to6,match2);addRegexToken('gg',match2);addRegexToken('GGGG',match4);addRegexToken('gggg',match4);addRegexToken('GGGGG',match6);addRegexToken('ggggg',match6);addWeekParseToken(['gggg',matchSigned);addRegexToken('GG',matchSigned);addRegexToken('g',token),week{week[token.substr(0,2)]=toInt(input)});addWeekParseToken(['gg','GG'],config,function (input,token),week{week[token]=utils_hooks__hooks.parseTwoDigitYear(input)});// HELPERS function weeksInYear(year,dow,doy){return weekOfYear(local__createLocal([year,11,31+dow - doy]),dow,doy).week}// MOMENTS function getSetWeekYear (input){:var year=weekOfYear(this,this.localeData()._week.dow,this.localeData()._week.doy).year;return input==null ? year:this.add((input - year),'y')}function getSetISOWeekYear (input){:var year=weekOfYear(this,1,4).year;return input==null ? year:this.add((input - year),'y')}function getISOWeeksInYear (){return weeksInYear(this.year(),1,4)}function getWeeksInYear (){:var weekInfo=this.localeData()._week;:return weeksInYear(this.year(),weekInfo.dow,weekInfo.doy)}0,'quarter');// ALIASES addUnitAlias('quarter','Q');// PARSING addRegexToken('Q',addFormatToken('Q',array),function (input,match1);addParseToken('Q'{array[MONTH]=(toInt(input) - 1) * 3});// MOMENTS function getSetQuarter (input){return input==null ? Math.ceil((this.month()+1) / 3):this.month((input - 1) * 3+this.month() % 3)}2],['DD','D');// PARSING addRegexToken('D','Do','date');// ALIASES addUnitAlias('date',addFormatToken('D',function (isStrict,locale),match1to2,match1to2);addRegexToken('DD',match2);addRegexToken('Do'{return isStrict ? locale._ordinalParse:locale._ordinalParseLenient});addParseToken(['D',DATE);addParseToken('Do','DD'],array),function (input{array[DATE]=toInt(input.match(match1to2)[0],10)});// MOMENTS var getSetDayOfMonth=makeGetSet('Date',0,'day');addFormatToken('dd','do',function (format),true);addFormatToken('d'{return this.localeData().weekdaysMin(this,format)});addFormatToken('ddd',0,function (format){return this.localeData().weekdaysShort(this,format)});addFormatToken('dddd',0,function (format){return this.localeData().weekdays(this,format)});addFormatToken('e',0,'d');addUnitAlias('weekday','ddd','dddd'],'e');addUnitAlias('isoWeekday','weekday');addFormatToken('E','E');// PARSING addRegexToken('d','isoWeekday');// ALIASES addUnitAlias('day',config),function (input,match1to2);addRegexToken('dd',match1to2);addRegexToken('e',match1to2);addRegexToken('E',matchWord);addRegexToken('ddd',matchWord);addRegexToken('dddd',matchWord);addWeekParseToken(['dd',week{:var weekday=config._locale.weekdaysParse(input);:// if we didn't get a weekday name, mark the date as invalid
        if (weekday != null) {
            week.d = weekday;
        } else {
            getParsingFlags(config).invalidWeekday = input;
        }
    });

    addWeekParseToken(['d', 'e', 'E'], function (input, week, config, token) {
        week[token] = toInt(input);
    });

    // HELPERS

    function parseWeekday(input, locale) {
        if (typeof input !== 'string') {
            return input;
        }

        if (!isNaN(input)) {
            return parseInt(input, 10);
        }

        input = locale.weekdaysParse(input);
        if (typeof input === 'number') {
            return input;
        }

        return null;
    }

    // LOCALES

    var defaultLocaleWeekdays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_');
    function localeWeekdays (m) {
        return this._weekdays[m.day()];
    }

    var defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_');
    function localeWeekdaysShort (m) {
        return this._weekdaysShort[m.day()];
    }

    var defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_');
    function localeWeekdaysMin (m) {
        return this._weekdaysMin[m.day()];
    }

    function localeWeekdaysParse (weekdayName) {
        var i, mom, regex;

        this._weekdaysParse = this._weekdaysParse || [];

        for (i = 0; i < 7; i++) {
            // make the regex if we don't have it already if (!this._weekdaysParse[i]){mom=local__createLocal([2000,1]).day(i);:regex='^'+this.weekdays(mom,'')+'|^'+this.weekdaysShort(mom,'')+'|^'+this.weekdaysMin(mom,'');:this._weekdaysParse[i]=new RegExp(regex.replace('.',''),'i')}// test the regex if (this._weekdaysParse[i].test(weekdayName)){return i}// MOMENTS function getSetDayOfWeek (input){var day=this._isUTC ? this._d.getUTCDay():this._d.getDay();:if (input!=null){input=parseWeekday(input,this.localeData());:return this.add(input - day,'d')}function getSetLocaleDayOfWeek (input){:var weekday=(this.day()+7 - this.localeData()._week.dow) % 7;return input==null ? weekday:this.add(input - weekday,'d')}function getSetISODayOfWeek (input){// behaves the same as moment#day except // as a getter,returns 7 instead of 0 (1-7 range instead of 0-6) // as a setter,sunday should belong to the previous week. return input==null ? this.day() || 7:this.day(this.day() % 7 ? input :input - 7)}0,2],['HH',['hh','hour');addFormatToken('h',addFormatToken('H',function (){return this.hours() % 12 || 12});function meridiem (token,lowercase){addFormatToken(token,0,0,function (){return this.localeData().meridiem(this.hours(),this.minutes(),lowercase)}'h');// PARSING function matchMeridiem (isStrict,false);// ALIASES addUnitAlias('hour',locale),meridiem('a',true);meridiem('A'{return locale._meridiemParse}HOUR);addParseToken(['a','HH'],'A'],addRegexToken('a',array,config),function (input,match1to2,match1to2);addRegexToken('HH',match1to2);addRegexToken('h',match2);addParseToken(['H',match2);addRegexToken('hh',matchMeridiem);addRegexToken('H',matchMeridiem);addRegexToken('A'{:config._isPm=config._locale.isPM(input);:config._meridiem=input});addParseToken(['h','hh'],array,config),function (input{:array[HOUR]=toInt(input);:getParsingFlags(config).bigHour=true});// LOCALES function localeIsPM (input){// IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays // Using charAt should be more compatible. return ((input+'').toLowerCase().charAt(0)==='p')}isLower),minutes,var defaultLocaleMeridiemParse=/[ap]\.?m?\.?/i;function localeMeridiem (hours{if (hours>11){return isLower ? 'pm':'PM'}else{return isLower ? 'am':'AM'}// MOMENTS // Setting the hour should keep the time,0,2],MINUTE);// MOMENTS var getSetMinute=makeGetSet('Minutes',SECOND);// MOMENTS var getSetSecond=makeGetSet('Seconds',['mm',['ss','s');// PARSING addRegexToken('s','second');// ALIASES addUnitAlias('second','minute');// ALIASES addUnitAlias('minute','m');// PARSING addRegexToken('m','mm'],'ss'],because the user explicitly // specified which hour he wants. So trying to maintain the same hour (in // a new timezone) makes sense. Adding/subtracting hours does not follow // this rule. var getSetHour=makeGetSet('Hours',false);addFormatToken('s',false);addFormatToken('S',function (),match1to2,match1to2);addRegexToken('mm',match1to2);addRegexToken('ss',match2);addParseToken(['s',match2);addParseToken(['m',true);addFormatToken('m'{return ~~(this.millisecond() / 100)});addFormatToken(0,0,2],['SS',function (){return ~~(this.millisecond() / 10)});addFormatToken(0,0,3],4],['SSS',['SSSS','millisecond');addFormatToken(0,function (){return this.millisecond() * 10});addFormatToken(0,0,5],['SSSSS',function (){return this.millisecond() * 100});addFormatToken(0,0,6],['SSSSSS',function (){return this.millisecond() * 1000});addFormatToken(0,0,7],['SSSSSSS',function (){return this.millisecond() * 10000});addFormatToken(0,0,8],['SSSSSSSS',function (){return this.millisecond() * 100000});addFormatToken(0,0,9],['SSSSSSSSS',function (){return this.millisecond() * 1000000});// ALIASES addUnitAlias('millisecond','ms');// PARSING addRegexToken('S',match1);addRegexToken('SS',match1to3,match2);addRegexToken('SSS',match3);var token;for (token='SSSS';token.length <=9;token +='S'){addRegexToken(token,matchUnsigned)}array),function parseMs(input{array[MILLISECOND]=toInt(('0.'+input) * 1000)}for (token='S';token.length <=9;token +='S'){addParseToken(token,parseMs)}// MOMENTS var getSetMillisecond=makeGetSet('Milliseconds',0,'zoneAbbr');addFormatToken('zz','zoneName');// MOMENTS function getZoneAbbr (),false);addFormatToken('z'{return this._isUTC ? 'UTC':''}function getZoneName (){return this._isUTC ? 'Coordinated Universal Time':''}getSetDayOfMonth);momentPrototype__proto.months=deprecate('months accessor is deprecated. Use month instead',getSetMonth);momentPrototype__proto.years=deprecate('years accessor is deprecated. Use year instead',getSetYear);momentPrototype__proto.zone=deprecate('moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779',getSetZone);var momentPrototype=momentPrototype__proto;function moment__createUnix (input),var momentPrototype__proto=Moment.prototype;momentPrototype__proto.add=add_subtract__add;momentPrototype__proto.calendar=moment_calendar__calendar;momentPrototype__proto.clone=clone;momentPrototype__proto.diff=diff;momentPrototype__proto.endOf=endOf;momentPrototype__proto.format=format;momentPrototype__proto.from=from;momentPrototype__proto.fromNow=fromNow;momentPrototype__proto.to=to;momentPrototype__proto.toNow=toNow;momentPrototype__proto.get=getSet;momentPrototype__proto.invalidAt=invalidAt;momentPrototype__proto.isAfter=isAfter;momentPrototype__proto.isBefore=isBefore;momentPrototype__proto.isBetween=isBetween;momentPrototype__proto.isSame=isSame;momentPrototype__proto.isValid=moment_valid__isValid;momentPrototype__proto.lang=lang;momentPrototype__proto.locale=locale;momentPrototype__proto.localeData=localeData;momentPrototype__proto.max=prototypeMax;momentPrototype__proto.min=prototypeMin;momentPrototype__proto.parsingFlags=parsingFlags;momentPrototype__proto.set=getSet;momentPrototype__proto.startOf=startOf;momentPrototype__proto.subtract=add_subtract__subtract;momentPrototype__proto.toArray=toArray;momentPrototype__proto.toObject=toObject;momentPrototype__proto.toDate=toDate;momentPrototype__proto.toISOString=moment_format__toISOString;momentPrototype__proto.toJSON=moment_format__toISOString;momentPrototype__proto.toString=toString;momentPrototype__proto.unix=unix;momentPrototype__proto.valueOf=to_type__valueOf;// Year momentPrototype__proto.year=getSetYear;momentPrototype__proto.isLeapYear=getIsLeapYear;// Week Year momentPrototype__proto.weekYear=getSetWeekYear;momentPrototype__proto.isoWeekYear=getSetISOWeekYear;// Quarter momentPrototype__proto.quarter=momentPrototype__proto.quarters=getSetQuarter;// Month momentPrototype__proto.month=getSetMonth;momentPrototype__proto.daysInMonth=getDaysInMonth;// Week momentPrototype__proto.week=momentPrototype__proto.weeks=getSetWeek;momentPrototype__proto.isoWeek=momentPrototype__proto.isoWeeks=getSetISOWeek;momentPrototype__proto.weeksInYear=getWeeksInYear;momentPrototype__proto.isoWeeksInYear=getISOWeeksInYear;// Day momentPrototype__proto.date=getSetDayOfMonth;momentPrototype__proto.day=momentPrototype__proto.days=getSetDayOfWeek;momentPrototype__proto.weekday=getSetLocaleDayOfWeek;momentPrototype__proto.isoWeekday=getSetISODayOfWeek;momentPrototype__proto.dayOfYear=getSetDayOfYear;// Hour momentPrototype__proto.hour=momentPrototype__proto.hours=getSetHour;// Minute momentPrototype__proto.minute=momentPrototype__proto.minutes=getSetMinute;// Second momentPrototype__proto.second=momentPrototype__proto.seconds=getSetSecond;// Millisecond momentPrototype__proto.millisecond=momentPrototype__proto.milliseconds=getSetMillisecond;// Offset momentPrototype__proto.utcOffset=getSetOffset;momentPrototype__proto.utc=setOffsetToUTC;momentPrototype__proto.local=setOffsetToLocal;momentPrototype__proto.parseZone=setOffsetToParsedOffset;momentPrototype__proto.hasAlignedHourOffset=hasAlignedHourOffset;momentPrototype__proto.isDST=isDaylightSavingTime;momentPrototype__proto.isDSTShifted=isDaylightSavingTimeShifted;momentPrototype__proto.isLocal=isLocal;momentPrototype__proto.isUtcOffset=isUtcOffset;momentPrototype__proto.isUtc=isUtc;momentPrototype__proto.isUTC=isUtc;// Timezone momentPrototype__proto.zoneAbbr=getZoneAbbr;momentPrototype__proto.zoneName=getZoneName;// Deprecations momentPrototype__proto.dates=deprecate('dates accessor is deprecated. Use date instead.'{return local__createLocal(input * 1000)}function moment__createInZone (){return local__createLocal.apply(null,arguments).parseZone()}var defaultCalendar={sameDay:'[Today at] LT',nextDay :'[Tomorrow at] LT',nextWeek :'dddd [at] LT',lastDay :'[Yesterday at] LT',lastWeek :'[Last] dddd [at] LT',sameElse :'L'};function locale_calendar__calendar (key,mom,now){:var output=this._calendar[key];return typeof output==='function' ? output.call(mom,now):output}var defaultLongDateFormat={LTS:'h:mm:ss A',LT :'h:mm A',L :'MM/DD/YYYY',LL :'MMMM D, YYYY',LLL :'MMMM D, YYYY h:mm A',LLLL :'dddd, MMMM D, YYYY h:mm A'};function longDateFormat (key){:var format=this._longDateFormat[key],formatUpper=this._longDateFormat[key.toUpperCase()];:if (format ||!formatUpper){return format}function (val),this._longDateFormat[key]=formatUpper.replace(/MMMM|MM|DD|dddd/g{return val.slice(1)}var defaultInvalidDate='Invalid date';function invalidDate (){return this._invalidDate}var defaultOrdinal='%d';var defaultOrdinalParse=/\d{1,2}/;function ordinal (number){return this._ordinal.replace('%d',number)}function preParsePostFormat (string){return string}var defaultRelativeTime={future:'in %s',past :'%s ago',s :'a few seconds',m :'a minute',mm :'%d minutes',h :'an hour',hh :'%d hours',d :'a day',dd :'%d days',M :'a month',MM :'%d months',y :'a year',yy :'%d years'};function relative__relativeTime (number,isFuture),string,withoutSuffix{:var output=this._relativeTime[string];return (typeof output==='function') ? output(number,withoutSuffix,string,isFuture):output.replace(/%d/i,number)}function pastFuture (diff,output){var format=this._relativeTime[diff>0 ? 'future':'past'];return typeof format==='function' ? format(output):format.replace(/%s/i,output)}function locale_set__set (config){:var prop,i;:for (i in config){prop=config[i];:if (typeof prop==='function'){this[i]=prop}// Lenient ordinal parsing accepts just a number in addition to // number+(possibly) stuff coming from _ordinalParseLenient. this._ordinalParseLenient=new RegExp(this._ordinalParse.source+'|'+(/\d{1,2}field,index,setter),var prototype__proto=Locale.prototype;prototype__proto._calendar=defaultCalendar;prototype__proto.calendar=locale_calendar__calendar;prototype__proto._longDateFormat=defaultLongDateFormat;prototype__proto.longDateFormat=longDateFormat;prototype__proto._invalidDate=defaultInvalidDate;prototype__proto.invalidDate=invalidDate;prototype__proto._ordinal=defaultOrdinal;prototype__proto.ordinal=ordinal;prototype__proto._ordinalParse=defaultOrdinalParse;prototype__proto.preparse=preParsePostFormat;prototype__proto.postformat=preParsePostFormat;prototype__proto._relativeTime=defaultRelativeTime;prototype__proto.relativeTime=relative__relativeTime;prototype__proto.pastFuture=pastFuture;prototype__proto.set=locale_set__set;// Month prototype__proto.months=localeMonths;prototype__proto._months=defaultLocaleMonths;prototype__proto.monthsShort=localeMonthsShort;prototype__proto._monthsShort=defaultLocaleMonthsShort;prototype__proto.monthsParse=localeMonthsParse;// Week prototype__proto.week=localeWeek;prototype__proto._week=defaultLocaleWeek;prototype__proto.firstDayOfYear=localeFirstDayOfYear;prototype__proto.firstDayOfWeek=localeFirstDayOfWeek;// Day of Week prototype__proto.weekdays=localeWeekdays;prototype__proto._weekdays=defaultLocaleWeekdays;prototype__proto.weekdaysMin=localeWeekdaysMin;prototype__proto._weekdaysMin=defaultLocaleWeekdaysMin;prototype__proto.weekdaysShort=localeWeekdaysShort;prototype__proto._weekdaysShort=defaultLocaleWeekdaysShort;prototype__proto.weekdaysParse=localeWeekdaysParse;// Hours prototype__proto.isPM=localeIsPM;prototype__proto._meridiemParse=defaultLocaleMeridiemParse;prototype__proto.meridiem=localeMeridiem;function lists__get (format{:var locale=locale_locales__getLocale();:var utc=create_utc__createUTC().set(setter,index);:return locale[field](utc,format)}count,field,function list (format,index,setter){:if (typeof format==='number'){index=format;:format=undefined}format=format || '';if (index!=null){return lists__get(format,index,field,setter)}var i;var out=[];for (i=0;i < count;i++){out[i]=lists__get(format,i,field,setter)}function lists__listMonths (format,index){return list(format,index,'months',12,'month')}function lists__listMonthsShort (format,index){return list(format,index,'monthsShort',12,'month')}function lists__listWeekdays (format,index){return list(format,index,'weekdays',7,'day')}function lists__listWeekdaysShort (format,index){return list(format,index,'weekdaysShort',7,'day')}function lists__listWeekdaysMin (format,index){return list(format,index,'weekdaysMin',7,'day')},locale_locales__getSetGlobalLocale('en'{ordinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal :function (number){var b=number % 10,output=(toInt(number % 100 / 10)===1) ? 'th':(b===1) ? 'st' :(b===2) ? 'nd' :(b===3) ? 'rd' :'th';:return number+output});// Side effect imports utils_hooks__hooks.lang=deprecate('moment.lang is deprecated. Use moment.locale instead.',locale_locales__getLocale);var mathAbs=Math.abs;function duration_abs__abs (),locale_locales__getSetGlobalLocale);utils_hooks__hooks.langData=deprecate('moment.langData is deprecated. Use moment.localeData instead.'{:var data=this._data;:this._milliseconds=mathAbs(this._milliseconds);:this._days=mathAbs(this._days);:this._months=mathAbs(this._months);:data.milliseconds=mathAbs(data.milliseconds);:data.seconds=mathAbs(data.seconds);:data.minutes=mathAbs(data.minutes);:data.hours=mathAbs(data.hours);:data.months=mathAbs(data.months);:data.years=mathAbs(data.years);:return this}direction),function duration_add_subtract__addSubtract (duration,input,value{:var other=create__createDuration(input,value);:duration._milliseconds +=direction * other._milliseconds;:duration._days +=direction * other._days;:duration._months +=direction * other._months;:return duration._bubble()}// supports only 2-style add(1,'s') or add(duration) function duration_add_subtract__add (input,value){return duration_add_subtract__addSubtract(this,input,value,1)}// supports only 2-style subtract(1,'s') or subtract(duration) function duration_add_subtract__subtract (input,value){return duration_add_subtract__addSubtract(this,input,value,-1)}function absCeil (number){if (number < 0){return Math.floor(number)}function bubble (){// if we have a mix of positive and negative values,bubble down first // check:https://github.com/moment/moment/issues/2166 if (!((milliseconds >=0 && days >=0 && months >=0) || (milliseconds <=0 && days <=0 && months <=0))){milliseconds +=absCeil(monthsToDays(months)+days) * 864e5;:days=0;:months=0}function daysToMonths (days){// 400 years have 146097 days (taking into account leap year rules) // 400 years have 12 months===4800 return days * 4800 / 146097}function monthsToDays (months){// the reverse of daysToMonths return months * 146097 / 4800}function as (units){:var days;:var months;:var milliseconds=this._milliseconds;:units=normalizeUnits(units);:if (units==='month' || units==='year'){days=this._days+milliseconds / 864e5;:months=this._months+daysToMonths(days);return units==='month' ? months:months / 12}else{switch (units){case 'week':return days / 7+milliseconds / 6048e5;case 'day':return days+milliseconds / 864e5;case 'hour':return days * 24+milliseconds / 36e5;case 'minute':return days * 1440+milliseconds / 6e4;case 'second':return days * 86400+milliseconds / 1000;// Math.floor prevents floating point math errors here case 'millisecond':return Math.floor(days * 864e5)+milliseconds;default:throw new Error('Unknown unit '+units)}// TODO:Use this.as('ms')? function duration_as__valueOf (){return (this._milliseconds+this._days * 864e5+(this._months % 12) * 2592e6+toInt(this._months / 12) * 31536e6)}function makeAs (alias){return function (){return this.as(alias)}var asMilliseconds=makeAs('ms');var asSeconds=makeAs('s');var asMinutes=makeAs('m');var asHours=makeAs('h');var asDays=makeAs('d');var asWeeks=makeAs('w');var asMonths=makeAs('M');var asYears=makeAs('y');function duration_get__get (units){:units=normalizeUnits(units);:return this[units+'s']()}function makeGetter(name){return function (){return this._data[name]}var milliseconds=makeGetter('milliseconds');var seconds=makeGetter('seconds');var minutes=makeGetter('minutes');var hours=makeGetter('hours');var days=makeGetter('days');var months=makeGetter('months');var years=makeGetter('years');function weeks (){return absFloor(this.days() / 7)}var round=Math.round;var thresholds={s:45,// seconds to minute m:45,// minutes to hour h:22,// hours to day d:26,// days to month M:11 // months to year};// helper function for moment.fn.from,and moment.duration.fn.humanize function substituteTimeAgo(string,isFuture,locale),moment.fn.fromNow,number,withoutSuffix{return locale.relativeTime(number || 1,!!withoutSuffix,string,isFuture)}function duration_humanize__relativeTime (posNegDuration,locale),withoutSuffix{:var duration=create__createDuration(posNegDuration).abs();:var seconds=round(duration.as('s'));:var minutes=round(duration.as('m'));:var hours=round(duration.as('h'));:var days=round(duration.as('d'));:var months=round(duration.as('M'));:var years=round(duration.as('y'));:var a=seconds < thresholds.s && ['s',seconds] || minutes===1 && ['m'] || minutes < thresholds.m && ['mm',minutes] || hours===1 && ['h'] || hours < thresholds.h && ['hh',hours] || days===1 && ['d'] || days < thresholds.d && ['dd',days] || months===1 && ['M'] || months < thresholds.M && ['MM',months] || years===1 && ['y'] || ['yy',years];:a[2]=withoutSuffix;:a[3]=+posNegDuration>0;:a[4]=locale;:return substituteTimeAgo.apply(null,a)}// This function allows you to set a threshold for relative time strings function duration_humanize__getSetRelativeTimeThreshold (threshold,limit){if (thresholds[threshold]===undefined){return false}if (limit===undefined){return thresholds[threshold]}function humanize (withSuffix){:var locale=this.localeData();:var output=duration_humanize__relativeTime(this,!withSuffix,locale);:if (withSuffix){output=locale.pastFuture(+this,output)}var iso_string__abs=Math.abs;function iso_string__toISOString(){// for ISO strings we do not use the normal bubbling rules:// * milliseconds bubble up until they become hours // * days do not bubble at all // * months bubble up until they become years // This is because there is no context-free conversion between hours and days // (think of clock changes) // and also not between days and months (28-31 days per month) var seconds=iso_string__abs(this._milliseconds) / 1000;// inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js var Y=years;if (!total){// this is the same as C#'s (Noda) and python (isodate)...
            // but not other JS (goog.date)
            return 'P0D';
        }

        return (total < 0 ? '-' : '') +
            'P' +
            (Y ? Y + 'Y' : '') +
            (M ? M + 'M' : '') +
            (D ? D + 'D' : '') +
            ((h || m || s) ? 'T' : '') +
            (h ? h + 'H' : '') +
            (m ? m + 'M' : '') +
            (s ? s + 'S' : '');
    }

    var duration_prototype__proto = Duration.prototype;

    duration_prototype__proto.abs            = duration_abs__abs;
    duration_prototype__proto.add            = duration_add_subtract__add;
    duration_prototype__proto.subtract       = duration_add_subtract__subtract;
    duration_prototype__proto.as             = as;
    duration_prototype__proto.asMilliseconds = asMilliseconds;
    duration_prototype__proto.asSeconds      = asSeconds;
    duration_prototype__proto.asMinutes      = asMinutes;
    duration_prototype__proto.asHours        = asHours;
    duration_prototype__proto.asDays         = asDays;
    duration_prototype__proto.asWeeks        = asWeeks;
    duration_prototype__proto.asMonths       = asMonths;
    duration_prototype__proto.asYears        = asYears;
    duration_prototype__proto.valueOf        = duration_as__valueOf;
    duration_prototype__proto._bubble        = bubble;
    duration_prototype__proto.get            = duration_get__get;
    duration_prototype__proto.milliseconds   = milliseconds;
    duration_prototype__proto.seconds        = seconds;
    duration_prototype__proto.minutes        = minutes;
    duration_prototype__proto.hours          = hours;
    duration_prototype__proto.days           = days;
    duration_prototype__proto.weeks          = weeks;
    duration_prototype__proto.months         = months;
    duration_prototype__proto.years          = years;
    duration_prototype__proto.humanize       = humanize;
    duration_prototype__proto.toISOString    = iso_string__toISOString;
    duration_prototype__proto.toString       = iso_string__toISOString;
    duration_prototype__proto.toJSON         = iso_string__toISOString;
    duration_prototype__proto.locale         = locale;
    duration_prototype__proto.localeData     = localeData;

    // Deprecations
    duration_prototype__proto.toIsoString = deprecate('toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)', iso_string__toISOString);
    duration_prototype__proto.lang = lang;

    // Side effect imports

    addFormatToken('X', 0, 0, 'unix');
    addFormatToken('x', 0, 0, 'valueOf');

    // PARSING

    addRegexToken('x', matchSigned);
    addRegexToken('X', matchTimestamp);
    addParseToken('X', function (input, array, config) {
        config._d = new Date(parseFloat(input, 10) * 1000);
    });
    addParseToken('x', function (input, array, config) {
        config._d = new Date(toInt(input));
    });

    // Side effect imports


    utils_hooks__hooks.version = '2.1.6';

    setHookCallback(local__createLocal);

    utils_hooks__hooks.fn                    = momentPrototype;
    utils_hooks__hooks.min                   = min;
    utils_hooks__hooks.max                   = max;
    utils_hooks__hooks.utc                   = create_utc__createUTC;
    utils_hooks__hooks.unix                  = moment__createUnix;
    utils_hooks__hooks.months                = lists__listMonths;
    utils_hooks__hooks.isDate                = isDate;
    utils_hooks__hooks.locale                = locale_locales__getSetGlobalLocale;
    utils_hooks__hooks.invalid               = valid__createInvalid;
    utils_hooks__hooks.duration              = create__createDuration;
    utils_hooks__hooks.isMoment              = isMoment;
    utils_hooks__hooks.weekdays              = lists__listWeekdays;
    utils_hooks__hooks.parseZone             = moment__createInZone;
    utils_hooks__hooks.localeData            = locale_locales__getLocale;
    utils_hooks__hooks.isDuration            = isDuration;
    utils_hooks__hooks.monthsShort           = lists__listMonthsShort;
    utils_hooks__hooks.weekdaysMin           = lists__listWeekdaysMin;
    utils_hooks__hooks.defineLocale          = defineLocale;
    utils_hooks__hooks.weekdaysShort         = lists__listWeekdaysShort;
    utils_hooks__hooks.normalizeUnits        = normalizeUnits;
    utils_hooks__hooks.relativeTimeThreshold = duration_humanize__getSetRelativeTimeThreshold;

    var _moment = utils_hooks__hooks;

    return _moment;

}));

! function(t, a) {
    if ("function" == typeof define && define.amd) define(["moment", "jquery"], function(t, e) {), a(t, e)
    });
    else if ("object" == typeof module && module.exports) {);
        var i = "undefined" != typeof window && void 0 !== window.moment ? window.moment : require("moment");
        module.exports = a(i, e)
    } else t.daterangepicker = a(t.moment, t.jQuery)
}(this, function(H, R) {
    var i = function(t, e, a) {, this.opens = "right", this.element.hasClass("pull-right") && (this.opens = "left"), this.drops = "down", this.element.hasClass("dropup") && (this.drops = "up"), this.buttonClasses = "btn btn-sm", this.applyButtonClasses = "btn-cal", this.cancelButtonClasses = "btn-default", this.locale = {
                direction: "ltr",
                format: H.localeData().longDateFormat("L"),
                separator: " - ",
                applyLabel: "Apply",
                cancelLabel: "Cancel",
                weekLabel: "W",
                customRangeLabel: "Custom Range",
                daysOfWeek: H.weekdaysMin(),
                monthNames: H.monthsShort(),
                firstDay: H.localeData().firstDayOfWeek()
            }), "string" == typeof(e = R.extend(this.element.data(), e)).template || e.template instanceof R || (e.template = '<div class="daterangepicker"><div class="ranges"></div><div class="drp-calendar left"><div class="calendar-table"></div><div class="calendar-time"></div></div><div class="drp-calendar right"><div class="calendar-table"></div><div class="calendar-time"></div></div><div class="drp-buttons"><span class="drp-selected"></span><button class="cancelBtn" type="button"></button><button class="applyBtn" disabled="disabled" type="button"></button> </div></div>'), this.parentEl = e.parentEl && R(e.parentEl).length ? R(e.parentEl) : R(this.parentEl), this.container = R(e.template).appendTo(this.parentEl), "object" == typeof e.locale && ("string" == typeof e.locale.direction && (this.locale.direction = e.locale.direction), "string" == typeof e.locale.format && (this.locale.format = e.locale.format), "string" == typeof e.locale.separator && (this.locale.separator = e.locale.separator), "object" == typeof e.locale.daysOfWeek && (this.locale.daysOfWeek = e.locale.daysOfWeek.slice()), "object" == typeof e.locale.monthNames && (this.locale.monthNames = e.locale.monthNames.slice()), "number" == typeof e.locale.firstDay && (this.locale.firstDay = e.locale.firstDay), "string" == typeof e.locale.applyLabel && (this.locale.applyLabel = e.locale.applyLabel), "string" == typeof e.locale.cancelLabel && (this.locale.cancelLabel = e.locale.cancelLabel), "string" == typeof e.locale.weekLabel && (this.locale.weekLabel = e.locale.weekLabel), "string" == typeof e.locale.customRangeLabel)) {
            (d = document.createElement("textarea")).innerHTML = e.locale.customRangeLabel;
            var i = d.value;
            this.locale.customRangeLabel = i
        }
        if (this.container.addClass(this.locale.direction), "string" == typeof e.startDate && (this.startDate = H(e.startDate, this.locale.format)), "string" == typeof e.endDate && (this.endDate = H(e.endDate, this.locale.format)), "string" == typeof e.minDate && (this.minDate = H(e.minDate, this.locale.format)), "string" == typeof e.maxDate && (this.maxDate = H(e.maxDate, this.locale.format)), "object" == typeof e.startDate && (this.startDate = H(e.startDate)), "object" == typeof e.endDate && (this.endDate = H(e.endDate)), "object" == typeof e.minDate && (this.minDate = H(e.minDate)), "object" == typeof e.maxDate && (this.maxDate = H(e.maxDate)), this.minDate && this.startDate.isBefore(this.minDate) && (this.startDate = this.minDate.clone()), this.maxDate && this.endDate.isAfter(this.maxDate) && (this.endDate = this.maxDate.clone()), "string" == typeof e.applyButtonClasses && (this.applyButtonClasses = e.applyButtonClasses), "string" == typeof e.applyClass && (this.applyButtonClasses = e.applyClass), "string" == typeof e.cancelButtonClasses && (this.cancelButtonClasses = e.cancelButtonClasses), "string" == typeof e.cancelClass && (this.cancelButtonClasses = e.cancelClass), "object" == typeof e.maxSpan && (this.maxSpan = e.maxSpan), "object" == typeof e.dateLimit && (this.maxSpan = e.dateLimit), "string" == typeof e.opens && (this.opens = e.opens), "string" == typeof e.drops && (this.drops = e.drops), "boolean" == typeof e.showWeekNumbers && (this.showWeekNumbers = e.showWeekNumbers), "boolean" == typeof e.showISOWeekNumbers && (this.showISOWeekNumbers = e.showISOWeekNumbers), "string" == typeof e.buttonClasses && (this.buttonClasses = e.buttonClasses), "object" == typeof e.buttonClasses && (this.buttonClasses = e.buttonClasses.join(" ")), "boolean" == typeof e.showDropdowns && (this.showDropdowns = e.showDropdowns), "number" == typeof e.minYear && (this.minYear = e.minYear), "number" == typeof e.maxYear && (this.maxYear = e.maxYear), "boolean" == typeof e.showCustomRangeLabel && (this.showCustomRangeLabel = e.showCustomRangeLabel), "boolean" == typeof e.singleDatePicker && (this.singleDatePicker = e.singleDatePicker, this.singleDatePicker && (this.endDate = this.startDate.clone())), "boolean" == typeof e.timePicker && (this.timePicker = e.timePicker), "boolean" == typeof e.timePickerSeconds && (this.timePickerSeconds = e.timePickerSeconds), "number" == typeof e.timePickerIncrement && (this.timePickerIncrement = e.timePickerIncrement), "boolean" == typeof e.timePicker24Hour && (this.timePicker24Hour = e.timePicker24Hour), "boolean" == typeof e.autoApply && (this.autoApply = e.autoApply), "boolean" == typeof e.autoUpdateInput && (this.autoUpdateInput = e.autoUpdateInput), "boolean" == typeof e.linkedCalendars && (this.linkedCalendars = e.linkedCalendars), "function" == typeof e.isInvalidDate && (this.isInvalidDate = e.isInvalidDate), "function" == typeof e.isCustomDate && (this.isCustomDate = e.isCustomDate), "boolean" == typeof e.alwaysShowCalendars && (this.alwaysShowCalendars = e.alwaysShowCalendars), 0 != this.locale.firstDay)
            for (var s = this.locale.firstDay; 0 < s;) this.locale.daysOfWeek.push(this.locale.daysOfWeek.shift()), s--;
        var n, r, o;
        if (void 0 === e.startDate && void 0 === e.endDate && R(this.element).is(":text")) {
            var h = R(this.element).val(),
                l = h.split(this.locale.separator);
            n = r = null, 2 == l.length ? (n = H(l[0], this.locale.format), r = H(l[1], this.locale.format)) : this.singleDatePicker && "" !== h && (n = H(h, this.locale.format), r = H(h, this.locale.format)), null !== n && null !== r && (this.setStartDate(n), this.setEndDate(r))
        }
        if ("object" == typeof e.ranges) {
            for (o in e.ranges) {
                n = "string" == typeof e.ranges[o][0] ? H(e.ranges[o][0], this.locale.format) : H(e.ranges[o][0]), r = "string" == typeof e.ranges[o][1] ? H(e.ranges[o][1], this.locale.format) : H(e.ranges[o][1]), this.minDate && n.isBefore(this.minDate) && (n = this.minDate.clone());
                var c = this.maxDate;
                if (this.maxSpan && c && n.clone().add(this.maxSpan).isAfter(c) && (c = n.clone().add(this.maxSpan)), c && r.isAfter(c) && (r = c.clone()), !(this.minDate && r.isBefore(this.minDate, this.timepicker ? "minute" : "day") || c && n.isAfter(c, this.timepicker ? "minute" : "day"))) {
                    var d;
                    (d = document.createElement("textarea")).innerHTML = o;
                    i = d.value;
                    this.ranges[i] = [n, r]
                }
            }
            var m = "<ul>";
            for (o in this.ranges) m += '<li data-range-key="' + o + '">' + o + "</li>";
            this.showCustomRangeLabel && (m += '<li data-range-key="' + this.locale.customRangeLabel + '">' + this.locale.customRangeLabel + "</li>"), m += "</ul>", this.container.find(".ranges").prepend(m)
        }
        "function" == typeof a && (this.callback = a), this.timePicker || (this.startDate = this.startDate.startOf("day"), this.endDate = this.endDate.endOf("day"), this.container.find(".calendar-time").hide()), this.timePicker && this.autoApply && (this.autoApply = !1), this.autoApply && this.container.addClass("auto-apply"), "object" == typeof e.ranges && this.container.addClass("show-ranges"), this.singleDatePicker && (this.container.addClass("single"), this.container.find(".drp-calendar.left").addClass("single"), this.container.find(".drp-calendar.left").show(), this.container.find(".drp-calendar.right").hide(), this.timePicker || this.container.addClass("auto-apply")), (void 0 === e.ranges && !this.singleDatePicker || this.alwaysShowCalendars) && this.container.addClass("show-calendar"), this.container.addClass("opens" + this.opens), this.container.find(".applyBtn, .cancelBtn").addClass(this.buttonClasses), this.applyButtonClasses.length && this.container.find(".applyBtn").addClass(this.applyButtonClasses), this.cancelButtonClasses.length && this.container.find(".cancelBtn").addClass(this.cancelButtonClasses), this.container.find(".applyBtn").html(this.locale.applyLabel), this.container.find(".cancelBtn").html(this.locale.cancelLabel), this.container.find(".drp-calendar").on("click.daterangepicker", ".prev", R.proxy(this.clickPrev, this)).on("click.daterangepicker", ".next", R.proxy(this.clickNext, this)).on("mousedown.daterangepicker", "td.available", R.proxy(this.clickDate, this)).on("mouseenter.daterangepicker", "td.available", R.proxy(this.hoverDate, this)).on("change.daterangepicker", "select.yearselect", R.proxy(this.monthOrYearChanged, this)).on("change.daterangepicker", "select.monthselect", R.proxy(this.monthOrYearChanged, this)).on("change.daterangepicker", "select.hourselect,select.minuteselect,select.secondselect,select.ampmselect", R.proxy(this.timeChanged, this)), this.container.find(".ranges").on("click.daterangepicker", "li", R.proxy(this.clickRange, this)), this.container.find(".drp-buttons").on("click.daterangepicker", "button.applyBtn", R.proxy(this.clickApply, this)).on("click.daterangepicker", "button.cancelBtn", R.proxy(this.clickCancel, this)), this.element.is("input") || this.element.is("button") ? this.element.on({
            "click.daterangepicker": R.proxy(this.show, this),
            "focus.daterangepicker": R.proxy(this.show, this),
            "keyup.daterangepicker": R.proxy(this.elementChanged, this),
            "keydown.daterangepicker": R.proxy(this.keydown, this)
        }) : (this.element.on("click.daterangepicker", R.proxy(this.toggle, this)), this.element.on("keydown.daterangepicker", R.proxy(this.toggle, this))), this.updateElement()
    };
    return i.prototype = {
        constructor: i,
        setStartDate: function(t) {
            "string" == typeof t && (this.startDate = H(t, this.locale.format)), "object" == typeof t && (this.startDate = H(t)), this.timePicker || (this.startDate = this.startDate.startOf("day")), this.timePicker && this.timePickerIncrement && this.startDate.minute(Math.round(this.startDate.minute() / this.timePickerIncrement) * this.timePickerIncrement), this.minDate && this.startDate.isBefore(this.minDate) && (this.startDate = this.minDate.clone(), this.timePicker && this.timePickerIncrement && this.startDate.minute(Math.round(this.startDate.minute() / this.timePickerIncrement) * this.timePickerIncrement)), this.maxDate && this.startDate.isAfter(this.maxDate) && (this.startDate = this.maxDate.clone(), this.timePicker && this.timePickerIncrement && this.startDate.minute(Math.floor(this.startDate.minute() / this.timePickerIncrement) * this.timePickerIncrement)), this.isShowing || this.updateElement(), this.updateMonthsInView()
        },
        setEndDate: function(t) {
            "string" == typeof t && (this.endDate = H(t, this.locale.format)), "object" == typeof t && (this.endDate = H(t)), this.timePicker || (this.endDate = this.endDate.add(1, "d").startOf("day").subtract(1, "second")), this.timePicker && this.timePickerIncrement && this.endDate.minute(Math.round(this.endDate.minute() / this.timePickerIncrement) * this.timePickerIncrement), this.endDate.isBefore(this.startDate) && (this.endDate = this.startDate.clone()), this.maxDate && this.endDate.isAfter(this.maxDate) && (this.endDate = this.maxDate.clone()), this.maxSpan && this.startDate.clone().add(this.maxSpan).isBefore(this.endDate) && (this.endDate = this.startDate.clone().add(this.maxSpan)), this.previousRightTime = this.endDate.clone(), this.container.find(".drp-selected").html(this.startDate.format(this.locale.format) + this.locale.separator + this.endDate.format(this.locale.format)), this.isShowing || this.updateElement(), this.updateMonthsInView()
        },
        isInvalidDate: function() {
            return !1
        },
        isCustomDate: function() {
            return !1
        },
        updateView: function() {
            this.timePicker && (this.renderTimePicker("left"), this.renderTimePicker("right"), this.endDate ? this.container.find(".right .calendar-time select").removeAttr("disabled").removeClass("disabled") : this.container.find(".right .calendar-time select").attr("disabled", "disabled").addClass("disabled")), this.endDate && this.container.find(".drp-selected").html(this.startDate.format(this.locale.format) + this.locale.separator + this.endDate.format(this.locale.format)), this.updateMonthsInView(), this.updateCalendars(), this.updateFormInputs()
        },
        updateMonthsInView: function() {
            if (this.endDate) {
                if (!this.singleDatePicker && this.leftCalendar.month && this.rightCalendar.month && (this.startDate.format("YYYY-MM") == this.leftCalendar.month.format("YYYY-MM") || this.startDate.format("YYYY-MM") == this.rightCalendar.month.format("YYYY-MM")) && (this.endDate.format("YYYY-MM") == this.leftCalendar.month.format("YYYY-MM") || this.endDate.format("YYYY-MM") == this.rightCalendar.month.format("YYYY-MM"))) return;
                this.leftCalendar.month = this.startDate.clone().date(2), this.linkedCalendars || this.endDate.month() == this.startDate.month() && this.endDate.year() == this.startDate.year() ? this.rightCalendar.month = this.startDate.clone().date(2).add(1, "month") : this.rightCalendar.month = this.endDate.clone().date(2)
            } else this.leftCalendar.month.format("YYYY-MM") != this.startDate.format("YYYY-MM") && this.rightCalendar.month.format("YYYY-MM") != this.startDate.format("YYYY-MM") && (this.leftCalendar.month = this.startDate.clone().date(2), this.rightCalendar.month = this.startDate.clone().date(2).add(1, "month"));
            this.maxDate && this.linkedCalendars && !this.singleDatePicker && this.rightCalendar.month > this.maxDate && (this.rightCalendar.month = this.maxDate.clone().date(2), this.leftCalendar.month = this.maxDate.clone().date(2).subtract(1, "month"))
        },
        updateCalendars: function() {
            if (this.timePicker) {
                var t, e, a, i;
                if (this.endDate) {
                    if (t = parseInt(this.container.find(".left .hourselect").val(), 10), e = parseInt(this.container.find(".left .minuteselect").val(), 10), a = this.timePickerSeconds ? parseInt(this.container.find(".left .secondselect").val(), 10) : 0, !this.timePicker24Hour) "PM" === (i = this.container.find(".left .ampmselect").val()) && t < 12 && (t += 12), "AM" === i && 12 === t && (t = 0)
                } else if (t = parseInt(this.container.find(".right .hourselect").val(), 10), e = parseInt(this.container.find(".right .minuteselect").val(), 10), a = this.timePickerSeconds ? parseInt(this.container.find(".right .secondselect").val(), 10) : 0, !this.timePicker24Hour) "PM" === (i = this.container.find(".right .ampmselect").val()) && t < 12 && (t += 12), "AM" === i && 12 === t && (t = 0);
                this.leftCalendar.month.hour(t).minute(e).second(a), this.rightCalendar.month.hour(t).minute(e).second(a)
            }
            this.renderCalendar("left"), this.renderCalendar("right"), this.container.find(".ranges li").removeClass("active"), null != this.endDate && this.calculateChosenLabel()
        },
        renderCalendar: function(t) {
            var e, a = (e = "left" == t ? this.leftCalendar : this.rightCalendar).month.month(),
                i = e.month.year(),
                s = e.month.hour(),
                n = e.month.minute(),
                r = e.month.second(),
                o = H([i, a]).daysInMonth(),
                h = H([i, a, 1]),
                l = H([i, a, o]),
                c = H(h).subtract(1, "month").month(),
                d = H(h).subtract(1, "month").year(),
                m = H([d, c]).daysInMonth(),
                f = h.day();
            (e = []).firstDay = h, e.lastDay = l;
            for (var p = 0; p < 6; p++) e[p] = [];
            var u = m - f + this.locale.firstDay + 1;
            m < u && (u -= 7), f == this.locale.firstDay && (u = m - 6);
            for (var D = H([d, c, u, 12, n, r]), g = (p = 0, 0), y = 0; p < 42; p++, g++, D = H(D).add(24, "hour")) 0 < p && g % 7 == 0 && (g = 0, y++), e[y][g] = D.clone().hour(s).minute(n).second(r), D.hour(12), this.minDate && e[y][g].format("YYYY-MM-DD") == this.minDate.format("YYYY-MM-DD") && e[y][g].isBefore(this.minDate) && "left" == t && (e[y][g] = this.minDate.clone()), this.maxDate && e[y][g].format("YYYY-MM-DD") == this.maxDate.format("YYYY-MM-DD") && e[y][g].isAfter(this.maxDate) && "right" == t && (e[y][g] = this.maxDate.clone());
            "left" == t ? this.leftCalendar.calendar = e : this.rightCalendar.calendar = e;
            var k = "left" == t ? this.minDate : this.startDate,
                b = this.maxDate,
                C = ("left" == t ? this.startDate : this.endDate, this.locale.direction, '<table class="table-condensed">');
            C += "<thead>", C += "<tr>", (this.showWeekNumbers || this.showISOWeekNumbers) && (C += "<th></th>"), k && !k.isBefore(e.firstDay) || this.linkedCalendars && "left" != t ? C += "<th></th>" : C += '<th class="prev available"><span></span></th>';
            var v = this.locale.monthNames[e[1][1].month()] + e[1][1].format(" YYYY");
            if (this.showDropdowns) {
                for (var Y = e[1][1].month(), w = e[1][1].year(), P = b && b.year() || this.maxYear, x = k && k.year() || this.minYear, M = w == x, S = w == P, I = '<select class="monthselect">', B = 0; B < 12; B++)(!M || B >= k.month()) && (!S || B <= b.month()) ? I += "<option value='" + B + "'" + (B === Y ? " selected='selected'" : "") + ">" + this.locale.monthNames[B] + "</option>" : I += "<option value='" + B + "'" + (B === Y ? " selected='selected'" : "") + " disabled='disabled'>" + this.locale.monthNames[B] + "</option>";
                I += "</select>";
                for (var A = '<select class="yearselect">', L = x; L <= P; L++) A += '<option value="' + L + '"' + (L === w ? ' selected="selected"' : "") + ">" + L + "</option>";
                v = I + (A += "</select>")
            }
            if (C += '<th colspan="5" class="month">' + v + "</th>", b && !b.isAfter(e.lastDay) || this.linkedCalendars && "right" != t && !this.singleDatePicker ? C += "<th></th>" : C += '<th class="next available"><span></span></th>', C += "</tr>", C += "<tr>", (this.showWeekNumbers || this.showISOWeekNumbers) && (C += '<th class="week">' + this.locale.weekLabel + "</th>"), R.each(this.locale.daysOfWeek, function(t, e) {
                    C += "<th>" + e + "</th>"
                }), C += "</tr>", C += "</thead>", C += "<tbody>", null == this.endDate && this.maxSpan) {
                var E = this.startDate.clone().add(this.maxSpan).endOf("day");
                b && !E.isBefore(b) || (b = E)
            }
            for (y = 0; y < 6; y++) {
                C += "<tr>", this.showWeekNumbers ? C += '<td class="week">' + e[y][0].week() + "</td>" : this.showISOWeekNumbers && (C += '<td class="week">' + e[y][0].isoWeek() + "</td>");
                for (g = 0; g < 7; g++) {
                    var W = [];
                    e[y][g].isSame(new Date, "day") && W.push("today"), 5 < e[y][g].isoWeekday() && W.push("weekend"), e[y][g].month() != e[1][1].month() && W.push("off"), this.minDate && e[y][g].isBefore(this.minDate, "day") && W.push("off", "disabled"), b && e[y][g].isAfter(b, "day") && W.push("off", "disabled"), this.isInvalidDate(e[y][g]) && W.push("off", "disabled"), e[y][g].format("YYYY-MM-DD") == this.startDate.format("YYYY-MM-DD") && W.push("active", "start-date"), null != this.endDate && e[y][g].format("YYYY-MM-DD") == this.endDate.format("YYYY-MM-DD") && W.push("active", "end-date"), null != this.endDate && e[y][g] > this.startDate && e[y][g] < this.endDate && W.push("in-range");
                    var O = this.isCustomDate(e[y][g]);
                    !1 !== O && ("string" == typeof O ? W.push(O) : Array.prototype.push.apply(W, O));
                    var N = "",
                        j = !1;
                    for (p = 0; p < W.length; p++) N += W[p] + " ", "disabled" == W[p] && (j = !0);
                    j || (N += "available"), C += '<td class="' + N.replace(/^\s+|\s+$/g, "") + '" data-title="r' + y + "c" + g + '">' + e[y][g].date() + "</td>"
                }
                C += "</tr>"
            }
            C += "</tbody>", C += "</table>", this.container.find(".drp-calendar." + t + " .calendar-table").html(C)
        },
        renderTimePicker: function(t) {
            if ("right" != t || this.endDate) {
                var e, a, i, s = this.maxDate;
                if (!this.maxSpan || this.maxDate && !this.startDate.clone().add(this.maxSpan).isAfter(this.maxDate) || (s = this.startDate.clone().add(this.maxSpan)), "left" == t) a = this.startDate.clone(), i = this.minDate;
                else if ("right" == t) {
                    a = this.endDate.clone(), i = this.startDate;
                    var n = this.container.find(".drp-calendar.right .calendar-time");
                    if ("" != n.html() && (a.hour(a.hour() || n.find(".hourselect option:selected").val()), a.minute(a.minute() || n.find(".minuteselect option:selected").val()), a.second(a.second() || n.find(".secondselect option:selected").val()), !this.timePicker24Hour)) {
                        var r = n.find(".ampmselect option:selected").val();
                        "PM" === r && a.hour() < 12 && a.hour(a.hour() + 12), "AM" === r && 12 === a.hour() && a.hour(0)
                    }
                    a.isBefore(this.startDate) && (a = this.startDate.clone()), s && a.isAfter(s) && (a = s.clone())
                }
                e = '<select class="hourselect">';
                for (var o = this.timePicker24Hour ? 0 : 1, h = this.timePicker24Hour ? 23 : 12, l = o; l <= h; l++) {
                    var c = l;
                    this.timePicker24Hour || (c = 12 <= a.hour() ? 12 == l ? 12 : l + 12 : 12 == l ? 0 : l);
                    var d = a.clone().hour(c),
                        m = !1;
                    i && d.minute(59).isBefore(i) && (m = !0), s && d.minute(0).isAfter(s) && (m = !0), c != a.hour() || m ? e += m ? '<option value="' + l + '" disabled="disabled" class="disabled">' + l + "</option>" : '<option value="' + l + '">' + l + "</option>" : e += '<option value="' + l + '" selected="selected">' + l + "</option>"
                }
                e += "</select> ", e += ':<select class="minuteselect">';
                for (l = 0; l < 60; l += this.timePickerIncrement) {
                    var f = l < 10 ? "0" + l : l;
                    d = a.clone().minute(l), m = !1;
                    i && d.second(59).isBefore(i) && (m = !0), s && d.second(0).isAfter(s) && (m = !0), a.minute() != l || m ? e += m ? '<option value="' + l + '" disabled="disabled" class="disabled">' + f + "</option>" : '<option value="' + l + '">' + f + "</option>" : e += '<option value="' + l + '" selected="selected">' + f + "</option>"
                }
                if (e += "</select> ", this.timePickerSeconds) {
                    e += ':<select class="secondselect">';
                    for (l = 0; l < 60; l++) {
                        f = l < 10 ? "0" + l : l, d = a.clone().second(l), m = !1;
                        i && d.isBefore(i) && (m = !0), s && d.isAfter(s) && (m = !0), a.second() != l || m ? e += m ? '<option value="' + l + '" disabled="disabled" class="disabled">' + f + "</option>" : '<option value="' + l + '">' + f + "</option>" : e += '<option value="' + l + '" selected="selected">' + f + "</option>"
                    }
                    e += "</select> "
                }
                if (!this.timePicker24Hour) {
                    e += '<select class="ampmselect">';
                    var p = "",
                        u = "";
                    i && a.clone().hour(12).minute(0).second(0).isBefore(i) && (p = ' disabled="disabled" class="disabled"'), s && a.clone().hour(0).minute(0).second(0).isAfter(s) && (u = ' disabled="disabled" class="disabled"'), 12 <= a.hour() ? e += '<option value="AM"' + p + '>AM</option><option value="PM" selected="selected"' + u + ">PM</option>" : e += '<option value="AM" selected="selected"' + p + '>AM</option><option value="PM"' + u + ">PM</option>", e += "</select>"
                }
                this.container.find(".drp-calendar." + t + " .calendar-time").html(e)
            }
        },
        updateFormInputs: function() {
            this.singleDatePicker || this.endDate && (this.startDate.isBefore(this.endDate) || this.startDate.isSame(this.endDate)) ? this.container.find("button.applyBtn").removeAttr("disabled") : this.container.find("button.applyBtn").attr("disabled", "disabled")
        },
        move: function() {
            var t, e = {
                    top: 0,
                    left: 0
                },
                a = R(window).width();
            this.parentEl.is("body") || (e = {
                top: this.parentEl.offset().top - this.parentEl.scrollTop(),
                left: this.parentEl.offset().left - this.parentEl.scrollLeft()
            }, a = this.parentEl[0].clientWidth + this.parentEl.offset().left), t = "up" == this.drops ? this.element.offset().top - this.container.outerHeight() - e.top : this.element.offset().top + this.element.outerHeight() - e.top, this.container["up" == this.drops ? "addClass" : "removeClass"]("drop-up"), "left" == this.opens ? (this.container.css({
                top: t,
                right: a - this.element.offset().left - this.element.outerWidth(),
                left: "auto"
            }), this.container.offset().left < 0 && this.container.css({
                right: "auto",
                left: 9
            })) : "center" == this.opens ? (this.container.css({
                top: t,
                left: this.element.offset().left - e.left + this.element.outerWidth() / 2 - this.container.outerWidth() / 2,
                right: "auto"
            }), this.container.offset().left < 0 && this.container.css({
                right: "auto",
                left: 9
            })) : (this.container.css({
                top: t,
                left: this.element.offset().left - e.left,
                right: "auto"
            }), this.container.offset().left + this.container.outerWidth() > R(window).width() && this.container.css({
                left: "auto",
                right: 0
            }))
        },
        show: function(t) {
            this.isShowing || (this._outsideClickProxy = R.proxy(function(t) {
                this.outsideClick(t)
            }, this), R(document).on("mousedown.daterangepicker", this._outsideClickProxy).on("touchend.daterangepicker", this._outsideClickProxy).on("click.daterangepicker", "[data-toggle=dropdown]", this._outsideClickProxy).on("focusin.daterangepicker", this._outsideClickProxy), R(window).on("resize.daterangepicker", R.proxy(function(t) {
                this.move(t)
            }, this)), this.oldStartDate = this.startDate.clone(), this.oldEndDate = this.endDate.clone(), this.previousRightTime = this.endDate.clone(), this.updateView(), this.container.show(), this.move(), this.element.trigger("show.daterangepicker", this), this.isShowing = !0)
        },
        hide: function(t) {
            this.isShowing && (this.endDate || (this.startDate = this.oldStartDate.clone(), this.endDate = this.oldEndDate.clone()), this.startDate.isSame(this.oldStartDate) && this.endDate.isSame(this.oldEndDate) || this.callback(this.startDate.clone(), this.endDate.clone(), this.chosenLabel), this.updateElement(), R(document).off(".daterangepicker"), R(window).off(".daterangepicker"), this.container.hide(), this.element.trigger("hide.daterangepicker", this), this.isShowing = !1)
        },
        toggle: function(t) {
            this.isShowing ? this.hide() : this.show()
        },
        outsideClick: function(t) {
            var e = R(t.target);
            "focusin" == t.type || e.closest(this.element).length || e.closest(this.container).length || e.closest(".calendar-table").length || (this.hide(), this.element.trigger("outsideClick.daterangepicker", this))
        },
        showCalendars: function() {
            this.container.addClass("show-calendar"), this.move(), this.element.trigger("showCalendar.daterangepicker", this)
        },
        hideCalendars: function() {
            this.container.removeClass("show-calendar"), this.element.trigger("hideCalendar.daterangepicker", this)
        },
        clickRange: function(t) {
            var e = t.target.getAttribute("data-range-key");
            if ((this.chosenLabel = e) == this.locale.customRangeLabel) this.showCalendars();
            else {
                var a = this.ranges[e];
                this.startDate = a[0], this.endDate = a[1], this.timePicker || (this.startDate.startOf("day"), this.endDate.endOf("day")), this.alwaysShowCalendars || this.hideCalendars(), this.clickApply()
            }
        },
        clickPrev: function(t) {
            R(t.target).parents(".drp-calendar").hasClass("left") ? (this.leftCalendar.month.subtract(1, "month"), this.linkedCalendars && this.rightCalendar.month.subtract(1, "month")) : this.rightCalendar.month.subtract(1, "month"), this.updateCalendars()
        },
        clickNext: function(t) {
            R(t.target).parents(".drp-calendar").hasClass("left") ? this.leftCalendar.month.add(1, "month") : (this.rightCalendar.month.add(1, "month"), this.linkedCalendars && this.leftCalendar.month.add(1, "month")), this.updateCalendars()
        },
        hoverDate: function(t) {
            if (R(t.target).hasClass("available")) {
                var e = R(t.target).attr("data-title"),
                    a = e.substr(1, 1),
                    i = e.substr(3, 1),
                    r = R(t.target).parents(".drp-calendar").hasClass("left") ? this.leftCalendar.calendar[a][i] : this.rightCalendar.calendar[a][i],
                    o = this.leftCalendar,
                    h = this.rightCalendar,
                    l = this.startDate;
                this.endDate || this.container.find(".drp-calendar tbody td").each(function(t, e) {
                    if (!R(e).hasClass("week")) {
                        var a = R(e).attr("data-title"),
                            i = a.substr(1, 1),
                            s = a.substr(3, 1),
                            n = R(e).parents(".drp-calendar").hasClass("left") ? o.calendar[i][s] : h.calendar[i][s];
                        n.isAfter(l) && n.isBefore(r) || n.isSame(r, "day") ? R(e).addClass("in-range") : R(e).removeClass("in-range")
                    }
                })
            }
        },
        clickDate: function(t) {
            if (R(t.target).hasClass("available")) {
                var e = R(t.target).attr("data-title"),
                    a = e.substr(1, 1),
                    i = e.substr(3, 1),
                    s = R(t.target).parents(".drp-calendar").hasClass("left") ? this.leftCalendar.calendar[a][i] : this.rightCalendar.calendar[a][i];
                if (this.endDate || s.isBefore(this.startDate, "day")) {
                    if (this.timePicker) {
                        var n = parseInt(this.container.find(".left .hourselect").val(), 10);
                        if (!this.timePicker24Hour) "PM" === (h = this.container.find(".left .ampmselect").val()) && n < 12 && (n += 12), "AM" === h && 12 === n && (n = 0);
                        var r = parseInt(this.container.find(".left .minuteselect").val(), 10),
                            o = this.timePickerSeconds ? parseInt(this.container.find(".left .secondselect").val(), 10) : 0;
                        s = s.clone().hour(n).minute(r).second(o)
                    }
                    this.endDate = null, this.setStartDate(s.clone())
                } else if (!this.endDate && s.isBefore(this.startDate)) this.setEndDate(this.startDate.clone());
                else {
                    if (this.timePicker) {
                        var h;
                        n = parseInt(this.container.find(".right .hourselect").val(), 10);
                        if (!this.timePicker24Hour) "PM" === (h = this.container.find(".right .ampmselect").val()) && n < 12 && (n += 12), "AM" === h && 12 === n && (n = 0);
                        r = parseInt(this.container.find(".right .minuteselect").val(), 10), o = this.timePickerSeconds ? parseInt(this.container.find(".right .secondselect").val(), 10) : 0;
                        s = s.clone().hour(n).minute(r).second(o)
                    }
                    this.setEndDate(s.clone()), this.autoApply && (this.calculateChosenLabel(), this.clickApply())
                }
                this.singleDatePicker && (this.setEndDate(this.startDate), this.timePicker || this.clickApply()), this.updateView(), t.stopPropagation()
            }
        },
        calculateChosenLabel: function() {
            var t = !0,
                e = 0;
            for (var a in this.ranges) {
                if (this.timePicker) {
                    var i = this.timePickerSeconds ? "YYYY-MM-DD hh:mm:ss" : "YYYY-MM-DD hh:mm";
                    if (this.startDate.format(i) == this.ranges[a][0].format(i) && this.endDate.format(i) == this.ranges[a][1].format(i)) {
                        t = !1, this.chosenLabel = this.container.find(".ranges li:eq(" + e + ")").addClass("active").attr("data-range-key");
                        break
                    }
                } else if (this.startDate.format("YYYY-MM-DD") == this.ranges[a][0].format("YYYY-MM-DD") && this.endDate.format("YYYY-MM-DD") == this.ranges[a][1].format("YYYY-MM-DD")) {
                    t = !1, this.chosenLabel = this.container.find(".ranges li:eq(" + e + ")").addClass("active").attr("data-range-key");
                    break
                }
                e++
            }
            t && (this.showCustomRangeLabel ? this.chosenLabel = this.container.find(".ranges li:last").addClass("active").attr("data-range-key") : this.chosenLabel = null, this.showCalendars())
        },
        clickApply: function(t) {
            this.hide(), this.element.trigger("apply.daterangepicker", this)
        },
        clickCancel: function(t) {
            this.startDate = this.oldStartDate, this.endDate = this.oldEndDate, this.hide(), this.element.trigger("cancel.daterangepicker", this)
        },
        monthOrYearChanged: function(t) {
            var e = R(t.target).closest(".drp-calendar").hasClass("left"),
                a = e ? "left" : "right",
                i = this.container.find(".drp-calendar." + a),
                s = parseInt(i.find(".monthselect").val(), 10),
                n = i.find(".yearselect").val();
            e || (n < this.startDate.year() || n == this.startDate.year() && s < this.startDate.month()) && (s = this.startDate.month(), n = this.startDate.year()), this.minDate && (n < this.minDate.year() || n == this.minDate.year() && s < this.minDate.month()) && (s = this.minDate.month(), n = this.minDate.year()), this.maxDate && (n > this.maxDate.year() || n == this.maxDate.year() && s > this.maxDate.month()) && (s = this.maxDate.month(), n = this.maxDate.year()), e ? (this.leftCalendar.month.month(s).year(n), this.linkedCalendars && (this.rightCalendar.month = this.leftCalendar.month.clone().add(1, "month"))) : (this.rightCalendar.month.month(s).year(n), this.linkedCalendars && (this.leftCalendar.month = this.rightCalendar.month.clone().subtract(1, "month"))), this.updateCalendars()
        },
        timeChanged: function(t) {
            var e = R(t.target).closest(".drp-calendar"),
                a = e.hasClass("left"),
                i = parseInt(e.find(".hourselect").val(), 10),
                s = parseInt(e.find(".minuteselect").val(), 10),
                n = this.timePickerSeconds ? parseInt(e.find(".secondselect").val(), 10) : 0;
            if (!this.timePicker24Hour) {
                var r = e.find(".ampmselect").val();
                "PM" === r && i < 12 && (i += 12), "AM" === r && 12 === i && (i = 0)
            }
            if (a) {
                var o = this.startDate.clone();
                o.hour(i), o.minute(s), o.second(n), this.setStartDate(o), this.singleDatePicker ? this.endDate = this.startDate.clone() : this.endDate && this.endDate.format("YYYY-MM-DD") == o.format("YYYY-MM-DD") && this.endDate.isBefore(o) && this.setEndDate(o.clone())
            } else if (this.endDate) {
                var h = this.endDate.clone();
                h.hour(i), h.minute(s), h.second(n), this.setEndDate(h)
            }
            this.updateCalendars(), this.updateFormInputs(), this.renderTimePicker("left"), this.renderTimePicker("right")
        },
        elementChanged: function() {
            if (this.element.is("input") && this.element.val().length) {
                var t = this.element.val().split(this.locale.separator),
                    e = null,
                    a = null;
                2 === t.length && (e = H(t[0], this.locale.format), a = H(t[1], this.locale.format)), (this.singleDatePicker || null === e || null === a) && (a = e = H(this.element.val(), this.locale.format)), e.isValid() && a.isValid() && (this.setStartDate(e), this.setEndDate(a), this.updateView())
            }
        },
        keydown: function(t) {
            9 !== t.keyCode && 13 !== t.keyCode || this.hide(), 27 === t.keyCode && (t.preventDefault(), t.stopPropagation(), this.hide())
        },
        updateElement: function() {
            if (this.element.is("input") && this.autoUpdateInput) {
                var t = this.startDate.format(this.locale.format);
                this.singleDatePicker || (t += this.locale.separator + this.endDate.format(this.locale.format)), t !== this.element.val() && this.element.val(t).trigger("change")
            }
        },
        remove: function() {
            this.container.remove(), this.element.off(".daterangepicker"), this.element.removeData()
        }
    }, R.fn.daterangepicker = function(t, e) {, R.fn.daterangepicker.defaultOptions, t);
        return this.each(function() {
            var t = R(this);
            t.data("daterangepicker") && t.data("daterangepicker").remove(), t.data("daterangepicker", new i(t, a, e))
        }), this
    }, i
});
//# sourceMappingURL=/sm/8cfffddf058dc09b67d92f8d849675e6b459dfb8ede5136cf5c98d10acf78cc3.map

/*! jQuery UI - v1.12.1 - 2016-09-14
* http://jqueryui.com
* Includes: widget.js, position.js, data.js, disable-selection.js, effect.js, effects/effect-blind.js, effects/effect-bounce.js, effects/effect-clip.js, effects/effect-drop.js, effects/effect-explode.js, effects/effect-fade.js, effects/effect-fold.js, effects/effect-highlight.js, effects/effect-puff.js, effects/effect-pulsate.js, effects/effect-scale.js, effects/effect-shake.js, effects/effect-size.js, effects/effect-slide.js, effects/effect-transfer.js, focusable.js, form-reset-mixin.js, jquery-1-7.js, keycode.js, labels.js, scroll-parent.js, tabbable.js, unique-id.js, widgets/accordion.js, widgets/autocomplete.js, widgets/button.js, widgets/checkboxradio.js, widgets/controlgroup.js, widgets/datepicker.js, widgets/dialog.js, widgets/draggable.js, widgets/droppable.js, widgets/menu.js, widgets/mouse.js, widgets/progressbar.js, widgets/resizable.js, widgets/selectable.js, widgets/selectmenu.js, widgets/slider.js, widgets/sortable.js, widgets/spinner.js, widgets/tabs.js, widgets/tooltip.js
* Copyright jQuery Foundation and other contributors; Licensed MIT */
(function( factory ) {
	if ( typeof define === "function" && define.amd ) {

		// AMD. Register as an anonymous module.
		define([ "jquery" ], factory );
	} else {

		// Browser globals
		factory( jQuery );
	}
}(function( $ ) {;

var version = $.ui.version = "1.12.1";


/*!
 * jQuery UI Widget 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
//>>label: Widget
//>>group: Core
//>>description: Provides a factory for creating stateful widgets with a common API.
//>>docs: http://api.jqueryui.com/jQuery.widget/
//>>demos: http://jqueryui.com/widget/



var widgetUuid = 0;
var widgetSlice = Array.prototype.slice;

$.cleanData = ( function( orig ) {
	return function( elems ) {
		var events, elem, i;
		for ( i = 0; ( elem = elems[ i ] ) != null; i++ ) {
			try {

				// Only trigger remove when necessary to save time
				events = $._data( elem, "events" );
				if ( events && events.remove ) {
					$( elem ).triggerHandler( "remove" );
				}

			// Http://bugs.jquery.com/ticket/8235
			}
		}
		orig( elems );
	};
} )( $.cleanData );

$.widget = function( name, base, prototype ) {;

	var namespace = name.split( "." )[ 0 ];
	name = name.split( "." )[ 1 ];
	var fullName = namespace + "-" + name;

	if ( !prototype ) {
		prototype = base;
		base = $.Widget;
	}

	if ( $.isArray( prototype ) ) { ].concat( prototype ) );
	}

	// Create selector for plugin
	$.expr[ ":" ][ fullName.toLowerCase() ] = function( elem ) {
		return !!$.data( elem, fullName );
	};
	existingConstructor = $[ namespace ][ name ];
	constructor = $[ namespace ][ name ] = function( options, element ) {

		// Allow instantiation without "new" keyword
		if ( !this._createWidget ) {
			return new constructor( options, element );
		}

		// Allow instantiation without initializing for simple inheritance
		// must use "new" keyword (the code above always passes args)
		if ( arguments.length ) {
			this._createWidget( options, element );
		}
	};

	// Extend with the existing constructor to carry over any static properties
	$.extend( constructor, existingConstructor, {, prototype ),

		// Track widgets that inherit from this widget in case this widget is
		// redefined after a widget inherits from it
		_childConstructors: []
	}, basePrototype.options );
	$.each( prototype, function( prop, value ) {
		if ( !$.isFunction( value ) ) {
			proxiedPrototype[ prop ] = value;
			return;
		}
		proxiedPrototype[ prop ] = ( function() {
			function _super() {
				return base.prototype[ prop ].apply( this, arguments );
			}

			function _superApply( args ) {
				return base.prototype[ prop ].apply( this, args );
			}

			return function() {
				var __super = this._super;
				var __superApply = this._superApply;
				var returnValue;

				this._super = _super;
				this._superApply = _superApply;

				returnValue = value.apply( this, arguments );

				this._super = __super;
				this._superApply = __superApply;

				return returnValue;
			};
		} )();
	} );
	constructor.prototype = $.widget.extend( basePrototype, {

		// TODO: remove support for widgetEventPrefix
		// always use the name + a colon as the prefix, e.g., draggable:start
		// don't prefix for widgets that aren't DOM-based
		widgetEventPrefix: existingConstructor ? ( basePrototype.widgetEventPrefix || name ) : name
	}, proxiedPrototype, {
		constructor: constructor,
		namespace: namespace,
		widgetName: name,
		widgetFullName: fullName
	} );

	// If this widget is being redefined then we need to find all widgets that
	// are inheriting from it and redefine all of them so that they inherit from
	// the new version of this widget. We're essentially trying to replace one // level in the prototype chain. if (existingConstructor){$.each(existingConstructor._childConstructors,function(i,child){var childPrototype=child.prototype;:// Redefine the child widget using the same prototype that was // originally used,but inherit from the new version of the base $.widget(childPrototype.namespace+"."+childPrototype.widgetName,constructor,child._proto)};$.widget.extend=function(target){:var input=widgetSlice.call(arguments,1);:var inputIndex=0;:var inputLength=input.length;:var key;:var value;:for (;:inputIndex < inputLength;:inputIndex++){for (key in input[ inputIndex ]){value=input[ inputIndex ][ key ];:if (input[ inputIndex ].hasOwnProperty(key) && value!==undefined){// Clone objects if ($.isPlainObject(value)){, value );

				// Copy everything else by reference
				} else {
					target[ key ] = value;
				}
			}
		}
	}
	return target;
};

$.widget.bridge = function( name, object ) {
	var fullName = object.prototype.widgetFullName || name;
	$.fn[ name ] = function( options ) {
		var isMethodCall = typeof options === "string";
		var args = widgetSlice.call( arguments, 1 );
		var returnValue = this;

		if ( isMethodCall ) {

			// If this is an empty collection, we need to have the instance method
			// return undefined instead of the jQuery instance
			if ( !this.length && options === "instance" ) {
				returnValue = undefined;
			} else {
				this.each( function() {
					var methodValue;
					var instance = $.data( this, fullName );

					if ( options === "instance" ) {
						returnValue = instance;
						return false;
					}

					if ( !instance ) {
						return $.error( "cannot call methods on " + name +
							" prior to initialization; " +
							"attempted to call method '" + options + "'" );
					}

					if ( !$.isFunction( instance[ options ] ) || options.charAt( 0 ) === "_" ) {
						return $.error( "no such method '" + options + "' for " + name +
							" widget instance" );
					}

					methodValue = instance[ options ].apply( instance, args );

					if ( methodValue !== instance && methodValue !== undefined ) {
						returnValue = methodValue && methodValue.jquery ?
							returnValue.pushStack( methodValue.get() ) :
							methodValue;
						return false;
					}
				} );
			}
		} else {

			// Allow multiple hashes to be passed on init
			if ( args.length ) {
				options = $.widget.extend.apply( null, [ options ].concat( args ) );
			}

			this.each( function() {
				var instance = $.data( this, fullName );
				if ( instance ) { );
					if ( instance._init ) {
						instance._init();
					}
				} else {
					$.data( this, fullName, new object( options, this ) );
				}
			} );
		}

		return returnValue;
	};
};
$.Widget._childConstructors = [];

$.Widget.prototype = {
	widgetName: "widget",
	widgetEventPrefix: "",
	defaultElement: "<div>",

	options: {,
		disabled: false,

		// Callbacks
		create: null
	},

	_createWidget: function( options, element ) {;

		if ( element !== this ) {
			$.data( element, this.widgetFullName, this );
			this._on( true, this.element, {
				remove: function( event ) {
					if ( event.target === element ) {
						this.destroy();
					}
				}
			} );
			this.document = $( element.style ?

				// Element within the document
				element.ownerDocument :

				// Element is window or document
				element.document || element );
			this.window = $( this.document[ 0 ].defaultView || this.document[ 0 ].parentWindow );
		},
			this.options,
			this._getCreateOptions(),
			options );

		this._create();

		if ( this.options.disabled ) {
			this._setOptionDisabled( this.options.disabled );
		}

		this._trigger( "create", null, this._getCreateEventData() );
		this._init();
	},

	_getCreateOptions: function() {;
	},

	_getCreateEventData: $.noop,

	_create: $.noop,

	_init: $.noop,

	destroy: function() {
		var that = this;

		this._destroy();
		$.each( this.classesElementLookup, function( key, value ) {
			that._removeClass( value, key );
		} );

		// We can probably remove the unbind calls in 2.0
		// all event bindings should go through this._on()
		this.element
			.off( this.eventNamespace )
			.removeData( this.widgetFullName );
		this.widget()
			.off( this.eventNamespace )
			.removeAttr( "aria-disabled" );

		// Clean up events and states
		this.bindings.off( this.eventNamespace );
	},

	_destroy: $.noop,

	widget: function() {
		return this.element;
	},

	option: function( key, value ) {
		var options = key;
		var parts;
		var curOption;
		var i;

		if ( arguments.length === 0 ) {if (typeof key==="string"){// Handle nested keys,e.g.,"foo.bar"=>{foo:{bar:___};parts=key.split(".");key=parts.shift();if (parts.length){,this.options[ key ]);for (i=0;i < parts.length - 1;i++){key=parts.pop();if (arguments.length===1){return curOption[ key ]===undefined ? null:curOption[ key ]}else{if (arguments.length===1){return this.options[ key ]===undefined ? null:this.options[ key ]}this.options[ key ]=value;if (key==="disabled"){this._setOptionDisabled(value)},_setOptionClasses:function(value){:var classKey,elements,currentElements;:for (classKey in value){currentElements=this.classesElementLookup[ classKey ];:if (value[ classKey ]===this.options.classes[ classKey ] ||!currentElements ||!currentElements.length){continue},// We are doing this to create a new jQuery object because the _removeClass() call // on the next line is going to destroy the reference to the current elements being // tracked. We need to save a copy of this collection so that we can add the new classes // below. elements=$(currentElements.get());this._removeClass(currentElements,basePosition,classKey);// We don't use _addClass() here, because that uses this.options.classes
			// for generating the string of classes. We want to use the value passed in from
			// _setOption(), this is the new value of the classes option which was passed to
			// _setOption(). We pass this value directly to _classes().
			elements.addClass( this._classes( {
				element: elements,
				keys: classKey,
				classes: value,
				add: true
			} ) );
		}
	},

	_setOptionDisabled: function( value ) {
		this._toggleClass( this.widget(), this.widgetFullName + "-disabled", null, !!value );

		// If the widget is becoming disabled, then nothing is interactive
		if ( value ) {
			this._removeClass( this.hoverable, null, "ui-state-hover" );
			this._removeClass( this.focusable, null, "ui-state-focus" );
		}
	},

	enable: function() {
		return this._setOptions( { disabled: false } );
	},

	disable: function() {
		return this._setOptions( { disabled: true } );
	},

	_classes: function( options ) {
		var full = [];
		var that = this;

		options = $.extend( {
		}, options );

		function processClassString( classes, checkOption ) {
			var current, i;
			for ( i = 0; i < classes.length; i++ ) {
				current = that.classesElementLookup[ classes[ i ] ] || $();
				if ( options.add ) {
					current = $( $.unique( current.get().concat( options.element.get() ) ) );
				} else {
					current = $( current.not( options.element ).get() );
				}
				that.classesElementLookup[ classes[ i ] ] = current;
				full.push( classes[ i ] );
				if ( checkOption && options.classes[ classes[ i ] ] ) {
					full.push( options.classes[ classes[ i ] ] );
				}
			}
		}

		this._on( options.element, {
			"remove": "_untrackClassesElement"
		} );

		if ( options.keys ) {
			processClassString( options.keys.match( /\S+/g ) || [], true );
		}
		if ( options.extra ) {
			processClassString( options.extra.match( /\S+/g ) || [] );
		}

		return full.join( " " );
	},

	_untrackClassesElement: function( event ) {
		var that = this;
		$.each( that.classesElementLookup, function( key, value ) {
			if ( $.inArray( event.target, value ) !== -1 ) {
				that.classesElementLookup[ key ] = $( value.not( event.target ).get() );
			}
		} );
	},

	_removeClass: function( element, keys, extra ) {
		return this._toggleClass( element, keys, extra, false );
	},

	_addClass: function( element, keys, extra ) {
		return this._toggleClass( element, keys, extra, true );
	},

	_toggleClass: function( element, keys, extra, add ) {
		add = ( typeof add === "boolean" ) ? add : extra;
		var shift = ( typeof element === "string" || element === null ),
			options = {
				extra: shift ? keys : extra,
				keys: shift ? element : keys,
				element: shift ? this.element : element,
				add: add
			};
		options.element.toggleClass( this._classes( options ), add );
		return this;
	},

	_on: function( suppressDisabledCheck, element, handlers ) {
		var delegateElement;
		var instance = this;

		// No suppressDisabledCheck flag, shuffle arguments
		if ( typeof suppressDisabledCheck !== "boolean" ) {
			handlers = element;
			element = suppressDisabledCheck;
			suppressDisabledCheck = false;
		}

		// No element argument, shuffle and use this.element
		if ( !handlers ) {
			handlers = element;
			element = this.element;
			delegateElement = this.widget();
		} else {
			element = delegateElement = $( element );
			this.bindings = this.bindings.add( element );
		}

		$.each( handlers, function( event, handler ) {
			function handlerProxy() {

				// Allow widgets to customize the disabled handling
				// - disabled as an array instead of boolean
				// - disabled class as method for disabling individual parts
				if ( !suppressDisabledCheck &&
						( instance.options.disabled === true ||
						$( this ).hasClass( "ui-state-disabled" ) ) ) {
					return;
				}
				return ( typeof handler === "string" ? instance[ handler ] : handler )
					.apply( instance, arguments );
			}

			// Copy the guid so direct unbinding works
			if ( typeof handler !== "string" ) {
				handlerProxy.guid = handler.guid =
					handler.guid || handlerProxy.guid || $.guid++;
			}

			var match = event.match( /^([\w:-]*)\s*(.*)$/ );
			var eventName = match[ 1 ] + instance.eventNamespace;
			var selector = match[ 2 ];

			if ( selector ) {
				delegateElement.on( eventName, selector, handlerProxy );
			} else {
				element.on( eventName, handlerProxy );
			}
		} );
	},

	_off: function( element, eventName ) {
		eventName = ( eventName || "" ).split( " " ).join( this.eventNamespace + " " ) +
			this.eventNamespace;
		element.off( eventName ).off( eventName );

		// Clear the stack to avoid memory leaks (#10056)
		this.bindings = $( this.bindings.not( element ).get() );
		this.focusable = $( this.focusable.not( element ).get() );
		this.hoverable = $( this.hoverable.not( element ).get() );
	},

	_delay: function( handler, delay ) {
		function handlerProxy() {
			return ( typeof handler === "string" ? instance[ handler ] : handler )
				.apply( instance, arguments );
		}
		var instance = this;
		return setTimeout( handlerProxy, delay || 0 );
	},

	_hoverable: function( element ) {
		this.hoverable = this.hoverable.add( element );
		this._on( element, {
			mouseenter: function( event ) {
				this._addClass( $( event.currentTarget ), null, "ui-state-hover" );
			},
			mouseleave: function( event ) {
				this._removeClass( $( event.currentTarget ), null, "ui-state-hover" );
			}
		} );
	},

	_focusable: function( element ) {
		this.focusable = this.focusable.add( element );
		this._on( element, {
			focusin: function( event ) {
				this._addClass( $( event.currentTarget ), null, "ui-state-focus" );
			},
			focusout: function( event ) {
				this._removeClass( $( event.currentTarget ), null, "ui-state-focus" );
			}
		} );
	},

	_trigger: function( type, event, data ) {;
		event = $.Event( event );
		event.type = ( type === this.widgetEventPrefix ?
			type :
			this.widgetEventPrefix + type ).toLowerCase();

		// The original event may come from any element
		// so we need to reset the target on the new event
		event.target = this.element[ 0 ];

		// Copy original event properties over to the new event
		orig = event.originalEvent;
		if ( orig ) {
			for ( prop in orig ) {
				if ( !( prop in event ) ) {
					event[ prop ] = orig[ prop ];
				}
			}
		}

		this.element.trigger( event, data );
		return !( $.isFunction( callback ) &&
			callback.apply( this.element[ 0 ], [ event ].concat( data ) ) === false ||
			event.isDefaultPrevented() );
	}
};

$.each( { show: "fadeIn", hide: "fadeOut" }, function( method, defaultEffect ) {
	$.Widget.prototype[ "_" + method ] = function( element, options, callback ) {
		if ( typeof options === "string" ) {
			options = { effect: options };
		};
		if ( typeof options === "number" ) {
			options = { duration: options };
		}

		hasOptions = !$.isEmptyObject( options );
		options.complete = callback;

		if ( options.delay ) {
			element.delay( options.delay );
		}

		if ( hasOptions && $.effects && $.effects.effect[ effectName ] ) {
			element[ method ]( options );
		} else if ( effectName !== method && element[ effectName ] ) {
			element[ effectName ]( options.duration, options.easing, callback );
		} else {
			element.queue( function( next ) {
				$( this )[ method ]();
				if ( callback ) {
					callback.call( element[ 0 ] );
				}
				next();
			} );
		}
	};
} );

var widget = $.widget;


/*!
 * jQuery UI Position 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/position/
 */
//>>label: Position
//>>group: Core
//>>description: Positions elements relative to other elements.
//>>docs: http://api.jqueryui.com/position/
//>>demos: http://jqueryui.com/position/


( function() {
var cachedScrollbarWidth,
	max = Math.max,
	abs = Math.abs,
	rhorizontal = /left|center|right/,
	rvertical = /top|center|bottom/,
	roffset = /[\+\-]\d+(\.[\d]+)?%?/,
	rposition = /^\w+/,
	rpercent = /%$/,
	_position = $.fn.position;

function getOffsets( offsets, width, height ) {
	return [
		parseFloat( offsets[ 0 ] ) * ( rpercent.test( offsets[ 0 ] ) ? width / 100 : 1 ),
		parseFloat( offsets[ 1 ] ) * ( rpercent.test( offsets[ 1 ] ) ? height / 100 : 1 )
	];
}

function parseCss( element, property ) {
	return parseInt( $.css( element, property ), 10 ) || 0;
}

function getDimensions( elem ) {
	var raw = elem[ 0 ];
	if ( raw.nodeType === 9 ) {
		return {
			width: elem.width(),
			height: elem.height(),
			offset: { top: 0, left: 0 }
		};
	}
	if ( $.isWindow( raw ) ) {
		return {
			width: elem.width(),
			height: elem.height(),
			offset: { top: elem.scrollTop(), left: elem.scrollLeft() }
		};
	}
	if ( raw.preventDefault ) {
		return {
			width: 0,
			height: 0,
			offset: { top: raw.pageY, left: raw.pageX }
		};
	}
	return {
		width: elem.outerWidth(),
		height: elem.outerHeight(),
		offset: elem.offset()
	};
}

$.position = {
	scrollbarWidth: function() {
		if ( cachedScrollbarWidth !== undefined ) {
			return cachedScrollbarWidth;
		}
		var w1, w2,
			div = $( "<div " +
				"style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'>" +
				"<div style='height:100px;width:auto;'></div></div>" ),
			innerDiv = div.children()[ 0 ];

		$( "body" ).append( div );
		w1 = innerDiv.offsetWidth;
		div.css( "overflow", "scroll" );

		w2 = innerDiv.offsetWidth;

		if ( w1 === w2 ) {
			w2 = div[ 0 ].clientWidth;
		}

		div.remove();

		return ( cachedScrollbarWidth = w1 - w2 );
	},
	getScrollInfo: function( within ) {
		var overflowX = within.isWindow || within.isDocument ? "" :
				within.element.css( "overflow-x" ),
			overflowY = within.isWindow || within.isDocument ? "" :
				within.element.css( "overflow-y" ),
			hasOverflowX = overflowX === "scroll" ||
				( overflowX === "auto" && within.width < within.element[ 0 ].scrollWidth ),
			hasOverflowY = overflowY === "scroll" ||
				( overflowY === "auto" && within.height < within.element[ 0 ].scrollHeight );
		return {
			width: hasOverflowY ? $.position.scrollbarWidth() : 0,
			height: hasOverflowX ? $.position.scrollbarWidth() : 0
		};
	},
	getWithinInfo: function( element ) {
		var withinElement = $( element || window ),
			isWindow = $.isWindow( withinElement[ 0 ] ),
			isDocument = !!withinElement[ 0 ] && withinElement[ 0 ].nodeType === 9,
			hasOffset = !isWindow && !isDocument;
		return {
			element: withinElement,
			isWindow: isWindow,
			isDocument: isDocument,
			offset: hasOffset ? $( element ).offset() : { left: 0, top: 0 },
			scrollLeft: withinElement.scrollLeft(),
			scrollTop: withinElement.scrollTop(),
			width: withinElement.outerWidth(),
			height: withinElement.outerHeight()
		};
	}
};

$.fn.position = function( options ) {
	if ( !options || !options.of ) {
		return _position.apply( this, arguments );
	};dimensions=getDimensions(target);if (target[ 0 ].preventDefault){// Force left top to allow flipping options.at="left top"},"at" ],function(),it will be converted to center $.each([ "my",targetOffset);// Force my and at to have valid horizontal and vertical positions // if a value is missing or invalid{:var pos=(options[ this ] || "").split(" "),horizontalOffset,verticalOffset;if (pos.length===1){pos=rhorizontal.test(pos[ 0 ]) ? pos.concat([ "center" ]):rvertical.test(pos[ 0 ]) ? [ "center" ].concat(pos) :[ "center","center" ]});// Normalize collision option if (collision.length===1){collision[ 1 ]=collision[ 0 ]}if (options.at[ 0 ]==="right"){basePosition.left +=targetWidth}else if (options.at[ 0 ]==="center"){basePosition.left +=targetWidth / 2}if (options.at[ 1 ]==="bottom"){basePosition.top +=targetHeight}else if (options.at[ 1 ]==="center"){basePosition.top +=targetHeight / 2}atOffset=getOffsets(offsets.at,targetHeight);basePosition.left +=atOffset[ 0 ];basePosition.top +=atOffset[ 1 ];return this.each(function(),targetWidth{,basePosition),elem.outerHeight());if (options.my[ 0 ]==="right"),elem.outerWidth(),myOffset=getOffsets(offsets.my{position.left -=elemWidth}else if (options.my[ 0 ]==="center"){position.left -=elemWidth / 2}if (options.my[ 1 ]==="bottom"){position.top -=elemHeight}else if (options.my[ 1 ]==="center"){position.top -=elemHeight / 2}position.left +=myOffset[ 0 ];position.top +=myOffset[ 1 ];collisionPosition={marginLeft:marginLeft,marginTop:marginTop};$.each([ "left","top" ],dir),function(i{if ($.ui.position[ collision[ i ] ]){$.ui.position[ collision[ i ] ][ dir ](position,{targetWidth:targetWidth,targetHeight:targetHeight,elemWidth:elemWidth,elemHeight:elemHeight,collisionPosition:collisionPosition,collisionWidth:collisionWidth,collisionHeight:collisionHeight,offset:[ atOffset[ 0 ]+myOffset[ 0 ],atOffset [ 1 ]+myOffset[ 1 ] ],my:options.my,at:options.at,within:within,elem:elem});if (options.using){// Adds feedback as second argument to using callback,if present using=function(props){var left=targetOffset.left - position.left,right=left+targetWidth - elemWidth,top=targetOffset.top - position.top,bottom=top+targetHeight - elemHeight,feedback={target:{element:target,left:targetOffset.left,top:targetOffset.top,width:targetWidth,height:targetHeight},element:{element:elem,left:position.left,top:position.top,width:elemWidth,height:elemHeight};if (targetWidth < elemWidth && abs(left+right) < targetWidth){feedback.horizontal="center"}if (targetHeight < elemHeight && abs(top+bottom) < targetHeight){feedback.vertical="middle"}abs(bottom))),abs(right))>max(abs(top),if (max(abs(left){feedback.important="horizontal"},elem.offset($.extend(position{using:using};$.ui.position={fit:{left:function(position,data){var within=data.within,withinOffset=within.isWindow ? within.scrollLeft:within.offset.left,outerWidth=within.width,collisionPosLeft=position.left - data.collisionPosition.marginLeft,overLeft=withinOffset - collisionPosLeft,overRight=collisionPosLeft+data.collisionWidth - outerWidth - withinOffset,newOverRight;:// Element is wider than within if (data.collisionWidth>outerWidth){// Element is initially over the left side of within if (overLeft>0 && overRight <=0){newOverRight=position.left+overLeft+data.collisionWidth - outerWidth - withinOffset;:position.left +=overLeft - newOverRight;:// Element is initially over right side of within}else if (overRight>0 && overLeft <=0){:position.left=withinOffset;:// Element is initially over both left and right sides of within}else if (overLeft>0){:position.left +=overLeft;:// Too far right -> align with right edge},data),top:function(position{var within=data.within,withinOffset=within.isWindow ? within.scrollTop:within.offset.top,outerHeight=data.within.height,collisionPosTop=position.top - data.collisionPosition.marginTop,overTop=withinOffset - collisionPosTop,overBottom=collisionPosTop+data.collisionHeight - outerHeight - withinOffset,newOverBottom}else if (overBottom>0 && overTop <=0){:position.top=withinOffset;:// Element is initially over both top and bottom of within}else if (overTop>0){:position.top +=overTop;:// Too far down -> align with bottom edge},flip:{left:function(position,data){var within=data.within,withinOffset=within.offset.left+within.scrollLeft,outerWidth=within.width,offsetLeft=within.isWindow ? within.scrollLeft:within.offset.left,collisionPosLeft=position.left - data.collisionPosition.marginLeft,overLeft=collisionPosLeft - offsetLeft,overRight=collisionPosLeft+data.collisionWidth - outerWidth - offsetLeft,myOffset=data.my[ 0 ]==="left" ? -data.elemWidth :data.my[ 0 ]==="right" ? data.elemWidth :0,atOffset=data.at[ 0 ]==="left" ? data.targetWidth :data.at[ 0 ]==="right" ? -data.targetWidth :0,offset=-2 * data.offset[ 0 ],newOverRight,newOverLeft;:if (overLeft < 0){newOverRight=position.left+myOffset+atOffset+offset+data.collisionWidth - outerWidth - withinOffset;:if (newOverRight < 0 || newOverRight < abs(overLeft)){position.left +=myOffset+atOffset+offset}else if (overRight>0){:newOverLeft=position.left - data.collisionPosition.marginLeft+myOffset+atOffset+offset - offsetLeft;:if (newOverLeft>0 || abs(newOverLeft) < overRight){position.left +=myOffset+atOffset+offset},data),top:function(position{var within=data.within,withinOffset=within.offset.top+within.scrollTop,outerHeight=within.height,offsetTop=within.isWindow ? within.scrollTop:within.offset.top,collisionPosTop=position.top - data.collisionPosition.marginTop,overTop=collisionPosTop - offsetTop,overBottom=collisionPosTop+data.collisionHeight - outerHeight - offsetTop,top=data.my[ 1 ]==="top",myOffset=top ? -data.elemHeight :data.my[ 1 ]==="bottom" ? data.elemHeight :0,atOffset=data.at[ 1 ]==="top" ? data.targetHeight :data.at[ 1 ]==="bottom" ? -data.targetHeight :0,offset=-2 * data.offset[ 1 ],newOverTop,newOverBottom;:if (overTop < 0){newOverBottom=position.top+myOffset+atOffset+offset+data.collisionHeight - outerHeight - withinOffset;:if (newOverBottom < 0 || newOverBottom < abs(overTop)){position.top +=myOffset+atOffset+offset}else if (overBottom>0){:newOverTop=position.top - data.collisionPosition.marginTop+myOffset+atOffset+offset - offsetTop;:if (newOverTop>0 || abs(newOverTop) < overBottom){position.top +=myOffset+atOffset+offset},flipfit:{left:function(){$.ui.position.flip.left.apply(this,arguments);:$.ui.position.fit.left.apply(this,arguments)},top:function(){:$.ui.position.flip.top.apply(this,arguments);:$.ui.position.fit.top.apply(this,arguments)})();var position=$.ui.position;/*!
 * jQuery UI :data 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */,//>>label::data Selector //>>group:Core //>>description:Selects elements which have data stored under the specified key. //>>docs:http://api.jqueryui.com/data-selector/ var data=$.extend($.expr[ ":" ]{data:$.expr.createPseudo ? $.expr.createPseudo(function(dataName){return function(elem){return!!$.data(elem,dataName)}) :// Support:jQuery <1.8 function(elem,i,match){return!!$.data(elem,match[ 3 ])});/*!
 * jQuery UI Disable Selection 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *///>>label:disableSelection //>>group:Core //>>description:Disable selection of text content within the set of matched elements. //>>docs:http://api.jqueryui.com/disableSelection/ // This file is deprecated var disableSelection=$.fn.extend({disableSelection:(function(){var eventType="onselectstart" in document.createElement("div") ? "selectstart":"mousedown";:return function(){return this.on(eventType+".ui-disableSelection",function(event){event.preventDefault()})(),enableSelection:function(){return this.off(".ui-disableSelection")});/*!
 * jQuery UI Effects 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */// Create a local jQuery because jQuery Color relies on it and the // global may not exist with AMD and a custom build (#10199) jQuery=$;$.effects=,//>>label:Effects Core //>>group:Effects // jscs:disable maximumLineLength //>>description:Extends the internal jQuery effects. Includes morphing and easing. Required by all other effects. // jscs:enable maximumLineLength //>>docs:http://api.jqueryui.com/category/effects-core/ //>>demos:http://jqueryui.com/effect/ var dataSpace="ui-effects-",dataSpaceAnimated="ui-effects-animated",dataSpaceStyle="ui-effects-style"{;/*!
 * jQuery Color Animations v2.1.2
 * https://github.com/jquery/jquery-color
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * Date: Wed Jan 16 08:47:09 2013 -0600
 */(function(jQuery,undefined){var stepHooks="backgroundColor borderBottomColor borderLeftColor borderRightColor "+"borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",// Plusequals test for +=100 -=100 rplusequals=/^([\-+])=\s*(\d+\.?\d*)/,// A set of RE's that can match strings and generate color tuples.
	stringParsers = [ {
			re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
			parse: function( execResult ) {
				return [
					execResult[ 1 ],
					execResult[ 2 ],
					execResult[ 3 ],
					execResult[ 4 ]
				];
			}
		}, {
			re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
			parse: function( execResult ) {
				return [
					execResult[ 1 ] * 2.55,
					execResult[ 2 ] * 2.55,
					execResult[ 3 ] * 2.55,
					execResult[ 4 ]
				];
			}
		}, {

			// This regex ignores A-F because it's compared against an already lowercased string re:/#([a-f0-9]{2})([a-f0-9]{2})/,parse:function(execResult){return [ parseInt(execResult[ 1 ],16),parseInt(execResult[ 2 ],16),parseInt(execResult[ 3 ],16) ]});// Everything defined but alpha? if (inst[ cache ] && jQuery.inArray(null,3)) < 0),inst[ cache ].slice(0{:// Use the default of 1 inst[ cache ][ 3 ]=1;:if (space.from){inst._rgba=space.from(inst[ cache ])},is:function(compare){:var is=color(compare),same=true,inst=this;:each(spaces,function(_,space){var localCache,isCache=is[ space.cache ];:if (isCache){localCache=inst[ space.cache ] || space.to && space.to(inst._rgba) || [];:each(space.props,function(_,prop){if (isCache[ prop.idx ]!=null){same=(isCache[ prop.idx ]===localCache[ prop.idx ]);:return same},_space:function(){:var used=[],inst=this;:each(spaces,function(spaceName,space){if (inst[ space.cache ]){used.push(spaceName)},distance),transition:function(other{var end=color(other),spaceName=end._space(),space=spaces[ spaceName ],startColor=this.alpha()===0 ? color("transparent"):this,start=startColor[ space.cache ] || space.to(startColor._rgba),result=start.slice();:end=end[ space.cache ];:each(space.props,function(key,prop){;// If null,don't override start value
			if ( endValue === null ) {
				return;
			}

			// If null - use end
			if ( startValue === null ) {
				result[ index ] = endValue;
			} else {
				if ( type.mod ) {
					if ( endValue - startValue > type.mod / 2 ) {
						startValue += type.mod;
					} else if ( startValue - endValue > type.mod / 2 ) {
						startValue -= type.mod;
					}
				}
				result[ index ] = clamp( ( endValue - startValue ) * distance + startValue, prop );
			}
		} );
		return this[ spaceName ]( result );
	},
	blend: function( opaque ) {

		// If we are already opaque - return ourself
		if ( this._rgba[ 3 ] === 1 ) {
			return this;
		}

		var rgb = this._rgba.slice(),
			a = rgb.pop(),
			blend = color( opaque )._rgba;

		return color( jQuery.map( rgb, function( v, i ) {
			return ( 1 - a ) * blend[ i ] + a * v;
		} ) );
	},
	toRgbaString: function() {
		var prefix = "rgba(",
			rgba = jQuery.map( this._rgba, function( v, i ) {
				return v == null ? ( i > 2 ? 1 : 0 ) : v;
			} );

		if ( rgba[ 3 ] === 1 ) {
			rgba.pop();
			prefix = "rgb(";
		}

		return prefix + rgba.join() + ")";
	},
	toHslaString: function() {
		var prefix = "hsla(",
			hsla = jQuery.map( this.hsla(), function( v, i ) {
				if ( v == null ) {
					v = i > 2 ? 1 : 0;
				}

				// Catch 1 and 2
				if ( i && i < 3 ) {
					v = Math.round( v * 100 ) + "%";
				}
				return v;
			} );

		if ( hsla[ 3 ] === 1 ) {
			hsla.pop();
			prefix = "hsl(";
		}
		return prefix + hsla.join() + ")";
	},
	toHexString: function( includeAlpha ) {
		var rgba = this._rgba.slice(),
			alpha = rgba.pop();

		if ( includeAlpha ) {
			rgba.push( ~~( alpha * 255 ) );
		}

		return "#" + jQuery.map( rgba, function( v ) {

			// Default to 0 when nulls exist
			v = ( v || 0 ).toString( 16 );
			return v.length === 1 ? "0" + v : v;
		} ).join( "" );
	},
	toString: function() {
		return this._rgba[ 3 ] === 0 ? "transparent" : this.toRgbaString();
	}
} );
color.fn.parse.prototype = color.fn;

// Hsla conversions adapted from:
// https://code.google.com/p/maashaack/source/browse/packages/graphics/trunk/src/graphics/colors/HUE2RGB.as?r=5021

function hue2rgb( p, q, h ) {
	h = ( h + 1 ) % 1;
	if ( h * 6 < 1 ) {
		return p + ( q - p ) * h * 6;
	}
	if ( h * 2 < 1 ) {
		return q;
	}
	if ( h * 3 < 2 ) {
		return p + ( q - p ) * ( ( 2 / 3 ) - h ) * 6;
	}
	return p;
}

spaces.hsla.to = function( rgba ) {
	if ( rgba[ 0 ] == null || rgba[ 1 ] == null || rgba[ 2 ] == null ) {
		return [ null, null, null, rgba[ 3 ] ];
	}
	var r = rgba[ 0 ] / 255,
		g = rgba[ 1 ] / 255,
		b = rgba[ 2 ] / 255,
		a = rgba[ 3 ],
		max = Math.max( r, g, b ),
		min = Math.min( r, g, b ),
		diff = max - min,
		add = max + min,
		l = add * 0.5,
		h, s;

	if ( min === max ) {
		h = 0;
	} else if ( r === max ) {
		h = ( 60 * ( g - b ) / diff ) + 360;
	} else if ( g === max ) {
		h = ( 60 * ( b - r ) / diff ) + 120;
	} else {
		h = ( 60 * ( r - g ) / diff ) + 240;
	}

	// Chroma (diff) == 0 means greyscale which, by definition, saturation = 0%
	// otherwise, saturation is based on the ratio of chroma (diff) to lightness (add)
	if ( diff === 0 ) {
		s = 0;
	} else if ( l <= 0.5 ) {
		s = diff / add;
	} else {
		s = diff / ( 2 - add );
	}
	return [ Math.round( h ) % 360, s, l, a == null ? 1 : a ];
};

spaces.hsla.from = function( hsla ) {
	if ( hsla[ 0 ] == null || hsla[ 1 ] == null || hsla[ 2 ] == null ) {
		return [ null, null, null, hsla[ 3 ] ];
	}
	var h = hsla[ 0 ] / 360,
		s = hsla[ 1 ],
		l = hsla[ 2 ],
		a = hsla[ 3 ],
		q = l <= 0.5 ? l * ( 1 + s ) : l + s - l * s,
		p = 2 * l - q;

	return [
		Math.round( hue2rgb( p, q, h + ( 1 / 3 ) ) * 255 ),
		Math.round( hue2rgb( p, q, h ) * 255 ),
		Math.round( hue2rgb( p, q, h - ( 1 / 3 ) ) * 255 ),
		a
	];
};

each( spaces, function( spaceName, space ) {
	var props = space.props,
		cache = space.cache,
		to = space.to,
		from = space.from;

	// Makes rgba() and hsla()
	color.fn[ spaceName ] = function( value ) {

		// Generate a cache for this space if it doesn't exist if (to &&!this[ cache ]){this[ cache ]=to(this._rgba)}if (value===undefined){return this[ cache ].slice()}arr=(type==="array" || type==="object") ? value:arguments,function(key,local=this[ cache ].slice();each(props,prop),type=jQuery.type(value),var ret{var val=arr[ type==="object" ? key:prop.idx ];:if (val==null){val=local[ prop.idx ]});if (from){:ret=color(from(local));:ret[ cache ]=local;:return ret};// Makes red() green() blue() alpha() hue() saturation() lightness() each(props,function(key,prop){// Alpha is included in more than one space if (color.fn[ key ]){return}color.fn[ key ]=function(value){var vtype=jQuery.type(value),fn=(key==="alpha" ? (this._hsla ? "hsla":"rgba") :spaceName),local=this[ fn ](),cur=local[ prop.idx ],match;:if (vtype==="undefined"){return cur}if (vtype==="function"){:value=value.call(this,cur);:vtype=jQuery.type(value)}if (value==null && prop.empty){return this}if (vtype==="string"){:match=rplusequals.exec(value);if (match){value=cur+parseFloat(match[ 2 ]) * (match[ 1 ]==="+" ? 1:-1)});// Add cssHook and .fx.step function for each named hook. // accept a space separated string of properties color.hook=function(hook){each(hooks,function(i,hook){jQuery.cssHooks[ hook ]={set:function(elem,value){var parsed,curElem,backgroundColor="";if (!support.rgba && value._rgba[ 3 ]!==1){curElem=hook==="backgroundColor" ? elem.parentNode:elem;:while ((backgroundColor==="" || backgroundColor==="transparent") && curElem && curElem.style){try{backgroundColor=jQuery.css(curElem,"backgroundColor");:curElem=curElem.parentNode}try{elem.style[ hook ]=value};jQuery.fx.step[ hook ]=function(fx){:if (!fx.colorInit){fx.start=color(fx.elem,hook);:fx.end=color(fx.end);:fx.colorInit=true};color.hook(stepHooks);jQuery.cssHooks.borderColor={expand:function(value){;each([ "Top","Right","Bottom","Left" ],function(i,part){expanded[ "border"+part+"Color" ]=value};// Basic color names only. // Usage of any of the other color names requires adding yourself or including // jquery.color.svg-names.js. colors=jQuery.Color.names={// 4.1. Basic color keywords aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",// 4.2.3. "transparent" color keyword transparent:[ null,null,null,0 ],_default:"#ffffff"})(jQuery);(function(){var classAnimationActions=[ "add","remove","toggle" ],shorthandStyles={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};$.each([ "borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle" ],function(_,prop){:$.fx.step[ prop ]=function(fx){if (fx.end!=="none" &&!fx.setAttr || fx.pos===1 &&!fx.setAttr){jQuery.style(fx.elem,prop,fx.end);:fx.setAttr=true});function getElementStyles(elem){;if (style && style.length && style[ 0 ] && style[ style[ 0 ] ]){:len=style.length;:while (len--){key=style[ len ];:if (typeof style[ key ]==="string"){styles[ $.camelCase(key) ]=style[ key ]}function styleDifference(oldStyle,newStyle){,name,value;for (name in newStyle){:value=newStyle[ name ];:if (oldStyle[ name ]!==value){if (!shorthandStyles[ name ]){if ($.fx.step[ name ] ||!isNaN(parseFloat(value))){diff[ name ]=value}// Support:jQuery <1.8 if (!$.fn.addBack){$.fn.addBack=function(selector){return this.add(selector==null ? this.prevObject:this.prevObject.filter(selector))}$.effects.animateClass=function(value,callback),duration,easing{return this.queue(function(){var animated=$(this),baseClass=animated.attr("class") || "",applyClassChange,allAnimations=o.children ? animated.find("*").addBack():animated;:// Map the animated objects to store the original styles. allAnimations=allAnimations.map(function(){var el=$(this);return{el:el,start:getElementStyles(this)});// Apply class change applyClassChange=function(){$.each(classAnimationActions,function(i,action){if (value[ action ]){animated[ action+"Class" ](value[ action ])};applyClassChange();// Map all animated objects again - calculate new styles and diff allAnimations=allAnimations.map(function(){:this.end=getElementStyles(this.el[ 0 ]);:this.diff=styleDifference(this.start,this.end);:return this});// Apply original class animated.attr("class",baseClass);// Map all animated objects again - this time collecting a promise allAnimations=allAnimations.map(function(){,o{queue:false,complete:function(){dfd.resolve(styleInfo)});// Once all animations have completed:$.when.apply($,allAnimations.get()).done(function(){:// Set the final class applyClassChange();:// For each animated element,// clear all css properties that were animated $.each(arguments,function(){var el=this.el;:$.each(this.diff,function(key){el.css(key,"")};$.fn.extend({addClass:(function(orig){return function(classNames,speed,easing,callback){return speed ? $.effects.animateClass.call(this,{add:classNames})($.fn.addClass),removeClass:(function(orig){return function(classNames,speed,easing,callback){return arguments.length>1 ? $.effects.animateClass.call(this,{remove:classNames})($.fn.removeClass),toggleClass:(function(orig){return function(classNames,force,speed,easing,callback){if (typeof force==="boolean" || force===undefined){if (!speed){// Without speed parameter return orig.apply(this,arguments)}else{return $.effects.animateClass.call(this,(force ?{add:classNames}:{remove:classNames}else{// Without force parameter return $.effects.animateClass.call(this,{toggle:classNames})($.fn.toggleClass),add,callback),easing,speed,switchClass:function(remove{return $.effects.animateClass.call(this,{add:add,remove:remove}if ($.uiBackCompat!==false){$.extend($.effects,{// Saves a set of properties in a data storage save:function(element,set){var i=0,length=set.length;:for (;:i < length;:i++){if (set[ i ]!==null){element.data(dataSpace+set[ i ],element[ 0 ].style[ set[ i ] ])},// Restores a set of previously saved properties from a data storage restore:function(element,set){:var val,i=0,length=set.length;:for (;:i < length;:i++){if (set[ i ]!==null){val=element.data(dataSpace+set[ i ]);:element.css(set[ i ],val)},mode),setMode:function(el{if (mode==="toggle"){mode=el.is(":hidden") ? "show":"hide"},// Wraps the element around a wrapper that copies position properties createWrapper:function(element){// If the element is already wrapped,return it if (element.parent().is(".ui-effects-wrapper")){return element.parent()}// Wrap the element var props={width:element.outerWidth(true),height:element.outerHeight(true),"float":element.css("float")},wrapper=$("<div></div>") .addClass("ui-effects-wrapper") .css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),// Store the size in case width/height are defined in % - Fixes #5245 size={width:element.width(),height:element.height()},active=document.activeElement;// Support:Firefox // Firefox incorrectly exposes anonymous content // https://bugzilla.mozilla.org/show_bug.cgi?id=561664 try{active.id}active)),element.wrap(wrapper);// Fixes #7595 - Elements lose focus when wrapped. if (element[ 0 ]===active || $.contains(element[ 0 ]{$(active).trigger("focus")}// Hotfix for jQuery 1.4 since some change in wrap() seems to actually // lose the reference to the wrapped element wrapper=element.parent();// Transfer positioning properties to the wrapper if (element.css("position")==="static"){wrapper.css({position:"relative"}else{$.extend(props,{position:element.css("position"),zIndex:element.css("z-index")});$.each([ "top","right" ],"bottom","left",function(i,pos){:props[ pos ]=element.css(pos);:if (isNaN(parseInt(props[ pos ],10))){props[ pos ]="auto"});element.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"},removeWrapper:function(element){:var active=document.activeElement;:if (element.parent().is(".ui-effects-wrapper")){element.parent().replaceWith(element);:// Fixes #7595 - Elements lose focus when wrapped. if (element[ 0 ]===active || $.contains(element[ 0 ],active)){$(active).trigger("focus")},$.extend($.effects{version:"1.12.1",define:function(name,mode,effect){if (!effect){effect=mode;:mode="effect"},direction),percent,scaledDimensions:function(element{if (percent===0){return{height:0,width:0,outerHeight:0,outerWidth:0}var x=direction!=="horizontal" ? ((percent || 100) / 100):1,y=direction!=="vertical" ? ((percent || 100) / 100) :1;return{height:element.height() * y,width:element.width() * x,outerHeight:element.outerHeight() * y,outerWidth:element.outerWidth() * x},clipToBox:function(animation){return{width:animation.clip.right - animation.clip.left,height:animation.clip.bottom - animation.clip.top,left:animation.clip.left,top:animation.clip.top},// Injects recently queued functions to be first in line (after "inprogress") unshift:function(element,count),queueLength{:var queue=element.queue();:if (queueLength>1){queue.splice.apply(queue,[ 1,0 ].concat(queue.splice(queueLength,count)))},saveStyle:function(element){element.data(dataSpaceStyle,element[ 0 ].style.cssText)},restoreStyle:function(element){:element[ 0 ].style.cssText=element.data(dataSpaceStyle) || "";:element.removeData(dataSpaceStyle)},mode),mode:function(element{:var hidden=element.is(":hidden");if (mode==="toggle"){mode=hidden ? "show":"hide"}if (hidden ? mode==="hide" :mode==="show"){mode="none"},// Translates a [top,left] array into a baseline value getBaseline:function(origin,original){switch (origin[ 0 ]){case "top":y=0;case "middle":y=.5;case "bottom":y=1;:break;default:y=origin[ 0 ] / original.height}switch (origin[ 1 ]){case "left":x=0;case "center":x=.5;case "right":x=1;:break;default:x=origin[ 1 ] / original.width}return{x:x,y:y},// Creates a placeholder element so that the original element can be made absolute createPlaceholder:function(element){:var placeholder,cssPosition=element.css("position"),position=element.position();// Lock in margins first to account for form elements,which // will change margin if you explicitly set height // see:http://jsfiddle.net/JZSMt/3/ https://bugs.webkit.org/show_bug.cgi?id=107380 // Support:Safari element.css({marginTop:element.css("marginTop"),marginBottom:element.css("marginBottom"),marginLeft:element.css("marginLeft"),marginRight:element.css("marginRight")}) .outerWidth(element.outerWidth()) .outerHeight(element.outerHeight());if (/^(static|relative)/.test(cssPosition)){:cssPosition="absolute";placeholder=$("<"+element[ 0 ].nodeName+">").insertAfter(element).css({// Convert inline to inline block to account for inline elements // that turn to inline block based on content (like img) display:/^(inline|ruby)/.test(element.css("display")) ? "inline-block":"block",visibility:"hidden",// Margins need to be set to account for margin collapse marginTop:element.css("marginTop"),marginBottom:element.css("marginBottom"),marginLeft:element.css("marginLeft"),marginRight:element.css("marginRight"),"float":element.css("float")}element.css({position:cssPosition,left:position.left,top:position.top},removePlaceholder:function(element){:var dataKey=dataSpace+"placeholder",placeholder=element.data(dataKey);:if (placeholder){placeholder.remove();:element.removeData(dataKey)},// Removes a placeholder if it exists and restores // properties that were modified during placeholder creation cleanUp:function(element){:$.effects.restoreStyle(element);:$.effects.removePlaceholder(element)},factor,list,setTransition:function(element,value){;$.each(list,function(i,x){:var unit=element.cssUnit(x);:if (unit[ 0 ]>0){value[ x ]=unit[ 0 ] * factor+unit[ 1 ]});// Return an effect options object for the given parameters:function _normalizeArguments(effect,callback),options,speed{:// Allow passing all options as the first parameter if ($.isPlainObject(effect)){options=effect;:effect=effect.effect}// Convert to an object effect={effect:effect}...) if (options==null),;// Catch (effect,null{// Catch (effect,callback) if ($.isFunction(options)){// Catch (effect,?) if (typeof options==="number" || $.fx.speeds[ options ]),speed{// Catch (effect,callback) if ($.isFunction(speed)),options{:callback=speed;:speed=null}// Add options to effect if (options){$.extend(effect,options)}function standardAnimationOption(option){// Valid standard speeds (nothing,number,named speed) if (!option || typeof option==="number" || $.fx.speeds[ option ]){return true}// Complete callback if ($.isFunction(option)),// Invalid strings - treat as "normal" speed if (typeof option==="string" &&!$.effects.effect[ option ]),// Options hash (but not naming an effect) if (typeof option==="object" &&!option.effect){return true}// Didn't match any standard API
	return false;
}

$.fn.extend( {
	effect: function(  ) {
		var args = _normalizeArguments.apply( this, arguments ),
			effectMethod = $.effects.effect[ args.effect ],
			defaultMode = effectMethod.mode,
			queue = args.queue,
			queueName = queue || "fx",
			complete = args.complete,
			mode = args.mode,
			modes = [],
			prefilter = function( next ) {
				var el = $( this ),
					normalizedMode = $.effects.mode( el, mode ) || defaultMode;

				// Sentinel for duck-punching the :animated psuedo-selector
				el.data( dataSpaceAnimated, true );

				// Save effect mode for later use,
				// we can't just call $.effects.mode again later,// as the .show() below destroys the initial state modes.push(normalizedMode);// See $.uiBackCompat inside of run() for removal of defaultMode in 1.13 if (defaultMode && (normalizedMode==="show" || (normalizedMode===defaultMode && normalizedMode==="hide"))){el.show()}if (!defaultMode || normalizedMode!=="none"){$.effects.saveStyle(el)};if ($.fx.off ||!effectMethod){// Delegate to the original method (e.g.,.show()) if possible if (mode){return this[ mode ](args.duration,complete)}function run(next){:var elem=$(this);:function cleanup(){elem.removeData(dataSpaceAnimated);:$.effects.cleanUp(elem);:if (args.mode==="hide"){elem.hide()}function done(){if ($.isFunction(complete)){complete.call(elem[ 0 ])}if ($.isFunction(next)){next()}// Override mode option on a per element basis,// as toggle can be either show or hide depending on element state args.mode=modes.shift();if ($.uiBackCompat!==false &&!defaultMode){if (elem.is(":hidden") ? mode==="hide" :mode==="show"){// Call the core method to track "olddisplay" properly elem[ mode ]();:done()},show:(function(orig){return function(option){if (standardAnimationOption(option)){return orig.apply(this,arguments)})($.fn.show),hide:(function(orig){return function(option){if (standardAnimationOption(option)){return orig.apply(this,arguments)})($.fn.hide),toggle:(function(orig){return function(option){if (standardAnimationOption(option) || typeof option==="boolean"){return orig.apply(this,arguments)})($.fn.toggle),cssUnit:function(key){:var style=this.css(key),val=[];:$.each([ "em","px","%","pt" ],function(i,unit){if (style.indexOf(unit)>0){val=[ parseFloat(style),unit ]},cssClip:function(clipObj){if (clipObj){return this.css("clip","rect("+clipObj.top+"px "+clipObj.right+"px "+clipObj.bottom+"px "+clipObj.left+"px)")},done),transfer:function(options{var element=$(this),target=$(options.to),targetFixed=target.css("position")==="fixed",body=$("body"),fixTop=targetFixed ? body.scrollTop() :0,fixLeft=targetFixed ? body.scrollLeft() :0,endPosition=target.offset(),animation={top:endPosition.top - fixTop,left:endPosition.left - fixLeft,height:target.innerHeight(),width:target.innerWidth()},startPosition=element.offset(),transfer=$("<div class='ui-effects-transfer'></div>") .appendTo("body") .addClass(options.className) .css({top:startPosition.top - fixTop,left:startPosition.left - fixLeft,height:element.innerHeight(),width:element.innerWidth(),position:targetFixed ? "fixed":"absolute"}) .animate(animation,function(),options.duration,options.easing{:transfer.remove();:if ($.isFunction(done)){done()});function parseClip(str,element){:var outerWidth=element.outerWidth(),outerHeight=element.outerHeight(),clipRegex=/^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/,values=clipRegex.exec(str) || [ "",0,outerWidth,outerHeight,0 ];return{top:parseFloat(values[ 1 ]) || 0,right:values[ 2 ]==="auto" ? outerWidth:parseFloat(values[ 2 ]),bottom:values[ 3 ]==="auto" ? outerHeight :parseFloat(values[ 3 ]),left:parseFloat(values[ 4 ]) || 0}$.fx.step.clip=function(fx){:if (!fx.clipInit){fx.start=$(fx.elem).cssClip();:if (typeof fx.end==="string"){fx.end=parseClip(fx.end,fx.elem)}$(fx.elem).cssClip({top:fx.pos * (fx.end.top - fx.start.top)+fx.start.top,right:fx.pos * (fx.end.right - fx.start.right)+fx.start.right,bottom:fx.pos * (fx.end.bottom - fx.start.bottom)+fx.start.bottom,left:fx.pos * (fx.end.left - fx.start.left)+fx.start.left})();(function(){;$.each([ "Quad","Cubic","Quart","Quint","Expo" ],function(i,name){baseEasings[ name ]=function(p){return Math.pow(p,i+2)},);$.extend(baseEasings{Sine:function(p){return 1 - Math.cos(p * Math.PI / 2)},Circ:function(p){return 1 - Math.sqrt(1 - p * p)},Elastic:function(p){return p===0 || p===1 ? p:-Math.pow(2,8 * (p - 1)) * Math.sin(((p - 1) * 80 - 7.5) * Math.PI / 15)},Back:function(p){return p * p * (3 * p - 2)},Bounce:function(p){);$.each(baseEasings,easeIn),function(name{:$.easing[ "easeIn"+name ]=easeIn;:$.easing[ "easeOut"+name ]=function(p){return 1 - easeIn(1 - p)};$.easing[ "easeInOut"+name ]=function(p){return p < .5 ? easeIn(p * 2) / 2:1 - easeIn(p * -2+2) / 2})();var effect=$.effects;/*!
 * jQuery UI Effects Blind 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *///>>label:Blind Effect //>>group:Effects //>>description:Blinds the element. //>>docs:http://api.jqueryui.com/blind-effect/ //>>demos:http://jqueryui.com/effect/ var effectsEffectBlind=$.effects.define("blind","hide",done),function(options{var map={up:[ "bottom","top" ],vertical:[ "bottom","top" ],down:[ "top","bottom" ],left:[ "right","left" ],horizontal:[ "right","left" ],right:[ "left","right" ]},animate=,direction=options.direction || "up",element=$(this),start=element.cssClip(){,placeholder=$.effects.createPlaceholder(element);animate.clip[ map[ direction ][ 0 ] ]=animate.clip[ map[ direction ][ 1 ] ];if (options.mode==="show"){:element.cssClip(animate.clip);:if (placeholder){placeholder.css($.effects.clipToBox(animate))}if (placeholder){placeholder.animate($.effects.clipToBox(animate),options.duration,options.easing)});/*!
 * jQuery UI Effects Bounce 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *///>>label:Bounce Effect //>>group:Effects //>>description:Bounces an element horizontally or vertically n times. //>>docs:http://api.jqueryui.com/bounce-effect/ //>>demos:http://jqueryui.com/effect/ var effectsEffectBounce=$.effects.define("bounce",done),function(options{var upAnim,downAnim,refValue,element=$(this),// Defaults:mode=options.mode,hide=mode==="hide",show=mode==="show",direction=options.direction || "up",distance=options.distance,times=options.times || 5,// Number of internal animations anims=times * 2+(show || hide ? 1:0),speed=options.duration / anims,easing=options.easing,// Utility:ref=(direction==="up" || direction==="down") ? "top" :"left",motion=(direction==="up" || direction==="left"),i=0,queuelen=element.queue().length;:$.effects.createPlaceholder(element);:refValue=element.css(ref);// Default distance for the BIGGEST bounce is the outer Distance / 3 if (!distance){distance=element[ ref==="top" ? "outerHeight":"outerWidth" ]() / 3}if (show){downAnim={opacity:1}// Start at the smallest distance if we are hiding if (hide){distance=distance / Math.pow(2,times - 1)};downAnim[ ref ]=refValue;// Bounces up/down/left/right then back to 0 -- times * 2 animations happen here for (;i < times;i++){// Last Bounce when Hiding if (hide){upAnim={opacity:0});/*!
 * jQuery UI Effects Clip 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *///>>label:Clip Effect //>>group:Effects //>>description:Clips the element on and off like an old TV. //>>docs:http://api.jqueryui.com/clip-effect/ //>>demos:http://jqueryui.com/effect/ var effectsEffectClip=$.effects.define("clip","hide",done),function(options{,both=direction==="both",direction=options.direction || "vertical",element=$(this),horizontal=both || direction==="horizontal",vertical=both || direction==="vertical";start=element.cssClip();animate.clip={top:vertical ? (start.bottom - start.top) / 2:start.top,right:horizontal ? (start.right - start.left) / 2 :start.right,bottom:vertical ? (start.bottom - start.top) / 2 :start.bottom,left:horizontal ? (start.right - start.left) / 2 :start.left};$.effects.createPlaceholder(element);if (options.mode==="show"){:element.cssClip(animate.clip);:animate.clip=start},element.animate(animate{queue:false,duration:options.duration,easing:options.easing,complete:done});/*!
 * jQuery UI Effects Drop 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *///>>label:Drop Effect //>>group:Effects //>>description:Moves an element in one direction and hides it at the same time. //>>docs:http://api.jqueryui.com/drop-effect/ //>>demos:http://jqueryui.com/effect/ var effectsEffectDrop=$.effects.define("drop","hide",done),function(options{var distance,element=$(this),mode=options.mode,show=mode==="show",direction=options.direction || "left",ref=(direction==="up" || direction==="down") ? "top" :"left",motion=(direction==="up" || direction==="left") ? "-=" :"+=",oppositeMotion=(motion==="+=") ? "-=" :"+=",animation={opacity:0};$.effects.createPlaceholder(element);distance=options.distance || element[ ref==="top" ? "outerHeight":"outerWidth" ](true) / 2;animation[ ref ]=motion+distance;if (show){:element.css(animation);:animation[ ref ]=oppositeMotion+distance;:animation.opacity=1},// Animate element.animate(animation{queue:false,duration:options.duration,easing:options.easing,complete:done});/*!
 * jQuery UI Effects Explode 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *///>>label:Explode Effect //>>group:Effects // jscs:disable maximumLineLength //>>description:Explodes an element in all directions into n pieces. Implodes an element to its original wholeness. // jscs:enable maximumLineLength //>>docs:http://api.jqueryui.com/explode-effect/ //>>demos:http://jqueryui.com/effect/ var effectsEffectExplode=$.effects.define("explode","hide",done),function(options{var i,j,left,top,mx,my,rows=options.pieces ? Math.round(Math.sqrt(options.pieces)):3,cells=rows,element=$(this),mode=options.mode,show=mode==="show",// Show and then visibility:hidden the element before calculating offset offset=element.show().css("visibility","hidden").offset(),// Width and height of a piece width=Math.ceil(element.outerWidth() / cells),height=Math.ceil(element.outerHeight() / rows),pieces=[];// Children animate complete:function childComplete(){pieces.push(this);:if (pieces.length===rows * cells){animComplete()}// Clone the element for each row and cell. for (i=0;i < rows;i++){://===> top=offset.top+i * height;:my=i - (rows - 1) / 2;:for (j=0;:j < cells;:j++){// ||| left=offset.left+j * width;:mx=j - (cells - 1) / 2;// Create a clone of the now hidden main element that will be absolute positioned // within a wrapper div off the -left and -top equal to size of our pieces element .clone() .appendTo("body") .wrap("<div></div>") .css({position:"absolute",visibility:"visible",left:-j * width,top:-i * height}) // Select the wrapper - make it overflow:hidden and absolute positioned based on // where the original was located +left and +top equal to the size of pieces .parent() .addClass("ui-effects-explode") .css({position:"absolute",overflow:"hidden",width:width,height:height,left:left+(show ? mx * width:0),top:top+(show ? my * height :0),opacity:show ? 0 :1}) .animate({left:left+(show ? 0:mx * width),top:top+(show ? 0 :my * height),opacity:show ? 1 :0}function animComplete(){element.css({visibility:"visible"});/*!
 * jQuery UI Effects Fade 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *///>>label:Fade Effect //>>group:Effects //>>description:Fades the element. //>>docs:http://api.jqueryui.com/fade-effect/ //>>demos:http://jqueryui.com/effect/ var effectsEffectFade=$.effects.define("fade","toggle",done),function(options{:var show=options.mode==="show";$(this) .css("opacity",show ? 0 :1) .animate({opacity:show ? 1:0});/*!
 * jQuery UI Effects Fold 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *///>>label:Fold Effect //>>group:Effects //>>description:Folds an element first horizontally and then vertically. //>>docs:http://api.jqueryui.com/fold-effect/ //>>demos:http://jqueryui.com/effect/ var effectsEffectFold=$.effects.define("fold","hide",done),function(options{// Create element var element=$(this),mode=options.mode,show=mode==="show",hide=mode==="hide",size=options.size || 15,percent=/([0-9]+)%/.exec(size),horizFirst=!!options.horizFirst,ref=horizFirst ? [ "right","bottom" ] :[ "bottom","right" ],duration=options.duration / 2,placeholder=$.effects.createPlaceholder(element),start=element.cssClip(),animation1={,animation2={,distance=[ start[ ref[ 0 ] ],queuelen=element.queue().length;if (percent),start[ ref[ 1 ] ] ]{size=parseInt(percent[ 1 ],10) / 100 * distance[ hide ? 0:1 ]}animation1.clip[ ref[ 0 ] ]=size;animation2.clip[ ref[ 0 ] ]=size;animation2.clip[ ref[ 1 ] ]=0;if (show){:element.cssClip(animation2.clip);:if (placeholder){placeholder.css($.effects.clipToBox(animation2))}// Animate element .queue(function(next){if (placeholder){placeholder .animate($.effects.clipToBox(animation1),duration,options.easing) .animate($.effects.clipToBox(animation2),duration,options.easing)});/*!
 * jQuery UI Effects Highlight 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *///>>label:Highlight Effect //>>group:Effects //>>description:Highlights the background of an element in a defined color for a custom duration. //>>docs:http://api.jqueryui.com/highlight-effect/ //>>demos:http://jqueryui.com/effect/ var effectsEffectHighlight=$.effects.define("highlight","show",done),function(options{var element=$(this),animation={backgroundColor:element.css("backgroundColor")};if (options.mode==="hide"){animation.opacity=0}$.effects.saveStyle(element);element .css({backgroundImage:"none",backgroundColor:options.color || "#ffff99"},) .animate(animation{queue:false,duration:options.duration,easing:options.easing,complete:done});/*!
 * jQuery UI Effects Size 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *///>>label:Size Effect //>>group:Effects //>>description:Resize an element to a specified width and height. //>>docs:http://api.jqueryui.com/size-effect/ //>>demos:http://jqueryui.com/effect/ var effectsEffectSize=$.effects.define("size",done),function(options{:// Create element var baseline,factor,temp,element=$(this),// Copy for children cProps=[ "fontSize" ],vProps=[ "borderTopWidth","borderBottomWidth","paddingTop","paddingBottom" ],hProps=[ "borderLeftWidth","borderRightWidth","paddingLeft","paddingRight" ],// Set options mode=options.mode,restore=mode!=="effect",scale=options.scale || "both",origin=options.origin || [ "middle","center" ],position=element.css("position"),pos=element.position(),original=$.effects.scaledDimensions(element),from=options.from || original,to=options.to || $.effects.scaledDimensions(element,0);:$.effects.createPlaceholder(element);:if (mode==="show"){temp=from;:from=to;:to=temp}// Set scaling factor factor={from:{y:from.height / original.height,x:from.width / original.width},to:{y:to.height / original.height,x:to.width / original.width};// Scale the css box if (scale==="box" || scale==="both"){:// Vertical props scaling if (factor.from.y!==factor.to.y){from=$.effects.setTransition(element,vProps,factor.from.y,from);:to=$.effects.setTransition(element,vProps,factor.to.y,to)}// Scale the content if (scale==="content" || scale==="both"){:// Vertical props scaling if (factor.from.y!==factor.to.y){from=$.effects.setTransition(element,cProps,factor.from.y,from);:to=$.effects.setTransition(element,cProps,factor.to.y,to)}// Adjust the position properties based on the provided origin points if (origin){:baseline=$.effects.getBaseline(origin,original);:from.top=(original.outerHeight - from.outerHeight) * baseline.y+pos.top;:from.left=(original.outerWidth - from.outerWidth) * baseline.x+pos.left;:to.top=(original.outerHeight - to.outerHeight) * baseline.y+pos.top;:to.left=(original.outerWidth - to.outerWidth) * baseline.x+pos.left}element.css(from);// Animate the children if desired if (scale==="content" || scale==="both"){:vProps=vProps.concat([ "marginTop","marginBottom" ]).concat(cProps);:hProps=hProps.concat([ "marginLeft","marginRight" ]);// Only animate children with width attributes specified // TODO:is this right? should we include anything with css width specified as well element.find("*[width]").each(function(){var child=$(this),childOriginal=$.effects.scaledDimensions(child),childFrom={height:childOriginal.height * factor.from.y,width:childOriginal.width * factor.from.x,outerHeight:childOriginal.outerHeight * factor.from.y,outerWidth:childOriginal.outerWidth * factor.from.x},childTo={height:childOriginal.height * factor.to.y,width:childOriginal.width * factor.to.x,outerHeight:childOriginal.height * factor.to.y,outerWidth:childOriginal.width * factor.to.x};// Vertical props scaling if (factor.from.y!==factor.to.y){:childFrom=$.effects.setTransition(child,vProps,factor.from.y,childFrom);:childTo=$.effects.setTransition(child,vProps,factor.to.y,childTo)}// Horizontal props scaling if (factor.from.x!==factor.to.x){:childFrom=$.effects.setTransition(child,hProps,factor.from.x,childFrom);:childTo=$.effects.setTransition(child,hProps,factor.to.x,childTo)}if (restore){$.effects.saveStyle(child)}// Animate children child.css(childFrom);child.animate(childTo,function(),options.duration,options.easing{// Restore children if (restore){$.effects.restoreStyle(child)},// Animate element.animate(to{queue:false,duration:options.duration,easing:options.easing,complete:function(){var offset=element.offset();:if (to.opacity===0){element.css("opacity",from.opacity)}if (!restore){element .css("position",position==="static" ? "relative":position) .offset(offset);:// Need to save style here so that automatic style restoration // doesn't restore to the original styles from before the animation.
				$.effects.saveStyle( element );
			}

			done();
		}
	} );

} );


/*!
 * jQuery UI Effects Scale 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
//>>label: Scale Effect
//>>group: Effects
//>>description: Grows or shrinks an element and its content.
//>>docs: http://api.jqueryui.com/scale-effect/
//>>demos: http://jqueryui.com/effect/



var effectsEffectScale = $.effects.define( "scale", function( options, done ) {

	// Create element
	var el = $( this ),
		mode = options.mode,
		percent = parseInt( options.percent, 10 ) ||
			( parseInt( options.percent, 10 ) === 0 ? 0 : ( mode !== "effect" ? 0 : 100 ) ),

		newOptions = $.extend( true, {
			from: $.effects.scaledDimensions( el ),
			to: $.effects.scaledDimensions( el, percent, options.direction || "both" ),
			origin: options.origin || [ "middle", "center" ]
		}, options );

	// Fade option to support puff
	if ( options.fade ) {
		newOptions.from.opacity = 1;
		newOptions.to.opacity = 0;
	}

	$.effects.effect.size.call( this, newOptions, done );
} );


/*!
 * jQuery UI Effects Puff 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
//>>label: Puff Effect
//>>group: Effects
//>>description: Creates a puff effect by scaling the element up and hiding it at the same time.
//>>docs: http://api.jqueryui.com/puff-effect/
//>>demos: http://jqueryui.com/effect/



var effectsEffectPuff = $.effects.define( "puff", "hide", function( options, done ) {, options, {
		fade: true,
		percent: parseInt( options.percent, 10 ) || 150
	} );

	$.effects.effect.scale.call( this, newOptions, done );
} );


/*!
 * jQuery UI Effects Pulsate 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
//>>label: Pulsate Effect
//>>group: Effects
//>>description: Pulsates an element n times by changing the opacity to zero and back.
//>>docs: http://api.jqueryui.com/pulsate-effect/
//>>demos: http://jqueryui.com/effect/



var effectsEffectPulsate = $.effects.define( "pulsate", "show", function( options, done ) {
	var element = $( this ),
		mode = options.mode,
		show = mode === "show",
		hide = mode === "hide",
		showhide = show || hide,

		// Showing or hiding leaves off the "last" animation
		anims = ( ( options.times || 5 ) * 2 ) + ( showhide ? 1 : 0 ),
		duration = options.duration / anims,
		animateTo = 0,
		i = 1,
		queuelen = element.queue().length;

	if ( show || !element.is( ":visible" ) ) {
		element.css( "opacity", 0 ).show();
		animateTo = 1;
	}

	// Anims - 1 opacity "toggles"
	for ( ; i < anims; i++ ) {
		element.animate( { opacity: animateTo }, duration, options.easing );
		animateTo = 1 - animateTo;
	}

	element.animate( { opacity: animateTo }, duration, options.easing );

	element.queue( done );

	$.effects.unshift( element, queuelen, anims + 1 );
} );


/*!
 * jQuery UI Effects Shake 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
//>>label: Shake Effect
//>>group: Effects
//>>description: Shakes an element horizontally or vertically n times.
//>>docs: http://api.jqueryui.com/shake-effect/
//>>demos: http://jqueryui.com/effect/



var effectsEffectShake = $.effects.define( "shake", function( options, done ) {,

		queuelen = element.queue().length;

	$.effects.createPlaceholder( element );

	// Animation
	animation[ ref ] = ( positiveMotion ? "-=" : "+=" ) + distance;
	animation1[ ref ] = ( positiveMotion ? "+=" : "-=" ) + distance * 2;
	animation2[ ref ] = ( positiveMotion ? "-=" : "+=" ) + distance * 2;

	// Animate
	element.animate( animation, speed, options.easing );

	// Shakes
	for ( ; i < times; i++ ) {
		element
			.animate( animation1, speed, options.easing )
			.animate( animation2, speed, options.easing );
	}

	element
		.animate( animation1, speed, options.easing )
		.animate( animation, speed / 2, options.easing )
		.queue( done );

	$.effects.unshift( element, queuelen, anims + 1 );
} );


/*!
 * jQuery UI Effects Slide 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
//>>label: Slide Effect
//>>group: Effects
//>>description: Slides an element in and out of the viewport.
//>>docs: http://api.jqueryui.com/slide-effect/
//>>demos: http://jqueryui.com/effect/



var effectsEffectSlide = $.effects.define( "slide", "show", function( options, done ) {
	var startClip, startRef,
		element = $( this ),
		map = {
			up: [ "bottom", "top" ],
			down: [ "top", "bottom" ],
			left: [ "right", "left" ],
			right: [ "left", "right" ]
		};

	$.effects.createPlaceholder( element );

	startClip = element.cssClip();
	startRef = element.position()[ ref ];

	// Define hide animation
	animation[ ref ] = ( positiveMotion ? -1 : 1 ) * distance + startRef;
	animation.clip = element.cssClip();
	animation.clip[ map[ direction ][ 1 ] ] = animation.clip[ map[ direction ][ 0 ] ];

	// Reverse the animation if we're showing if (mode==="show"){element.cssClip(animation.clip);:element.css(ref,animation[ ref ]);:animation.clip=startClip;:animation[ ref ]=startRef},// Actually animate element.animate(animation{queue:false,duration:options.duration,easing:options.easing,complete:done});/*!
 * jQuery UI Effects Transfer 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *///>>label:Transfer Effect //>>group:Effects //>>description:Displays a transfer effect from one element to another. //>>docs:http://api.jqueryui.com/transfer-effect/ //>>demos:http://jqueryui.com/effect/ var effect;if ($.uiBackCompat!==false){effect=$.effects.define("transfer",function(options,done){$(this).transfer(options,done)}var effectsEffectTransfer=effect;/*!
 * jQuery UI Focusable 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *///>>label::focusable Selector //>>group:Core //>>description:Selects elements which can be focused. //>>docs:http://api.jqueryui.com/focusable-selector/ // Selectors $.ui.focusable=function(element,hasTabindex){:var map,mapName,img,focusableIfVisible,fieldset,nodeName=element.nodeName.toLowerCase();:if ("area"===nodeName){map=element.parentNode;:mapName=map.name;:if (!element.href ||!mapName || map.nodeName.toLowerCase()!=="map"){return false}if (/^(input|select|textarea|button|object)$/.test(nodeName)){:focusableIfVisible=!element.disabled;:if (focusableIfVisible){// Form controls within a disabled fieldset are disabled. // However,controls within the fieldset's legend do not get disabled.
			// Since controls generally aren't placed inside legends,we skip // this portion of the check. fieldset=$(element).closest("fieldset")[ 0 ];:if (fieldset){focusableIfVisible=!fieldset.disabled}else if ("a"===nodeName){focusableIfVisible=element.href || hasTabindex},_unbindFormResetHandler:function(){if (!this.form.length){return}1);if (instances.length),instances),var instances=this.form.data("ui-form-reset-instances");instances.splice($.inArray(this{this.form.data("ui-form-reset-instances",instances)};/*!
 * jQuery UI Support for jQuery core 1.7.x 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 *///>>label:jQuery 1.7 Support //>>group:Core //>>description:Support version 1.7.x of jQuery core // Support:jQuery 1.7 only // Not a great way to check versions,but since we only support 1.7+ and only // need to detect <1.8,this is a simple check that should suffice. Checking // for "1.7." would be a bit safer,but the version string is 1.7,not 1.7 // and we'll never reach 1.70.0 (if we do, we certainly won't be supporting // 1.7 anymore). See #11197 for why we're not using feature detection.
if ( $.fn.jquery.substring( 0, 3 ) === "1.7" ) {

	// Setters for .innerWidth(), .innerHeight(), .outerWidth(), .outerHeight()
	// Unlike jQuery Core 1.8+, these only support numeric values to set the
	// dimensions in pixels
	$.each( [ "Width", "Height" ], function( i, name ) {
		var side = name === "Width" ? [ "Left", "Right" ] : [ "Top", "Bottom" ],
			type = name.toLowerCase(),
			orig = {
				innerWidth: $.fn.innerWidth,
				innerHeight: $.fn.innerHeight,
				outerWidth: $.fn.outerWidth,
				outerHeight: $.fn.outerHeight
			};

		function reduce( elem, size, border, margin ) {
			$.each( side, function() {
				size -= parseFloat( $.css( elem, "padding" + this ) ) || 0;
				if ( border ) {
					size -= parseFloat( $.css( elem, "border" + this + "Width" ) ) || 0;
				}
				if ( margin ) {
					size -= parseFloat( $.css( elem, "margin" + this ) ) || 0;
				}
			} );
			return size;
		}

		$.fn[ "inner" + name ] = function( size ) {
			if ( size === undefined ) {
				return orig[ "inner" + name ].call( this );
			}

			return this.each( function() {
				$( this ).css( type, reduce( this, size ) + "px" );
			} );
		};

		$.fn[ "outer" + name ] = function( size, margin ) {
			if ( typeof size !== "number" ) {
				return orig[ "outer" + name ].call( this, size );
			}

			return this.each( function() {
				$( this ).css( type, reduce( this, size, true, margin ) + "px" );
			} );
		};
	} );

	$.fn.addBack = function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	};
}

;
/*!
 * jQuery UI Keycode 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
//>>label: Keycode
//>>group: Core
//>>description: Provide keycodes as keynames
//>>docs: http://api.jqueryui.com/jQuery.ui.keyCode/


var keycode = $.ui.keyCode = {
	BACKSPACE: 8,
	COMMA: 188,
	DELETE: 46,
	DOWN: 40,
	END: 35,
	ENTER: 13,
	ESCAPE: 27,
	HOME: 36,
	LEFT: 37,
	PAGE_DOWN: 34,
	PAGE_UP: 33,
	PERIOD: 190,
	RIGHT: 39,
	SPACE: 32,
	TAB: 9,
	UP: 38
};




// Internal use only
var escapeSelector = $.ui.escapeSelector = ( function() {~])/g;return function(selector){return selector.replace(selectorEscape,"\\$1")})();/*!
 * jQuery UI Labels 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *///>>label:labels //>>group:Core //>>description:Find all the labels associated with a given input //>>docs:http://api.jqueryui.com/labels/ var labels=$.fn.labels=function(){:var ancestor,selector,id,labels,ancestors;:// Check control.labels first if (this[ 0 ].labels && this[ 0 ].labels.length){return this.pushStack(this[ 0 ].labels)}// Support:IE <=11,Android <=2.3 only // Above browsers do not support control.labels. Everything below is to support them // as well as document fragments. control.labels does not work on document fragments labels=this.eq(0).parents("label");// Look for the label based on the id id=this.attr("id");if (id),FF <=37{// We don't search against the document in case the element
		// is disconnected from the DOM
		ancestor = this.eq( 0 ).parents().last();

		// Get a full set of top level ancestors
		ancestors = ancestor.add( ancestor.length ? ancestor.siblings() : this.siblings() );

		// Create a selector for the label based on the id
		selector = "label[for='" + $.ui.escapeSelector( id ) + "']";

		labels = labels.add( ancestors.find( selector ).addBack( selector ) );

	}

	// Return whatever we have found for labels
	return this.pushStack( labels );
};


/*!
 * jQuery UI Scroll Parent 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
//>>label: scrollParent
//>>group: Core
//>>description: Get the closest ancestor element that is scrollable.
//>>docs: http://api.jqueryui.com/scrollParent/



var scrollParent = $.fn.scrollParent = function( includeHidden ) {
	var position = this.css( "position" ),
		excludeStaticParent = position === "absolute",
		overflowRegex = includeHidden ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
		scrollParent = this.parents().filter( function() {
			var parent = $( this );
			if ( excludeStaticParent && parent.css( "position" ) === "static" ) {
				return false;
			}
			return overflowRegex.test( parent.css( "overflow" ) + parent.css( "overflow-y" ) +
				parent.css( "overflow-x" ) );
		} ).eq( 0 );

	return position === "fixed" || !scrollParent.length ?
		$( this[ 0 ].ownerDocument || document ) :
		scrollParent;
};


/*!
 * jQuery UI Tabbable 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
//>>label: :tabbable Selector
//>>group: Core
//>>description: Selects elements which can be tabbed to.
//>>docs: http://api.jqueryui.com/tabbable-selector/



var tabbable = $.extend( $.expr[ ":" ], {
	tabbable: function( element ) {
		var tabIndex = $.attr( element, "tabindex" ),
			hasTabindex = tabIndex != null;
		return ( !hasTabindex || tabIndex >= 0 ) && $.ui.focusable( element, hasTabindex );
	}
} );


/*!
 * jQuery UI Unique ID 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
//>>label: uniqueId
//>>group: Core
//>>description: Functions to generate and remove uniqueId's //>>docs:http://api.jqueryui.com/uniqueId/ var uniqueId=$.fn.extend({uniqueId:(function(){var uuid=0;:return function(){return this.each(function(){if (!this.id){this.id="ui-id-"+(++uuid)})(),removeUniqueId:function(){return this.each(function(){if (/^ui-id-\d+$/.test(this.id)){$(this).removeAttr("id")});/*!
 * jQuery UI Accordion 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */,//>>label:Accordion //>>group:Widgets // jscs:disable maximumLineLength //>>description:Displays collapsible content panels for presenting information in a limited amount of space. // jscs:enable maximumLineLength //>>docs:http://api.jqueryui.com/accordion/ //>>demos:http://jqueryui.com/accordion/ //>>css.structure:../../themes/base/core.css //>>css.structure:../../themes/base/accordion.css //>>css.theme:../../themes/base/theme.css var widgetsAccordion=$.widget("ui.accordion"{version:"1.12.1",options:{,classes:{"ui-accordion-header":"ui-corner-top","ui-accordion-header-collapsed":"ui-corner-all","ui-accordion-content":"ui-corner-bottom"},collapsible:false,event:"click",header:"> li > :first-child, > :not(li):even",heightStyle:"auto",icons:{activeHeader:"ui-icon-triangle-1-s",header:"ui-icon-triangle-1-e"},hideProps:{borderTopWidth:"hide",borderBottomWidth:"hide",paddingTop:"hide",paddingBottom:"hide",height:"hide"},showProps:{borderTopWidth:"show",borderBottomWidth:"show",paddingTop:"show",paddingBottom:"show",height:"show"}currentIndex=this.headers.index(event.target),length=this.headers.length,toFocus=false;switch (event.keyCode),var keyCode=$.ui.keyCode{case keyCode.RIGHT:case keyCode.DOWN:toFocus=this.headers[ (currentIndex+1) % length ];case keyCode.LEFT:case keyCode.UP:toFocus=this.headers[ (currentIndex - 1+length) % length ];case keyCode.SPACE:case keyCode.ENTER:this._eventHandler(event);case keyCode.HOME:toFocus=this.headers[ 0 ];case keyCode.END:toFocus=this.headers[ length - 1 ];:break}if (toFocus){:$(event.target).attr("tabIndex",-1);:$(toFocus).attr("tabIndex",0);:$(toFocus).trigger("focus");:event.preventDefault()},_panelKeyDown:function(event){if (event.keyCode===$.ui.keyCode.UP && event.ctrlKey){$(event.currentTarget).prev().trigger("focus")}else if (options.active===false){:this._activate(0);:// was active,but active panel is gone}else if (this.active.length &&!$.contains(this.element[ 0 ],this.active[ 0 ])){:// all remaining panel are disabled if (this.headers.length===this.headers.find(".ui-state-disabled").length){options.active=false;:this.active=$();:// activate previous panel},_processPanels:function(){:var prevHeaders=this.headers,prevPanels=this.panels;:this.headers=this.element.find(this.options.header);:this._addClass(this.headers,"ui-accordion-header ui-accordion-header-collapsed","ui-state-default");:this.panels=this.headers.next().filter(":not(.ui-accordion-content-active)").hide();:this._addClass(this.panels,"ui-accordion-content","ui-helper-reset ui-widget-content");:// Avoid memory leaks (#10056) if (prevPanels){this._off(prevHeaders.not(this.headers));:this._off(prevPanels.not(this.panels))},_refresh:function(){:var maxHeight,options=this.options,heightStyle=options.heightStyle,parent=this.element.parent();:this.active=this._findActive(options.active);:this._addClass(this.active,"ui-accordion-header-active","ui-state-active") ._removeClass(this.active,"ui-accordion-header-collapsed");:this._addClass(this.active.next(),"ui-accordion-content-active");:this.active.next().show();:this.headers .attr("role","tab") .each(function(){var header=$(this),headerId=header.uniqueId().attr("id"),panel=header.next(),panelId=panel.uniqueId().attr("id");:header.attr("aria-controls",panelId);:panel.attr("aria-labelledby",headerId)}) .next() .attr("role","tabpanel");this.headers .not(this.active) .attr({"aria-selected":"false","aria-expanded":"false",tabIndex:-1}) .hide();// Make sure at least one header is in the tab order if (!this.active.length){this.headers.eq(0).attr("tabIndex",0)}else{this.active.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0}) .next() .attr({"aria-hidden":"false"}this._createIcons();this._setupEvents(options.event);if (heightStyle==="fill"){:maxHeight=parent.height();:this.element.siblings(":visible").each(function(){var elem=$(this),position=elem.css("position");:if (position==="absolute" || position==="fixed"){return});this.headers.each(function(){maxHeight -=$(this).outerHeight(true)});this.headers.next() .each(function(){$(this).height(Math.max(0,maxHeight - $(this).innerHeight()+$(this).height()))}else if (heightStyle==="auto"){:maxHeight=0;:this.headers.next() .each(function(){var isVisible=$(this).is(":visible");:if (!isVisible){$(this).show()}$(this).css("height","").height());if (!isVisible),maxHeight=Math.max(maxHeight{$(this).hide()},_activate:function(index){:var active=this._findActive(index)[ 0 ];:// Trying to activate the already active panel if (active===this.active[ 0 ]){return}// Trying to collapse,simulate a click on the currently active header active=active || this.active[ 0 ];this._eventHandler({target:active,currentTarget:active,preventDefault:$.noop},_findActive:function(selector){return typeof selector==="number" ? this.headers.eq(selector):$()},_setupEvents:function(event){var events={keydown:"_keydown"};if (event){$.each(event.split(" "),function(index,eventName){events[ eventName ]="_eventHandler"},events);this._on(this.headers.next(),this._off(this.headers.add(this.headers.next()));this._on(this.headers{keydown:"_panelKeyDown"},_eventHandler:function(event){var activeChildren,clickedChildren,options=this.options,active=this.active,clicked=$(event.currentTarget),clickedIsActive=clicked[ 0 ]===active[ 0 ],collapsing=clickedIsActive && options.collapsible,toShow=collapsing ? $() :clicked.next(),toHide=active.next(),eventData={oldHeader:active,oldPanel:toHide,newHeader:collapsing ? $():clicked,newPanel:toShow};event.preventDefault();if (// click on active header,but not collapsible (clickedIsActive &&!options.collapsible) || // allow canceling activation (this._trigger("beforeActivate",event,eventData)===false)){return}"ui-accordion-header-active","ui-state-active");if (options.icons),options.active=collapsing ? false:this.headers.index(clicked);// When the call to ._toggle() comes after the class changes // it causes a very odd bug in IE 8 (see #6720) this.active=clickedIsActive ? $():clicked;this._toggle(eventData);// Switch classes // corner classes on the previously active header stay after the animation this._removeClass(active{:activeChildren=active.children(".ui-accordion-header-icon");:this._removeClass(activeChildren,null,options.icons.activeHeader) ._addClass(activeChildren,null,options.icons.header)}if (!clickedIsActive){:this._removeClass(clicked,"ui-accordion-header-collapsed") ._addClass(clicked,"ui-accordion-header-active","ui-state-active");:if (options.icons){clickedChildren=clicked.children(".ui-accordion-header-icon");:this._removeClass(clickedChildren,null,options.icons.header) ._addClass(clickedChildren,null,options.icons.activeHeader)},_toggle:function(data){var toShow=data.newPanel,toHide=this.prevShow.length ? this.prevShow:data.oldPanel;:// Handle activating a panel during the animation for another activation this.prevShow.add(this.prevHide).stop(true,true);:this.prevShow=toShow;:this.prevHide=toHide;:if (this.options.animate){this._animate(toShow,toHide,data)}toHide.attr({"aria-hidden":"true"});toHide.prev().attr({"aria-selected":"false","aria-expanded":"false"});// if we're switching panels, remove the old header from the tab order
		// if we're opening from collapsed state,activate the first item var item=this.active || this.element.find(this.options.items).eq(0);if (!keepActiveItem),keep it active // If not,remove the previous header from the tab order // if we're collapsing, then keep the collapsing header in the tab order
		if ( toShow.length && toHide.length ) {
			toHide.prev().attr( {
				"tabIndex": -1,
				"aria-expanded": "false"
			} );
		} else if ( toShow.length ) {
			this.headers.filter( function() {
				return parseInt( $( this ).attr( "tabIndex" ), 10 ) === 0;
			} )
				.attr( "tabIndex", -1 );
		}

		toShow
			.attr( "aria-hidden", "false" )
			.prev()
				.attr( {
					"aria-selected": "true",
					"aria-expanded": "true",
					tabIndex: 0
				} );
	},

	_animate: function( toShow, toHide, data ) {,
			options = down && animate.down || animate,
			complete = function() {
				that._toggleComplete( data );
			};

		if ( typeof options === "number" ) {
			duration = options;
		}
		if ( typeof options === "string" ) {
			easing = options;
		}

		// fall back from options to animation in case of partial down settings
		easing = easing || options.easing || animate.easing;
		duration = duration || options.duration || animate.duration;

		if ( !toHide.length ) {
			return toShow.animate( this.showProps, duration, easing, complete );
		}
		if ( !toShow.length ) {
			return toHide.animate( this.hideProps, duration, easing, complete );
		}

		total = toShow.show().outerHeight();
		toHide.animate( this.hideProps, {
			duration: duration,
			easing: easing,
			step: function( now, fx ) {
				fx.now = Math.round( now );
			}
		} );
		toShow
			.hide()
			.animate( this.showProps, {
				duration: duration,
				easing: easing,
				complete: complete,
				step: function( now, fx ) {
					fx.now = Math.round( now );
					if ( fx.prop !== "height" ) {
						if ( boxSizing === "content-box" ) {
							adjust += fx.now;
						}
					} else if ( that.options.heightStyle !== "content" ) {
						fx.now = Math.round( total - toHide.outerHeight() - adjust );
						adjust = 0;
					}
				}
			} );
	},

	_toggleComplete: function( data ) {
		var toHide = data.oldPanel,
			prev = toHide.prev();

		this._removeClass( toHide, "ui-accordion-content-active" );
		this._removeClass( prev, "ui-accordion-header-active" )
			._addClass( prev, "ui-accordion-header-collapsed" );

		// Work around for rendering bug in IE (#5421)
		if ( toHide.length ) {
			toHide.parent()[ 0 ].className = toHide.parent()[ 0 ].className;
		}
		this._trigger( "activate", null, data );
	}
} );



var safeActiveElement = $.ui.safeActiveElement = function( document ) {
	var activeElement;

	// Support: IE 9 only
	// IE9 throws an "Unspecified error" accessing document.activeElement from an <iframe>
	try {
		activeElement = document.activeElement;
	} catch ( error ) {
		activeElement = document.body;
	}

	// Support: IE 9 - 11 only
	// IE may return null instead of an element
	// Interestingly, this only seems to occur when NOT in an iframe
	if ( !activeElement ) {
		activeElement = document.body;
	}

	// Support: IE 11 only
	// IE11 returns a seemingly empty object in some cases when accessing
	// document.activeElement from an <iframe>
	if ( !activeElement.nodeName ) {
		activeElement = document.body;
	}

	return activeElement;
};


/*!
 * jQuery UI Menu 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
//>>label: Menu
//>>group: Widgets
//>>description: Creates nestable menus.
//>>docs: http://api.jqueryui.com/menu/
//>>demos: http://jqueryui.com/menu/
//>>css.structure: ../../themes/base/core.css
//>>css.structure: ../../themes/base/menu.css
//>>css.theme: ../../themes/base/theme.css



var widgetsMenu = $.widget( "ui.menu", {
	version: "1.12.1",
	defaultElement: "<ul>",
	delay: 300,
	options: {
		icons: {
			submenu: "ui-icon-caret-1-e"
		},
		items: "> *",
		menus: "ul",
		position: {
			my: "left top",
			at: "right top"
		},
		role: "menu",

		// Callbacks
		blur: null,
		focus: null,
		select: null
	},

	_create: function() {
		this.activeMenu = this.element;

		// Flag used to prevent firing of the click handler
		// as the event bubbles up through nested menus
		this.mouseHandled = false;
		this.element
			.uniqueId()
			.attr( {
				role: this.options.role,
				tabIndex: 0
			} );

		this._addClass( "ui-menu", "ui-widget ui-widget-content" );
		this._on( {

			// Prevent focus from sticking to links inside menu after clicking
			// them (focus should always stay on UL during navigation).
			"mousedown .ui-menu-item": function( event ) {
				event.preventDefault();
			},
			"click .ui-menu-item": function( event ) {
				var target = $( event.target );
				var active = $( $.ui.safeActiveElement( this.document[ 0 ] ) );
				if ( !this.mouseHandled && target.not( ".ui-state-disabled" ).length ) {
					this.select( event );

					// Only set the mouseHandled flag if the event will bubble, see #9469.
					if ( !event.isPropagationStopped() ) {
						this.mouseHandled = true;
					}

					// Open submenu on click
					if ( target.has( ".ui-menu" ).length ) {
						this.expand( event );
					} else if ( !this.element.is( ":focus" ) &&
							active.closest( ".ui-menu" ).length ) {

						// Redirect focus to the menu
						this.element.trigger( "focus", [ true ] );

						// If the active item is on the top level, let it stay active.
						// Otherwise, blur the active item since it is no longer visible.
						if ( this.active && this.active.parents( ".ui-menu" ).length === 1 ) {
							clearTimeout( this.timer );
						}
					}
				}
			},
			"mouseenter .ui-menu-item": function( event ) {

				// Ignore mouse events while typeahead is active, see #10458.
				// Prevents focusing the wrong item when typeahead causes a scroll while the mouse
				// is over an item in the menu
				if ( this.previousFilter ) {
					return;
				}

				var actualTarget = $( event.target ).closest( ".ui-menu-item" ),
					target = $( event.currentTarget );

				// Ignore bubbled events on parent items, see #11641
				if ( actualTarget[ 0 ] !== target[ 0 ] ) {
					return;
				}

				// Remove ui-state-active class from siblings of the newly focused menu item
				// to avoid a jump caused by adjacent elements both having a class with a border
				this._removeClass( target.siblings().children( ".ui-state-active" ),
					null, "ui-state-active" );
				this.focus( event, target );
			},
			mouseleave: "collapseAll",
			"mouseleave .ui-menu": "collapseAll",
			focus: function( event, keepActiveItem ) {

				// If there's already an active item{this.focus(event,item)},);this.refresh();// Clicks outside of a menu collapse any open menus this._on(this.document{click:function(event){if (this._closeOnDocumentClick(event)){this.collapseAll(event)},_keydown:function(event){switch (event.keyCode){case $.ui.keyCode.PAGE_UP:this.previousPage(event);case $.ui.keyCode.PAGE_DOWN:this.nextPage(event);case $.ui.keyCode.HOME:this._move("first","first",event);case $.ui.keyCode.END:this._move("last","last",event);case $.ui.keyCode.UP:this.previous(event);case $.ui.keyCode.DOWN:this.next(event);case $.ui.keyCode.LEFT:this.collapse(event);:break;case $.ui.keyCode.RIGHT:if (this.active &&!this.active.is(".ui-state-disabled")){this.expand(event)}break;case $.ui.keyCode.ENTER:case $.ui.keyCode.SPACE:this._activate(event);break;case $.ui.keyCode.ESCAPE:this.collapse(event);break;default:preventDefault=false;prev=this.previousFilter || "";skip=false;// Support number pad values character=event.keyCode >=96 && event.keyCode <=105 ? (event.keyCode - 96).toString():String.fromCharCode(event.keyCode);clearTimeout(this.filterTimer);if (character===prev){skip=true}match=this._filterMenuItems(character);match=skip && match.index(this.active.next())!==-1 ? this.active.nextAll(".ui-menu-item"):match;// If no matches on the current filter,reset to the last character pressed // to move down the menu to the first item that starts with that character if (!match.length){:character=String.fromCharCode(event.keyCode);:match=this._filterMenuItems(character)}if (match.length){:this.focus(event,match);:this.previousFilter=character;:this.filterTimer=this._delay(function(){delete this.previousFilter}if (preventDefault){event.preventDefault()},refresh:function(){// Initialize nested menus newSubmenus=submenus.filter(":not(.ui-menu)") .hide() .attr({role:this.options.role,"aria-hidden":"true","aria-expanded":"false"}) .each(function(){:var menu=$(this),item=menu.prev(),submenuCaret=$("<span>").data("ui-menu-submenu-caret",true);:that._addClass(submenuCaret,"ui-menu-icon","ui-icon "+icon);:item .attr("aria-haspopup","true") .prepend(submenuCaret);:menu.attr("aria-labelledby",item.attr("id"))});this._addClass(newSubmenus,"ui-menu","ui-widget ui-widget-content ui-front");menus=submenus.add(this.element);items=menus.find(this.options.items);// Initialize menu-items containing spaces and/or dashes only as dividers items.not(".ui-menu-item").each(function(){:var item=$(this);:if (that._isDivider(item)){that._addClass(item,"ui-menu-divider","ui-widget-content")});// Don't refresh list items that are already adapted
		newItems = items.not( ".ui-menu-item, .ui-menu-divider" );
		newWrappers = newItems.children()
			.not( ".ui-menu" )
				.uniqueId()
				.attr( {
					tabIndex: -1,
					role: this._itemRole()
				} );
		this._addClass( newItems, "ui-menu-item" )
			._addClass( newWrappers, "ui-menu-item-wrapper" );

		// Add aria-disabled attribute to any disabled menu item
		items.filter( ".ui-state-disabled" ).attr( "aria-disabled", "true" );

		// If the active item has been removed, blur the menu
		if ( this.active && !$.contains( this.element[ 0 ], this.active[ 0 ] ) ) {
			this.blur();
		}
	},

	_itemRole: function() {
		return {
			menu: "menuitem",
			listbox: "option"
		}[ this.options.role ];
	},

	_setOption: function( key, value ) {
		if ( key === "icons" ) {
			var icons = this.element.find( ".ui-menu-icon" );
			this._removeClass( icons, null, this.options.icons.submenu )
				._addClass( icons, null, value.submenu );
		}
		this._super( key, value );
	},

	_setOptionDisabled: function( value ) {
		this._super( value );

		this.element.attr( "aria-disabled", String( value ) );
		this._toggleClass( null, "ui-state-disabled", !!value );
	},

	focus: function( event, item ) {
		var nested, focused, activeParent;
		this.blur( event, event && event.type === "focus" );

		this._scrollIntoView( item );

		this.active = item.first();

		focused = this.active.children( ".ui-menu-item-wrapper" );
		this._addClass( focused, null, "ui-state-active" );

		// Only update aria-activedescendant if there's a role // otherwise we assume focus is managed elsewhere if (this.options.role){this.element.attr("aria-activedescendant",focused.attr("id"))}// Highlight active parent menu item,"ui-state-active");if (event && event.type==="keydown"),if any activeParent=this.active .parent() .closest(".ui-menu-item") .children(".ui-menu-item-wrapper");this._addClass(activeParent,null{this._close()}nested=item.children(".ui-menu");if (nested.length && event && (/^mouse/.test(event.type))){this._startOpening(nested)},event,this.activeMenu=item.parent();this._trigger("focus"{item:item},_scrollIntoView:function(item){:var borderTop,paddingTop,offset,scroll,elementHeight,itemHeight;:if (this._hasScroll()){borderTop=parseFloat($.css(this.activeMenu[ 0 ],"borderTopWidth")) || 0;:paddingTop=parseFloat($.css(this.activeMenu[ 0 ],"paddingTop")) || 0;:offset=item.offset().top - this.activeMenu.offset().top - borderTop - paddingTop;:scroll=this.activeMenu.scrollTop();:elementHeight=this.activeMenu.height();:itemHeight=item.outerHeight();:if (offset < 0){this.activeMenu.scrollTop(scroll+offset)}else if (offset+itemHeight>elementHeight){this.activeMenu.scrollTop(scroll+offset - elementHeight+itemHeight)},blur:function(event,fromFocus){if (!fromFocus){clearTimeout(this.timer)}if (!this.active){return},"ui-state-active");this._trigger("blur",event,null,this._removeClass(this.active.children(".ui-menu-item-wrapper"){item:this.active},_startOpening:function(submenu){:clearTimeout(this.timer);:// Don't open if already open fixes a Firefox bug that caused a .5 pixel
		// shift in the submenu position when mousing over the caret icon
		if ( submenu.attr( "aria-hidden" ) !== "true" ) {
			return;
		}

		this.timer = this._delay( function() {
			this._close();
			this._open( submenu );
		}, this.delay );
	},

	_open: function( submenu ) {
		var position = $.extend( {
			of: this.active
		}, this.options.position );

		clearTimeout( this.timer );
		this.element.find( ".ui-menu" ).not( submenu.parents( ".ui-menu" ) )
			.hide()
			.attr( "aria-hidden", "true" );

		submenu
			.show()
			.removeAttr( "aria-hidden" )
			.attr( "aria-expanded", "true" )
			.position( position );
	},

	collapseAll: function( event, all ) {
		clearTimeout( this.timer );
		this.timer = this._delay( function() {

			// If we were passed an event, look for the submenu that contains the event
			var currentMenu = all ? this.element :
				$( event && event.target ).closest( this.element.find( ".ui-menu" ) );

			// If we found no valid submenu ancestor, use the main menu to close all
			// sub menus anyway
			if ( !currentMenu.length ) {
				currentMenu = this.element;
			}

			this._close( currentMenu );

			this.blur( event );

			// Work around active item staying active after menu is blurred
			this._removeClass( currentMenu.find( ".ui-state-active" ), null, "ui-state-active" );

			this.activeMenu = currentMenu;
		}, this.delay );
	},

	// With no arguments, closes the currently active menu - if nothing is active
	// it closes all menus.  If passed an argument, it will search for menus BELOW
	_close: function( startMenu ) {
		if ( !startMenu ) {
			startMenu = this.active ? this.active.parent() : this.element;
		}

		startMenu.find( ".ui-menu" )
			.hide()
			.attr( "aria-hidden", "true" )
			.attr( "aria-expanded", "false" );
	},

	_closeOnDocumentClick: function( event ) {
		return !$( event.target ).closest( ".ui-menu" ).length;
	},

	_isDivider: function( item ) {

		// Match hyphen, em dash, en dash
		return !/[^\-\u2014\u2013\s]/.test( item.text() );
	},

	collapse: function( event ) {
		var newItem = this.active &&
			this.active.parent().closest( ".ui-menu-item", this.element );
		if ( newItem && newItem.length ) {
			this._close();
			this.focus( event, newItem );
		}
	},

	expand: function( event ) {
		var newItem = this.active &&
			this.active
				.children( ".ui-menu " )
					.find( this.options.items )
						.first();

		if ( newItem && newItem.length ) {
			this._open( newItem.parent() );

			// Delay so Firefox will not hide activedescendant change in expanding submenu from AT
			this._delay( function() {
				this.focus( event, newItem );
			} );
		}
	},

	next: function( event ) {
		this._move( "next", "first", event );
	},

	previous: function( event ) {
		this._move( "prev", "last", event );
	},

	isFirstItem: function() {
		return this.active && !this.active.prevAll( ".ui-menu-item" ).length;
	},

	isLastItem: function() {
		return this.active && !this.active.nextAll( ".ui-menu-item" ).length;
	},

	_move: function( direction, filter, event ) {
		var next;
		if ( this.active ) {
			if ( direction === "first" || direction === "last" ) {
				next = this.active
					[ direction === "first" ? "prevAll" : "nextAll" ]( ".ui-menu-item" )
					.eq( -1 );
			} else {
				next = this.active
					[ direction + "All" ]( ".ui-menu-item" )
					.eq( 0 );
			}
		}
		if ( !next || !next.length || !this.active ) {
			next = this.activeMenu.find( this.options.items )[ filter ]();
		}

		this.focus( event, next );
	},

	nextPage: function( event ) {
		var item, base, height;

		if ( !this.active ) {
			this.next( event );
			return;
		}
		if ( this.isLastItem() ) {
			return;
		}
		if ( this._hasScroll() ) {
			base = this.active.offset().top;
			height = this.element.height();
			this.active.nextAll( ".ui-menu-item" ).each( function() {
				item = $( this );
				return item.offset().top - base - height < 0;
			} );

			this.focus( event, item );
		} else {
			this.focus( event, this.activeMenu.find( this.options.items )
				[ !this.active ? "first" : "last" ]() );
		}
	},

	previousPage: function( event ) {
		var item, base, height;
		if ( !this.active ) {
			this.next( event );
			return;
		}
		if ( this.isFirstItem() ) {
			return;
		}
		if ( this._hasScroll() ) {
			base = this.active.offset().top;
			height = this.element.height();
			this.active.prevAll( ".ui-menu-item" ).each( function() {
				item = $( this );
				return item.offset().top - base + height > 0;
			} );

			this.focus( event, item );
		} else {
			this.focus( event, this.activeMenu.find( this.options.items ).first() );
		}
	},

	_hasScroll: function() {
		return this.element.outerHeight() < this.element.prop( "scrollHeight" );
	},

	select: function( event ) {

		// TODO: It should never be possible to not have an active item at this
		// point, but the tests don't trigger mouseenter before click. this.active=this.active || $(event.target).closest(".ui-menu-item");var ui={item:this.active};if (!this.active.has(".ui-menu").length){this.collapseAll(event,true)},_filterMenuItems:function(character){()*+?.,\\\^$|#\s]/g,"\\$&"),"i");return this.activeMenu .find(this.options.items) // Only match on items,not dividers or other content (#10571) .filter(".ui-menu-item") .filter(function(),regex=new RegExp("^"+escapedCharacter{return regex.test($.trim($(this).children(".ui-menu-item-wrapper").text()))});/*!
 * jQuery UI Autocomplete 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */,//>>label:Autocomplete //>>group:Widgets //>>description:Lists suggested words as the user is typing. //>>docs:http://api.jqueryui.com/autocomplete/ //>>demos:http://jqueryui.com/autocomplete/ //>>css.structure:../../themes/base/core.css //>>css.structure:../../themes/base/autocomplete.css //>>css.theme:../../themes/base/theme.css $.widget("ui.autocomplete"{version:"1.12.1",defaultElement:"<input>",options:{appendTo:null,autoFocus:false,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},_create:function(),pending:0,requestIndex:0{this.valueMethod=this.element[ isTextarea || isInput ? "val":"text" ];this._on(this.element,{keydown:function(event){if (this.element.prop("readOnly")){suppressKeyPress=true;:suppressInput=true;:suppressKeyPressRepeat=true;:return}suppressKeyPress=false;suppressInput=false;suppressKeyPressRepeat=false;var keyCode=$.ui.keyCode;switch (event.keyCode){case keyCode.PAGE_UP:suppressKeyPress=true;case keyCode.PAGE_DOWN:suppressKeyPress=true;case keyCode.UP:suppressKeyPress=true;case keyCode.DOWN:suppressKeyPress=true;case keyCode.ENTER:// when menu is open and has focus if (this.menu.active){// #6055 - Opera still allows the keypress to occur // which causes forms to submit suppressKeyPress=true;:event.preventDefault();:this.menu.select(event)}break;case keyCode.TAB:if (this.menu.active){this.menu.select(event)}break;case keyCode.ESCAPE:if (this.menu.element.is(":visible")){if (!this.isMultiLine){this._value(this.term)},keypress:function(event){:if (suppressKeyPress){suppressKeyPress=false;:if (!this.isMultiLine || this.menu.element.is(":visible")){event.preventDefault()}if (suppressKeyPressRepeat){return}// Replicate some key handlers to allow them to repeat in Firefox and Opera var keyCode=$.ui.keyCode;switch (event.keyCode){case keyCode.PAGE_UP:this._move("previousPage",event);case keyCode.PAGE_DOWN:this._move("nextPage",event);case keyCode.UP:this._keyEvent("previous",event);case keyCode.DOWN:this._keyEvent("next",event);:break},input:function(event){:if (suppressInput){suppressInput=false;:event.preventDefault();:return});this._initSource();this.menu=$("<ul>") .appendTo(this._appendTo()) .menu({// disable ARIA support,the live region takes care of that role:null},) .hide() .menu("instance");this._addClass(this.menu.element,"ui-autocomplete","ui-front");this._on(this.menu.element{mousedown:function(event){// prevent moving focus out of the text field event.preventDefault();:// IE doesn't prevent moving focus even with event.preventDefault()
				// so we set a flag to know when we should ignore the blur event
				this.cancelBlur = true;
				this._delay( function() {
					delete this.cancelBlur;

					// Support: IE 8 only
					// Right clicking a menu item or selecting text from the menu items will
					// result in focus moving out of the input. However, we've already received // and ignored the blur event because of the cancelBlur flag set above. So // we restore focus to ensure that the menu closes properly based on the user's
					// next actions.
					if ( this.element[ 0 ] !== $.ui.safeActiveElement( this.document[ 0 ] ) ) {
						this.element.trigger( "focus" );
					}
				} );
			},
			menufocus: function( event, ui ) {
				var label, item;

				// support: Firefox
				// Prevent accidental activation of menu items in Firefox (#7024 #9118)
				if ( this.isNewMenu ) {
					this.isNewMenu = false;
					if ( event.originalEvent && /^mouse/.test( event.originalEvent.type ) ) {
						this.menu.blur();

						this.document.one( "mousemove", function() {
							$( event.target ).trigger( event.originalEvent );
						} );

						return;
					}
				}

				item = ui.item.data( "ui-autocomplete-item" );
				if ( false !== this._trigger( "focus", event, { item: item } ) ) {

					// use value to match what will end up in the input, if it was a key event
					if ( event.originalEvent && /^key/.test( event.originalEvent.type ) ) {
						this._value( item.value );
					}
				}

				// Announce the value in the liveRegion
				label = ui.item.attr( "aria-label" ) || item.value;
				if ( label && $.trim( label ).length ) {
					this.liveRegion.children().hide();
					$( "<div>" ).text( label ).appendTo( this.liveRegion );
				}
			},
			menuselect: function( event, ui ) {
				var item = ui.item.data( "ui-autocomplete-item" ),
					previous = this.previous;

				// Only trigger when focus was lost (click on menu)
				if ( this.element[ 0 ] !== $.ui.safeActiveElement( this.document[ 0 ] ) ) {
					this.element.trigger( "focus" );
					this.previous = previous;

					// #6109 - IE triggers two focus events and the second
					// is asynchronous, so we need to reset the previous
					// term synchronously and asynchronously :-(
					this._delay( function() {
						this.previous = previous;
						this.selectedItem = item;
					} );
				}

				if ( false !== this._trigger( "select", event, { item: item } ) ) {
					this._value( item.value );
				}

				// reset the term after the select event
				// this allows custom select handling to work properly
				this.term = this._value();

				this.close( event );
				this.selectedItem = item;
			}
		} );

		this.liveRegion = $( "<div>", {
			role: "status",
			"aria-live": "assertive",
			"aria-relevant": "additions"
		} )
			.appendTo( this.document[ 0 ].body );

		this._addClass( this.liveRegion, null, "ui-helper-hidden-accessible" );

		// Turning off autocomplete prevents the browser from remembering the
		// value when navigating through history, so we re-enable autocomplete
		// if the page is unloaded before the widget is destroyed. #7790
		this._on( this.window, {
			beforeunload: function() {
				this.element.removeAttr( "autocomplete" );
			}
		} );
	},

	_destroy: function() {
		clearTimeout( this.searching );
		this.element.removeAttr( "autocomplete" );
		this.menu.element.remove();
		this.liveRegion.remove();
	},

	_setOption: function( key, value ) {
		this._super( key, value );
		if ( key === "source" ) {
			this._initSource();
		}
		if ( key === "appendTo" ) {
			this.menu.element.appendTo( this._appendTo() );
		}
		if ( key === "disabled" && value && this.xhr ) {
			this.xhr.abort();
		}
	},

	_isEventTargetInWidget: function( event ) {
		var menuElement = this.menu.element[ 0 ];

		return event.target === this.element[ 0 ] ||
			event.target === menuElement ||
			$.contains( menuElement, event.target );
	},

	_closeOnClickOutside: function( event ) {
		if ( !this._isEventTargetInWidget( event ) ) {
			this.close();
		}
	},

	_appendTo: function() {
		var element = this.options.appendTo;

		if ( element ) {
			element = element.jquery || element.nodeType ?
				$( element ) :
				this.document.find( element ).eq( 0 );
		}

		if ( !element || !element[ 0 ] ) {
			element = this.element.closest( ".ui-front, dialog" );
		}

		if ( !element.length ) {
			element = this.document[ 0 ].body;
		}

		return element;
	},

	_initSource: function() {
		var array, url,
			that = this;
		if ( $.isArray( this.options.source ) ) {
			array = this.options.source;
			this.source = function( request, response ) {
				response( $.ui.autocomplete.filter( array, request.term ) );
			};
		} else if ( typeof this.options.source === "string" ) {
			url = this.options.source;
			this.source = function( request, response ) {
				if ( that.xhr ) {
					that.xhr.abort();
				}
				that.xhr = $.ajax( {
					url: url,
					data: request,
					dataType: "json",
					success: function( data ) {
						response( data );
					},
					error: function() {
						response( [] );
					}
				} );
			};
		} else {
			this.source = this.options.source;
		}
	},

	_searchTimeout: function( event ) {
		clearTimeout( this.searching );
		this.searching = this._delay( function() {

			// Search if the value has changed, or if the user retypes the same value (see #7434)
			var equalValues = this.term === this._value(),
				menuVisible = this.menu.element.is( ":visible" ),
				modifierKey = event.altKey || event.ctrlKey || event.metaKey || event.shiftKey;

			if ( !equalValues || ( equalValues && !menuVisible && !modifierKey ) ) {
				this.selectedItem = null;
				this.search( null, event );
			}
		}, this.options.delay );
	},

	search: function( value, event ) {
		value = value != null ? value : this._value();

		// Always save the actual value, not the one passed as an argument
		this.term = this._value();

		if ( value.length < this.options.minLength ) {
			return this.close( event );
		}

		if ( this._trigger( "search", event ) === false ) {
			return;
		}

		return this._search( value );
	},

	_search: function( value ) {
		this.pending++;
		this._addClass( "ui-autocomplete-loading" );
		this.cancelSearch = false;

		this.source( { term: value }, this._response() );
	},

	_response: function() {
		var index = ++this.requestIndex;

		return $.proxy( function( content ) {
			if ( index === this.requestIndex ) {
				this.__response( content );
			}

			this.pending--;
			if ( !this.pending ) {
				this._removeClass( "ui-autocomplete-loading" );
			}
		}, this );
	},

	__response: function( content ) {
		if ( content ) {
			content = this._normalize( content );
		}
		this._trigger( "response", null, { content: content } );
		if ( !this.options.disabled && content && content.length && !this.cancelSearch ) {
			this._suggest( content );
			this._trigger( "open" );
		} else {

			// use ._close() instead of .close() so we don't cancel future searches this._close()},_close:function(event){:// Remove the handler that closes the menu on outside clicks this._off(this.document,"mousedown");:if (this.menu.element.is(":visible")){this.menu.element.hide();:this.menu.blur();:this.isNewMenu=true;:this._trigger("close",event)},_change:function(event){if (this.previous!==this._value()){this._trigger("change",event,{item:this.selectedItem},_normalize:function(items){// assume all items have the right format when the first item is complete if (items.length && items[ 0 ].label && items[ 0 ].value){return items}function(item),return $.map(items{if (typeof item==="string"){return{label:item,value:item},item{label:item.label || item.value,value:item.value || item.label},_suggest:function(items){:var ul=this.menu.element.empty();:this._renderMenu(ul,items);:this.isNewMenu=true;:this.menu.refresh();:// Size and position menu ul.show();:this._resizeMenu();ul.position($.extend({of:this.element},this.options.position));if (this.options.autoFocus){this.menu.next()},// Listen for interactions outside of the widget (#6642) this._on(this.document{mousedown:"_closeOnClickOutside"},_resizeMenu:function(){:var ul=this.menu.element;:ul.outerWidth(Math.max(// Firefox wraps long text (possibly a rounding bug) // so we add 1px to avoid the wrapping (#7513) ul.width("").outerWidth()+1,this.element.outerWidth()))}if (this.menu.isFirstItem() && /^previous/.test(direction) || this.menu.isLastItem() && /^next/.test(direction)){if (!this.isMultiLine){this._value(this.term)},_value:function(){return this.valueMethod.apply(this.element,arguments)},_keyEvent:function(keyEvent,event){:if (!this.isMultiLine || this.menu.element.is(":visible")){this._move(keyEvent,event);:// Prevents moving cursor to beginning/end of the text field in some browsers event.preventDefault()},// Support:Chrome <=50 // We should be able to just use this.element.prop("isContentEditable") // but hidden elements always report false in Chrome. // https://code.google.com/p/chromium/issues/detail?id=313082 _isContentEditable:function(element){if (!element.length){return false}var editable=element.prop("contentEditable");if (editable==="inherit"){return this._isContentEditable(element.parent())},);$.extend($.ui.autocomplete{escapeRegex:function(value){,filter:function(array,term){:var matcher=new RegExp($.ui.autocomplete.escapeRegex(term),"i");:return $.grep(array,function(value){return matcher.test(value.label || value.value || value)},$.ui.autocomplete,);// Live region extension,adding a `messages` option // NOTE:This is an experimental API. We are still investigating // a full solution for string manipulation and internationalization. $.widget("ui.autocomplete"{options:{messages:{noResults:"No search results.",results:function(amount){return amount+(amount>1 ? " results are":" result is")+" available, use up and down arrow keys to navigate."},__response:function(content){:var message;:this._superApply(arguments);:if (this.options.disabled || this.cancelSearch){return}if (content && content.length){message=this.options.messages.results(content.length)});var widgetsAutocomplete=$.ui.autocomplete;/*!
 * jQuery UI Controlgroup 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *///>>label:Controlgroup //>>group:Widgets //>>description:Visually groups form control widgets //>>docs:http://api.jqueryui.com/controlgroup/ //>>demos:http://jqueryui.com/controlgroup/ //>>css.structure:../../themes/base/core.css //>>css.structure:../../themes/base/controlgroup.css //>>css.theme:../../themes/base/theme.css var controlgroupCornerRegex=/ui-corner-([a-z]){2,6},/g;var widgetsControlgroup=$.widget("ui.controlgroup"{version:"1.12.1",defaultElement:"<div>",options:{direction:"horizontal",disabled:null,onlyVisible:true,items:{"button":"input[type=button], input[type=submit], input[type=reset], button, a","controlgroupLabel":".ui-controlgroup-label","checkboxradio":"input[type=checkbox], input[type=radio]","selectmenu":"select","spinner":".ui-spinner-input"},// To support the enhanced option in jQuery Mobile,we isolate DOM manipulation _enhance:function(){:this.element.attr("role","toolbar");:this.refresh()},_initWidgets:function(){:var that=this,childWidgets=[];:// First we iterate over each of the items options $.each(this.options.items,function(widget,selector){;// Make sure the widget has a selector set if (!selector){return}if (widget==="controlgroupLabel"){:labels=that.element.find(selector);:labels.each(function(){var element=$(this);:if (element.children(".ui-controlgroup-label-contents").length){return}// Make sure the widget actually exists if (!$.fn[ widget ]){return}// We assume everything is in the middle to start because we can't determine
			// first / last elements until all enhancments are done.
			if ( that[ "_" + widget + "Options" ] ) {
				options = that[ "_" + widget + "Options" ]( "middle" );
			} else {
				options = { };
			}

			// Find instances of this widget inside controlgroup and init them
			that.element
				.find( selector )
				.each( function() {, options );

					// If the button is the child of a spinner ignore it
					// TODO: Find a more generic solution
					if ( widget === "button" && element.parent( ".ui-spinner" ).length ) {
						return;
					}

					// Create the widget if it doesn't exist if (!instance){instance=element[ widget ]()[ widget ]("instance")}if (instance){instanceOptions.classes=that._resolveClassesValues(instanceOptions.classes,instance)},_callChildMethod:function(method){:this.childWidgets.each(function(){var element=$(this),data=element.data("ui-controlgroup-data");:if (data && data[ method ]){data[ method ]()},_updateCornerClass:function(element,position){:var remove="ui-corner-top ui-corner-bottom ui-corner-left ui-corner-right ui-corner-all";:var add=this._buildSimpleOptions(position,"label").classes.label;:this._removeClass(element,null,remove);:this._addClass(element,null,add)},_buildSimpleOptions:function(position,key){:var direction=this.options.direction==="vertical";var result={;result.classes[ key ]={"middle":"","first":"ui-corner-"+(direction ? "top":"left"),"last":"ui-corner-"+(direction ? "bottom" :"right"),"only":"ui-corner-all"},_spinnerOptions:function(position){:var options=this._buildSimpleOptions(position,"ui-spinner");:options.classes[ "ui-spinner-up" ]="";:options.classes[ "ui-spinner-down" ]="";:return options},_buttonOptions:function(position){return this._buildSimpleOptions(position,"ui-button")},_checkboxradioOptions:function(position){return this._buildSimpleOptions(position,"ui-checkboxradio-label")},_selectmenuOptions:function(position){:var direction=this.options.direction==="vertical";return{width:direction ? "auto" :false,classes:{middle:{"ui-selectmenu-button-open":"","ui-selectmenu-button-closed":""},first:{"ui-selectmenu-button-open":"ui-corner-"+(direction ? "top":"tl"),"ui-selectmenu-button-closed":"ui-corner-"+(direction ? "top" :"left")},last:{"ui-selectmenu-button-open":direction ? "":"ui-corner-tr","ui-selectmenu-button-closed":"ui-corner-"+(direction ? "bottom" :"right")},only:{"ui-selectmenu-button-open":"ui-corner-top","ui-selectmenu-button-closed":"ui-corner-all"},_resolveClassesValues:function(classes,instance){;$.each(classes,function(key){:var current=instance.options.classes[ key ] || "";:current=$.trim(current.replace(controlgroupCornerRegex,""));:result[ key ]=(current+" "+classes[ key ]).replace(/\s+/g," ")}this._super(key,value);if (key==="disabled"){this._callChildMethod(value ? "disable":"enable");:return},refresh:function(){:var children,that=this;:this._addClass("ui-controlgroup ui-controlgroup-"+this.options.direction);:if (this.options.direction==="horizontal"){this._addClass(null,"ui-helper-clearfix")}this._initWidgets();children=this.childWidgets;// We filter here because we need to track all childWidgets not just the visible ones if (this.options.onlyVisible){children=children.filter(":visible")}if (children.length){if (instance && that[ "_"+instance.widgetName+"Options" ]){var options=that[ "_"+instance.widgetName+"Options" ](children.length===1 ? "only":value);:options.classes=that._resolveClassesValues(options.classes,instance);:instance.element[ instance.widgetName ](options)});/*!
 * jQuery UI Checkboxradio 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */,//>>label:Checkboxradio //>>group:Widgets //>>description:Enhances a form with multiple themeable checkboxes or radio buttons. //>>docs:http://api.jqueryui.com/checkboxradio/ //>>demos:http://jqueryui.com/checkboxradio/ //>>css.structure:../../themes/base/core.css //>>css.structure:../../themes/base/button.css //>>css.structure:../../themes/base/checkboxradio.css //>>css.theme:../../themes/base/theme.css $.widget("ui.checkboxradio",[ $.ui.formResetMixin{version:"1.12.1",options:{disabled:null,label:null,icon:true,classes:{"ui-checkboxradio-label":"ui-corner-all","ui-checkboxradio-icon":"ui-corner-all"};// We read the type here,because it makes more sense to throw a element type error first,// rather then the error for lack of a label. Often if its the wrong type,it // won't have a label (e.g. calling on a div, btn, etc)
		this._readType();

		labels = this.element.labels();

		// If there are multiple labels, use the last one
		this.label = $( labels[ labels.length - 1 ] );
		if ( !this.label.length ) {
			$.error( "No label found for checkboxradio widget" );
		}

		this.originalLabel = "";

		// We need to get the label text but this may also need to make sure it does not contain the
		// input itself.
		this.label.contents().not( this.element[ 0 ] ).each( function() {

			// The label contents could be text, html, or a mix. We concat each element to get a
			// string representation of the label, without the input as part of it.
			that.originalLabel += this.nodeType === 3 ? $( this ).text() : this.outerHTML;
		} );

		// Set the label option if we found label text
		if ( this.originalLabel ) {
			options.label = this.originalLabel;
		}

		disabled = this.element[ 0 ].disabled;
		if ( disabled != null ) {
			options.disabled = disabled;
		}
		return options;
	},

	_create: function() {
		var checked = this.element[ 0 ].checked;

		this._bindFormResetHandler();

		if ( this.options.disabled == null ) {
			this.options.disabled = this.element[ 0 ].disabled;
		}

		this._setOption( "disabled", this.options.disabled );
		this._addClass( "ui-checkboxradio", "ui-helper-hidden-accessible" );
		this._addClass( this.label, "ui-checkboxradio-label", "ui-button ui-widget" );

		if ( this.type === "radio" ) {
			this._addClass( this.label, "ui-checkboxradio-radio-label" );
		}

		if ( this.options.label && this.options.label !== this.originalLabel ) {
			this._updateLabel();
		} else if ( this.originalLabel ) {
			this.options.label = this.originalLabel;
		}

		this._enhance();

		if ( checked ) {
			this._addClass( this.label, "ui-checkboxradio-checked", "ui-state-active" );
			if ( this.icon ) {
				this._addClass( this.icon, null, "ui-state-hover" );
			}
		}

		this._on( {
			change: "_toggleClasses",
			focus: function() {
				this._addClass( this.label, null, "ui-state-focus ui-visual-focus" );
			},
			blur: function() {
				this._removeClass( this.label, null, "ui-state-focus ui-visual-focus" );
			}
		} );
	},

	_readType: function() {
		var nodeName = this.element[ 0 ].nodeName.toLowerCase();
		this.type = this.element[ 0 ].type;
		if ( nodeName !== "input" || !/radio|checkbox/.test( this.type ) ) {
			$.error( "Can't create checkboxradio on element.nodeName=" + nodeName +
				" and element.type=" + this.type );
		}
	},

	// Support jQuery Mobile enhanced option
	_enhance: function() {
		this._updateIcon( this.element[ 0 ].checked );
	},

	widget: function() {
		return this.label;
	},

	_getRadioGroup: function() {
		var group;
		var name = this.element[ 0 ].name;
		var nameSelector = "input[name='" + $.ui.escapeSelector( name ) + "']";

		if ( !name ) {
			return $( [] );
		}

		if ( this.form.length ) {
			group = $( this.form[ 0 ].elements ).filter( nameSelector );
		} else {

			// Not inside a form, check all inputs that also are not inside a form
			group = $( nameSelector ).filter( function() {
				return $( this ).form().length === 0;
			} );
		}

		return group.not( this.element );
	},

	_toggleClasses: function() {
		var checked = this.element[ 0 ].checked;
		this._toggleClass( this.label, "ui-checkboxradio-checked", "ui-state-active", checked );

		if ( this.options.icon && this.type === "checkbox" ) {
			this._toggleClass( this.icon, null, "ui-icon-check ui-state-checked", checked )
				._toggleClass( this.icon, null, "ui-icon-blank", !checked );
		}

		if ( this.type === "radio" ) {
			this._getRadioGroup()
				.each( function() {
					var instance = $( this ).checkboxradio( "instance" );

					if ( instance ) {
						instance._removeClass( instance.label,
							"ui-checkboxradio-checked", "ui-state-active" );
					}
				} );
		}
	},

	_destroy: function() {
		this._unbindFormResetHandler();

		if ( this.icon ) {
			this.icon.remove();
			this.iconSpace.remove();
		}
	},

	_setOption: function( key, value ) {

		// We don't allow the value to be set to nothing
		if ( key === "label" && !value ) {
			return;
		}

		this._super( key, value );

		if ( key === "disabled" ) {
			this._toggleClass( this.label, null, "ui-state-disabled", value );
			this.element[ 0 ].disabled = value;

			// Don't refresh when setting disabled
			return;
		}
		this.refresh();
	},

	_updateIcon: function( checked ) {
		var toAdd = "ui-icon ui-icon-background ";

		if ( this.options.icon ) {
			if ( !this.icon ) {
				this.icon = $( "<span>" );
				this.iconSpace = $( "<span> </span>" );
				this._addClass( this.iconSpace, "ui-checkboxradio-icon-space" );
			}

			if ( this.type === "checkbox" ) {
				toAdd += checked ? "ui-icon-check ui-state-checked" : "ui-icon-blank";
				this._removeClass( this.icon, null, checked ? "ui-icon-blank" : "ui-icon-check" );
			} else {
				toAdd += "ui-icon-blank";
			}
			this._addClass( this.icon, "ui-checkboxradio-icon", toAdd );
			if ( !checked ) {
				this._removeClass( this.icon, null, "ui-icon-check ui-state-checked" );
			}
			this.icon.prependTo( this.label ).after( this.iconSpace );
		} else if ( this.icon !== undefined ) {
			this.icon.remove();
			this.iconSpace.remove();
			delete this.icon;
		}
	},

	_updateLabel: function() {

		// Remove the contents of the label ( minus the icon, icon space, and input )
		var contents = this.label.contents().not( this.element[ 0 ] );
		if ( this.icon ) {
			contents = contents.not( this.icon[ 0 ] );
		}
		if ( this.iconSpace ) {
			contents = contents.not( this.iconSpace[ 0 ] );
		}
		contents.remove();

		this.label.append( this.options.label );
	},

	refresh: function() {
		var checked = this.element[ 0 ].checked,
			isDisabled = this.element[ 0 ].disabled;

		this._updateIcon( checked );
		this._toggleClass( this.label, "ui-checkboxradio-checked", "ui-state-active", checked );
		if ( this.options.label !== null ) {
			this._updateLabel();
		}

		if ( isDisabled !== this.options.disabled ) {
			this._setOptions( { "disabled": isDisabled } );
		}
	}

} ] );

var widgetsCheckboxradio = $.ui.checkboxradio;


/*!
 * jQuery UI Button 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
//>>label: Button
//>>group: Widgets
//>>description: Enhances a form with themeable buttons.
//>>docs: http://api.jqueryui.com/button/
//>>demos: http://jqueryui.com/button/
//>>css.structure: ../../themes/base/core.css
//>>css.structure: ../../themes/base/button.css
//>>css.theme: ../../themes/base/theme.css



$.widget( "ui.button", {
	version: "1.12.1",
	defaultElement: "<button>",
	options: {
		classes: {
			"ui-button": "ui-corner-all"
		},
		disabled: null,
		icon: null,
		iconPosition: "beginning",
		label: null,
		showLabel: true
	},

	_getCreateOptions: function() {;

		this.isInput = this.element.is( "input" );

		disabled = this.element[ 0 ].disabled;
		if ( disabled != null ) {
			options.disabled = disabled;
		}

		this.originalLabel = this.isInput ? this.element.val() : this.element.html();
		if ( this.originalLabel ) {
			options.label = this.originalLabel;
		}

		return options;
	},

	_create: function() {
		if ( !this.option.showLabel & !this.options.icon ) {
			this.options.showLabel = true;
		}

		// We have to check the option again here even though we did in _getCreateOptions,
		// because null may have been passed on init which would override what was set in
		// _getCreateOptions
		if ( this.options.disabled == null ) {
			this.options.disabled = this.element[ 0 ].disabled || false;
		}

		this.hasTitle = !!this.element.attr( "title" );

		// Check to see if the label needs to be set or if its already correct
		if ( this.options.label && this.options.label !== this.originalLabel ) {
			if ( this.isInput ) {
				this.element.val( this.options.label );
			} else {
				this.element.html( this.options.label );
			}
		}
		this._addClass( "ui-button", "ui-widget" );
		this._setOption( "disabled", this.options.disabled );
		this._enhance();

		if ( this.element.is( "a" ) ) {
			this._on( {
				"keyup": function( event ) {
					if ( event.keyCode === $.ui.keyCode.SPACE ) {
						event.preventDefault();

						// Support: PhantomJS <= 1.9, IE 8 Only
						// If a native click is available use it so we actually cause navigation
						// otherwise just trigger a click event
						if ( this.element[ 0 ].click ) {
							this.element[ 0 ].click();
						} else {
							this.element.trigger( "click" );
						}
					}
				}
			} );
		}
	},

	_enhance: function() {
		if ( !this.element.is( "button" ) ) {
			this.element.attr( "role", "button" );
		}

		if ( this.options.icon ) {
			this._updateIcon( "icon", this.options.icon );
			this._updateTooltip();
		}
	},

	_updateTooltip: function() {
		this.title = this.element.attr( "title" );

		if ( !this.options.showLabel && !this.title ) {
			this.element.attr( "title", this.options.label );
		}
	},

	_updateIcon: function( option, value ) {
		var icon = option !== "iconPosition",
			position = icon ? this.options.iconPosition : value,
			displayBlock = position === "top" || position === "bottom";

		// Create icon
		if ( !this.icon ) {
			this.icon = $( "<span>" );

			this._addClass( this.icon, "ui-button-icon", "ui-icon" );

			if ( !this.options.showLabel ) {
				this._addClass( "ui-button-icon-only" );
			}
		} else if ( icon ) {

			// If we are updating the icon remove the old icon class
			this._removeClass( this.icon, null, this.options.icon );
		}

		// If we are updating the icon add the new icon class
		if ( icon ) {
			this._addClass( this.icon, null, value );
		}

		this._attachIcon( position );

		// If the icon is on top or bottom we need to add the ui-widget-icon-block class and remove
		// the iconSpace if there is one.
		if ( displayBlock ) {
			this._addClass( this.icon, null, "ui-widget-icon-block" );
			if ( this.iconSpace ) {
				this.iconSpace.remove();
			}
		} else {

			// Position is beginning or end so remove the ui-widget-icon-block class and add the
			// space if it does not exist
			if ( !this.iconSpace ) {
				this.iconSpace = $( "<span> </span>" );
				this._addClass( this.iconSpace, "ui-button-icon-space" );
			}
			this._removeClass( this.icon, null, "ui-wiget-icon-block" );
			this._attachIconSpace( position );
		}
	},

	_destroy: function() {
		this.element.removeAttr( "role" );

		if ( this.icon ) {
			this.icon.remove();
		}
		if ( this.iconSpace ) {
			this.iconSpace.remove();
		}
		if ( !this.hasTitle ) {
			this.element.removeAttr( "title" );
		}
	},

	_attachIconSpace: function( iconPosition ) {
		this.icon[ /^(?:end|bottom)/.test( iconPosition ) ? "before" : "after" ]( this.iconSpace );
	},

	_attachIcon: function( iconPosition ) {
		this.element[ /^(?:end|bottom)/.test( iconPosition ) ? "append" : "prepend" ]( this.icon );
	},

	_setOptions: function( options ) {
		var newShowLabel = options.showLabel === undefined ?
				this.options.showLabel :
				options.showLabel,
			newIcon = options.icon === undefined ? this.options.icon : options.icon;

		if ( !newShowLabel && !newIcon ) {
			options.showLabel = true;
		}
		this._super( options );
	},

	_setOption: function( key, value ) {
		if ( key === "icon" ) {
			if ( value ) {
				this._updateIcon( key, value );
			} else if ( this.icon ) {
				this.icon.remove();
				if ( this.iconSpace ) {
					this.iconSpace.remove();
				}
			}
		}

		if ( key === "iconPosition" ) {
			this._updateIcon( key, value );
		}

		// Make sure we can't end up with a button that has neither text nor icon
		if ( key === "showLabel" ) {
				this._toggleClass( "ui-button-icon-only", null, !value );
				this._updateTooltip();
		}

		if ( key === "label" ) {
			if ( this.isInput ) {
				this.element.val( value );
			} else {

				// If there is an icon, append it, else nothing then append the value
				// this avoids removal of the icon when setting label text
				this.element.html( value );
				if ( this.icon ) {
					this._attachIcon( this.options.iconPosition );
					this._attachIconSpace( this.options.iconPosition );
				}
			}
		}

		this._super( key, value );

		if ( key === "disabled" ) {
			this._toggleClass( null, "ui-state-disabled", value );
			this.element[ 0 ].disabled = value;
			if ( value ) {
				this.element.blur();
			}
		}
	},

	refresh: function() {

		// Make sure to only check disabled if its an element that supports this otherwise
		// check for the disabled class to determine state
		var isDisabled = this.element.is( "input,button" ) ?
			this.element[ 0 ].disabled : this.element.hasClass( "ui-button-disabled" );

		if ( isDisabled !== this.options.disabled ) {
			this._setOptions( { disabled: isDisabled } );
		}

		this._updateTooltip();
	}
} );

// DEPRECATED
if ( $.uiBackCompat !== false ) {

	// Text and Icons options
	$.widget( "ui.button", $.ui.button, {
		options: {
			text: true,
			icons: {
				primary: null,
				secondary: null
			}
		},

		_create: function() {
			if ( this.options.showLabel && !this.options.text ) {
				this.options.showLabel = this.options.text;
			}
			if ( !this.options.showLabel && this.options.text ) {
				this.options.text = this.options.showLabel;
			}
			if ( !this.options.icon && ( this.options.icons.primary ||
					this.options.icons.secondary ) ) {
				if ( this.options.icons.primary ) {
					this.options.icon = this.options.icons.primary;
				} else {
					this.options.icon = this.options.icons.secondary;
					this.options.iconPosition = "end";
				}
			} else if ( this.options.icon ) {
				this.options.icons.primary = this.options.icon;
			}
			this._super();
		},

		_setOption: function( key, value ) {
			if ( key === "text" ) {
				this._super( "showLabel", value );
				return;
			}
			if ( key === "showLabel" ) {
				this.options.text = value;
			}
			if ( key === "icon" ) {
				this.options.icons.primary = value;
			}
			if ( key === "icons" ) {
				if ( value.primary ) {
					this._super( "icon", value.primary );
					this._super( "iconPosition", "beginning" );
				} else if ( value.secondary ) {
					this._super( "icon", value.secondary );
					this._super( "iconPosition", "end" );
				}
			}
			this._superApply( arguments );
		}
	} );

	$.fn.button = ( function( orig ) {
		return function() {
			if ( !this.length || ( this.length && this[ 0 ].tagName !== "INPUT" ) ||
					( this.length && this[ 0 ].tagName === "INPUT" && (
						this.attr( "type" ) !== "checkbox" && this.attr( "type" ) !== "radio"
					) ) ) {
				return orig.apply( this, arguments );
			}
			if ( !$.ui.checkboxradio ) {
				$.error( "Checkboxradio widget missing" );
			}
			if ( arguments.length === 0 ) {
				return this.checkboxradio( {
					"icon": false
				} );
			}
			return this.checkboxradio.apply( this, arguments );
		};
	} )( $.fn.button );

	$.fn.buttonset = function() {
		if ( !$.ui.controlgroup ) {
			$.error( "Controlgroup widget missing" );
		}
		if ( arguments[ 0 ] === "option" && arguments[ 1 ] === "items" && arguments[ 2 ] ) {
			return this.controlgroup.apply( this,
				[ arguments[ 0 ], "items.button", arguments[ 2 ] ] );
		}
		if ( arguments[ 0 ] === "option" && arguments[ 1 ] === "items" ) {
			return this.controlgroup.apply( this, [ arguments[ 0 ], "items.button" ] );
		}
		if ( typeof arguments[ 0 ] === "object" && arguments[ 0 ].items ) {
			arguments[ 0 ].items = {
				button: arguments[ 0 ].items
			};
		}
		return this.controlgroup.apply( this, arguments );
	};
}

var widgetsButton = $.ui.button;


// jscs:disable maximumLineLength

/*!
 * jQuery UI Datepicker 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
//>>label: Datepicker
//>>group: Widgets
//>>description: Displays a calendar from an input or inline for selecting dates.
//>>docs: http://api.jqueryui.com/datepicker/
//>>demos: http://jqueryui.com/datepicker/
//>>css.structure: ../../themes/base/core.css
//>>css.structure: ../../themes/base/datepicker.css
//>>css.theme: ../../themes/base/theme.css



$.extend( $.ui, { datepicker: { version: "1.12.1" } } );

var datepicker_instActive;

function datepicker_getZindex( elem ) {
	var position, value;
	while ( elem.length && elem[ 0 ] !== document ) {

		// Ignore z-index if position is set to a value where z-index is ignored by the browser
		// This makes behavior of this function consistent across browsers
		// WebKit always returns auto if the element is positioned
		position = elem.css( "position" );
		if ( position === "absolute" || position === "relative" || position === "fixed" ) {

			// IE returns 0 when zIndex is not specified
			// other browsers return a string
			// we ignore the case of nested elements with an explicit value of 0
			// <div style="z-index:-10;"><div style="z-index:0;"></div></div>
			value = parseInt( elem.css( "zIndex" ), 10 );
			if ( !isNaN( value ) && value !== 0 ) {
				return value;
			}
		}
		elem = elem.parent();
	}

	return 0;
}


function Datepicker() {
	this._curInst = null; // The current instance in use
	this._keyEvent = false; // If the last event was a key event
	this._disabledInputs = []; // List of date picker inputs that have been disabled
	this._datepickerShowing = false; // True if the popup picker is showing , false if not
	this._inDialog = false; // True if showing within a "dialog", false if not
	this._mainDivId = "ui-datepicker-div"; // The ID of the main datepicker division
	this._inlineClass = "ui-datepicker-inline"; // The name of the inline marker class
	this._appendClass = "ui-datepicker-append"; // The name of the append marker class
	this._triggerClass = "ui-datepicker-trigger"; // The name of the trigger marker class
	this._dialogClass = "ui-datepicker-dialog"; // The name of the dialog marker class
	this._disableClass = "ui-datepicker-disabled"; // The name of the disabled covering marker class
	this._unselectableClass = "ui-datepicker-unselectable"; // The name of the unselectable cell marker class
	this._currentClass = "ui-datepicker-current-day"; // The name of the current day marker class
	this._dayOverClass = "ui-datepicker-days-cell-over"; // The name of the day hover marker class
	this.regional = []; // Available regional settings, indexed by language code
	this.regional[ "" ] = { // Default regional settings
		closeText: "Done", // Display text for close link
		prevText: "Prev", // Display text for previous month link
		nextText: "Next", // Display text for next month link
		currentText: "Today", // Display text for current month link
		monthNames: [ "January","February","March","April","May","June",
			"July","August","September","October","November","December" ], // Names of months for drop-down and formatting
		monthNamesShort: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ], // For formatting
		dayNames: [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ], // For formatting
		dayNamesShort: [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ], // For formatting
		dayNamesMin: [ "Su","Mo","Tu","We","Th","Fr","Sa" ], // Column headings for days starting at Sunday
		weekHeader: "Wk", // Column header for week of the year
		dateFormat: "mm/dd/yy", // See format options on parseDate
		firstDay: 0, // The first day of the week, Sun = 0, Mon = 1, ...
		isRTL: false, // True if right-to-left language, false if left-to-right
		showMonthAfterYear: false, // True if the year select precedes month, false for month then year
		yearSuffix: "" // Additional text to append to the year in the month headers
	};
	this._defaults = {, // Options for enhanced animations
		defaultDate: null, // Used when field is blank: actual date,
			// +/-number for offset from today, null for today
		appendText: "", // Display text following the input box, e.g. showing the format
		buttonText: "...", // Text for trigger button
		buttonImage: "", // URL for trigger button image
		buttonImageOnly: false, // True if the image appears alone, false if it appears on a button
		hideIfNoPrevNext: false, // True to hide next/previous month links
			// if not applicable, false to just disable them
		navigationAsDateFormat: false, // True if date formatting applied to prev/today/next links
		gotoCurrent: false, // True if today link goes back to current selection instead
		changeMonth: false, // True if month can be selected directly, false if only prev/next
		changeYear: false, // True if year can be selected directly, false if only prev/next
		yearRange: "c-10:c+10", // Range of years to display in drop-down,
			// either relative to today's year (-nn:+nn), relative to currently displayed year
			// (c-nn:c+nn), absolute (nnnn:nnnn), or a combination of the above (nnnn:-n)
		showOtherMonths: false, // True to show dates in other months, false to leave blank
		selectOtherMonths: false, // True to allow selection of dates in other months, false for unselectable
		showWeek: false, // True to show week of the year, false to not show it
		calculateWeek: this.iso8601Week, // How to calculate the week of the year,
			// takes a Date and returns the number of the week for it
		shortYearCutoff: "+10", // Short year values < this are in the current century,
			// > this are in the previous century,
			// string value starting with "+" for current year + value
		minDate: null, // The earliest selectable date, or null for no limit
		maxDate: null, // The latest selectable date, or null for no limit
		duration: "fast", // Duration of display/closure
		beforeShowDay: null, // Function that takes a date and returns an array with
			// [0] = true if selectable, false if not, [1] = custom CSS class name(s) or "",
			// [2] = cell title (optional), e.g. $.datepicker.noWeekends
		beforeShow: null, // Function that takes an input field and
			// returns a set of custom settings for the date picker
		onSelect: null, // Define a callback function when a date is selected
		onChangeMonthYear: null, // Define a callback function when the month or year is changed
		onClose: null, // Define a callback function when the datepicker is closed
		numberOfMonths: 1, // Number of months to show at a time
		showCurrentAtPos: 0, // The position in multipe months at which to show the current month (starting at 0)
		stepMonths: 1, // Number of months to step back/forward
		stepBigMonths: 12, // Number of months to step back/forward for the big links
		altField: "", // Selector for an alternate field to store selected dates into
		altFormat: "", // The date format to use for the alternate field
		constrainInput: true, // The input is constrained by the current date format
		showButtonPanel: false, // True to show button panel, false to not show it
		autoSize: false, // True to size the input for the date format, false to leave as is
		disabled: false // The initial disabled state
	}, this.regional.en );
	this.dpDiv = datepicker_bindHover( $( "<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>" ) );
}

$.extend( Datepicker.prototype, {
	
	markerClassName: "hasDatepicker",

	//Keep track of the maximum number of rows displayed (see #7043)
	maxRows: 4,

	// TODO rename to "widget" when switching to widget factory
	_widgetDatepicker: function() {
		return this.dpDiv;
	},

	
	setDefaults: function( settings ) { );
		return this;
	},

	
	_attachDatepicker: function( target, settings ) {
		var nodeName, inline, inst;
		nodeName = target.nodeName.toLowerCase();
		inline = ( nodeName === "div" || nodeName === "span" );
		if ( !target.id ) {
			this.uuid += 1;
			target.id = "dp" + this.uuid;
		} );
		if ( nodeName === "input" ) {
			this._connectDatepicker( target, inst );
		} else if ( inline ) {
			this._inlineDatepicker( target, inst );
		}
	},

	
	_newInst: function( target, inline ) {
		var id = target[ 0 ].id.replace( /([^A-Za-z0-9_\-])/g, "\\\\$1" ); // escape jQuery meta chars
		return { id: id, input: target, // associated target
			selectedDay: 0, selectedMonth: 0, selectedYear: 0, // current selection
			drawMonth: 0, drawYear: 0, // month being drawn
			inline: inline, // is datepicker inline or not
			dpDiv: ( !inline ? this.dpDiv : // presentation div
			datepicker_bindHover( $( "<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>" ) ) ) };
	},

	
	_connectDatepicker: function( target, inst ) {
		var input = $( target );
		inst.append = $( [] );
		inst.trigger = $( [] );
		if ( input.hasClass( this.markerClassName ) ) {
			return;
		}
		this._attachments( input, inst );
		input.addClass( this.markerClassName ).on( "keydown", this._doKeyDown ).
			on( "keypress", this._doKeyPress ).on( "keyup", this._doKeyUp );
		this._autoSize( inst );
		$.data( target, "datepicker", inst );

		//If disabled option is true, disable the datepicker once it has been attached to the input (see ticket #5665)
		if ( inst.settings.disabled ) {
			this._disableDatepicker( target );
		}
	},

	
	_attachments: function( input, inst ) {
		var showOn, buttonText, buttonImage,
			appendText = this._get( inst, "appendText" ),
			isRTL = this._get( inst, "isRTL" );

		if ( inst.append ) {
			inst.append.remove();
		}
		if ( appendText ) {
			inst.append = $( "<span class='" + this._appendClass + "'>" + appendText + "</span>" );
			input[ isRTL ? "before" : "after" ]( inst.append );
		}

		input.off( "focus", this._showDatepicker );

		if ( inst.trigger ) {
			inst.trigger.remove();
		}

		showOn = this._get( inst, "showOn" );
		if ( showOn === "focus" || showOn === "both" ) { // pop-up date picker when in the marked field
			input.on( "focus", this._showDatepicker );
		}
		if ( showOn === "button" || showOn === "both" ) { // pop-up date picker when button clicked
			buttonText = this._get( inst, "buttonText" );
			buttonImage = this._get( inst, "buttonImage" );
			inst.trigger = $( this._get( inst, "buttonImageOnly" ) ?
				$( "<img/>" ).addClass( this._triggerClass ).
					attr( { src: buttonImage, alt: buttonText, title: buttonText } ) :
				$( "<button type='button'></button>" ).addClass( this._triggerClass ).
					html( !buttonImage ? buttonText : $( "<img/>" ).attr(
					{ src:buttonImage, alt:buttonText, title:buttonText } ) ) );
			input[ isRTL ? "before" : "after" ]( inst.trigger );
			inst.trigger.on( "click", function() {
				if ( $.datepicker._datepickerShowing && $.datepicker._lastInput === input[ 0 ] ) {
					$.datepicker._hideDatepicker();
				} else if ( $.datepicker._datepickerShowing && $.datepicker._lastInput !== input[ 0 ] ) {
					$.datepicker._hideDatepicker();
					$.datepicker._showDatepicker( input[ 0 ] );
				} else {
					$.datepicker._showDatepicker( input[ 0 ] );
				}
				return false;
			} );
		}
	},

	
	_autoSize: function( inst ) {
		if ( this._get( inst, "autoSize" ) && !inst.inline ) {
			var findMax, max, maxI, i,
				date = new Date( 2009, 12 - 1, 20 ), // Ensure double digits
				dateFormat = this._get( inst, "dateFormat" );

			if ( dateFormat.match( /[DM]/ ) ) {
				findMax = function( names ) {
					max = 0;
					maxI = 0;
					for ( i = 0; i < names.length; i++ ) {
						if ( names[ i ].length > max ) {
							max = names[ i ].length;
							maxI = i;
						}
					}
					return maxI;
				};
				date.setMonth( findMax( this._get( inst, ( dateFormat.match( /MM/ ) ?
					"monthNames" : "monthNamesShort" ) ) ) );
				date.setDate( findMax( this._get( inst, ( dateFormat.match( /DD/ ) ?
					"dayNames" : "dayNamesShort" ) ) ) + 20 - date.getDay() );
			}
			inst.input.attr( "size", this._formatDate( inst, date ).length );
		}
	},

	
	_inlineDatepicker: function( target, inst ) {
		var divSpan = $( target );
		if ( divSpan.hasClass( this.markerClassName ) ) {
			return;
		}
		divSpan.addClass( this.markerClassName ).append( inst.dpDiv );
		$.data( target, "datepicker", inst );
		this._setDate( inst, this._getDefaultDate( inst ), true );
		this._updateDatepicker( inst );
		this._updateAlternate( inst );

		//If disabled option is true, disable the datepicker before showing it (see ticket #5665)
		if ( inst.settings.disabled ) {
			this._disableDatepicker( target );
		}

		// Set display:block in place of inst.dpDiv.show() which won't work on disconnected elements
		// http://bugs.jqueryui.com/ticket/7552 - A Datepicker created on a detached div has zero height
		inst.dpDiv.css( "display", "block" );
	},

	
	_dialogDatepicker: function( input, date, onSelect, settings, pos ) {
		var id, browserWidth, browserHeight, scrollX, scrollY,
			inst = this._dialogInst; // internal instance

		if ( !inst ) {;
			$.data( this._dialogInput[ 0 ], "datepicker", inst );
		} );
		date = ( date && date.constructor === Date ? this._formatDate( inst, date ) : date );
		this._dialogInput.val( date );

		this._pos = ( pos ? ( pos.length ? pos : [ pos.pageX, pos.pageY ] ) : null );
		if ( !this._pos ) {
			browserWidth = document.documentElement.clientWidth;
			browserHeight = document.documentElement.clientHeight;
			scrollX = document.documentElement.scrollLeft || document.body.scrollLeft;
			scrollY = document.documentElement.scrollTop || document.body.scrollTop;
			this._pos = // should use actual width/height below
				[ ( browserWidth / 2 ) - 100 + scrollX, ( browserHeight / 2 ) - 150 + scrollY ];
		}

		// Move input on screen for focus, but hidden behind dialog
		this._dialogInput.css( "left", ( this._pos[ 0 ] + 20 ) + "px" ).css( "top", this._pos[ 1 ] + "px" );
		inst.settings.onSelect = onSelect;
		this._inDialog = true;
		this.dpDiv.addClass( this._dialogClass );
		this._showDatepicker( this._dialogInput[ 0 ] );
		if ( $.blockUI ) {
			$.blockUI( this.dpDiv );
		}
		$.data( this._dialogInput[ 0 ], "datepicker", inst );
		return this;
	},

	
	_destroyDatepicker: function( target ) {
		var nodeName,
			$target = $( target ),
			inst = $.data( target, "datepicker" );

		if ( !$target.hasClass( this.markerClassName ) ) {
			return;
		}

		nodeName = target.nodeName.toLowerCase();
		$.removeData( target, "datepicker" );
		if ( nodeName === "input" ) {
			inst.append.remove();
			inst.trigger.remove();
			$target.removeClass( this.markerClassName ).
				off( "focus", this._showDatepicker ).
				off( "keydown", this._doKeyDown ).
				off( "keypress", this._doKeyPress ).
				off( "keyup", this._doKeyUp );
		} else if ( nodeName === "div" || nodeName === "span" ) {
			$target.removeClass( this.markerClassName ).empty();
		}

		if ( datepicker_instActive === inst ) {
			datepicker_instActive = null;
		}
	},

	
	_enableDatepicker: function( target ) {
		var nodeName, inline,
			$target = $( target ),
			inst = $.data( target, "datepicker" );

		if ( !$target.hasClass( this.markerClassName ) ) {
			return;
		}

		nodeName = target.nodeName.toLowerCase();
		if ( nodeName === "input" ) {
			target.disabled = false;
			inst.trigger.filter( "button" ).
				each( function() { this.disabled = false; } ).end().
				filter( "img" ).css( { opacity: "1", cursor: "" } );
		} else if ( nodeName === "div" || nodeName === "span" ) {
			inline = $target.children( "." + this._inlineClass );
			inline.children().removeClass( "ui-state-disabled" );
			inline.find( "select.ui-datepicker-month,select.ui-datepicker-year" ).
				prop( "disabled", false );
		}
		this._disabledInputs = $.map( this._disabledInputs,
			function( value ) { return ( value === target ? null : value ); } ); // delete entry
	},

	
	_disableDatepicker: function( target ) {
		var nodeName, inline,
			$target = $( target ),
			inst = $.data( target, "datepicker" );

		if ( !$target.hasClass( this.markerClassName ) ) {
			return;
		}

		nodeName = target.nodeName.toLowerCase();
		if ( nodeName === "input" ) {
			target.disabled = true;
			inst.trigger.filter( "button" ).
				each( function() { this.disabled = true; } ).end().
				filter( "img" ).css( { opacity: "0.5", cursor: "default" } );
		} else if ( nodeName === "div" || nodeName === "span" ) {
			inline = $target.children( "." + this._inlineClass );
			inline.children().addClass( "ui-state-disabled" );
			inline.find( "select.ui-datepicker-month,select.ui-datepicker-year" ).
				prop( "disabled", true );
		}
		this._disabledInputs = $.map( this._disabledInputs,
			function( value ) { return ( value === target ? null : value ); } ); // delete entry
		this._disabledInputs[ this._disabledInputs.length ] = target;
	},

	
	_isDisabledDatepicker: function( target ) {
		if ( !target ) {
			return false;
		}
		for ( var i = 0; i < this._disabledInputs.length; i++ ) {
			if ( this._disabledInputs[ i ] === target ) {
				return true;
			}
		}
		return false;
	},

	
	_getInst: function( target ) {
		try {
			return $.data( target, "datepicker" );
		}
		catch ( err ) {
			throw "Missing instance data for this datepicker";
		}
	},

	
	_optionDatepicker: function( target, name, value ) {
		var settings, date, minDate, maxDate,
			inst = this._getInst( target );

		if ( arguments.length === 2 && typeof name === "string" ) {, inst.settings ) :
				this._get( inst, name ) ) : null ) );
		};
		if ( typeof name === "string" ) {;
			settings[ name ] = value;
		}

		if ( inst ) {
			if ( this._curInst === inst ) {
				this._hideDatepicker();
			}

			date = this._getDateDatepicker( target, true );
			minDate = this._getMinMaxDate( inst, "min" );
			maxDate = this._getMinMaxDate( inst, "max" );
			datepicker_extendRemove( inst.settings, settings );

			// reformat the old minDate/maxDate values if dateFormat changes and a new minDate/maxDate isn't provided
			if ( minDate !== null && settings.dateFormat !== undefined && settings.minDate === undefined ) {
				inst.settings.minDate = this._formatDate( inst, minDate );
			}
			if ( maxDate !== null && settings.dateFormat !== undefined && settings.maxDate === undefined ) {
				inst.settings.maxDate = this._formatDate( inst, maxDate );
			}
			if ( "disabled" in settings ) {
				if ( settings.disabled ) {
					this._disableDatepicker( target );
				} else {
					this._enableDatepicker( target );
				}
			}
			this._attachments( $( target ), inst );
			this._autoSize( inst );
			this._setDate( inst, date );
			this._updateAlternate( inst );
			this._updateDatepicker( inst );
		}
	},

	// Change method deprecated
	_changeDatepicker: function( target, name, value ) {
		this._optionDatepicker( target, name, value );
	},

	
	_refreshDatepicker: function( target ) {
		var inst = this._getInst( target );
		if ( inst ) {
			this._updateDatepicker( inst );
		}
	},

	
	_setDateDatepicker: function( target, date ) {
		var inst = this._getInst( target );
		if ( inst ) {
			this._setDate( inst, date );
			this._updateDatepicker( inst );
			this._updateAlternate( inst );
		}
	},

	
	_getDateDatepicker: function( target, noDefault ) {
		var inst = this._getInst( target );
		if ( inst && !inst.inline ) {
			this._setDateFromField( inst, noDefault );
		}
		return ( inst ? this._getDate( inst ) : null );
	},

	
	_doKeyDown: function( event ) {
		var onSelect, dateStr, sel,
			inst = $.datepicker._getInst( event.target ),
			handled = true,
			isRTL = inst.dpDiv.is( ".ui-datepicker-rtl" );

		inst._keyEvent = true;
		if ( $.datepicker._datepickerShowing ) {
			switch ( event.keyCode ) {
				case 9: $.datepicker._hideDatepicker();
						handled = false;
						break; // hide on tab out
				case 13: sel = $( "td." + $.datepicker._dayOverClass + ":not(." +
									$.datepicker._currentClass + ")", inst.dpDiv );
						if ( sel[ 0 ] ) {
							$.datepicker._selectDay( event.target, inst.selectedMonth, inst.selectedYear, sel[ 0 ] );
						}

						onSelect = $.datepicker._get( inst, "onSelect" );
						if ( onSelect ) {
							dateStr = $.datepicker._formatDate( inst );

							// Trigger custom callback
							onSelect.apply( ( inst.input ? inst.input[ 0 ] : null ), [ dateStr, inst ] );
						} else {
							$.datepicker._hideDatepicker();
						}

						return false; // don't submit the form
				case 27: $.datepicker._hideDatepicker();
						break; // hide on escape
				case 33: $.datepicker._adjustDate( event.target, ( event.ctrlKey ?
							-$.datepicker._get( inst, "stepBigMonths" ) :
							-$.datepicker._get( inst, "stepMonths" ) ), "M" );
						break; // previous month/year on page up/+ ctrl
				case 34: $.datepicker._adjustDate( event.target, ( event.ctrlKey ?
							+$.datepicker._get( inst, "stepBigMonths" ) :
							+$.datepicker._get( inst, "stepMonths" ) ), "M" );
						break; // next month/year on page down/+ ctrl
				case 35: if ( event.ctrlKey || event.metaKey ) {
							$.datepicker._clearDate( event.target );
						}
						handled = event.ctrlKey || event.metaKey;
						break; // clear on ctrl or command +end
				case 36: if ( event.ctrlKey || event.metaKey ) {
							$.datepicker._gotoToday( event.target );
						}
						handled = event.ctrlKey || event.metaKey;
						break; // current on ctrl or command +home
				case 37: if ( event.ctrlKey || event.metaKey ) {
							$.datepicker._adjustDate( event.target, ( isRTL ? +1 : -1 ), "D" );
						}
						handled = event.ctrlKey || event.metaKey;

						// -1 day on ctrl or command +left
						if ( event.originalEvent.altKey ) {
							$.datepicker._adjustDate( event.target, ( event.ctrlKey ?
								-$.datepicker._get( inst, "stepBigMonths" ) :
								-$.datepicker._get( inst, "stepMonths" ) ), "M" );
						}

						// next month/year on alt +left on Mac
						break;
				case 38: if ( event.ctrlKey || event.metaKey ) {
							$.datepicker._adjustDate( event.target, -7, "D" );
						}
						handled = event.ctrlKey || event.metaKey;
						break; // -1 week on ctrl or command +up
				case 39: if ( event.ctrlKey || event.metaKey ) {
							$.datepicker._adjustDate( event.target, ( isRTL ? -1 : +1 ), "D" );
						}
						handled = event.ctrlKey || event.metaKey;

						// +1 day on ctrl or command +right
						if ( event.originalEvent.altKey ) {
							$.datepicker._adjustDate( event.target, ( event.ctrlKey ?
								+$.datepicker._get( inst, "stepBigMonths" ) :
								+$.datepicker._get( inst, "stepMonths" ) ), "M" );
						}

						// next month/year on alt +right
						break;
				case 40: if ( event.ctrlKey || event.metaKey ) {
							$.datepicker._adjustDate( event.target, +7, "D" );
						}
						handled = event.ctrlKey || event.metaKey;
						break; // +1 week on ctrl or command +down
				default: handled = false;
			}
		} else if ( event.keyCode === 36 && event.ctrlKey ) { // display the date picker on ctrl+home
			$.datepicker._showDatepicker( this );
		} else {
			handled = false;
		}

		if ( handled ) {
			event.preventDefault();
			event.stopPropagation();
		}
	},

	
	_doKeyPress: function( event ) {
		var chars, chr,
			inst = $.datepicker._getInst( event.target );

		if ( $.datepicker._get( inst, "constrainInput" ) ) {
			chars = $.datepicker._possibleChars( $.datepicker._get( inst, "dateFormat" ) );
			chr = String.fromCharCode( event.charCode == null ? event.keyCode : event.charCode );
			return event.ctrlKey || event.metaKey || ( chr < " " || !chars || chars.indexOf( chr ) > -1 );
		}
	},

	
	_doKeyUp: function( event ) {
		var date,
			inst = $.datepicker._getInst( event.target );

		if ( inst.input.val() !== inst.lastVal ) {
			try {
				date = $.datepicker.parseDate( $.datepicker._get( inst, "dateFormat" ),
					( inst.input ? inst.input.val() : null ),
					$.datepicker._getFormatConfig( inst ) );

				if ( date ) { // only if valid
					$.datepicker._setDateFromField( inst );
					$.datepicker._updateAlternate( inst );
					$.datepicker._updateDatepicker( inst );
				}
			}
			catch ( err ) {
			}
		}
		return true;
	},

	
	_showDatepicker: function( input ) {
		input = input.target || input;
		if ( input.nodeName.toLowerCase() !== "input" ) { // find from button/image trigger
			input = $( "input", input.parentNode )[ 0 ];
		}

		if ( $.datepicker._isDisabledDatepicker( input ) || $.datepicker._lastInput === input ) { // already here
			return;
		}

		var inst, beforeShow, beforeShowSettings, isFixed,
			offset, showAnim, duration;

		inst = $.datepicker._getInst( input );
		if ( $.datepicker._curInst && $.datepicker._curInst !== inst ) {
			$.datepicker._curInst.dpDiv.stop( true, true );
			if ( inst && $.datepicker._datepickerShowing ) {
				$.datepicker._hideDatepicker( $.datepicker._curInst.input[ 0 ] );
			}
		};
		if ( beforeShowSettings === false ) {
			return;
		}
		datepicker_extendRemove( inst.settings, beforeShowSettings );

		inst.lastVal = null;
		$.datepicker._lastInput = input;
		$.datepicker._setDateFromField( inst );

		if ( $.datepicker._inDialog ) { // hide cursor
			input.value = "";
		}
		if ( !$.datepicker._pos ) { // position below input
			$.datepicker._pos = $.datepicker._findPos( input );
			$.datepicker._pos[ 1 ] += input.offsetHeight; // add the height
		}

		isFixed = false;
		$( input ).parents().each( function() {
			isFixed |= $( this ).css( "position" ) === "fixed";
			return !isFixed;
		} );

		offset = { left: $.datepicker._pos[ 0 ], top: $.datepicker._pos[ 1 ] };
		$.datepicker._pos = null;

		//to avoid flashes on Firefox
		inst.dpDiv.empty();

		// determine sizing offscreen
		inst.dpDiv.css( { position: "absolute", display: "block", top: "-1000px" } );
		$.datepicker._updateDatepicker( inst );

		// fix width for dynamic number of date pickers
		// and adjust position before showing
		offset = $.datepicker._checkOffset( inst, offset, isFixed );
		inst.dpDiv.css( { position: ( $.datepicker._inDialog && $.blockUI ?
			"static" : ( isFixed ? "fixed" : "absolute" ) ), display: "none",
			left: offset.left + "px", top: offset.top + "px" } );

		if ( !inst.inline ) {
			showAnim = $.datepicker._get( inst, "showAnim" );
			duration = $.datepicker._get( inst, "duration" );
			inst.dpDiv.css( "z-index", datepicker_getZindex( $( input ) ) + 1 );
			$.datepicker._datepickerShowing = true;

			if ( $.effects && $.effects.effect[ showAnim ] ) {
				inst.dpDiv.show( showAnim, $.datepicker._get( inst, "showOptions" ), duration );
			} else {
				inst.dpDiv[ showAnim || "show" ]( showAnim ? duration : null );
			}

			if ( $.datepicker._shouldFocusInput( inst ) ) {
				inst.input.trigger( "focus" );
			}

			$.datepicker._curInst = inst;
		}
	},

	
	_updateDatepicker: function( inst ) {
		this.maxRows = 4; //Reset the max number of rows being displayed (see #7043)
		datepicker_instActive = inst; // for delegate hover events
		inst.dpDiv.empty().append( this._generateHTML( inst ) );
		this._attachHandlers( inst );

		var origyearshtml,
			numMonths = this._getNumberOfMonths( inst ),
			cols = numMonths[ 1 ],
			width = 17,
			activeCell = inst.dpDiv.find( "." + this._dayOverClass + " a" );

		if ( activeCell.length > 0 ) {
			datepicker_handleMouseover.apply( activeCell.get( 0 ) );
		}

		inst.dpDiv.removeClass( "ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4" ).width( "" );
		if ( cols > 1 ) {
			inst.dpDiv.addClass( "ui-datepicker-multi-" + cols ).css( "width", ( width * cols ) + "em" );
		}
		inst.dpDiv[ ( numMonths[ 0 ] !== 1 || numMonths[ 1 ] !== 1 ? "add" : "remove" ) +
			"Class" ]( "ui-datepicker-multi" );
		inst.dpDiv[ ( this._get( inst, "isRTL" ) ? "add" : "remove" ) +
			"Class" ]( "ui-datepicker-rtl" );

		if ( inst === $.datepicker._curInst && $.datepicker._datepickerShowing && $.datepicker._shouldFocusInput( inst ) ) {
			inst.input.trigger( "focus" );
		}

		// Deffered render of the years select (to avoid flashes on Firefox)
		if ( inst.yearshtml ) {
			origyearshtml = inst.yearshtml;
			setTimeout( function() {

				//assure that inst.yearshtml didn't change.
				if ( origyearshtml === inst.yearshtml && inst.yearshtml ) {
					inst.dpDiv.find( "select.ui-datepicker-year:first" ).replaceWith( inst.yearshtml );
				}
				origyearshtml = inst.yearshtml = null;
			}, 0 );
		}
	},

	// #6694 - don't focus the input if it's already focused
	// this breaks the change event in IE
	// Support: IE and jQuery <1.9
	_shouldFocusInput: function( inst ) {
		return inst.input && inst.input.is( ":visible" ) && !inst.input.is( ":disabled" ) && !inst.input.is( ":focus" );
	},

	
	_checkOffset: function( inst, offset, isFixed ) {
		var dpWidth = inst.dpDiv.outerWidth(),
			dpHeight = inst.dpDiv.outerHeight(),
			inputWidth = inst.input ? inst.input.outerWidth() : 0,
			inputHeight = inst.input ? inst.input.outerHeight() : 0,
			viewWidth = document.documentElement.clientWidth + ( isFixed ? 0 : $( document ).scrollLeft() ),
			viewHeight = document.documentElement.clientHeight + ( isFixed ? 0 : $( document ).scrollTop() );

		offset.left -= ( this._get( inst, "isRTL" ) ? ( dpWidth - inputWidth ) : 0 );
		offset.left -= ( isFixed && offset.left === inst.input.offset().left ) ? $( document ).scrollLeft() : 0;
		offset.top -= ( isFixed && offset.top === ( inst.input.offset().top + inputHeight ) ) ? $( document ).scrollTop() : 0;

		// Now check if datepicker is showing outside window viewport - move to a better place if so.
		offset.left -= Math.min( offset.left, ( offset.left + dpWidth > viewWidth && viewWidth > dpWidth ) ?
			Math.abs( offset.left + dpWidth - viewWidth ) : 0 );
		offset.top -= Math.min( offset.top, ( offset.top + dpHeight > viewHeight && viewHeight > dpHeight ) ?
			Math.abs( dpHeight + inputHeight ) : 0 );

		return offset;
	},

	
	_findPos: function( obj ) {
		var position,
			inst = this._getInst( obj ),
			isRTL = this._get( inst, "isRTL" );

		while ( obj && ( obj.type === "hidden" || obj.nodeType !== 1 || $.expr.filters.hidden( obj ) ) ) {
			obj = obj[ isRTL ? "previousSibling" : "nextSibling" ];
		}

		position = $( obj ).offset();
		return [ position.left, position.top ];
	},

	
	_hideDatepicker: function( input ) {
		var showAnim, duration, postProcess, onClose,
			inst = this._curInst;

		if ( !inst || ( input && inst !== $.data( input, "datepicker" ) ) ) {
			return;
		}

		if ( this._datepickerShowing ) {
			showAnim = this._get( inst, "showAnim" );
			duration = this._get( inst, "duration" );
			postProcess = function() {
				$.datepicker._tidyDialog( inst );
			};

			// DEPRECATED: after BC for 1.8.x $.effects[ showAnim ] is not needed
			if ( $.effects && ( $.effects.effect[ showAnim ] || $.effects[ showAnim ] ) ) {
				inst.dpDiv.hide( showAnim, $.datepicker._get( inst, "showOptions" ), duration, postProcess );
			} else {
				inst.dpDiv[ ( showAnim === "slideDown" ? "slideUp" :
					( showAnim === "fadeIn" ? "fadeOut" : "hide" ) ) ]( ( showAnim ? duration : null ), postProcess );
			}

			if ( !showAnim ) {
				postProcess();
			}
			this._datepickerShowing = false;

			onClose = this._get( inst, "onClose" );
			if ( onClose ) {
				onClose.apply( ( inst.input ? inst.input[ 0 ] : null ), [ ( inst.input ? inst.input.val() : "" ), inst ] );
			}

			this._lastInput = null;
			if ( this._inDialog ) {
				this._dialogInput.css( { position: "absolute", left: "0", top: "-100px" } );
				if ( $.blockUI ) {
					$.unblockUI();
					$( "body" ).append( this.dpDiv );
				}
			}
			this._inDialog = false;
		}
	},

	
	_tidyDialog: function( inst ) {
		inst.dpDiv.removeClass( this._dialogClass ).off( ".ui-datepicker-calendar" );
	},

	
	_checkExternalClick: function( event ) {
		if ( !$.datepicker._curInst ) {
			return;
		}

		var $target = $( event.target ),
			inst = $.datepicker._getInst( $target[ 0 ] );

		if ( ( ( $target[ 0 ].id !== $.datepicker._mainDivId &&
				$target.parents( "#" + $.datepicker._mainDivId ).length === 0 &&
				!$target.hasClass( $.datepicker.markerClassName ) &&
				!$target.closest( "." + $.datepicker._triggerClass ).length &&
				$.datepicker._datepickerShowing && !( $.datepicker._inDialog && $.blockUI ) ) ) ||
			( $target.hasClass( $.datepicker.markerClassName ) && $.datepicker._curInst !== inst ) ) {
				$.datepicker._hideDatepicker();
		}
	},

	
	_adjustDate: function( id, offset, period ) {
		var target = $( id ),
			inst = this._getInst( target[ 0 ] );

		if ( this._isDisabledDatepicker( target[ 0 ] ) ) {
			return;
		}
		this._adjustInstDate( inst, offset +
			( period === "M" ? this._get( inst, "showCurrentAtPos" ) : 0 ), // undo positioning
			period );
		this._updateDatepicker( inst );
	},

	
	_gotoToday: function( id ) {
		var date,
			target = $( id ),
			inst = this._getInst( target[ 0 ] );

		if ( this._get( inst, "gotoCurrent" ) && inst.currentDay ) {
			inst.selectedDay = inst.currentDay;
			inst.drawMonth = inst.selectedMonth = inst.currentMonth;
			inst.drawYear = inst.selectedYear = inst.currentYear;
		} else {
			date = new Date();
			inst.selectedDay = date.getDate();
			inst.drawMonth = inst.selectedMonth = date.getMonth();
			inst.drawYear = inst.selectedYear = date.getFullYear();
		}
		this._notifyChange( inst );
		this._adjustDate( target );
	},

	
	_selectMonthYear: function( id, select, period ) {
		var target = $( id ),
			inst = this._getInst( target[ 0 ] );

		inst[ "selected" + ( period === "M" ? "Month" : "Year" ) ] =
		inst[ "draw" + ( period === "M" ? "Month" : "Year" ) ] =
			parseInt( select.options[ select.selectedIndex ].value, 10 );

		this._notifyChange( inst );
		this._adjustDate( target );
	},

	
	_selectDay: function( id, month, year, td ) {
		var inst,
			target = $( id );

		if ( $( td ).hasClass( this._unselectableClass ) || this._isDisabledDatepicker( target[ 0 ] ) ) {
			return;
		}

		inst = this._getInst( target[ 0 ] );
		inst.selectedDay = inst.currentDay = $( "a", td ).html();
		inst.selectedMonth = inst.currentMonth = month;
		inst.selectedYear = inst.currentYear = year;
		this._selectDate( id, this._formatDate( inst,
			inst.currentDay, inst.currentMonth, inst.currentYear ) );
	},

	
	_clearDate: function( id ) {
		var target = $( id );
		this._selectDate( target, "" );
	},

	
	_selectDate: function( id, dateStr ) {
		var onSelect,
			target = $( id ),
			inst = this._getInst( target[ 0 ] );

		dateStr = ( dateStr != null ? dateStr : this._formatDate( inst ) );
		if ( inst.input ) {
			inst.input.val( dateStr );
		}
		this._updateAlternate( inst );

		onSelect = this._get( inst, "onSelect" );
		if ( onSelect ) {
			onSelect.apply( ( inst.input ? inst.input[ 0 ] : null ), [ dateStr, inst ] );  // trigger custom callback
		} else if ( inst.input ) {
			inst.input.trigger( "change" ); // fire the change event
		}

		if ( inst.inline ) {
			this._updateDatepicker( inst );
		} else {
			this._hideDatepicker();
			this._lastInput = inst.input[ 0 ];
			if ( typeof( inst.input[ 0 ] ) !== "object" ) {
				inst.input.trigger( "focus" ); // restore focus
			}
			this._lastInput = null;
		}
	},

	
	_updateAlternate: function( inst ) {
		var altFormat, date, dateStr,
			altField = this._get( inst, "altField" );

		if ( altField ) { // update alternate field too
			altFormat = this._get( inst, "altFormat" ) || this._get( inst, "dateFormat" );
			date = this._getDate( inst );
			dateStr = this.formatDate( altFormat, date, this._getFormatConfig( inst ) );
			$( altField ).val( dateStr );
		}
	},

	
	noWeekends: function( date ) {
		var day = date.getDay();
		return [ ( day > 0 && day < 6 ), "" ];
	},

	
	iso8601Week: function( date ) {
		var time,
			checkDate = new Date( date.getTime() );

		// Find Thursday of this week starting on Monday
		checkDate.setDate( checkDate.getDate() + 4 - ( checkDate.getDay() || 7 ) );

		time = checkDate.getTime();
		checkDate.setMonth( 0 ); // Compare with Jan 1
		checkDate.setDate( 1 );
		return Math.floor( Math.round( ( time - checkDate ) / 86400000 ) / 7 ) + 1;
	},

	
	parseDate: function( format, value, settings ) {
		if ( format == null || value == null ) {
			throw "Invalid arguments";
		}

		value = ( typeof value === "object" ? value.toString() : value + "" );
		if ( value === "" ) {
			return null;
		}

		var iFormat, dim, extra,
			iValue = 0,
			shortYearCutoffTemp = ( settings ? settings.shortYearCutoff : null ) || this._defaults.shortYearCutoff,
			shortYearCutoff = ( typeof shortYearCutoffTemp !== "string" ? shortYearCutoffTemp :
				new Date().getFullYear() % 100 + parseInt( shortYearCutoffTemp, 10 ) ),
			dayNamesShort = ( settings ? settings.dayNamesShort : null ) || this._defaults.dayNamesShort,
			dayNames = ( settings ? settings.dayNames : null ) || this._defaults.dayNames,
			monthNamesShort = ( settings ? settings.monthNamesShort : null ) || this._defaults.monthNamesShort,
			monthNames = ( settings ? settings.monthNames : null ) || this._defaults.monthNames,
			year = -1,
			month = -1,
			day = -1,
			doy = -1,
			literal = false,
			date,

			// Check whether a format character is doubled
			lookAhead = function( match ) {
				var matches = ( iFormat + 1 < format.length && format.charAt( iFormat + 1 ) === match );
				if ( matches ) {
					iFormat++;
				}
				return matches;
			},

			// Extract a number from the string value
			getNumber = function( match ) {" ),
					num = value.substring( iValue ).match( digits );
				if ( !num ) {
					throw "Missing number at position " + iValue;
				}
				iValue += num[ 0 ].length;
				return parseInt( num[ 0 ], 10 );
			},

			// Extract a name from the string value and convert to an index
			getName = function( match, shortNames, longNames ) {
				var index = -1,
					names = $.map( lookAhead( match ) ? longNames : shortNames, function( v, k ) {
						return [ [ k, v ] ];
					} ).sort( function( a, b ) {
						return -( a[ 1 ].length - b[ 1 ].length );
					} );

				$.each( names, function( i, pair ) {
					var name = pair[ 1 ];
					if ( value.substr( iValue, name.length ).toLowerCase() === name.toLowerCase() ) {
						index = pair[ 0 ];
						iValue += name.length;
						return false;
					}
				} );
				if ( index !== -1 ) {
					return index + 1;
				} else {
					throw "Unknown name at position " + iValue;
				}
			},

			// Confirm that a literal character matches the string value
			checkLiteral = function() {
				if ( value.charAt( iValue ) !== format.charAt( iFormat ) ) {
					throw "Unexpected literal at position " + iValue;
				}
				iValue++;
			};

		for ( iFormat = 0; iFormat < format.length; iFormat++ ) {
			if ( literal ) {
				if ( format.charAt( iFormat ) === "'" && !lookAhead( "'" ) ) {
					literal = false;
				} else {
					checkLiteral();
				}
			} else {
				switch ( format.charAt( iFormat ) ) {
					case "d":
						day = getNumber( "d" );
						break;
					case "D":
						getName( "D", dayNamesShort, dayNames );
						break;
					case "o":
						doy = getNumber( "o" );
						break;
					case "m":
						month = getNumber( "m" );
						break;
					case "M":
						month = getName( "M", monthNamesShort, monthNames );
						break;
					case "y":
						year = getNumber( "y" );
						break;
					case "@":
						date = new Date( getNumber( "@" ) );
						year = date.getFullYear();
						month = date.getMonth() + 1;
						day = date.getDate();
						break;
					case "!":
						date = new Date( ( getNumber( "!" ) - this._ticksTo1970 ) / 10000 );
						year = date.getFullYear();
						month = date.getMonth() + 1;
						day = date.getDate();
						break;
					case "'":
						if ( lookAhead( "'" ) ) {
							checkLiteral();
						} else {
							literal = true;
						}
						break;
					default:
						checkLiteral();
				}
			}
		}

		if ( iValue < value.length ) {
			extra = value.substr( iValue );
			if ( !/^\s+/.test( extra ) ) {
				throw "Extra/unparsed characters found in date:" + extra;
			}
		}

		if ( year === -1 ) {
			year = new Date().getFullYear();
		} else if ( year < 100 ) {
			year += new Date().getFullYear() - new Date().getFullYear() % 100 +
				( year <= shortYearCutoff ? 0 : -100 );
		}

		if ( doy > -1 ) {
			month = 1;
			day = doy;
			do {
				dim = this._getDaysInMonth( year, month - 1 );
				if ( day <= dim ) {
					break;
				}
				month++;
				day -= dim;
			} while ( true );
		}

		date = this._daylightSavingAdjust( new Date( year, month - 1, day ) );
		if ( date.getFullYear() !== year || date.getMonth() + 1 !== month || date.getDate() !== day ) {
			throw "Invalid date"; // E.g. 31/02/00
		}
		return date;
	},

	
	ATOM: "yy-mm-dd", // RFC 3339 (ISO 8601)
	COOKIE: "D,dd M yy",
	ISO_8601: "yy-mm-dd",
	RFC_822: "D,d M y",
	RFC_850: "DD,dd-M-y",
	RFC_1036: "D,d M y",
	RFC_1123: "D,d M yy",
	RFC_2822: "D,d M yy",
	RSS: "D,d M y", // RFC 822
	TICKS: "!",
	TIMESTAMP: "@",
	W3C: "yy-mm-dd", // ISO 8601

	_ticksTo1970: ( ( ( 1970 - 1 ) * 365 + Math.floor( 1970 / 4 ) - Math.floor( 1970 / 100 ) +
		Math.floor( 1970 / 400 ) ) * 24 * 60 * 60 * 10000000 ),

	
	formatDate: function( format, date, settings ) {
		if ( !date ) {
			return "";
		}

		var iFormat,
			dayNamesShort = ( settings ? settings.dayNamesShort : null ) || this._defaults.dayNamesShort,
			dayNames = ( settings ? settings.dayNames : null ) || this._defaults.dayNames,
			monthNamesShort = ( settings ? settings.monthNamesShort : null ) || this._defaults.monthNamesShort,
			monthNames = ( settings ? settings.monthNames : null ) || this._defaults.monthNames,

			// Check whether a format character is doubled
			lookAhead = function( match ) {
				var matches = ( iFormat + 1 < format.length && format.charAt( iFormat + 1 ) === match );
				if ( matches ) {
					iFormat++;
				}
				return matches;
			},

			// Format a number, with leading zero if necessary
			formatNumber = function( match, value, len ) {
				var num = "" + value;
				if ( lookAhead( match ) ) {
					while ( num.length < len ) {
						num = "0" + num;
					}
				}
				return num;
			},

			// Format a name, short or long as requested
			formatName = function( match, value, shortNames, longNames ) {
				return ( lookAhead( match ) ? longNames[ value ] : shortNames[ value ] );
			},
			output = "",
			literal = false;

		if ( date ) {
			for ( iFormat = 0; iFormat < format.length; iFormat++ ) {
				if ( literal ) {
					if ( format.charAt( iFormat ) === "'" && !lookAhead( "'" ) ) {
						literal = false;
					} else {
						output += format.charAt( iFormat );
					}
				} else {
					switch ( format.charAt( iFormat ) ) {
						case "d":
							output += formatNumber( "d", date.getDate(), 2 );
							break;
						case "D":
							output += formatName( "D", date.getDay(), dayNamesShort, dayNames );
							break;
						case "o":
							output += formatNumber( "o",
								Math.round( ( new Date( date.getFullYear(), date.getMonth(), date.getDate() ).getTime() - new Date( date.getFullYear(), 0, 0 ).getTime() ) / 86400000 ), 3 );
							break;
						case "m":
							output += formatNumber( "m", date.getMonth() + 1, 2 );
							break;
						case "M":
							output += formatName( "M", date.getMonth(), monthNamesShort, monthNames );
							break;
						case "y":
							output += ( lookAhead( "y" ) ? date.getFullYear() :
								( date.getFullYear() % 100 < 10 ? "0" : "" ) + date.getFullYear() % 100 );
							break;
						case "@":
							output += date.getTime();
							break;
						case "!":
							output += date.getTime() * 10000 + this._ticksTo1970;
							break;
						case "'":
							if ( lookAhead( "'" ) ) {
								output += "'";
							} else {
								literal = true;
							}
							break;
						default:
							output += format.charAt( iFormat );
					}
				}
			}
		}
		return output;
	},

	
	_possibleChars: function( format ) {
		var iFormat,
			chars = "",
			literal = false,

			// Check whether a format character is doubled
			lookAhead = function( match ) {
				var matches = ( iFormat + 1 < format.length && format.charAt( iFormat + 1 ) === match );
				if ( matches ) {
					iFormat++;
				}
				return matches;
			};

		for ( iFormat = 0; iFormat < format.length; iFormat++ ) {
			if ( literal ) {
				if ( format.charAt( iFormat ) === "'" && !lookAhead( "'" ) ) {
					literal = false;
				} else {
					chars += format.charAt( iFormat );
				}
			} else {
				switch ( format.charAt( iFormat ) ) {
					case "d": case "m": case "y": case "@":
						chars += "0123456789";
						break;
					case "D": case "M":
						return null; // Accept anything
					case "'":
						if ( lookAhead( "'" ) ) {
							chars += "'";
						} else {
							literal = true;
						}
						break;
					default:
						chars += format.charAt( iFormat );
				}
			}
		}
		return chars;
	},

	
	_get: function( inst, name ) {
		return inst.settings[ name ] !== undefined ?
			inst.settings[ name ] : this._defaults[ name ];
	},

	
	_setDateFromField: function( inst, noDefault ) {
		if ( inst.input.val() === inst.lastVal ) {
			return;
		}

		var dateFormat = this._get( inst, "dateFormat" ),
			dates = inst.lastVal = inst.input ? inst.input.val() : null,
			defaultDate = this._getDefaultDate( inst ),
			date = defaultDate,
			settings = this._getFormatConfig( inst );

		try {
			date = this.parseDate( dateFormat, dates, settings ) || defaultDate;
		} catch ( event ) {
			dates = ( noDefault ? "" : dates );
		}
		inst.selectedDay = date.getDate();
		inst.drawMonth = inst.selectedMonth = date.getMonth();
		inst.drawYear = inst.selectedYear = date.getFullYear();
		inst.currentDay = ( dates ? date.getDate() : 0 );
		inst.currentMonth = ( dates ? date.getMonth() : 0 );
		inst.currentYear = ( dates ? date.getFullYear() : 0 );
		this._adjustInstDate( inst );
	},

	
	_getDefaultDate: function( inst ) {
		return this._restrictMinMax( inst,
			this._determineDate( inst, this._get( inst, "defaultDate" ), new Date() ) );
	},

	
	_determineDate: function( inst, date, defaultDate ) {
		var offsetNumeric = function( offset ) {
				var date = new Date();
				date.setDate( date.getDate() + offset );
				return date;
			},
			offsetString = function( offset ) {
				try {
					return $.datepicker.parseDate( $.datepicker._get( inst, "dateFormat" ),
						offset, $.datepicker._getFormatConfig( inst ) );
				}
				catch ( e ) {

					// Ignore
				}

				var date = ( offset.toLowerCase().match( /^c/ ) ?
					$.datepicker._getDate( inst ) : null ) || new Date(),
					year = date.getFullYear(),
					month = date.getMonth(),
					day = date.getDate(),
					pattern = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,
					matches = pattern.exec( offset );

				while ( matches ) {
					switch ( matches[ 2 ] || "d" ) {
						case "d" : case "D" :
							day += parseInt( matches[ 1 ], 10 ); break;
						case "w" : case "W" :
							day += parseInt( matches[ 1 ], 10 ) * 7; break;
						case "m" : case "M" :
							month += parseInt( matches[ 1 ], 10 );
							day = Math.min( day, $.datepicker._getDaysInMonth( year, month ) );
							break;
						case "y": case "Y" :
							year += parseInt( matches[ 1 ], 10 );
							day = Math.min( day, $.datepicker._getDaysInMonth( year, month ) );
							break;
					}
					matches = pattern.exec( offset );
				}
				return new Date( year, month, day );
			},
			newDate = ( date == null || date === "" ? defaultDate : ( typeof date === "string" ? offsetString( date ) :
				( typeof date === "number" ? ( isNaN( date ) ? defaultDate : offsetNumeric( date ) ) : new Date( date.getTime() ) ) ) );

		newDate = ( newDate && newDate.toString() === "Invalid Date" ? defaultDate : newDate );
		if ( newDate ) {
			newDate.setHours( 0 );
			newDate.setMinutes( 0 );
			newDate.setSeconds( 0 );
			newDate.setMilliseconds( 0 );
		}
		return this._daylightSavingAdjust( newDate );
	},

	
	_daylightSavingAdjust: function( date ) {
		if ( !date ) {
			return null;
		}
		date.setHours( date.getHours() > 12 ? date.getHours() + 2 : 0 );
		return date;
	},

	
	_setDate: function( inst, date, noChange ) {
		var clear = !date,
			origMonth = inst.selectedMonth,
			origYear = inst.selectedYear,
			newDate = this._restrictMinMax( inst, this._determineDate( inst, date, new Date() ) );

		inst.selectedDay = inst.currentDay = newDate.getDate();
		inst.drawMonth = inst.selectedMonth = inst.currentMonth = newDate.getMonth();
		inst.drawYear = inst.selectedYear = inst.currentYear = newDate.getFullYear();
		if ( ( origMonth !== inst.selectedMonth || origYear !== inst.selectedYear ) && !noChange ) {
			this._notifyChange( inst );
		}
		this._adjustInstDate( inst );
		if ( inst.input ) {
			inst.input.val( clear ? "" : this._formatDate( inst ) );
		}
	},

	
	_getDate: function( inst ) {
		var startDate = ( !inst.currentYear || ( inst.input && inst.input.val() === "" ) ? null :
			this._daylightSavingAdjust( new Date(
			inst.currentYear, inst.currentMonth, inst.currentDay ) ) );
			return startDate;
	},

	
	_attachHandlers: function( inst ) {
		var stepMonths = this._get( inst, "stepMonths" ),
			id = "#" + inst.id.replace( /\\\\/g, "\\" );
		inst.dpDiv.find( "[data-handler]" ).map( function() {
			var handler = {
				prev: function() {
					$.datepicker._adjustDate( id, -stepMonths, "M" );
				},
				next: function() {
					$.datepicker._adjustDate( id, +stepMonths, "M" );
				},
				hide: function() {
					$.datepicker._hideDatepicker();
				},
				today: function() {
					$.datepicker._gotoToday( id );
				},
				selectDay: function() {
					$.datepicker._selectDay( id, +this.getAttribute( "data-month" ), +this.getAttribute( "data-year" ), this );
					return false;
				},
				selectMonth: function() {
					$.datepicker._selectMonthYear( id, this, "M" );
					return false;
				},
				selectYear: function() {
					$.datepicker._selectMonthYear( id, this, "Y" );
					return false;
				}
			};
			$( this ).on( this.getAttribute( "data-event" ), handler[ this.getAttribute( "data-handler" ) ] );
		} );
	},

	
	_generateHTML: function( inst ) {
		var maxDraw, prevText, prev, nextText, next, currentText, gotoDate,
			controls, buttonPanel, firstDay, showWeek, dayNames, dayNamesMin,
			monthNames, monthNamesShort, beforeShowDay, showOtherMonths,
			selectOtherMonths, defaultDate, html, dow, row, group, col, selectedDate,
			cornerClass, calender, thead, day, daysInMonth, leadDays, curRows, numRows,
			printDate, dRow, tbody, daySettings, otherMonth, unselectable,
			tempDate = new Date(),
			today = this._daylightSavingAdjust(
				new Date( tempDate.getFullYear(), tempDate.getMonth(), tempDate.getDate() ) ), // clear time
			isRTL = this._get( inst, "isRTL" ),
			showButtonPanel = this._get( inst, "showButtonPanel" ),
			hideIfNoPrevNext = this._get( inst, "hideIfNoPrevNext" ),
			navigationAsDateFormat = this._get( inst, "navigationAsDateFormat" ),
			numMonths = this._getNumberOfMonths( inst ),
			showCurrentAtPos = this._get( inst, "showCurrentAtPos" ),
			stepMonths = this._get( inst, "stepMonths" ),
			isMultiMonth = ( numMonths[ 0 ] !== 1 || numMonths[ 1 ] !== 1 ),
			currentDate = this._daylightSavingAdjust( ( !inst.currentDay ? new Date( 9999, 9, 9 ) :
				new Date( inst.currentYear, inst.currentMonth, inst.currentDay ) ) ),
			minDate = this._getMinMaxDate( inst, "min" ),
			maxDate = this._getMinMaxDate( inst, "max" ),
			drawMonth = inst.drawMonth - showCurrentAtPos,
			drawYear = inst.drawYear;

		if ( drawMonth < 0 ) {
			drawMonth += 12;
			drawYear--;
		}
		if ( maxDate ) {
			maxDraw = this._daylightSavingAdjust( new Date( maxDate.getFullYear(),
				maxDate.getMonth() - ( numMonths[ 0 ] * numMonths[ 1 ] ) + 1, maxDate.getDate() ) );
			maxDraw = ( minDate && maxDraw < minDate ? minDate : maxDraw );
			while ( this._daylightSavingAdjust( new Date( drawYear, drawMonth, 1 ) ) > maxDraw ) {
				drawMonth--;
				if ( drawMonth < 0 ) {
					drawMonth = 11;
					drawYear--;
				}
			}
		}
		inst.drawMonth = drawMonth;
		inst.drawYear = drawYear;

		prevText = this._get( inst, "prevText" );
		prevText = ( !navigationAsDateFormat ? prevText : this.formatDate( prevText,
			this._daylightSavingAdjust( new Date( drawYear, drawMonth - stepMonths, 1 ) ),
			this._getFormatConfig( inst ) ) );

		prev = ( this._canAdjustMonth( inst, -1, drawYear, drawMonth ) ?
			"<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click'" +
			" title='" + prevText + "'><span class='ui-icon ui-icon-circle-triangle-" + ( isRTL ? "e" : "w" ) + "'>" + prevText + "</span></a>" :
			( hideIfNoPrevNext ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + prevText + "'><span class='ui-icon ui-icon-circle-triangle-" + ( isRTL ? "e" : "w" ) + "'>" + prevText + "</span></a>" ) );

		nextText = this._get( inst, "nextText" );
		nextText = ( !navigationAsDateFormat ? nextText : this.formatDate( nextText,
			this._daylightSavingAdjust( new Date( drawYear, drawMonth + stepMonths, 1 ) ),
			this._getFormatConfig( inst ) ) );

		next = ( this._canAdjustMonth( inst, +1, drawYear, drawMonth ) ?
			"<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click'" +
			" title='" + nextText + "'><span class='ui-icon ui-icon-circle-triangle-" + ( isRTL ? "w" : "e" ) + "'>" + nextText + "</span></a>" :
			( hideIfNoPrevNext ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + nextText + "'><span class='ui-icon ui-icon-circle-triangle-" + ( isRTL ? "w" : "e" ) + "'>" + nextText + "</span></a>" ) );

		currentText = this._get( inst, "currentText" );
		gotoDate = ( this._get( inst, "gotoCurrent" ) && inst.currentDay ? currentDate : today );
		currentText = ( !navigationAsDateFormat ? currentText :
			this.formatDate( currentText, gotoDate, this._getFormatConfig( inst ) ) );

		controls = ( !inst.inline ? "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" +
			this._get( inst, "closeText" ) + "</button>" : "" );

		buttonPanel = ( showButtonPanel ) ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + ( isRTL ? controls : "" ) +
			( this._isInRange( inst, gotoDate ) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'" +
			">" + currentText + "</button>" : "" ) + ( isRTL ? "" : controls ) + "</div>" : "";

		firstDay = parseInt( this._get( inst, "firstDay" ), 10 );
		firstDay = ( isNaN( firstDay ) ? 0 : firstDay );

		showWeek = this._get( inst, "showWeek" );
		dayNames = this._get( inst, "dayNames" );
		dayNamesMin = this._get( inst, "dayNamesMin" );
		monthNames = this._get( inst, "monthNames" );
		monthNamesShort = this._get( inst, "monthNamesShort" );
		beforeShowDay = this._get( inst, "beforeShowDay" );
		showOtherMonths = this._get( inst, "showOtherMonths" );
		selectOtherMonths = this._get( inst, "selectOtherMonths" );
		defaultDate = this._getDefaultDate( inst );
		html = "";

		for ( row = 0; row < numMonths[ 0 ]; row++ ) {
			group = "";
			this.maxRows = 4;
			for ( col = 0; col < numMonths[ 1 ]; col++ ) {
				selectedDate = this._daylightSavingAdjust( new Date( drawYear, drawMonth, inst.selectedDay ) );
				cornerClass = " ui-corner-all";
				calender = "";
				if ( isMultiMonth ) {
					calender += "<div class='ui-datepicker-group";
					if ( numMonths[ 1 ] > 1 ) {
						switch ( col ) {
							case 0: calender += " ui-datepicker-group-first";
								cornerClass = " ui-corner-" + ( isRTL ? "right" : "left" ); break;
							case numMonths[ 1 ] - 1: calender += " ui-datepicker-group-last";
								cornerClass = " ui-corner-" + ( isRTL ? "left" : "right" ); break;
							default: calender += " ui-datepicker-group-middle"; cornerClass = ""; break;
						}
					}
					calender += "'>";
				}
				calender += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + cornerClass + "'>" +
					( /all|left/.test( cornerClass ) && row === 0 ? ( isRTL ? next : prev ) : "" ) +
					( /all|right/.test( cornerClass ) && row === 0 ? ( isRTL ? prev : next ) : "" ) +
					this._generateMonthYearHeader( inst, drawMonth, drawYear, minDate, maxDate,
					row > 0 || col > 0, monthNames, monthNamesShort ) + // draw month headers
					"</div><table class='ui-datepicker-calendar'><thead>" +
					"<tr>";
				thead = ( showWeek ? "<th class='ui-datepicker-week-col'>" + this._get( inst, "weekHeader" ) + "</th>" : "" );
				for ( dow = 0; dow < 7; dow++ ) { // days of the week
					day = ( dow + firstDay ) % 7;
					thead += "<th scope='col'" + ( ( dow + firstDay + 6 ) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "" ) + ">" +
						"<span title='" + dayNames[ day ] + "'>" + dayNamesMin[ day ] + "</span></th>";
				}
				calender += thead + "</tr></thead><tbody>";
				daysInMonth = this._getDaysInMonth( drawYear, drawMonth );
				if ( drawYear === inst.selectedYear && drawMonth === inst.selectedMonth ) {
					inst.selectedDay = Math.min( inst.selectedDay, daysInMonth );
				}
				leadDays = ( this._getFirstDayOfMonth( drawYear, drawMonth ) - firstDay + 7 ) % 7;
				curRows = Math.ceil( ( leadDays + daysInMonth ) / 7 ); // calculate the number of rows to generate
				numRows = ( isMultiMonth ? this.maxRows > curRows ? this.maxRows : curRows : curRows ); //If multiple months, use the higher number of rows (see #7043)
				this.maxRows = numRows;
				printDate = this._daylightSavingAdjust( new Date( drawYear, drawMonth, 1 - leadDays ) );
				for ( dRow = 0; dRow < numRows; dRow++ ) { // create date picker rows
					calender += "<tr>";
					tbody = ( !showWeek ? "" : "<td class='ui-datepicker-week-col'>" +
						this._get( inst, "calculateWeek" )( printDate ) + "</td>" );
					for ( dow = 0; dow < 7; dow++ ) { // create date picker days
						daySettings = ( beforeShowDay ?
							beforeShowDay.apply( ( inst.input ? inst.input[ 0 ] : null ), [ printDate ] ) : [ true, "" ] );
						otherMonth = ( printDate.getMonth() !== drawMonth );
						unselectable = ( otherMonth && !selectOtherMonths ) || !daySettings[ 0 ] ||
							( minDate && printDate < minDate ) || ( maxDate && printDate > maxDate );
						tbody += "<td class='" +
							( ( dow + firstDay + 6 ) % 7 >= 5 ? " ui-datepicker-week-end" : "" ) + // highlight weekends
							( otherMonth ? " ui-datepicker-other-month" : "" ) + // highlight days from other months
							( ( printDate.getTime() === selectedDate.getTime() && drawMonth === inst.selectedMonth && inst._keyEvent ) || // user pressed key
							( defaultDate.getTime() === printDate.getTime() && defaultDate.getTime() === selectedDate.getTime() ) ?

							// or defaultDate is current printedDate and defaultDate is selectedDate
							" " + this._dayOverClass : "" ) + // highlight selected day
							( unselectable ? " " + this._unselectableClass + " ui-state-disabled" : "" ) +  // highlight unselectable days
							( otherMonth && !showOtherMonths ? "" : " " + daySettings[ 1 ] + // highlight custom dates
							( printDate.getTime() === currentDate.getTime() ? " " + this._currentClass : "" ) + // highlight selected day
							( printDate.getTime() === today.getTime() ? " ui-datepicker-today" : "" ) ) + "'" + // highlight today (if different)
							( ( !otherMonth || showOtherMonths ) && daySettings[ 2 ] ? " title='" + daySettings[ 2 ].replace( /'/g,"&#39;")+"'":"")+// cell title (unselectable ? "" :" data-handler='selectDay' data-event='click' data-month='"+printDate.getMonth()+"' data-year='"+printDate.getFullYear()+"'")+">"+// actions (otherMonth &&!showOtherMonths ? "&#xa0;" :// display for other months (unselectable ? "<span class='ui-state-default'>"+printDate.getDate()+"</span>" :"<a class='ui-state-default"+(printDate.getTime()===today.getTime() ? " ui-state-highlight" :"")+(printDate.getTime()===currentDate.getTime() ? " ui-state-active" :"")+// highlight selected day (otherMonth ? " ui-priority-secondary" :"")+// distinguish dates from other months "' href='#'>"+printDate.getDate()+"</a>"))+"</td>";// display selectable date printDate.setDate(printDate.getDate()+1);printDate=this._daylightSavingAdjust(printDate)}calender +=tbody+"</tr>"},_generateMonthYearHeader:function(inst,drawMonth,drawYear,maxDate,minDate,monthNames,monthNamesShort),secondary{:var inMinYear,inMaxYear,month,years,thisYear,determineYear,year,endYear,changeMonth=this._get(inst,"changeMonth"),changeYear=this._get(inst,"changeYear"),showMonthAfterYear=this._get(inst,"showMonthAfterYear"),html="<div class='ui-datepicker-title'>",monthHtml="";:// Month selection if (secondary ||!changeMonth){monthHtml +="<span class='ui-datepicker-month'>"+monthNames[ drawMonth ]+"</span>"}else{month++){if ((!inMinYear || month >=minDate.getMonth()) && (!inMaxYear || month <=maxDate.getMonth())){monthHtml +="<option value='"+month+"'"+(month===drawMonth ? " selected='selected'":"")+">"+monthNamesShort[ month ]+"</option>"}if (!showMonthAfterYear){html +=monthHtml+(secondary ||!(changeMonth && changeYear) ? "&#xa0;":"")}// Year selection if (!inst.yearshtml){:inst.yearshtml="";:if (secondary ||!changeYear){html +="<span class='ui-datepicker-year'>"+drawYear+"</span>"}else{determineYear=function(value){var year=(value.match(/c[+\-].*/) ? drawYear+parseInt(value.substring(1),10):(value.match(/[+\-].*/) ? thisYear+parseInt(value,10) :parseInt(value,10)));return (isNaN(year) ? thisYear:year)};year=determineYear(years[ 0 ]);endYear=Math.max(year,determineYear(years[ 1 ] || ""));year=(minDate ? Math.max(year,maxDate.getFullYear()):endYear);inst.yearshtml +="<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";for (;year <=endYear;year++),minDate.getFullYear()):year);endYear=(maxDate ? Math.min(endYear{inst.yearshtml +="<option value='"+year+"'"+(year===drawYear ? " selected='selected'":"")+">"+year+"</option>"}"yearSuffix");if (showMonthAfterYear),html +=this._get(inst{html +=(secondary ||!(changeMonth && changeYear) ? "&#xa0;":"")+monthHtml},_adjustInstDate:function(inst,offset,period){var year=inst.selectedYear+(period==="Y" ? offset:0),month=inst.selectedMonth+(period==="M" ? offset :0),day=Math.min(inst.selectedDay,this._getDaysInMonth(year,month))+(period==="D" ? offset :0),date=this._restrictMinMax(inst,this._daylightSavingAdjust(new Date(year,month,day)));:inst.selectedDay=date.getDate();:inst.drawMonth=inst.selectedMonth=date.getMonth();:inst.drawYear=inst.selectedYear=date.getFullYear();:if (period==="M" || period==="Y"){this._notifyChange(inst)},_restrictMinMax:function(inst,date){var minDate=this._getMinMaxDate(inst,"min"),maxDate=this._getMinMaxDate(inst,"max"),newDate=(minDate && date < minDate ? minDate:date);return (maxDate && newDate>maxDate ? maxDate:newDate)},_notifyChange:function(inst){:var onChange=this._get(inst,"onChangeMonthYear");if (onChange){onChange.apply((inst.input ? inst.input[ 0 ]:null),[ inst.selectedYear,inst.selectedMonth+1,inst ])},_getNumberOfMonths:function(inst){:var numMonths=this._get(inst,"numberOfMonths");return (numMonths==null ? [ 1,1 ]:(typeof numMonths==="number" ? [ 1,numMonths ] :numMonths))},_getMinMaxDate:function(inst,minMax){return this._determineDate(inst,this._get(inst,minMax+"Date"),null)},_getDaysInMonth:function(year,month){return 32 - this._daylightSavingAdjust(new Date(year,month,32)).getDate()},_getFirstDayOfMonth:function(year,month){return new Date(year,month,1).getDay()},_canAdjustMonth:function(inst,curMonth),curYear,offset{var numMonths=this._getNumberOfMonths(inst),date=this._daylightSavingAdjust(new Date(curYear,curMonth+(offset < 0 ? offset:numMonths[ 0 ] * numMonths[ 1 ]),1));:if (offset < 0){date.setDate(this._getDaysInMonth(date.getFullYear(),date.getMonth()))},_isInRange:function(inst,date){:var yearSplit,currentYear,minDate=this._getMinMaxDate(inst,"min"),maxDate=this._getMinMaxDate(inst,"max"),minYear=null,maxYear=null,years=this._get(inst,"yearRange");:if (years){yearSplit=years.split(":");:currentYear=new Date().getFullYear();:minYear=parseInt(yearSplit[ 0 ],10);:maxYear=parseInt(yearSplit[ 1 ],10);:if (yearSplit[ 0 ].match(/[+\-].*/)){minYear +=currentYear}if (yearSplit[ 1 ].match(/[+\-].*/)){maxYear +=currentYear},_getFormatConfig:function(inst){:var shortYearCutoff=this._get(inst,"shortYearCutoff");shortYearCutoff=(typeof shortYearCutoff!=="string" ? shortYearCutoff:new Date().getFullYear() % 100+parseInt(shortYearCutoff,10));return{shortYearCutoff:shortYearCutoff,dayNamesShort:this._get(inst,"dayNamesShort"),dayNames:this._get(inst,"dayNames"),monthNamesShort:this._get(inst,"monthNamesShort"),monthNames:this._get(inst,"monthNames")},_formatDate:function(inst,day,month,year){:if (!day){inst.currentDay=inst.selectedDay;:inst.currentMonth=inst.selectedMonth;:inst.currentYear=inst.selectedYear});function datepicker_bindHover(dpDiv){:var selector="button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";:return dpDiv.on("mouseout",selector,function(){$(this).removeClass("ui-state-hover");:if (this.className.indexOf("ui-datepicker-prev")!==-1){$(this).removeClass("ui-datepicker-prev-hover")}function datepicker_handleMouseover(){if (!$.datepicker._isDisabledDatepicker(datepicker_instActive.inline ? datepicker_instActive.dpDiv.parent()[ 0 ] :datepicker_instActive.input[ 0 ])){$(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover");:$(this).addClass("ui-state-hover");:if (this.className.indexOf("ui-datepicker-prev")!==-1){$(this).addClass("ui-datepicker-prev-hover")}function datepicker_extendRemove(target,props){:$.extend(target,props);:for (var name in props){if (props[ name ]==null){target[ name ]=props[ name ]}$.fn.datepicker=function(options){if (!this.length){return this}if (!$.datepicker.initialized){:$(document).on("mousedown",$.datepicker._checkExternalClick);:$.datepicker.initialized=true}if ($("#"+$.datepicker._mainDivId).length===0){$("body").append($.datepicker.dpDiv)}1);if (typeof options==="string" && (options==="isDisabled" || options==="getDate" || options==="widget")),if (options==="option" && arguments.length===2 && typeof arguments[ 1 ]==="string"),var otherArgs=Array.prototype.slice.call(arguments{return $.datepicker[ "_"+options+"Datepicker" ]. apply($.datepicker,[ this[ 0 ] ].concat(otherArgs))}return this.each(function(){typeof options==="string" ? $.datepicker[ "_"+options+"Datepicker" ]. apply($.datepicker,[ this ].concat(otherArgs)):$.datepicker._attachDatepicker(this,options)};$.datepicker=new Datepicker();// singleton instance $.datepicker.initialized=false;$.datepicker.uuid=new Date().getTime();$.datepicker.version="1.12.1";var widgetsDatepicker=$.datepicker;// This file is deprecated var ie=$.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());/*!
 * jQuery UI Mouse 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *///>>label:Mouse //>>group:Widgets //>>description:Abstracts mouse-based interactions to assist in creating certain widgets. //>>docs:http://api.jqueryui.com/mouse/ var mouseHandled=false;$(document).on("mouseup",function(){mouseHandled=false},);var widgetsMouse=$.widget("ui.mouse"{version:"1.12.1",options:{cancel:"input, textarea, button, select, option",distance:1,delay:0},_mouseInit:function(){:var that=this;:this.element .on("mousedown."+this.widgetName,function(event){return that._mouseDown(event)}) .on("click."+this.widgetName,function(event){:if (true===$.data(event.target,that.widgetName+".preventClickEvent")){$.removeData(event.target,that.widgetName+".preventClickEvent");:event.stopImmediatePropagation();:return false},// TODO:make sure destroying one instance of mouse doesn't mess with
	// other instances of mouse
	_mouseDestroy: function() {
		this.element.off( "." + this.widgetName );
		if ( this._mouseMoveDelegate ) {
			this.document
				.off( "mousemove." + this.widgetName, this._mouseMoveDelegate )
				.off( "mouseup." + this.widgetName, this._mouseUpDelegate );
		}
	},

	_mouseDown: function( event ) {

		// don't let more than one widget handle mouseStart if (mouseHandled){return}// event.target.nodeName works around a bug in IE 8 with // disabled inputs (#7620) elIsCancel=(typeof this.options.cancel==="string" && event.target.nodeName ? $(event.target).closest(this.options.cancel).length:false);if (!btnIsLeft || elIsCancel ||!this._mouseCapture(event)),btnIsLeft=(event.which===1),this._mouseMoved=false;// We may have missed mouseup (out of window) (this._mouseStarted && this._mouseUp(event));this._mouseDownEvent=event;var that=this{return true}this.mouseDelayMet=!this.options.delay;if (!this.mouseDelayMet){this._mouseDelayTimer=setTimeout(function(){that.mouseDelayMet=true}if (this._mouseDistanceMet(event) && this._mouseDelayMet(event)){:this._mouseStarted=(this._mouseStart(event)!==false);:if (!this._mouseStarted){event.preventDefault();:return true}// Click event may never have fired (Gecko & Opera) if (true===$.data(event.target,this.widgetName+".preventClickEvent")){$.removeData(event.target,this.widgetName+".preventClickEvent")}// These delegates are required to keep context this._mouseMoveDelegate=function(event){return that._mouseMove(event)};this._mouseUpDelegate=function(event){return that._mouseUp(event)},_mouseMove:function(event){:// Only check for mouseups outside the document if you've moved inside the document
		// at least once. This prevents the firing of mouseup in the case of IE<9, which will
		// fire a mousemove event if content is placed under the cursor. See #7778
		// Support: IE <9
		if ( this._mouseMoved ) {

			// IE mouseup check - mouseup happened when mouse was out of window
			if ( $.ui.ie && ( !document.documentMode || document.documentMode < 9 ) &&
					!event.button ) {
				return this._mouseUp( event );

			// Iframe mouseup check - mouseup occurred in another document
			} else if ( !event.which ) {

				// Support: Safari <=8 - 9
				// Safari sets which to 0 if you press any of the following keys
				// during a drag (#14461)
				if ( event.originalEvent.altKey || event.originalEvent.ctrlKey ||
						event.originalEvent.metaKey || event.originalEvent.shiftKey ) {
					this.ignoreMissingWhich = true;
				} else if ( !this.ignoreMissingWhich ) {
					return this._mouseUp( event );
				}
			}
		}

		if ( event.which || event.button ) {
			this._mouseMoved = true;
		}

		if ( this._mouseStarted ) {
			this._mouseDrag( event );
			return event.preventDefault();
		}

		if ( this._mouseDistanceMet( event ) && this._mouseDelayMet( event ) ) {
			this._mouseStarted =
				( this._mouseStart( this._mouseDownEvent, event ) !== false );
			( this._mouseStarted ? this._mouseDrag( event ) : this._mouseUp( event ) );
		}

		return !this._mouseStarted;
	},

	_mouseUp: function( event ) {
		this.document
			.off( "mousemove." + this.widgetName, this._mouseMoveDelegate )
			.off( "mouseup." + this.widgetName, this._mouseUpDelegate );

		if ( this._mouseStarted ) {
			this._mouseStarted = false;

			if ( event.target === this._mouseDownEvent.target ) {
				$.data( event.target, this.widgetName + ".preventClickEvent", true );
			}

			this._mouseStop( event );
		}

		if ( this._mouseDelayTimer ) {
			clearTimeout( this._mouseDelayTimer );
			delete this._mouseDelayTimer;
		}

		this.ignoreMissingWhich = false;
		mouseHandled = false;
		event.preventDefault();
	},

	_mouseDistanceMet: function( event ) {
		return ( Math.max(
				Math.abs( this._mouseDownEvent.pageX - event.pageX ),
				Math.abs( this._mouseDownEvent.pageY - event.pageY )
			) >= this.options.distance
		);
	},

	_mouseDelayMet: function(  ) {
		return this.mouseDelayMet;
	},
	_mouseCapture: function(  ) { return true; }
} );




// $.ui.plugin is deprecated. Use $.widget() extensions instead.
var plugin = $.ui.plugin = {
	add: function( module, option, set ) {
		var i,
			proto = $.ui[ module ].prototype;
		for ( i in set ) {
			proto.plugins[ i ] = proto.plugins[ i ] || [];
			proto.plugins[ i ].push( [ option, set[ i ] ] );
		}
	},
	call: function( instance, name, args, allowDisconnected ) {
		var i,
			set = instance.plugins[ name ];

		if ( !set ) {
			return;
		}

		if ( !allowDisconnected && ( !instance.element[ 0 ].parentNode ||
				instance.element[ 0 ].parentNode.nodeType === 11 ) ) {
			return;
		}

		for ( i = 0; i < set.length; i++ ) {
			if ( instance.options[ set[ i ][ 0 ] ] ) {
				set[ i ][ 1 ].apply( instance.element, args );
			}
		}
	}
};



var safeBlur = $.ui.safeBlur = function( element ) {

	// Support: IE9 - 10 only
	// If the <body> is blurred, IE will switch windows, see #9420
	if ( element && element.nodeName.toLowerCase() !== "body" ) {
		$( element ).trigger( "blur" );
	}
};


/*!
 * jQuery UI Draggable 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
//>>label: Draggable
//>>group: Interactions
//>>description: Enables dragging functionality for any element.
//>>docs: http://api.jqueryui.com/draggable/
//>>demos: http://jqueryui.com/draggable/
//>>css.structure: ../../themes/base/draggable.css



$.widget( "ui.draggable", $.ui.mouse, {
	version: "1.12.1",
	widgetEventPrefix: "drag",
	options: {
		addClasses: true,
		appendTo: "parent",
		axis: false,
		connectToSortable: false,
		containment: false,
		cursor: "auto",
		cursorAt: false,
		grid: false,
		handle: false,
		helper: "original",
		iframeFix: false,
		opacity: false,
		refreshPositions: false,
		revert: false,
		revertDuration: 500,
		scope: "default",
		scroll: true,
		scrollSensitivity: 20,
		scrollSpeed: 20,
		snap: false,
		snapMode: "both",
		snapTolerance: 20,
		stack: false,
		zIndex: false,

		// Callbacks
		drag: null,
		start: null,
		stop: null
	},
	_create: function() {

		if ( this.options.helper === "original" ) {
			this._setPositionRelative();
		}
		if ( this.options.addClasses ) {
			this._addClass( "ui-draggable" );
		}
		this._setHandleClassName();

		this._mouseInit();
	},

	_setOption: function( key, value ) {
		this._super( key, value );
		if ( key === "handle" ) {
			this._removeHandleClassName();
			this._setHandleClassName();
		}
	},

	_destroy: function() {
		if ( ( this.helper || this.element ).is( ".ui-draggable-dragging" ) ) {
			this.destroyOnClear = true;
			return;
		}
		this._removeHandleClassName();
		this._mouseDestroy();
	},

	_mouseCapture: function( event ) {
		var o = this.options;

		// Among others, prevent a drag on a resizable-handle
		if ( this.helper || o.disabled ||
				$( event.target ).closest( ".ui-resizable-handle" ).length > 0 ) {
			return false;
		}

		//Quit if we're not on a valid handle this.handle=this._getHandle(event);:if (!this.handle){return false},_blockFrames:function(selector){:this.iframeBlocks=this.document.find(selector).map(function(){var iframe=$(this);:return $("<div>") .css("position","absolute") .appendTo(iframe.parent()) .outerWidth(iframe.outerWidth()) .outerHeight(iframe.outerHeight()) .offset(iframe.offset())[ 0 ]},_unblockFrames:function(){:if (this.iframeBlocks){this.iframeBlocks.remove();:delete this.iframeBlocks},_blurActiveElement:function(event){:var activeElement=$.ui.safeActiveElement(this.document[ 0 ]),target=$(event.target);:// Don't blur if the event occurred on an element that is within
		// the currently focused element
		// See #10527, #12472
		if ( target.closest( activeElement ).length ) {
			return;
		}

		// Blur any element that currently has focus, see #4261
		$.ui.safeBlur( activeElement );
	},

	_mouseStart: function( event ) {

		var o = this.options;

		//Create and append the visible helper
		this.helper = this._createHelper( event );

		this._addClass( this.helper, "ui-draggable-dragging" );

		//Cache the helper size
		this._cacheHelperProportions();

		//If ddmanager is used for droppables, set the global draggable
		if ( $.ui.ddmanager ) {
			$.ui.ddmanager.current = this;
		}

		

		//Cache the margins of the original element
		this._cacheMargins();

		//Store the helper's css position this.cssPosition=this.helper.css("position");:this.scrollParent=this.helper.scrollParent(true);:this.offsetParent=this.helper.offsetParent();:this.hasFixedAncestor=this.helper.parents().filter(function(){return $(this).css("position")==="fixed"}).length>0;//The element's absolute position on the page minus margins
		this.positionAbs = this.element.offset();
		this._refreshOffsets( event );

		//Generate the original position
		this.originalPosition = this.position = this._generatePosition( event, false );
		this.originalPageX = event.pageX;
		this.originalPageY = event.pageY;

		//Adjust the mouse offset relative to the helper if "cursorAt" is supplied
		( o.cursorAt && this._adjustOffsetFromHelper( o.cursorAt ) );

		//Set a containment if given in the options
		this._setContainment();

		//Trigger event + callbacks
		if ( this._trigger( "start", event ) === false ) {
			this._clear();
			return false;
		}

		//Recache the helper size
		this._cacheHelperProportions();

		//Prepare the droppable offsets
		if ( $.ui.ddmanager && !o.dropBehaviour ) {
			$.ui.ddmanager.prepareOffsets( this, event );
		}

		// Execute the drag once - this causes the helper not to be visible before getting its
		// correct position
		this._mouseDrag( event, true );

		// If the ddmanager is used for droppables, inform the manager that dragging has started
		// (see #5003)
		if ( $.ui.ddmanager ) {
			$.ui.ddmanager.dragStart( this, event );
		}

		return true;
	},

	_refreshOffsets: function( event ) {
		this.offset = {
			top: this.positionAbs.top - this.margins.top,
			left: this.positionAbs.left - this.margins.left,
			scroll: false,
			parent: this._getParentOffset(),
			relative: this._getRelativeOffset()
		};

		this.offset.click = {
			left: event.pageX - this.offset.left,
			top: event.pageY - this.offset.top
		};
	},

	_mouseDrag: function( event, noPropagation ) {

		// reset any necessary cached properties (see #5009)
		if ( this.hasFixedAncestor ) {
			this.offset.parent = this._getParentOffset();
		}

		//Compute the helpers position
		this.position = this._generatePosition( event, true );
		this.positionAbs = this._convertPositionTo( "absolute" );

		//Call plugins and callbacks and use the resulting position if something is returned
		if ( !noPropagation ) {
			var ui = this._uiHash();
			if ( this._trigger( "drag", event, ui ) === false ) {
				this._mouseUp( new $.Event( "mouseup", event ) );
				return false;
			}
			this.position = ui.position;
		}

		this.helper[ 0 ].style.left = this.position.left + "px";
		this.helper[ 0 ].style.top = this.position.top + "px";

		if ( $.ui.ddmanager ) {
			$.ui.ddmanager.drag( this, event );
		}

		return false;
	},

	_mouseStop: function( event ) {

		//If we are using droppables, inform the manager about the drop
		var that = this,
			dropped = false;
		if ( $.ui.ddmanager && !this.options.dropBehaviour ) {
			dropped = $.ui.ddmanager.drop( this, event );
		}

		//if a drop comes from outside (a sortable)
		if ( this.dropped ) {
			dropped = this.dropped;
			this.dropped = false;
		}

		if ( ( this.options.revert === "invalid" && !dropped ) ||
				( this.options.revert === "valid" && dropped ) ||
				this.options.revert === true || ( $.isFunction( this.options.revert ) &&
				this.options.revert.call( this.element, dropped ) )
		) {
			$( this.helper ).animate(
				this.originalPosition,
				parseInt( this.options.revertDuration, 10 ),
				function() {
					if ( that._trigger( "stop", event ) !== false ) {
						that._clear();
					}
				}
			);
		} else {
			if ( this._trigger( "stop", event ) !== false ) {
				this._clear();
			}
		}

		return false;
	},

	_mouseUp: function( event ) {
		this._unblockFrames();

		// If the ddmanager is used for droppables, inform the manager that dragging has stopped
		// (see #5003)
		if ( $.ui.ddmanager ) {
			$.ui.ddmanager.dragStop( this, event );
		}

		// Only need to focus if the event occurred on the draggable itself, see #10527
		if ( this.handleElement.is( event.target ) ) {

			// The interaction is over; whether or not the click resulted in a drag,
			// focus the element
			this.element.trigger( "focus" );
		}

		return $.ui.mouse.prototype._mouseUp.call( this, event );
	},

	cancel: function() {

		if ( this.helper.is( ".ui-draggable-dragging" ) ) {
			this._mouseUp( new $.Event( "mouseup", { target: this.element[ 0 ] } ) );
		} else {
			this._clear();
		}

		return this;

	},

	_getHandle: function( event ) {
		return this.options.handle ?
			!!$( event.target ).closest( this.element.find( this.options.handle ) ).length :
			true;
	},

	_setHandleClassName: function() {
		this.handleElement = this.options.handle ?
			this.element.find( this.options.handle ) : this.element;
		this._addClass( this.handleElement, "ui-draggable-handle" );
	},

	_removeHandleClassName: function() {
		this._removeClass( this.handleElement, "ui-draggable-handle" );
	},

	_createHelper: function( event ) {

		var o = this.options,
			helperIsFunction = $.isFunction( o.helper ),
			helper = helperIsFunction ?
				$( o.helper.apply( this.element[ 0 ], [ event ] ) ) :
				( o.helper === "clone" ?
					this.element.clone().removeAttr( "id" ) :
					this.element );

		if ( !helper.parents( "body" ).length ) {
			helper.appendTo( ( o.appendTo === "parent" ?
				this.element[ 0 ].parentNode :
				o.appendTo ) );
		}

		// Http://bugs.jqueryui.com/ticket/9446
		// a helper function can return the original element
		// which wouldn't have been set to relative in _create if (helperIsFunction && helper[ 0 ]===this.element[ 0 ]){this._setPositionRelative()}if (helper[ 0 ]!==this.element[ 0 ] &&!(/(fixed|absolute)/).test(helper.css("position"))){helper.css("position","absolute")},_setPositionRelative:function(){if (!(/^(?:r|a|f)/).test(this.element.css("position"))){this.element[ 0 ].style.position="relative"},_adjustOffsetFromHelper:function(obj){if (typeof obj==="string"){obj=obj.split(" ")}if ($.isArray(obj)){obj={left:+obj[ 0 ],top:+obj[ 1 ] || 0}if ("left" in obj){this.offset.click.left=obj.left+this.margins.left}if ("right" in obj){this.offset.click.left=this.helperProportions.width - obj.right+this.margins.left}if ("top" in obj){this.offset.click.top=obj.top+this.margins.top}if ("bottom" in obj){this.offset.click.top=this.helperProportions.height - obj.bottom+this.margins.top},_isRootNode:function(element){return (/(html|body)/i).test(element.tagName) || element===this.document[ 0 ]},_getParentOffset:function(){// This is a special case where we need to modify a offset calculated on start,since the // following happened:// 1. The position of the helper is absolute,so it's position is calculated based on the
		// next positioned parent
		// 2. The actual offset parent is a child of the scroll parent, and the scroll parent isn't // the document,which means that the scroll is included in the initial calculation of the // offset of the parent,and never recalculated upon drag if (this.cssPosition==="absolute" && this.scrollParent[ 0 ]!==document && $.contains(this.scrollParent[ 0 ],this.offsetParent[ 0 ])){po.left +=this.scrollParent.scrollLeft();:po.top +=this.scrollParent.scrollTop()}if (this._isRootNode(this.offsetParent[ 0 ])){po={top:0,left:0},_getRelativeOffset:function(){if (this.cssPosition!=="relative"){return{top:0,left:0}scrollIsRootNode=this._isRootNode(this.scrollParent[ 0 ]);return,var p=this.element.position(){top:p.top - (parseInt(this.helper.css("top"),10) || 0)+(!scrollIsRootNode ? this.scrollParent.scrollTop():0),left:p.left - (parseInt(this.helper.css("left"),10) || 0)+(!scrollIsRootNode ? this.scrollParent.scrollLeft() :0)},_cacheMargins:function(){this.margins={left:(parseInt(this.element.css("marginLeft"),10) || 0),top:(parseInt(this.element.css("marginTop"),10) || 0),right:(parseInt(this.element.css("marginRight"),10) || 0),bottom:(parseInt(this.element.css("marginBottom"),10) || 0)},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()},_setContainment:function(){:var isUserScrollable,c,ce,o=this.options,document=this.document[ 0 ];:this.relativeContainer=null;:if (!o.containment){this.containment=null;:return}if (o.containment==="window"){:this.containment=[ $(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left,$(window).scrollTop() - this.offset.relative.top - this.offset.parent.top,$(window).scrollLeft()+$(window).width() - this.helperProportions.width - this.margins.left,$(window).scrollTop()+($(window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top ];:return}if (o.containment==="document"){:this.containment=[ 0,0,$(document).width() - this.helperProportions.width - this.margins.left,($(document).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top ];:return}if (o.containment.constructor===Array){:this.containment=o.containment;:return}if (o.containment==="parent"){o.containment=this.helper[ 0 ].parentNode}c=$(o.containment);ce=c[ 0 ];if (!ce){return},_convertPositionTo:function(d,pos){if (!pos){pos=this.position}scrollIsRootNode=this._isRootNode(this.scrollParent[ 0 ]);return,var mod=d==="absolute" ? 1:-1{top:(// The absolute mouse position pos.top+// Only for relative positioned nodes:Relative offset from element to offset parent this.offset.relative.top * mod+// The offsetParent's offset without borders (offset + border)
				this.offset.parent.top * mod -
				( ( this.cssPosition === "fixed" ?
					-this.offset.scroll.top :
					( scrollIsRootNode ? 0 : this.offset.scroll.top ) ) * mod )
			),
			left: (

				// The absolute mouse position
				pos.left +

				// Only for relative positioned nodes: Relative offset from element to offset parent
				this.offset.relative.left * mod +

				// The offsetParent's offset without borders (offset+border) this.offset.parent.left * mod - ((this.cssPosition==="fixed" ? -this.offset.scroll.left:(scrollIsRootNode ? 0 :this.offset.scroll.left)) * mod))},_generatePosition:function(event,constrainPosition){:var containment,co,top,left,o=this.options,scrollIsRootNode=this._isRootNode(this.scrollParent[ 0 ]),pageX=event.pageX,pageY=event.pageY;// Cache the scroll if (!scrollIsRootNode ||!this.offset.scroll){this.offset.scroll={top:this.scrollParent.scrollTop(),left:this.scrollParent.scrollLeft()},draggable),stop:function(event,ui{,ui{item:draggable.element});draggable.cancelHelperRemoval=false;$.each(draggable.sortables,function(){:var sortable=this;:if (sortable.isOver){sortable.isOver=0;:// Allow this sortable to handle removing the helper draggable.cancelHelperRemoval=true;:sortable.cancelHelperRemoval=false;// Use _storedCSS To restore properties in the sortable,// as this also handles revert (#9675) since the draggable // may have modified them in unexpected ways (#8809) sortable._storedCSS={position:sortable.placeholder.css("position"),top:sortable.placeholder.css("top"),left:sortable.placeholder.css("left")}// and our own helper (so it doesn't create a new one)
					event.target = sortable.currentItem[ 0 ];
					sortable._mouseCapture( event, true );
					sortable._mouseStart( event, true, true );

					// Because the browser event is way off the new appended portlet,
					// modify necessary variables to reflect the changes
					sortable.offset.click.top = draggable.offset.click.top;
					sortable.offset.click.left = draggable.offset.click.left;
					sortable.offset.parent.left -= draggable.offset.parent.left -
						sortable.offset.parent.left;
					sortable.offset.parent.top -= draggable.offset.parent.top -
						sortable.offset.parent.top;

					draggable._trigger( "toSortable", event );

					// Inform draggable that the helper is in a valid drop zone,
					// used solely in the revert option to handle "valid/invalid".
					draggable.dropped = sortable.element;

					// Need to refreshPositions of all sortables in the case that
					// adding to one sortable changes the location of the other sortables (#9675)
					$.each( draggable.sortables, function() {
						this.refreshPositions();
					} );

					// Hack so receive/update callbacks work (mostly)
					draggable.currentItem = draggable.element;
					sortable.fromOutside = draggable;
				}

				if ( sortable.currentItem ) {
					sortable._mouseDrag( event );

					// Copy the sortable's position because the draggable's can potentially reflect
					// a relative position, while sortable is always absolute, which the dragged
					// element has now become. (#8809)
					ui.position = sortable.position;
				}
			} else {

				// If it doesn't intersect with the sortable,// so revert must be temporarily false until after mouseStop is called. sortable.options._revert=sortable.options.revert;sortable.options.revert=false;sortable._trigger("out",// we fake the drag stop of the sortable,;// Fire the start events of the sortable with our passed browser event,and it intersected before,but make sure it doesn't remove
				// the helper by using cancelHelperRemoval.
				if ( sortable.isOver ) {

					sortable.isOver = 0;
					sortable.cancelHelperRemoval = true;

					// Calling sortable's mouseStop would trigger a revert,event,sortable._uiHash(sortable));sortable._mouseStop(event,true);// Restore sortable behaviors that were modfied // when the draggable entered the sortable area (#9481) sortable.options.revert=sortable.options._revert;sortable.options.helper=sortable.options._helper;if (sortable.placeholder){sortable.placeholder.remove()},_change:{e:function(event,dx){return{width:this.originalSize.width+dx},dx),w:function(event{:var cs=this.originalSize,sp=this.originalPosition;return{left:sp.left+dx,width:cs.width - dx},dx,dy),n:function(event{:var cs=this.originalSize,sp=this.originalPosition;return{top:sp.top+dy,height:cs.height - dy},dx,dy),s:function(event{return{height:this.originalSize.height+dy},dx,dy),se:function(event{return $.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[ event,dx,dy ]))},dx,dy),sw:function(event{return $.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[ event,dx,dy ]))},dx,dy),ne:function(event{return $.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[ event,dx,dy ]))},dx,dy),nw:function(event{return $.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[ event,dx,dy ]))},_propagate:function(n,event){:$.ui.plugin.call(this,n,[ event,this.ui() ]);:(n!=="resize" && this._trigger(n,event,this.ui()))},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition},);$.ui.plugin.add("resizable","animate"{stop:function(event){var that=$(this).resizable("instance"),o=that.options,pr=that._proportionallyResizeElements,ista=pr.length && (/textarea/i).test(pr[ 0 ].nodeName),soffseth=ista && that._hasScroll(pr[ 0 ],"left") ? 0 :that.sizeDiff.height,soffsetw=ista ? 0 :that.sizeDiff.width,style={width:(that.size.width - soffsetw),height:(that.size.height - soffseth)},left=(parseFloat(that.element.css("left"))+(that.position.left - that.originalPosition.left)) || null,top && left ?,top=(parseFloat(that.element.css("top"))+(that.position.top - that.originalPosition.top)) || null;that.element.animate($.extend(style{top:top,left:left},){duration:o.animateDuration,easing:o.animateEasing,step:function(){var data={width:parseFloat(that.element.css("width")),height:parseFloat(that.element.css("height")),top:parseFloat(that.element.css("top")),left:parseFloat(that.element.css("left"))};if (pr && pr.length){$(pr[ 0 ]).css({width:data.width,height:data.height},);$.ui.plugin.add("resizable","containment"{start:function(){var element,p,co,ch,cw,width,height,that=$(this).resizable("instance"),o=that.options,el=that.element,oc=o.containment,ce=(oc instanceof $) ? oc.get(0):(/parent/.test(oc)) ? el.parent().get(0) :oc;:if (!ce){return}that.containerElement=$(ce);if (/document/.test(oc) || oc===document){that.containerOffset={left:0,top:0};that.containerPosition={left:0,top:0};that.parentData={element:$(document),left:0,top:0,width:$(document).width(),height:$(document).height() || document.body.parentNode.scrollHeight});that.containerOffset=element.offset();that.containerPosition=element.position();that.containerSize={height:(element.innerHeight() - p[ 3 ]),width:(element.innerWidth() - p[ 1 ])};co=that.containerOffset;ch=that.containerSize.height;cw=that.containerSize.width;width=(that._hasScroll (ce,"left") ? ce.scrollWidth:cw);height=(that._hasScroll (ce) ? ce.scrollHeight:ch);that.parentData={element:ce,left:co.left,top:co.top,width:width,height:height},resize:function(event){var woset,hoset,isParent,isOffsetRelative,that=$(this).resizable("instance"),o=that.options,co=that.containerOffset,cp=that.position,pRatio=that._aspectRatio || event.shiftKey,cop={top:0,left:0},ce=that.containerElement,continueResize=true;if (ce[ 0 ]!==document && (/static/).test(ce.css("position"))){cop=co}if (cp.left < (that._helper ? co.left :0)){that.size.width=that.size.width+(that._helper ? (that.position.left - co.left):(that.position.left - cop.left));:if (pRatio){that.size.height=that.size.width / that.aspectRatio;:continueResize=false}if (cp.top < (that._helper ? co.top :0)){that.size.height=that.size.height+(that._helper ? (that.position.top - co.top):that.position.top);:if (pRatio){that.size.width=that.size.height * that.aspectRatio;:continueResize=false}isParent=that.containerElement.get(0)===that.element.parent().get(0);isOffsetRelative=/relative|absolute/.test(that.containerElement.css("position"));if (isParent && isOffsetRelative){:that.offset.left=that.parentData.left+that.position.left;:that.offset.top=that.parentData.top+that.position.top}woset=Math.abs(that.sizeDiff.width+(that._helper ? that.offset.left - cop.left:(that.offset.left - co.left)));hoset=Math.abs(that.sizeDiff.height+(that._helper ? that.offset.top - cop.top:(that.offset.top - co.top)));if (woset+that.size.width >=that.parentData.width){:that.size.width=that.parentData.width - woset;:if (pRatio){that.size.height=that.size.width / that.aspectRatio;:continueResize=false}if (hoset+that.size.height >=that.parentData.height){:that.size.height=that.parentData.height - hoset;:if (pRatio){that.size.width=that.size.height * that.aspectRatio;:continueResize=false}if (!continueResize){:that.position.left=that.prevPosition.left;:that.position.top=that.prevPosition.top;:that.size.width=that.prevSize.width;:that.size.height=that.prevSize.height},stop:function(){if (that._helper &&!o.animate && (/relative/).test(ce.css("position"))){$(this).css({left:ho.left - cop.left - co.left,width:w,height:h}if (that._helper &&!o.animate && (/static/).test(ce.css("position"))){$(this).css({left:ho.left - cop.left - co.left,width:w,height:h},);$.ui.plugin.add("resizable","alsoResize"{start:function(){var that=$(this).resizable("instance"),o=that.options;:$(o.alsoResize).each(function(){var el=$(this);el.data("ui-resizable-alsoresize",{width:parseFloat(el.width()),height:parseFloat(el.height()),left:parseFloat(el.css("left")),top:parseFloat(el.css("top"))},resize:function(event,ui){var that=$(this).resizable("instance"),o=that.options,os=that.originalSize,op=that.originalPosition,delta={height:(that.size.height - os.height) || 0,width:(that.size.width - os.width) || 0,top:(that.position.top - op.top) || 0,left:(that.position.left - op.left) || 0};$(o.alsoResize).each(function(){,"height","height" ]:[ "width","left" ];$.each(css,"top",css=el.parents(ui.originalElement[ 0 ]).length ? [ "width",function(i,prop){:var sum=(start[ prop ] || 0)+(delta[ prop ] || 0);:if (sum && sum >=0){style[ prop ]=sum || null},);$.ui.plugin.add("resizable","ghost"{start:function(){var that=$(this).resizable("instance"),cs=that.size;:that.ghost=that.originalElement.clone();that.ghost.css({opacity:.25,display:"block",position:"relative",height:cs.height,width:cs.width,margin:0,left:0,top:0});that._addClass(that.ghost,"ui-resizable-ghost");// DEPRECATED // TODO:remove after 1.12 if ($.uiBackCompat!==false && typeof that.options.ghost==="string"){// Ghost option that.ghost.addClass(this.options.ghost)},resize:function(){:var that=$(this).resizable("instance");if (that.ghost){that.ghost.css({position:"relative",height:that.size.height,width:that.size.width},stop:function(){:var that=$(this).resizable("instance");:if (that.ghost && that.helper){that.helper.get(0).removeChild(that.ghost.get(0))},);$.ui.plugin.add("resizable","grid"{resize:function(){var outerDimensions,that=$(this).resizable("instance"),o=that.options,cs=that.size,os=that.originalSize,op=that.originalPosition,a=that.axis,grid=typeof o.grid==="number" ? [ o.grid,o.grid ]:o.grid,gridX=(grid[ 0 ] || 1),gridY=(grid[ 1 ] || 1),ox=Math.round((cs.width - os.width) / gridX) * gridX,oy=Math.round((cs.height - os.height) / gridY) * gridY,newWidth=os.width+ox,newHeight=os.height+oy,isMaxWidth=o.maxWidth && (o.maxWidth < newWidth),isMaxHeight=o.maxHeight && (o.maxHeight < newHeight),isMinWidth=o.minWidth && (o.minWidth>newWidth),isMinHeight=o.minHeight && (o.minHeight>newHeight);:o.grid=grid;:if (isMinWidth){newWidth +=gridX}if (isMinHeight){newHeight +=gridY}if (isMaxWidth){newWidth -=gridX}if (isMaxHeight){newHeight -=gridY}if (/^(se|s|e)$/.test(a)){:that.size.width=newWidth;:that.size.height=newHeight}else if (/^(ne)$/.test(a)){:that.size.width=newWidth;:that.size.height=newHeight;:that.position.top=op.top - oy}else if (/^(sw)$/.test(a)){:that.size.width=newWidth;:that.size.height=newHeight;:that.position.left=op.left - ox}if (newHeight - gridY>0){:that.size.height=newHeight;:that.position.top=op.top - oy}if (newWidth - gridX>0){:that.size.width=newWidth;:that.position.left=op.left - ox});var widgetsResizable=$.ui.resizable;/*!
 * jQuery UI Dialog 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */,//>>label:Dialog //>>group:Widgets //>>description:Displays customizable dialog windows. //>>docs:http://api.jqueryui.com/dialog/ //>>demos:http://jqueryui.com/dialog/ //>>css.structure:../../themes/base/core.css //>>css.structure:../../themes/base/dialog.css //>>css.theme:../../themes/base/theme.css $.widget("ui.dialog"{version:"1.12.1",options:{appendTo:"body",autoOpen:true,buttons:[],classes:{"ui-dialog":"ui-corner-all","ui-dialog-titlebar":"ui-corner-all"},closeOnEscape:true,closeText:"Close",draggable:true,height:"auto",hide:null,maxHeight:null,maxWidth:null,minHeight:150,minWidth:150,modal:false,position:{my:"center",at:"center",of:window,collision:"fit",// Ensure the titlebar is always visible using:function(pos){var topOffset=$(this).css(pos).offset().top;:if (topOffset < 0){$(this).css("top",pos.top - topOffset)},sizeRelatedOptions:{buttons:true,height:true,maxHeight:true,maxWidth:true,minHeight:true,minWidth:true,width:true},resizableRelatedOptions:{maxHeight:true,maxWidth:true,minHeight:true,minWidth:true},_create:function(){this.originalCss={display:this.element[ 0 ].style.display,width:this.element[ 0 ].style.width,minHeight:this.element[ 0 ].style.minHeight,maxHeight:this.element[ 0 ].style.maxHeight,height:this.element[ 0 ].style.height};this.originalPosition={parent:this.element.parent(),index:this.element.parent().children().index(this.element)};this.originalTitle=this.element.attr("title");if (this.options.title==null && this.originalTitle!=null){this.options.title=this.originalTitle}// Dialogs can't be disabled
		if ( this.options.disabled ) {
			this.options.disabled = false;
		}

		this._createWrapper();

		this.element
			.show()
			.removeAttr( "title" )
			.appendTo( this.uiDialog );

		this._addClass( "ui-dialog-content", "ui-widget-content" );

		this._createTitlebar();
		this._createButtonPane();

		if ( this.options.draggable && $.fn.draggable ) {
			this._makeDraggable();
		}
		if ( this.options.resizable && $.fn.resizable ) {
			this._makeResizable();
		}

		this._isOpen = false;

		this._trackFocus();
	},

	_init: function() {
		if ( this.options.autoOpen ) {
			this.open();
		}
	},

	_appendTo: function() {
		var element = this.options.appendTo;
		if ( element && ( element.jquery || element.nodeType ) ) {
			return $( element );
		}
		return this.document.find( element || "body" ).eq( 0 );
	},

	_destroy: function() {
		var next,
			originalPosition = this.originalPosition;

		this._untrackInstance();
		this._destroyOverlay();

		this.element
			.removeUniqueId()
			.css( this.originalCss )

			// Without detaching first, the following becomes really slow
			.detach();

		this.uiDialog.remove();

		if ( this.originalTitle ) {
			this.element.attr( "title", this.originalTitle );
		}

		next = originalPosition.parent.children().eq( originalPosition.index );

		// Don't try to place the dialog next to itself (#8613) if (next.length && next[ 0 ]!==this.element[ 0 ]){next.before(this.element)},close:function(event),disable:$.noop,enable:$.noop{:var that=this;:if (!this._isOpen || this._trigger("beforeClose",event)===false){return}this._isOpen=false;this._focusedElement=null;this._destroyOverlay();this._untrackInstance();if (!this.opener.filter(":focusable").trigger("focus").length){// Hiding a focused element doesn't trigger blur in WebKit
			// so in case we have nothing to focus on, explicitly blur the active element
			// https://bugs.webkit.org/show_bug.cgi?id=47182
			$.ui.safeBlur( $.ui.safeActiveElement( this.document[ 0 ] ) );
		}

		this._hide( this.uiDialog, this.options.hide, function() {
			that._trigger( "close", event );
		} );
	},

	isOpen: function() {
		return this._isOpen;
	},

	moveToTop: function() {
		this._moveToTop();
	},

	_moveToTop: function( event, silent ) {
		var moved = false,
			zIndices = this.uiDialog.siblings( ".ui-front:visible" ).map( function() {
				return +$( this ).css( "z-index" );
			} ).get(),
			zIndexMax = Math.max.apply( null, zIndices );

		if ( zIndexMax >= +this.uiDialog.css( "z-index" ) ) {
			this.uiDialog.css( "z-index", zIndexMax + 1 );
			moved = true;
		}

		if ( moved && !silent ) {
			this._trigger( "focus", event );
		}
		return moved;
	},

	open: function() {
		var that = this;
		if ( this._isOpen ) {
			if ( this._moveToTop() ) {
				this._focusTabbable();
			}
			return;
		}

		this._isOpen = true;
		this.opener = $( $.ui.safeActiveElement( this.document[ 0 ] ) );

		this._size();
		this._position();
		this._createOverlay();
		this._moveToTop( null, true );

		// Ensure the overlay is moved to the top with the dialog, but only when
		// opening. The overlay shouldn't move after the dialog is open so that // modeless dialogs opened after the modal dialog stack properly. if (this.overlay){this.overlay.css("z-index",this.uiDialog.css("z-index") - 1)}function(),this._show(this.uiDialog,this.options.show{:that._focusTabbable();:that._trigger("focus")},_focusTabbable:function(){// Set focus to the first match:// 1. An element that was focused previously // 2. First element inside the dialog matching [autofocus] // 3. Tabbable element inside the content element // 4. Tabbable element inside the buttonpane // 5. The close button // 6. The dialog itself var hasFocus=this._focusedElement;:if (!hasFocus){hasFocus=this.element.find("[autofocus]")}if (!hasFocus.length){:hasFocus=this.uiDialog},_keepFocus:function(event){:function checkFocus(){var activeElement=$.ui.safeActiveElement(this.document[ 0 ]),isActive=this.uiDialog[ 0 ]===activeElement || $.contains(this.uiDialog[ 0 ],activeElement);:if (!isActive){this._focusTabbable()}event.preventDefault();checkFocus.call(this);// support:IE // IE <=8 doesn't prevent moving focus even with event.preventDefault()
		// so we check again later
		this._delay( checkFocus );
	},

	_createWrapper: function() {
		this.uiDialog = $( "<div>" )
			.hide()
			.attr( {

				// Setting tabIndex makes the div focusable
				tabIndex: -1,
				role: "dialog"
			} )
			.appendTo( this._appendTo() );

		this._addClass( this.uiDialog, "ui-dialog", "ui-widget ui-widget-content ui-front" );
		this._on( this.uiDialog, {
			keydown: function( event ) {
				if ( this.options.closeOnEscape && !event.isDefaultPrevented() && event.keyCode &&
						event.keyCode === $.ui.keyCode.ESCAPE ) {
					event.preventDefault();
					this.close( event );
					return;
				}

				// Prevent tabbing out of dialogs
				if ( event.keyCode !== $.ui.keyCode.TAB || event.isDefaultPrevented() ) {
					return;
				}
				var tabbables = this.uiDialog.find( ":tabbable" ),
					first = tabbables.filter( ":first" ),
					last = tabbables.filter( ":last" );

				if ( ( event.target === last[ 0 ] || event.target === this.uiDialog[ 0 ] ) &&
						!event.shiftKey ) {
					this._delay( function() {
						first.trigger( "focus" );
					} );
					event.preventDefault();
				} else if ( ( event.target === first[ 0 ] ||
						event.target === this.uiDialog[ 0 ] ) && event.shiftKey ) {
					this._delay( function() {
						last.trigger( "focus" );
					} );
					event.preventDefault();
				}
			},
			mousedown: function( event ) {
				if ( this._moveToTop( event ) ) {
					this._focusTabbable();
				}
			}
		} );

		// We assume that any existing aria-describedby attribute means
		// that the dialog content is marked up properly
		// otherwise we brute force the content as the description
		if ( !this.element.find( "[aria-describedby]" ).length ) {
			this.uiDialog.attr( {
				"aria-describedby": this.element.uniqueId().attr( "id" )
			} );
		}
	},

	_createTitlebar: function() {
		var uiDialogTitle;

		this.uiDialogTitlebar = $( "<div>" );
		this._addClass( this.uiDialogTitlebar,
			"ui-dialog-titlebar", "ui-widget-header ui-helper-clearfix" );
		this._on( this.uiDialogTitlebar, {
			mousedown: function( event ) {

				// Don't prevent click on close button (#8838) // Focusing a dialog that is partially scrolled out of view // causes the browser to scroll it into view,preventing the click event if (!$(event.target).closest(".ui-dialog-titlebar-close")){:// Dialog isn't getting focus when dragging (#8063)
					this.uiDialog.trigger( "focus" );
				}
			}
		} );

		// Support: IE
		// Use type="button" to prevent enter keypresses in textboxes from closing the
		// dialog in IE (#9312)
		this.uiDialogTitlebarClose = $( "<button type='button'></button>" )
			.button( {
				label: $( "<a>" ).text( this.options.closeText ).html(),
				icon: "ui-icon-closethick",
				showLabel: false
			} )
			.appendTo( this.uiDialogTitlebar );

		this._addClass( this.uiDialogTitlebarClose, "ui-dialog-titlebar-close" );
		this._on( this.uiDialogTitlebarClose, {
			click: function( event ) {
				event.preventDefault();
				this.close( event );
			}
		} );

		uiDialogTitle = $( "<span>" ).uniqueId().prependTo( this.uiDialogTitlebar );
		this._addClass( uiDialogTitle, "ui-dialog-title" );
		this._title( uiDialogTitle );

		this.uiDialogTitlebar.prependTo( this.uiDialog );

		this.uiDialog.attr( {
			"aria-labelledby": uiDialogTitle.attr( "id" )
		} );
	},

	_title: function( title ) {
		if ( this.options.title ) {
			title.text( this.options.title );
		} else {
			title.html( "&#160;" );
		}
	},

	_createButtonPane: function() {
		this.uiDialogButtonPane = $( "<div>" );
		this._addClass( this.uiDialogButtonPane, "ui-dialog-buttonpane",
			"ui-widget-content ui-helper-clearfix" );

		this.uiButtonSet = $( "<div>" )
			.appendTo( this.uiDialogButtonPane );
		this._addClass( this.uiButtonSet, "ui-dialog-buttonset" );

		this._createButtons();
	},

	_createButtons: function() {
		var that = this,
			buttons = this.options.buttons;

		// If we already have a button pane, remove it
		this.uiDialogButtonPane.remove();
		this.uiButtonSet.empty();

		if ( $.isEmptyObject( buttons ) || ( $.isArray( buttons ) && !buttons.length ) ) {
			this._removeClass( this.uiDialog, "ui-dialog-buttons" );
			return;
		}

		$.each( buttons, function( name, props ) {
			var click, buttonOptions;
			props = $.isFunction( props ) ?
				{ click: props, text: name } :
				props;

			// Default to a non-submitting button
			props = $.extend( { type: "button" }, props );

			// Change the context for the click callback to be the main element
			click = props.click;
			buttonOptions = {
				icon: props.icon,
				iconPosition: props.iconPosition,
				showLabel: props.showLabel,

				// Deprecated options
				icons: props.icons,
				text: props.text
			};

			delete props.click;
			delete props.icon;
			delete props.iconPosition;
			delete props.showLabel;

			// Deprecated options
			delete props.icons;
			if ( typeof props.text === "boolean" ) {
				delete props.text;
			}

			$( "<button></button>", props )
				.button( buttonOptions )
				.appendTo( that.uiButtonSet )
				.on( "click", function() {
					click.apply( that.element[ 0 ], arguments );
				} );
		} );
		this._addClass( this.uiDialog, "ui-dialog-buttons" );
		this.uiDialogButtonPane.appendTo( this.uiDialog );
	},

	_makeDraggable: function() {
		var that = this,
			options = this.options;

		function filteredUi( ui ) {
			return {
				position: ui.position,
				offset: ui.offset
			};
		}

		this.uiDialog.draggable( {
			cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
			handle: ".ui-dialog-titlebar",
			containment: "document",
			start: function( event, ui ) {
				that._addClass( $( this ), "ui-dialog-dragging" );
				that._blockFrames();
				that._trigger( "dragStart", event, filteredUi( ui ) );
			},
			drag: function( event, ui ) {
				that._trigger( "drag", event, filteredUi( ui ) );
			},
			stop: function( event, ui ) {
				var left = ui.offset.left - that.document.scrollLeft(),
					top = ui.offset.top - that.document.scrollTop();

				options.position = {
					my: "left top",
					at: "left" + ( left >= 0 ? "+" : "" ) + left + " " +
						"top" + ( top >= 0 ? "+" : "" ) + top,
					of: that.window
				};
				that._removeClass( $( this ), "ui-dialog-dragging" );
				that._unblockFrames();
				that._trigger( "dragStop", event, filteredUi( ui ) );
			}
		} );
	},

	_makeResizable: function() {
		var that = this,
			options = this.options,
			handles = options.resizable,

			// .ui-resizable has position: relative defined in the stylesheet
			// but dialogs have to use absolute or fixed positioning
			position = this.uiDialog.css( "position" ),
			resizeHandles = typeof handles === "string" ?
				handles :
				"n,e,s,w,se,sw,ne,nw";

		function filteredUi( ui ) {
			return {
				originalPosition: ui.originalPosition,
				originalSize: ui.originalSize,
				position: ui.position,
				size: ui.size
			};
		}

		this.uiDialog.resizable( {
			cancel: ".ui-dialog-content",
			containment: "document",
			alsoResize: this.element,
			maxWidth: options.maxWidth,
			maxHeight: options.maxHeight,
			minWidth: options.minWidth,
			minHeight: this._minHeight(),
			handles: resizeHandles,
			start: function( event, ui ) {
				that._addClass( $( this ), "ui-dialog-resizing" );
				that._blockFrames();
				that._trigger( "resizeStart", event, filteredUi( ui ) );
			},
			resize: function( event, ui ) {
				that._trigger( "resize", event, filteredUi( ui ) );
			},
			stop: function( event, ui ) {
				var offset = that.uiDialog.offset(),
					left = offset.left - that.document.scrollLeft(),
					top = offset.top - that.document.scrollTop();

				options.height = that.uiDialog.height();
				options.width = that.uiDialog.width();
				options.position = {
					my: "left top",
					at: "left" + ( left >= 0 ? "+" : "" ) + left + " " +
						"top" + ( top >= 0 ? "+" : "" ) + top,
					of: that.window
				};
				that._removeClass( $( this ), "ui-dialog-resizing" );
				that._unblockFrames();
				that._trigger( "resizeStop", event, filteredUi( ui ) );
			}
		} )
			.css( "position", position );
	},

	_trackFocus: function() {
		this._on( this.widget(), {
			focusin: function( event ) {
				this._makeFocusTarget();
				this._focusedElement = $( event.target );
			}
		} );
	},

	_makeFocusTarget: function() {
		this._untrackInstance();
		this._trackingInstances().unshift( this );
	},

	_untrackInstance: function() {
		var instances = this._trackingInstances(),
			exists = $.inArray( this, instances );
		if ( exists !== -1 ) {
			instances.splice( exists, 1 );
		}
	},

	_trackingInstances: function() {
		var instances = this.document.data( "ui-dialog-instances" );
		if ( !instances ) {
			instances = [];
			this.document.data( "ui-dialog-instances", instances );
		}
		return instances;
	},

	_minHeight: function() {
		var options = this.options;

		return options.height === "auto" ?
			options.minHeight :
			Math.min( options.minHeight, options.height );
	},

	_position: function() {

		// Need to show the dialog to get the actual offset in the position plugin
		var isVisible = this.uiDialog.is( ":visible" );
		if ( !isVisible ) {
			this.uiDialog.show();
		}
		this.uiDialog.position( this.options.position );
		if ( !isVisible ) {
			this.uiDialog.hide();
		}
	},

	_setOptions: function( options ) {;

		$.each( options, function( key, value ) {
			that._setOption( key, value );

			if ( key in that.sizeRelatedOptions ) {
				resize = true;
			}
			if ( key in that.resizableRelatedOptions ) {
				resizableOptions[ key ] = value;
			}
		} );

		if ( resize ) {
			this._size();
			this._position();
		}
		if ( this.uiDialog.is( ":data(ui-resizable)" ) ) {
			this.uiDialog.resizable( "option", resizableOptions );
		}
	},

	_setOption: function( key, value ) {
		var isDraggable, isResizable,
			uiDialog = this.uiDialog;

		if ( key === "disabled" ) {
			return;
		}

		this._super( key, value );

		if ( key === "appendTo" ) {
			this.uiDialog.appendTo( this._appendTo() );
		}

		if ( key === "buttons" ) {
			this._createButtons();
		}

		if ( key === "closeText" ) {
			this.uiDialogTitlebarClose.button( {

				// Ensure that we always pass a string
				label: $( "<a>" ).text( "" + this.options.closeText ).html()
			} );
		}

		if ( key === "draggable" ) {
			isDraggable = uiDialog.is( ":data(ui-draggable)" );
			if ( isDraggable && !value ) {
				uiDialog.draggable( "destroy" );
			}

			if ( !isDraggable && value ) {
				this._makeDraggable();
			}
		}

		if ( key === "position" ) {
			this._position();
		}

		if ( key === "resizable" ) {

			// currently resizable, becoming non-resizable
			isResizable = uiDialog.is( ":data(ui-resizable)" );
			if ( isResizable && !value ) {
				uiDialog.resizable( "destroy" );
			}

			// Currently resizable, changing handles
			if ( isResizable && typeof value === "string" ) {
				uiDialog.resizable( "option", "handles", value );
			}

			// Currently non-resizable, becoming resizable
			if ( !isResizable && value !== false ) {
				this._makeResizable();
			}
		}

		if ( key === "title" ) {
			this._title( this.uiDialogTitlebar.find( ".ui-dialog-title" ) );
		}
	},

	_size: function() {

		// If the user has resized the dialog, the .ui-dialog and .ui-dialog-content
		// divs will both have width and height set, so we need to reset them
		var nonContentHeight, minContentHeight, maxContentHeight,
			options = this.options;

		// Reset content sizing
		this.element.show().css( {
			width: "auto",
			minHeight: 0,
			maxHeight: "none",
			height: 0
		} );

		if ( options.minWidth > options.width ) {
			options.width = options.minWidth;
		}

		// Reset wrapper sizing
		// determine the height of all the non-content elements
		nonContentHeight = this.uiDialog.css( {
			height: "auto",
			width: options.width
		} )
			.outerHeight();
		minContentHeight = Math.max( 0, options.minHeight - nonContentHeight );
		maxContentHeight = typeof options.maxHeight === "number" ?
			Math.max( 0, options.maxHeight - nonContentHeight ) :
			"none";

		if ( options.height === "auto" ) {
			this.element.css( {
				minHeight: minContentHeight,
				maxHeight: maxContentHeight,
				height: "auto"
			} );
		} else {
			this.element.height( Math.max( 0, options.height - nonContentHeight ) );
		}

		if ( this.uiDialog.is( ":data(ui-resizable)" ) ) {
			this.uiDialog.resizable( "option", "minHeight", this._minHeight() );
		}
	},

	_blockFrames: function() {
		this.iframeBlocks = this.document.find( "iframe" ).map( function() {
			var iframe = $( this );

			return $( "<div>" )
				.css( {
					position: "absolute",
					width: iframe.outerWidth(),
					height: iframe.outerHeight()
				} )
				.appendTo( iframe.parent() )
				.offset( iframe.offset() )[ 0 ];
		} );
	},

	_unblockFrames: function() {
		if ( this.iframeBlocks ) {
			this.iframeBlocks.remove();
			delete this.iframeBlocks;
		}
	},

	_allowInteraction: function( event ) {
		if ( $( event.target ).closest( ".ui-dialog" ).length ) {
			return true;
		}

		// TODO: Remove hack when datepicker implements
		// the .ui-front logic (#8989)
		return !!$( event.target ).closest( ".ui-datepicker" ).length;
	},

	_createOverlay: function() {
		if ( !this.options.modal ) {
			return;
		}

		// We use a delay in case the overlay is created from an
		// event that we're going to be cancelling (#2804) var isOpening=true;:this._delay(function(){isOpening=false});if (!this.document.data("ui-dialog-overlays")){// Prevent use of anchors and inputs // Using _on() for an event handler shared across many instances is // safe because the dialogs stack and must be closed in reverse order this._on(this.document,{focusin:function(event){if (isOpening){return}if (!this._allowInteraction(event)){:event.preventDefault();:this._trackingInstances()[ 0 ]._focusTabbable()},"ui-widget-overlay ui-front");this._on(this.overlay,null,this.overlay=$("<div>") .appendTo(this._appendTo());this._addClass(this.overlay{mousedown:"_keepFocus"},_destroyOverlay:function(){if (!this.options.modal){return}if (this.overlay){:var overlays=this.document.data("ui-dialog-overlays") - 1;:if (!overlays){this._off(this.document,"focusin");:this.document.removeData("ui-dialog-overlays")});// DEPRECATED // TODO:switch return back to widget declaration at top of file when this is removed if ($.uiBackCompat!==false){// Backcompat for dialogClass option $.widget("ui.dialog",$.ui.dialog,{options:{dialogClass:""},_createWrapper:function(){:this._super();:this.uiDialog.addClass(this.options.dialogClass)}var widgetsDialog=$.ui.dialog;/*!
 * jQuery UI Droppable 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */,//>>label:Droppable //>>group:Interactions //>>description:Enables drop targets for draggable elements. //>>docs:http://api.jqueryui.com/droppable/ //>>demos:http://jqueryui.com/droppable/ $.widget("ui.droppable"{version:"1.12.1",widgetEventPrefix:"drop",options:{accept:"*",addClasses:true,greedy:false,scope:"default",tolerance:"intersect",// Callbacks activate:null,deactivate:null,drop:null,out:null,over:null},_create:function(){this.accept=$.isFunction(accept) ? accept :function(d){return d.is(accept)};this.proportions=function(){if (arguments.length){// Store the droppable's proportions
				proportions = arguments[ 0 ];
			} else {

				// Retrieve or derive the droppable's proportions return proportions ? proportions :proportions={width:this.element[ 0 ].offsetWidth,height:this.element[ 0 ].offsetHeight},_addToManager:function(scope){:// Add the reference and positions to the manager $.ui.ddmanager.droppables[ scope ]=$.ui.ddmanager.droppables[ scope ] || [];:$.ui.ddmanager.droppables[ scope ].push(this)},_splice:function(drop){:var i=0;:for (;:i < drop.length;:i++){if (drop[ i ]===this){drop.splice(i,1)},_setOption:function(key,value){if (key==="accept"){this.accept=$.isFunction(value) ? value :function(d){return d.is(value)}else if (key==="scope"){:var drop=$.ui.ddmanager.droppables[ this.options.scope ];:this._splice(drop);:this._addToManager(value)},_activate:function(event){:var draggable=$.ui.ddmanager.current;:this._addActiveClass();:if (draggable){this._trigger("activate",event,this.ui(draggable))},_deactivate:function(event){:var draggable=$.ui.ddmanager.current;:this._removeActiveClass();:if (draggable){this._trigger("deactivate",event,this.ui(draggable))},_over:function(event){:var draggable=$.ui.ddmanager.current;:// Bail if draggable and droppable are same element if (!draggable || (draggable.currentItem || draggable.element)[ 0 ]===this.element[ 0 ]){return},_out:function(event){:var draggable=$.ui.ddmanager.current;:// Bail if draggable and droppable are same element if (!draggable || (draggable.currentItem || draggable.element)[ 0 ]===this.element[ 0 ]){return},_drop:function(event,custom){:var draggable=custom || $.ui.ddmanager.current,childrenIntersection=false;:// Bail if draggable and droppable are same element if (!draggable || (draggable.currentItem || draggable.element)[ 0 ]===this.element[ 0 ]){return false}this.element .find(":data(ui-droppable)") .not(".ui-draggable-dragging") .each(function(){:var inst=$(this).droppable("instance");if (inst.options.greedy &&!inst.options.disabled && inst.options.scope===draggable.options.scope && inst.accept.call(inst.element[ 0 ],(draggable.currentItem || draggable.element)) && intersect(draggable,$.extend(inst,{offset:inst.element.offset()}),event)),inst.options.tolerance{:childrenIntersection=true;:return false});if (childrenIntersection){return false}(draggable.currentItem || draggable.element))),if (this.accept.call(this.element[ 0 ]{:this._removeActiveClass();:this._removeHoverClass();:this._trigger("drop",event,this.ui(draggable));:return this.element},ui:function(c){return{draggable:(c.currentItem || c.element),helper:c.helper,position:c.position,offset:c.positionAbs},// Extension points just to make backcompat sane and avoid duplicating logic // TODO:Remove in 1.13 along with call to it below _addHoverClass:function(){this._addClass("ui-droppable-hover")});var intersect=$.ui.intersect=(function(){function isOverAxis(x,reference,size){return (x >=reference) && (x < (reference+size))}droppable,event),return function(draggable,toleranceMode{if (!droppable.offset){return false}b=t+droppable.proportions().height;switch (toleranceMode),l=droppable.offset.left,r=l+droppable.proportions().width,t=droppable.offset.top,var x1=(draggable.positionAbs || draggable.position.absolute).left+draggable.margins.left,x2=x1+draggable.helperProportions.width,y1=(draggable.positionAbs || draggable.position.absolute).top+draggable.margins.top,y2=y1+draggable.helperProportions.height{case "fit":return (l <=x1 && x2 <=r && t <=y1 && y2 <=b);case "intersect":return (l < x1+(draggable.helperProportions.width / 2) && // Right Half x2 - (draggable.helperProportions.width / 2) < r && // Left Half t < y1+(draggable.helperProportions.height / 2) && // Bottom Half y2 - (draggable.helperProportions.height / 2) < b);// Top Half case "pointer":return isOverAxis(event.pageY,t,droppable.proportions().height) && isOverAxis(event.pageX,l,droppable.proportions().width);case "touch":return ((y1 >=t && y1 <=b) || // Top edge touching (y2 >=t && y2 <=b) || // Bottom edge touching (y1 < t && y2>b) // Surrounded vertically) && ((x1 >=l && x1 <=r) || // Left edge touching (x2 >=l && x2 <=r) || // Right edge touching (x1 < l && x2>r) // Surrounded horizontally);default:return false})();$.ui.ddmanager={current:null,droppables:{"default":[]},event),prepareOffsets:function(t{var i,j,m=$.ui.ddmanager.droppables[ t.options.scope ] || [],type=event ? event.type:null,// workaround for #2317 list=(t.currentItem || t.element).find(":data(ui-droppable)").addBack();droppablesLoop:for (i=0;:i < m.length;:i++){// No disabled and non-accepted if (m[ i ].options.disabled || (t &&!m[ i ].accept.call(m[ i ].element[ 0 ],(t.currentItem || t.element)))){continue}// Filter out elements in the current dragged item for (j=0;j < list.length;j++){:if (list[ j ]===m[ i ].element[ 0 ]){m[ i ].proportions().height=0;:continue droppablesLoop}m[ i ].visible=m[ i ].element.css("display")!=="none";if (!m[ i ].visible){continue}// Activate the droppable if used directly from draggables if (type==="mousedown"){m[ i ]._activate.call(m[ i ],event)}m[ i ].offset=m[ i ].element.offset();m[ i ].proportions({width:m[ i ].element[ 0 ].offsetWidth,height:m[ i ].element[ 0 ].offsetHeight},drop:function(draggable,event){:var dropped=false;:// Create a copy of the droppables in case the list changes during the drop (#9116) $.each(($.ui.ddmanager.droppables[ draggable.options.scope ] || []).slice(),function(){if (!this.options){return}event)),if (!this.options.disabled && this.visible && intersect(draggable,this,this.options.tolerance{dropped=this._drop.call(this,event) || dropped}(draggable.currentItem || draggable.element))),if (!this.options.disabled && this.visible && this.accept.call(this.element[ 0 ]{:this.isout=true;:this.isover=false;:this._deactivate.call(this,event)},dragStart:function(draggable,event){// Listen for scrolling so that if the dragging causes scrolling the position of the // droppables can be recalculated (see #5003) draggable.element.parentsUntil("body").on("scroll.droppable",function(){if (!draggable.options.refreshPositions){$.ui.ddmanager.prepareOffsets(draggable,event)},drag:function(draggable,event){// If you have a highly dynamic page,you might try this option. It renders positions // every time you move the mouse. if (draggable.options.refreshPositions){$.ui.ddmanager.prepareOffsets(draggable,event)}// Run through all droppables and check their positions based on specific tolerance options $.each($.ui.ddmanager.droppables[ draggable.options.scope ] || [],function(){if (this.options.disabled || this.greedyChild ||!this.visible){return}c=!intersects && this.isover ? "isout":(intersects &&!this.isover ? "isover" :null);if (!c),event),intersects=intersect(draggable,parent,scope,this,this.options.tolerance,var parentInstance{return}if (this.options.greedy){:// find droppable parents with same scope scope=this.options.scope;:parent=this.element.parents(":data(ui-droppable)").filter(function(){return $(this).droppable("instance").options.scope===scope});if (parent.length){:parentInstance=$(parent[ 0 ]).droppable("instance");:parentInstance.greedyChild=(c==="isover")}// We just moved into a greedy child if (parentInstance && c==="isover"){:parentInstance.isover=false;:parentInstance.isout=true;:parentInstance._out.call(parentInstance,event)}event);// We just moved out of a greedy child if (parentInstance && c==="isout"),this[ c ]=true;this[ c==="isout" ? "isover":"isout" ]=false;this[ c==="isover" ? "_over":"_out" ].call(this{:parentInstance.isout=false;:parentInstance.isover=true;:parentInstance._over.call(parentInstance,event)},dragStop:function(draggable,event){:draggable.element.parentsUntil("body").off("scroll.droppable");:// Call prepareOffsets one final time since IE does not fire return scroll events when // overflow was caused by drag (see #5003) if (!draggable.options.refreshPositions){$.ui.ddmanager.prepareOffsets(draggable,event)};// DEPRECATED // TODO:switch return back to widget declaration at top of file when this is removed if ($.uiBackCompat!==false){// Backcompat for activeClass and hoverClass options $.widget("ui.droppable",$.ui.droppable,{options:{hoverClass:false,activeClass:false},_addActiveClass:function(){:this._super();:if (this.options.activeClass){this.element.addClass(this.options.activeClass)},_removeActiveClass:function(){:this._super();:if (this.options.activeClass){this.element.removeClass(this.options.activeClass)},_addHoverClass:function(){:this._super();:if (this.options.hoverClass){this.element.addClass(this.options.hoverClass)},_removeHoverClass:function(){:this._super();:if (this.options.hoverClass){this.element.removeClass(this.options.hoverClass)}var widgetsDroppable=$.ui.droppable;/*!
 * jQuery UI Progressbar 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */,//>>label:Progressbar //>>group:Widgets // jscs:disable maximumLineLength //>>description:Displays a status indicator for loading state,and other progress indicators. // jscs:enable maximumLineLength //>>docs:http://api.jqueryui.com/progressbar/ //>>demos:http://jqueryui.com/progressbar/ //>>css.structure:../../themes/base/core.css //>>css.structure:../../themes/base/progressbar.css //>>css.theme:../../themes/base/theme.css var widgetsProgressbar=$.widget("ui.progressbar",standard percentage{version:"1.12.1",options:{classes:{"ui-progressbar":"ui-corner-all","ui-progressbar-value":"ui-corner-left","ui-progressbar-complete":"ui-corner-right"},_create:function(),min:0{:// Constrain initial value this.oldValue=this.options.value=this._constrainedValue();:this.element.attr({// Only set static values;aria-valuenow and aria-valuemax are // set inside _refreshValue() role:"progressbar","aria-valuemin":this.min},value:function(newValue){if (newValue===undefined){return this.options.value},_constrainedValue:function(newValue){if (newValue===undefined){newValue=this.options.value}this.indeterminate=newValue===false;// Sanitize value if (typeof newValue!=="number"){newValue=0},_setOptions:function(options){:// Ensure "value" option is set after other values (like max) var value=options.value;:delete options.value;:this._super(options);:this.options.value=this._constrainedValue(value);:this._refreshValue()},_position:function(){this.menuWrap.position($.extend({of:this.button},menuWidget:function(){return this.menu},_renderButtonItem:function(item){:var buttonItem=$("<span>");:this._setText(buttonItem,item.label);:this._addClass(buttonItem,"ui-selectmenu-text");:return buttonItem},_renderMenu:function(ul,items){:var that=this,currentOptgroup="";:$.each(items,function(index,item){var li;if (item.optgroup!==currentOptgroup){li=$("<li>",{text:item.optgroup},_renderItem:function(ul,item){var li=$("<li>"),wrapper=$("<div>",{title:item.element.attr("title")});if (item.disabled){this._addClass(li,null,"ui-state-disabled")},_setText:function(element,value){if (value){element.text(value)},_move:function(direction,event){:var item,next,filter=".ui-menu-item";:if (this.isOpen){item=this.menuItems.eq(this.focusIndex).parent("li")}if (direction==="first" || direction==="last"){next=item[ direction==="first" ? "prevAll":"nextAll" ](filter).eq(-1)}if (next.length){this.menuInstance.focus(event,next)},_getSelectedItem:function(){return this.menuItems.eq(this.element[ 0 ].selectedIndex).parent("li")},_toggle:function(event){this[ this.isOpen ? "close":"open" ](event)},_setSelection:function(){:var selection;:if (!this.range){return}if (window.getSelection){:selection=window.getSelection();:selection.removeAllRanges();:selection.addRange(this.range);// Support:IE8},_resizeButton:function(){// For `width:false`,just remove inline style and stop if (width===false){this.button.css("width","");:return}// For `width:null`,match the width of the original element if (width===null){:width=this.element.show().outerWidth();:this.element.hide()},_resizeMenu:function(){this.menu.outerWidth(Math.max(this.button.outerWidth(),// Support:IE10 // IE10 wraps long text (possibly a rounding bug) // so we add 1px to avoid the wrapping this.menu.width("").outerWidth()+1))},_parseOptions:function(options){:var that=this,data=[];:options.each(function(index,item){data.push(that._parseOption($(item),index))},_parseOption:function(option,index){:var optgroup=option.parent("optgroup");return{element:option,index:index,value:option.val(),label:option.text(),optgroup:optgroup.attr("label") || "",disabled:optgroup.prop("disabled") || option.prop("disabled")}]);/*!
 * jQuery UI Slider 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */,$.ui.mouse,//>>label:Slider //>>group:Widgets //>>description:Displays a flexible slider with ranges and accessibility via keyboard. //>>docs:http://api.jqueryui.com/slider/ //>>demos:http://jqueryui.com/slider/ //>>css.structure:../../themes/base/core.css //>>css.structure:../../themes/base/slider.css //>>css.theme:../../themes/base/theme.css var widgetsSlider=$.widget("ui.slider"{version:"1.12.1",widgetEventPrefix:"slide",options:{animate:false,classes:{"ui-slider":"ui-corner-all","ui-slider-handle":"ui-corner-all",// Note:ui-widget-header isn't the most fittingly semantic framework class for this
			// element, but worked best visually with a variety of themes
			"ui-slider-range": "ui-corner-all ui-widget-header"
		},
		distance: 0,
		max: 100,
		min: 0,
		orientation: "horizontal",
		range: false,
		step: 1,
		value: 0,
		values: null,

		// Callbacks
		change: null,
		slide: null,
		start: null,
		stop: null
	},

	// Number of pages in a slider
	// (how many times can you page up/down to go through the whole range)
	numPages: 5,

	_create: function() {
		this._keySliding = false;
		this._mouseSliding = false;
		this._animateOff = true;
		this._handleIndex = null;
		this._detectOrientation();
		this._mouseInit();
		this._calculateNewMax();

		this._addClass( "ui-slider ui-slider-" + this.orientation,
			"ui-widget ui-widget-content" );

		this._refresh();

		this._animateOff = false;
	},

	_refresh: function() {
		this._createRange();
		this._createHandles();
		this._setupEvents();
		this._refreshValue();
	},

	_createHandles: function() {
		var i, handleCount,
			options = this.options,
			existingHandles = this.element.find( ".ui-slider-handle" ),
			handle = "<span tabindex='0'></span>",
			handles = [];

		handleCount = ( options.values && options.values.length ) || 1;

		if ( existingHandles.length > handleCount ) {
			existingHandles.slice( handleCount ).remove();
			existingHandles = existingHandles.slice( 0, handleCount );
		}

		for ( i = existingHandles.length; i < handleCount; i++ ) {
			handles.push( handle );
		}

		this.handles = existingHandles.add( $( handles.join( "" ) ).appendTo( this.element ) );

		this._addClass( this.handles, "ui-slider-handle", "ui-state-default" );

		this.handle = this.handles.eq( 0 );

		this.handles.each( function( i ) {
			$( this )
				.data( "ui-slider-handle-index", i )
				.attr( "tabIndex", 0 );
		} );
	},

	_createRange: function() {
		var options = this.options;

		if ( options.range ) {
			if ( options.range === true ) {
				if ( !options.values ) {
					options.values = [ this._valueMin(), this._valueMin() ];
				} else if ( options.values.length && options.values.length !== 2 ) {
					options.values = [ options.values[ 0 ], options.values[ 0 ] ];
				} else if ( $.isArray( options.values ) ) {
					options.values = options.values.slice( 0 );
				}
			}

			if ( !this.range || !this.range.length ) {
				this.range = $( "<div>" )
					.appendTo( this.element );

				this._addClass( this.range, "ui-slider-range" );
			} else {
				this._removeClass( this.range, "ui-slider-range-min ui-slider-range-max" );

				// Handle range switching from true to min/max
				this.range.css( {
					"left": "",
					"bottom": ""
				} );
			}
			if ( options.range === "min" || options.range === "max" ) {
				this._addClass( this.range, "ui-slider-range-" + options.range );
			}
		} else {
			if ( this.range ) {
				this.range.remove();
			}
			this.range = null;
		}
	},

	_setupEvents: function() {
		this._off( this.handles );
		this._on( this.handles, this._handleEvents );
		this._hoverable( this.handles );
		this._focusable( this.handles );
	},

	_destroy: function() {
		this.handles.remove();
		if ( this.range ) {
			this.range.remove();
		}

		this._mouseDestroy();
	},

	_mouseCapture: function( event ) {
		var position, normValue, distance, closestHandle, index, allowed, offset, mouseOverHandle,
			that = this,
			o = this.options;

		if ( o.disabled ) {
			return false;
		}

		this.elementSize = {
			width: this.element.outerWidth(),
			height: this.element.outerHeight()
		};
		this.elementOffset = this.element.offset();

		position = { x: event.pageX, y: event.pageY };
		normValue = this._normValueFromMouse( position );
		distance = this._valueMax() - this._valueMin() + 1;
		this.handles.each( function( i ) {
			var thisDistance = Math.abs( normValue - that.values( i ) );
			if ( ( distance > thisDistance ) ||
				( distance === thisDistance &&
					( i === that._lastChangedValue || that.values( i ) === o.min ) ) ) {
				distance = thisDistance;
				closestHandle = $( this );
				index = i;
			}
		} );

		allowed = this._start( event, index );
		if ( allowed === false ) {
			return false;
		}
		this._mouseSliding = true;

		this._handleIndex = index;

		this._addClass( closestHandle, null, "ui-state-active" );
		closestHandle.trigger( "focus" );

		offset = closestHandle.offset();
		mouseOverHandle = !$( event.target ).parents().addBack().is( ".ui-slider-handle" );
		this._clickOffset = mouseOverHandle ? { left: 0, top: 0 } : {
			left: event.pageX - offset.left - ( closestHandle.width() / 2 ),
			top: event.pageY - offset.top -
				( closestHandle.height() / 2 ) -
				( parseInt( closestHandle.css( "borderTopWidth" ), 10 ) || 0 ) -
				( parseInt( closestHandle.css( "borderBottomWidth" ), 10 ) || 0 ) +
				( parseInt( closestHandle.css( "marginTop" ), 10 ) || 0 )
		};

		if ( !this.handles.hasClass( "ui-state-hover" ) ) {
			this._slide( event, index, normValue );
		}
		this._animateOff = true;
		return true;
	},

	_mouseStart: function() {
		return true;
	},

	_mouseDrag: function( event ) {
		var position = { x: event.pageX, y: event.pageY },
			normValue = this._normValueFromMouse( position );

		this._slide( event, this._handleIndex, normValue );

		return false;
	},

	_mouseStop: function( event ) {
		this._removeClass( this.handles, null, "ui-state-active" );
		this._mouseSliding = false;

		this._stop( event, this._handleIndex );
		this._change( event, this._handleIndex );

		this._handleIndex = null;
		this._clickOffset = null;
		this._animateOff = false;

		return false;
	},

	_detectOrientation: function() {
		this.orientation = ( this.options.orientation === "vertical" ) ? "vertical" : "horizontal";
	},

	_normValueFromMouse: function( position ) {
		var pixelTotal,
			pixelMouse,
			percentMouse,
			valueTotal,
			valueMouse;

		if ( this.orientation === "horizontal" ) {
			pixelTotal = this.elementSize.width;
			pixelMouse = position.x - this.elementOffset.left -
				( this._clickOffset ? this._clickOffset.left : 0 );
		} else {
			pixelTotal = this.elementSize.height;
			pixelMouse = position.y - this.elementOffset.top -
				( this._clickOffset ? this._clickOffset.top : 0 );
		}

		percentMouse = ( pixelMouse / pixelTotal );
		if ( percentMouse > 1 ) {
			percentMouse = 1;
		}
		if ( percentMouse < 0 ) {
			percentMouse = 0;
		}
		if ( this.orientation === "vertical" ) {
			percentMouse = 1 - percentMouse;
		}

		valueTotal = this._valueMax() - this._valueMin();
		valueMouse = this._valueMin() + percentMouse * valueTotal;

		return this._trimAlignValue( valueMouse );
	},

	_uiHash: function( index, value, values ) {
		var uiHash = {
			handle: this.handles[ index ],
			handleIndex: index,
			value: value !== undefined ? value : this.value()
		};

		if ( this._hasMultipleValues() ) {
			uiHash.value = value !== undefined ? value : this.values( index );
			uiHash.values = values || this.values();
		}

		return uiHash;
	},

	_hasMultipleValues: function() {
		return this.options.values && this.options.values.length;
	},

	_start: function( event, index ) {
		return this._trigger( "start", event, this._uiHash( index ) );
	},

	_slide: function( event, index, newVal ) {
		var allowed, otherVal,
			currentValue = this.value(),
			newValues = this.values();

		if ( this._hasMultipleValues() ) {
			otherVal = this.values( index ? 0 : 1 );
			currentValue = this.values( index );

			if ( this.options.values.length === 2 && this.options.range === true ) {
				newVal =  index === 0 ? Math.min( otherVal, newVal ) : Math.max( otherVal, newVal );
			}

			newValues[ index ] = newVal;
		}

		if ( newVal === currentValue ) {
			return;
		}

		allowed = this._trigger( "slide", event, this._uiHash( index, newVal, newValues ) );

		// A slide can be canceled by returning false from the slide callback
		if ( allowed === false ) {
			return;
		}

		if ( this._hasMultipleValues() ) {
			this.values( index, newVal );
		} else {
			this.value( newVal );
		}
	},

	_stop: function( event, index ) {
		this._trigger( "stop", event, this._uiHash( index ) );
	},

	_change: function( event, index ) {
		if ( !this._keySliding && !this._mouseSliding ) {

			//store the last changed value index for reference when handles overlap
			this._lastChangedValue = index;
			this._trigger( "change", event, this._uiHash( index ) );
		}
	},

	value: function( newValue ) {
		if ( arguments.length ) {
			this.options.value = this._trimAlignValue( newValue );
			this._refreshValue();
			this._change( null, 0 );
			return;
		}

		return this._value();
	},

	values: function( index, newValue ) {
		var vals,
			newValues,
			i;

		if ( arguments.length > 1 ) {
			this.options.values[ index ] = this._trimAlignValue( newValue );
			this._refreshValue();
			this._change( null, index );
			return;
		}

		if ( arguments.length ) {
			if ( $.isArray( arguments[ 0 ] ) ) {
				vals = this.options.values;
				newValues = arguments[ 0 ];
				for ( i = 0; i < vals.length; i += 1 ) {
					vals[ i ] = this._trimAlignValue( newValues[ i ] );
					this._change( null, i );
				}
				this._refreshValue();
			} else {
				if ( this._hasMultipleValues() ) {
					return this._values( index );
				} else {
					return this.value();
				}
			}
		} else {
			return this._values();
		}
	},

	_setOption: function( key, value ) {
		var i,
			valsLength = 0;

		if ( key === "range" && this.options.range === true ) {
			if ( value === "min" ) {
				this.options.value = this._values( 0 );
				this.options.values = null;
			} else if ( value === "max" ) {
				this.options.value = this._values( this.options.values.length - 1 );
				this.options.values = null;
			}
		}

		if ( $.isArray( this.options.values ) ) {
			valsLength = this.options.values.length;
		}

		this._super( key, value );

		switch ( key ) {
			case "orientation":
				this._detectOrientation();
				this._removeClass( "ui-slider-horizontal ui-slider-vertical" )
					._addClass( "ui-slider-" + this.orientation );
				this._refreshValue();
				if ( this.options.range ) {
					this._refreshRange( value );
				}

				// Reset positioning from previous orientation
				this.handles.css( value === "horizontal" ? "bottom" : "left", "" );
				break;
			case "value":
				this._animateOff = true;
				this._refreshValue();
				this._change( null, 0 );
				this._animateOff = false;
				break;
			case "values":
				this._animateOff = true;
				this._refreshValue();

				// Start from the last handle to prevent unreachable handles (#9046)
				for ( i = valsLength - 1; i >= 0; i-- ) {
					this._change( null, i );
				}
				this._animateOff = false;
				break;
			case "step":
			case "min":
			case "max":
				this._animateOff = true;
				this._calculateNewMax();
				this._refreshValue();
				this._animateOff = false;
				break;
			case "range":
				this._animateOff = true;
				this._refresh();
				this._animateOff = false;
				break;
		}
	},

	_setOptionDisabled: function( value ) {
		this._super( value );

		this._toggleClass( null, "ui-state-disabled", !!value );
	},

	//internal value getter
	// _value() returns value trimmed by min and max, aligned by step
	_value: function() {
		var val = this.options.value;
		val = this._trimAlignValue( val );

		return val;
	},

	//internal values getter
	// _values() returns array of values trimmed by min and max, aligned by step
	// _values( index ) returns single value trimmed by min and max, aligned by step
	_values: function( index ) {
		var val,
			vals,
			i;

		if ( arguments.length ) {
			val = this.options.values[ index ];
			val = this._trimAlignValue( val );

			return val;
		} else if ( this._hasMultipleValues() ) {

			// .slice() creates a copy of the array
			// this copy gets trimmed by min and max and then returned
			vals = this.options.values.slice();
			for ( i = 0; i < vals.length; i += 1 ) {
				vals[ i ] = this._trimAlignValue( vals[ i ] );
			}

			return vals;
		} else {
			return [];
		}
	},

	// Returns the step-aligned value that val is closest to, between (inclusive) min and max
	_trimAlignValue: function( val ) {
		if ( val <= this._valueMin() ) {
			return this._valueMin();
		}
		if ( val >= this._valueMax() ) {
			return this._valueMax();
		}
		var step = ( this.options.step > 0 ) ? this.options.step : 1,
			valModStep = ( val - this._valueMin() ) % step,
			alignValue = val - valModStep;

		if ( Math.abs( valModStep ) * 2 >= step ) {
			alignValue += ( valModStep > 0 ) ? step : ( -step );
		}

		// Since JavaScript has problems with large floats, round
		// the final value to 5 digits after the decimal point (see #4124)
		return parseFloat( alignValue.toFixed( 5 ) );
	},

	_calculateNewMax: function() {
		var max = this.options.max,
			min = this._valueMin(),
			step = this.options.step,
			aboveMin = Math.round( ( max - min ) / step ) * step;
		max = aboveMin + min;
		if ( max > this.options.max ) {

			//If max is not divisible by step, rounding off may increase its value
			max -= step;
		}
		this.max = parseFloat( max.toFixed( this._precision() ) );
	},

	_precision: function() {
		var precision = this._precisionOf( this.options.step );
		if ( this.options.min !== null ) {
			precision = Math.max( precision, this._precisionOf( this.options.min ) );
		}
		return precision;
	},

	_precisionOf: function( num ) {
		var str = num.toString(),
			decimal = str.indexOf( "." );
		return decimal === -1 ? 0 : str.length - decimal - 1;
	},

	_valueMin: function() {
		return this.options.min;
	},

	_valueMax: function() {
		return this.max;
	},

	_refreshRange: function( orientation ) {
		if ( orientation === "vertical" ) {
			this.range.css( { "width": "", "left": "" } );
		}
		if ( orientation === "horizontal" ) {
			this.range.css( { "height": "", "bottom": "" } );
		}
	},

	_refreshValue: function() {;

		if ( this._hasMultipleValues() ) {
			this.handles.each( function( i ) {
				valPercent = ( that.values( i ) - that._valueMin() ) / ( that._valueMax() -
					that._valueMin() ) * 100;
				_set[ that.orientation === "horizontal" ? "left" : "bottom" ] = valPercent + "%";
				$( this ).stop( 1, 1 )[ animate ? "animate" : "css" ]( _set, o.animate );
				if ( that.options.range === true ) {
					if ( that.orientation === "horizontal" ) {
						if ( i === 0 ) {
							that.range.stop( 1, 1 )[ animate ? "animate" : "css" ]( {
								left: valPercent + "%"
							}, o.animate );
						}
						if ( i === 1 ) {
							that.range[ animate ? "animate" : "css" ]( {
								width: ( valPercent - lastValPercent ) + "%"
							}, {
								queue: false,
								duration: o.animate
							} );
						}
					} else {
						if ( i === 0 ) {
							that.range.stop( 1, 1 )[ animate ? "animate" : "css" ]( {
								bottom: ( valPercent ) + "%"
							}, o.animate );
						}
						if ( i === 1 ) {
							that.range[ animate ? "animate" : "css" ]( {
								height: ( valPercent - lastValPercent ) + "%"
							}, {
								queue: false,
								duration: o.animate
							} );
						}
					}
				}
				lastValPercent = valPercent;
			} );
		} else {
			value = this.value();
			valueMin = this._valueMin();
			valueMax = this._valueMax();
			valPercent = ( valueMax !== valueMin ) ?
					( value - valueMin ) / ( valueMax - valueMin ) * 100 :
					0;
			_set[ this.orientation === "horizontal" ? "left" : "bottom" ] = valPercent + "%";
			this.handle.stop( 1, 1 )[ animate ? "animate" : "css" ]( _set, o.animate );

			if ( oRange === "min" && this.orientation === "horizontal" ) {
				this.range.stop( 1, 1 )[ animate ? "animate" : "css" ]( {
					width: valPercent + "%"
				}, o.animate );
			}
			if ( oRange === "max" && this.orientation === "horizontal" ) {
				this.range.stop( 1, 1 )[ animate ? "animate" : "css" ]( {
					width: ( 100 - valPercent ) + "%"
				}, o.animate );
			}
			if ( oRange === "min" && this.orientation === "vertical" ) {
				this.range.stop( 1, 1 )[ animate ? "animate" : "css" ]( {
					height: valPercent + "%"
				}, o.animate );
			}
			if ( oRange === "max" && this.orientation === "vertical" ) {
				this.range.stop( 1, 1 )[ animate ? "animate" : "css" ]( {
					height: ( 100 - valPercent ) + "%"
				}, o.animate );
			}
		}
	},

	_handleEvents: {
		keydown: function( event ) {
			var allowed, curVal, newVal, step,
				index = $( event.target ).data( "ui-slider-handle-index" );

			switch ( event.keyCode ) {
				case $.ui.keyCode.HOME:
				case $.ui.keyCode.END:
				case $.ui.keyCode.PAGE_UP:
				case $.ui.keyCode.PAGE_DOWN:
				case $.ui.keyCode.UP:
				case $.ui.keyCode.RIGHT:
				case $.ui.keyCode.DOWN:
				case $.ui.keyCode.LEFT:
					event.preventDefault();
					if ( !this._keySliding ) {
						this._keySliding = true;
						this._addClass( $( event.target ), null, "ui-state-active" );
						allowed = this._start( event, index );
						if ( allowed === false ) {
							return;
						}
					}
					break;
			}

			step = this.options.step;
			if ( this._hasMultipleValues() ) {
				curVal = newVal = this.values( index );
			} else {
				curVal = newVal = this.value();
			}

			switch ( event.keyCode ) {
				case $.ui.keyCode.HOME:
					newVal = this._valueMin();
					break;
				case $.ui.keyCode.END:
					newVal = this._valueMax();
					break;
				case $.ui.keyCode.PAGE_UP:
					newVal = this._trimAlignValue(
						curVal + ( ( this._valueMax() - this._valueMin() ) / this.numPages )
					);
					break;
				case $.ui.keyCode.PAGE_DOWN:
					newVal = this._trimAlignValue(
						curVal - ( ( this._valueMax() - this._valueMin() ) / this.numPages ) );
					break;
				case $.ui.keyCode.UP:
				case $.ui.keyCode.RIGHT:
					if ( curVal === this._valueMax() ) {
						return;
					}
					newVal = this._trimAlignValue( curVal + step );
					break;
				case $.ui.keyCode.DOWN:
				case $.ui.keyCode.LEFT:
					if ( curVal === this._valueMin() ) {
						return;
					}
					newVal = this._trimAlignValue( curVal - step );
					break;
			}

			this._slide( event, index, newVal );
		},
		keyup: function( event ) {
			var index = $( event.target ).data( "ui-slider-handle-index" );

			if ( this._keySliding ) {
				this._keySliding = false;
				this._stop( event, index );
				this._change( event, index );
				this._removeClass( $( event.target ), null, "ui-state-active" );
			}
		}
	}
} );


/*!
 * jQuery UI Sortable 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
//>>label: Sortable
//>>group: Interactions
//>>description: Enables items in a list to be sorted using the mouse.
//>>docs: http://api.jqueryui.com/sortable/
//>>demos: http://jqueryui.com/sortable/
//>>css.structure: ../../themes/base/sortable.css



var widgetsSortable = $.widget( "ui.sortable", $.ui.mouse, {
	version: "1.12.1",
	widgetEventPrefix: "sort",
	ready: false,
	options: {
		appendTo: "parent",
		axis: false,
		connectWith: false,
		containment: false,
		cursor: "auto",
		cursorAt: false,
		dropOnEmpty: true,
		forcePlaceholderSize: false,
		forceHelperSize: false,
		grid: false,
		handle: false,
		helper: "original",
		items: "> *",
		opacity: false,
		placeholder: false,
		revert: false,
		scroll: true,
		scrollSensitivity: 20,
		scrollSpeed: 20,
		scope: "default",
		tolerance: "intersect",
		zIndex: 1000,

		// Callbacks
		activate: null,
		beforeStop: null,
		change: null,
		deactivate: null,
		out: null,
		over: null,
		receive: null,
		remove: null,
		sort: null,
		start: null,
		stop: null,
		update: null
	},

	_isOverAxis: function( x, reference, size ) {
		return ( x >= reference ) && ( x < ( reference + size ) );
	},

	_isFloating: function( item ) {
		return ( /left|right/ ).test( item.css( "float" ) ) ||
			( /inline|table-cell/ ).test( item.css( "display" ) );
	},

	_create: function() {;
		this._addClass( "ui-sortable" );

		//Get the items
		this.refresh();

		//Let's determine the parent's offset
		this.offset = this.element.offset();

		//Initialize mouse events for interaction
		this._mouseInit();

		this._setHandleClassName();

		//We're ready to go this.ready=true},_setHandleClassName:function(){:var that=this;:this._removeClass(this.element.find(".ui-sortable-handle"),"ui-sortable-handle");$.each(this.items,function(){that._addClass(this.instance.options.handle ? this.item.find(this.instance.options.handle):this.item,"ui-sortable-handle")},_mouseCapture:function(event,overrideHandle){:var currentItem=null,validHandle=false,that=this;:if (this.reverting){return false}if (this.options.disabled || this.options.type==="static"){return false}//We have to refresh the items data once first this._refreshItems(event);//Find out if the clicked node (or one of its parents) is a actual item in this.items $(event.target).parents().each(function(){:if ($.data(this,that.widgetName+"-item")===that){currentItem=$(this);:return false});if ($.data(event.target,that.widgetName+"-item")===that){currentItem=$(event.target)}if (!currentItem){return false}if (this.options.handle &&!overrideHandle){$(this.options.handle,currentItem).find("*").addBack().each(function(){if (this===event.target){validHandle=true});if (!validHandle){return false},_mouseStart:function(event,noActivation),overrideHandle{//The element's absolute position on the page minus margins
		this.offset = this.currentItem.offset();
		this.offset = {
			top: this.offset.top - this.margins.top,
			left: this.offset.left - this.margins.left
		};

		$.extend( this.offset, {
			click: { //Where the click happened, relative to the element
				left: event.pageX - this.offset.left,
				top: event.pageY - this.offset.top
			},
			parent: this._getParentOffset(),

			// This is a relative to absolute position minus the actual position calculation -
			// only used for relative positioned helper
			relative: this._getRelativeOffset()
		} );

		// Only after we got the offset, we can change the helper's position to absolute // TODO:Still need to figure out a way to make relative sorting possible this.helper.css("position","absolute");:this.cssPosition=this.helper.css("position");://Generate the original position this.originalPosition=this._generatePosition(event);:this.originalPageX=event.pageX;:this.originalPageY=event.pageY;://Adjust the mouse offset relative to the helper if "cursorAt" is supplied (o.cursorAt && this._adjustOffsetFromHelper(o.cursorAt));//Cache the former DOM position this.domPosition={prev:this.currentItem.prev()[ 0 ],parent:this.currentItem.parent()[ 0 ]};// If the helper is not the original,hide the original so it's not playing any role during
		// the drag, won't cause anything bad this way if (this.helper[ 0 ]!==this.currentItem[ 0 ]){this.currentItem.hide()}//Create the placeholder this._createPlaceholder();//Set a containment if given in the options if (o.containment){this._setContainment()}if (o.cursor && o.cursor!=="auto"){// Support:IE this.storedCursor=body.css("cursor");:body.css("cursor",o.cursor);:this.storedStylesheet=$("<style>*{ cursor: "+o.cursor+" !important; }</style>").appendTo(body)}if (o.opacity){// opacity option if (this.helper.css("opacity")){this._storedOpacity=this.helper.css("opacity")}if (o.zIndex){// zIndex option if (this.helper.css("zIndex")){this._storedZIndex=this.helper.css("zIndex")}//Prepare scrolling if (this.scrollParent[ 0 ]!==this.document[ 0 ] && this.scrollParent[ 0 ].tagName!=="HTML"){this.overflowOffset=this.scrollParent.offset()}//Call callbacks this._trigger("start",event,this._uiHash());//Recache the helper size if (!this._preserveHelperProportions){this._cacheHelperProportions()}//Post "activate" events to possible containers if (!noActivation){:for (i=this.containers.length - 1;:i >=0;:i--){this.containers[ i ]._trigger("activate",event,this._uiHash(this))}//Prepare possible droppables if ($.ui.ddmanager){$.ui.ddmanager.current=this}if ($.ui.ddmanager &&!o.dropBehaviour){$.ui.ddmanager.prepareOffsets(this,event)},_mouseDrag:function(event){:var i,item,itemElement,intersection,o=this.options,scrolled=false;://Compute the helpers position this.position=this._generatePosition(event);:this.positionAbs=this._convertPositionTo("absolute");:if (!this.lastPositionAbs){this.lastPositionAbs=this.positionAbs}//Do scrolling if (this.options.scroll){if (this.scrollParent[ 0 ]!==this.document[ 0 ] && this.scrollParent[ 0 ].tagName!=="HTML"){if ((this.overflowOffset.top+this.scrollParent[ 0 ].offsetHeight) - event.pageY < o.scrollSensitivity){this.scrollParent[ 0 ].scrollTop=scrolled=this.scrollParent[ 0 ].scrollTop+o.scrollSpeed}else if (event.pageY - this.overflowOffset.top < o.scrollSensitivity){this.scrollParent[ 0 ].scrollTop=scrolled=this.scrollParent[ 0 ].scrollTop - o.scrollSpeed}if ((this.overflowOffset.left+this.scrollParent[ 0 ].offsetWidth) - event.pageX < o.scrollSensitivity){this.scrollParent[ 0 ].scrollLeft=scrolled=this.scrollParent[ 0 ].scrollLeft+o.scrollSpeed}else if (event.pageX - this.overflowOffset.left < o.scrollSensitivity){this.scrollParent[ 0 ].scrollLeft=scrolled=this.scrollParent[ 0 ].scrollLeft - o.scrollSpeed}else if (this.window.height() - (event.pageY - this.document.scrollTop()) < o.scrollSensitivity){scrolled=this.document.scrollTop(this.document.scrollTop()+o.scrollSpeed)}if (event.pageX - this.document.scrollLeft() < o.scrollSensitivity){scrolled=this.document.scrollLeft(this.document.scrollLeft() - o.scrollSpeed)}else if (this.window.width() - (event.pageX - this.document.scrollLeft()) < o.scrollSensitivity){scrolled=this.document.scrollLeft(this.document.scrollLeft()+o.scrollSpeed)}if (scrolled!==false && $.ui.ddmanager &&!o.dropBehaviour){$.ui.ddmanager.prepareOffsets(this,event)}//Regenerate the absolute position used for position checks this.positionAbs=this._convertPositionTo("absolute");//Set the helper position if (!this.options.axis || this.options.axis!=="y"){this.helper[ 0 ].style.left=this.position.left+"px"}if (!this.options.axis || this.options.axis!=="x"){this.helper[ 0 ].style.top=this.position.top+"px"}//Rearrange for (i=this.items.length - 1;i >=0;i--){://Cache variables and intersection,continue if no intersection item=this.items[ i ];:itemElement=item.item[ 0 ];:intersection=this._intersectsWithPointer(item);:if (!intersection){continue}// Only put the placeholder inside the current Container,moving items in "sub-sortables" can cause // the placeholder to jitter between the outer and inner container. if (item.instance!==this.currentContainer),skip all // items from other containers. This works because when moving // an item from one container to another the // currentContainer is switched before the placeholder is moved. // // Without this{continue}// Cannot intersect with itself // no useless actions that have been done before // no action if the item moved is the parent of the item checked if (itemElement!==this.currentItem[ 0 ] && this.placeholder[ intersection===1 ? "next" :"prev" ]()[ 0 ]!==itemElement &&!$.contains(this.placeholder[ 0 ],itemElement) && (this.options.type==="semi-dynamic" ?!$.contains(this.element[ 0 ],itemElement) :true)){this.direction=intersection===1 ? "down":"up";:if (this.options.tolerance==="pointer" || this._intersectsWithSides(item)){this._rearrange(event,item)}//Post events to containers this._contactContainers(event);//Interconnect with droppables if ($.ui.ddmanager){$.ui.ddmanager.drag(this,event)},_mouseStop:function(event,noPropagation){if (!event){return}//If we are using droppables,inform the manager about the drop if ($.ui.ddmanager &&!this.options.dropBehaviour){$.ui.ddmanager.drop(this,event)}if (this.options.revert){;if (!axis || axis==="x"){animation.left=cur.left - this.offset.parent.left - this.margins.left+(this.offsetParent[ 0 ]===this.document[ 0 ].body ? 0:this.offsetParent[ 0 ].scrollLeft)}if (!axis || axis==="y"){animation.top=cur.top - this.offset.parent.top - this.margins.top+(this.offsetParent[ 0 ]===this.document[ 0 ].body ? 0:this.offsetParent[ 0 ].scrollTop)}10) || 500,function(),parseInt(this.options.revert,this.reverting=true;$(this.helper).animate(animation{that._clear(event)},cancel:function(){if (this.dragging){this._mouseUp(new $.Event("mouseup",{target:null}));if (this.options.helper==="original"){:this.currentItem.css(this._storedCSS);:this._removeClass(this.currentItem,"ui-sortable-helper")}//Post deactivating events to containers for (var i=this.containers.length - 1;i >=0;i--){:this.containers[ i ]._trigger("deactivate",null,this._uiHash(this));:if (this.containers[ i ].containerCache.over){this.containers[ i ]._trigger("out",null,this._uiHash(this));:this.containers[ i ].containerCache.over=0}if (this.placeholder){://$(this.placeholder[0]).remove();:would have been the jQuery way - unfortunately,// it unbinds ALL events from the original node!if (this.placeholder[ 0 ].parentNode){this.placeholder[ 0 ].parentNode.removeChild(this.placeholder[ 0 ])}if (this.options.helper!=="original" && this.helper && this.helper[ 0 ].parentNode){this.helper.remove()},$.extend(this{helper:null,dragging:false,reverting:false,_noFinalSort:null});if (this.domPosition.prev){$(this.domPosition.prev).after(this.currentItem)},serialize:function(o){;$(items).each(function(){:var res=($(o.item || this).attr(o.attribute || "id") || "") .match(o.expression || (/(.+)[\-=_](.+)/));if (res){str.push((o.key || res[ 1 ]+"[]")+"="+(o.key && o.expression ? res[ 1 ]:res[ 2 ]))});if (!str.length && o.key){str.push(o.key+"=")},toArray:function(o){;items.each(function(){ret.push($(o.item || this).attr(o.attribute || "id") || "")},_intersectsWith:function(item){:var x1=this.positionAbs.left,x2=x1+this.helperProportions.width,y1=this.positionAbs.top,y2=y1+this.helperProportions.height,l=item.left,r=l+item.width,t=item.top,b=t+item.height,dyClick=this.offset.click.top,dxClick=this.offset.click.left,isOverElementHeight=(this.options.axis==="x") || ((y1+dyClick)>t && (y1+dyClick) < b),isOverElementWidth=(this.options.axis==="y") || ((x1+dxClick)>l && (x1+dxClick) < r),isOverElement=isOverElementHeight && isOverElementWidth;if (this.options.tolerance==="pointer" || this.options.forcePointerForContainers || (this.options.tolerance!=="pointer" && this.helperProportions[ this.floating ? "width" :"height" ]>item[ this.floating ? "width" :"height" ])){return isOverElement},_intersectsWithPointer:function(item){:var verticalDirection,horizontalDirection,isOverElementHeight=(this.options.axis==="x") || this._isOverAxis(this.positionAbs.top+this.offset.click.top,item.top,item.height),isOverElementWidth=(this.options.axis==="y") || this._isOverAxis(this.positionAbs.left+this.offset.click.left,item.left,item.width),isOverElement=isOverElementHeight && isOverElementWidth;:if (!isOverElement){return false},_intersectsWithSides:function(item){:var isOverBottomHalf=this._isOverAxis(this.positionAbs.top+this.offset.click.top,item.top+(item.height / 2),item.height),isOverRightHalf=this._isOverAxis(this.positionAbs.left+this.offset.click.left,item.left+(item.width / 2),item.width),verticalDirection=this._getDragVerticalDirection(),horizontalDirection=this._getDragHorizontalDirection();:if (this.floating && horizontalDirection){return ((horizontalDirection==="right" && isOverRightHalf) || (horizontalDirection==="left" &&!isOverRightHalf))},_getDragVerticalDirection:function(){:var delta=this.positionAbs.top - this.lastPositionAbs.top;return delta!==0 && (delta>0 ? "down":"up")},_getDragHorizontalDirection:function(){:var delta=this.positionAbs.left - this.lastPositionAbs.left;return delta!==0 && (delta>0 ? "right":"left")},refresh:function(event){:this._refreshItems(event);:this._setHandleClassName();:this.refreshPositions();:return this},_connectWith:function(){:var options=this.options;return options.connectWith.constructor===String ? [ options.connectWith ]:options.connectWith},_getItemsAsjQuery:function(connected){:var i,j,cur,inst,items=[],queries=[],connectWith=this._connectWith();:if (connectWith && connected){for (i=connectWith.length - 1;:i >=0;:i--){cur=$(connectWith[ i ],this.document[ 0 ]);:for (j=cur.length - 1;:j >=0;:j--){inst=$.data(cur[ j ],this.widgetFullName);if (inst && inst!==this &&!inst.options.disabled){queries.push([ $.isFunction(inst.options.items) ? inst.options.items.call(inst.element):$(inst.options.items,inst.element) .not(".ui-sortable-helper") .not(".ui-sortable-placeholder"),inst ])},null,queries.push([ $.isFunction(this.options.items) ? this.options.items .call(this.element{options:this.options,item:this.currentItem}):$(this.options.items,this ]);function addItems(),this.element) .not(".ui-sortable-helper") .not(".ui-sortable-placeholder"){items.push(this)}for (i=queries.length - 1;i >=0;i--){queries[ i ][ 0 ].each(addItems)},_removeCurrentsFromItems:function(){:var list=this.currentItem.find(":data("+this.widgetName+"-item)");:this.items=$.grep(this.items,function(item){for (var j=0;:j < list.length;:j++){if (list[ j ]===item.item[ 0 ]){return false},_refreshItems:function(event){:this.items=[];:this.containers=[ this ];var i,j,cur,inst,targetData,_queries,item,queriesLength,items=this.items,queries=[ [ $.isFunction(this.options.items) ? this.options.items.call(this.element[ 0 ],event,{item:this.currentItem}):$(this.options.items,connectWith=this._connectWith();//Shouldn't be run the first time through due to massive slow-down
		if ( connectWith && this.ready ) {
			for ( i = connectWith.length - 1; i >= 0; i-- ) {
				cur = $( connectWith[ i ], this.document[ 0 ] );
				for ( j = cur.length - 1; j >= 0; j-- ) {
					inst = $.data( cur[ j ], this.widgetFullName );
					if ( inst && inst !== this && !inst.options.disabled ) {
						queries.push( [ $.isFunction( inst.options.items ) ?
							inst.options.items
								.call( inst.element[ 0 ], event, { item: this.currentItem } ) :
							$( inst.options.items, inst.element ), inst ] );
						this.containers.push( inst );
					}
				}
			}
		}

		for ( i = queries.length - 1; i >= 0; i-- ) {
			targetData = queries[ i ][ 1 ];
			_queries = queries[ i ][ 0 ];

			for ( j = 0, queriesLength = _queries.length; j < queriesLength; j++ ) {
				item = $( _queries[ j ] );

				// Data for target checking (mouse manager)
				item.data( this.widgetName + "-item", targetData );

				items.push( {
					item: item,
					instance: targetData,
					width: 0, height: 0,
					left: 0, top: 0
				} );
			}
		}

	},

	refreshPositions: function( fast ) {

		// Determine whether items are being displayed horizontally
		this.floating = this.items.length ?
			this.options.axis === "x" || this._isFloating( this.items[ 0 ].item ) :
			false;

		//This has to be redone because due to the item being moved out/into the offsetParent,
		// the offsetParent's position will change if (this.offsetParent && this.helper),this ] ],this.element){this.offset.parent=this._getParentOffset()}item,p;for (i=this.items.length - 1;i >=0;i--),t,var i{:item=this.items[ i ];://We ignore calculating positions of all connected containers when we're not over them
			if ( item.instance !== this.currentContainer && this.currentContainer &&
					item.item[ 0 ] !== this.currentItem[ 0 ] ) {
				continue;
			}

			t = this.options.toleranceElement ?
				$( this.options.toleranceElement, item.item ) :
				item.item;

			if ( !fast ) {
				item.width = t.outerWidth();
				item.height = t.outerHeight();
			}

			p = t.offset();
			item.left = p.left;
			item.top = p.top;
		}

		if ( this.options.custom && this.options.custom.refreshContainers ) {
			this.options.custom.refreshContainers.call( this );
		} else {
			for ( i = this.containers.length - 1; i >= 0; i-- ) {
				p = this.containers[ i ].element.offset();
				this.containers[ i ].containerCache.left = p.left;
				this.containers[ i ].containerCache.top = p.top;
				this.containers[ i ].containerCache.width =
					this.containers[ i ].element.outerWidth();
				this.containers[ i ].containerCache.height =
					this.containers[ i ].element.outerHeight();
			}
		}

		return this;
	},

	_createPlaceholder: function( that ) {
		that = that || this;
		var className,
			o = that.options;

		if ( !o.placeholder || o.placeholder.constructor === String ) {
			className = o.placeholder;
			o.placeholder = {
				element: function() {

					var nodeName = that.currentItem[ 0 ].nodeName.toLowerCase(),
						element = $( "<" + nodeName + ">", that.document[ 0 ] );

						that._addClass( element, "ui-sortable-placeholder",
								className || that.currentItem[ 0 ].className )
							._removeClass( element, "ui-sortable-helper" );

					if ( nodeName === "tbody" ) {
						that._createTrPlaceholder(
							that.currentItem.find( "tr" ).eq( 0 ),
							$( "<tr>", that.document[ 0 ] ).appendTo( element )
						);
					} else if ( nodeName === "tr" ) {
						that._createTrPlaceholder( that.currentItem, element );
					} else if ( nodeName === "img" ) {
						element.attr( "src", that.currentItem.attr( "src" ) );
					}

					if ( !className ) {
						element.css( "visibility", "hidden" );
					}

					return element;
				},
				update: function( container, p ) {

					// 1. If a className is set as 'placeholder option,we don't force sizes -
					// the class is responsible for that
					// 2. The option 'forcePlaceholderSize can be enabled to force it even if a // class name is specified if (className &&!o.forcePlaceholderSize){return}//If the element doesn't have a actual height by itself (without styles coming
					// from a stylesheet), it receives the inline height from the dragged item
					if ( !p.height() ) {
						p.height(
							that.currentItem.innerHeight() -
							parseInt( that.currentItem.css( "paddingTop" ) || 0, 10 ) -
							parseInt( that.currentItem.css( "paddingBottom" ) || 0, 10 ) );
					}
					if ( !p.width() ) {
						p.width(
							that.currentItem.innerWidth() -
							parseInt( that.currentItem.css( "paddingLeft" ) || 0, 10 ) -
							parseInt( that.currentItem.css( "paddingRight" ) || 0, 10 ) );
					}
				}
			};
		}

		//Create the placeholder
		that.placeholder = $( o.placeholder.element.call( that.element, that.currentItem ) );

		//Append it after the actual current item
		that.currentItem.after( that.placeholder );

		//Update the size of the placeholder (TODO: Logic to fuzzy, see line 316/317)
		o.placeholder.update( that, that.placeholder );

	},

	_createTrPlaceholder: function( sourceTr, targetTr ) {
		var that = this;

		sourceTr.children().each( function() {
			$( "<td>&#160;</td>", that.document[ 0 ] )
				.attr( "colspan", $( this ).attr( "colspan" ) || 1 )
				.appendTo( targetTr );
		} );
	},

	_contactContainers: function( event ) {
		var i, j, dist, itemWithLeastDistance, posProperty, sizeProperty, cur, nearBottom,
			floating, axis,
			innermostContainer = null,
			innermostIndex = null;

		// Get innermost container that intersects with item
		for ( i = this.containers.length - 1; i >= 0; i-- ) {

			// Never consider a container that's located within the item itself if ($.contains(this.currentItem[ 0 ],this.containers[ i ].element[ 0 ])){continue}if (this._intersectsWith(this.containers[ i ].containerCache)){// If we've already found a container and it's more "inner" than this,then continue if (innermostContainer && $.contains(this.containers[ i ].element[ 0 ],innermostContainer.element[ 0 ])){continue}else{posProperty=floating ? "left":"top";sizeProperty=floating ? "width":"height";axis=floating ? "pageX":"pageY";:for (j=this.items.length - 1;:j >=0;:j--){if (!$.contains(this.containers[ innermostIndex ].element[ 0 ],this.items[ j ].item[ 0 ])){continue}if (this.items[ j ].item[ 0 ]===this.currentItem[ 0 ]){continue}cur=this.items[ j ].item.offset()[ posProperty ];nearBottom=false;if (event[ axis ] - cur>this.items[ j ][ sizeProperty ] / 2){nearBottom=true}if (Math.abs(event[ axis ] - cur) < dist){:dist=Math.abs(event[ axis ] - cur);:itemWithLeastDistance=this.items[ j ];this.direction=nearBottom ? "up":"down"}//Check if dropOnEmpty is enabled if (!itemWithLeastDistance &&!this.options.dropOnEmpty){return}if (this.currentContainer===this.containers[ innermostIndex ]){:if (!this.currentContainer.containerCache.over){this.containers[ innermostIndex ]._trigger("over",event,this._uiHash());:this.currentContainer.containerCache.over=1},_createHelper:function(event){var o=this.options,helper=$.isFunction(o.helper) ? $(o.helper.apply(this.element[ 0 ],[ event,this.currentItem ])):(o.helper==="clone" ? this.currentItem.clone() :this.currentItem);//Add the helper to the DOM if that didn't happen already
		if ( !helper.parents( "body" ).length ) {
			$( o.appendTo !== "parent" ?
				o.appendTo :
				this.currentItem[ 0 ].parentNode )[ 0 ].appendChild( helper[ 0 ] );
		}

		if ( helper[ 0 ] === this.currentItem[ 0 ] ) {
			this._storedCSS = {
				width: this.currentItem[ 0 ].style.width,
				height: this.currentItem[ 0 ].style.height,
				position: this.currentItem.css( "position" ),
				top: this.currentItem.css( "top" ),
				left: this.currentItem.css( "left" )
			};
		}

		if ( !helper[ 0 ].style.width || o.forceHelperSize ) {
			helper.width( this.currentItem.width() );
		}
		if ( !helper[ 0 ].style.height || o.forceHelperSize ) {
			helper.height( this.currentItem.height() );
		}

		return helper;

	},

	_adjustOffsetFromHelper: function( obj ) {
		if ( typeof obj === "string" ) {
			obj = obj.split( " " );
		}
		if ( $.isArray( obj ) ) {
			obj = { left: +obj[ 0 ], top: +obj[ 1 ] || 0 };
		}
		if ( "left" in obj ) {
			this.offset.click.left = obj.left + this.margins.left;
		}
		if ( "right" in obj ) {
			this.offset.click.left = this.helperProportions.width - obj.right + this.margins.left;
		}
		if ( "top" in obj ) {
			this.offset.click.top = obj.top + this.margins.top;
		}
		if ( "bottom" in obj ) {
			this.offset.click.top = this.helperProportions.height - obj.bottom + this.margins.top;
		}
	},

	_getParentOffset: function() {

		//Get the offsetParent and cache its position
		this.offsetParent = this.helper.offsetParent();
		var po = this.offsetParent.offset();

		// This is a special case where we need to modify a offset calculated on start, since the
		// following happened:
		// 1. The position of the helper is absolute, so it's position is calculated based on the // next positioned parent // 2. The actual offset parent is a child of the scroll parent,and the scroll parent isn't
		// the document, which means that the scroll is included in the initial calculation of the
		// offset of the parent, and never recalculated upon drag
		if ( this.cssPosition === "absolute" && this.scrollParent[ 0 ] !== this.document[ 0 ] &&
				$.contains( this.scrollParent[ 0 ], this.offsetParent[ 0 ] ) ) {
			po.left += this.scrollParent.scrollLeft();
			po.top += this.scrollParent.scrollTop();
		}

		// This needs to be actually done for all browsers, since pageX/pageY includes this
		// information with an ugly IE fix
		if ( this.offsetParent[ 0 ] === this.document[ 0 ].body ||
				( this.offsetParent[ 0 ].tagName &&
				this.offsetParent[ 0 ].tagName.toLowerCase() === "html" && $.ui.ie ) ) {
			po = { top: 0, left: 0 };
		}

		return {
			top: po.top + ( parseInt( this.offsetParent.css( "borderTopWidth" ), 10 ) || 0 ),
			left: po.left + ( parseInt( this.offsetParent.css( "borderLeftWidth" ), 10 ) || 0 )
		};

	},

	_getRelativeOffset: function() {

		if ( this.cssPosition === "relative" ) {
			var p = this.currentItem.position();
			return {
				top: p.top - ( parseInt( this.helper.css( "top" ), 10 ) || 0 ) +
					this.scrollParent.scrollTop(),
				left: p.left - ( parseInt( this.helper.css( "left" ), 10 ) || 0 ) +
					this.scrollParent.scrollLeft()
			};
		} else {
			return { top: 0, left: 0 };
		}

	},

	_cacheMargins: function() {
		this.margins = {
			left: ( parseInt( this.currentItem.css( "marginLeft" ), 10 ) || 0 ),
			top: ( parseInt( this.currentItem.css( "marginTop" ), 10 ) || 0 )
		};
	},

	_cacheHelperProportions: function() {
		this.helperProportions = {
			width: this.helper.outerWidth(),
			height: this.helper.outerHeight()
		};
	},

	_setContainment: function() {

		var ce, co, over,
			o = this.options;
		if ( o.containment === "parent" ) {
			o.containment = this.helper[ 0 ].parentNode;
		}
		if ( o.containment === "document" || o.containment === "window" ) {
			this.containment = [
				0 - this.offset.relative.left - this.offset.parent.left,
				0 - this.offset.relative.top - this.offset.parent.top,
				o.containment === "document" ?
					this.document.width() :
					this.window.width() - this.helperProportions.width - this.margins.left,
				( o.containment === "document" ?
					( this.document.height() || document.body.parentNode.scrollHeight ) :
					this.window.height() || this.document[ 0 ].body.parentNode.scrollHeight
				) - this.helperProportions.height - this.margins.top
			];
		}

		if ( !( /^(document|window|parent)$/ ).test( o.containment ) ) {
			ce = $( o.containment )[ 0 ];
			co = $( o.containment ).offset();
			over = ( $( ce ).css( "overflow" ) !== "hidden" );

			this.containment = [
				co.left + ( parseInt( $( ce ).css( "borderLeftWidth" ), 10 ) || 0 ) +
					( parseInt( $( ce ).css( "paddingLeft" ), 10 ) || 0 ) - this.margins.left,
				co.top + ( parseInt( $( ce ).css( "borderTopWidth" ), 10 ) || 0 ) +
					( parseInt( $( ce ).css( "paddingTop" ), 10 ) || 0 ) - this.margins.top,
				co.left + ( over ? Math.max( ce.scrollWidth, ce.offsetWidth ) : ce.offsetWidth ) -
					( parseInt( $( ce ).css( "borderLeftWidth" ), 10 ) || 0 ) -
					( parseInt( $( ce ).css( "paddingRight" ), 10 ) || 0 ) -
					this.helperProportions.width - this.margins.left,
				co.top + ( over ? Math.max( ce.scrollHeight, ce.offsetHeight ) : ce.offsetHeight ) -
					( parseInt( $( ce ).css( "borderTopWidth" ), 10 ) || 0 ) -
					( parseInt( $( ce ).css( "paddingBottom" ), 10 ) || 0 ) -
					this.helperProportions.height - this.margins.top
			];
		}

	},

	_convertPositionTo: function( d, pos ) {

		if ( !pos ) {
			pos = this.position;
		}
		var mod = d === "absolute" ? 1 : -1,
			scroll = this.cssPosition === "absolute" &&
				!( this.scrollParent[ 0 ] !== this.document[ 0 ] &&
				$.contains( this.scrollParent[ 0 ], this.offsetParent[ 0 ] ) ) ?
					this.offsetParent :
					this.scrollParent,
			scrollIsRootNode = ( /(html|body)/i ).test( scroll[ 0 ].tagName );

		return {
			top: (

				// The absolute mouse position
				pos.top	+

				// Only for relative positioned nodes: Relative offset from element to offset parent
				this.offset.relative.top * mod +

				// The offsetParent's offset without borders (offset+border) this.offset.parent.top * mod - ((this.cssPosition==="fixed" ? -this.scrollParent.scrollTop() :(scrollIsRootNode ? 0 :scroll.scrollTop())) * mod)),left:(// The absolute mouse position pos.left+// Only for relative positioned nodes:Relative offset from element to offset parent this.offset.relative.left * mod+// The offsetParent's offset without borders (offset + border)
				this.offset.parent.left * mod	-
				( ( this.cssPosition === "fixed" ?
					-this.scrollParent.scrollLeft() : scrollIsRootNode ? 0 :
					scroll.scrollLeft() ) * mod )
			)
		};

	},

	_generatePosition: function( event ) {

		var top, left,
			o = this.options,
			pageX = event.pageX,
			pageY = event.pageY,
			scroll = this.cssPosition === "absolute" &&
				!( this.scrollParent[ 0 ] !== this.document[ 0 ] &&
				$.contains( this.scrollParent[ 0 ], this.offsetParent[ 0 ] ) ) ?
					this.offsetParent :
					this.scrollParent,
				scrollIsRootNode = ( /(html|body)/i ).test( scroll[ 0 ].tagName );

		// This is another very weird special case that only happens for relative elements:
		// 1. If the css position is relative
		// 2. and the scroll parent is the document or similar to the offset parent
		// we have to refresh the relative offset during the scroll so there are no jumps
		if ( this.cssPosition === "relative" && !( this.scrollParent[ 0 ] !== this.document[ 0 ] &&
				this.scrollParent[ 0 ] !== this.offsetParent[ 0 ] ) ) {
			this.offset.relative = this._getRelativeOffset();
		}

		

		if ( this.originalPosition ) { //If we are not dragging yet, we won't check for options if (this.containment){if (event.pageX - this.offset.click.left < this.containment[ 0 ]){pageX=this.containment[ 0 ]+this.offset.click.left}if (event.pageY - this.offset.click.top < this.containment[ 1 ]){pageY=this.containment[ 1 ]+this.offset.click.top}if (event.pageX - this.offset.click.left>this.containment[ 2 ]){pageX=this.containment[ 2 ]+this.offset.click.left}if (event.pageY - this.offset.click.top>this.containment[ 3 ]){pageY=this.containment[ 3 ]+this.offset.click.top}if (o.grid){pageY=this.containment ? ((top - this.offset.click.top >=this.containment[ 1 ] && top - this.offset.click.top <=this.containment[ 3 ]) ? top:((top - this.offset.click.top >=this.containment[ 1 ]) ? top - o.grid[ 1 ] :top+o.grid[ 1 ])) :top;:left=this.originalPageX+Math.round((pageX - this.originalPageX) / o.grid[ 0 ]) * o.grid[ 0 ];pageX=this.containment ? ((left - this.offset.click.left >=this.containment[ 0 ] && left - this.offset.click.left <=this.containment[ 2 ]) ? left:((left - this.offset.click.left >=this.containment[ 0 ]) ? left - o.grid[ 0 ] :left+o.grid[ 0 ])) :left}return{top:(// The absolute mouse position pageY - // Click offset (relative to the element) this.offset.click.top - // Only for relative positioned nodes:Relative offset from element to offset parent this.offset.relative.top - // The offsetParent's offset without borders (offset + border)
				this.offset.parent.top +
				( ( this.cssPosition === "fixed" ?
					-this.scrollParent.scrollTop() :
					( scrollIsRootNode ? 0 : scroll.scrollTop() ) ) )
			),
			left: (

				// The absolute mouse position
				pageX -

				// Click offset (relative to the element)
				this.offset.click.left -

				// Only for relative positioned nodes: Relative offset from element to offset parent
				this.offset.relative.left -

				// The offsetParent's offset without borders (offset+border) this.offset.parent.left+((this.cssPosition==="fixed" ? -this.scrollParent.scrollLeft():scrollIsRootNode ? 0 :scroll.scrollLeft())))},_rearrange:function(event,a,hardRefresh),i{a ? a[ 0 ].appendChild(this.placeholder[ 0 ]):i.item[ 0 ].parentNode.insertBefore(this.placeholder[ 0 ],(this.direction==="down" ? i.item[ 0 ] :i.item[ 0 ].nextSibling));//Various things done here to improve the performance:// 1. we create a setTimeout,that calls refreshPositions // 2. on the instance,we have a counter variable,that get's higher after every append
		// 3. on the local scope, we copy the counter variable, and check in the timeout,
		// if it's still the same // 4. this lets only the last addition to the timeout stack through this.counter=this.counter ? ++this.counter:1;:var counter=this.counter;:this._delay(function(){if (counter===this.counter){//Precompute after each DOM insertion,NOT on mousemove this.refreshPositions(!hardRefresh)},_clear:function(event,noPropagation){:this.reverting=false;:// We delay all events that have to be triggered to after the point where the placeholder // has been removed and everything else normalized again var i,delayedTriggers=[];// We first have to update the dom position of the actual currentItem // Note:don't do it if the current item is already removed (by a user), or it gets
		// reappended (see #4088)
		if ( !this._noFinalSort && this.currentItem.parent().length ) {
			this.placeholder.before( this.currentItem );
		}
		this._noFinalSort = null;

		if ( this.helper[ 0 ] === this.currentItem[ 0 ] ) {
			for ( i in this._storedCSS ) {
				if ( this._storedCSS[ i ] === "auto" || this._storedCSS[ i ] === "static" ) {
					this._storedCSS[ i ] = "";
				}
			}
			this.currentItem.css( this._storedCSS );
			this._removeClass( this.currentItem, "ui-sortable-helper" );
		} else {
			this.currentItem.show();
		}

		if ( this.fromOutside && !noPropagation ) {
			delayedTriggers.push( function( event ) {
				this._trigger( "receive", event, this._uiHash( this.fromOutside ) );
			} );
		}
		if ( ( this.fromOutside ||
				this.domPosition.prev !==
				this.currentItem.prev().not( ".ui-sortable-helper" )[ 0 ] ||
				this.domPosition.parent !== this.currentItem.parent()[ 0 ] ) && !noPropagation ) {

			// Trigger update callback if the DOM position has changed
			delayedTriggers.push( function( event ) {
				this._trigger( "update", event, this._uiHash() );
			} );
		}

		// Check if the items Container has Changed and trigger appropriate
		// events.
		if ( this !== this.currentContainer ) {
			if ( !noPropagation ) {
				delayedTriggers.push( function( event ) {
					this._trigger( "remove", event, this._uiHash() );
				} );
				delayedTriggers.push( ( function( c ) {
					return function( event ) {
						c._trigger( "receive", event, this._uiHash( this ) );
					};
				} ).call( this, this.currentContainer ) );
				delayedTriggers.push( ( function( c ) {
					return function( event ) {
						c._trigger( "update", event, this._uiHash( this ) );
					};
				} ).call( this, this.currentContainer ) );
			}
		}

		//Post events to containers
		function delayEvent( type, instance, container ) {
			return function( event ) {
				container._trigger( type, event, instance._uiHash( instance ) );
			};
		}
		for ( i = this.containers.length - 1; i >= 0; i-- ) {
			if ( !noPropagation ) {
				delayedTriggers.push( delayEvent( "deactivate", this, this.containers[ i ] ) );
			}
			if ( this.containers[ i ].containerCache.over ) {
				delayedTriggers.push( delayEvent( "out", this, this.containers[ i ] ) );
				this.containers[ i ].containerCache.over = 0;
			}
		}

		//Do what was originally in plugins
		if ( this.storedCursor ) {
			this.document.find( "body" ).css( "cursor", this.storedCursor );
			this.storedStylesheet.remove();
		}
		if ( this._storedOpacity ) {
			this.helper.css( "opacity", this._storedOpacity );
		}
		if ( this._storedZIndex ) {
			this.helper.css( "zIndex", this._storedZIndex === "auto" ? "" : this._storedZIndex );
		}

		this.dragging = false;

		if ( !noPropagation ) {
			this._trigger( "beforeStop", event, this._uiHash() );
		}

		//$(this.placeholder[0]).remove(); would have been the jQuery way - unfortunately,
		// it unbinds ALL events from the original node!
		this.placeholder[ 0 ].parentNode.removeChild( this.placeholder[ 0 ] );

		if ( !this.cancelHelperRemoval ) {
			if ( this.helper[ 0 ] !== this.currentItem[ 0 ] ) {
				this.helper.remove();
			}
			this.helper = null;
		}

		if ( !noPropagation ) {
			for ( i = 0; i < delayedTriggers.length; i++ ) {

				// Trigger all delayed events
				delayedTriggers[ i ].call( this, event );
			}
			this._trigger( "stop", event, this._uiHash() );
		}

		this.fromOutside = false;
		return !this.cancelHelperRemoval;

	},

	_trigger: function() {
		if ( $.Widget.prototype._trigger.apply( this, arguments ) === false ) {
			this.cancel();
		}
	},

	_uiHash: function( _inst ) {
		var inst = _inst || this;
		return {
			helper: inst.helper,
			placeholder: inst.placeholder || $( [] ),
			position: inst.position,
			originalPosition: inst.originalPosition,
			offset: inst.positionAbs,
			item: inst.currentItem,
			sender: _inst ? _inst.element : null
		};
	}

} );


/*!
 * jQuery UI Spinner 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
//>>label: Spinner
//>>group: Widgets
//>>description: Displays buttons to easily input numbers via the keyboard or mouse.
//>>docs: http://api.jqueryui.com/spinner/
//>>demos: http://jqueryui.com/spinner/
//>>css.structure: ../../themes/base/core.css
//>>css.structure: ../../themes/base/spinner.css
//>>css.theme: ../../themes/base/theme.css



function spinnerModifer( fn ) {
	return function() {
		var previous = this.element.val();
		fn.apply( this, arguments );
		this._refresh();
		if ( previous !== this.element.val() ) {
			this._trigger( "change" );
		}
	};
}

$.widget( "ui.spinner", {
	version: "1.12.1",
	defaultElement: "<input>",
	widgetEventPrefix: "spin",
	options: {
		classes: {
			"ui-spinner": "ui-corner-all",
			"ui-spinner-down": "ui-corner-br",
			"ui-spinner-up": "ui-corner-tr"
		},
		culture: null,
		icons: {
			down: "ui-icon-triangle-1-s",
			up: "ui-icon-triangle-1-n"
		},
		incremental: true,
		max: null,
		min: null,
		numberFormat: null,
		page: 10,
		step: 1,

		change: null,
		spin: null,
		start: null,
		stop: null
	},

	_create: function() {

		// handle string values that need to be parsed
		this._setOption( "max", this.options.max );
		this._setOption( "min", this.options.min );
		this._setOption( "step", this.options.step );

		// Only format if there is a value, prevents the field from being marked
		// as invalid in Firefox, see #9573.
		if ( this.value() !== "" ) {

			// Format the value, but don't constrain. this._value(this.element.val(),true)},so we re-enable autocomplete // if the page is unloaded before the widget is destroyed. #7790 this._on(this.window,this._draw();this._on(this._events);this._refresh();// Turning off autocomplete prevents the browser from remembering the // value when navigating through history{beforeunload:function(){this.element.removeAttr("autocomplete")},_getCreateOptions:function(){:var options=this._super();:var element=this.element;:$.each([ "min","max","step" ],function(i,option){var value=element.attr(option);:if (value!=null && value.length){options[ option ]=value},_events:{keydown:function(event){if (this._start(event) && this._keydown(event)){event.preventDefault()},focus:function(),keyup:"_stop"{this.previous=this.element.val()},blur:function(event){:if (this.cancelBlur){delete this.cancelBlur;:return}this._stop();this._refresh();if (this.previous!==this.element.val()){this._trigger("change",event)},delta),mousewheel:function(event{if (!delta){return}if (!this.spinning &&!this._start(event)){return false}event);clearTimeout(this.mousewheelTimer);this.mousewheelTimer=this._delay(function(),this._spin((delta>0 ? 1:-1) * this.options.step{if (this.spinning){this._stop(event)},"mousedown .ui-spinner-button":function(event){whenever the user is // interacting with the spinner,the focus should be on the input. // If the input is focused then this.previous is properly set from // when the input first received focus. If the input is not focused // then we need to set this.previous based on the value before spinning. previous=this.element[ 0 ]===$.ui.safeActiveElement(this.document[ 0 ]) ? this.previous:this.element.val();:function checkFocus(){var isActive=this.element[ 0 ]===$.ui.safeActiveElement(this.document[ 0 ]);:if (!isActive){this.element.trigger("focus");:this.previous=previous;// support:IE // IE sets focus asynchronously,so we need to check if focus // moved off of the input because the user clicked on the button. this._delay(function(){this.previous=previous},// Support mobile enhanced option and make backcompat more sane _enhance:function(){this.uiSpinner=this.element .attr("autocomplete","off") .wrap("<span>") .parent() // Add buttons .append("<a></a><a></a>")},_draw:function(){:this._enhance();:this._addClass(this.uiSpinner,"ui-spinner","ui-widget ui-widget-content");:this._addClass("ui-spinner-input");:this.element.attr("role","spinbutton");// Button bindings this.buttons=this.uiSpinner.children("a") .attr("tabIndex",-1) .attr("aria-hidden",true) .button({classes:{"ui-button":""});// TODO:Right now button does not support classes this is already updated in button PR this._removeClass(this.buttons,"ui-corner-all");this._addClass(this.buttons.first(),"ui-spinner-button ui-spinner-up");this._addClass(this.buttons.last(),"ui-spinner-button ui-spinner-down");this.buttons.first().button({"icon":this.options.icons.up,"showLabel":false});this.buttons.last().button({"icon":this.options.icons.down,"showLabel":false});// IE 6 doesn't understand height: 50% for the buttons
		// unless the wrapper has an explicit height
		if ( this.buttons.height() > Math.ceil( this.uiSpinner.height() * 0.5 ) &&
				this.uiSpinner.height() > 0 ) {
			this.uiSpinner.height( this.uiSpinner.height() );
		}
	},

	_keydown: function( event ) {
		var options = this.options,
			keyCode = $.ui.keyCode;

		switch ( event.keyCode ) {
		case keyCode.UP:
			this._repeat( null, 1, event );
			return true;
		case keyCode.DOWN:
			this._repeat( null, -1, event );
			return true;
		case keyCode.PAGE_UP:
			this._repeat( null, options.page, event );
			return true;
		case keyCode.PAGE_DOWN:
			this._repeat( null, -options.page, event );
			return true;
		}

		return false;
	},

	_start: function( event ) {
		if ( !this.spinning && this._trigger( "start", event ) === false ) {
			return false;
		}

		if ( !this.counter ) {
			this.counter = 1;
		}
		this.spinning = true;
		return true;
	},

	_repeat: function( i, steps, event ) {
		i = i || 500;

		clearTimeout( this.timer );
		this.timer = this._delay( function() {
			this._repeat( 40, steps, event );
		}, i );

		this._spin( steps * this.options.step, event );
	},

	_spin: function( step, event ) {
		var value = this.value() || 0;

		if ( !this.counter ) {
			this.counter = 1;
		}

		value = this._adjustValue( value + step * this._increment( this.counter ) );

		if ( !this.spinning || this._trigger( "spin", event, { value: value } ) !== false ) {
			this._value( value );
			this.counter++;
		}
	},

	_increment: function( i ) {
		var incremental = this.options.incremental;

		if ( incremental ) {
			return $.isFunction( incremental ) ?
				incremental( i ) :
				Math.floor( i * i * i / 50000 - i * i / 500 + 17 * i / 200 + 1 );
		}

		return 1;
	},

	_precision: function() {
		var precision = this._precisionOf( this.options.step );
		if ( this.options.min !== null ) {
			precision = Math.max( precision, this._precisionOf( this.options.min ) );
		}
		return precision;
	},

	_precisionOf: function( num ) {
		var str = num.toString(),
			decimal = str.indexOf( "." );
		return decimal === -1 ? 0 : str.length - decimal - 1;
	},

	_adjustValue: function( value ) {
		var base, aboveMin,
			options = this.options;

		// Make sure we're at a valid step // - find out where we are relative to the base (min or 0) base=options.min!==null ? options.min:0;aboveMin=value - base;// - round to the nearest step aboveMin=Math.round(aboveMin / options.step) * options.step;// - rounding is based on 0,so adjust back to our base value=base+aboveMin;// Fix precision from bad JS floating point math value=parseFloat(value.toFixed(this._precision()));// Clamp the value if (options.max!==null && value>options.max){return options.max}if (options.min!==null && value < options.min){return options.min},_stop:function(event){if (!this.spinning){return}if (key==="max" || key==="min" || key==="step"){if (typeof value==="string"){value=this._parse(value)}if (key==="icons"){:first=this.buttons.first().find(".ui-icon");:this._removeClass(first,null,this.options.icons.up);:this._addClass(first,null,value.up);:last=this.buttons.last().find(".ui-icon");:this._removeClass(last,null,this.options.icons.down);:this._addClass(last,null,value.down)},_setOptionDisabled:function(value){:this._super(value);:this._toggleClass(this.uiSpinner,null,"ui-state-disabled",!!value);:this.element.prop("disabled",!!value);this.buttons.button(value ? "disable":"enable")},_setOptions:spinnerModifer(function(options){this._super(options)}),_parse:function(val){if (typeof val==="string" && val!==""){val=window.Globalize && this.options.numberFormat ? Globalize.parseFloat(val,10,this.options.culture):+val},_format:function(value){if (value===""){return ""},_refresh:function(){this.element.attr({"aria-valuemin":this.options.min,"aria-valuemax":this.options.max,// TODO:what should we do with values that can't be parsed?
			"aria-valuenow": this._parse( this.element.val() )
		} );
	},

	isValid: function() {
		var value = this.value();

		// Null is invalid
		if ( value === null ) {
			return false;
		}

		// If value gets adjusted, it's invalid return value===this._adjustValue(value)},// Update the value without triggering change _value:function(value,allowAny){:var parsed;:if (value!==""){parsed=this._parse(value);:if (parsed!==null){if (!allowAny){parsed=this._adjustValue(parsed)},_destroy:function(){:this.element .prop("disabled",false) .removeAttr("autocomplete role aria-valuemin aria-valuemax aria-valuenow");:this.uiSpinner.replaceWith(this.element)},stepUp:spinnerModifer(function(steps){this._stepUp(steps)}),_stepUp:function(steps){:if (this._start()){this._spin((steps || 1) * this.options.step);:this._stop()},stepDown:spinnerModifer(function(steps){this._stepDown(steps)}),_stepDown:function(steps){:if (this._start()){this._spin((steps || 1) * -this.options.step);:this._stop()},pageUp:spinnerModifer(function(pages){this._stepUp((pages || 1) * this.options.page)}),pageDown:spinnerModifer(function(pages){this._stepDown((pages || 1) * this.options.page)}),value:function(newVal){if (!arguments.length){return this._parse(this.element.val())});// DEPRECATED // TODO:switch return back to widget declaration at top of file when this is removed if ($.uiBackCompat!==false){// Backcompat for spinner html extension points $.widget("ui.spinner",$.ui.spinner,{_enhance:function(){this.uiSpinner=this.element .attr("autocomplete","off") .wrap(this._uiSpinnerHtml()) .parent() // Add buttons .append(this._buttonHtml())},_uiSpinnerHtml:function(){return "<span>"},_buttonHtml:function(){return "<a></a><a></a>"}var widgetsSpinner=$.ui.spinner;/*!
 * jQuery UI Tabs 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */,//>>label:Tabs //>>group:Widgets //>>description:Transforms a set of container elements into a tab structure. //>>docs:http://api.jqueryui.com/tabs/ //>>demos:http://jqueryui.com/tabs/ //>>css.structure:../../themes/base/core.css //>>css.structure:../../themes/base/tabs.css //>>css.theme:../../themes/base/theme.css $.widget("ui.tabs"{version:"1.12.1",delay:300,options:{active:null,classes:{"ui-tabs":"ui-corner-all","ui-tabs-nav":"ui-corner-all","ui-tabs-panel":"ui-corner-bottom","ui-tabs-tab":"ui-corner-top"},_isLocal:(function(){:var rhash=/#.*$/;:return function(anchor){var anchorUrl,locationUrl;:anchorUrl=anchor.href.replace(rhash,"");:locationUrl=location.href.replace(rhash,"");// Decoding may throw an error if the URL isn't UTF-8 (#9518)
			try {
				anchorUrl = decodeURIComponent( anchorUrl );
			}
			try {
				locationUrl = decodeURIComponent( locationUrl );
			}

			return anchor.hash.length > 1 && anchorUrl === locationUrl;
		};
	} )(),

	_create: function() {
		var that = this,
			options = this.options;

		this.running = false;

		this._addClass( "ui-tabs", "ui-widget ui-widget-content" );
		this._toggleClass( "ui-tabs-collapsible", null, options.collapsible );

		this._processTabs();
		options.active = this._initialActive();

		// Take disabling tabs via class attribute from HTML
		// into account and update option properly.
		if ( $.isArray( options.disabled ) ) {
			options.disabled = $.unique( options.disabled.concat(
				$.map( this.tabs.filter( ".ui-state-disabled" ), function( li ) {
					return that.tabs.index( li );
				} )
			) ).sort();
		}

		// Check for length avoids error when initializing empty list
		if ( this.options.active !== false && this.anchors.length ) {
			this.active = this._findActive( options.active );
		} else {
			this.active = $();
		}

		this._refresh();

		if ( this.active.length ) {
			this.load( options.active );
		}
	},

	_initialActive: function() {
		var active = this.options.active,
			collapsible = this.options.collapsible,
			locationHash = location.hash.substring( 1 );

		if ( active === null ) {

			// check the fragment identifier in the URL
			if ( locationHash ) {
				this.tabs.each( function( i, tab ) {
					if ( $( tab ).attr( "aria-controls" ) === locationHash ) {
						active = i;
						return false;
					}
				} );
			}

			// Check for a tab marked active via a class
			if ( active === null ) {
				active = this.tabs.index( this.tabs.filter( ".ui-tabs-active" ) );
			}

			// No active tab, set to false
			if ( active === null || active === -1 ) {
				active = this.tabs.length ? 0 : false;
			}
		}

		// Handle numbers: negative, out of range
		if ( active !== false ) {
			active = this.tabs.index( this.tabs.eq( active ) );
			if ( active === -1 ) {
				active = collapsible ? false : 0;
			}
		}

		// Don't allow collapsible:false and active:false if (!collapsible && active===false && this.anchors.length){active=0},_getCreateEventData:function(){return{tab:this.active,panel:!this.active.length ? $():this._getPanelForTab(this.active)},_tabKeydown:function(event){:var focusedTab=$($.ui.safeActiveElement(this.document[ 0 ])).closest("li"),selectedIndex=this.tabs.index(focusedTab),goingForward=true;:if (this._handlePageNav(event)){return}switch (event.keyCode){case $.ui.keyCode.RIGHT:case $.ui.keyCode.DOWN:selectedIndex++;case $.ui.keyCode.UP:case $.ui.keyCode.LEFT:goingForward=false;case $.ui.keyCode.END:selectedIndex=this.anchors.length - 1;case $.ui.keyCode.HOME:selectedIndex=0;case $.ui.keyCode.SPACE:// Activate only,no collapsing event.preventDefault();case $.ui.keyCode.ENTER:// Toggle (cancel delayed activation,allow collapsing) event.preventDefault();// Determine if we should collapse or activate this._activate(selectedIndex===this.options.active ? false:selectedIndex);:return;default:return}// Focus the appropriate tab,based on which key was pressed event.preventDefault();clearTimeout(this.activating);selectedIndex=this._focusNextTab(selectedIndex,goingForward);// Navigating with control/command key will prevent automatic activation if (!event.ctrlKey &&!event.metaKey){:// Update aria-selected immediately so that AT think the tab is already selected. // Otherwise AT may confuse the user by stating that they need to activate the tab,// but the tab will already be activated by the time the announcement finishes. focusedTab.attr("aria-selected","false");:this.tabs.eq(selectedIndex).attr("aria-selected","true");:this.activating=this._delay(function(){this.option("active",selectedIndex)},_panelKeydown:function(event){if (this._handlePageNav(event)){return}// Ctrl+up moves focus to the current tab if (event.ctrlKey && event.keyCode===$.ui.keyCode.UP){:event.preventDefault();:this.active.trigger("focus")},// Alt+page up/down moves focus to the previous/next tab (and activates) _handlePageNav:function(event){:if (event.altKey && event.keyCode===$.ui.keyCode.PAGE_UP){this._activate(this._focusNextTab(this.options.active - 1,false));:return true}if (event.altKey && event.keyCode===$.ui.keyCode.PAGE_DOWN){:this._activate(this._focusNextTab(this.options.active+1,true));:return true},_findNextTab:function(index,goingForward){:var lastTabIndex=this.tabs.length - 1;:function constrain(){if (index>lastTabIndex){index=0}if (index < 0){index=lastTabIndex}this.options.disabled)!==-1),while ($.inArray(constrain(){index=goingForward ? index+1:index - 1},_focusNextTab:function(index,goingForward){:index=this._findNextTab(index,goingForward);:this.tabs.eq(index).trigger("focus");:return index},_setOption:function(key,value){:if (key==="active"){// _activate() will handle invalid values and update this.options this._activate(value);:return}this._super(key,value);if (key==="collapsible"){// Setting collapsible:false while collapsed;:open first panel if (!value && this.options.active===false){this._activate(0)}if (key==="event"){this._setupEvents(value)}if (key==="heightStyle"){this._setupHeightStyle(value)},_sanitizeSelector:function(hash){return hash ? hash.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&" ) : "";
	},

	refresh: function() {
		var options = this.options,
			lis = this.tablist.children( ":has(a[href])" );

		// Get disabled tabs from class attribute from HTML
		// this will get converted to a boolean if needed in _refresh()
		options.disabled = $.map( lis.filter( ".ui-state-disabled" ), function( tab ) {
			return lis.index( tab );
		} );

		this._processTabs();

		// Was collapsed or no tabs
		if ( options.active === false || !this.anchors.length ) {
			options.active = false;
			this.active = $();

		// was active, but active tab is gone
		} else if ( this.active.length && !$.contains( this.tablist[ 0 ], this.active[ 0 ] ) ) {

			// all remaining tabs are disabled
			if ( this.tabs.length === options.disabled.length ) {
				options.active = false;
				this.active = $();

			// activate previous tab
			} else {
				this._activate( this._findNextTab( Math.max( 0, options.active - 1 ), false ) );
			}

		// was active, active tab still exists
		} else {

			// make sure active index is correct
			options.active = this.tabs.index( this.active );
		}

		this._refresh();
	},

	_refresh: function() {
		this._setOptionDisabled( this.options.disabled );
		this._setupEvents( this.options.event );
		this._setupHeightStyle( this.options.heightStyle );

		this.tabs.not( this.active ).attr( {
			"aria-selected": "false",
			"aria-expanded": "false",
			tabIndex: -1
		} );
		this.panels.not( this._getPanelForTab( this.active ) )
			.hide()
			.attr( {
				"aria-hidden": "true"
			} );

		// Make sure one tab is in the tab order
		if ( !this.active.length ) {
			this.tabs.eq( 0 ).attr( "tabIndex", 0 );
		} else {
			this.active
				.attr( {
					"aria-selected": "true",
					"aria-expanded": "true",
					tabIndex: 0
				} );
			this._addClass( this.active, "ui-tabs-active", "ui-state-active" );
			this._getPanelForTab( this.active )
				.show()
				.attr( {
					"aria-hidden": "false"
				} );
		}
	},

	_processTabs: function() {
		var that = this,
			prevTabs = this.tabs,
			prevAnchors = this.anchors,
			prevPanels = this.panels;

		this.tablist = this._getList().attr( "role", "tablist" );
		this._addClass( this.tablist, "ui-tabs-nav",
			"ui-helper-reset ui-helper-clearfix ui-widget-header" );

		// Prevent users from focusing disabled tabs via click
		this.tablist
			.on( "mousedown" + this.eventNamespace, "> li", function( event ) {
				if ( $( this ).is( ".ui-state-disabled" ) ) {
					event.preventDefault();
				}
			} )

			// Support: IE <9
			// Preventing the default action in mousedown doesn't prevent IE
			// from focusing the element, so if the anchor gets focused, blur.
			// We don't have to worry about focusing the previously focused
			// element since clicking on a non-focusable element should focus
			// the body anyway.
			.on( "focus" + this.eventNamespace, ".ui-tabs-anchor", function() {
				if ( $( this ).closest( "li" ).is( ".ui-state-disabled" ) ) {
					this.blur();
				}
			} );

		this.tabs = this.tablist.find( "> li:has(a[href])" )
			.attr( {
				role: "tab",
				tabIndex: -1
			} );
		this._addClass( this.tabs, "ui-tabs-tab", "ui-state-default" );

		this.anchors = this.tabs.map( function() {
			return $( "a", this )[ 0 ];
		} )
			.attr( {
				role: "presentation",
				tabIndex: -1
			} );
		this._addClass( this.anchors, "ui-tabs-anchor" );

		this.panels = $();

		this.anchors.each( function( i, anchor ) {
			var selector, panel, panelId,
				anchorId = $( anchor ).uniqueId().attr( "id" ),
				tab = $( anchor ).closest( "li" ),
				originalAriaControls = tab.attr( "aria-controls" );

			// Inline tab
			if ( that._isLocal( anchor ) ) {
				selector = anchor.hash;
				panelId = selector.substring( 1 );
				panel = that.element.find( that._sanitizeSelector( selector ) );

			// remote tab
			} else { ).uniqueId()[ 0 ].id;
				selector = "#" + panelId;
				panel = that.element.find( selector );
				if ( !panel.length ) {
					panel = that._createPanel( panelId );
					panel.insertAfter( that.panels[ i - 1 ] || that.tablist );
				}
				panel.attr( "aria-live", "polite" );
			}

			if ( panel.length ) {
				that.panels = that.panels.add( panel );
			}
			if ( originalAriaControls ) {
				tab.data( "ui-tabs-aria-controls", originalAriaControls );
			}
			tab.attr( {
				"aria-controls": panelId,
				"aria-labelledby": anchorId
			} );
			panel.attr( "aria-labelledby", anchorId );
		} );

		this.panels.attr( "role", "tabpanel" );
		this._addClass( this.panels, "ui-tabs-panel", "ui-widget-content" );

		// Avoid memory leaks (#10056)
		if ( prevTabs ) {
			this._off( prevTabs.not( this.tabs ) );
			this._off( prevAnchors.not( this.anchors ) );
			this._off( prevPanels.not( this.panels ) );
		}
	},

	// Allow overriding how to find the list for rare usage scenarios (#7715)
	_getList: function() {
		return this.tablist || this.element.find( "ol,ul" ).eq( 0 );
	},

	_createPanel: function( id ) {
		return $( "<div>" )
			.attr( "id", id )
			.data( "ui-tabs-destroy", true );
	},

	_setOptionDisabled: function( disabled ) {
		var currentItem, li, i;

		if ( $.isArray( disabled ) ) {
			if ( !disabled.length ) {
				disabled = false;
			} else if ( disabled.length === this.anchors.length ) {
				disabled = true;
			}
		}

		// Disable tabs
		for ( i = 0; ( li = this.tabs[ i ] ); i++ ) {
			currentItem = $( li );
			if ( disabled === true || $.inArray( i, disabled ) !== -1 ) {
				currentItem.attr( "aria-disabled", "true" );
				this._addClass( currentItem, null, "ui-state-disabled" );
			} else {
				currentItem.removeAttr( "aria-disabled" );
				this._removeClass( currentItem, null, "ui-state-disabled" );
			}
		}

		this.options.disabled = disabled;

		this._toggleClass( this.widget(), this.widgetFullName + "-disabled", null,
			disabled === true );
	},

	_setupEvents: function( event ) {;
		if ( event ) {
			$.each( event.split( " " ), function( index, eventName ) {
				events[ eventName ] = "_eventHandler";
			} );
		}

		this._off( this.anchors.add( this.tabs ).add( this.panels ) );

		// Always prevent the default action, even when disabled
		this._on( true, this.anchors, {
			click: function( event ) {
				event.preventDefault();
			}
		} );
		this._on( this.anchors, events );
		this._on( this.tabs, { keydown: "_tabKeydown" } );
		this._on( this.panels, { keydown: "_panelKeydown" } );

		this._focusable( this.tabs );
		this._hoverable( this.tabs );
	},

	_setupHeightStyle: function( heightStyle ) {
		var maxHeight,
			parent = this.element.parent();

		if ( heightStyle === "fill" ) {
			maxHeight = parent.height();
			maxHeight -= this.element.outerHeight() - this.element.height();

			this.element.siblings( ":visible" ).each( function() {
				var elem = $( this ),
					position = elem.css( "position" );

				if ( position === "absolute" || position === "fixed" ) {
					return;
				}
				maxHeight -= elem.outerHeight( true );
			} );

			this.element.children().not( this.panels ).each( function() {
				maxHeight -= $( this ).outerHeight( true );
			} );

			this.panels.each( function() {
				$( this ).height( Math.max( 0, maxHeight -
					$( this ).innerHeight() + $( this ).height() ) );
			} )
				.css( "overflow", "auto" );
		} else if ( heightStyle === "auto" ) {
			maxHeight = 0;
			this.panels.each( function() {
				maxHeight = Math.max( maxHeight, $( this ).height( "" ).height() );
			} ).height( maxHeight );
		}
	},

	_eventHandler: function( event ) {
		var options = this.options,
			active = this.active,
			anchor = $( event.currentTarget ),
			tab = anchor.closest( "li" ),
			clickedIsActive = tab[ 0 ] === active[ 0 ],
			collapsing = clickedIsActive && options.collapsible,
			toShow = collapsing ? $() : this._getPanelForTab( tab ),
			toHide = !active.length ? $() : this._getPanelForTab( active ),
			eventData = {
				oldTab: active,
				oldPanel: toHide,
				newTab: collapsing ? $() : tab,
				newPanel: toShow
			};

		event.preventDefault();

		if ( tab.hasClass( "ui-state-disabled" ) ||

				// tab is already loading
				tab.hasClass( "ui-tabs-loading" ) ||

				// can't switch durning an animation
				this.running ||

				// click on active header, but not collapsible
				( clickedIsActive && !options.collapsible ) ||

				// allow canceling activation
				( this._trigger( "beforeActivate", event, eventData ) === false ) ) {
			return;
		}

		options.active = collapsing ? false : this.tabs.index( tab );

		this.active = clickedIsActive ? $() : tab;
		if ( this.xhr ) {
			this.xhr.abort();
		}

		if ( !toHide.length && !toShow.length ) {
			$.error( "jQuery UI Tabs:Mismatching fragment identifier." );
		}

		if ( toShow.length ) {
			this.load( this.tabs.index( tab ), event );
		}
		this._toggle( event, eventData );
	},

	// Handles show/hide for selecting tabs
	_toggle: function( event, eventData ) {
		var that = this,
			toShow = eventData.newPanel,
			toHide = eventData.oldPanel;

		this.running = true;

		function complete() {
			that.running = false;
			that._trigger( "activate", event, eventData );
		}

		function show() {
			that._addClass( eventData.newTab.closest( "li" ), "ui-tabs-active", "ui-state-active" );

			if ( toShow.length && that.options.show ) {
				that._show( toShow, that.options.show, complete );
			} else {
				toShow.show();
				complete();
			}
		}

		// Start out by hiding, then showing, then completing
		if ( toHide.length && this.options.hide ) {
			this._hide( toHide, this.options.hide, function() {
				that._removeClass( eventData.oldTab.closest( "li" ),
					"ui-tabs-active", "ui-state-active" );
				show();
			} );
		} else {
			this._removeClass( eventData.oldTab.closest( "li" ),
				"ui-tabs-active", "ui-state-active" );
			toHide.hide();
			show();
		}

		toHide.attr( "aria-hidden", "true" );
		eventData.oldTab.attr( {
			"aria-selected": "false",
			"aria-expanded": "false"
		} );

		// If we're switching tabs, remove the old tab from the tab order.
		// If we're opening from collapsed state, remove the previous tab from the tab order.
		// If we're collapsing, then keep the collapsing tab in the tab order.
		if ( toShow.length && toHide.length ) {
			eventData.oldTab.attr( "tabIndex", -1 );
		} else if ( toShow.length ) {
			this.tabs.filter( function() {
				return $( this ).attr( "tabIndex" ) === 0;
			} )
				.attr( "tabIndex", -1 );
		}

		toShow.attr( "aria-hidden", "false" );
		eventData.newTab.attr( {
			"aria-selected": "true",
			"aria-expanded": "true",
			tabIndex: 0
		} );
	},

	_activate: function( index ) {
		var anchor,
			active = this._findActive( index );

		// Trying to activate the already active panel
		if ( active[ 0 ] === this.active[ 0 ] ) {
			return;
		}

		// Trying to collapse, simulate a click on the current active header
		if ( !active.length ) {
			active = this.active;
		}

		anchor = active.find( ".ui-tabs-anchor" )[ 0 ];
		this._eventHandler( {
			target: anchor,
			currentTarget: anchor,
			preventDefault: $.noop
		} );
	},

	_findActive: function( index ) {
		return index === false ? $() : this.tabs.eq( index );
	},

	_getIndex: function( index ) {

		// meta-function to give users option to provide a href string instead of a numerical index.
		if ( typeof index === "string" ) {
			index = this.anchors.index( this.anchors.filter( "[href$='" +
				$.ui.escapeSelector( index ) + "']" ) );
		}

		return index;
	},

	_destroy: function() {
		if ( this.xhr ) {
			this.xhr.abort();
		}

		this.tablist
			.removeAttr( "role" )
			.off( this.eventNamespace );

		this.anchors
			.removeAttr( "role tabIndex" )
			.removeUniqueId();

		this.tabs.add( this.panels ).each( function() {
			if ( $.data( this, "ui-tabs-destroy" ) ) {
				$( this ).remove();
			} else {
				$( this ).removeAttr( "role tabIndex " +
					"aria-live aria-busy aria-selected aria-labelledby aria-hidden aria-expanded" );
			}
		} );

		this.tabs.each( function() {
			var li = $( this ),
				prev = li.data( "ui-tabs-aria-controls" );
			if ( prev ) {
				li
					.attr( "aria-controls", prev )
					.removeData( "ui-tabs-aria-controls" );
			} else {
				li.removeAttr( "aria-controls" );
			}
		} );

		this.panels.show();

		if ( this.options.heightStyle !== "content" ) {
			this.panels.css( "height", "" );
		}
	},

	enable: function( index ) {
		var disabled = this.options.disabled;
		if ( disabled === false ) {
			return;
		}

		if ( index === undefined ) {
			disabled = false;
		} else {
			index = this._getIndex( index );
			if ( $.isArray( disabled ) ) {
				disabled = $.map( disabled, function( num ) {
					return num !== index ? num : null;
				} );
			} else {
				disabled = $.map( this.tabs, function( li, num ) {
					return num !== index ? num : null;
				} );
			}
		}
		this._setOptionDisabled( disabled );
	},

	disable: function( index ) {
		var disabled = this.options.disabled;
		if ( disabled === true ) {
			return;
		}

		if ( index === undefined ) {
			disabled = true;
		} else {
			index = this._getIndex( index );
			if ( $.inArray( index, disabled ) !== -1 ) {
				return;
			}
			if ( $.isArray( disabled ) ) {
				disabled = $.merge( [ index ], disabled ).sort();
			} else {
				disabled = [ index ];
			}
		}
		this._setOptionDisabled( disabled );
	},

	load: function( index, event ) {
		index = this._getIndex( index );
		var that = this,
			tab = this.tabs.eq( index ),
			anchor = tab.find( ".ui-tabs-anchor" ),
			panel = this._getPanelForTab( tab ),
			eventData = {
				tab: tab,
				panel: panel
			},
			complete = function( jqXHR, status ) {
				if ( status === "abort" ) {
					that.panels.stop( false, true );
				}

				that._removeClass( tab, "ui-tabs-loading" );
				panel.removeAttr( "aria-busy" );

				if ( jqXHR === that.xhr ) {
					delete that.xhr;
				}
			};

		// Not remote
		if ( this._isLocal( anchor[ 0 ] ) ) {
			return;
		}

		this.xhr = $.ajax( this._ajaxSettings( anchor, event, eventData ) );

		// Support: jQuery <1.8
		// jQuery <1.8 returns false if the request is canceled in beforeSend,
		// but as of 1.8, $.ajax() always returns a jqXHR object.
		if ( this.xhr && this.xhr.statusText !== "canceled" ) {
			this._addClass( tab, "ui-tabs-loading" );
			panel.attr( "aria-busy", "true" );

			this.xhr
				.done( function( response, status, jqXHR ) {

					// support: jQuery <1.8
					// http://bugs.jquery.com/ticket/11778
					setTimeout( function() {
						panel.html( response );
						that._trigger( "load", event, eventData );

						complete( jqXHR, status );
					}, 1 );
				} )
				.fail( function( jqXHR, status ) {

					// support: jQuery <1.8
					// http://bugs.jquery.com/ticket/11778
					setTimeout( function() {
						complete( jqXHR, status );
					}, 1 );
				} );
		}
	},

	_ajaxSettings: function( anchor, event, eventData ) {
		var that = this;
		return {

			// Support: IE <11 only
			// Strip any hash that exists to prevent errors with the Ajax request
			url: anchor.attr( "href" ).replace( /#.*$/, "" ),
			beforeSend: function( jqXHR, settings ) {
				return that._trigger( "beforeLoad", event,
					$.extend( { jqXHR: jqXHR, ajaxSettings: settings }, eventData ) );
			}
		};
	},

	_getPanelForTab: function( tab ) {
		var id = $( tab ).attr( "aria-controls" );
		return this.element.find( this._sanitizeSelector( "#" + id ) );
	}
} );

// DEPRECATED
// TODO: Switch return back to widget declaration at top of file when this is removed
if ( $.uiBackCompat !== false ) {

	// Backcompat for ui-tab class (now ui-tabs-tab)
	$.widget( "ui.tabs", $.ui.tabs, {
		_processTabs: function() {
			this._superApply( arguments );
			this._addClass( this.tabs, "ui-tab" );
		}
	} );
}

var widgetsTabs = $.ui.tabs;


/*!
 * jQuery UI Tooltip 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
//>>label: Tooltip
//>>group: Widgets
//>>description: Shows additional information for any element on hover or focus.
//>>docs: http://api.jqueryui.com/tooltip/
//>>demos: http://jqueryui.com/tooltip/
//>>css.structure: ../../themes/base/core.css
//>>css.structure: ../../themes/base/tooltip.css
//>>css.theme: ../../themes/base/theme.css



$.widget( "ui.tooltip", {
	version: "1.12.1",
	options: {
		classes: {
			"ui-tooltip": "ui-corner-all ui-widget-shadow"
		},
		content: function() {

			// support: IE<9, Opera in jQuery <1.7
			// .text() can't accept undefined, so coerce to a string
			var title = $( this ).attr( "title" ) || "";

			// Escape title, since we're going from an attribute to raw HTML
			return $( "<a>" ).text( title ).html();
		},
		hide: true,

		// Disabled elements have inconsistent behavior across browsers (#8661)
		items: "[title]:not([disabled])",
		position: {
			my: "left top+15",
			at: "left bottom",
			collision: "flipfit flip"
		},
		show: true,
		track: false,

		// Callbacks
		close: null,
		open: null
	},

	_addDescribedBy: function( elem, id ) {
		var describedby = ( elem.attr( "aria-describedby" ) || "" ).split( /\s+/ );
		describedby.push( id );
		elem
			.data( "ui-tooltip-id", id )
			.attr( "aria-describedby", $.trim( describedby.join( " " ) ) );
	},

	_removeDescribedBy: function( elem ) {
		var id = elem.data( "ui-tooltip-id" ),
			describedby = ( elem.attr( "aria-describedby" ) || "" ).split( /\s+/ ),
			index = $.inArray( id, describedby );

		if ( index !== -1 ) {
			describedby.splice( index, 1 );
		}

		elem.removeData( "ui-tooltip-id" );
		describedby = $.trim( describedby.join( " " ) );
		if ( describedby ) {
			elem.attr( "aria-describedby", describedby );
		} else {
			elem.removeAttr( "aria-describedby" );
		}
	},

	_create: function() {
		this._on( {
			mouseover: "open",
			focusin: "open"
		};

		// Append the aria-live region so tooltips announce correctly
		this.liveRegion = $( "<div>" )
			.attr( {
				role: "log",
				"aria-live": "assertive",
				"aria-relevant": "additions"
			} )
			.appendTo( this.document[ 0 ].body );
		this._addClass( this.liveRegion, null, "ui-helper-hidden-accessible" );

		this.disabledTitles = $( [] );
	},

	_setOption: function( key, value ) {
		var that = this;

		this._super( key, value );

		if ( key === "content" ) {
			$.each( this.tooltips, function( id, tooltipData ) {
				that._updateContent( tooltipData.element );
			} );
		}
	},

	_setOptionDisabled: function( value ) {
		this[ value ? "_disable" : "_enable" ]();
	},

	_disable: function() {
		var that = this;

		// Close open tooltips
		$.each( this.tooltips, function( id, tooltipData ) {
			var event = $.Event( "blur" );
			event.target = event.currentTarget = tooltipData.element[ 0 ];
			that.close( event, true );
		} );

		// Remove title attributes to prevent native tooltips
		this.disabledTitles = this.disabledTitles.add(
			this.element.find( this.options.items ).addBack()
				.filter( function() {
					var element = $( this );
					if ( element.is( "[title]" ) ) {
						return element
							.data( "ui-tooltip-title", element.attr( "title" ) )
							.removeAttr( "title" );
					}
				} )
		);
	},

	_enable: function() {

		// restore title attributes
		this.disabledTitles.each( function() {
			var element = $( this );
			if ( element.data( "ui-tooltip-title" ) ) {
				element.attr( "title", element.data( "ui-tooltip-title" ) );
			}
		} );
		this.disabledTitles = $( [] );
	},

	open: function( event ) {
		var that = this,
			target = $( event ? event.target : this.element )

				// we need closest here due to mouseover bubbling,
				// but always pointing at the same event target
				.closest( this.options.items );

		// No element to show a tooltip for or the tooltip is already open
		if ( !target.length || target.data( "ui-tooltip-id" ) ) {
			return;
		}

		if ( target.attr( "title" ) ) {
			target.data( "ui-tooltip-title", target.attr( "title" ) );
		}

		target.data( "ui-tooltip-open", true );

		// Kill parent tooltips, custom or native, for hover
		if ( event && event.type === "mouseover" ) {
			target.parents().each( function() {
				var parent = $( this ),
					blurEvent;
				if ( parent.data( "ui-tooltip-open" ) ) {
					blurEvent = $.Event( "blur" );
					blurEvent.target = blurEvent.currentTarget = this;
					that.close( blurEvent, true );
				}
				if ( parent.attr( "title" ) ) {
					parent.uniqueId();
					that.parents[ this.id ] = {
						element: this,
						title: parent.attr( "title" )
					};
					parent.attr( "title", "" );
				}
			} );
		}

		this._registerCloseHandlers( event, target );
		this._updateContent( target, event );
	},

	_updateContent: function( target, event ) {
		var content,
			contentOption = this.options.content,
			that = this,
			eventType = event ? event.type : null;

		if ( typeof contentOption === "string" || contentOption.nodeType ||
				contentOption.jquery ) {
			return this._open( event, target, contentOption );
		}

		content = contentOption.call( target[ 0 ], function( response ) {

			// IE may instantly serve a cached response for ajax requests
			// delay this call to _open so the other call to _open runs first
			that._delay( function() {

				// Ignore async response if tooltip was closed already
				if ( !target.data( "ui-tooltip-open" ) ) {
					return;
				}

				// JQuery creates a special event for focusin when it doesn't
				// exist natively. To improve performance, the native event
				// object is reused and the type is changed. Therefore, we can't
				// rely on the type being correct after the event finished
				// bubbling, so we set it back to the previous value. (#8740)
				if ( event ) {
					event.type = eventType;
				}
				this._open( event, target, response );
			} );
		} );
		if ( content ) {
			this._open( event, target, content );
		}
	},

	_open: function( event, target, content ) {, this.options.position );

		if ( !content ) {
			return;
		}

		// Content can be updated multiple times. If the tooltip already
		// exists, then just update the content and bail.
		tooltipData = this._find( target );
		if ( tooltipData ) {
			tooltipData.tooltip.find( ".ui-tooltip-content" ).html( content );
			return;
		}

		// If we have a title, clear it to prevent the native tooltip
		// we have to check first to avoid defining a title if none exists
		// (we don't want to cause an element to start matching [title])
		//
		// We use removeAttr only for key events, to allow IE to export the correct
		// accessible attributes. For mouse events, set to empty string to avoid
		// native tooltip showing up (happens only when removing inside mouseover).
		if ( target.is( "[title]" ) ) {
			if ( event && event.type === "mouseover" ) {
				target.attr( "title", "" );
			} else {
				target.removeAttr( "title" );
			}
		}

		tooltipData = this._tooltip( target );
		tooltip = tooltipData.tooltip;
		this._addDescribedBy( target, tooltip.attr( "id" ) );
		tooltip.find( ".ui-tooltip-content" ).html( content );

		// Support: Voiceover on OS X, JAWS on IE <= 9
		// JAWS announces deletions even when aria-relevant="additions"
		// Voiceover will sometimes re-read the entire log region's contents from the beginning
		this.liveRegion.children().hide();
		a11yContent = $( "<div>" ).html( tooltip.find( ".ui-tooltip-content" ).html() );
		a11yContent.removeAttr( "name" ).find( "[name]" ).removeAttr( "name" );
		a11yContent.removeAttr( "id" ).find( "[id]" ).removeAttr( "id" );
		a11yContent.appendTo( this.liveRegion );

		function position( event ) {
			positionOption.of = event;
			if ( tooltip.is( ":hidden" ) ) {
				return;
			}
			tooltip.position( positionOption );
		}
		if ( this.options.track && event && /^mouse/.test( event.type ) ) {
			this._on( this.document, {
				mousemove: position
			} );

			// trigger once to override element-relative positioning
			position( event );
		} else {
			tooltip.position( $.extend( {
				of: target
			}, this.options.position ) );
		}

		tooltip.hide();

		this._show( tooltip, this.options.show );

		// Handle tracking tooltips that are shown with a delay (#8644). As soon
		// as the tooltip is visible, position the tooltip using the most recent
		// event.
		// Adds the check to add the timers only when both delay and track options are set (#14682)
		if ( this.options.track && this.options.show && this.options.show.delay ) {
			delayedShow = this.delayedShow = setInterval( function() {
				if ( tooltip.is( ":visible" ) ) {
					position( positionOption.of );
					clearInterval( delayedShow );
				}
			}, $.fx.interval );
		}

		this._trigger( "open", event, { tooltip: tooltip } );
	},

	_registerCloseHandlers: function( event, target ) {
		var events = {
			keyup: function( event ) {
				if ( event.keyCode === $.ui.keyCode.ESCAPE ) {
					var fakeEvent = $.Event( event );
					fakeEvent.currentTarget = target[ 0 ];
					this.close( fakeEvent, true );
				}
			}
		};

		// Only bind remove handler for delegated targets. Non-delegated
		// tooltips will handle this in destroy.
		if ( target[ 0 ] !== this.element[ 0 ] ) {
			events.remove = function() {
				this._removeTooltip( this._find( target ).tooltip );
			};
		}

		if ( !event || event.type === "mouseover" ) {
			events.mouseleave = "close";
		}
		if ( !event || event.type === "focusin" ) {
			events.focusout = "close";
		}
		this._on( true, target, events );
	},

	close: function( event ) {
		var tooltip,
			that = this,
			target = $( event ? event.currentTarget : this.element ),
			tooltipData = this._find( target );

		// The tooltip may already be closed
		if ( !tooltipData ) {

			// We set ui-tooltip-open immediately upon open (in open()), but only set the
			// additional data once there's actually content to show (in _open()). So even if the
			// tooltip doesn't have full data, we always remove ui-tooltip-open in case we're in
			// the period between open() and _open().
			target.removeData( "ui-tooltip-open" );
			return;
		}

		tooltip = tooltipData.tooltip;

		// Disabling closes the tooltip, so we need to track when we're closing
		// to avoid an infinite loop in case the tooltip becomes disabled on close
		if ( tooltipData.closing ) {
			return;
		}

		// Clear the interval for delayed tracking tooltips
		clearInterval( this.delayedShow );

		// Only set title if we had one before (see comment in _open())
		// If the title attribute has changed since open(), don't restore
		if ( target.data( "ui-tooltip-title" ) && !target.attr( "title" ) ) {
			target.attr( "title", target.data( "ui-tooltip-title" ) );
		}

		this._removeDescribedBy( target );

		tooltipData.hiding = true;
		tooltip.stop( true );
		this._hide( tooltip, this.options.hide, function() {
			that._removeTooltip( $( this ) );
		} );

		target.removeData( "ui-tooltip-open" );
		this._off( target, "mouseleave focusout keyup" );

		// Remove 'remove' binding only on delegated targets
		if ( target[ 0 ] !== this.element[ 0 ] ) {
			this._off( target, "remove" );
		}
		this._off( this.document, "mousemove" );

		if ( event && event.type === "mouseleave" ) {
			$.each( this.parents, function( id, parent ) {
				$( parent.element ).attr( "title", parent.title );
				delete that.parents[ id ];
			} );
		}

		tooltipData.closing = true;
		this._trigger( "close", event, { tooltip: tooltip } );
		if ( !tooltipData.hiding ) {
			tooltipData.closing = false;
		}
	},

	_tooltip: function( element ) {
		var tooltip = $( "<div>" ).attr( "role", "tooltip" ),
			content = $( "<div>" ).appendTo( tooltip ),
			id = tooltip.uniqueId().attr( "id" );

		this._addClass( content, "ui-tooltip-content" );
		this._addClass( tooltip, "ui-tooltip", "ui-widget ui-widget-content" );

		tooltip.appendTo( this._appendTo( element ) );

		return this.tooltips[ id ] = {
			element: element,
			tooltip: tooltip
		};
	},

	_find: function( target ) {
		var id = target.data( "ui-tooltip-id" );
		return id ? this.tooltips[ id ] : null;
	},

	_removeTooltip: function( tooltip ) {
		tooltip.remove();
		delete this.tooltips[ tooltip.attr( "id" ) ];
	},

	_appendTo: function( target ) {
		var element = target.closest( ".ui-front,dialog" );

		if ( !element.length ) {
			element = this.document[ 0 ].body;
		}

		return element;
	},

	_destroy: function() {
		var that = this;

		// Close open tooltips
		$.each( this.tooltips, function( id, tooltipData ) {

			// Delegate to close method to handle common cleanup
			var event = $.Event( "blur" ),
				element = tooltipData.element;
			event.target = event.currentTarget = element[ 0 ];
			that.close( event, true );

			// Remove immediately; destroying an open tooltip doesn't use the
			// hide animation
			$( "#" + id ).remove();

			// Restore the title
			if ( element.data( "ui-tooltip-title" ) ) {

				// If the title attribute has changed since open(), don't restore
				if ( !element.attr( "title" ) ) {
					element.attr( "title", element.data( "ui-tooltip-title" ) );
				}
				element.removeData( "ui-tooltip-title" );
			}
		} );
		this.liveRegion.remove();
	}
} );

// DEPRECATED
// TODO: Switch return back to widget declaration at top of file when this is removed
if ( $.uiBackCompat !== false ) {

	// Backcompat for tooltipClass option
	$.widget( "ui.tooltip",$.ui.tooltip,{options:{tooltipClass:null},_tooltip:function(){:var tooltipData=this._superApply(arguments);:if (this.options.tooltipClass){tooltipData.tooltip.addClass(this.options.tooltipClass)}));