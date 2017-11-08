/* *****************************************************************************
 * Caleydo - Visualization for Molecular Biology - http://caleydo.org
 * Copyright (c) The Caleydo Team. All rights reserved.
 * Licensed under the new BSD license, available at http://caleydo.org/license
 **************************************************************************** */

import {register} from 'phovea_core/src/plugin';

/**
 * build a registry by registering all phovea modules
 */
//other modules
/// #if include('ordino')
import 'ordino/phovea_registry.js';
/// #endif
/// #if include('dTiles')
import 'dTiles/phovea_registry.js';
/// #endif
//self
register('tdp_dummy',require('./phovea.js'));
