"use strict";

/* jshint ignore:start */



/* jshint ignore:end */

define('peepchat/app', ['exports', 'ember', 'peepchat/resolver', 'ember-load-initializers', 'peepchat/config/environment'], function (exports, _ember, _peepchatResolver, _emberLoadInitializers, _peepchatConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _peepchatConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _peepchatConfigEnvironment['default'].podModulePrefix,
    Resolver: _peepchatResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _peepchatConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
define('peepchat/auth/login/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    actions: {
      doLogin: function doLogin() {
        alert(123);
      }
    }
  });
});
define("peepchat/auth/login/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes", "wrong-type"]
        },
        "revision": "Ember@2.5.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 11,
            "column": 0
          }
        },
        "moduleName": "peepchat/auth/login/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "container");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "row");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col s12 m8 offset-m2");
        var el4 = dom.createTextNode("\n      hellowld\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0, 1, 1]), 1, 1);
        morphs[1] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        return morphs;
      },
      statements: [["inline", "login-card", [], ["onSubmit", ["subexpr", "route-action", ["doLogin"], [], ["loc", [null, [6, 19], [6, 43]]]]], ["loc", [null, [5, 6], [6, 45]]]], ["content", "outlet", ["loc", [null, [10, 0], [10, 10]]]]],
      locals: [],
      templates: []
    };
  })());
});
define('peepchat/auth/register/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define("peepchat/auth/register/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.5.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "peepchat/auth/register/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "outlet", ["loc", [null, [1, 0], [1, 10]]]]],
      locals: [],
      templates: []
    };
  })());
});
define('peepchat/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'peepchat/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _peepchatConfigEnvironment) {

  var name = _peepchatConfigEnvironment['default'].APP.name;
  var version = _peepchatConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});
define('peepchat/components/login-card/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({});
});
define("peepchat/components/login-card/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": {
            "name": "missing-wrapper",
            "problems": ["multiple-nodes"]
          },
          "revision": "Ember@2.5.1",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 17,
              "column": 0
            }
          },
          "moduleName": "peepchat/components/login-card/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "row");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "row");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 1, 1);
          morphs[1] = dom.createMorphAt(dom.childAt(fragment, [3]), 1, 1);
          return morphs;
        },
        statements: [["inline", "x-input", [], ["classNames", "col s12", "type", "email", "label", "Username"], ["loc", [null, [6, 4], [9, 24]]]], ["inline", "x-input", [], ["classNames", "col s12", "type", "password", "label", "Password"], ["loc", [null, [12, 4], [15, 24]]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.5.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 19,
            "column": 0
          }
        },
        "moduleName": "peepchat/components/login-card/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 1, 1, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["block", "x-card", [], ["title", "Login To Peepchat", "onSubmit", ["subexpr", "@mut", [["get", "attrs.onSubmit", ["loc", [null, [3, 11], [3, 25]]]]], [], []], "buttonText", "Login"], 0, null, ["loc", [null, [1, 0], [17, 11]]]], ["content", "yield", ["loc", [null, [18, 0], [18, 9]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define('peepchat/components/register-card/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({});
});
define("peepchat/components/register-card/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.5.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "peepchat/components/register-card/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "yield", ["loc", [null, [1, 0], [1, 9]]]]],
      locals: [],
      templates: []
    };
  })());
});
define('peepchat/components/x-card/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    classNames: ['card']
  });
});
define("peepchat/components/x-card/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.5.1",
          "loc": {
            "source": null,
            "start": {
              "line": 2,
              "column": 2
            },
            "end": {
              "line": 4,
              "column": 2
            }
          },
          "moduleName": "peepchat/components/x-card/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("span");
          dom.setAttribute(el1, "class", "card-title");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 0, 0);
          return morphs;
        },
        statements: [["content", "title", ["loc", [null, [3, 29], [3, 38]]]]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.5.1",
          "loc": {
            "source": null,
            "start": {
              "line": 8,
              "column": 0
            },
            "end": {
              "line": 15,
              "column": 0
            }
          },
          "moduleName": "peepchat/components/x-card/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "card-action right-align");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("button");
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n    ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1, 1]);
          var morphs = new Array(4);
          morphs[0] = dom.createAttrMorph(element0, 'disabled');
          morphs[1] = dom.createAttrMorph(element0, 'class');
          morphs[2] = dom.createAttrMorph(element0, 'onclick');
          morphs[3] = dom.createMorphAt(element0, 1, 1);
          return morphs;
        },
        statements: [["attribute", "disabled", ["get", "buttonDisabled", ["loc", [null, [10, 23], [10, 37]]]]], ["attribute", "class", ["concat", ["btn-flat ", ["subexpr", "if", [["get", "buttonDisabled", ["loc", [null, [10, 61], [10, 75]]]], "disabled", "green white-text"], [], ["loc", [null, [10, 56], [10, 107]]]]]]], ["attribute", "onclick", ["get", "attrs.onSubmit", ["loc", [null, [11, 16], [11, 30]]]]], ["content", "buttonText", ["loc", [null, [12, 6], [12, 20]]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes", "wrong-type"]
        },
        "revision": "Ember@2.5.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 16,
            "column": 0
          }
        },
        "moduleName": "peepchat/components/x-card/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "card-content");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element1 = dom.childAt(fragment, [0]);
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(element1, 1, 1);
        morphs[1] = dom.createMorphAt(element1, 3, 3);
        morphs[2] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "if", [["get", "title", ["loc", [null, [2, 8], [2, 13]]]]], [], 0, null, ["loc", [null, [2, 2], [4, 9]]]], ["content", "yield", ["loc", [null, [5, 2], [5, 11]]]], ["block", "if", [["get", "attrs.onSubmit", ["loc", [null, [8, 6], [8, 20]]]]], [], 1, null, ["loc", [null, [8, 0], [15, 7]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define('peepchat/components/x-input/component', ['exports', 'ember'], function (exports, _ember) {
  var get = _ember['default'].get;
  var computed = _ember['default'].computed;
  exports['default'] = _ember['default'].Component.extend({
    classNames: ['input-field'],
    type: 'text',

    _errorMessages: computed('errors.[]', function () {
      return (get(this, 'errors') || []).join(', ');
    })

  });
});
define("peepchat/components/x-input/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes"]
        },
        "revision": "Ember@2.5.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 15,
            "column": 0
          }
        },
        "moduleName": "peepchat/components/x-input/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("input");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("label");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var element1 = dom.childAt(fragment, [2]);
        var morphs = new Array(9);
        morphs[0] = dom.createAttrMorph(element0, 'value');
        morphs[1] = dom.createAttrMorph(element0, 'onkeyup');
        morphs[2] = dom.createAttrMorph(element0, 'onchange');
        morphs[3] = dom.createAttrMorph(element0, 'placeholder');
        morphs[4] = dom.createAttrMorph(element0, 'type');
        morphs[5] = dom.createAttrMorph(element0, 'class');
        morphs[6] = dom.createAttrMorph(element1, 'data-error');
        morphs[7] = dom.createMorphAt(element1, 0, 0);
        morphs[8] = dom.createMorphAt(element1, 1, 1);
        return morphs;
      },
      statements: [["attribute", "value", ["get", "valueP", ["loc", [null, [2, 10], [2, 16]]]]], ["attribute", "onkeyup", ["subexpr", "action", [["subexpr", "mut", [["get", "value", ["loc", [null, [3, 24], [3, 29]]]]], [], ["loc", [null, [3, 19], [3, 30]]]]], ["value", "target.value"], ["loc", [null, [3, 10], [3, 53]]]]], ["attribute", "onchange", ["subexpr", "action", [["subexpr", "mut", [["get", "value", ["loc", [null, [4, 25], [4, 30]]]]], [], ["loc", [null, [4, 20], [4, 31]]]]], ["value", "target.value"], ["loc", [null, [4, 11], [4, 54]]]]], ["attribute", "placeholder", ["get", "Placeholder", ["loc", [null, [5, 16], [5, 27]]]]], ["attribute", "type", ["get", "type", ["loc", [null, [6, 9], [6, 13]]]]], ["attribute", "class", ["subexpr", "if", [["get", "value", ["loc", [null, [7, 13], [7, 18]]]], ["subexpr", "concat", ["validate", " ", ["subexpr", "if", [["get", "errors.length", ["loc", [null, [10, 16], [10, 29]]]], "invalid", "valid"], [], ["loc", [null, [10, 12], [10, 48]]]]], [], ["loc", [null, [8, 4], [10, 49]]]]], [], ["loc", [null, [7, 8], [10, 51]]]]], ["attribute", "data-error", ["get", "_errorMessages", ["loc", [null, [12, 20], [12, 34]]]]], ["content", "label", ["loc", [null, [12, 37], [12, 46]]]], ["content", "yield", ["loc", [null, [12, 46], [12, 55]]]]],
      locals: [],
      templates: []
    };
  })());
});
define('peepchat/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _emberInflectorLibHelpersPluralize) {
  exports['default'] = _emberInflectorLibHelpersPluralize['default'];
});
define('peepchat/helpers/route-action', ['exports', 'ember-route-action-helper/helpers/route-action'], function (exports, _emberRouteActionHelperHelpersRouteAction) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberRouteActionHelperHelpersRouteAction['default'];
    }
  });
});
define('peepchat/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _emberInflectorLibHelpersSingularize) {
  exports['default'] = _emberInflectorLibHelpersSingularize['default'];
});
define('peepchat/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'peepchat/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _peepchatConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_peepchatConfigEnvironment['default'].APP.name, _peepchatConfigEnvironment['default'].APP.version)
  };
});
define('peepchat/initializers/container-debug-adapter', ['exports', 'ember-resolver/container-debug-adapter'], function (exports, _emberResolverContainerDebugAdapter) {
  exports['default'] = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _emberResolverContainerDebugAdapter['default']);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('peepchat/initializers/data-adapter', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `data-adapter` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'data-adapter',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define('peepchat/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data/-private/core'], function (exports, _emberDataSetupContainer, _emberDataPrivateCore) {

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    App.StoreService = DS.Store.extend({
      adapter: 'custom'
    });
  
    App.PostsController = Ember.ArrayController.extend({
      // ...
    });
  
    When the application is initialized, `App.ApplicationStore` will automatically be
    instantiated, and the instance of `App.PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */

  exports['default'] = {
    name: 'ember-data',
    initialize: _emberDataSetupContainer['default']
  };
});
define('peepchat/initializers/export-application-global', ['exports', 'ember', 'peepchat/config/environment'], function (exports, _ember, _peepchatConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_peepchatConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var value = _peepchatConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_peepchatConfigEnvironment['default'].modulePrefix);
      }

      if (!window[globalName]) {
        window[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete window[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('peepchat/initializers/injectStore', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `injectStore` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'injectStore',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define('peepchat/initializers/materialize-setup', ['exports'], function (exports) {
  exports.initialize = initialize;

  function initialize() /* application */{
    // application.inject('route', 'foo', 'service:foo');
    if (window && window.validate_field) {
      window.validate_field = function () {};
    }
  }

  exports['default'] = {
    name: 'materialize-setup',
    initialize: initialize
  };
});
define('peepchat/initializers/store', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `store` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'store',
    after: 'ember-data',
    initialize: _ember['default'].K
  };
});
define('peepchat/initializers/transforms', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `transforms` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'transforms',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define("peepchat/instance-initializers/browser/clear-double-boot", ["exports"], function (exports) {
  /*globals Ember*/

  // When using `ember fastboot --serve-assets` the application output will
  // already be rendered to the DOM when the actual JavaScript loads. Ember
  // does not automatically clear its `rootElement` so this leads to the
  // "double" applications being visible at once (only the "bottom" one is
  // running via JS and is interactive).
  //
  // This removes any pre-rendered ember-view elements, so that the booting
  // application will replace the pre-rendered output

  exports["default"] = {
    name: "clear-double-boot",

    initialize: function initialize(instance) {
      var originalDidCreateRootView = instance.didCreateRootView;

      instance.didCreateRootView = function () {
        Ember.$(instance.rootElement + ' .ember-view').remove();

        originalDidCreateRootView.apply(instance, arguments);
      };
    }
  };
});
define("peepchat/instance-initializers/ember-data", ["exports", "ember-data/-private/instance-initializers/initialize-store-service"], function (exports, _emberDataPrivateInstanceInitializersInitializeStoreService) {
  exports["default"] = {
    name: "ember-data",
    initialize: _emberDataPrivateInstanceInitializersInitializeStoreService["default"]
  };
});
define('peepchat/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  exports['default'] = _emberResolver['default'];
});
define('peepchat/router', ['exports', 'ember', 'peepchat/config/environment'], function (exports, _ember, _peepchatConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _peepchatConfigEnvironment['default'].locationType
  });

  Router.map(function () {
    this.route('auth', function () {
      this.route('login');
      this.route('register');
    });
  });

  exports['default'] = Router;
});
define('peepchat/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _emberAjaxServicesAjax) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberAjaxServicesAjax['default'];
    }
  });
});
define('peepchat/services/fastboot', ['exports', 'ember'], function (exports, _ember) {

  var alias = _ember['default'].computed.alias;
  var computed = _ember['default'].computed;

  exports['default'] = _ember['default'].Service.extend({
    cookies: alias('_fastbootInfo.cookies'),
    headers: alias('_fastbootInfo.headers'),
    host: computed(function () {
      return this._fastbootInfo.host();
    }),
    isFastBoot: computed(function () {
      return typeof FastBoot !== 'undefined';
    })
  });
});
/* global FastBoot */
define("peepchat/templates/application", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.5.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "peepchat/templates/application.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "outlet", ["loc", [null, [1, 0], [1, 10]]]]],
      locals: [],
      templates: []
    };
  })());
});
define('peepchat/validators/alias', ['exports', 'ember-cp-validations/validators/alias'], function (exports, _emberCpValidationsValidatorsAlias) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCpValidationsValidatorsAlias['default'];
    }
  });
});
define('peepchat/validators/belongs-to', ['exports', 'ember-cp-validations/validators/belongs-to'], function (exports, _emberCpValidationsValidatorsBelongsTo) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCpValidationsValidatorsBelongsTo['default'];
    }
  });
});
define('peepchat/validators/collection', ['exports', 'ember-cp-validations/validators/collection'], function (exports, _emberCpValidationsValidatorsCollection) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCpValidationsValidatorsCollection['default'];
    }
  });
});
define('peepchat/validators/confirmation', ['exports', 'ember-cp-validations/validators/confirmation'], function (exports, _emberCpValidationsValidatorsConfirmation) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCpValidationsValidatorsConfirmation['default'];
    }
  });
});
define('peepchat/validators/date', ['exports', 'ember-cp-validations/validators/date'], function (exports, _emberCpValidationsValidatorsDate) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCpValidationsValidatorsDate['default'];
    }
  });
});
define('peepchat/validators/dependent', ['exports', 'ember-cp-validations/validators/dependent'], function (exports, _emberCpValidationsValidatorsDependent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCpValidationsValidatorsDependent['default'];
    }
  });
});
define('peepchat/validators/ds-error', ['exports', 'ember-cp-validations/validators/ds-error'], function (exports, _emberCpValidationsValidatorsDsError) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCpValidationsValidatorsDsError['default'];
    }
  });
});
define('peepchat/validators/exclusion', ['exports', 'ember-cp-validations/validators/exclusion'], function (exports, _emberCpValidationsValidatorsExclusion) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCpValidationsValidatorsExclusion['default'];
    }
  });
});
define('peepchat/validators/format', ['exports', 'ember-cp-validations/validators/format'], function (exports, _emberCpValidationsValidatorsFormat) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCpValidationsValidatorsFormat['default'];
    }
  });
});
define('peepchat/validators/has-many', ['exports', 'ember-cp-validations/validators/has-many'], function (exports, _emberCpValidationsValidatorsHasMany) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCpValidationsValidatorsHasMany['default'];
    }
  });
});
define('peepchat/validators/inclusion', ['exports', 'ember-cp-validations/validators/inclusion'], function (exports, _emberCpValidationsValidatorsInclusion) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCpValidationsValidatorsInclusion['default'];
    }
  });
});
define('peepchat/validators/length', ['exports', 'ember-cp-validations/validators/length'], function (exports, _emberCpValidationsValidatorsLength) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCpValidationsValidatorsLength['default'];
    }
  });
});
define('peepchat/validators/messages', ['exports', 'ember-cp-validations/validators/messages'], function (exports, _emberCpValidationsValidatorsMessages) {
  /**
   * Copyright 2016, Yahoo! Inc.
   * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
   */

  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCpValidationsValidatorsMessages['default'];
    }
  });
});
define('peepchat/validators/number', ['exports', 'ember-cp-validations/validators/number'], function (exports, _emberCpValidationsValidatorsNumber) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCpValidationsValidatorsNumber['default'];
    }
  });
});
define('peepchat/validators/presence', ['exports', 'ember-cp-validations/validators/presence'], function (exports, _emberCpValidationsValidatorsPresence) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCpValidationsValidatorsPresence['default'];
    }
  });
});
/* jshint ignore:start */



/* jshint ignore:end */

/* jshint ignore:start */

define('peepchat/config/environment', ['ember'], function(Ember) {
  return { 'default': {"modulePrefix":"peepchat","environment":"development","baseURL":"/","locationType":"auto","EmberENV":{"FEATURES":{}},"APP":{"name":"peepchat","version":"0.0.0+46ac1dcf"},"exportApplicationGlobal":true}};
});

/* jshint ignore:end */

/* jshint ignore:start */

if (!runningTests) {
  require("peepchat/app")["default"].create({"name":"peepchat","version":"0.0.0+46ac1dcf"});
}

define('~fastboot/app-factory', ['peepchat/app', 'peepchat/config/environment'], function(App, config) {
  App = App['default'];
  config = config['default'];

  return {
    'default': function() {
      return App.create(config.APP);
    }
  };
});


/* jshint ignore:end */
//# sourceMappingURL=peepchat.map