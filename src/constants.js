/** @flow */
import cliSpinners from 'cli-spinners';
import os from 'os';
import path from 'path';
import type { PathOsBased } from './utils/path';

const userHome = require('user-home');
const packageFile = require('../package.json');

const isWindows = os.platform() === 'win32';

function getDirectory(): PathOsBased {
  if (process.platform === 'win32' && process.env.LOCALAPPDATA) {
    return path.join(process.env.LOCALAPPDATA, 'Bit');
  }

  return path.join(userHome, '.bit');
}

function getCacheDirectory(): PathOsBased {
  if (process.platform === 'darwin' || process.platform === 'linux') {
    return path.join(userHome, 'Library', 'Caches', 'Bit');
  }

  return getDirectory();
}

export const AUTO_GENERATED_STAMP = 'BIT-AUTO-GENERATED';
export const AUTO_GENERATED_MSG = `/* THIS IS A ${AUTO_GENERATED_STAMP} FILE. DO NOT EDIT THIS FILE DIRECTLY. */\n\n`;

export const BIT_DESCRIPTION =
  'bit is a free and open source tool designed for easy use, maintenance and discovery of code components.';

export const BIT_USAGE = '[--version] [--help] <command> [<args>]';

export const BITS_DIRNAME = 'components';

export const BIT_JSON = 'bit.json';

export const GIT_IGNORE = '.gitignore';

export const BIT_MAP = '.bitmap';

export const OLD_BIT_MAP = '.bit.map.json';

export const COMPONENT_ORIGINS = {
  IMPORTED: 'IMPORTED',
  AUTHORED: 'AUTHORED',
  NESTED: 'NESTED' // which is a nested dependency
};

export const TESTS_FORK_LEVEL = {
  NONE: 'NONE',
  ONE: 'ONE',
  COMPONENT: 'COMPONENT'
};

export const DEFAULT_INDEX_NAME = 'index'; // todo: move to bit-javascript

export const DEFAULT_INDEX_EXTS = ['js', 'ts', 'jsx', 'tsx', 'css', 'scss', 'less', 'sass']; // todo: move to bit-javascript

export const NO_PLUGIN_TYPE = 'none';

export const DEFAULT_COMPILER_ID = NO_PLUGIN_TYPE;

export const DEFAULT_TESTER_ID = NO_PLUGIN_TYPE;

export const DEFAULT_PACKAGE_MANAGER = 'npm';

export const DEFAULT_EXTENSIONS = {
  'ext-docs-parser': {
    rawConfig: {},
    options: {
      core: true
    }
  }
};

export const DEFAULT_DIST_DIRNAME = 'dist';

export const DEFAULT_BUNDLE_FILENAME = 'dist.js';

export const DEFAULT_BIT_VERSION = '0.0.1';

export const DEFAULT_BIT_RELEASE_TYPE = 'patch'; // release type of semver (patch, minor, major)

export const DEFAULT_LANGUAGE = 'javascript';

export const DEFAULT_BINDINGS_PREFIX = '@bit';

export const NODE_PATH_COMPONENT_SEPARATOR = '.';

export const DEFAULT_COMPONENTS_DIR_PATH = `${BITS_DIRNAME}/{name}`;

export const DEFAULT_DIR_DEPENDENCIES = '.dependencies';

export const DEFAULT_DEPENDENCIES_DIR_PATH = `${BITS_DIRNAME}/${DEFAULT_DIR_DEPENDENCIES}`;

export const DEFAULT_EJECTED_DIR_ENVS = '@bit-envs';

export const DEFAULT_EJECTED_ENVS_DIR_PATH = `${DEFAULT_EJECTED_DIR_ENVS}/{envType}`;

export const DEFAULT_SEPARATOR = '/';

export const LATEST_BIT_VERSION = 'latest';

export const OBJECTS_DIR = 'objects';

export const NULL_BYTE = '\u0000';

export const SPACE_DELIMITER = ' ';

export const VERSION_DELIMITER = '@';

export const DEPENDENCIES_DIR = 'dependencies';

export const DEFAULT_REMOTES = {};

export const DEFAULT_DEPENDENCIES = {};

export const SPINNER_TYPE = isWindows ? cliSpinners.line : cliSpinners.dots12;

export const DEFAULT_HUB_DOMAIN = 'hub.bitsrc.io';

export const BASE_DOCS_DOMAIN = 'docs.bitsrc.io';

export const DEFAULT_HUB_LOGIN = 'https://bitsrc.io/bit-login';

export const DEFAULT_BIT_ENV = 'production';

export const DEFAULT_ANALYTICS_DOMAIN = 'https://analytics.bitsrc.io/';

export const DEFAULT_REGISTRY_DOMAIN_PREFIX = '@bit';

export const SEARCH_DOMAIN = 'api.bitsrc.io';

export const DEFAULT_SSH_KEY_FILE = `${userHome}/.ssh/id_rsa`;

// Setting this to 99999 to prevent this issue:
// https://github.com/mscdex/ssh2/issues/142
export const DEFAULT_SSH_READY_TIMEOUT = 99999;

export const IGNORE_LIST = [
  '**/.bit.map.json',
  '**/.bitmap',
  '**/.gitignore',
  '**/bit.json',
  '**/bitBindings.js',
  '**/node_modules/**',
  `**/${DEFAULT_EJECTED_DIR_ENVS}/**`,
  '**/package.json',
  '**/package-lock.json',
  '**/yarn.lock',
  '**/LICENSE'
];

/**
 * bit global config keys
 */
export const CFG_USER_EMAIL_KEY = 'user.email';

export const CFG_USER_TOKEN_KEY = 'user.token';

export const CFG_USER_NAME_KEY = 'user.name';

export const CFG_REGISTRY_URL_KEY = 'registry';

export const CFG_SSH_KEY_FILE_KEY = 'ssh_key_file';

export const CFG_HUB_DOMAIN_KEY = 'hub_domain';

export const CFG_HUB_LOGIN_KEY = 'hub_domain_login';

export const CFG_ANALYTICS_DOMAIN_KEY = 'analytics_domain';

export const CFG_ANALYTICS_ANONYMOUS_KEY = 'anonymous_reporting';

export const CFG_ANALYTICS_REPORTING_KEY = 'analytics_reporting';

export const CFG_ANALYTICS_ERROR_REPORTS_KEY = 'error_reporting';

export const CFG_ANALYTICS_ENVIRONMENT_KEY = 'bit_environment';

export const CFG_ANALYTICS_USERID_KEY = 'analytics_id';

export const CFG_REGISTRY_DOMAIN_PREFIX = 'registry_domain_prefix';

export const CFG_POST_EXPORT_HOOK_KEY = 'post_export_hook';

export const CFG_POST_IMPORT_HOOK_KEY = 'post_import_hook';

export const CFG_CI_FUNCTION_PATH_KEY = 'ci_function_path';

export const CFG_CI_ENABLE_KEY = 'ci_enable';

/**
 * git hooks
 */
export const POST_CHECKOUT = 'post-checkout';

export const POST_MERGE = 'post-merge';

export const GIT_HOOKS_NAMES = [POST_CHECKOUT, POST_MERGE];

/**
 * bit hooks
 */
export const PRE_TAG_HOOK = 'pre-tag';

export const POST_TAG_HOOK = 'post-tag';

export const PRE_TAG_ALL_HOOK = 'pre-tag-all';

export const POST_TAG_ALL_HOOK = 'post-tag-all';

export const PRE_IMPORT_HOOK = 'pre-import';

export const POST_IMPORT_HOOK = 'post-import';

export const PRE_EXPORT_HOOK = 'pre-export';

export const POST_EXPORT_HOOK = 'post-export';

export const PRE_SEND_OBJECTS = 'pre-send-objects'; // pre-fetch

export const POST_SEND_OBJECTS = 'post-send-objects'; // post-fetch

export const PRE_RECEIVE_OBJECTS = 'pre-receive-objects'; // pre-put

export const POST_RECEIVE_OBJECTS = 'post-receive-objects'; // post-put

export const PRE_DEPRECATE_REMOTE = 'pre-deprecate-remote';

export const POST_DEPRECATE_REMOTE = 'post-deprecate-remote';

export const PRE_REMOVE_REMOTE = 'pre-remove-remote';

export const POST_REMOVE_REMOTE = 'post-remove-remote';

export const HOOKS_NAMES = [
  PRE_TAG_HOOK,
  POST_TAG_HOOK,
  PRE_TAG_ALL_HOOK,
  POST_TAG_ALL_HOOK,
  PRE_IMPORT_HOOK,
  POST_IMPORT_HOOK,
  PRE_EXPORT_HOOK,
  POST_EXPORT_HOOK,
  PRE_SEND_OBJECTS,
  POST_SEND_OBJECTS,
  PRE_RECEIVE_OBJECTS,
  POST_RECEIVE_OBJECTS,
  PRE_DEPRECATE_REMOTE,
  POST_DEPRECATE_REMOTE,
  PRE_REMOVE_REMOTE,
  POST_REMOVE_REMOTE
];

/**
 * cache root directory
 */
export const CACHE_ROOT = getCacheDirectory();

/**
 * modules cache directory
 */
export const MODULES_CACHE_DIR: PathOsBased = path.join(CACHE_ROOT, 'modules');

/**
 * app cache directory
 */
export const APP_CACHE_DIR = path.join(CACHE_ROOT, 'app');

/**
 * glboal config directories
 */
export const GLOBAL_CONFIG: PathOsBased = path.join(CACHE_ROOT, 'config');

export const GLOBAL_LOGS: PathOsBased = path.join(CACHE_ROOT, 'logs');

export const GLOBAL_CONFIG_FILE = 'config.json';

export const GLOBAL_REMOTES = 'global-remotes.json';

export const BIT_HIDDEN_DIR = '.bit';

export const BIT_GIT_DIR = 'bit';

export const DOT_GIT_DIR = '.git';

/**
 * modules cache filename
 */
export const MODULES_CACHE_FILENAME = path.join(MODULES_CACHE_DIR, '.roadrunner.json');

/**
 * bit registry default URL.
 */
export const BIT_REGISTRY = '';

export const LATEST = 'latest';

export const DEPENDENCY_DELIMITER = '/';

export const BIT_SOURCES_DIRNAME = 'source';

export const BIT_TMP_DIRNAME = 'tmp';

export const BIT_CACHE_DIRNAME = 'cache';

export const LATEST_TESTED_MARK = '*';

export const ASTERISK = '*';

export const SCOPE_JSON = 'scope.json';

export const DEFAULT_RESOLVER = () => '';

/**
 * current bit application version
 */
export const BIT_VERSION = packageFile.version;

export const BIT_INSTALL_METHOD = packageFile.installationMethod;

export const RELEASE_SERVER = 'https://api.bitsrc.io/release';

export const DEFAULT_REGISTRY_URL = 'https://node.bitsrc.io';

export const SKIP_UPDATE_FLAG = '--skip-update';

export const LICENSE_FILENAME = 'LICENSE';

export const ISOLATED_ENV_ROOT = 'environment';

export const NODE_PATH_SEPARATOR = process.platform === 'win32' ? ';' : ':'; // see here https://nodejs.org/api/modules.html#modules_loading_from_the_global_folders
