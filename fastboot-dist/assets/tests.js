define('peepchat/tests/app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass jshint.');
  });
});
define('peepchat/tests/application/adapter.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - application/adapter.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'application/adapter.js should pass jshint.');
  });
});
define('peepchat/tests/auth/login/route.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - auth/login/route.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'auth/login/route.js should pass jshint.');
  });
});
define('peepchat/tests/auth/register/route.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - auth/register/route.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'auth/register/route.js should pass jshint.');
  });
});
define('peepchat/tests/authenticator/oauth2.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - authenticator/oauth2.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'authenticator/oauth2.js should pass jshint.');
  });
});
define('peepchat/tests/authorizers/application.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - authorizers/application.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'authorizers/application.js should pass jshint.');
  });
});
define('peepchat/tests/components/login-card/component.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components/login-card/component.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/login-card/component.js should pass jshint.');
  });
});
define('peepchat/tests/components/register-card/component.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components/register-card/component.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/register-card/component.js should pass jshint.');
  });
});
define('peepchat/tests/components/x-card/component.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components/x-card/component.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/x-card/component.js should pass jshint.');
  });
});
define('peepchat/tests/components/x-input/component.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components/x-input/component.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/x-input/component.js should pass jshint.');
  });
});
define('peepchat/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('peepchat/tests/helpers/destroy-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/destroy-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass jshint.');
  });
});
define('peepchat/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'peepchat/tests/helpers/start-app', 'peepchat/tests/helpers/destroy-app'], function (exports, _qunit, _peepchatTestsHelpersStartApp, _peepchatTestsHelpersDestroyApp) {
  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _peepchatTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        if (options.afterEach) {
          options.afterEach.apply(this, arguments);
        }

        (0, _peepchatTestsHelpersDestroyApp['default'])(this.application);
      }
    });
  };
});
define('peepchat/tests/helpers/module-for-acceptance.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/module-for-acceptance.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass jshint.');
  });
});
define('peepchat/tests/helpers/resolver', ['exports', 'peepchat/resolver', 'peepchat/config/environment'], function (exports, _peepchatResolver, _peepchatConfigEnvironment) {

  var resolver = _peepchatResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _peepchatConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _peepchatConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('peepchat/tests/helpers/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass jshint.');
  });
});
define('peepchat/tests/helpers/start-app', ['exports', 'ember', 'peepchat/app', 'peepchat/config/environment'], function (exports, _ember, _peepchatApp, _peepchatConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _peepchatConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _peepchatApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('peepchat/tests/helpers/start-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/start-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass jshint.');
  });
});
define('peepchat/tests/initializers/materialize-setup.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - initializers/materialize-setup.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'initializers/materialize-setup.js should pass jshint.');
  });
});
define('peepchat/tests/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass jshint.');
  });
});
define('peepchat/tests/router.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - router.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass jshint.');
  });
});
define('peepchat/tests/test-helper', ['exports', 'peepchat/tests/helpers/resolver', 'ember-qunit'], function (exports, _peepchatTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_peepchatTestsHelpersResolver['default']);
});
define('peepchat/tests/test-helper.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - test-helper.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass jshint.');
  });
});
define('peepchat/tests/unit/application/adapter-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('adapter:application', 'Unit | Adapter | application', {
    // Specify the other units that are required for this test.
    // needs: ['serializer:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var adapter = this.subject();
    assert.ok(adapter);
  });
});
define('peepchat/tests/unit/application/adapter-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/application/adapter-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/application/adapter-test.js should pass jshint.');
  });
});
define('peepchat/tests/unit/auth/login/route-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:auth/login', 'Unit | Route | auth/login', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('peepchat/tests/unit/auth/login/route-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/auth/login/route-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/auth/login/route-test.js should pass jshint.');
  });
});
define('peepchat/tests/unit/auth/register/route-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:auth/register', 'Unit | Route | auth/register', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('peepchat/tests/unit/auth/register/route-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/auth/register/route-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/auth/register/route-test.js should pass jshint.');
  });
});
define('peepchat/tests/unit/initializers/materialize-setup-test', ['exports', 'ember', 'peepchat/initializers/materialize-setup', 'qunit'], function (exports, _ember, _peepchatInitializersMaterializeSetup, _qunit) {

  var application = undefined;

  (0, _qunit.module)('Unit | Initializer | materialize setup', {
    beforeEach: function beforeEach() {
      _ember['default'].run(function () {
        application = _ember['default'].Application.create();
        application.deferReadiness();
      });
    }
  });

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    _peepchatInitializersMaterializeSetup['default'].initialize(application);

    // you would normally confirm the results of the initializer here
    assert.ok(true);
  });
});
define('peepchat/tests/unit/initializers/materialize-setup-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/initializers/materialize-setup-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/initializers/materialize-setup-test.js should pass jshint.');
  });
});
define('peepchat/tests/unit/user/model-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('user', 'Unit | Model | user', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('peepchat/tests/unit/user/model-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/user/model-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/user/model-test.js should pass jshint.');
  });
});
define('peepchat/tests/user/model.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - user/model.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'user/model.js should pass jshint.');
  });
});
define('peepchat/tests/utils/user-validations.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - utils/user-validations.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'utils/user-validations.js should pass jshint.');
  });
});
/* jshint ignore:start */

require('peepchat/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map